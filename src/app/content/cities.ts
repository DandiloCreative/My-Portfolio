// City and state landing pages (New York, Philadelphia, Texas, Toronto, Calgary/Edmonton, Vancouver, London,
// plus US states added in batches: California, Florida, Colorado, New Jersey, Illinois, Virginia),
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
  {
    path: "/web-design-california",
    kind: "service",
    label: "Web Design in California",
    areaServed: ["California"],
    areaServedType: "State",
    title: "Web Design for California Small Businesses | Dandilo Digitals",
    description:
      "Affordable web design for California small businesses in LA, San Diego, the Bay Area and beyond. Websites from $300, with privacy and accessibility built in.",
    eyebrow: "California",
    h1: "Affordable Web Design for California Small Businesses",
    intro: [
      "From restaurants in Los Angeles to wellness studios in San Diego and startups in the Bay Area, California customers expect a fast, polished website. If yours looks dated or breaks on a phone, they choose a competitor in seconds.",
      "Dandilo Digitals designs and builds websites for small businesses across California, including Los Angeles, San Diego, San Francisco, San Jose and Sacramento. We're a remote team, not a local studio, so you don't pay for big-city office rent. We schedule calls in your time zone, and you see and approve every design before we build it.",
    ],
    sections: [
      {
        heading: "What we build for California businesses",
        bullets: [
          "Small business websites on WordPress or Wix Studio",
          "Shopify and WooCommerce stores with California sales tax set up for your accountant to confirm",
          "English and Spanish (bilingual) websites, using translations you provide or from a translator you choose",
          "Websites and landing pages for startups and tech companies",
          "Website redesigns that keep your Google rankings",
        ],
      },
      {
        heading: "Privacy and accessibility in California",
        paragraphs: [
          "California's online privacy law (CalOPPA) expects any commercial website that collects personal information from California residents, even just through a contact form, to post a privacy policy, so every site we build includes one. The larger California Consumer Privacy Act (CCPA) applies to businesses above certain size thresholds, and most small businesses fall below them.",
          "California also sees many lawsuits over inaccessible websites, under the ADA and the state's Unruh Act. We build to the WCAG accessibility guidelines: readable contrast, keyboard navigation, image descriptions and properly labelled forms. We can't give legal advice, so check with your lawyer if you're unsure whether a law applies to you.",
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
        q: "How much does a website cost in California?",
        a: "Our websites start from $300 for a starter site and $899 for a full business website. Online stores start from $1,250. You get a fixed quote before work starts.",
      },
      {
        q: "Do you have an office in California?",
        a: "No. We're a remote team and work with California businesses online, with calls scheduled in Pacific time.",
      },
      {
        q: "Does my small business website need a privacy policy in California?",
        a: "If your site collects personal information from California residents, such as names and emails through a form, California's CalOPPA expects a privacy policy. Every website we build includes one.",
      },
      {
        q: "Can you build a website in English and Spanish?",
        a: "Yes. We can build your site in both languages, with each language on its own pages so Google shows the right one.",
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
    related: ["/web-design-usa", "/web-design-texas", "/services/ecommerce-web-design", "/pricing"],
  },
  {
    path: "/web-design-florida",
    kind: "service",
    label: "Web Design in Florida",
    areaServed: ["Florida"],
    areaServedType: "State",
    title: "Web Design for Florida Small Businesses | Dandilo Digitals",
    description:
      "Affordable web design for Florida small businesses in Miami, Tampa, Orlando, Jacksonville and Fort Lauderdale. Websites from $300, in English and Spanish.",
    eyebrow: "Florida",
    h1: "Affordable Web Design for Florida Small Businesses",
    intro: [
      "Florida runs on small businesses: restaurants and tourism in Orlando and Miami, home services like HVAC, roofing and pool care, real estate and medical practices across the state. Customers compare a few websites on their phone, then call the one that looks most trustworthy.",
      "Dandilo Digitals designs and builds websites for small businesses across Florida, including Miami, Tampa, Orlando, Jacksonville, Fort Lauderdale and Fort Myers. We're a remote team, not a local studio, so you don't pay for big-city office rent. We schedule calls in your time zone, and you see and approve every design before we build it.",
    ],
    sections: [
      {
        heading: "What we build for Florida businesses",
        bullets: [
          "Home services websites (HVAC, roofing, pool, pest control) with quote forms, service area pages and click-to-call",
          "Restaurant, hospitality and tourism websites with menus, bookings and photo galleries",
          "Real estate and medical practice websites",
          "English and Spanish (bilingual) websites, using translations you provide or from a translator you choose",
          "Shopify and WooCommerce stores with Florida sales tax set up for your accountant to confirm",
        ],
      },
      {
        heading: "Accessibility and privacy in Florida",
        paragraphs: [
          "Florida is one of the states where lawsuits over inaccessible websites are most common. We build to the WCAG accessibility guidelines: readable contrast, keyboard navigation, image descriptions and properly labelled forms. Florida's own data privacy law mainly applies to very large companies, but every site we build still includes a clear privacy policy. We can't give legal advice, so check with your lawyer if you're unsure whether a law applies to you.",
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
        q: "How much does a website cost in Florida?",
        a: "Our websites start from $300 for a starter site and $899 for a full business website. Online stores start from $1,250. You get a fixed quote before work starts.",
      },
      {
        q: "Do you have an office in Florida?",
        a: "No. We're a remote team and work with Florida businesses online, with calls scheduled in Eastern time, or Central time in the western Panhandle.",
      },
      {
        q: "Can you build a website in English and Spanish?",
        a: "Yes. Many Florida businesses serve customers in both languages. We put each language on its own pages so Google shows the right one.",
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
    related: ["/web-design-usa", "/industries/contractor-web-design", "/industries/real-estate-web-design", "/pricing"],
  },
  {
    path: "/web-design-colorado",
    kind: "service",
    label: "Web Design in Colorado",
    areaServed: ["Colorado"],
    areaServedType: "State",
    title: "Web Design for Colorado Small Businesses: Denver & Beyond | Dandilo",
    description:
      "Affordable web design for Colorado small businesses in Denver, Colorado Springs, Boulder and Fort Collins. Websites from $300, built to win local customers.",
    eyebrow: "Colorado",
    h1: "Affordable Web Design for Colorado Small Businesses",
    intro: [
      "Colorado's small businesses range from outdoor and tourism companies in the mountains to trades in Colorado Springs, restaurants and breweries in Denver and startups in Boulder. Whatever you do, customers check your website before they book, call or buy.",
      "Dandilo Digitals designs and builds websites for small businesses across Colorado, including Denver, Colorado Springs, Aurora, Boulder and Fort Collins. We're a remote team, not a local studio, so you don't pay for big-city office rent. We schedule calls in your time zone, and you see and approve every design before we build it.",
    ],
    sections: [
      {
        heading: "What we build for Colorado businesses",
        bullets: [
          "Tourism, outdoor and hospitality websites with bookings, seasonal information and photo galleries",
          "Trades and home services websites with quote forms and service area pages",
          "Restaurant, brewery and caf\u00e9 websites with menus you can edit",
          "Websites and landing pages for startups and growing companies",
          "Shopify and WooCommerce stores with Colorado sales tax set up for your accountant to confirm",
        ],
      },
      {
        heading: "Privacy in Colorado",
        paragraphs: [
          "The Colorado Privacy Act applies to businesses that handle the personal data of large numbers of Colorado residents (100,000 or more a year, or fewer if they sell data), so most small businesses fall below it. Every site we build still includes a clear privacy policy and only asks for the details you really need. We can't give legal advice, so check with your lawyer if you're unsure whether a law applies to you.",
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
        q: "How much does a website cost in Colorado?",
        a: "Our websites start from $300 for a starter site and $899 for a full business website. Online stores start from $1,250. You get a fixed quote before work starts.",
      },
      {
        q: "Do you have an office in Colorado?",
        a: "No. We're a remote team and work with Colorado businesses online, with calls scheduled in Mountain time.",
      },
      {
        q: "Can you build a website for a seasonal or tourism business?",
        a: "Yes. We make it easy to update seasons, prices and availability yourself, and connect the booking tool you already use.",
      },
      {
        q: "Do you build websites for Denver startups?",
        a: "Yes. We build marketing websites, landing pages and custom web apps with Next.js and other modern tools.",
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
    related: ["/web-design-usa", "/services/landing-page-design", "/industries/restaurant-web-design", "/pricing"],
  },
  {
    path: "/web-design-new-jersey",
    kind: "service",
    label: "Web Design in New Jersey",
    areaServed: ["New Jersey"],
    areaServedType: "State",
    title: "Web Design for New Jersey Small Businesses | Dandilo Digitals",
    description:
      "Affordable web design for New Jersey small businesses in Newark, Jersey City, Hoboken, Trenton and across NJ. Websites from $300, built for local search.",
    eyebrow: "New Jersey",
    h1: "Affordable Web Design for New Jersey Small Businesses",
    intro: [
      "New Jersey businesses compete for customers from their own towns and from the New York and Philadelphia areas. A fast, clear website with a page for each service and area helps you win those searches instead of losing them to bigger competitors.",
      "Dandilo Digitals designs and builds websites for small businesses across New Jersey, including Newark, Jersey City, Hoboken, Paterson and Trenton. We're a remote team, not a local studio, so you don't pay for big-city office rent. We schedule calls in your time zone, and you see and approve every design before we build it.",
    ],
    sections: [
      {
        heading: "What we build for New Jersey businesses",
        bullets: [
          "Contractor and home services websites with quote forms and service area pages",
          "Restaurant, salon and clinic websites with online booking or ordering links",
          "Websites for lawyers, accountants and other professional services",
          "Shopify and WooCommerce stores with New Jersey sales tax set up for your accountant to confirm",
          "Website redesigns that keep your Google rankings",
        ],
      },
      {
        heading: "Serving New Jersey, New York and Philadelphia",
        paragraphs: [
          "If you serve customers across state lines, we create a useful page for each main area, such as North Jersey, the Jersey Shore or South Jersey, so you can show up in searches there without copy-and-paste pages. See also our New York and Philadelphia pages.",
        ],
      },
      {
        heading: "Privacy in New Jersey",
        paragraphs: [
          "New Jersey's data privacy law applies to businesses that handle the personal data of large numbers of New Jersey residents (100,000 or more a year, or fewer if they sell data), so most small businesses fall below it. Every site we build still includes a clear privacy policy. We can't give legal advice, so check with your lawyer if you're unsure whether a law applies to you.",
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
        q: "How much does a website cost in New Jersey?",
        a: "Our websites start from $300 for a starter site and $899 for a full business website. Online stores start from $1,250. You get a fixed quote before work starts.",
      },
      {
        q: "Do you have an office in New Jersey?",
        a: "No. We're a remote team and work with New Jersey businesses online, with calls scheduled in Eastern time.",
      },
      {
        q: "Can my website target customers in New York and Philadelphia too?",
        a: "Yes. We create a separate, useful page for each main area you serve, so you can show up in searches there.",
      },
      {
        q: "Do you build websites for contractors in NJ?",
        a: "Yes. Contractor websites get a page for each service, the towns you cover, a quote form, click-to-call and a project gallery.",
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
    related: ["/web-design-usa", "/web-design-new-york", "/web-design-philadelphia", "/pricing"],
  },
  {
    path: "/web-design-illinois",
    kind: "service",
    label: "Web Design in Illinois",
    areaServed: ["Illinois"],
    areaServedType: "State",
    title: "Web Design for Illinois Small Businesses: Chicago & Beyond | Dandilo",
    description:
      "Affordable web design for Illinois small businesses in Chicago, Naperville, Aurora, Rockford and Springfield. Websites from $300, built to win local customers.",
    eyebrow: "Illinois",
    h1: "Affordable Web Design for Illinois Small Businesses",
    intro: [
      "Chicago is one of the most competitive local markets in the country, and businesses across Illinois, from Naperville to Springfield, face the same challenge: customers compare a few websites and call the one that's clearest and fastest.",
      "Dandilo Digitals designs and builds websites for small businesses across Illinois, including Chicago, Aurora, Naperville, Joliet, Rockford and Springfield. We're a remote team, not a local studio, so you don't pay for big-city office rent. We schedule calls in your time zone, and you see and approve every design before we build it.",
    ],
    sections: [
      {
        heading: "What we build for Illinois businesses",
        bullets: [
          "Restaurant, caf\u00e9 and bar websites with menus, bookings and ordering links",
          "Websites for lawyers, accountants and other professional services",
          "Websites for manufacturers, logistics and B2B companies that need to look established",
          "Neighborhood and suburb pages if you serve several areas of Chicagoland",
          "Shopify and WooCommerce stores with Illinois sales tax set up for your accountant to confirm",
        ],
      },
      {
        heading: "Biometric privacy in Illinois",
        paragraphs: [
          "Illinois has a strict biometric privacy law (BIPA). If your website or app ever collects fingerprints, face scans or similar data, for example for logins or virtual try-on, you need written consent first. Most business websites don't collect this kind of data, and we'll flag it if a feature would. Every site we build includes a clear privacy policy. We can't give legal advice, so check with your lawyer if you're unsure whether a law applies to you.",
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
        q: "How much does a website cost in Illinois?",
        a: "Our websites start from $300 for a starter site and $899 for a full business website. Online stores start from $1,250. You get a fixed quote before work starts.",
      },
      {
        q: "Do you have an office in Illinois?",
        a: "No. We're a remote team and work with Illinois businesses online, with calls scheduled in Central time.",
      },
      {
        q: "Can you help my Chicago business show up in local search?",
        a: "Yes. We create service and neighborhood pages, set up on-page SEO and help you connect your website to your Google Business Profile.",
      },
      {
        q: "Do you build websites for manufacturers and B2B companies?",
        a: "Yes. We build clear B2B websites with product or capability pages, quote request forms and downloadable spec sheets.",
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
    related: ["/web-design-usa", "/industries/restaurant-web-design", "/industries/law-firm-web-design", "/pricing"],
  },
  {
    path: "/web-design-virginia",
    kind: "service",
    label: "Web Design in Virginia",
    areaServed: ["Virginia"],
    areaServedType: "State",
    title: "Web Design for Virginia Small Businesses | Dandilo Digitals",
    description:
      "Affordable web design for Virginia small businesses in Virginia Beach, Richmond, Arlington, Alexandria and Norfolk, including government contractors. From $300.",
    eyebrow: "Virginia",
    h1: "Affordable Web Design for Virginia Small Businesses",
    intro: [
      "Virginia's small businesses include government contractors in Northern Virginia, tourism and hospitality in Virginia Beach, and trades and professional services in Richmond and Norfolk. Each needs a website that builds trust quickly with the people who matter to them.",
      "Dandilo Digitals designs and builds websites for small businesses across Virginia, including Virginia Beach, Richmond, Arlington, Alexandria, Norfolk and Chesapeake. We're a remote team, not a local studio, so you don't pay for big-city office rent. We schedule calls in your time zone, and you see and approve every design before we build it.",
    ],
    sections: [
      {
        heading: "What we build for Virginia businesses",
        bullets: [
          "Websites for government contractors, with capabilities, past performance (your real projects only), certifications and company codes clearly laid out",
          "Professional services websites for consultants, lawyers and accountants",
          "Tourism and hospitality websites with bookings and photo galleries",
          "Trades and home services websites with quote forms and service area pages",
          "Shopify and WooCommerce stores with Virginia sales tax set up for your accountant to confirm",
        ],
      },
      {
        heading: "Privacy in Virginia",
        paragraphs: [
          "Virginia's Consumer Data Protection Act applies to businesses that handle the personal data of large numbers of Virginia residents (100,000 or more a year, or fewer if most of their revenue comes from selling data), so most small businesses fall below it. Every site we build still includes a clear privacy policy. We can't give legal advice, so check with your lawyer if you're unsure whether a law applies to you.",
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
        q: "How much does a website cost in Virginia?",
        a: "Our websites start from $300 for a starter site and $899 for a full business website. Online stores start from $1,250. You get a fixed quote before work starts.",
      },
      {
        q: "Do you have an office in Virginia?",
        a: "No. We're a remote team and work with Virginia businesses online, with calls scheduled in Eastern time.",
      },
      {
        q: "Do you build websites for government contractors?",
        a: "Yes. We lay out your capabilities, past performance, certifications and company codes (such as your UEI, CAGE code and NAICS codes) clearly, using only the facts you provide.",
      },
      {
        q: "Can you help my business show up in Richmond or Virginia Beach searches?",
        a: "Yes. We create service and area pages, set up on-page SEO and help you connect your website to your Google Business Profile.",
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
    related: ["/web-design-usa", "/services/enterprise-web-development", "/services/small-business-web-design", "/pricing"],
  },
];
