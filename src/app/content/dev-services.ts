// Full stack development pages: one hub page plus a page per skill people search for
// (frontend, backend, Next.js, NestJS, Laravel, Django, Express.js, TypeScript, Python, Tailwind CSS, Bootstrap)
// and one for larger businesses. Each targets "hire / company / services" searches.
import type { ContentPageData } from "./types";

const STACK_LINKS = [
  "/services/frontend-development",
  "/services/backend-development",
  "/services/nextjs-development",
  "/services/nestjs-development",
  "/services/laravel-development",
  "/services/django-development",
  "/services/expressjs-development",
  "/services/typescript-development",
  "/services/python-development",
  "/services/tailwind-css-development",
  "/services/bootstrap-development",
  "/services/enterprise-web-development",
];

export const devPages: ContentPageData[] = [
  {
    path: "/services/full-stack-web-development",
    kind: "service",
    label: "Full Stack Web Development",
    title: "Full Stack Web Development Services | Dandilo Digitals",
    description:
      "Hire a full stack development team for frontend and backend: React, Next.js, NestJS, Express, Laravel, Django, TypeScript, Python, PHP and MySQL.",
    eyebrow: "Full Stack Development",
    h1: "Full Stack Web Development: Frontend and Backend, Built Together",
    intro: [
      "Some projects need more than a website builder: a customer portal, a booking system, a dashboard, an internal tool or a web app with logins and payments. That takes a full stack team, people who build both what your users see (the frontend) and the servers, databases and APIs behind it (the backend).",
      "Dandilo Digitals is a full stack web development agency. We design and build the whole thing, from the first screen to the database, so you deal with one team and get one product that works.",
    ],
    sections: [
      {
        heading: "Our full stack technology",
        bullets: [
          "Frontend: React, Next.js, TypeScript, JavaScript and Tailwind CSS",
          "Backend: Node.js with NestJS and Express.js, PHP with Laravel, Python with Django",
          "Databases: MySQL and PostgreSQL, with Prisma and Eloquent ORMs",
          "APIs: REST APIs, webhooks and third-party integrations (Stripe, Google, Meta, CRMs)",
          "Logins and security: user accounts, roles, two-step login and secure data handling",
          "Hosting and deployment: Vercel, cloud servers and managed databases",
        ],
      },
      {
        heading: "What we build",
        bullets: [
          "Custom web applications and SaaS products",
          "Client portals and member areas",
          "Admin dashboards and CRMs",
          "Booking, quoting and ordering systems",
          "APIs and integrations that connect your tools",
          "Fast marketing websites with custom features",
        ],
      },
      {
        heading: "Why use one full stack team?",
        paragraphs: [
          "When one team builds the frontend and the backend, nothing gets lost between them. Features ship faster, bugs are easier to fix and there's one person to call when something needs to change.",
          "We also built our own CRM this way: a React frontend, a NestJS and TypeScript backend, a PostgreSQL database and secure logins. It's the same approach we take for clients.",
        ],
      },
      {
        heading: "How a full stack project works",
        bullets: [
          "Discovery: we agree what the app must do and who uses it",
          "Plan: screens, data and the right tech stack for your budget",
          "Build: frontend and backend together, with regular demos",
          "Launch: hosting, security checks and handover",
          "Support: fixes, updates and new features on a care plan",
        ],
      },
    ],
    faqs: [
      {
        q: "What does a full stack developer do?",
        a: "A full stack developer builds both the frontend (the pages and screens people use) and the backend (the server, database and APIs that store data and run the logic).",
      },
      {
        q: "Which tech stack should I choose?",
        a: "It depends on your project. Next.js with NestJS or Express suits fast, modern web apps in TypeScript. Laravel suits PHP teams and classic business apps. Django suits data-heavy and Python-based projects. We'll recommend the best fit.",
      },
      {
        q: "How much does full stack web development cost?",
        a: "Custom development starts from $2,500. The final price depends on the number of features, user types and integrations. We send a fixed quote before work starts.",
      },
      {
        q: "Can you take over an existing app?",
        a: "Yes. We can review your current code, fix problems and keep building on it, whether it's in JavaScript, TypeScript, PHP or Python.",
      },
      {
        q: "How long does it take to build a web app?",
        a: "A focused web app, portal or internal tool often takes 6 to 12 weeks. Bigger products with payments, several user types and integrations are built in phases over a few months, so you can start using the first version sooner.",
      },
      {
        q: "Will I own the code?",
        a: "Yes. The code, the database and the hosting accounts are yours, and we hand over documentation so any developer can continue the work.",
      },
    ],
    related: [...STACK_LINKS, "/blog/choose-tech-stack-nextjs-laravel-django-nestjs", "/blog/web-designer-vs-web-developer", "/pricing"],
  },
  {
    path: "/services/frontend-development",
    kind: "service",
    label: "Frontend Development",
    title: "Frontend Development Services: React & Next.js | Dandilo",
    description:
      "Frontend development with React, Next.js, TypeScript, JavaScript and Tailwind CSS. Fast, responsive, accessible interfaces for websites and web apps.",
    eyebrow: "Frontend Development",
    h1: "Frontend Development with React, Next.js and Tailwind CSS",
    intro: [
      "The frontend is everything your customers see and touch: pages, forms, dashboards and checkouts. If it's slow, confusing or broken on a phone, people leave.",
      "We build fast, responsive and accessible frontends with React, Next.js, TypeScript and Tailwind CSS, connected to your backend or API.",
    ],
    sections: [
      {
        heading: "Frontend skills",
        bullets: [
          "React and Next.js (App Router, server components, static and server rendering)",
          "TypeScript and modern JavaScript (ES2023+)",
          "Tailwind CSS design systems and reusable components",
          "Animations and interactions that stay fast",
          "Accessibility (WCAG) and mobile-first responsive design",
          "SEO-friendly rendering, Core Web Vitals and performance tuning",
        ],
      },
      {
        heading: "Frontend projects we take on",
        bullets: [
          "Marketing websites and landing pages",
          "Web app interfaces and dashboards",
          "Headless Shopify and headless WordPress frontends",
          "Turning Figma designs into pixel-perfect code",
          "Speeding up slow React apps",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you turn Figma designs into code?",
        a: "Yes. We build Figma designs into clean React or Next.js components with Tailwind CSS, matching the design on every screen size.",
      },
      {
        q: "Can you connect the frontend to our existing API?",
        a: "Yes. We connect to REST APIs and other backends, or build the backend for you as part of a full stack project.",
      },
      {
        q: "How much does frontend development cost?",
        a: "Custom-coded websites and web apps start from $2,500. Smaller frontend jobs, such as turning a design into code or speeding up an existing app, are quoted after we review them.",
      },
      {
        q: "Will the frontend be accessible?",
        a: "Yes. We follow WCAG guidelines: good contrast, keyboard navigation, visible focus states, labelled forms and image descriptions.",
      },
      {
        q: "Can you make our slow website or app faster?",
        a: "Yes. We measure Core Web Vitals, then fix the biggest causes, such as heavy images, too much JavaScript or slow data loading.",
      },
      {
        q: "Do you use Tailwind CSS or Bootstrap?",
        a: "Mostly Tailwind CSS for custom designs, and Bootstrap when a project already uses it or needs ready-made admin layouts. We work with both.",
      },
    ],
    related: ["/services/full-stack-web-development", "/services/nextjs-development", "/services/backend-development"],
  },
  {
    path: "/services/backend-development",
    kind: "service",
    label: "Backend Development",
    title: "Backend Development Services: APIs & Databases | Dandilo",
    description:
      "Backend and API development with Node.js, NestJS, Express.js, Laravel, Django, TypeScript, Python, PHP and MySQL. Secure, scalable servers for web apps.",
    eyebrow: "Backend Development",
    h1: "Backend Development: APIs, Databases and Server Logic",
    intro: [
      "The backend is the engine behind your app. It stores your data, runs your business rules, handles logins and payments, and talks to other services.",
      "We build secure, well-structured backends and APIs in Node.js (NestJS and Express.js), PHP (Laravel) and Python (Django), on MySQL or PostgreSQL databases.",
    ],
    sections: [
      {
        heading: "Backend skills",
        bullets: [
          "Node.js with NestJS and Express.js, written in TypeScript",
          "PHP with Laravel",
          "Python with Django and Django REST Framework",
          "MySQL and PostgreSQL database design, migrations and backups",
          "REST APIs, webhooks and background jobs",
          "Authentication, user roles and permissions",
          "Payments (Stripe), email, and integrations with CRMs and Google or Meta APIs",
        ],
      },
      {
        heading: "Built to be secure",
        bullets: [
          "Input validation and protection against common attacks",
          "Rate limiting and bot protection on public endpoints",
          "Secrets kept out of code, encrypted connections",
          "Logs and monitoring so problems are caught early",
        ],
      },
    ],
    faqs: [
      {
        q: "Which backend language is best?",
        a: "Node.js (NestJS or Express) is great for TypeScript teams and real-time apps, Laravel for PHP and classic business apps, and Django for Python and data-heavy projects. All three are proven and well supported.",
      },
      {
        q: "Can you build an API for our mobile app?",
        a: "Yes. We build REST APIs that web and mobile apps can use, with logins, documentation and security built in.",
      },
      {
        q: "How much does backend development cost?",
        a: "Custom backend development starts from $2,500. The price depends on features, user types and integrations, and we send a fixed quote before work starts.",
      },
      {
        q: "Where will my backend be hosted?",
        a: "Usually on Vercel or a cloud server with a managed MySQL or PostgreSQL database. We set it up in your name and recommend options that fit your traffic and budget.",
      },
      {
        q: "Can you connect payments and our CRM?",
        a: "Yes. We integrate payments (for example Stripe), email, CRMs and other tools through their APIs and webhooks.",
      },
      {
        q: "How do you keep the backend secure?",
        a: "We validate every input, limit repeated requests, keep secrets out of the code, use encrypted connections and keep dependencies up to date.",
      },
    ],
    related: ["/services/full-stack-web-development", "/services/nestjs-development", "/services/laravel-development", "/services/django-development"],
  },
  {
    path: "/services/nextjs-development",
    kind: "service",
    label: "Next.js Development",
    title: "Next.js Development Company: React & TypeScript | Dandilo",
    description:
      "Hire Next.js developers for fast, SEO-friendly websites and web apps built with React, TypeScript and Tailwind CSS. Next.js development from $2,500.",
    eyebrow: "Next.js Development",
    h1: "Next.js Development for Fast, SEO-Friendly Websites and Apps",
    intro: [
      "Next.js is the React framework used by companies that need speed and good Google rankings. Pages load fast, search engines can read everything, and the same codebase can power a website and a full web app.",
      "We build Next.js websites and applications with TypeScript and Tailwind CSS, deployed on Vercel or your own servers.",
    ],
    sections: [
      {
        heading: "Next.js services",
        bullets: [
          "New Next.js websites and web apps",
          "Migrating from WordPress, Wix or Create React App to Next.js",
          "Headless CMS and headless Shopify with Next.js",
          "API routes, server actions and database connections",
          "SEO: metadata, sitemaps, structured data and fast Core Web Vitals",
          "Deployment and hosting on Vercel",
        ],
      },
      {
        heading: "When Next.js is the right choice",
        paragraphs: [
          "Choose Next.js when you need custom features, top performance and strong SEO in one project, or when your website will grow into an app. For a simple brochure site, WordPress or Wix Studio may be quicker and cheaper, and we'll tell you honestly.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Next.js good for SEO?",
        a: "Yes. Next.js renders pages on the server or at build time, so search engines see the full content, and pages load fast, which also helps rankings.",
      },
      {
        q: "Can you move my WordPress site to Next.js?",
        a: "Yes. We can rebuild it in Next.js, keep your content (or connect WordPress as a headless CMS) and set up redirects so you keep your Google rankings.",
      },
      {
        q: "How much does a Next.js website cost?",
        a: "Custom-coded Next.js websites and web apps start from $2,500. The price depends on the number of pages, features and integrations, and we send a fixed quote before work starts.",
      },
      {
        q: "Where is a Next.js website hosted?",
        a: "Usually on Vercel, the company behind Next.js, which handles speed and security for you. Next.js can also run on your own cloud servers if you prefer.",
      },
      {
        q: "Can I edit a Next.js website without code?",
        a: "Yes, if we connect a content manager (a headless CMS) for your pages and blog. Without one, text changes need a developer, so tell us how often you plan to update the site.",
      },
      {
        q: "Is Next.js the same as React?",
        a: "Next.js is built on React. React builds the screens; Next.js adds page routing, server rendering, SEO features and fast loading on top.",
      },
    ],
    related: ["/services/full-stack-web-development", "/services/typescript-development", "/services/tailwind-css-development", "/services/nestjs-development"],
  },
  {
    path: "/services/nestjs-development",
    kind: "service",
    label: "NestJS Development",
    title: "NestJS Development Company: Node.js & TypeScript APIs | Dandilo",
    description:
      "Hire NestJS developers for structured Node.js backends and REST APIs in TypeScript, with MySQL or PostgreSQL, logins, payments and integrations.",
    eyebrow: "NestJS Development",
    h1: "NestJS Development for Structured Node.js Backends",
    intro: [
      "NestJS and Express.js are the most popular ways to build backends in Node.js. Express is lightweight and flexible; NestJS adds structure, TypeScript and built-in patterns that keep large APIs clean as they grow.",
      "We build Node.js backends and REST APIs with NestJS and Express.js in TypeScript, connected to MySQL or PostgreSQL. Our own CRM runs on NestJS.",
    ],
    sections: [
      {
        heading: "NestJS services",
        bullets: [
          "REST APIs for web and mobile apps",
          "Authentication and user roles (including Clerk, JWT and OAuth)",
          "Database design with Prisma or TypeORM on MySQL or PostgreSQL",
          "Payments, email, webhooks and third-party integrations",
          "Rate limiting, validation and security hardening",
          "Serverless deployment on Vercel or containers on cloud servers",
        ],
      },
      {
        heading: "NestJS or Express.js?",
        paragraphs: [
          "Express.js is ideal for small APIs and quick integrations. NestJS is better for bigger, long-lived backends where several developers work on the code. We help you choose, and both pair perfectly with a React or Next.js frontend.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why use TypeScript for the backend?",
        a: "TypeScript catches many mistakes before the code runs and makes large codebases easier to change safely. It also lets the frontend and backend share the same types.",
      },
      {
        q: "Can you add features to our existing Express.js API?",
        a: "Yes. We can review your current code, fix problems and add new endpoints, or gradually move it to NestJS if it has outgrown Express.",
      },
      {
        q: "What is NestJS used for?",
        a: "NestJS is used to build backends and APIs in Node.js: logins, data, payments and business rules for web and mobile apps. Its structure makes it a good fit for larger, long-lived projects.",
      },
      {
        q: "Should I use NestJS or Express.js?",
        a: "Express.js suits small APIs and quick integrations. NestJS is better for bigger backends that several developers will work on. NestJS runs on top of Express, so moving later is possible.",
      },
      {
        q: "How much does NestJS development cost?",
        a: "Custom backend development starts from $2,500. The price depends on the features, user types and integrations. We send a fixed quote before work starts.",
      },
      {
        q: "Can you build the frontend too?",
        a: "Yes. We pair NestJS with React or Next.js frontends, often sharing TypeScript types between the two.",
      },
    ],
    related: ["/services/expressjs-development", "/services/typescript-development", "/services/backend-development", "/services/nextjs-development"],
  },
  {
    path: "/services/laravel-development",
    kind: "service",
    label: "Laravel & PHP Development",
    title: "Laravel Development Company: PHP & MySQL | Dandilo",
    description:
      "Hire Laravel developers for PHP web applications, APIs and admin panels on MySQL. Custom Laravel development, upgrades and maintenance.",
    eyebrow: "Laravel & PHP",
    h1: "Laravel Development: PHP Web Applications on MySQL",
    intro: [
      "Laravel is the most popular PHP framework. It's reliable, quick to build with and runs on almost any hosting, which makes it a great choice for business applications, portals and APIs.",
      "We build and maintain Laravel applications in PHP with MySQL, from new projects to upgrades of older Laravel and PHP code.",
    ],
    sections: [
      {
        heading: "Laravel services",
        bullets: [
          "Custom Laravel web applications and admin panels",
          "REST APIs with Laravel and Sanctum authentication",
          "MySQL database design with Eloquent ORM and migrations",
          "Laravel upgrades and PHP version updates",
          "Bug fixing and performance tuning for existing PHP apps",
          "Integrations: payments, email, SMS and third-party APIs",
        ],
      },
      {
        heading: "Laravel with a modern frontend",
        paragraphs: [
          "Laravel works well on its own with Blade templates, or as a backend API for a React, Next.js or Vue frontend styled with Tailwind CSS. We'll pick the setup that suits your team and budget.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you upgrade our old Laravel app?",
        a: "Yes. We upgrade older Laravel and PHP versions step by step, fix what breaks and add tests so future updates are easier.",
      },
      {
        q: "Is Laravel good for large applications?",
        a: "Yes. Laravel powers many large applications. With good structure, caching and queues it scales well.",
      },
      {
        q: "How much does Laravel development cost?",
        a: "Custom Laravel development starts from $2,500. The final price depends on features, user types and integrations, and we send a fixed quote before work starts.",
      },
      {
        q: "Can you fix bugs in our existing PHP app?",
        a: "Yes. We review the code, fix the most urgent problems first and explain what else needs attention, whether it's built in Laravel or plain PHP.",
      },
      {
        q: "Where can a Laravel app be hosted?",
        a: "Almost anywhere that runs PHP and MySQL, from shared hosting to cloud servers. We'll recommend hosting that fits your traffic and budget.",
      },
      {
        q: "Can Laravel work with a React or Vue frontend?",
        a: "Yes. Laravel can act as the API behind a React, Next.js or Vue frontend, or render pages itself with Blade templates.",
      },
    ],
    related: ["/services/full-stack-web-development", "/services/backend-development", "/services/django-development"],
  },
  {
    path: "/services/django-development",
    kind: "service",
    label: "Django Development",
    title: "Django Development Services: Python Web Apps | Dandilo",
    description:
      "Hire Django developers for Python web applications, REST APIs and admin dashboards on PostgreSQL or MySQL. Custom Django development and support.",
    eyebrow: "Django Development",
    h1: "Django Development: Python Web Applications and APIs",
    intro: [
      "Django is a Python framework built for getting serious web applications to market quickly and securely. It comes with an admin panel, user accounts and strong security out of the box.",
      "We build Django web applications and REST APIs in Python, on PostgreSQL or MySQL, and connect them to modern React or Next.js frontends.",
    ],
    sections: [
      {
        heading: "Django services",
        bullets: [
          "Custom Django web applications",
          "REST APIs with Django REST Framework",
          "Admin dashboards and internal tools using the Django admin",
          "Data-heavy apps, reports and integrations with Python libraries",
          "PostgreSQL and MySQL database design",
          "Upgrades, bug fixing and maintenance of existing Django projects",
        ],
      },
      {
        heading: "Why Django and Python?",
        paragraphs: [
          "Python is the language of data and automation, so Django is a natural fit when your app needs reports, data processing or AI features. Its built-in admin also saves time on internal tools.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can Django work with a React or Next.js frontend?",
        a: "Yes. Django REST Framework provides the API and React or Next.js provides the interface. It's a common and reliable full stack setup.",
      },
      {
        q: "Do you maintain existing Django projects?",
        a: "Yes. We can take over, upgrade and keep improving your current Django application.",
      },
      {
        q: "How much does Django development cost?",
        a: "Custom Django development starts from $2,500. The price depends on features, user types and integrations, and we send a fixed quote before work starts.",
      },
      {
        q: "Is Django secure?",
        a: "Yes. Django has strong protection against common attacks built in, such as SQL injection, cross-site scripting and cross-site request forgery. We add rate limiting, safe secrets handling and updates on top.",
      },
      {
        q: "Is Django good for AI features?",
        a: "Yes. Because Django is Python, it connects easily to AI services and Python libraries for data processing, reports and automation.",
      },
      {
        q: "Should I choose Django or Laravel?",
        a: "Choose Django for data-heavy or Python-based projects and Laravel for classic PHP business apps. Both are reliable, and we build with both.",
      },
    ],
    related: ["/services/python-development", "/services/full-stack-web-development", "/services/backend-development", "/services/laravel-development"],
  },
  {
    path: "/services/enterprise-web-development",
    kind: "service",
    label: "Enterprise Web Development",
    title: "Enterprise Web Development for Larger Businesses | Dandilo",
    description:
      "Custom web development for larger businesses: portals, dashboards, internal tools and integrations built with Next.js, NestJS, Laravel or Django. Fixed quotes.",
    eyebrow: "For Larger Businesses",
    h1: "Custom Web Development for Larger Businesses and Growing Companies",
    intro: [
      "Larger businesses outgrow website builders. You need systems that connect to your CRM and finance tools, handle many users with different permissions, keep data secure and stay fast as traffic grows.",
      "Dandilo Digitals builds custom-coded websites, portals and web applications for established and fast-growing companies. We're a focused remote team, which suits mid-size businesses and departments or product teams inside larger companies that want one dedicated team for a defined project.",
    ],
    sections: [
      {
        heading: "What we build for larger businesses",
        bullets: [
          "Customer and partner portals with secure logins",
          "Internal tools, admin dashboards and reporting",
          "Multi-location and multi-brand websites on one codebase",
          "Integrations with CRMs, ERPs, payment providers and marketing tools",
          "APIs for web and mobile apps",
          "Rebuilds of slow or outdated systems, done in stages without downtime",
        ],
      },
      {
        heading: "Built to scale and stay secure",
        bullets: [
          "User roles and permissions, so each team sees only what it needs",
          "Input validation, rate limiting and protection against common attacks",
          "Secrets kept out of code, encrypted connections and regular backups",
          "Fast pages and efficient databases that handle growing traffic",
          "Clean, documented code your own developers can take over",
        ],
      },
      {
        heading: "Technology",
        paragraphs: [
          "We choose the stack that fits your team and existing systems: Next.js, React and TypeScript for the frontend; NestJS, Express.js, Laravel or Django for the backend; MySQL or PostgreSQL for data; Tailwind CSS or Bootstrap for the design layer. If your company already uses one of these, we work within it.",
        ],
      },
      {
        heading: "How we work with larger teams",
        bullets: [
          "Discovery: we meet the people who will use the system and agree the scope in writing",
          "Plan: screens, data, integrations and a phased timeline with a fixed quote per phase",
          "Build: regular demos, so you see progress and give feedback early",
          "Launch: testing, security checks, hosting set-up and handover documents",
          "Support: a care plan for fixes, updates and new features",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you work with large companies?",
        a: "Yes. We're a small remote team, so we suit mid-size businesses and defined projects inside larger companies, such as a portal, an internal tool or an integration, rather than very large multi-year programmes.",
      },
      {
        q: "How much does enterprise web development cost?",
        a: "Custom development starts from $2,500. Larger systems are quoted in phases after a discovery call, so you get a fixed price for each stage before work starts.",
      },
      {
        q: "Can you integrate with our existing systems?",
        a: "Usually, yes. If your CRM, ERP or other tools have an API, we can connect them so data moves automatically. We check what's possible during discovery.",
      },
      {
        q: "Who owns the code?",
        a: "You do. The code, the database and the hosting accounts are yours, and we hand over documentation so your own developers or another team can continue the work.",
      },
      {
        q: "Can you work alongside our in-house developers?",
        a: "Yes. We can follow your code standards, use your repositories and tools, and take on a defined part of the project.",
      },
      {
        q: "How long does a custom project take?",
        a: "A focused portal or internal tool often takes 6 to 12 weeks. Larger systems are delivered in phases, so you start using the first parts sooner.",
      },
    ],
    related: ["/services/full-stack-web-development", "/services/nextjs-development", "/services/nestjs-development", "/services/laravel-development", "/services/django-development", "/pricing"],
  },
  {
    path: "/services/expressjs-development",
    kind: "service",
    label: "Express.js Development",
    title: "Express.js Development: Node.js APIs & Backends | Dandilo",
    description:
      "Hire Express.js developers for fast Node.js APIs, webhooks and backends in TypeScript or JavaScript, with MySQL or PostgreSQL. New builds, fixes and upgrades.",
    eyebrow: "Express.js Development",
    h1: "Express.js Development: Fast, Simple Node.js APIs",
    intro: [
      "Express.js is the most widely used way to build a backend in Node.js. It's small, flexible and quick to start with, which makes it a great fit for APIs, webhooks and integrations that need to be built fast and kept simple.",
      "We build and maintain Express.js backends in TypeScript or JavaScript, connected to MySQL or PostgreSQL and to the tools your business already uses.",
    ],
    sections: [
      {
        heading: "Express.js services",
        bullets: [
          "REST APIs for websites, web apps and mobile apps",
          "Webhooks and integrations with payments, CRMs and email tools",
          "Logins and user roles with secure sessions or tokens",
          "Database design on MySQL or PostgreSQL",
          "Fixing bugs, speeding up and securing existing Express apps",
          "Moving JavaScript Express code to TypeScript",
        ],
      },
      {
        heading: "When Express.js is the right choice",
        paragraphs: [
          "Express suits small to medium APIs, quick integrations and projects where a light setup matters. For larger backends that several developers will work on for years, NestJS (which runs on Express) adds structure. We'll recommend the one that fits.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is Express.js used for?",
        a: "Express.js is used to build backends and APIs in Node.js: it receives requests from a website or app, runs the business logic, talks to the database and sends back a response.",
      },
      {
        q: "Is Express.js still a good choice?",
        a: "Yes. It's mature, widely used and well supported. Its simplicity makes it quick to build with and easy for other developers to understand.",
      },
      {
        q: "Express.js or NestJS?",
        a: "Express for small APIs and quick integrations; NestJS for larger, long-lived backends. NestJS is built on Express, so you can move to it later.",
      },
      {
        q: "Can you work on our existing Express.js app?",
        a: "Yes. We review the code, fix the most urgent problems, add security basics like validation and rate limiting, and then add new features.",
      },
      {
        q: "How much does Express.js development cost?",
        a: "Custom backend development starts from $2,500. Small fixes and integrations on an existing app are quoted separately after we review it.",
      },
      {
        q: "Do you use TypeScript with Express?",
        a: "Yes, for new projects. TypeScript catches mistakes before the code runs and makes the API easier to change safely.",
      },
    ],
    related: ["/services/nestjs-development", "/services/typescript-development", "/services/backend-development", "/services/full-stack-web-development"],
  },
  {
    path: "/services/typescript-development",
    kind: "service",
    label: "TypeScript Development",
    title: "TypeScript Development Services: Web Apps & APIs | Dandilo",
    description:
      "Hire TypeScript developers for web apps, APIs and frontends with React, Next.js, NestJS and Express.js. New builds and JavaScript-to-TypeScript migrations.",
    eyebrow: "TypeScript Development",
    h1: "TypeScript Development for Reliable Web Apps and APIs",
    intro: [
      "TypeScript is JavaScript with types. It catches many mistakes while the code is being written instead of when your customers use it, and it makes large codebases much easier to change safely.",
      "We write our web apps and APIs in TypeScript, on both the frontend (React and Next.js) and the backend (NestJS and Express.js), so the two sides share the same definitions of your data.",
    ],
    sections: [
      {
        heading: "TypeScript services",
        bullets: [
          "New web apps and websites in TypeScript with React and Next.js",
          "Backends and REST APIs in TypeScript with NestJS or Express.js",
          "Moving existing JavaScript projects to TypeScript step by step",
          "Shared types between frontend and backend",
          "Database access with Prisma, with types generated from your data",
          "Code reviews and clean-up of existing TypeScript projects",
        ],
      },
      {
        heading: "Why TypeScript is worth it",
        paragraphs: [
          "For a small script, plain JavaScript is fine. For a product that will grow, TypeScript pays for itself: fewer bugs reach users, new developers understand the code faster, and changes that would break something are flagged straight away.",
        ],
      },
    ],
    faqs: [
      {
        q: "What's the difference between TypeScript and JavaScript?",
        a: "TypeScript is JavaScript plus types that describe your data. It's turned into normal JavaScript before it runs, so it works everywhere JavaScript does.",
      },
      {
        q: "Can you convert our JavaScript project to TypeScript?",
        a: "Yes. We move it over file by file, so the app keeps working throughout, starting with the parts that change most often.",
      },
      {
        q: "Does TypeScript make development more expensive?",
        a: "It adds a little time at the start but usually saves more by preventing bugs and making changes safer, especially on projects that will keep growing.",
      },
      {
        q: "Which frameworks do you use with TypeScript?",
        a: "React and Next.js for the frontend, NestJS and Express.js for the backend, and Prisma for the database.",
      },
      {
        q: "How much does TypeScript development cost?",
        a: "Custom-coded projects start from $2,500. The price depends on features and integrations, and we send a fixed quote before work starts.",
      },
      {
        q: "Do you use TypeScript in your own products?",
        a: "Yes. Our own CRM uses a React frontend and a NestJS backend, both in TypeScript, the same way we build for clients.",
      },
    ],
    related: ["/services/nextjs-development", "/services/nestjs-development", "/services/expressjs-development", "/services/frontend-development"],
  },
  {
    path: "/services/python-development",
    kind: "service",
    label: "Python Development",
    title: "Python Web Development: Django, APIs & Automation | Dandilo",
    description:
      "Hire Python developers for Django web apps, REST APIs, data processing, reports, automation and AI integrations, on PostgreSQL or MySQL.",
    eyebrow: "Python Development",
    h1: "Python Web Development: Web Apps, APIs, Data and Automation",
    intro: [
      "Python is the language of data, automation and AI. If your web app needs to process data, produce reports, connect to AI services or automate repetitive work, Python is often the best tool for the job.",
      "We build Python web applications with Django, plus APIs, data tools and automations that connect to your website and business systems.",
    ],
    sections: [
      {
        heading: "Python services",
        bullets: [
          "Web applications and admin dashboards with Django",
          "REST APIs with Django REST Framework",
          "Data processing, imports, exports and reports",
          "Automations that move data between your tools",
          "AI features connected to your app, such as summaries or assistants",
          "Fixing, upgrading and maintaining existing Python projects",
        ],
      },
      {
        heading: "Python with a modern frontend",
        paragraphs: [
          "Python works well behind a React or Next.js frontend: Python handles the data and logic, and the frontend gives your users a fast, modern interface. For internal tools, the built-in Django admin can save a lot of time.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Python good for web development?",
        a: "Yes. With Django, Python powers secure, full-featured web apps and APIs. It's especially strong when the app works with data, reports or AI.",
      },
      {
        q: "What can Python automate for my business?",
        a: "Common examples are moving data between tools, creating reports, processing uploads and sending follow-up emails. We look at your process and suggest what's worth automating.",
      },
      {
        q: "Python or Node.js for my backend?",
        a: "Choose Python for data-heavy work, reports and AI features. Choose Node.js (NestJS or Express) when you want TypeScript across frontend and backend. Both are reliable.",
      },
      {
        q: "Can you add AI features to our app?",
        a: "Yes. We can connect your app to AI services for things like summarising text, answering questions about your content or sorting incoming requests.",
      },
      {
        q: "How much does Python development cost?",
        a: "Custom development starts from $2,500. Smaller automations are quoted separately after we understand the task.",
      },
      {
        q: "Do you work on existing Python code?",
        a: "Yes. We can review, fix, upgrade and extend existing Python and Django projects.",
      },
    ],
    related: ["/services/django-development", "/services/backend-development", "/services/full-stack-web-development", "/services/enterprise-web-development"],
  },
  {
    path: "/services/tailwind-css-development",
    kind: "service",
    label: "Tailwind CSS Development",
    title: "Tailwind CSS Development: Fast, Custom Interfaces | Dandilo",
    description:
      "Hire Tailwind CSS developers to turn designs into fast, responsive, accessible interfaces with React and Next.js. Design systems, Figma to code and redesigns.",
    eyebrow: "Tailwind CSS",
    h1: "Tailwind CSS Development for Fast, Custom Interfaces",
    intro: [
      "Tailwind CSS is a styling tool that lets developers build custom designs quickly, without heavy theme files. Pages stay light and fast, and the design stays consistent across every screen.",
      "We use Tailwind CSS with React and Next.js to turn designs into responsive, accessible interfaces, and to build reusable design systems for websites and web apps.",
    ],
    sections: [
      {
        heading: "Tailwind CSS services",
        bullets: [
          "Turning Figma designs into Tailwind CSS and React components",
          "Design systems: colors, type, spacing and reusable components",
          "Responsive layouts that work from small phones to large screens",
          "Accessible components with visible focus states and good contrast",
          "Moving older CSS or Bootstrap projects to Tailwind CSS",
          "Dark mode and theme support",
        ],
      },
      {
        heading: "Why Tailwind CSS?",
        paragraphs: [
          "Tailwind only ships the styles your pages use, so files stay small and pages load fast. Because styles live next to the components, design changes are quicker and less likely to break other pages.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Tailwind CSS good for SEO?",
        a: "Indirectly, yes. Tailwind keeps style files small, which helps pages load fast, and speed is one of the things Google looks at.",
      },
      {
        q: "Tailwind CSS or Bootstrap?",
        a: "Tailwind suits custom designs where you want a unique look. Bootstrap suits projects that want ready-made components and a familiar layout quickly. We work with both.",
      },
      {
        q: "Can you turn our Figma design into Tailwind code?",
        a: "Yes. We build it as reusable React or Next.js components with Tailwind CSS, matching the design on phones, tablets and desktops.",
      },
      {
        q: "Can you move our Bootstrap site to Tailwind CSS?",
        a: "Yes. We rebuild it page by page, keeping the content and layout working while the styles move across.",
      },
      {
        q: "Does Tailwind CSS work with WordPress or Laravel?",
        a: "Yes. Tailwind works with almost any setup, including Laravel Blade templates and custom WordPress themes.",
      },
      {
        q: "How much does a Tailwind CSS project cost?",
        a: "It depends on the number of pages and components. Custom-coded websites start from $2,500, and smaller frontend jobs are quoted after we see the design.",
      },
    ],
    related: ["/services/frontend-development", "/services/bootstrap-development", "/services/nextjs-development", "/services/typescript-development"],
  },
  {
    path: "/services/bootstrap-development",
    kind: "service",
    label: "Bootstrap Development",
    title: "Bootstrap Development: Responsive Websites & Fixes | Dandilo",
    description:
      "Hire Bootstrap developers for responsive websites, admin panels and dashboards, plus fixes, upgrades to Bootstrap 5 and moves to Tailwind CSS.",
    eyebrow: "Bootstrap Development",
    h1: "Bootstrap Development for Responsive Websites and Admin Panels",
    intro: [
      "Bootstrap is one of the most widely used front-end toolkits. Its ready-made grid and components make it quick to build responsive websites, admin panels and dashboards that work on any screen.",
      "We build new Bootstrap projects, fix and modernise existing ones, and upgrade older Bootstrap versions so your site stays fast, secure and mobile-friendly.",
    ],
    sections: [
      {
        heading: "Bootstrap services",
        bullets: [
          "Responsive websites and landing pages with Bootstrap",
          "Admin panels and dashboards for Laravel, Django or Node.js apps",
          "Upgrading Bootstrap 3 or 4 sites to Bootstrap 5",
          "Fixing layout problems on phones and tablets",
          "Custom Bootstrap themes that match your brand",
          "Moving Bootstrap projects to Tailwind CSS when a custom design is needed",
        ],
      },
      {
        heading: "When Bootstrap is the right choice",
        paragraphs: [
          "Bootstrap is a good fit when you want a reliable, familiar layout quickly, for example for an internal tool or an admin area, or when your existing site is already built with it. For a highly custom design, Tailwind CSS usually gives more freedom.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Bootstrap still used?",
        a: "Yes. Bootstrap is still widely used, especially for admin panels, dashboards and business websites, and Bootstrap 5 is actively maintained.",
      },
      {
        q: "Can you upgrade my site to Bootstrap 5?",
        a: "Yes. We update the code, replace parts that changed between versions and test every page on phones, tablets and desktops.",
      },
      {
        q: "My Bootstrap site looks broken on phones. Can you fix it?",
        a: "Yes. We find the layout problems, fix them and test on real screen sizes so the site works for mobile visitors.",
      },
      {
        q: "Bootstrap or Tailwind CSS?",
        a: "Bootstrap for quick, familiar layouts and admin areas; Tailwind CSS for custom designs. We work with both and will recommend the better fit.",
      },
      {
        q: "Does Bootstrap work with Laravel and Django?",
        a: "Yes. Bootstrap works well with Laravel Blade templates, Django templates and React, which is why it's common in admin panels.",
      },
      {
        q: "How much does Bootstrap development cost?",
        a: "Small fixes and upgrades are quoted after we review your site. New custom-coded websites start from $2,500.",
      },
    ],
    related: ["/services/tailwind-css-development", "/services/frontend-development", "/services/laravel-development", "/services/website-redesign"],
  },
];

export const devPosts: ContentPageData[] = [
  {
    path: "/blog/web-designer-vs-web-developer",
    kind: "blog",
    label: "Web Designer vs Web Developer",
    title: "Web Designer vs Web Developer: Who Do You Need?",
    description:
      "Web designer vs web developer vs full stack developer: what each one does, what they cost and which you need for your small business website or app.",
    eyebrow: "Guide",
    h1: "Web Designer vs Web Developer: What's the Difference and Who Do You Need?",
    date: "2026-11-10",
    readMinutes: 5,
    intro: [
      "When you start looking for help with a website, you'll see web designers, web developers and full stack developers. They overlap, but they're not the same, and hiring the wrong one can cost you time and money.",
      "Here's what each does, in plain English.",
    ],
    sections: [
      {
        heading: "What a web designer does",
        paragraphs: [
          "A web designer plans how your website looks and feels: layout, colors, fonts, images and how visitors move from page to page. Many designers also build the site on platforms like WordPress, Wix Studio, Squarespace or Shopify.",
          "Hire a web designer when you need a professional business website, a redesign or an online store.",
        ],
      },
      {
        heading: "What a web developer does",
        paragraphs: [
          "A web developer writes the code that makes a website or app work. Frontend developers build what you see in the browser (React, Next.js, Tailwind CSS). Backend developers build the servers, databases and APIs behind it (NestJS, Express.js, Laravel, Django, MySQL).",
          "Hire a developer when you need custom features: logins, dashboards, bookings, integrations or a web app.",
        ],
      },
      {
        heading: "What a full stack developer does",
        paragraphs: [
          "A full stack developer does both frontend and backend. For a small business this means one team can build the whole product, from the screens to the database, with nothing lost in between.",
        ],
      },
      {
        heading: "Which one do you need?",
        bullets: [
          "A brochure website or online store: a web designer",
          "A website with a few custom features: a designer who also develops",
          "A web app, portal or SaaS product: a full stack developer",
          "Not sure: start with a free website audit and get a recommendation",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a web designer or web developer more expensive?",
        a: "Custom development usually costs more than a website built on a platform, because it takes more time. Our websites start from $300 and custom development from $2,500.",
      },
      {
        q: "What is considered a full stack developer?",
        a: "Someone who builds both the frontend (what users see) and the backend (servers, databases and APIs) of a website or app.",
      },
    ],
    related: ["/services/full-stack-web-development", "/services/small-business-web-design", "/pricing"],
  },
  {
    path: "/blog/choose-tech-stack-nextjs-laravel-django-nestjs",
    kind: "blog",
    label: "Next.js vs Laravel vs Django vs NestJS",
    title: "Next.js vs Laravel vs Django vs NestJS: Which Tech Stack?",
    description:
      "A plain-English guide to choosing a tech stack for your web app: Next.js, NestJS, Express.js, Laravel and Django compared on speed, cost, hiring and SEO.",
    eyebrow: "Guide",
    h1: "Next.js, NestJS, Laravel or Django: Which Tech Stack Is Right for Your Web App?",
    date: "2026-11-07",
    readMinutes: 7,
    intro: [
      "If you're planning a web app, portal or SaaS product, you'll hear a lot of names: Next.js, React, NestJS, Express.js, Laravel, Django. They're all good. The right one depends on what you're building, your budget and who will maintain it.",
      "Here's how they compare, without the jargon.",
    ],
    sections: [
      {
        heading: "The short answer",
        bullets: [
          "Next.js + NestJS or Express.js (TypeScript): best for modern, fast web apps where SEO and a smooth interface matter.",
          "Laravel (PHP + MySQL): best for classic business apps, admin panels and teams that already use PHP.",
          "Django (Python): best for data-heavy apps, reports, automation and AI features.",
          "Tailwind CSS works with all of them for the design layer.",
        ],
      },
      {
        heading: "Frontend vs backend in one minute",
        paragraphs: [
          "The frontend is what users see: pages, forms and dashboards, usually built with React or Next.js and styled with Tailwind CSS. The backend is the server and database behind it: logins, data, payments and business rules, built with NestJS, Express.js, Laravel or Django on MySQL or PostgreSQL. A full stack team builds both.",
        ],
      },
      {
        heading: "Next.js with NestJS or Express.js",
        bullets: [
          "One language (TypeScript) across frontend and backend",
          "Excellent speed and SEO thanks to server rendering",
          "Huge ecosystem and easy hosting on Vercel",
          "NestJS adds structure for larger teams; Express.js stays small and simple",
        ],
      },
      {
        heading: "Laravel",
        bullets: [
          "Very fast to build business features: logins, admin, email, queues",
          "Runs on almost any hosting, often cheaply",
          "Large pool of PHP developers if you hire later",
          "Pairs well with MySQL and with a React or Vue frontend",
        ],
      },
      {
        heading: "Django",
        bullets: [
          "Built-in admin panel and strong security defaults",
          "Python makes data processing, reports and AI features easier",
          "Django REST Framework for clean APIs",
          "Great with PostgreSQL and a React or Next.js frontend",
        ],
      },
      {
        heading: "How to decide",
        paragraphs: [
          "Start with the job: who uses the app, what data it stores and what it must connect to. Then think about who will maintain it in two years. If you already have developers, use their language. If not, choose the stack that fits the product, and a partner who can build both ends.",
          "Not sure? We build with all of these. Tell us about your project and we'll recommend the simplest stack that does the job.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Laravel or Django better?",
        a: "Neither is better overall. Laravel is often quicker for classic business apps in PHP; Django is stronger for data-heavy and Python-based projects.",
      },
      {
        q: "Is NestJS better than Express.js?",
        a: "NestJS is built on top of Express and adds structure and TypeScript patterns. Use Express for small APIs and NestJS for larger, long-lived backends.",
      },
    ],
    related: ["/services/full-stack-web-development", "/services/nextjs-development", "/services/laravel-development", "/services/django-development"],
  },
];
