// Remembers where a visitor came from (ad click IDs, UTM tags, referrer and first page),
// so every form enquiry shows which ad, keyword or site brought the lead in.
// Stored in the visitor's own browser for 90 days; the first ad click wins until a new ad click arrives.

const STORAGE_KEY = "dd-attribution";
const MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000;
const PARAMS = [
  "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content",
  "gclid", "gbraid", "wbraid", "msclkid", "fbclid",
] as const;

type Attribution = Partial<Record<(typeof PARAMS)[number], string>> & {
  landing_page?: string;
  referrer?: string;
  first_seen?: string;
};

function read(): Attribution | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as Attribution;
    if (data.first_seen && Date.now() - Date.parse(data.first_seen) > MAX_AGE_MS) return null;
    return data;
  } catch {
    return null;
  }
}

let memory: Attribution | null = null;

/** Call once when the site loads. */
export function captureAttribution() {
  if (typeof window === "undefined") return;
  const query = new URLSearchParams(window.location.search);
  const fromUrl: Attribution = {};
  for (const key of PARAMS) {
    const value = query.get(key);
    if (value) fromUrl[key] = value.slice(0, 200);
  }
  const existing = read();
  const hasNewCampaign = Object.keys(fromUrl).length > 0;
  if (existing && !hasNewCampaign) {
    memory = existing;
    return;
  }

  let referrer = "";
  try {
    const ref = document.referrer ? new URL(document.referrer) : null;
    if (ref && ref.host !== window.location.host) referrer = ref.host;
  } catch {
    // ignore malformed referrers
  }

  memory = {
    ...fromUrl,
    landing_page: window.location.pathname,
    referrer: referrer || "direct",
    first_seen: new Date().toISOString(),
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(memory));
  } catch {
    // Storage blocked: keep it in memory for this visit
  }
}

/** A readable summary for the enquiry email, e.g. "Google Ads (cpc) · campaign: US Search". */
export function getAttributionFields(): Record<string, string> {
  const a = memory ?? read() ?? {};
  let source = "Direct / unknown";
  if (a.gclid || a.gbraid || a.wbraid) source = "Google Ads";
  else if (a.msclkid) source = "Microsoft Ads";
  else if (a.fbclid) source = "Facebook / Instagram";
  else if (a.utm_source) source = a.utm_source;
  else if (a.referrer && a.referrer !== "direct") source = `Referral: ${a.referrer}`;

  const fields: Record<string, string> = { "Lead source": source };
  if (a.utm_medium) fields["Medium"] = a.utm_medium;
  if (a.utm_campaign) fields["Campaign"] = a.utm_campaign;
  if (a.utm_term) fields["Keyword"] = a.utm_term;
  if (a.utm_content) fields["Ad"] = a.utm_content;
  if (a.landing_page) fields["First page visited"] = a.landing_page;
  if (a.gclid) fields["Google click ID"] = a.gclid;
  return fields;
}
