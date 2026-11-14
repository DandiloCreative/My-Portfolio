# Dandilo Digitals SEO Plan: rank for buyer searches, bring paying clients

**Goal:** be on page 1 of Google, and in AI answers (ChatGPT, Perplexity, Google AI Overviews), for searches made by **small businesses in the US, UK and Canada** that are ready to pay for a website. Then turn that traffic into qualified leads in the Dandilo CRM.

**Status:** in progress. Since 14 Nov 2026 the owner has approved working on the plan every day, phase by phase, without asking first. Facts, results and team details still come only from the owner.

**Daily log:**
- **14 Nov 2026 (Phase 2, section 3 industry intent):** new page /industries/cleaning-company-web-design (homes vs businesses, quote forms, service areas without doorway pages, 4 FAQs). Still needs a matching portfolio example.
- **14 Nov 2026 Blog:** Google Business Profile vs Website: Do You Need Both? (https://dandilodigitals.com/blog/google-business-profile-vs-website)
- **14 Nov 2026 (Phase 2, item 4):** new Google titles and descriptions for the 10 main service pages, using keyword + benefit + "from" price where the pricing page states one. Check click-through in Search Console from about 28 Nov.

---

## 0. Expectations

- **SEO takes 3 to 6 months.**
  - Technical fixes show results in weeks.
  - New pages usually take 2 to 4 months to rank.
  - Competitive phrases ("web design company USA") take 6 to 12 months, plus links from other sites.
  - Google Ads can bring leads while SEO grows.
- **Nobody can guarantee position 1.** We win with better pages for **specific buyer searches**, plus trust signals: reviews, links and mentions.
- **Not all traffic is equal.**
  - "What is HTML" brings students.
  - "Shopify designer for my store" brings buyers.
  - Every page in this plan targets a buyer.
- **Lead quality matters as much as volume.** Agencies and freelancers pitching their own services are not clients. Phase 5 keeps them out of your numbers.

## 1. Where dandilodigitals.com stands today (11 Nov 2026)

**Already in place:**
- **57 indexable pages:**
  - 18 service pages, including WordPress, Shopify, Wix Studio, Squarespace, GoHighLevel, Next.js, NestJS, Laravel and Django
  - 7 industry pages: contractors, real estate, restaurants, therapists, law firms, nonprofits and accountants
  - 3 country pages: USA, UK and Canada
  - 19 guides
- **Every page is pre-built as real HTML**, so Google sees full content without running JavaScript. Each has a unique title and description, one H1 and its own canonical.
- **Sitemap and robots.txt are live.** Pages are submitted to Search Console, Bing Webmaster Tools is verified, and IndexNow can be pinged with `node scripts/indexnow.mjs`.
- **One address per page:**
  - http → https
  - www → no-www (308 permanent)
  - `/page/` → `/page`
- **Structured data:** ProfessionalService, FAQ, Breadcrumb and Article, with prices in the pricing data.
- **The audit against Google's SEO Starter Guide is done.** I fixed prices breaking descriptions, alt text on blog covers, vague link text and internal links to the new guides.
- **Prices are published and consistent sitewide:**

  | Package | From |
  |---|---|
  | Starter | $300 |
  | Redesign | $300 |
  | Business | $899 |
  | Online Store | $1,250 |
  | SEO Setup | $600 |
  | Custom development | $2,500 |
  | Care Plan | $99/month |

- **The CRM already tracks the full journey:**
  - **Traffic:** cookieless page views, sources, countries and devices
  - **Leads:** each with its ad and campaign source
  - **Keywords:** a daily tracker collecting Google, Bing and YouTube suggestions for the US, UK and Canada

**Gaps that hold rankings back:**

| # | Gap | Why it hurts |
|---|---|---|
| T1 | **There is no About or team page**, and guides have no author. | It weakens E-E-A-T: Google and buyers want to see the real people behind the advice. |
| T2 | **Portfolio projects live on one page**, with no page per project. | Your proof of work can't rank or be linked to from service pages. |
| T3 | **Schema shows a street address in Ibadan, NG, and lists Nigeria as a market**, while every page targets the US, UK and Canada. | It mixes local and international signals. The address also isn't needed for a remote business. |
| T4 | **The homepage HTML is about 250 KB.** | It may slow first paint on mobile (LCP). Measure in PageSpeed and Search Console, then trim. |
| T5 | **No `llms.txt`, and `sameAs` lists only Facebook and Instagram.** | AI assistants and Google can't confirm the brand across the web (LinkedIn, Google Business Profile, Clutch and so on). |
| T6 | **IndexNow is manual**, run by hand after deploys. | New pages reach Bing (and ChatGPT search, which uses Bing) more slowly than they could. |
| T7 | **No automated SEO checks.** | A future change could break titles, canonicals or the sitemap without anyone noticing. |
| T8 | **Reddit can't feed the keyword tracker**: new Reddit API access is closed. | Fewer "real questions" for content ideas. The Google and Bing question searches partly cover it. |

## 2. Keyword strategy (who we target)

There are **4 intent groups**, in order of value. Each phrase gets **one page that owns it**, so pages never compete with each other.

1. **Hire intent, by platform and service** (highest value):
   - "small business web design", "affordable web designer"
   - "Shopify website designer", "Shopify store setup service", "WooCommerce developer"
   - "WordPress web designer for small business", "Wix Studio designer", "Squarespace designer"
   - "GoHighLevel website and funnel builder"
   - "website redesign service", "landing page design service"
   - "website maintenance plan", "website care plan"
   - "Next.js developer for hire", "full-stack developer for hire"

   Pages exist for all of these. The work is to deepen them and win the clicks.
2. **Hire intent, by country:** "web design company USA / UK / Canada" (pages exist; strengthen them).
   - City pages only where we have real clients or proof.
   - **Never** a copy-paste page per city: Google penalises "doorway" pages.
3. **Industry intent:**
   - **Pages exist:** contractor, real estate, restaurant, therapist, law firm, nonprofit and accountant websites.
   - **Next candidates:**
     - dentists and clinics
     - cleaning companies (page done 14 Nov 2026)
     - salons and beauty
     - coaches and consultants
     - fitness and gyms
     - churches
   - Each page needs a matching portfolio example.
4. **Problem and cost intent** (guides that turn into leads through the free website audit):
   - "how much does a small business website cost"
   - "website gets no enquiries"
   - "fix or rebuild my website"
   - "Shopify vs WooCommerce"
   - "why is my website not showing on Google"

   Many exist already: deepen them and interlink them.

The CRM **Keywords** page supplies new phrases every morning. Each month we pick the ones that match a buyer intent and assign them to a page.

## 3. Phases

### Phase 1: Technical SEO (week 1–2) · effort: me · risk: low · partly done

**Done:**
- Pre-built HTML for every page
- Sitemap
- Redirects (www, trailing slash)
- Fixes from the Starter Guide audit
- IndexNow script
- Bing verification

> **Status (11 Nov 2026):**
> - **Done:** schema cleanup (Ibadan address and Nigeria removed, one `@id` for the business, "Dandilo Digitals Agency" as an alternate name), `llms.txt`, automatic IndexNow after every production deploy (first run succeeded), and SEO checks that stop a broken build.
> - **Waiting:**
>   - **Portfolio pages:** need real project facts from the owner. Pages with only today's short descriptions would be too thin to rank.
>   - **Core Web Vitals:** need measuring when Google's PageSpeed quota resets, or from Search Console → Core Web Vitals.
>   - **Person schema:** waits for team details.

**To do:**
1. **Schema cleanup (T3):**
   - Keep ProfessionalService with `areaServed` set to US, GB and CA (plus Ireland, Australia and New Zealand if you want them).
   - Remove the street address. Keep email and phone.
   - Add `founder` and team Person entities once the About page exists.
   - Add every real profile to `sameAs`.
2. **Portfolio pages (T2):** one page per project at `/work/<project>`, each with:
   - who the client is, what they needed, what we built, the platform and screenshots;
   - results, **only real ones you confirm**;
   - a CTA, CreativeWork and breadcrumb schema, and links from the matching service and industry pages.
3. **Core Web Vitals (T4):**
   - Measure the home page and the top 5 pages on mobile.
   - Trim the homepage HTML and scripts, and load the hero image first.
   - Targets: LCP < 2.5 s, CLS < 0.1, INP < 200 ms.
4. **IndexNow on every deploy (T6):** ping the changed pages automatically after Vercel builds.
5. **`llms.txt` (T5):** who Dandilo Digitals is, its services, prices, markets and contact, in plain text for AI assistants.
6. **SEO checks in the build (T7):** the build fails if any page loses its title, description, H1, canonical or sitemap entry, or if a price goes missing.
7. **Indexing hygiene:**
   - `/thank-you` and `/free-website-audit` are noindex where right.
   - 404s return a real 404.
   - Check monthly in Search Console → Pages.

### Phase 2: Money pages (week 2–6) · effort: me + your input · risk: low · started 14 Nov 2026

1. **Service pages:** deepen each to 1,000–1,800 useful words. Each one has:
   - who it's for, what's included, the process and timeline, and the "from" price;
   - 1–2 portfolio examples;
   - an FAQ built from real questions leads ask;
   - a clear CTA: free audit, WhatsApp or contact.
2. **Industry pages:** add the next 3 to 6 from section 2. Each one has:
   - the industry's problems and the features it needs (booking, quotes, menus, listings and so on);
   - a portfolio example and a CTA.
3. **USA, UK and Canada pages:**
   - local proof: clients in that country, time-zone overlap and pricing in local currency;
   - local FAQs, and links to projects for clients there.
4. **Titles and descriptions written for clicks:** keyword + benefit + price.
   - Example: "Shopify Website Designer for Small Businesses | From $1,250 | Dandilo Digitals".
   - Test with Search Console click-through rate.
5. **E-E-A-T (T1):**
   - an About page with the real team: photos, roles, years of experience, skills and LinkedIn;
   - author bylines on guides linking to it;
   - a "how we work" section;
   - client logos only with permission.
6. **Conversion on every SEO page:** sticky CTA, free website audit, WhatsApp button, and reviews near the form. Rankings without enquiries are worthless.

### Phase 3: Content engine (week 4 onwards, ongoing) · effort: me drafts, you approve · risk: low

- **2 guides a week**, each answering one buyer question. Topics come from the CRM Keywords page. Examples:
  - "how long does it take to build a small business website"
  - "GoHighLevel vs WordPress for service businesses"
  - "Squarespace vs Wix for small business"
  - "how much does a website redesign cost"
  - "what should a contractor website include"
- Each guide:
  - starts with a short "In short" answer;
  - uses real prices and tables;
  - ends on a service page or the free website audit.
- **Refresh, don't just add.** Every month, update guides that are slipping in Search Console.
- **Honest comparison pages:**
  - "hire a freelancer vs an agency"
  - "Dandilo Digitals vs Fiverr / Upwork"
  - "DIY website builder vs web designer" (exists)
- **Free tools that attract links:** website cost calculator, website checklist download, and the free website audit (exists, so we promote it).

### Phase 4: Authority and trust (week 2 onwards, ongoing) · effort: shared · risk: low (honest methods only)

1. **Google Business Profile** as a service-area business (no public address):
   - categories, services with prices, photos and weekly posts;
   - **ask every happy client for a Google review.** The CRM review invite can include the link.
2. **Business directories that also send leads:** Clutch, GoodFirms, DesignRush, Sortlist, UpCity, Bark and Trustpilot. Use complete profiles with portfolio, and get verified client reviews on Clutch.
3. **"Website by Dandilo Digitals" footer credit** on client sites, with their permission, linking to their portfolio page.
4. **Expert quotes for journalists:** Qwoted, Featured.com and Help a B2B Writer. Once a quarter, publish a small data piece, for example "We checked 100 small-business websites: why they don't get enquiries".
5. **Guest posts and podcasts** on small-business, marketing and e-commerce sites your clients read: 1–2 a month, never link farms.
6. **One consistent identity everywhere:** the same name, logo, description and contact on LinkedIn, Facebook, Instagram, X, YouTube, Pinterest, Crunchbase and the directories.
7. **Referral partners:** accountants, marketing agencies, business coaches and printers who serve the same small businesses.
8. **Never:**
   - buy links
   - use private blog networks
   - comment spam
   - "1,000 backlinks for $20"

   These get sites penalised.

### Phase 5: Lead quality and measurement (week 1–2) · effort: me · risk: low

> **Status (11 Nov 2026): done, live in the CRM.**
> - **The form:** asks "What can we help you with?" and includes an "I'm offering services / partnership" choice.
> - **The detector:** caught 10 of 10 sample pitches and flagged 0 of 11 real enquiries.
> - **What happens to pitches:**
>   - They're marked **Vendor pitch**, with the reason shown.
>   - They're kept out of the lead counts, dashboard, pipeline and Inbox, and they get no auto-reply.
>   - Your notification email is labelled "Vendor pitch (filtered)".
> - **CRM buttons:** a **Vendor pitches** tab, **Not a pitch** (undo), and **Scan older leads** (admins only; only checks untouched New leads).
> - **Monthly report:** Leads → **Monthly report**, and it's emailed on the 3rd of each month. It covers:
>   - leads by channel compared with the month before
>   - won leads and filtered pitches
>   - website visits and top pages
>   - Search Console clicks, impressions, top searches and the positions of 42 target phrases
>   - new keyword ideas
> - **Owner step:** connect Search Console. The steps are in `Dandilo CRM/api/src/reports/search-console.ts`.

1. **Separate vendor pitches from leads in the CRM:**
   - Add a required "What can we help you with?" choice on the contact form, including "I'm offering services / partnership".
   - Detect pitch language ("we can rank you", "white-label", "guest post", "I noticed errors on your website") and mark those leads **Vendor pitch**.
   - Keep pitches out of lead counts and the pipeline. Nothing is deleted.
2. **Leads by channel:** a monthly view of Google search, Google Ads, Meta ads, Bing, AI assistants, social, referral and direct. The CRM already stores each lead's source.
3. **Track rankings:** connect Search Console to the CRM and follow the 40–60 target phrases each month (position, impressions, clicks).
4. **One monthly SEO report**, emailed:
   - clicks, impressions, top searches and top pages;
   - pages showing in Google;
   - leads from search;
   - new keyword ideas from the tracker;
   - what we'll do next month.

### Phase 6: AI search visibility (week 3 onwards)

- Write short, direct answers about prices, timelines and process on service and FAQ pages. AI assistants quote pages that answer plainly.
- Use one brand line everywhere, in schema, the footer and `llms.txt`: "Dandilo Digitals (dandilodigitals.com) is a web design and development agency for small businesses in the US, UK and Canada."
- Keep `llms.txt` and the structured data current. Get listed on the directories and "best agencies" lists that AI tools read.
- Track "AI assistant" as a lead source in the CRM.

## 4. Timeline (first 90 days)

| Weeks | Work |
|---|---|
| 1–2 | Schema cleanup · llms.txt · auto IndexNow · SEO build checks · Phase 5 lead filtering · Google Business Profile and directories started |
| 2–4 | Portfolio → `/work/` pages · About/team page · deepen the top 4 service pages · Core Web Vitals fixes |
| 4–6 | Remaining service pages · 3 new industry pages · country page upgrades · start 2 guides a week |
| 6–8 | Last industry pages · comparison pages · first data piece · footer credits on client sites |
| 8–12 | Refresh slipping pages · guest posts and podcasts · monthly report · city pages only where we have proof |

## 5. Targets (how we judge success)

| By | Target |
|---|---|
| Day 30 | Technical gaps fixed; 60+ pages indexed; Core Web Vitals "good" on mobile |
| Day 60 | Impressions ×3 vs today; first page-1 rankings for long-tail service phrases |
| Day 90 | Search clicks ×3; 10+ page-1 phrases; search leads ≥ 30% of all leads; vendor pitches filtered out |
| Month 6 | Page 1 for several platform phrases (for example "Shopify website designer for small business"); search is the #1 lead source |

## 6. What I need from you

1. **Approval per phase.** I'd start with Phase 1 and Phase 5.
2. **Portfolio facts** for your 6 to 10 best projects:
   - what the client needed, what you built and real results;
   - permission to name them, plus a short quote if possible.
3. **Team details:** names, photos, roles, years of experience and LinkedIn, for the About page and author bylines.
4. **Accounts only you can create:** Google Business Profile, LinkedIn company page, Clutch, GoodFirms and DesignRush. I'll give you the exact steps and the text to paste.
5. **Client outreach:** ask 3 to 5 happy clients for a Google or Clutch review, and for a footer credit link.
6. **A decision on the address:** OK to remove the Ibadan street address from the schema, and to stop listing Nigeria as a market?

## 7. Rules we follow (so nothing breaks)

- Every change must pass the build and the SEO checks: one H1, unique titles, canonicals, no broken links, a valid sitemap, correct redirects.
- No design changes: new pages use the existing layout and components.
- Every URL that moves gets a redirect, so no rankings are lost and no 404s appear.
- We only make claims we can prove: no fake reviews, numbers or awards.
