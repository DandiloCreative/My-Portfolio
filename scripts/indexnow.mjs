// Tells Bing (and other IndexNow search engines) about every page on the site,
// so new or updated pages get crawled quickly. Run after a deploy is live:
//   npm run indexnow
// The key file public/8b4a733375358ab53159020c114aa59d.txt proves we own the domain.
const KEY = "8b4a733375358ab53159020c114aa59d";
const HOST = "dandilodigitals.com";

const sitemap = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!urlList.length) throw new Error("No URLs found in the live sitemap");

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: submitted ${urlList.length} URLs -> HTTP ${res.status} ${res.statusText}`);
if (res.status >= 400) console.log(await res.text());
