// Country landing pages (USA, UK, Canada). Each one uses that country's spelling,
// search terms and an approximate local price, so Google can match it to searchers there.
// Local prices are rough conversions of the US dollar prices in pricing.ts.
import type { ContentPageData } from "./types";

export const locationPages: ContentPageData[] = [
  {
    path: "/web-design-usa",
    kind: "service",
    label: "Web Design in the USA",
    areaServed: ["United States"],
    title: "Small Business Web Design USA | Dandilo Digitals",
    description:
      "Affordable web design for US small businesses. WordPress, Shopify and Wix Studio websites from $600, built to win calls, bookings and sales. Free website audit.",
    eyebrow: "United States",
    h1: "Small Business Web Design for Companies Across the USA",
    intro: [
      "From contractors in Texas to online stores in California and salons in New York, US customers check your website before they call, book or buy. If it's slow, dated or hard to use on a phone, they go to the next result.",
      "Dandilo Digitals designs and builds websites for small businesses across the United States. We work remotely, schedule calls in your time zone and send a clear, fixed quote before any work starts.",
    ],
    sections: [
      {
        heading: "What we build for US businesses",
        bullets: [
          "Small business websites on WordPress or Wix Studio",
          "Shopify and WooCommerce online stores with US payments, shipping and sales tax set up",
          "Website redesigns that keep your Google rankings",
          "Landing pages for Google Ads and Meta ads",
          "Local SEO setup so you show up in \"near me\" searches and on Google Maps",
        ],
      },
      {
        heading: "Prices in US dollars",
        bullets: [
          "Starter Website: from $600",
          "Business Website: from $1,200",
          "Online Store: from $1,500",
          "Website Redesign: from $800",
          "Care Plan: from $99 a month",
        ],
        paragraphs: [
          "Most US agencies charge $3,000 to $15,000 for a small business website. Because we're a remote team without big-city office costs, we can offer professional work at prices that suit small businesses. See the full breakdown on our pricing page.",
        ],
      },
      {
        heading: "How it works",
        paragraphs: [
          "Start with a free website audit or a short call. We agree what the website needs, send a fixed quote, design it, build it and launch it. You own your website, your domain and your accounts.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you work with businesses in every US state?",
        a: "Yes. We work remotely with small businesses anywhere in the United States and schedule calls in your time zone.",
      },
      {
        q: "Can you help my business show up on Google Maps?",
        a: "Yes. We set up local SEO on your website and help you connect it to your Google Business Profile so local customers can find you.",
      },
    ],
    related: ["/pricing", "/services/small-business-web-design", "/blog/small-business-website-cost"],
  },
  {
    path: "/web-design-uk",
    kind: "service",
    label: "Web Design in the UK",
    areaServed: ["United Kingdom"],
    title: "Small Business Web Design UK | Bespoke Websites | Dandilo",
    description:
      "Bespoke, affordable web design for UK small businesses: WordPress, Shopify and Wix websites, SEO and website care from about £470. Free website audit.",
    eyebrow: "United Kingdom",
    h1: "Affordable, Bespoke Web Design for Small Businesses in the UK",
    intro: [
      "Whether you run a trades business in Manchester, a salon in London or an online shop in Glasgow, your customers will look at your website before they ring, book or buy. A slow or dated site sends them straight to a competitor.",
      "Dandilo Digitals is a web design agency for small businesses across England, Scotland, Wales and Northern Ireland. We work remotely with clients in London, Manchester, Birmingham, Leeds, Bristol, Glasgow and everywhere in between, and our working hours overlap with the UK working day.",
      "Every website is bespoke: designed around your business and your customers, not a copy of a template.",
    ],
    sections: [
      {
        heading: "What we build for UK businesses",
        bullets: [
          "Small business websites on WordPress or Wix Studio",
          "Shopify and WooCommerce shops with UK payments, VAT and Royal Mail or courier delivery options",
          "Website redesigns that keep your Google rankings",
          "Landing pages for Google Ads and Meta adverts",
          "Local SEO so you appear for searches like \"plumber near me\" and on Google Maps",
          "SEO for AI search, so you can be found in Google AI Overviews and tools like ChatGPT",
          "UX and UI design that makes your site easy to use on every device",
          "Conversion rate optimisation (CRO) to turn more visitors into enquiries",
          "Website care plans: updates, backups, security and small changes each month",
        ],
      },
      {
        heading: "Built for UK rules",
        paragraphs: [
          "UK websites need a few things that US templates often miss. We add a cookie banner that asks for consent before tracking (as UK GDPR and PECR require), a clear privacy policy, and, for limited companies, your registered company name, number and registered office address in the footer.",
          "We also use UK spelling and pricing in pounds, so your site sounds local to your customers.",
        ],
      },
      {
        heading: "Approximate prices in pounds",
        bullets: [
          "Starter Website: from about £470",
          "Business Website: from about £940",
          "Online Store: from about £1,170",
          "Website Redesign: from about £630",
          "Care Plan: from about £78 a month",
        ],
        paragraphs: [
          "Our packages are priced in US dollars, so the pound amount depends on the exchange rate on the day. Ask and we'll send your fixed quote in pounds. UK agencies often charge £2,000 to £10,000 for a small business website.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you build bespoke websites or use templates?",
        a: "Bespoke. We design your website around your brand, your services and how your customers buy, then build it on the platform that suits you best.",
      },
      {
        q: "Do you offer website maintenance in the UK?",
        a: "Yes. Our care plan covers updates, backups, security monitoring and small content changes each month, from about \u00a378 a month.",
      },
      {
        q: "Do you work with businesses across the UK?",
        a: "Yes. We work remotely with small businesses in England, Scotland, Wales and Northern Ireland, and our working hours overlap with UK office hours.",
      },
      {
        q: "Will my website have a cookie banner?",
        a: "Yes. If your website uses analytics or advertising cookies, we add a consent banner and a privacy policy so you can meet UK GDPR and PECR rules.",
      },
      {
        q: "Can I pay in pounds?",
        a: "Our packages are priced in US dollars and most cards convert automatically. If you'd prefer a quote in pounds, just ask.",
      },
    ],
    related: ["/blog/website-cost-uk", "/blog/uk-small-business-website-checklist", "/pricing"],
  },
  {
    path: "/web-design-canada",
    kind: "service",
    label: "Web Design in Canada",
    areaServed: ["Canada"],
    title: "Small Business Web Design Canada | Dandilo Digitals",
    description:
      "Affordable web design for Canadian small businesses. WordPress, Shopify and Wix Studio websites from about CA$830, built to win enquiries. Free website audit.",
    eyebrow: "Canada",
    h1: "Affordable Web Design for Small Businesses in Canada",
    intro: [
      "From contractors in Calgary to cafés in Toronto and online stores in Vancouver, Canadian customers check your website before they call, book or buy. If it's slow or hard to use on a phone, they move on.",
      "Dandilo Digitals designs and builds websites for small businesses across Canada. We work remotely, schedule calls in your time zone and send a clear, fixed quote before any work starts.",
    ],
    sections: [
      {
        heading: "What we build for Canadian businesses",
        bullets: [
          "Small business websites on WordPress or Wix Studio",
          "Shopify and WooCommerce stores with Canadian payments, GST/HST and Canada Post or courier shipping",
          "English and French (bilingual) websites",
          "Website redesigns that keep your Google rankings",
          "Local SEO so you show up for \"near me\" searches and on Google Maps",
        ],
      },
      {
        heading: "Built for Canadian rules",
        paragraphs: [
          "We add a clear privacy policy, consent checkboxes on email sign-up forms to help you follow Canada's anti-spam law (CASL), and accessible design that follows WCAG guidelines, which Ontario's AODA requires for many organisations.",
          "If you sell to customers in Quebec, we can build your website in French as well as English.",
        ],
      },
      {
        heading: "Approximate prices in Canadian dollars",
        bullets: [
          "Starter Website: from about CA$830",
          "Business Website: from about CA$1,650",
          "Online Store: from about CA$2,070",
          "Website Redesign: from about CA$1,100",
          "Care Plan: from about CA$137 a month",
        ],
        paragraphs: [
          "Our packages are priced in US dollars, so the Canadian amount depends on the exchange rate on the day. Ask and we'll send your fixed quote in Canadian dollars.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you work with businesses across Canada?",
        a: "Yes. We work remotely with small businesses in every province and schedule calls in your time zone.",
      },
      {
        q: "Can you build a bilingual English and French website?",
        a: "Yes. We can build your website in English and French, which is important if you sell to customers in Quebec.",
      },
      {
        q: "Can I pay in Canadian dollars?",
        a: "Our packages are priced in US dollars and most cards convert automatically. If you'd prefer a quote in Canadian dollars, just ask.",
      },
    ],
    related: ["/blog/website-cost-canada", "/blog/canada-small-business-website-checklist", "/pricing"],
  },
];
