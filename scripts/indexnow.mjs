// Tells Bing (and other IndexNow search engines, which also feed ChatGPT search) about new or updated pages,
// so they get crawled within hours instead of weeks.
//
//   npm run indexnow             -> submit every page in the live sitemap
//   npm run indexnow -- --changed -> submit only pages whose content changed since the last run
//
// The --changed mode runs automatically after every production deploy (.github/workflows/indexnow.yml).
// It remembers a fingerprint of each page in .indexnow-state.json (kept in the GitHub Actions cache).
// The key file public/8b4a733375358ab53159020c114aa59d.txt proves we own the domain.
import { createHash } from "node:crypto";
import { existsSync, readFileSync, writeFileSync } from "node:fs";

const KEY = "8b4a733375358ab53159020c114aa59d";
const HOST = "dandilodigitals.com";
const STATE_FILE = ".indexnow-state.json";
const changedOnly = process.argv.includes("--changed");

async function get(url) {
  for (let i = 0; ; i++) {
    try {
      const res = await fetch(url, { headers: { "User-Agent": "DandiloIndexNow/1.0" }, signal: AbortSignal.timeout(20000) });
      if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
      return await res.text();
    } catch (e) {
      if (i >= 2) throw e;
      await new Promise((r) => setTimeout(r, 3000));
    }
  }
}

const sitemap = await get(`https://${HOST}/sitemap.xml`);
const allUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!allUrls.length) throw new Error("No URLs found in the live sitemap");

let urlList = allUrls;
const state = {};
if (changedOnly) {
  const before = existsSync(STATE_FILE) ? JSON.parse(readFileSync(STATE_FILE, "utf8")) : {};
  urlList = [];
  for (const url of allUrls) {
    const html = await get(url);
    // Fingerprint only what search engines index: title, description and the page content.
    // Script and stylesheet file names change on every build, so they're left out.
    const title = html.match(/<title>[\s\S]*?<\/title>/)?.[0] ?? "";
    const desc = html.match(/<meta name="description"[^>]*>/)?.[0] ?? "";
    const body = (html.split('<div id="root">')[1] ?? html).replace(/<script[\s\S]*?<\/script>/g, "");
    state[url] = createHash("sha256").update(title + desc + body).digest("hex");
    if (before[url] !== state[url]) urlList.push(url);
  }
  writeFileSync(STATE_FILE, JSON.stringify(state, null, 1));
  console.log(`IndexNow: ${urlList.length} of ${allUrls.length} pages are new or changed`);
  if (!urlList.length) process.exit(0);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: submitted ${urlList.length} URLs -> HTTP ${res.status} ${res.statusText}`);
urlList.slice(0, 20).forEach((u) => console.log("  " + u));
if (res.status >= 400) {
  console.log(await res.text());
  process.exit(1);
}
