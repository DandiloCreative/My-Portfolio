// Runs after the client and server builds (see "build" in package.json).
// For every page it writes dist/<page>/index.html containing:
//   - the fully rendered page content (so Google, Bing and AI crawlers can read it without JavaScript)
//   - that page's own <title>, description, canonical URL and share-preview tags
//   - structured data: FAQ, breadcrumbs, blog article and service details where relevant
// It also writes dist/sitemap.xml and dist/llms.txt from the same list of pages,
// and stops the build if any page breaks a basic SEO rule (see "SEO checks" at the end).
import { readFileSync, writeFileSync, mkdirSync, existsSync, copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const { render, ROUTES, SITE_URL, pricingPackages } = await import(pathToFileURL(join(root, "dist-ssr", "entry-server.js")).href);

// Keep an untouched copy of the built index.html so this script can be re-run safely
const templateFile = join(root, "dist-ssr", "index.template.html");
if (!existsSync(templateFile)) copyFileSync(join(dist, "index.html"), templateFile);
const template = readFileSync(templateFile, "utf8");
const today = new Date().toISOString().slice(0, 10);

const escapeAttr = (v) => v.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const jsonLd = (obj) => `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, "\\u003c")}</script>`;
const urlFor = (path) => SITE_URL + (path === "/" ? "/" : path);
// Same id as the main ProfessionalService block in index.html, so Google knows it's one business
const ORG = { "@type": "ProfessionalService", "@id": `${SITE_URL}/#organization`, name: "Dandilo Digitals", url: SITE_URL };
const MARKETS = ["United States", "Canada", "United Kingdom", "Australia", "Ireland", "New Zealand"];
const problems = [];
const seen = { title: {}, description: {} };

// Replacement text is inserted exactly as written. A leading "$1" keeps the matched tag start;
// any other "$" (prices like $1,500 in descriptions) stays a plain dollar sign.
function replaceOnce(html, regex, replacement, label) {
  if (!regex.test(html)) throw new Error(`prerender: could not find ${label} in index.html`);
  return html.replace(regex, (_match, g1) => (replacement.startsWith("$1") && g1 !== undefined ? g1 + replacement.slice(2) : replacement));
}

const FAQ_BLOCK = /\s*<script type="application\/ld\+json" id="faq-schema">[\s\S]*?<\/script>/;
const PARENTS = { service: { path: "/services", name: "Services" }, blog: { path: "/blog", name: "Blog" } };

function extraSchema(route) {
  const blocks = [];
  const c = route.content;
  if (route.path !== "/") {
    const crumbs = [{ name: "Home", path: "/" }];
    const parent = c && PARENTS[c.kind];
    if (parent) crumbs.push({ name: parent.name, path: parent.path });
    crumbs.push({ name: c ? c.label : route.title.split(" | ")[0], path: route.path });
    blocks.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((cr, i) => ({ "@type": "ListItem", position: i + 1, name: cr.name, item: urlFor(cr.path) })),
    });
  }
  if (c?.faqs?.length) {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: c.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    });
  }
  if (c?.kind === "blog") {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: c.h1,
      description: c.description,
      datePublished: c.date,
      dateModified: c.date,
      mainEntityOfPage: urlFor(c.path),
      image: `${SITE_URL}/blog-images/${c.path.replace("/blog/", "")}.jpg`,
      author: ORG,
      publisher: { ...ORG, logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` } },
    });
  }
  if (c?.kind === "service") {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: c.label,
      description: c.description,
      url: urlFor(c.path),
      areaServed: (c.areaServed ?? MARKETS).map((name) => ({ "@type": "Country", name })),
      provider: ORG,
    });
  }
  if (route.schema) blocks.push(...route.schema);
  return blocks.map(jsonLd).join("\n  ");
}

for (const route of ROUTES) {
  const url = urlFor(route.path);
  const title = escapeAttr(route.title);
  const desc = escapeAttr(route.description);
  const appHtml = await render(route.path);

  let html = template;
  html = replaceOnce(html, /<title>[^<]*<\/title>/, `<title>${title}</title>`, "<title>");
  html = replaceOnce(html, /(<meta name="description"\s+content=")[^"]*/, `$1${desc}`, "meta description");
  html = replaceOnce(html, /(<link rel="canonical" href=")[^"]*/, `$1${url}`, "canonical");
  html = replaceOnce(html, /(<meta property="og:url" content=")[^"]*/, `$1${url}`, "og:url");
  html = replaceOnce(html, /(<meta property="og:title" content=")[^"]*/, `$1${title}`, "og:title");
  html = replaceOnce(html, /(<meta property="og:description" content=")[^"]*/, `$1${desc}`, "og:description");
  html = replaceOnce(html, /(<meta name="twitter:title" content=")[^"]*/, `$1${title}`, "twitter:title");
  html = replaceOnce(html, /(<meta name="twitter:description" content=")[^"]*/, `$1${desc}`, "twitter:description");
  if (route.content?.kind === "blog") {
    html = replaceOnce(html, /(<meta property="og:type" content=")[^"]*/, `$1article`, "og:type");
    const cover = `${SITE_URL}/blog-images/${route.path.replace("/blog/", "")}.jpg`;
    html = replaceOnce(html, /(<meta property="og:image" content=")[^"]*/, `$1${cover}`, "og:image");
    html = replaceOnce(html, /(<meta name="twitter:image" content=")[^"]*/, `$1${cover}`, "twitter:image");
  }
  if (route.noindex) {
    html = replaceOnce(html, /(<meta name="robots" content=")[^"]*/, `$1noindex, follow`, "robots");
    html = replaceOnce(html, /(<meta name="googlebot" content=")[^"]*/, `$1noindex, follow`, "googlebot");
  }
  // The homepage FAQ's structured data only belongs on pages that show that FAQ
  if (!route.mainFaq) html = replaceOnce(html, FAQ_BLOCK, "", "FAQ schema");
  const extra = extraSchema(route);
  if (extra) html = html.replace("</head>", () => `  ${extra}\n</head>`);
  html = replaceOnce(html, /<div id="root"><\/div>/, `<div id="root">${appHtml}</div>`, "#root");

  checkPage(route, html, appHtml);

  const file = route.path === "/" ? join(dist, "index.html") : join(dist, route.path.slice(1), "index.html");
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  console.log(`prerender: ${route.path}  (${Math.round(appHtml.length / 1024)} KB of content)`);
}

const indexed = ROUTES.filter((r) => !r.noindex);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexed.map((r) => `  <url><loc>${urlFor(r.path)}</loc><lastmod>${r.content?.date ?? today}</lastmod></url>`).join("\n")}
</urlset>
`;
writeFileSync(join(dist, "sitemap.xml"), sitemap);
console.log(`prerender: sitemap.xml with ${indexed.length} pages`);

// 404 page: Vercel serves dist/404.html with a real "404 Not Found" status for unknown addresses,
// so search engines don't treat made-up URLs as real pages.
{
  const appHtml = await render("/404-page-not-found");
  let html = template;
  html = replaceOnce(html, /<title>[^<]*<\/title>/, `<title>Page Not Found | Dandilo Digitals</title>`, "<title>");
  html = replaceOnce(html, /(<meta name="robots" content=")[^"]*/, `$1noindex, follow`, "robots");
  html = replaceOnce(html, /(<meta name="googlebot" content=")[^"]*/, `$1noindex, follow`, "googlebot");
  html = html.replace(/\s*<link rel="canonical" href="[^"]*"\s*\/?>/, "");
  html = replaceOnce(html, FAQ_BLOCK, "", "FAQ schema");
  html = replaceOnce(html, /<div id="root"><\/div>/, `<div id="root">${appHtml}</div>`, "#root");
  writeFileSync(join(dist, "404.html"), html);
  console.log("prerender: 404.html");
}

// llms.txt: a plain-text summary of the business and its key pages for AI assistants (ChatGPT, Perplexity, Claude...)
{
  const money = (n) => "$" + n.toLocaleString("en-US");
  const list = (filter) =>
    indexed
      .filter(filter)
      .map((r) => `- [${r.content?.label ?? r.title.split(" | ")[0]}](${urlFor(r.path)}): ${r.description}`)
      .join("\n");
  const txt = `# Dandilo Digitals

> Dandilo Digitals (dandilodigitals.com) is a web design and development agency for small businesses in the US, UK and Canada. We build WordPress, Shopify, Wix Studio, Squarespace, GoHighLevel and custom-coded websites designed to win calls, bookings and sales. Every project can start with a free website audit.

- Website: ${SITE_URL}
- Email: hello@dandilodigitals.com
- WhatsApp / phone: +1 224-620-0930
- Works remotely with clients in the United States, United Kingdom, Canada, Australia, Ireland and New Zealand
- Prices are in US dollars and are "from" prices; every client gets a fixed quote before work starts

## Prices

${pricingPackages.map((p) => `- ${p.name}: from ${money(p.price)}${p.per ?? ""}. ${p.summary}`).join("\n")}

Full details: ${SITE_URL}/pricing

## Main pages

${list((r) => !r.content)}

## Services

${list((r) => r.content?.kind === "service")}

## Industries

${list((r) => r.path.startsWith("/industries/"))}

## Countries

${list((r) => r.path.startsWith("/web-design-"))}

## Guides

${list((r) => r.content?.kind === "blog")}
`;
  writeFileSync(join(dist, "llms.txt"), txt);
  console.log(`prerender: llms.txt (${Math.round(txt.length / 1024)} KB)`);
}

// SEO checks: the build fails (so a broken site never goes live) if a page loses its title, description,
// H1 or canonical, if two pages share a title or description, or if the business details go wrong.
function checkPage(route, html, appHtml) {
  const p = route.path;
  const fail = (msg) => problems.push(`${p}: ${msg}`);
  if (!route.title?.trim()) fail("missing title");
  if (!route.description?.trim()) fail("missing description");
  else if (route.description.length > 170) fail(`description is ${route.description.length} characters (max 170)`);
  const h1s = (appHtml.match(/<h1[\s>]/g) ?? []).length;
  if (h1s !== 1) fail(`${h1s} H1 headings (needs exactly 1)`);
  if (!route.noindex && !html.includes(`<link rel="canonical" href="${urlFor(p)}"`)) fail("canonical doesn't point to itself");
  if (route.noindex && !/<meta name="robots" content="noindex/.test(html)) fail("should be noindex");
  if (/Ibadan|"Nigeria"/.test(html)) fail("old Ibadan / Nigeria business details");
  if (route.content?.kind === "blog") {
    const slug = p.replace("/blog/", "");
    for (const f of [`${slug}.jpg`, `${slug}.webp`, `${slug}-600.webp`]) {
      if (!existsSync(join(root, "public", "blog-images", f))) fail(`missing cover image public/blog-images/${f} (make it with scripts/blog-cover.cjs)`);
    }
    if (!route.content.date) fail("blog post has no date");
  }
  for (const block of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(block[1]); } catch { fail("broken structured data (JSON-LD)"); }
  }
  if (!route.noindex) {
    for (const key of ["title", "description"]) {
      const v = route[key];
      if (seen[key][v]) fail(`same ${key} as ${seen[key][v]}`);
      else seen[key][v] = p;
    }
  }
  if (p === "/pricing") {
    for (const pkg of pricingPackages) {
      const shown = pkg.price.toLocaleString("en-US");
      if (!appHtml.includes(shown)) fail(`price for ${pkg.name} ($${shown}) isn't on the page`);
    }
  }
}

if (indexed.length < 50) problems.push(`sitemap: only ${indexed.length} pages (expected 50+)`);
if (problems.length) {
  console.error(`\nSEO checks failed (${problems.length}):\n  - ${problems.join("\n  - ")}\n`);
  process.exit(1);
}
console.log(`SEO checks: all ${ROUTES.length} pages passed`);
