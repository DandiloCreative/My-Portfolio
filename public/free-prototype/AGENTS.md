# AGENTS.md: Dandilo Digitals "Free Prototype" landing page

Read this file before changing anything in this folder.

## What this is

A single-purpose landing page for **Dandilo Digitals Agency** (https://dandilodigitals.com), a web design agency for small businesses.

- **Live URL:** `https://dandilodigitals.com/free-prototype`. Use this address in ads; `/free-prototype/` redirects to it.
- **Traffic source:** Meta (Facebook/Instagram) ads targeting US small-business owners aged 28–55 in Los Angeles, New York, Miami, Houston and Chicago.
- **One job:** turn ad visitors into free-prototype requests through the form. Success means cost per lead, not clicks.
- **Most visitors are on phones**, inside the Facebook or Instagram in-app browser. Design and test for mobile first.
- **Not indexed:** the page is `noindex` and not in the sitemap, so it doesn't compete with the main site in Google.

## The offer (must match the ads exactly)

- Your new website designed **before you pay**: a free homepage prototype within **48 hours**
- **Complimentary Google Business Profile setup** with every website
- Websites **from $300**, with a fixed quote before any work starts
- A reply to every enquiry within **24 hours**

If the ad copy changes, update the hero headline to match. The hero headline must repeat the ad's promise.

## Files

```
public/free-prototype/     (in the main website repo; Vite copies it to the site as-is)
├── index.html        Landing page (HTML + inline CSS, no build step)
├── thank-you.html    Shown after a successful submit; fires the Meta "Lead" event
├── settings.js       Settings (see below)
├── landing.js        WhatsApp links, sticky mobile button, form sending
├── pixel.js          Meta Pixel: PageView, Lead, Contact
├── img/
│   ├── logo.png          DG logo, transparent background
│   ├── hero-work.webp    Grid of real project screenshots used in the hero (880×880)
│   └── portfolio.webp    Closer look at three projects for "Our work" (800×800)
└── AGENTS.md         This file
```

There's no framework, no dependencies and no build step. Keep it that way unless the owner asks.

**Why the JavaScript is in separate files:** the website's security policy (`Content-Security-Policy` in `vercel.json`) blocks inline `<script>` code. Inline CSS is allowed. To add a new third-party service, also add its domain to that policy.

## Settings (`settings.js`, shared by both pages)

```js
window.DD = {
  CRM_URL: "https://dandilo-crm-api.vercel.app",  // leads go to Dandilo CRM (Leads + Inbox)
  WEB3FORMS_KEY: "…",                             // and by email to hello@dandilodigitals.com
  TURNSTILE_SITE_KEY: "…",                        // Cloudflare "are you human?" check used by the CRM
  WHATSAPP_NUMBER: "12246200930",                 // digits only, with country code
  WHATSAPP_TEXT: "Hi Dandilo Digitals, I'd like my free website prototype.",
  PIXEL_ID: "1153704343895256"                    // Meta Pixel
};
```

- Values containing `YOUR_` are placeholders. The Pixel doesn't load until `PIXEL_ID` is real.
- All the keys above are public by design. Never put a secret key in these files.

## Page structure (top to bottom)

1. **Header:** logo + WhatsApp button. **No navigation menu**, which keeps visitors on the page.
2. **Hero:** headline, subline, "Get My Free Prototype" + "See Our Work", trust line (5.0 Google · from $300 · free Google Business Profile).
3. **Stats strip:** 500+ projects · 48 hrs · 5.0 ★ · $0 until you love it.
4. **Who it's for:** salons & spas, barbershops, restaurants & food trucks, auto repair.
5. **How it works:** 3 steps.
6. **Our work** (`#our-work`): project list + portfolio image.
7. **What's included** + price box.
8. **Reviews:** 3 Google reviews.
9. **FAQ:** `<details>` accordions.
10. **Form** (`#get-prototype`): 6 fields.
11. **Footer** + **sticky mobile CTA bar.** The bar is hidden on desktop, while the hero buttons are on screen, and while the form is on screen.

Every call-to-action button points to `#get-prototype` ("See Our Work" scrolls to `#our-work`). Don't add links that leave the page, except WhatsApp and the privacy policy (`/privacy`).

## Form

Fields: name, business, email, phone, business_type, has_website. All are required.

**Sending:** the form is sent to **two places at the same time** and counts as sent if either one works:

1. **Dandilo CRM:** `POST {CRM_URL}/api/public/leads`.
   - The lead appears in Leads and the Inbox with the form "Free prototype (ads)".
   - Its source is "Facebook / Instagram" when the URL has `fbclid`, otherwise `utm_source`, otherwise "Free prototype page". UTM campaign and term are saved too.
   - The CRM requires a Cloudflare Turnstile token. The Turnstile script only loads once the visitor starts filling in the form, so it doesn't slow down the page.
2. **Email:** Web3Forms sends the details to hello@dandilodigitals.com.

**Then:**
- On success, the browser goes to `/free-prototype/thank-you`.
- A hidden `source` field records `free-prototype-landing` plus the URL query string (`utm_*`, `fbclid`), so each lead can be traced to its ad.
- `_gotcha` is a honeypot field for spam. Keep it.
- On failure, the page shows an error message with a WhatsApp fallback. The visitor's typed data is never lost.
- Don't add fields. Each extra field lowers conversions.

## Tracking (Meta Pixel)

| Event | Where |
|---|---|
| `PageView` | Both pages |
| `Lead` | `thank-you.html`, only right after a real submit. The form sets a one-time flag, so refreshing the thank-you page or visiting it directly does **not** count a lead. This is the conversion the ads optimise for. |
| `Contact` | A click on any WhatsApp button (`.js-wa`) |

Never fire `Lead` anywhere except the thank-you page, or ad results will be wrong.

## Brand

- Colours: purple `#8b5cf6` / `#a78bfa`, turquoise `#22d3ee`, dark background `#0a0a12`, light sections `#f6f5fb`.
- Accent gradient: `linear-gradient(90deg,#a78bfa,#22d3ee)`.
- Font: Outfit (Google Fonts, `display=swap`), with a system-ui fallback.
- Always use the DG logo in `img/logo.png`. Don't redraw it.

## Rules (do not break)

1. **Honesty.** Only state claims the owner has confirmed. Don't invent scarcity ("only 2 spots left"), testimonials, client names, results or guarantees.
2. **Reviews are quoted word for word** from the owner's real Google reviews, including the original spelling. Never edit a review's wording.
3. **Price is "from $300"** everywhere. Ask the owner before changing it.
4. **Speed.** Target PageSpeed mobile 90+.
   - Use WebP images with `width`/`height` set, and lazy-load everything below the hero.
   - No animation libraries, sliders, typing effects, autoplay video or extra third-party scripts.
5. **Accessibility.**
   - Body text ≥ 16px, strong contrast (no light grey on dark), buttons ≥ 48px tall.
   - Labels on every input, `aria-label` on icon-only buttons.
6. **No horizontal scroll** at 360px width.
7. Outreach emails and ads always mention the free Google Business Profile and seeing the prototype before paying. Keep both on this page.

## Testing before every deploy

- [ ] Open on an iPhone-size (390px) and an Android-size (360px) screen; nothing overflows sideways.
- [ ] Submit the empty form → the validation message appears.
- [ ] Submit a real test → you land on the thank-you page, the lead appears in the CRM and the email arrives. Afterwards, delete the test lead in the CRM.
- [ ] Meta Pixel Helper shows `PageView`, and `Lead` on the thank-you page.
- [ ] WhatsApp buttons open the right number with the pre-filled message.
- [ ] PageSpeed Insights (mobile) score ≥ 90.
- [ ] The privacy policy link (`/privacy`) works.

## Deploy

The folder lives at `public/free-prototype/` in the main website repo (DandiloCreative/My-Portfolio). Push to `master`, and Vercel builds and publishes it at `/free-prototype`.

## Owner

Dare, Dandilo Digitals Agency · hello@dandilodigitals.com
