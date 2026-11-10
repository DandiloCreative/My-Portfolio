// Full stack development pages: one hub page plus a page per skill people search for
// (frontend, backend, Next.js, NestJS, Laravel, Django). Each targets "hire / company / services" searches.
import type { ContentPageData } from "./types";

const STACK_LINKS = [
  "/services/frontend-development",
  "/services/backend-development",
  "/services/nextjs-development",
  "/services/nestjs-development",
  "/services/laravel-development",
  "/services/django-development",
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
    ],
    related: [...STACK_LINKS, "/pricing"],
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
    ],
    related: ["/services/full-stack-web-development", "/services/frontend-development", "/services/nestjs-development"],
  },
  {
    path: "/services/nestjs-development",
    kind: "service",
    label: "NestJS & Express.js Development",
    title: "NestJS & Express.js Development | Node.js APIs | Dandilo",
    description:
      "Hire NestJS and Express.js developers for Node.js backends and REST APIs in TypeScript, with MySQL or PostgreSQL, logins, payments and integrations.",
    eyebrow: "NestJS & Express.js",
    h1: "NestJS and Express.js Development for Node.js Backends",
    intro: [
      "NestJS and Express.js are the most popular ways to build backends in Node.js. Express is lightweight and flexible; NestJS adds structure, TypeScript and built-in patterns that keep large APIs clean as they grow.",
      "We build Node.js backends and REST APIs with NestJS and Express.js in TypeScript, connected to MySQL or PostgreSQL. Our own CRM runs on NestJS.",
    ],
    sections: [
      {
        heading: "NestJS and Express.js services",
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
    ],
    related: ["/services/full-stack-web-development", "/services/backend-development", "/services/nextjs-development"],
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
    ],
    related: ["/services/full-stack-web-development", "/services/backend-development", "/services/django-development"],
  },
  {
    path: "/services/django-development",
    kind: "service",
    label: "Django & Python Development",
    title: "Django Development Services: Python Web Apps | Dandilo",
    description:
      "Hire Django developers for Python web applications, REST APIs and admin dashboards on PostgreSQL or MySQL. Custom Django development and support.",
    eyebrow: "Django & Python",
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
    ],
    related: ["/services/full-stack-web-development", "/services/backend-development", "/services/laravel-development"],
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
        a: "Custom development usually costs more than a website built on a platform, because it takes more time. Our websites start from $600 and custom development from $2,500.",
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
