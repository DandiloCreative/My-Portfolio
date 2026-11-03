// Meta Conversions API: sends website leads and WhatsApp clicks to Meta from our server,
// so they're still counted when the browser blocks the Pixel.
// Switched off until META_CAPI_TOKEN is set in Vercel (Project → Settings → Environment Variables).
// Get the token in Meta Events Manager → your pixel → Settings → Conversions API → Generate access token.
// Optional: META_TEST_EVENT_CODE (from Events Manager → Test events) to check it's working.
import { createHash } from "node:crypto";

const PIXEL_ID = "1153704343895256";
const API_VERSION = "v23.0";
const EVENTS = new Set(["Lead", "Contact"]);
const SITE = /^https:\/\/(www\.)?dandilodigitals\.com$/;

// Light per-server-instance limit so one visitor can't flood Meta with fake events.
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 20;
const hits = new Map();
function tooMany(ip) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now - entry.start > WINDOW_MS) {
    if (hits.size > 5000) hits.clear();
    hits.set(ip, { start: now, count: 1 });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

const hash = (value) => createHash("sha256").update(value).digest("hex");
const text = (value, max = 500) => (typeof value === "string" && value.trim() ? value.trim().slice(0, max) : undefined);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const token = process.env.META_CAPI_TOKEN;
  if (!token) return res.status(204).end();

  // Only accept events sent by our own website (browsers always send Origin on these requests)
  if (!SITE.test(req.headers.origin || "")) return res.status(403).end();
  const ip = String(req.headers["x-forwarded-for"] || "").split(",")[0].trim() || "unknown";
  if (tooMany(ip)) return res.status(429).end();
  if (Number(req.headers["content-length"] || 0) > 10_000) return res.status(413).end();

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      body = null;
    }
  }
  if (!body || !EVENTS.has(body.event_name) || !text(body.event_id, 100)) return res.status(400).end();

  const user_data = {
    client_ip_address: text(String(req.headers["x-forwarded-for"] || "").split(",")[0]),
    client_user_agent: text(req.headers["user-agent"]),
    fbp: text(body.fbp),
    fbc: text(body.fbc),
  };
  const email = text(body.email)?.toLowerCase();
  if (email) user_data.em = [hash(email)];
  const phone = text(body.phone)?.replace(/\D/g, "");
  if (phone && phone.length >= 7) user_data.ph = [hash(phone)];
  const firstName = text(body.name)?.split(/\s+/)[0].toLowerCase();
  if (firstName) user_data.fn = [hash(firstName)];

  const event = {
    event_name: body.event_name,
    event_time: Math.floor(Date.now() / 1000),
    event_id: text(body.event_id, 100),
    action_source: "website",
    event_source_url: text(body.event_source_url, 1000),
    user_data,
  };
  const contentName = text(body.content_name, 100);
  if (contentName) event.custom_data = { content_name: contentName };

  const payload = { data: [event] };
  if (process.env.META_TEST_EVENT_CODE) payload.test_event_code = process.env.META_TEST_EVENT_CODE;

  try {
    const r = await fetch(
      `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events?access_token=${encodeURIComponent(token)}`,
      { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) }
    );
    if (!r.ok) console.error("Meta CAPI error", r.status, await r.text());
    return res.status(r.ok ? 200 : 502).json({ ok: r.ok });
  } catch (err) {
    console.error("Meta CAPI request failed", err);
    return res.status(502).json({ ok: false });
  }
}
