// City and state landing pages (New York, Philadelphia, Texas, Toronto, Calgary/Edmonton, Vancouver, London),
// chosen from the CRM keyword export of 23 Nov 2026. We're a remote team: these pages never claim a local office or local clients.
// Each page carries facts specific to that place (rules, sales tax, currency, time zone) so it isn't a copy of the others.
import type { ContentPageData } from "./types";

export const cityPages: ContentPageData[] = [
  {
    path: "/web-design-new-york",
    kind: "service",
    label: "Web Design in New York",
    areaServed: ["New York City"],
    areaServedType: "City",
    title: "Web Design Agency for New York Small Businesses | Dandilo",
    description:
      "Affordable web design for New York City small businesses: WordPress, Shopify and Wix Studio websites from $300, built for local search in all five boroughs.",
    eyebrow: "New York City",
    h1: "Affordable Web Design for New York City Small Businesses",
    intro: [
      "New York customers have more choice than almost anywhere else. When someone searches for a dentist in Brooklyn or a caterer in Midtown, they compare a few websites in seconds, mostly on a phone, and call the one that looks trustworthy and loads fast.",
      "Dandilo Digitals designs and builds websites for small businesses across New York City. We're a remote team, not a local studio, so you don't pay for big-city office rent. We schedule calls in your time zone, and you see and approve every design before we build it.",
    ],
    sections: [
      {
        heading: "What New York businesses need from a website",
        bullets: [
          "A fast mobile site: most local searches happen on phones, often on the move",
          "A page for each service, so you show up for specific searches, not just your business name",
          "Neighborhood and borough pages if you serve several areas, such as Manhattan, Brooklyn, Queens, the Bronx or Staten Island",
          "A Google Business Profile that matches your website, with reviews",
          "Click-to-call, booking or a short quote form on every page",
        ],
      },
      {
        heading: "Accessibility matters in New York",
        paragraphs: [
          "New York is one of the states where lawsuits over inaccessible websites are most common. We build to the WCAG accessibility guidelines: readable contrast, keyboard navigation, image descriptions and properly labelled forms. We can't give legal advice, but accessible design lowers your risk and helps every visitor.",
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
      },
      {
        heading: "Who we build for in New York",
        paragraphs: [
          "Restaurants, caf\u00e9s and bars, salons and spas, clinics and dentists, lawyers and accountants, contractors and home services, and online stores shipping across the US. If you sell in more than one language, we can build your site in English and another language using translations you provide.",
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
        q: "How much does web design cost in New York?",
        a: "Our websites start from $300 for a starter site and $899 for a full business website, with a fixed quote before work starts. Many New York agencies charge several thousand dollars for a similar small business site.",
      },
      {
        q: "Do you have an office in New York?",
        a: "No. We're a remote team and work with New York businesses online. That's how we keep prices lower than local agencies with Manhattan rent.",
      },
      {
        q: "Can you help me show up in local search in my borough?",
        a: "Yes. We create service and area pages, set up on-page SEO and help you connect your website to your Google Business Profile.",
      },
      {
        q: "Will my website be ADA accessible?",
        a: "We build to the WCAG guidelines that are usually referred to for ADA website accessibility. We can't give legal advice, but accessible design lowers your risk.",
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
    related: ["/web-design-usa", "/web-design-philadelphia", "/blog/small-business-website-cost", "/pricing"],
  },
  {
    path: "/web-design-philadelphia",
    kind: "service",
    label: "Web Design in Philadelphia",
    areaServed: ["Philadelphia"],
    areaServedType: "City",
    title: "Web Design for Philadelphia Small Businesses | Dandilo",
    description:
      "Affordable web design for Philadelphia small businesses: WordPress, Shopify and Wix Studio websites from $300, set up for local search across Philly and the suburbs.",
    eyebrow: "Philadelphia",
    h1: "Affordable Web Design for Philadelphia Small Businesses",
    intro: [
      "Whether you run a restaurant in Center City, a contractor business in the Northeast or a shop in the suburbs, your customers look you up online before they call. A slow or dated website sends them to the next result.",
      "Dandilo Digitals designs and builds websites for small businesses in Philadelphia and the surrounding area. We're a remote team, not a local studio, so you don't pay for big-city office rent. We schedule calls in your time zone, and you see and approve every design before we build it.",
    ],
    sections: [
      {
        heading: "What we build for Philadelphia businesses",
        bullets: [
          "Small business websites on WordPress or Wix Studio",
          "Shopify and WooCommerce stores, with Pennsylvania and local sales tax set up for your accountant to confirm",
          "Pages for each service and each area you cover, from Philly neighborhoods to the Main Line and South Jersey",
          "Quote forms, online booking and click-to-call",
          "Website redesigns that keep your Google rankings",
        ],
      },
      {
        heading: "Built to be found locally",
        paragraphs: [
          "People search for things like \"plumber in South Philly\" or \"family dentist near me\". Service pages, area pages and a complete Google Business Profile with reviews help you show up for those searches. We set up the website side and show you how to keep your profile active.",
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
        q: "How much does a website cost in Philadelphia?",
        a: "Our websites start from $300 for a starter site and $899 for a full business website. Online stores start from $1,250. You get a fixed quote before work starts.",
      },
      {
        q: "Do you have an office in Philadelphia?",
        a: "No. We're a remote team and work with Philadelphia businesses online, on calls in your time zone.",
      },
      {
        q: "Can you build a website for a business that serves Philly and the suburbs?",
        a: "Yes. We create a page for each main area you serve so you can show up in searches there, without copying the same text on every page.",
      },
      {
        q: "Can my online store charge the right sales tax?",
        a: "Yes. Shopify and WooCommerce can charge state and local sales tax. Your accountant should confirm the rates that apply to you.",
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
    related: ["/web-design-usa", "/web-design-new-york", "/services/small-business-web-design", "/pricing"],
  },
  {
    path: "/web-design-texas",
    kind: "service",
    label: "Web Design in Texas",
    areaServed: ["Texas"],
    areaServedType: "State",
    title: "Web Design for Texas Small Businesses: Dallas, Houston, Austin | Dandilo",
    description:
      "Affordable web design for Texas small businesses in Dallas, Houston, Austin, San Antonio and Fort Worth. Websites from $300, with English and Spanish options.",
    eyebrow: "Texas",
    h1: "Affordable Web Design for Small Businesses Across Texas",
    intro: [
      "Texas is full of fast-growing small businesses, from HVAC and roofing companies in Houston to restaurants in San Antonio and startups in Austin. Your customers compare a few websites before they call, and they expect yours to work perfectly on a phone.",
      "Dandilo Digitals designs and builds websites for small businesses across Texas, including Dallas, Fort Worth, Houston, Austin and San Antonio. We're a remote team, not a local studio, so you don't pay for big-city office rent. We schedule calls in your time zone, and you see and approve every design before we build it.",
    ],
    sections: [
      {
        heading: "What we build for Texas businesses",
        bullets: [
          "Websites for home services and trades: HVAC, roofing, plumbing, electrical and remodeling, with quote forms and service area pages",
          "Restaurant, salon and clinic websites with online booking or ordering links",
          "Shopify and WooCommerce stores with Texas sales tax set up for your accountant to confirm",
          "English and Spanish (bilingual) websites, using translations you provide or from a translator you choose",
          "Websites and landing pages for startups and growing companies",
        ],
      },
      {
        heading: "Serving more than one Texas city?",
        paragraphs: [
          "Many Texas businesses cover a whole metro area or several cities. We create a genuinely useful page for each main area you serve, with the services, details and photos that apply there, so you can show up in local searches without copy-and-paste pages that Google ignores.",
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
        q: "How much does a website cost in Texas?",
        a: "Our websites start from $300 for a starter site and $899 for a full business website. Online stores start from $1,250. You get a fixed quote before work starts.",
      },
      {
        q: "Do you work with businesses in Dallas, Houston and Austin?",
        a: "Yes. We work remotely with small businesses anywhere in Texas and schedule calls in Central time, or Mountain time if you're in El Paso.",
      },
      {
        q: "Can you build a website in English and Spanish?",
        a: "Yes. We can build your site in both languages, with each language on its own pages so Google shows the right one.",
      },
      {
        q: "Do you build websites for HVAC and roofing companies?",
        a: "Yes. Trades websites get a page for each service, the areas you cover, a quote form, click-to-call and a project gallery.",
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
    related: ["/web-design-usa", "/industries/contractor-web-design", "/services/landing-page-design", "/pricing"],
  },
  {
    path: "/web-design-toronto",
    kind: "service",
    label: "Web Design in Toronto",
    areaServed: ["Toronto"],
    areaServedType: "City",
    title: "Web Design for Toronto Small Businesses | Dandilo Digitals",
    description:
      "Affordable web design for Toronto and GTA small businesses: WordPress, Shopify and Wix Studio websites from about CA$415, built with AODA accessibility in mind.",
    eyebrow: "Toronto & the GTA",
    h1: "Affordable Web Design for Toronto Small Businesses",
    intro: [
      "From caf\u00e9s on Queen West to contractors in Mississauga and clinics in North York, Toronto customers check your website before they call, book or buy. If it's slow or hard to use on a phone, they move on to the next result.",
      "Dandilo Digitals designs and builds websites for small businesses in Toronto and across the GTA. We're a remote team, not a local studio, so you don't pay for downtown office rent. We schedule calls in your time zone, and you see and approve every design before we build it.",
    ],
    sections: [
      {
        heading: "What we build for Toronto businesses",
        bullets: [
          "Small business websites on WordPress or Wix Studio",
          "Shopify and WooCommerce stores with HST and Canadian shipping set up",
          "Pages for each service and each area you cover, such as Toronto, Mississauga, Brampton, Vaughan or Markham",
          "English and French (bilingual) websites if you also sell to customers in Quebec",
          "Website redesigns that keep your Google rankings",
        ],
      },
      {
        heading: "Built for Ontario rules",
        paragraphs: [
          "Ontario's accessibility law (AODA) requires many organisations' websites to meet WCAG accessibility guidelines, so we design with accessibility in mind from the start. We also add a clear privacy policy and consent checkboxes on email sign-up forms to help you follow Canada's anti-spam law (CASL). We can't give legal advice, but we build in the features these rules call for.",
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
        q: "How much does a website cost in Toronto?",
        a: "Our websites start from about CA$415 for a starter site and about CA$1,240 for a full business website, depending on the exchange rate. You get a fixed quote before work starts.",
      },
      {
        q: "Do you have an office in Toronto?",
        a: "No. We're a remote team and work with Toronto businesses online, with calls scheduled in Eastern time.",
      },
      {
        q: "Will my website meet AODA rules?",
        a: "We design to the WCAG guidelines that AODA refers to. We can't give legal advice, but we build your site with accessibility in mind from the start.",
      },
      {
        q: "Can my online store charge HST?",
        a: "Yes. Shopify and WooCommerce can charge the right sales tax for Ontario and other provinces. Your accountant should confirm your set-up.",
      },
      {
        q: "Can I pay in Canadian dollars?",
        a: "Our packages are priced in US dollars and most cards convert automatically. If you'd prefer a quote in Canadian dollars, just ask.",
      },
      {
        q: "Can I see a design before I pay?",
        a: "Yes. Ask for a free website prototype and we'll design your homepage within 48 hours, with no payment and no obligation. You only pay if you want us to build the full website.",
      },
    ],
    related: ["/web-design-canada", "/web-design-calgary", "/web-design-vancouver", "/blog/website-cost-canada"],
  },
  {
    path: "/web-design-calgary",
    kind: "service",
    label: "Web Design in Calgary & Edmonton",
    areaServed: ["Calgary", "Edmonton"],
    areaServedType: "City",
    title: "Web Design for Calgary & Edmonton Small Businesses | Dandilo",
    description:
      "Affordable web design for small businesses in Calgary, Edmonton and across Alberta: websites from about CA$415, built to win calls, quotes and bookings.",
    eyebrow: "Calgary & Edmonton",
    h1: "Affordable Web Design for Calgary and Edmonton Small Businesses",
    intro: [
      "Alberta's small businesses, from trades and energy services to restaurants and clinics, win most of their work from people who search, compare and then call. A clear, fast website with a quote form turns those searches into jobs.",
      "Dandilo Digitals designs and builds websites for small businesses in Calgary, Edmonton and across Alberta. We're a remote team, not a local studio, so you don't pay for downtown office rent. We schedule calls in your time zone, and you see and approve every design before we build it.",
    ],
    sections: [
      {
        heading: "What we build for Alberta businesses",
        bullets: [
          "Trades and home services websites with quote forms, service area pages and project galleries",
          "Websites for energy, industrial and B2B service companies that need to look established",
          "Restaurant, salon and clinic websites with online booking or ordering links",
          "Shopify and WooCommerce stores with GST and Canadian shipping set up",
          "Website redesigns that keep your Google rankings",
        ],
      },
      {
        heading: "Built for Alberta and Canadian rules",
        paragraphs: [
          "Alberta has its own private-sector privacy law (PIPA), so we add a clear privacy policy and keep contact forms to the details you really need. Email sign-up forms get consent checkboxes to help you follow Canada's anti-spam law (CASL). We can't give legal advice, but we build in the features these rules call for.",
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
        q: "How much does a website cost in Calgary or Edmonton?",
        a: "Our websites start from about CA$415 for a starter site and about CA$1,240 for a full business website, depending on the exchange rate. You get a fixed quote before work starts.",
      },
      {
        q: "Do you have an office in Alberta?",
        a: "No. We're a remote team and work with Alberta businesses online, with calls scheduled in Mountain time.",
      },
      {
        q: "Can you build a website for a trades or construction company?",
        a: "Yes. You get a page for each service, the areas you cover, a quote form, click-to-call and a gallery of your work.",
      },
      {
        q: "Can my online store charge GST?",
        a: "Yes. Shopify and WooCommerce can charge GST for Alberta and the right sales tax for other provinces. Your accountant should confirm your set-up.",
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
    related: ["/web-design-canada", "/web-design-vancouver", "/web-design-toronto", "/industries/contractor-web-design"],
  },
  {
    path: "/web-design-vancouver",
    kind: "service",
    label: "Web Design in Vancouver",
    areaServed: ["Vancouver"],
    areaServedType: "City",
    title: "Web Design for Vancouver Small Businesses | Dandilo Digitals",
    description:
      "Affordable web design for Vancouver and Lower Mainland small businesses: WordPress, Shopify and Wix Studio websites from about CA$415. Free website audit.",
    eyebrow: "Vancouver & the Lower Mainland",
    h1: "Affordable Web Design for Vancouver Small Businesses",
    intro: [
      "Vancouver customers are quick to compare, whether they're booking a restaurant in Gastown, a physio in Burnaby or buying from a local online shop. A website that's slow, dated or hard to use on a phone loses them in seconds.",
      "Dandilo Digitals designs and builds websites for small businesses in Vancouver and across the Lower Mainland. We're a remote team, not a local studio, so you don't pay for downtown office rent. We schedule calls in your time zone, and you see and approve every design before we build it.",
    ],
    sections: [
      {
        heading: "What we build for Vancouver businesses",
        bullets: [
          "Websites for restaurants, caf\u00e9s, tourism and hospitality businesses, with menus, bookings and photo galleries",
          "Shopify and WooCommerce stores with GST, BC PST and Canadian shipping set up for your accountant to confirm",
          "Clinic, wellness and salon websites with online booking",
          "Pages for each area you serve, such as Vancouver, Burnaby, Richmond, Surrey or North Vancouver",
          "Website redesigns that keep your Google rankings",
        ],
      },
      {
        heading: "Built for BC and Canadian rules",
        paragraphs: [
          "British Columbia has its own private-sector privacy law (PIPA), so we add a clear privacy policy and keep forms to the details you need. Email sign-up forms get consent checkboxes for Canada's anti-spam law (CASL), and we design to WCAG accessibility guidelines. We can't give legal advice, but we build in the features these rules call for.",
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
        q: "How much does a website cost in Vancouver?",
        a: "Our websites start from about CA$415 for a starter site and about CA$1,240 for a full business website, depending on the exchange rate. You get a fixed quote before work starts.",
      },
      {
        q: "Do you have an office in Vancouver?",
        a: "No. We're a remote team and work with Vancouver businesses online, with calls scheduled in Pacific time.",
      },
      {
        q: "Can my online store charge GST and PST?",
        a: "Yes. Shopify and WooCommerce can charge GST and BC PST. Your accountant should confirm your registrations and rates.",
      },
      {
        q: "Can you build a website for a restaurant or tourism business?",
        a: "Yes. We set up menus you can edit, booking or ordering links, photo galleries and clear opening hours, all fast on phones.",
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
    related: ["/web-design-canada", "/web-design-calgary", "/industries/restaurant-web-design", "/blog/website-cost-canada"],
  },
  {
    path: "/web-design-london",
    kind: "service",
    label: "Web Design in London",
    areaServed: ["London"],
    areaServedType: "City",
    title: "Web Design Agency for London Small Businesses | Dandilo",
    description:
      "Affordable web design for London small businesses: bespoke WordPress, Shopify and Wix Studio websites from about \u00a3235, with UK GDPR cookie consent built in.",
    eyebrow: "London",
    h1: "Affordable Web Design for London Small Businesses",
    intro: [
      "London businesses compete with thousands of others for the same searches. Whether you run a restaurant in Shoreditch, a clinic in Clapham or a trades business in Croydon, your website has to look established, load fast and make it easy to get in touch.",
      "Dandilo Digitals designs and builds websites for small businesses across London. We're a remote team, not a London studio, so you don't pay for central London rent. Our working hours overlap with UK office hours, and you see and approve every design before we build it.",
    ],
    sections: [
      {
        heading: "What we build for London businesses",
        bullets: [
          "Bespoke small business websites on WordPress or Wix Studio",
          "Shopify and WooCommerce shops with VAT and UK shipping set up",
          "Pages for each service and each borough or area you cover",
          "Booking, enquiry and quote forms, plus click-to-call",
          "Website redesigns that keep your Google rankings",
        ],
      },
      {
        heading: "Built for UK rules",
        paragraphs: [
          "We add a cookie consent banner and a privacy policy so you can meet UK GDPR and PECR rules, and we design to WCAG accessibility guidelines, which helps you meet your duties under the Equality Act. We can't give legal advice, but we build in the features these rules call for.",
        ],
      },
      {
        heading: "Approximate prices in pounds",
        bullets: [
          "Starter Website: from about \u00a3235",
          "Business Website: from about \u00a3705",
          "Online Store: from about \u00a3980",
          "Website Redesign: from about \u00a3235",
          "Care Plan: from about \u00a378 a month",
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
        q: "How much does web design cost in London?",
        a: "Our websites start from about \u00a3235 for a starter site and about \u00a3705 for a full business website, depending on the exchange rate. Many London agencies charge several thousand pounds for a similar site.",
      },
      {
        q: "Do you have an office in London?",
        a: "No. We're a remote team and work with London businesses online. That's how we keep prices well below central London agencies.",
      },
      {
        q: "Can you help my business show up in my borough?",
        a: "Yes. We create service and area pages, set up on-page SEO and help you connect your website to your Google Business Profile.",
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
        q: "Can I see a design before I pay?",
        a: "Yes. Ask for a free website prototype and we'll design your homepage within 48 hours, with no payment and no obligation. You only pay if you want us to build the full website.",
      },
    ],
    related: ["/web-design-uk", "/blog/website-cost-uk", "/blog/uk-small-business-website-checklist", "/pricing"],
  },
];
