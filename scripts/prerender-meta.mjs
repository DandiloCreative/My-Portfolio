// Runs after `vite build`.
// The site is a single-page app, so every URL normally gets the same index.html.
// This writes a copy of index.html for each page (dist/services/index.html, ...)
// with that page's own <title>, description, canonical URL and share tags,
// so Google and link previews see the right details without running JavaScript.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const SITE_URL = "https://dandilodigitals.com";

const pages = JSON.parse(readFileSync(join(root, "src/app/pages.json"), "utf8"));
const template = readFileSync(join(dist, "index.html"), "utf8");

const escapeAttr = (v) => v.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function replaceOnce(html, regex, replacement, label) {
  if (!regex.test(html)) throw new Error(`prerender-meta: could not find ${label} in index.html`);
  return html.replace(regex, replacement);
}

function renderPage(path, meta) {
  const url = SITE_URL + (path === "/" ? "/" : path);
  const title = escapeAttr(meta.title);
  const desc = escapeAttr(meta.description);
  let html = template;
  html = replaceOnce(html, /<title>[^<]*<\/title>/, `<title>${title}</title>`, "<title>");
  html = replaceOnce(html, /(<meta name="description"\s+content=")[^"]*/, `$1${desc}`, "meta description");
  html = replaceOnce(html, /(<link rel="canonical" href=")[^"]*/, `$1${url}`, "canonical");
  html = replaceOnce(html, /(<meta property="og:url" content=")[^"]*/, `$1${url}`, "og:url");
  html = replaceOnce(html, /(<meta property="og:title" content=")[^"]*/, `$1${title}`, "og:title");
  html = replaceOnce(html, /(<meta property="og:description" content=")[^"]*/, `$1${desc}`, "og:description");
  html = replaceOnce(html, /(<meta name="twitter:title" content=")[^"]*/, `$1${title}`, "twitter:title");
  html = replaceOnce(html, /(<meta name="twitter:description" content=")[^"]*/, `$1${desc}`, "twitter:description");
  if (!meta.faq) {
    // FAQ structured data must only appear on pages that show the FAQ
    html = replaceOnce(html, /\s*<script type="application\/ld\+json" id="faq-schema">[\s\S]*?<\/script>/, "", "FAQ schema");
  }
  return html;
}

for (const [path, meta] of Object.entries(pages)) {
  const html = renderPage(path, meta);
  const file = path === "/" ? join(dist, "index.html") : join(dist, path.slice(1), "index.html");
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  console.log(`prerender-meta: ${path} -> ${meta.title}`);
}
