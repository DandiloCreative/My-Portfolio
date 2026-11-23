// Daily blog posts, added by the daily blog routine (newest at the top).
// Each post needs a cover image: run scripts/blog-cover.cjs (the build fails without one).
import type { ContentPageData } from "./types";

export const dailyPosts: ContentPageData[] = [
  {
    path: "/blog/wordpress-vs-custom-website-law-firm",
    kind: "blog",
    label: "WordPress vs a Custom Website for Law Firms",
    title: "WordPress vs a Custom Website for Law Firms: Which Is Better?",
    description:
      "Should your law firm website be built on WordPress or custom-coded? Cost, SEO, security, editing and practice area pages compared for attorneys and solicitors.",
    eyebrow: "Comparison",
    h1: "WordPress vs a Custom Website for Law Firms: Which Is Better?",
    date: "2026-11-23",
    readMinutes: 6,
    intro: [
      "In short: WordPress is the right choice for most law firms. It handles many practice area pages and a blog well, it's easy for your team to edit, and it costs less to build. A custom-coded website makes sense when you need things WordPress does poorly, such as a client portal, case intake logic or connections to your practice management software.",
      "Here's how the two compare for a law firm, and how to decide which one your practice needs.",
    ],
    sections: [
      {
        heading: "The quick comparison",
        bullets: [
          "Cost to build: WordPress is usually cheaper. A custom site costs more because every feature is built for you.",
          "Editing: WordPress has a familiar editor for updating pages and posts. A custom site needs a content manager added if your team wants to edit it.",
          "Practice area and location pages: both handle them well. WordPress makes adding new ones quick.",
          "SEO: both can rank well. What matters most is helpful practice area pages, local signals and a fast site.",
          "Security: WordPress needs regular updates to plugins and themes. A custom site has fewer moving parts but needs a developer to maintain it.",
          "Special features: client portals, intake questionnaires and integrations are easier to build well in custom code.",
        ],
      },
      {
        heading: "When WordPress is the right choice for a law firm",
        bullets: [
          "You're a solo practice or small to mid-size firm that mainly needs to win consultations.",
          "You want a page for each practice area and location, plus a blog answering client questions.",
          "Your team wants to update pages, attorney profiles and posts without a developer.",
          "You want a professional site in a few weeks at a modest cost.",
        ],
      },
      {
        heading: "When a custom website is the right choice",
        bullets: [
          "You want a secure client portal for documents, messages or case updates.",
          "You need an intake questionnaire that routes enquiries by case type or location.",
          "You want your website connected to your practice management or CRM software.",
          "You have many offices or attorneys and need features beyond what plugins can do cleanly.",
          "Speed and security are top priorities and you'd rather avoid relying on many plugins.",
        ],
      },
      {
        heading: "What every law firm website needs, on either platform",
        bullets: [
          "A separate page for each practice area, written in plain English",
          "Attorney or solicitor profiles with qualifications and a professional photo",
          "A consultation form and click-to-call on every page",
          "A note on forms not to send confidential details before you've agreed to act",
          "Wording that respects the advertising rules for your country and state",
          "Fast, secure and accessible pages that work well on phones",
        ],
      },
      {
        heading: "Keeping a WordPress law firm site secure",
        paragraphs: [
          "Most WordPress security problems come from outdated plugins and themes. Use a small number of well-maintained plugins, keep everything updated, use strong logins with two-step sign-in, and take regular backups. A care plan can handle this for you.",
        ],
      },
      {
        heading: "How Dandilo Digitals can help",
        paragraphs: [
          "We build law firm websites on WordPress and in custom code, so we'll recommend whichever suits your practice. Full practice websites start from $899, and custom-coded builds start from $2,500. Our care plan, from $99 a month, covers updates, backups and security monitoring.",
          "Not sure which you need? Ask for a free website audit and we'll tell you honestly.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is WordPress good for law firm websites?",
        a: "Yes. Many law firms use WordPress because it handles practice area pages and a blog well and is easy to edit. Keep plugins few and up to date for security.",
      },
      {
        q: "Is a custom website better for SEO than WordPress?",
        a: "Not by itself. Both can rank well. Helpful practice area pages, local signals, reviews and a fast site matter more than the platform.",
      },
      {
        q: "How much does a law firm website cost?",
        a: "Our full practice websites start from $899 on WordPress or Wix Studio. Custom-coded websites with portals or integrations start from $2,500.",
      },
      {
        q: "Can a law firm website have a client portal?",
        a: "Yes. A secure client portal is usually built in custom code or provided by your practice management software and linked from your website.",
      },
    ],
    related: ["/industries/law-firm-web-design", "/services/wordpress-web-design", "/services/bespoke-web-design", "/blog/wix-vs-custom-website"],
  },
  {
    path: "/blog/how-long-does-it-take-to-build-a-web-app",
    kind: "blog",
    label: "How Long Does It Take to Build a Web App?",
    title: "How Long Does It Take to Build a Web App? Timelines Explained",
    description:
      "How long it takes to build a web app, portal or SaaS product: typical timelines by project size, each stage explained, and what speeds things up or slows them down.",
    eyebrow: "Guide",
    h1: "How Long Does It Take to Build a Web App?",
    date: "2026-11-20",
    readMinutes: 6,
    intro: [
      "In short: a simple web app or internal tool usually takes about 4 to 8 weeks, a focused customer portal or first product version about 6 to 12 weeks, and a full SaaS product with payments, several user types and integrations about 3 to 6 months, usually delivered in phases.",
      "The biggest factors are how many features you need, how many types of user there are, and how quickly decisions get made. Here's what a realistic timeline looks like and how to keep yours on track.",
    ],
    sections: [
      {
        heading: "Typical timelines by project size",
        bullets: [
          "Simple tool or prototype (a few screens, one user type, basic data): about 4 to 8 weeks",
          "Customer portal, booking system or internal dashboard: about 6 to 12 weeks",
          "First version of a SaaS product (an MVP) with logins and payments: about 8 to 14 weeks",
          "Full product with several user roles, integrations and reporting: about 3 to 6 months, in phases",
          "These are rough guides. A written scope gives you a real timeline for your project.",
        ],
      },
      {
        heading: "The stages of building a web app",
        bullets: [
          "Discovery (1 to 2 weeks): who uses the app, what it must do, and what it connects to",
          "Design (1 to 3 weeks): screens and user flows you can click through before any code is written",
          "Build (3 to 12+ weeks): frontend, backend and database, with regular demos",
          "Testing (1 to 2 weeks): on phones, tablets and desktops, plus security and speed checks",
          "Launch (a few days): hosting, domain, data set-up and handover",
        ],
      },
      {
        heading: "What makes a web app take longer",
        bullets: [
          "Adding features halfway through the build",
          "Many user types, each with different permissions and screens",
          "Integrations with older systems that have limited or poorly documented APIs",
          "Slow feedback or decisions on designs and demos",
          "Moving data from an old system that needs cleaning first",
        ],
      },
      {
        heading: "How to get your web app built faster",
        bullets: [
          "Start with a first version that does one job well, then add features in phases",
          "Write down the must-have features and keep nice-to-haves for later",
          "Name one person on your side who can make decisions",
          "Use proven tools for logins, payments and email instead of building them from scratch",
          "Choose a team that builds both the frontend and the backend, so nothing waits between teams",
        ],
      },
      {
        heading: "Website or web app?",
        paragraphs: [
          "A website mainly shows information and collects enquiries, and most small business websites take 2 to 6 weeks. A web app lets people log in and do things: book, order, manage data or use your service. That extra logic is why apps take longer.",
        ],
      },
      {
        heading: "How Dandilo Digitals can help",
        paragraphs: [
          "We build web apps, portals and SaaS products with Next.js, NestJS, Express.js, Laravel and Django, frontend and backend together. Custom development starts from $2,500, and every project gets a written scope and timeline before work starts.",
          "Tell us what you want to build and we'll suggest the quickest sensible first version.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does it take to build an MVP?",
        a: "A focused MVP with logins, a few core features and payments usually takes about 8 to 14 weeks, depending on scope and how quickly decisions are made.",
      },
      {
        q: "Can a web app be built in a month?",
        a: "A simple tool or prototype with a few screens can be. Anything with several user types, payments or integrations usually needs longer to be built and tested properly.",
      },
      {
        q: "Why do web apps take longer than websites?",
        a: "Web apps have logins, data, business rules and often payments and integrations. Each needs building, connecting and testing, which takes more time than pages of content.",
      },
      {
        q: "How much does it cost to build a web app?",
        a: "Our custom development starts from $2,500. The final price depends on features, user types and integrations, and you get a fixed quote before work starts.",
      },
    ],
    related: ["/services/full-stack-web-development", "/services/enterprise-web-development", "/blog/choose-tech-stack-nextjs-laravel-django-nestjs", "/blog/how-long-does-it-take-to-build-a-website"],
  },
  {
    path: "/blog/dandilo-digitals-vs-fiverr-upwork-freelancers",
    kind: "blog",
    label: "Dandilo Digitals vs Fiverr and Upwork Freelancers",
    title: "Dandilo Digitals vs Fiverr and Upwork Freelancers: Which Should You Hire?",
    description:
      "Hiring a web designer on Fiverr or Upwork, or going direct to an agency like Dandilo Digitals? Price, process, payment protection, ownership and support compared.",
    eyebrow: "Comparison",
    h1: "Dandilo Digitals vs Fiverr and Upwork Freelancers: Which Should You Hire?",
    date: "2026-11-19",
    readMinutes: 6,
    intro: [
      "In short: Fiverr and Upwork are good places to find a designer for a small, clearly defined job, and the marketplace holds your payment until the work is delivered. Hiring an agency directly suits businesses that want a full website built with a set process, one team accountable for it and support after launch.",
      "We're on both sides of this question: you can hire Dandilo Digitals on Fiverr or directly through this website. Here's how the options compare, so you can pick the one that fits your project.",
    ],
    sections: [
      {
        heading: "How hiring on Fiverr and Upwork works",
        bullets: [
          "Fiverr: sellers list fixed-price packages (called gigs). You pick a package, pay up front through Fiverr, and the money is released to the seller when you accept the delivery.",
          "Upwork: you post a job or invite freelancers, compare proposals and agree a fixed price or an hourly rate. Fixed-price work is paid into escrow and released by milestone.",
          "Both platforms add a service fee for buyers on top of the price. Check the current rate at checkout.",
          "On both, the quality depends entirely on the person you choose. Marketplaces have beginners and experienced professionals side by side.",
        ],
      },
      {
        heading: "The quick comparison",
        bullets: [
          "Price: marketplace prices start very low, but a full business website from an experienced seller costs about the same as a small agency. Our websites start from $300.",
          "Payment protection: marketplaces hold your money until delivery. When you hire us directly, you see a free homepage prototype before you pay anything, then get a fixed written quote.",
          "Scope: gig packages often cover a set number of pages or revisions, with extras charged separately. A direct quote lists everything for your project in one price.",
          "Process: varies from seller to seller. We follow the same steps on every project: plan, design you approve, build, testing on phones and desktops, launch.",
          "Communication: marketplaces keep messages on their platform. Direct hiring lets you use email, calls or WhatsApp.",
          "Support after launch: depends on the seller, and the order usually ends at delivery. We offer a care plan from $99 a month for updates, backups and small changes.",
        ],
      },
      {
        heading: "When a Fiverr or Upwork freelancer is the right choice",
        bullets: [
          "You need one small task: a logo, a single page, a bug fix or a few design changes.",
          "You know exactly what you want and can describe it clearly.",
          "You like paying through a platform that holds your money until you accept the work.",
          "You've checked the seller's past work, reviews and response time, and they match what you need.",
        ],
      },
      {
        heading: "When hiring an agency directly is the right choice",
        bullets: [
          "You need a full website, an online store, a redesign or custom features.",
          "You want one team handling design, development, on-page SEO and launch.",
          "You're moving an existing site and need to keep your Google rankings.",
          "You want to see a design before you commit, and a fixed price in writing.",
          "You'd like ongoing help after launch rather than a one-off order.",
        ],
      },
      {
        heading: "How to check any web designer, on a marketplace or not",
        bullets: [
          "Look at live websites they've built, not only screenshots.",
          "Read recent reviews from buyers with projects like yours.",
          "Ask what's included: pages, revisions, mobile testing, SEO basics, forms and launch.",
          "Confirm that your domain, hosting or platform account and the finished site will be in your name.",
          "Ask what happens if something breaks after delivery, and what it costs to fix.",
        ],
      },
      {
        heading: "Hiring Dandilo Digitals: on Fiverr or direct",
        paragraphs: [
          "If you prefer to pay through a marketplace, you can hire us on Fiverr using the button at the top of this site. If you'd rather work with us directly, ask for a free website prototype: we'll design your homepage within 48 hours, with no payment and no obligation, and you only pay if you want us to build the full site.",
          "Either way, you get the same team and the same process. Starter websites begin at $300, business websites at $899 and online stores at $1,250.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is it cheaper to hire a web designer on Fiverr?",
        a: "For small tasks, often yes. For a full business website from an experienced seller, prices are close to a small agency, and the marketplace adds a buyer service fee. Compare what's included, not just the starting price.",
      },
      {
        q: "Is it safe to hire a web designer on Upwork or Fiverr?",
        a: "The platforms protect your payment until the work is delivered, which helps. The bigger risk is choosing the wrong person, so check their past work, recent reviews and exactly what the order includes.",
      },
      {
        q: "Can I hire Dandilo Digitals on Fiverr?",
        a: "Yes. You can hire us on Fiverr or directly through this website. You get the same team and the same process either way.",
      },
      {
        q: "Do I own my website if I hire on a marketplace?",
        a: "You should. Agree in writing that the finished site is yours, and keep the domain and hosting or platform account in your own name from the start.",
      },
    ],
    related: ["/blog/freelancer-vs-agency-website", "/blog/how-to-choose-a-web-designer", "/blog/small-business-website-cost", "/services/small-business-web-design"],
  },
  {
    path: "/blog/wix-vs-custom-website",
    kind: "blog",
    label: "Wix vs a Custom Website",
    title: "Wix vs a Custom Website: Which Is Better for Your Business?",
    description:
      "Wix or a custom-coded website? Cost, speed, SEO, flexibility and ownership compared for small businesses, plus when it makes sense to move from Wix to custom.",
    eyebrow: "Comparison",
    h1: "Wix vs a Custom Website: Which Is Better for Your Business?",
    date: "2026-11-18",
    readMinutes: 7,
    intro: [
      "In short: Wix is a good fit for most small businesses that need a professional website quickly and want to edit it themselves. A custom-coded website makes sense when you need features Wix can't handle well, top speed, or full control over your code and data.",
      "Neither one is automatically better. Here's how they compare on cost, speed, SEO, flexibility and ownership, and how to tell which one your business actually needs.",
    ],
    sections: [
      {
        heading: "What we mean by each option",
        bullets: [
          "Wix (including Wix Studio): a website builder where your site lives on Wix's platform. You pay Wix a monthly plan that includes hosting, and you edit pages in a visual editor.",
          "Custom website: a site written in code (for example React, Next.js or Laravel) for your business. It runs on hosting you choose, and you own the code.",
          "A Wix site can still be custom designed. The difference is the platform underneath, not whether it looks unique.",
        ],
      },
      {
        heading: "The quick comparison",
        bullets: [
          "Upfront cost: Wix is usually cheaper to build. Custom code costs more because everything is built for you.",
          "Running costs: Wix charges a monthly plan. Custom sites need hosting, which can be low cost, plus someone to make code changes.",
          "Editing: Wix is easy to edit yourself. Custom sites need a content manager added if you want to edit them without code.",
          "Features: Wix covers bookings, stores, blogs and forms through its own apps. Custom code can do almost anything, including portals, dashboards and AI tools.",
          "Speed: a well-built Wix site is fine for most businesses. Custom code gives you more control to make pages very fast.",
          "Ownership: on Wix you own your content but can't take the site's code to another host. A custom site is yours to move anywhere.",
        ],
      },
      {
        heading: "When Wix is the right choice",
        bullets: [
          "You need a professional site in a few weeks and on a modest budget.",
          "You want to update text, photos and offers yourself.",
          "Your needs are standard: service pages, a contact or quote form, bookings, a blog or a small store.",
          "You'd rather not deal with hosting, security updates or servers.",
        ],
      },
      {
        heading: "When a custom website is the right choice",
        bullets: [
          "You need features Wix apps can't do well, like customer logins, custom calculators, dashboards or connections to your own systems.",
          "You want AI features built in, such as an assistant trained on your services or automated lead handling.",
          "Speed and performance are a priority, for example for a large site or heavy ad traffic.",
          "You want full ownership of the code and the freedom to move hosts.",
          "Your business is growing fast and you expect the website to grow into a web app.",
        ],
      },
      {
        heading: "Is Wix bad for SEO?",
        paragraphs: [
          "No. Wix sites can rank well on Google. You can edit page titles, descriptions and headings, set up redirects and connect Google Search Console. What matters most is useful content, clear service pages, a fast mobile experience and good local signals like your Google Business Profile.",
          "A custom site gives you more control over technical details, which helps on bigger or more competitive sites. For a typical local business, the platform matters less than the content and setup.",
        ],
      },
      {
        heading: "Moving from Wix to a custom website",
        paragraphs: [
          "Wix doesn't let you export your site's code, so moving means rebuilding the site on the new platform. Your text, images and domain can come with you. The important step is to keep your page addresses the same or set up redirects, so you don't lose your Google rankings.",
        ],
      },
      {
        heading: "How Dandilo Digitals can help",
        paragraphs: [
          "We build on Wix Studio and in custom code, so we'll recommend whichever suits your business rather than the one we prefer. Wix websites start from $300 for a starter site and $899 for a full business website. Fully custom-coded builds start from $2,500.",
          "Not sure which you need? Ask for a free website audit and we'll tell you honestly.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a custom website better than Wix?",
        a: "Not always. A custom website is better when you need unusual features, top performance or full ownership of the code. For many small businesses, a well-designed Wix site does the job for less money.",
      },
      {
        q: "Can I move my Wix website to custom code later?",
        a: "Yes, but Wix doesn't export your site's code, so the site has to be rebuilt. Your content and domain can move across, and redirects protect your Google rankings.",
      },
      {
        q: "Is Wix cheaper than a custom website?",
        a: "Usually, yes, to build. Wix has a monthly plan, while a custom site has hosting costs and needs a developer for code changes. Compare the total cost over two or three years, not just the build price.",
      },
      {
        q: "Can a Wix website be custom designed?",
        a: "Yes. A designer can create a unique design on Wix or Wix Studio. Custom design and custom code are different things: one is about how your site looks, the other about what it's built with.",
      },
    ],
    related: ["/services/wix-web-designer", "/services/bespoke-web-design", "/blog/wix-vs-wordpress-vs-shopify", "/blog/wix-studio-vs-wix"],
  },
  {
    path: "/blog/freelancer-vs-agency-website",
    kind: "blog",
    label: "Freelancer vs Agency for Your Website",
    title: "Hiring a Freelancer vs an Agency for Your Website: Which Is Right?",
    description:
      "Should a small business hire a freelance web designer or a web design agency? Costs, speed, quality, support and risk compared, plus the questions to ask either one.",
    eyebrow: "Comparison",
    h1: "Hiring a Freelancer vs an Agency for Your Small Business Website",
    date: "2026-11-17",
    readMinutes: 7,
    intro: [
      "In short: a good freelancer suits a simple website on a tight budget, while an agency suits bigger projects, custom features and businesses that want a team and a clear process behind them. A small remote agency often sits in the middle.",
      "The label matters less than the person or team you actually hire. Here's how the two options compare on cost, speed, quality, support and risk, and the questions that will tell you whether either one is a good fit.",
    ],
    sections: [
      {
        heading: "The quick comparison",
        bullets: [
          "Cost: freelancers are usually cheaper; agencies cost more because you pay for a team and a process.",
          "Skills: a freelancer is often strong in one or two areas; an agency covers design, development, content and SEO.",
          "Speed: a freelancer can start quickly but works alone; an agency can split work across people.",
          "Availability: if a freelancer is ill, busy or moves on, your project waits; an agency has cover.",
          "Communication: with a freelancer you talk straight to the person doing the work; with an agency you usually get a project manager.",
          "Support after launch: varies a lot with freelancers; agencies more often offer maintenance plans.",
        ],
      },
      {
        heading: "When a freelancer is the better choice",
        paragraphs: [
          "Freelancers range from beginners on marketplaces to designers with years of client work. A good one can be excellent value, especially for a small, well-defined project.",
        ],
        bullets: [
          "You need a simple 1 to 5 page website or a single landing page.",
          "Your budget is tight and the scope is clear.",
          "You want to speak directly with the person building your site.",
          "You've seen their past work and it's close to what you want.",
          "You're comfortable managing hosting, updates and small fixes yourself, or have agreed support in writing.",
        ],
      },
      {
        heading: "When an agency is the better choice",
        bullets: [
          "You need an online store, a booking system, a customer portal or AI features.",
          "Your project needs several skills: design, development, copywriting and SEO.",
          "You want a written plan, a fixed timeline and someone accountable for both.",
          "You're redesigning an existing site and need to keep your Google rankings during the move.",
          "You want ongoing support from a team rather than relying on one person.",
        ],
      },
      {
        heading: "The risks to watch for with either option",
        bullets: [
          "Not owning your website: make sure your domain, hosting account and site files are in your name, or will be handed over.",
          "No written scope: agree pages, features, price and timeline before you pay anything.",
          "Templates sold as custom work: ask whether the design is built for you or adapted from a theme. Both can be fine, but the price should match.",
          "Disappearing after launch: ask what happens if something breaks a month later, and what it costs.",
          "Hidden extras: check whether hosting, plugins, stock photos, email and changes after launch are included.",
        ],
      },
      {
        heading: "Questions to ask before you hire anyone",
        bullets: [
          "Can I see 2 or 3 websites you've built for businesses like mine?",
          "Who will actually design and build my website?",
          "What's included in the price, and what costs extra?",
          "How long will it take, and what do you need from me to stay on schedule?",
          "Will I own the domain, the hosting account and the website when it's finished?",
          "How many rounds of changes are included?",
          "What support do you offer after launch?",
        ],
      },
      {
        heading: "Where Dandilo Digitals fits",
        paragraphs: [
          "Dandilo Digitals is a small remote web design and development agency. You get a direct point of contact plus a clear process: a written plan, a design draft you approve before any code is written, testing on phones, tablets and desktops, and support after launch. You own your website and everything we build.",
          "Starter websites begin at $300, business websites at $899 and online stores at $1,250. If you're comparing quotes, ask for a free website audit first and we'll tell you honestly what your project needs.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is it cheaper to hire a freelancer or an agency for a website?",
        a: "A freelancer is usually cheaper, especially for a simple site. Agencies charge more because you get a team and a process. Small remote agencies are often close to freelancer prices for small business websites.",
      },
      {
        q: "Are freelancers on Fiverr or Upwork good for websites?",
        a: "Some are excellent and some aren't. Judge each one on their past work, reviews, communication and what's included, not on the marketplace. Always agree the scope and price in writing.",
      },
      {
        q: "What does a web design agency do that a freelancer doesn't?",
        a: "An agency usually covers more skills in one place (design, development, content and SEO), has cover if someone is unavailable, and follows a set process from planning to launch and support.",
      },
      {
        q: "How do I make sure I own my website?",
        a: "Register the domain in your own name, ask for the hosting or platform account to be in your name or transferred at launch, and get it in writing that the finished website belongs to you.",
      },
    ],
    related: ["/blog/how-to-choose-a-web-designer", "/blog/small-business-website-cost", "/blog/website-builder-vs-web-designer", "/services/small-business-web-design"],
  },
  {
    path: "/blog/how-long-does-it-take-to-build-a-website",
    kind: "blog",
    label: "How Long Does It Take to Build a Website?",
    title: "How Long Does It Take to Build a Small Business Website?",
    description:
      "Most small business websites take 2 to 6 weeks. See typical timelines for starter sites, business sites and online stores, and what speeds a project up or slows it down.",
    eyebrow: "Guide",
    h1: "How Long Does It Take to Build a Small Business Website?",
    date: "2026-11-16",
    readMinutes: 6,
    intro: [
      "In short: most small business websites take 2 to 6 weeks from the first call to launch. A simple starter site can be ready in about a week or two, while an online store or a site with custom features takes longer.",
      "The biggest factor usually isn't the design or the code. It's how quickly the content (your text, photos and decisions) is ready. Here's what a realistic timeline looks like and how to keep your project moving.",
    ],
    sections: [
      {
        heading: "Typical timelines by type of website",
        paragraphs: [
          "These are rough guides for a small business working with a designer or small agency. Every project is different, so always ask for a timeline in writing with your quote.",
        ],
        bullets: [
          "Starter website (1 to 3 pages, contact form): about 1 to 2 weeks",
          "Business website (5 to 10 pages, service pages, quote form, reviews): about 2 to 4 weeks",
          "Website redesign: about 2 to 5 weeks, depending on how much content moves across",
          "Online store (Shopify or WooCommerce, up to a few dozen products): about 3 to 6 weeks",
          "Custom web app or site with bespoke features (bookings, portals, AI tools): usually 6 weeks or more, planned in stages",
        ],
      },
      {
        heading: "The stages of a website project",
        bullets: [
          "Discovery call (1 to 3 days): your goals, services, customers and must-have features",
          "Content gathering (a few days to several weeks): text, photos, logo, prices and product details",
          "Design draft (3 to 7 days): the look and layout of your key pages",
          "Build (1 to 3 weeks): pages, forms, booking or store set-up, mobile layouts and basic SEO",
          "Review and changes (3 to 7 days): you check everything and ask for adjustments",
          "Launch (1 to 2 days): domain connection, final checks and submitting your site to Google",
        ],
      },
      {
        heading: "What slows a website project down",
        bullets: [
          "Waiting on content: the most common delay by far. A designer can't finish a services page without knowing your services.",
          "Too many decision makers: every extra person who has to approve a draft adds days.",
          "Changing the plan halfway: adding a store or a booking system mid-build means going back a step.",
          "Domain and email access: not knowing who controls your domain can hold up launch for days.",
          "Large product catalogues: every product needs photos, descriptions, prices and options.",
        ],
      },
      {
        heading: "How to get your website live faster",
        bullets: [
          "Write a short description of each service before the project starts, even in rough notes.",
          "Gather your logo, photos of your work and team, and a few customer reviews into one folder.",
          "Choose one person to give feedback and approve drafts.",
          "Make a list of 2 or 3 websites you like and say what you like about each.",
          "Find your domain login (GoDaddy, Namecheap, Squarespace Domains and so on) early.",
          "Start with the pages that bring in customers, and add extras like a blog after launch.",
        ],
      },
      {
        heading: "Fast doesn't have to mean cheap-looking",
        paragraphs: [
          "Website builders promise a site in an afternoon, and you can get a page online that quickly. But a website that brings in enquiries needs clear service pages, good photos, a strong call to action and solid mobile performance. That's worth a few weeks.",
          "If you need something online urgently, a good compromise is to launch a strong one-page or starter site first, then add more pages over the following weeks.",
        ],
      },
      {
        heading: "How long a Dandilo Digitals project takes",
        paragraphs: [
          "Most of our small business websites take 2 to 6 weeks, depending on the number of pages, the features and how quickly content is ready. You get a written timeline with your quote, and we'll tell you straight away if anything puts it at risk.",
          "Starter websites begin at $300, business websites at $899 and online stores at $1,250. If you already have a website and aren't sure whether to fix it or start again, ask for a free website audit first.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can a small business website be built in a week?",
        a: "A simple starter website with 1 to 3 pages can often be built in about a week, as long as the text, photos and logo are ready at the start.",
      },
      {
        q: "How long does a Shopify store take to set up?",
        a: "A small Shopify store usually takes about 3 to 6 weeks, depending on the number of products, how ready the product photos and descriptions are, and how much custom design is needed.",
      },
      {
        q: "Why is my website project taking so long?",
        a: "The most common reasons are waiting on content, slow feedback on drafts and features added halfway through. Ask your designer what they're waiting for and agree a new date in writing.",
      },
      {
        q: "How long after launch will my website show up on Google?",
        a: "Google usually finds a new website within a few days to a few weeks, especially if it's submitted in Search Console. Ranking well for competitive searches takes longer, often a few months.",
      },
    ],
    related: ["/blog/small-business-website-cost", "/blog/how-to-choose-a-web-designer", "/services/small-business-web-design"],
  },
  {
    path: "/blog/google-business-profile-vs-website",
    kind: "blog",
    label: "Google Business Profile vs Website",
    title: "Google Business Profile vs Website: Do You Need Both?",
    description:
      "Is a free Google Business Profile enough, or does your small business need a website too? What each one does, where each falls short, and how they work together.",
    eyebrow: "Guide",
    h1: "Google Business Profile vs Website: Do You Need Both?",
    date: "2026-11-14",
    readMinutes: 6,
    intro: [
      "A Google Business Profile is free, shows up on Google Maps and lets customers call you in one tap. So it's fair to ask: if you have one, do you still need a website?",
      "For most small businesses the answer is yes, but not because one is better than the other. They do different jobs. Here's what each one is good at, where each falls short, and how to make them work together so more searches turn into customers.",
    ],
    sections: [
      {
        heading: "The short answer",
        bullets: [
          "Your Google Business Profile helps people find you in local searches and on Google Maps.",
          "Your website convinces them to choose you, and gives them a full picture of what you offer.",
          "The profile is rented space that Google controls. Your website is yours.",
          "Used together, each one makes the other stronger: Google uses your website to understand your business, and your profile sends visitors to your website.",
        ],
      },
      {
        heading: "What a Google Business Profile does well",
        paragraphs: [
          "Your profile is the box that appears on the right of Google search results (or at the top on a phone) and your pin on Google Maps. It shows your name, opening hours, phone number, address or service area, photos and reviews.",
          "It's the fastest way to show up when someone nearby searches for what you do, like \"plumber near me\" or \"bakery in Leeds\". It's free, quick to set up, and reviews on it carry a lot of weight with customers.",
        ],
        bullets: [
          "Appears in local searches and on Google Maps",
          "One-tap calling and directions",
          "Collects and displays customer reviews",
          "Shows opening hours, photos and short updates",
        ],
      },
      {
        heading: "Where a profile alone falls short",
        bullets: [
          "Limited space: you can't fully explain your services, prices, process or what makes you different.",
          "Your competitors appear right next to you, often in the same box.",
          "Google decides the layout, what's shown and what changes. Features have been added and removed over the years without warning.",
          "Profiles can be suspended or edited by others suggesting changes, which can cost you calls until it's fixed.",
          "It only helps with local map searches. It won't rank you for questions like \"how much does a kitchen remodel cost\".",
          "It can look less established. Many customers check for a website before spending real money.",
        ],
      },
      {
        heading: "What a website adds",
        paragraphs: [
          "A website is where a customer goes once they're interested and want to decide. It has room to answer their questions, show your work and make it easy to get in touch.",
        ],
        bullets: [
          "A page for each service, so you can show up for more specific searches",
          "Room for prices or \"from\" prices, FAQs, photos and examples of your work",
          "Quote forms, online booking, WhatsApp buttons or an online store",
          "A professional email address on your own domain (you@yourbusiness.com)",
          "Somewhere to send people from ads, social media, flyers and your van",
          "Something you own and control, whatever Google changes next",
        ],
      },
      {
        heading: "How they work together",
        paragraphs: [
          "Google looks at your website to check that your profile is accurate and to understand what you offer. When your business name, address and phone number match on both, and your website clearly describes your services and area, it helps Google trust both.",
          "In the other direction, your profile's \"Website\" button sends ready-to-buy visitors straight to you. If that button leads to a slow, outdated or confusing page, those visitors leave. If it leads to a clear page with a quote form or a booking button, they become enquiries.",
        ],
      },
      {
        heading: "How to set them up properly",
        bullets: [
          "Use exactly the same business name, address (or service area) and phone number on your profile and your website.",
          "Pick the most accurate primary category on your profile and add a few relevant secondary ones.",
          "Link your profile's website button to the best page for local customers, usually your home page or a location page.",
          "Add real photos of your work, team and premises to both.",
          "Ask happy customers for Google reviews, and show a few on your website.",
          "Keep opening hours and holiday hours up to date in both places.",
          "Make sure your website loads fast on a phone and has a clear call or quote button at the top.",
        ],
      },
      {
        heading: "Which should you do first?",
        paragraphs: [
          "If you have nothing yet, set up your Google Business Profile first. It's free and takes an afternoon. Then get a simple website as soon as you can, so the visitors your profile brings have somewhere convincing to land.",
          "A website doesn't have to be expensive. At Dandilo Digitals, starter websites begin at $300 and full business websites with service pages, a quote form and reviews start at $899. If you already have a website but it isn't bringing in enquiries, we can review it for free and tell you what to fix.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a Google Business Profile enough for a small business?",
        a: "It can bring in calls for very simple local businesses, but most businesses get more enquiries with a website too. The profile gets you found; the website gives customers the information and confidence to choose you.",
      },
      {
        q: "Does a website help my Google Business Profile rank?",
        a: "Yes, it can. Google uses your website to confirm your business details and understand your services. A clear, fast website with matching contact details supports your local rankings.",
      },
      {
        q: "Is a Google Business Profile free?",
        a: "Yes. Creating and managing a Google Business Profile is free. You only pay if you choose to run Google Ads.",
      },
      {
        q: "Can I get a Google Business Profile without an address?",
        a: "Yes. If you visit customers instead of having them come to you, like cleaners, plumbers and mobile services, you can hide your address and show a service area instead.",
      },
    ],
    related: ["/blog/get-more-customers-from-your-website", "/blog/small-business-website-cost", "/services/small-business-web-design"],
  },
];
