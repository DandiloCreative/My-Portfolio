// Draws the branded cover image for a blog post (1200x630, the social share size).
// Output: public/blog-images/<slug>.webp, <slug>-600.webp (blog cards) and <slug>.jpg (share preview, Instagram).
//
// Needs the "sharp" image library, which is not a site dependency. Install it outside the project:
//   mkdir -p /tmp/imgtool && npm install --prefix /tmp/imgtool sharp
// Then run (one post or a list):
//   NODE_PATH=/tmp/imgtool/node_modules node scripts/blog-cover.cjs '{"slug":"my-post","title":"My Post Title","eyebrow":"Guide","glyph":"$"}'
// "glyph" is the big faint symbol on the right: 1 to 3 characters, e.g. "$", "VS", "?", "!", "✓", "↗", "</>". Default "★".
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const SITE = path.join(__dirname, "..");
const OUT = path.join(SITE, "public/blog-images");
fs.mkdirSync(OUT, { recursive: true });
const logo = fs.readFileSync(path.join(SITE, "public/logo.png")).toString("base64");
const FONT = "Segoe UI, Arial, Liberation Sans, DejaVu Sans, sans-serif";

const input = JSON.parse(process.argv[2] || "[]");
const posts = Array.isArray(input) ? input : [input];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function wrap(text, max) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = "";
  for (const w of words) {
    if ((line + " " + w).trim().length > max && line) {
      lines.push(line);
      line = w;
    } else line = (line + " " + w).trim();
  }
  if (line) lines.push(line);
  return lines;
}

function svg(post) {
  let size = 68, lines = wrap(post.title, 24);
  if (lines.length > 3) { size = 58; lines = wrap(post.title, 28); }
  if (lines.length > 4) { size = 50; lines = wrap(post.title, 32); }
  const lh = Math.round(size * 1.15);
  const top = 300 - ((lines.length - 1) * lh) / 2;
  const glyph = (post.glyph || "★").slice(0, 3);
  const eyebrow = (post.eyebrow || "Guide").toUpperCase();
  const gsize = glyph.length > 2 ? 230 : glyph.length > 1 ? 270 : 380;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="v" cx="0.18" cy="0.1" r="0.7"><stop offset="0" stop-color="#7c3aed" stop-opacity="0.55"/><stop offset="1" stop-color="#7c3aed" stop-opacity="0"/></radialGradient>
    <radialGradient id="c" cx="0.92" cy="0.95" r="0.6"><stop offset="0" stop-color="#0891b2" stop-opacity="0.45"/><stop offset="1" stop-color="#0891b2" stop-opacity="0"/></radialGradient>
    <linearGradient id="t" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#a78bfa"/><stop offset="0.5" stop-color="#818cf8"/><stop offset="1" stop-color="#22d3ee"/></linearGradient>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#a78bfa" stop-opacity="0.35"/><stop offset="1" stop-color="#22d3ee" stop-opacity="0.18"/></linearGradient>
    <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse"><rect width="4" height="4" fill="#ffffff" fill-opacity="0.05"/></pattern>
  </defs>
  <rect width="1200" height="630" fill="#09090b"/>
  <rect width="1200" height="630" fill="url(#v)"/>
  <rect width="1200" height="630" fill="url(#c)"/>
  <rect width="1200" height="630" fill="url(#dots)"/>
  <text x="1110" y="${330 + gsize * 0.33}" text-anchor="end" font-family="${FONT}" font-weight="800" font-size="${gsize}" fill="url(#g)">${esc(glyph)}</text>
  <rect x="70" y="62" rx="22" ry="22" width="${36 + eyebrow.length * 13}" height="44" fill="#ffffff" fill-opacity="0.07" stroke="#ffffff" stroke-opacity="0.15"/>
  <text x="${70 + 18}" y="92" font-family="${FONT}" font-weight="700" font-size="20" letter-spacing="2.5" fill="url(#t)">${esc(eyebrow)}</text>
  ${lines.map((l, i) => `<text x="70" y="${top + i * lh}" font-family="${FONT}" font-weight="800" font-size="${size}" fill="#ffffff">${esc(l)}</text>`).join("\n  ")}
  <rect x="70" y="${top + (lines.length - 1) * lh + 34}" width="120" height="6" rx="3" fill="url(#t)"/>
  <image href="data:image/png;base64,${logo}" x="64" y="520" width="56" height="56"/>
  <text x="132" y="548" font-family="${FONT}" font-weight="800" font-size="24" letter-spacing="3" fill="#ffffff">DANDILO DIGITALS</text>
  <text x="132" y="576" font-family="${FONT}" font-size="20" fill="#a1a1aa">dandilodigitals.com</text>
</svg>`;
}

(async () => {
  for (const post of posts) {
    if (!/^[a-z0-9-]+$/.test(post.slug || "") || !post.title) throw new Error("Each post needs a lowercase slug and a title");
    const png = await sharp(Buffer.from(svg(post))).png().toBuffer();
    const big = await sharp(png).webp({ quality: 80 }).toFile(path.join(OUT, `${post.slug}.webp`));
    const small = await sharp(png).resize({ width: 600 }).webp({ quality: 78 }).toFile(path.join(OUT, `${post.slug}-600.webp`));
    const jpg = await sharp(png).jpeg({ quality: 82, mozjpeg: true }).toFile(path.join(OUT, `${post.slug}.jpg`));
    console.log(post.slug, Math.round(big.size / 1024) + "KB", Math.round(small.size / 1024) + "KB", Math.round(jpg.size / 1024) + "KB jpg");
  }
})().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
