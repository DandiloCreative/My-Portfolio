// Country and region landing pages (USA, UK, Canada, Europe, worldwide). Each one uses that country's spelling,
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
      "Affordable web design for US small businesses. WordPress, Shopify and Wix Studio websites from $300, built to win calls, bookings and sales. Free website audit.",
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
          "Starter Website: from $300",
          "Business Website: from $899",
          "Online Store: from $1,250",
          "Website Redesign: from $300",
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
      {
        q: "How much does a small business website cost in the USA?",
        a: "Our websites start from $300 for a starter site and $899 for a full business website. Many US agencies charge $3,000 to $15,000 for a similar site. You get a fixed quote before any work starts.",
      },
      {
        q: "Will my website be accessible (ADA)?",
        a: "We build to the WCAG accessibility guidelines, the standard usually referred to for ADA website accessibility: readable contrast, keyboard navigation, image descriptions and clear forms. We can't give legal advice, but accessible design lowers your risk and helps every visitor.",
      },
      {
        q: "How long does it take to build a website?",
        a: "Most small business websites take 2 to 6 weeks, depending on the number of pages, the features and how quickly your text and photos are ready.",
      },
      {
        q: "Can I see a design before I pay?",
        a: "Yes. Ask for a free website prototype and we'll design your homepage within 48 hours, with no payment and no obligation. You only pay if you want us to build the full website.",
      },
    ],
    related: ["/web-design-california", "/web-design-texas", "/web-design-florida", "/web-design-new-york", "/web-design-illinois", "/web-design-new-jersey", "/web-design-colorado", "/web-design-virginia", "/web-design-georgia", "/web-design-philadelphia", "/pricing", "/services/small-business-web-design", "/blog/small-business-website-cost"],
  },
  {
    path: "/web-design-uk",
    kind: "service",
    label: "Web Design in the UK",
    areaServed: ["United Kingdom"],
    title: "Small Business Web Design UK | Bespoke Websites | Dandilo",
    description:
      "Bespoke, affordable web design for UK small businesses: WordPress, Shopify and Wix websites, SEO and website care from about £235. Free website audit.",
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
          "Starter Website: from about £235",
          "Business Website: from about £705",
          "Online Store: from about £980",
          "Website Redesign: from about £235",
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
      {
        q: "How long does it take to build a website?",
        a: "Most small business websites take 2 to 6 weeks, depending on the number of pages, the features and how quickly your text and photos are ready.",
      },
      {
        q: "Can I see a design before I pay?",
        a: "Yes. Ask for a free website prototype and we'll design your homepage within 48 hours, with no payment and no obligation. You only pay if you want us to build the full website.",
      },
    ],
    related: ["/web-design-london", "/services/bespoke-web-design", "/services/website-maintenance", "/blog/website-cost-uk", "/blog/uk-small-business-website-checklist", "/pricing"],
  },
  {
    path: "/web-design-canada",
    kind: "service",
    label: "Web Design in Canada",
    areaServed: ["Canada"],
    title: "Small Business Web Design Canada | Dandilo Digitals",
    description:
      "Affordable web design for Canadian small businesses. WordPress, Shopify and Wix Studio websites from about CA$415, built to win enquiries. Free website audit.",
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
          "Starter Website: from about CA$415",
          "Business Website: from about CA$1,240",
          "Online Store: from about CA$1,725",
          "Website Redesign: from about CA$415",
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
      {
        q: "How much does a small business website cost in Canada?",
        a: "Our websites start from about CA$415 for a starter site and about CA$1,240 for a full business website, depending on the exchange rate. You get a fixed quote before any work starts.",
      },
      {
        q: "Will my website meet AODA accessibility rules?",
        a: "We design to the WCAG guidelines that AODA refers to: readable contrast, keyboard navigation, image descriptions and clear forms. We can't give legal advice, but we'll build your site with accessibility in mind from the start.",
      },
      {
        q: "How long does it take to build a website?",
        a: "Most small business websites take 2 to 6 weeks, depending on the number of pages, the features and how quickly your text and photos are ready.",
      },
      {
        q: "Can I see a design before I pay?",
        a: "Yes. Ask for a free website prototype and we'll design your homepage within 48 hours, with no payment and no obligation. You only pay if you want us to build the full website.",
      },
    ],
    related: ["/web-design-toronto", "/web-design-vancouver", "/web-design-calgary", "/blog/website-cost-canada", "/blog/canada-small-business-website-checklist", "/pricing"],
  },
  {
    path: "/web-design-europe",
    kind: "service",
    label: "Web Design in Europe",
    areaServed: ["Europe"],
    title: "Small Business Web Design Europe | GDPR-Ready | Dandilo",
    description:
      "Affordable web design for small businesses across Europe. GDPR-ready WordPress, Shopify and Wix Studio websites from about \u20ac260, multilingual options and a free audit.",
    eyebrow: "Europe",
    h1: "Affordable Web Design for Small Businesses Across Europe",
    intro: [
      "From cafés in Dublin and design studios in Amsterdam to online shops in Berlin, Paris, Madrid and Lisbon, European customers check your website before they call, book or buy. If it's slow, dated or hard to use on a phone, they choose someone else.",
      "Dandilo Digitals designs and builds websites for small businesses across Europe, inside and outside the EU. We work remotely, schedule calls to suit European time zones and send a clear, fixed quote before any work starts.",
    ],
    sections: [
      {
        heading: "What we build for European businesses",
        bullets: [
          "Small business websites on WordPress or Wix Studio",
          "Shopify and WooCommerce shops with euro pricing, EU VAT settings and European payment methods",
          "Multilingual websites: English plus other languages, using your own translations or a translator you choose",
          "Website redesigns that keep your Google rankings",
          "Landing pages for Google Ads and Meta ads",
          "Local SEO so you show up in local searches and on Google Maps in your city",
          "Custom web apps and AI features, such as an assistant that answers customer questions 24/7",
        ],
      },
      {
        heading: "Built for European rules",
        paragraphs: [
          "European websites need a few things that many templates miss. We add a cookie banner that asks for consent before any analytics or advertising cookies load, as GDPR and the ePrivacy rules require, plus a clear privacy policy and consent checkboxes on sign-up forms.",
          "For online shops we design with the European Accessibility Act in mind (it has applied to many online stores since June 2025) and make room for the information EU shoppers expect: prices with VAT, delivery costs and the 14-day right to cancel. If you're based in Germany or Austria, we add an Impressum page with your business details.",
          "We build these features in, but we're web designers, not lawyers. For legal wording, check with a local adviser or a trusted policy generator.",
        ],
      },
      {
        heading: "Approximate prices in euros",
        bullets: [
          "Starter Website: from about \u20ac260",
          "Business Website: from about \u20ac775",
          "Online Store: from about \u20ac1,075",
          "Website Redesign: from about \u20ac260",
          "Care Plan: from about \u20ac85 a month",
        ],
        paragraphs: [
          "Our packages are priced in US dollars, so the euro amount depends on the exchange rate on the day. Ask and we'll send your fixed quote in euros. Many European agencies charge \u20ac3,000 to \u20ac10,000 or more for a small business website.",
        ],
      },
      {
        heading: "How it works",
        paragraphs: [
          "Start with a free website audit or a short call. We agree what the website needs, send a fixed quote, show you a design draft to approve, then build, test and launch it. You own your website, your domain and your accounts.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you work with businesses across Europe?",
        a: "Yes. We work remotely with small businesses in EU countries such as Ireland, Germany, France, the Netherlands, Spain, Italy and Portugal, and outside the EU in places like Switzerland and Norway. For the UK, see our UK web design page.",
      },
      {
        q: "Will my website be GDPR-ready?",
        a: "We build in the features GDPR and the ePrivacy rules call for: a cookie consent banner, a privacy policy page and consent checkboxes on forms. Your privacy policy wording should still be checked by you or a legal adviser.",
      },
      {
        q: "Can you build a website in more than one language?",
        a: "Yes. We can set up your website in English and other European languages, using translations you provide or from a translator you choose, with each language on its own pages so Google can show the right one.",
      },
      {
        q: "Can I pay in euros?",
        a: "Our packages are priced in US dollars and most cards convert automatically. If you'd prefer a quote in euros, just ask.",
      },
      {
        q: "Can my online shop charge VAT for different EU countries?",
        a: "Yes. Shopify and WooCommerce can show prices with VAT and handle different VAT rates by country. Your accountant should confirm which rates and schemes, like the EU One-Stop Shop, apply to you.",
      },
      {
        q: "Do you work in European time zones?",
        a: "Yes. We schedule calls at times that suit you and reply to messages during the European working day.",
      },
    ],
    related: ["/blog/eu-small-business-website-checklist", "/services/ecommerce-web-design", "/web-design-worldwide", "/pricing"],
  },
  {
    path: "/web-design-worldwide",
    kind: "service",
    label: "Web Design Worldwide",
    areaServed: ["Worldwide"],
    title: "International Web Design for Small Businesses | Dandilo",
    description:
      "Remote web design and development for small businesses worldwide. WordPress, Shopify, Wix Studio and custom websites from $300, priced in US dollars. Free website audit.",
    eyebrow: "Worldwide",
    h1: "Web Design and Development for Small Businesses Worldwide",
    intro: [
      "Wherever your business is, your customers look at your website before they get in touch. Dandilo Digitals is a fully remote web design and development agency, so we can work with small businesses anywhere in the world.",
      "We've built our process for working remotely: calls scheduled in your time zone, written plans and updates, and a design draft you approve before any code is written. You get the same fixed quote and the same quality wherever you are.",
    ],
    sections: [
      {
        heading: "Where we work",
        bullets: [
          "North America: the United States and Canada",
          "The UK, Ireland and the rest of Europe",
          "Australia and New Zealand",
          "The Middle East, Africa, Asia and Latin America",
          "Businesses selling internationally from anywhere, including online stores shipping to several countries",
        ],
      },
      {
        heading: "What we build",
        bullets: [
          "Small business websites on WordPress, Wix Studio or Squarespace",
          "Shopify and WooCommerce stores that can sell in several currencies and ship internationally",
          "Multilingual websites, with each language on its own pages so Google can show the right one",
          "Custom web apps built with React, Next.js and NestJS",
          "AI features such as chat assistants that answer questions and book appointments 24/7",
          "Website redesigns, landing pages and monthly website care",
        ],
      },
      {
        heading: "Prices in US dollars",
        bullets: [
          "Starter Website: from $300",
          "Business Website: from $899",
          "Online Store: from $1,250",
          "Fully custom-coded website: from $2,500",
          "Care Plan: from $99 a month",
        ],
        paragraphs: [
          "All our packages are priced in US dollars, and most cards convert to your currency automatically. You get a fixed quote before work starts.",
        ],
      },
      {
        heading: "Built for your market",
        paragraphs: [
          "Every country has its own expectations. We set up your website with your local spelling, currency, time zone and contact details, and add the privacy and cookie features your customers' laws call for. For local search, we help you connect your site to your Google Business Profile so you show up in your area.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you work with businesses outside the US, UK and Canada?",
        a: "Yes. We're a fully remote agency and work with small businesses worldwide, including Europe, Australia, New Zealand, the Middle East, Africa and Asia.",
      },
      {
        q: "How do we communicate if we're in different time zones?",
        a: "We schedule calls at a time that suits you and keep you updated in writing, so you always know where your project stands even when we're working while you sleep.",
      },
      {
        q: "What currency do you charge in?",
        a: "Our packages are priced in US dollars. Most cards convert to your local currency automatically, and we can tell you the approximate amount in your currency when we quote.",
      },
      {
        q: "Can my online store sell to customers in other countries?",
        a: "Yes. Shopify and WooCommerce can show prices in several currencies, calculate international shipping and handle taxes by country. We set this up to match where you sell.",
      },
      {
        q: "Can you build my website in my language?",
        a: "Yes. We can build websites in English and other languages, using your own text or translations from a translator you choose.",
      },
      {
        q: "Will I own my website?",
        a: "Yes. You own your website, your domain and your accounts, wherever you're based.",
      },
    ],
    related: ["/web-design-europe", "/web-design-usa", "/web-design-uk", "/web-design-canada", "/pricing"],
  },
];
