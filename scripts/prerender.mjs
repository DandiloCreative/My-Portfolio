// Runs after the client and server builds (see "build" in package.json).
// For every page it writes dist/<page>/index.html containing:
//   - the fully rendered page content (so Google, Bing and AI crawlers can read it without JavaScript)
//   - that page's own <title>, description, canonical URL and share-preview tags
//   - structured data: FAQ, breadcrumbs, blog article and service details where relevant
// It also writes dist/sitemap.xml from the same list of pages.
import { readFileSync, writeFileSync, mkdirSync, existsSync, copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const { render, ROUTES, SITE_URL } = await import(pathToFileURL(join(root, "dist-ssr", "entry-server.js")).href);

// Keep an untouched copy of the built index.html so this script can be re-run safely
const templateFile = join(root, "dist-ssr", "index.template.html");
if (!existsSync(templateFile)) copyFileSync(join(dist, "index.html"), templateFile);
const template = readFileSync(templateFile, "utf8");
const today = new Date().toISOString().slice(0, 10);

const escapeAttr = (v) => v.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const jsonLd = (obj) => `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, "\\u003c")}</script>`;
const urlFor = (path) => SITE_URL + (path === "/" ? "/" : path);

function replaceOnce(html, regex, replacement, label) {
  if (!regex.test(html)) throw new Error(`prerender: could not find ${label} in index.html`);
  return html.replace(regex, replacement);
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
      image: `${SITE_URL}/og-image.jpg`,
      author: { "@type": "Organization", name: "Dandilo Digitals", url: SITE_URL },
      publisher: { "@type": "Organization", name: "Dandilo Digitals", logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` } },
    });
  }
  if (c?.kind === "service") {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: c.label,
      description: c.description,
      url: urlFor(c.path),
      areaServed: { "@type": "Country", name: "United States" },
      provider: { "@type": "ProfessionalService", name: "Dandilo Digitals", url: SITE_URL },
    });
  }
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
  }
  // The homepage FAQ's structured data only belongs on pages that show that FAQ
  if (!route.mainFaq) html = replaceOnce(html, FAQ_BLOCK, "", "FAQ schema");
  const extra = extraSchema(route);
  if (extra) html = html.replace("</head>", `  ${extra}\n</head>`);
  html = replaceOnce(html, /<div id="root"><\/div>/, `<div id="root">${appHtml}</div>`, "#root");

  const file = route.path === "/" ? join(dist, "index.html") : join(dist, route.path.slice(1), "index.html");
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  console.log(`prerender: ${route.path}  (${Math.round(appHtml.length / 1024)} KB of content)`);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map((r) => `  <url><loc>${urlFor(r.path)}</loc><lastmod>${r.content?.date ?? today}</lastmod></url>`).join("\n")}
</urlset>
`;
writeFileSync(join(dist, "sitemap.xml"), sitemap);
console.log(`prerender: sitemap.xml with ${ROUTES.length} pages`);
