// Daily blog posts, added by the daily blog routine (newest at the top).
// Each post needs a cover image: run scripts/blog-cover.cjs (the build fails without one).
import type { ContentPageData } from "./types";

export const dailyPosts: ContentPageData[] = [
  {
    path: "/blog/online-booking-for-small-business-website",
    kind: "blog",
    label: "Online Booking for Your Website",
    title: "Online Booking for a Small Business Website: A Guide",
    description:
      "Should your small business website take bookings online? How booking works, what to look for in a booking tool, what it costs and the mistakes that lose customers.",
    eyebrow: "Guide",
    h1: "Online Booking for a Small Business Website: What You Need to Know",
    date: "2026-11-27",
    readMinutes: 6,
    intro: [
      "In short: if customers book you by appointment (salons, clinics, cleaners, trades, coaches), online booking saves you phone calls and stops people leaving when you don't pick up. The simplest setup is a booking tool added to your own website, so customers pick a time without leaving your site.",
      "This guide explains how online booking works, what to look for in a tool, what it typically costs and the mistakes that quietly cost small businesses bookings.",
    ],
    sections: [
      {
        heading: "Does my business need online booking?",
        paragraphs: [
          "If you sell time (appointments, visits, classes, quotes), probably yes. Many customers look for a service in the evening or between other tasks, when your phone line is closed. If they can book there and then, you win the job. If they can only call or send a message and wait, some will book someone else.",
          "If you mostly handle custom or complex jobs, a quote request form may suit you better than instant booking. You still want something faster than a phone number alone.",
        ],
      },
      {
        heading: "How does online booking work on a website?",
        paragraphs: [
          "You set your working hours, your services and how long each one takes. The booking tool shows only the times you're free. A customer picks a service and a time, enters their details, and you both get a confirmation. Most tools also send reminders and sync with your calendar, which cuts no-shows.",
          "The tool can sit inside your website as a widget, or open on a separate page. Keeping it inside your own site is better: customers stay on your brand and you keep the trust you've built on the page.",
        ],
      },
      {
        heading: "What should I look for in a booking tool?",
        bullets: [
          "Works well on a phone, because most customers will book from one.",
          "Syncs with your calendar (Google, Apple or Outlook) so you never double book.",
          "Sends confirmations and reminders by email or text.",
          "Lets you set buffers between appointments, holidays and different hours per service.",
          "Takes deposits or payments if no-shows are a problem for you.",
          "Lets you export your customer details, so you aren't locked in.",
        ],
      },
      {
        heading: "What does online booking cost?",
        paragraphs: [
          "Booking tools are usually a monthly subscription, and prices vary by features and number of staff. Some have a free basic plan; fuller plans are typically a modest monthly fee per business or per staff member. Payment processing fees apply if you take deposits. Check the current prices on each provider's own site before you decide.",
          "Adding booking to a website is a small extra on top of the site itself. At Dandilo Digitals, a Starter website starts at $300 and a Business website at $899, and we can set up booking as part of the build. Custom booking systems with logins or special rules fall under custom development, from $2,500.",
        ],
      },
      {
        heading: "Where should the Book Now button go?",
        bullets: [
          "In the top menu, on every page, in a colour that stands out.",
          "At the top of the home page, next to a short line about what you do.",
          "On each service page, so the customer can book that exact service.",
          "On your Contact page and in your Google Business Profile and social bios.",
        ],
      },
      {
        heading: "Mistakes that lose bookings",
        bullets: [
          "Too many steps: every extra form field loses people. Ask only what you need.",
          "Hidden prices: say what each service costs or what it starts from.",
          "No confirmation message, so customers aren't sure it worked.",
          "Hours that don't match your Google listing.",
          "Never testing it on a real phone before launch.",
        ],
      },
      {
        heading: "Want booking that fits your business?",
        paragraphs: [
          "If you're not sure which setup suits you, request a free website audit and we'll tell you what we'd do, with a clear quote and no pressure. You can also contact us directly and tell us how you take bookings today.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I add online booking to my existing website?",
        a: "Usually yes. Most booking tools give you a button or a widget that can be added to an existing site without rebuilding it. A designer can place it neatly and test it on mobile.",
      },
      {
        q: "Is online booking worth it for a small business?",
        a: "If you work by appointment, it usually is. It saves time on phone calls and lets customers book outside your working hours. It's less useful if every job needs a custom quote first.",
      },
      {
        q: "Do customers prefer to book online?",
        a: "Many do, especially for routine services, but some still prefer to call. Offer both: a Book Now button and a phone number.",
      },
      {
        q: "How do I reduce no-shows?",
        a: "Send automatic reminders, ask for a deposit on longer or higher-value appointments, and make cancelling easy so people tell you in advance.",
      },
      {
        q: "Should booking be on my website or only on Facebook or Instagram?",
        a: "Put it on your website as well. Your site is the one place you control, and Google can send people there directly. Link to it from your social profiles.",
      },
    ],
    related: ["/services/small-business-web-design", "/pricing", "/blog/what-pages-does-a-small-business-website-need"],
  },
  {
    path: "/blog/how-to-hire-a-web-designer-remotely",
    kind: "blog",
    label: "Hire a Web Designer Remotely",
    title: "How to Hire a Web Designer or Developer Remotely",
    description:
      "Thinking of hiring a web designer or web developer remotely? Where to find one, what to check, what to put in writing and how to stay safe before you pay.",
    eyebrow: "Guide",
    h1: "How to Hire a Web Designer or Developer Remotely",
    date: "2026-11-27",
    readMinutes: 6,
    intro: [
      "In short: hiring a web designer or developer remotely works well when you check their live work, agree the scope and price in writing, and see something real (a prototype or a first draft) before you pay in full. Where they live matters far less than how clearly they communicate and what they've already built.",
      "This guide covers where to look, what to check, what to ask for in writing and the mistakes that cost small businesses the most when they hire someone they will never meet in person.",
    ],
    sections: [
      {
        heading: "Do I need a local web designer?",
        paragraphs: [
          "Almost never. Building a website is design, writing and code, and all of it can be done from anywhere. What you need is someone who replies quickly, explains things in plain language and works at times that overlap with your day, so you can talk when you need to.",
          "A local designer can be useful if you want to meet face to face or need photography on site. For most small businesses, the extra cost of being local isn't worth it.",
        ],
      },
      {
        heading: "Where can I hire a web designer or developer?",
        bullets: [
          "Freelance marketplaces such as Fiverr and Upwork: wide choice and low prices, but quality varies a lot, so check reviews and live work carefully.",
          "Small remote agencies: a team and a process at a fair price. A good one gives you one point of contact.",
          "Referrals from other business owners: often the most reliable route. Ask who built a site you like.",
          "Larger agencies: strong for big or complex projects, but usually priced above what a small business needs.",
        ],
      },
      {
        heading: "Designer or developer: which one do I need?",
        paragraphs: [
          "A web designer plans how the site looks and flows. A web developer builds it and makes it work. For a typical small business website, one person or team does both. You only need a separate developer for custom features such as customer logins, booking systems or a web app. If that's your project, see our guide to choosing a web designer and our custom development page.",
        ],
      },
      {
        heading: "What should I check before hiring someone remotely?",
        bullets: [
          "Open their portfolio sites on your phone. Do they load fast and look right?",
          "Look for independent reviews on Google or another site they don't control.",
          "Ask for a call or video chat. How they explain things tells you how the project will go.",
          "Ask who will actually do the work, and whether they will use a template or build to your needs.",
          "Ask what happens after launch: support, hosting and who can edit the site.",
        ],
      },
      {
        heading: "What should be in writing?",
        bullets: [
          "The pages and features included, and what costs extra.",
          "The total price and when each payment is due.",
          "A timeline, and what you need to supply (logo, text, photos).",
          "How many rounds of changes are included.",
          "That you own your domain, your website files and your content once paid.",
          "What happens if the work is late or you are unhappy.",
        ],
      },
      {
        heading: "How do I stay safe when paying someone I've never met?",
        paragraphs: [
          "Pay in stages rather than all upfront, and use a payment method with buyer protection, such as a marketplace's escrow or a card. Register the domain in your own name, not the designer's. Be wary of anyone who asks for your hosting or domain passwords before you've agreed terms, or who guarantees a number-one Google ranking. Nobody can promise that.",
          "At Dandilo Digitals we're a remote team working with small businesses in the US, UK and Canada. We can show you a free prototype before you pay, and you own your website at the end.",
        ],
      },
      {
        heading: "What does it cost to hire a web designer remotely?",
        paragraphs: [
          "Remote doesn't have to mean cheap or expensive; the price depends on the size of the project. At Dandilo Digitals, a Starter website starts at $300, a Business website at $899 and an Online Store at $1,250, with custom development from $2,500. We give a fixed quote before work begins. For market ranges across freelancers and agencies, see our small business website cost guide.",
        ],
      },
      {
        heading: "Want to talk it through?",
        paragraphs: [
          "Tell us about your business and we'll review your current website for free and explain what we'd do, with a clear quote and no pressure.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is it safe to hire a web designer remotely?",
        a: "Yes, if you check their live work and reviews, agree the scope and price in writing, pay in stages and keep your domain in your own name. Most problems come from skipping those steps.",
      },
      {
        q: "How do I hire a web developer for my small business?",
        a: "Decide what you need first (a simple site, a store or a custom app), then shortlist two or three people with similar live projects. Talk to each, compare written quotes and ask to see a prototype or sample before paying in full.",
      },
      {
        q: "Should I hire a freelancer or an agency remotely?",
        a: "Freelancers can be affordable but depend on one person's availability. A small remote agency gives you a team and a process. Our freelancer vs agency guide compares them in more detail.",
      },
      {
        q: "How much should I pay upfront?",
        a: "Avoid paying everything before you've seen any work. A common approach is a deposit to start, a payment at design approval and a final payment at launch. Agree the schedule in writing.",
      },
      {
        q: "Can a remote designer work in my time zone?",
        a: "Many can. Ask which hours they're available and how quickly they reply. Dandilo Digitals works with clients in the US, UK and Canada and agrees call times that suit you.",
      },
      {
        q: "Will I own my website if I hire someone remotely?",
        a: "You should. Ask for this in writing: you own the domain, the site files and the content once you've paid. At Dandilo Digitals you own your website.",
      },
    ],
    related: ["/blog/how-to-choose-a-web-designer", "/blog/freelancer-vs-agency-website", "/blog/small-business-website-cost", "/services/small-business-web-design"],
  },
  {
    path: "/blog/what-pages-does-a-small-business-website-need",
    kind: "blog",
    label: "Pages a Small Business Website Needs",
    title: "What Pages Does a Small Business Website Need?",
    description:
      "How many pages does a small business website need? The essential pages, what to put on each, and which extras to add later, so you don't pay for pages you don't need.",
    eyebrow: "Checklist",
    h1: "What Pages Does a Small Business Website Need?",
    date: "2026-11-26",
    readMinutes: 6,
    intro: [
      "In short: most small businesses need five core pages: Home, Services, About, Contact and a page for reviews or past work. Add a page for each main service, a pricing or quote page, and an FAQ once those are working. You can launch with 5 to 7 pages and grow from there.",
      "More pages isn't always better. Every page costs time to design, write and keep up to date, and a thin page that says little can do more harm than good. This checklist shows what each page should do, and what to leave for later.",
    ],
    sections: [
      {
        heading: "The five pages almost every business needs",
        bullets: [
          "Home: says what you do, who it's for and where, and gives one clear next step (call, book or request a quote).",
          "Services: lists what you offer in plain words, so a visitor can tell in seconds if you can help.",
          "About: shows the real people behind the business, how long you've been going and why customers can trust you.",
          "Contact: phone, email, address or service area, opening hours and a short form.",
          "Reviews or Work: real customer reviews, photos of finished jobs or examples of what you've done.",
        ],
      },
      {
        heading: "What should the home page include?",
        paragraphs: [
          "Visitors decide in a few seconds whether to stay. Your home page should answer three questions straight away: what do you do, who do you do it for, and what should I do next?",
        ],
        bullets: [
          "A clear headline with your service and location, for example \"Family-run plumbing in Leeds\".",
          "A call or quote button that's easy to spot on a phone.",
          "A short list of your main services, each linking to its own page.",
          "A few real reviews or photos.",
          "Your phone number and opening hours.",
        ],
      },
      {
        heading: "Why give each service its own page?",
        paragraphs: [
          "One page that lists everything you do is hard to rank on Google. A separate page for each main service lets you explain it properly and match what people actually search for, such as \"emergency boiler repair\" or \"wedding photography packages\".",
          "Keep each page useful: what's included, who it's for, how it works, a rough price or what affects the price, and a button to get in touch. Don't copy the same text across pages with only the town name changed. Google tends to treat that as thin content.",
        ],
      },
      {
        heading: "Do I need a pricing page?",
        paragraphs: [
          "If your prices are fixed or easy to explain, yes. People often leave a site that hides cost completely. If your jobs vary, show starting prices or a guide to what affects the price, and invite people to request a quote. Our own prices are public on our pricing page, so visitors know where they stand before they ask.",
        ],
      },
      {
        heading: "Which extra pages are worth adding?",
        bullets: [
          "FAQ: answers the questions that stop people from contacting you, and helps with Google searches phrased as questions.",
          "Blog or guides: useful if you'll write regularly and answer real customer questions. Skip it if it will sit empty.",
          "Service area or location pages: only if you genuinely serve those places and each page has something specific to say.",
          "Booking or shop: if customers can book or buy online, this is a core page, not an extra.",
          "Gallery or case studies: great for builders, salons, photographers and other visual businesses.",
        ],
      },
      {
        heading: "Pages you also need behind the scenes",
        paragraphs: [
          "Most sites need a privacy policy, especially if you collect details through a form or use analytics. Depending on your country and what you do, you may also need cookie information and terms. Rules differ in the US, UK, Canada and Europe, so check what applies to you, or ask your web designer. Link these pages in the footer, not the main menu.",
        ],
      },
      {
        heading: "How many pages is the right number?",
        paragraphs: [
          "A plumber, cleaner or consultant often does well with 5 to 8 pages. A shop needs a page per product or category, and a business with many services needs more. Start with the pages that bring in customers, launch, then add pages when you see what people look for. A good web designer will tell you honestly when a page isn't worth building.",
        ],
      },
      {
        heading: "Not sure what your site is missing?",
        paragraphs: [
          "Ask for a free website audit and we'll tell you which pages you're missing and which aren't pulling their weight. If you're ready to build, a Starter website starts at $300 and a Business website (up to 7 pages) at $899. These are starting prices in US dollars, with a fixed quote before work begins. You can also contact us with a short description of your business.",
        ],
      },
    ],
    faqs: [
      {
        q: "How many pages should a small business website have?",
        a: "Most small businesses launch well with 5 to 8 pages: Home, Services, About, Contact, reviews or work, plus a page for each main service. Add more once you see what customers look for.",
      },
      {
        q: "Can a small business have a one-page website?",
        a: "Yes, for a very simple offer or a new business, a one-page site can work. But a single page is harder to rank on Google for several services, so most businesses outgrow it.",
      },
      {
        q: "Do I need an About page?",
        a: "Yes. It's one of the most visited pages on most small business sites. People want to know who they're hiring, so show real people, your experience and how you work.",
      },
      {
        q: "Do I need a blog on my business website?",
        a: "Not at launch. A blog helps if you'll publish helpful answers to real customer questions on a regular basis. An empty or abandoned blog makes a site look neglected.",
      },
      {
        q: "How many pages are included in a Dandilo Digitals website?",
        a: "A Starter website starts at $300, and a Business website with up to 7 pages starts at $899. See our pricing page for what each includes.",
      },
    ],
    related: ["/services/small-business-web-design", "/pricing", "/blog/small-business-website-cost", "/blog/do-i-need-a-website-for-my-business"],
  },
  {
    path: "/blog/website-redesign-cost",
    kind: "blog",
    label: "Website Redesign Cost",
    title: "How Much Does a Website Redesign Cost? (2026 Guide)",
    description:
      "How much does a website redesign cost for a small business? What changes the price, what's included, redesign vs rebuild, and how to ask for a proposal or RFP.",
    eyebrow: "Guide",
    h1: "How Much Does a Website Redesign Cost for a Small Business?",
    date: "2026-11-26",
    readMinutes: 6,
    intro: [
      "In short: a small business website redesign can cost anywhere from a few hundred dollars to several thousand, depending on the number of pages, the platform and any new features. At Dandilo Digitals, redesigns start from $300, with a fixed quote before work begins. Freelancers and larger agencies usually charge more for bigger sites.",
      "This guide explains what drives the price, what a redesign should include, when a rebuild makes more sense, and what to put in a redesign proposal or request for proposal (RFP) so quotes are easy to compare.",
    ],
    sections: [
      {
        heading: "What does a website redesign cost?",
        paragraphs: [
          "There's no single price, because a five-page brochure site and a 200-product store are very different jobs. As a rough guide for small businesses in US dollars: a redesign of a small site on a platform you already use is at the low end; a larger site with new features, new platform or lots of content to move is at the high end.",
          "Our own pricing is public. A Website Redesign starts from $300, a Business Website (up to 7 pages) from $899, an Online Store from $1,250, and custom development from $2,500. These are starting prices, and the final quote depends on your site.",
          "For comparison, our guide to small business website costs shows freelancers usually charge about $500 to $5,000 for a small business site, and agencies often $3,000 to $15,000 or more. Always compare what's included, not just the headline number.",
        ],
      },
      {
        heading: "What changes the price of a redesign?",
        bullets: [
          "Number of pages: every page needs design, writing checks and testing.",
          "Platform: staying on WordPress, Wix, Squarespace or Shopify is usually cheaper than moving to a new one.",
          "Content: if your text and photos are ready, it costs less than if they need writing or reshooting.",
          "New features: booking, memberships, a store, quote forms or integrations add work.",
          "Search protection: keeping page addresses and setting up redirects takes care, and it protects your Google rankings.",
          "Deadline: a rush job usually costs more.",
        ],
      },
      {
        heading: "What should a redesign include?",
        bullets: [
          "A review of your current site: what works, what's slow, and which pages bring in traffic.",
          "A modern, mobile-friendly design that you approve before it's built.",
          "Clearer messaging, so visitors see what you do and how to contact you in seconds.",
          "Faster loading pages.",
          "Your existing page addresses kept, or redirects set up where they change.",
          "Testing of forms, buttons and tracking before launch.",
        ],
        paragraphs: [
          "Our website redesign checklist walks through each step, including how to avoid losing Google rankings.",
        ],
      },
      {
        heading: "Redesign or rebuild: which costs less?",
        paragraphs: [
          "A redesign keeps your platform and most of your content and improves how it looks and works. It's usually cheaper and faster. A rebuild starts again, often on a new platform, and makes sense when the site is hard to update, very slow, or built on something outdated.",
          "If you're not sure, a free website audit will tell you honestly which one your site needs. Spending on a rebuild you didn't need is the most common way to overpay.",
        ],
      },
      {
        heading: "What's a website redesign proposal or RFP?",
        paragraphs: [
          "A redesign proposal is a written offer from a designer that sets out the work, price and timeline. An RFP (request for proposal) is the reverse: you write a short brief and ask several designers to quote against it. For a small business, a one-page brief is plenty.",
        ],
        bullets: [
          "Your website address and what you like and dislike about it.",
          "Your main goal: more calls, bookings, sales or a more professional look.",
          "The platform you're on, and whether you're open to changing it.",
          "Pages and features you need to keep or add.",
          "Your budget range and when you'd like to launch.",
          "A request for a fixed price, the timeline, and who owns the finished website.",
        ],
      },
      {
        heading: "How long does a redesign take?",
        paragraphs: [
          "Most of our redesigns take about 2 to 5 weeks, depending on the number of pages and how much content moves across. The biggest delay is usually waiting for text and photos, so having them ready saves time.",
        ],
      },
      {
        heading: "Want a fixed quote for your redesign?",
        paragraphs: [
          "Send us your website address and we'll tell you what we'd change and what it would cost. Redesigns start from $300 with a fixed quote and a design you approve before we build. We're a remote team working with small businesses in the US, UK, Canada and Europe.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does it cost to redesign a small business website?",
        a: "It depends on pages, platform and features. At Dandilo Digitals, redesigns start from $300 with a fixed quote before work starts. Larger sites, new platforms and custom features cost more.",
      },
      {
        q: "Is a redesign cheaper than a new website?",
        a: "Usually, yes. A redesign keeps your platform and most of your content, so there's less to build. A rebuild costs more but can be the right choice for an outdated or hard-to-update site.",
      },
      {
        q: "Will a redesign hurt my Google rankings?",
        a: "It doesn't have to. Keep your page addresses or redirect them, keep the content that ranks, and check Search Console after launch. A careful redesign usually protects rankings.",
      },
      {
        q: "What should I put in a website redesign RFP?",
        a: "Your current website, your goal, the platform, the pages and features you need, your budget and launch date, and a request for a fixed price, timeline and ownership terms.",
      },
      {
        q: "How often should I redesign my website?",
        a: "There's no fixed rule. Many businesses refresh every few years, or sooner if the site is slow, looks dated, isn't mobile-friendly or isn't bringing in enquiries.",
      },
      {
        q: "Do I pay anything after the redesign?",
        a: "You'll still pay your domain and hosting or platform fees. If you want us to handle updates, backups and security, our Care Plan starts from $99 per month.",
      },
    ],
    related: ["/services/website-redesign", "/blog/website-redesign-checklist", "/blog/small-business-website-cost", "/blog/signs-your-website-is-losing-customers"],
  },
  {
    path: "/blog/how-to-get-your-business-on-google-maps",
    kind: "blog",
    label: "How to Get Your Business on Google Maps",
    title: "How to Get Your Business on Google Maps (and Verified)",
    description:
      "How to get your business listed on Google and Google Maps: create or claim a free Business Profile, get verified, fix common problems, and show up more often.",
    eyebrow: "Guide",
    h1: "How to Get Your Business on Google Maps and Verified",
    date: "2026-11-26",
    readMinutes: 6,
    intro: [
      "In short: to get your business on Google Maps, create or claim a free Google Business Profile at google.com/business, add your business details, and complete Google's verification. Once you're verified, your business can show on Maps and in local Google searches. Showing up near the top then depends on how complete your profile is, your reviews, and your website.",
      "Here are the steps, how verification works, what to do when it goes wrong, and how to get found more often once you're listed.",
    ],
    sections: [
      {
        heading: "How do I add my business to Google Maps?",
        bullets: [
          "Go to google.com/business and sign in with a Google account. Use an account the business owns, not a staff member's personal account or your web designer's.",
          "Search for your business name. If it's already listed, choose it and claim it. If not, choose to add a new business.",
          "Enter your business name exactly as customers see it on your sign, website and paperwork.",
          "Choose the main category that best describes what you do (for example \"Plumber\" or \"Bakery\").",
          "Add your address if customers visit you. If you go to them instead, add the areas you serve.",
          "Add your phone number and website address.",
          "Complete verification (see below), then fill in the rest of your profile.",
        ],
        paragraphs: [
          "You can also start from the Google Maps app: open the menu and look for the option to add your business.",
        ],
      },
      {
        heading: "How does Google verify a business?",
        paragraphs: [
          "Google needs to check that the business is real and that you're allowed to manage it. It shows you the methods available for your business. Depending on your business type and location, these can include recording a short video, a phone call or text, an email, a live video call, or a postcard sent to your address.",
          "Video verification is now common. You'll usually be asked to show, in one continuous recording, your location or the area you work in, something that proves the business is yours (such as signage, equipment, stock or a branded vehicle), and something that proves you manage it (such as a key, tools or a business document). Reviews of video and other submissions can take several business days.",
        ],
      },
      {
        heading: "Can I get on Google Maps without a shop or office?",
        paragraphs: [
          "Yes. If you visit customers, like cleaners, plumbers, electricians or mobile hairdressers, you can set up as a service-area business. You still enter your address for verification, but you hide it from the public and show the towns, cities or areas you serve instead.",
          "Google doesn't accept P.O. boxes or mailboxes as business addresses, and a virtual office you don't actually work from is likely to cause problems. If you work from home, use the service-area option.",
        ],
      },
      {
        heading: "Why isn't my business showing up on Google Maps?",
        bullets: [
          "Verification isn't finished, or it's still being reviewed.",
          "The profile was suspended. Google suspends profiles for things like keywords added to the business name, a wrong address type or duplicate listings. You can appeal from your Business Profile.",
          "You're searching from too far away. Maps results favour businesses close to the person searching.",
          "Your category doesn't match what people search for. Choose the closest main category and add a few relevant secondary ones.",
          "There's a duplicate listing splitting your reviews and details. Ask Google to merge or remove it.",
          "Your details don't match your website. Use the same name, address (or service area) and phone number everywhere.",
        ],
      },
      {
        heading: "How do I show up higher on Google Maps?",
        bullets: [
          "Fill in every part of your profile: hours, services with prices where you can, a business description, and attributes.",
          "Add real photos of your work, premises, vehicles and team, and add new ones regularly.",
          "Ask every happy customer for a Google review, and reply to all reviews, good and bad.",
          "Post updates and offers now and then, so the profile looks active.",
          "Link to a fast website with a page for each service. Google uses your website to understand what you do and where.",
          "Keep holiday hours and contact details up to date.",
        ],
        paragraphs: [
          "Google says local results are mainly based on relevance, distance and prominence. You can't change how close a searcher is, but the steps above improve the other two.",
        ],
      },
      {
        heading: "Getting listed on Google search too",
        paragraphs: [
          "A Business Profile covers Maps and the local box in search results. To show up for searches beyond that, like a service plus your city, or questions customers ask, you need a website that Google can find and index. If your website isn't appearing, see our guide Why Is My Website Not Showing Up on Google?, and our comparison of a Google Business Profile vs a website.",
        ],
      },
      {
        heading: "Need a website to go with your profile?",
        paragraphs: [
          "Your profile's website button works best when it leads to a fast, clear page with a call or quote button. At Dandilo Digitals, a Starter website starts at $300 and a Business website with service pages, reviews and a quote form at $899. These are starting prices in US dollars, with a fixed quote before work starts. We're a remote team working with small businesses in the US, UK, Canada and Europe.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is it free to put my business on Google Maps?",
        a: "Yes. Creating, verifying and managing a Google Business Profile is free. You only pay if you choose to run Google Ads.",
      },
      {
        q: "How long does it take for my business to show on Google Maps?",
        a: "It depends on verification. Some businesses are verified the same day; reviews of video or other submissions can take several business days. After that, your profile can start showing, though ranking well takes longer.",
      },
      {
        q: "Can I verify my Google Business Profile without a postcard?",
        a: "Often, yes. Google offers the methods available for your business, which commonly include a short video recording, and sometimes phone, text, email or a live video call.",
      },
      {
        q: "Can I list my business on Google Maps from home?",
        a: "Yes. Set it up as a service-area business, show the areas you serve, and hide your home address from the public.",
      },
      {
        q: "Why was my Google Business Profile suspended?",
        a: "Common reasons are extra keywords in the business name, using an address you don't really work from, or duplicate listings. Fix the issue, then request a review from your Business Profile.",
      },
      {
        q: "Do I need a website to be on Google Maps?",
        a: "No, but it helps. Google uses your website to check and understand your business, and customers who click through are more likely to get in touch when they find a clear website.",
      },
    ],
    related: ["/blog/google-business-profile-vs-website", "/blog/why-is-my-website-not-showing-up-on-google", "/blog/do-i-need-a-website-for-my-business", "/services/small-business-web-design"],
  },
  {
    path: "/blog/restaurant-website-must-haves",
    kind: "blog",
    label: "Restaurant Website Must-Haves",
    title: "What Your Restaurant Website Needs (Checklist)",
    description:
      "What should a restaurant website include? A plain checklist: menu, hours, booking, online ordering, photos, mobile speed and Google info, plus what to skip.",
    eyebrow: "Checklist",
    h1: "What Your Restaurant Website Needs to Bring in Diners",
    date: "2026-11-25",
    readMinutes: 6,
    intro: [
      "In short: a restaurant website has one job, which is to help a hungry person decide to visit or order in under a minute. That means a readable menu, correct opening hours, your address, a clear way to book or order, and a page that loads fast on a phone.",
      "Most diners look you up on their phone, often on the way somewhere. If they can't find the menu or the hours quickly, they pick the next place. Here is a checklist of what to include, what to skip, and how to keep it all up to date.",
    ],
    sections: [
      {
        heading: "Put the basics where people can see them",
        paragraphs: [
          "Before anything else, the top of your home page should answer the questions people are really asking. Don't make them scroll or open a menu to find them.",
        ],
        bullets: [
          "Your name, what kind of food you serve and the area you're in.",
          "Opening hours, including holidays and any days you're closed.",
          "Your full address with a map link, and a tap-to-call phone number.",
          "One clear button: Book a table, Order online or View menu.",
        ],
      },
      {
        heading: "Show your menu as real text, not a PDF or a photo",
        paragraphs: [
          "A menu saved as a PDF or a photographed page is hard to read on a phone, slow to load, and Google can't read it as well as normal text. Put the menu on its own page as ordinary text with headings such as Starters, Mains and Desserts.",
          "Include prices, and mark common allergens and dietary options such as vegetarian, vegan or gluten-free. Say if the menu changes seasonally and keep the page current. An outdated menu with wrong prices annoys diners more than having no menu at all.",
        ],
      },
      {
        heading: "Make booking or ordering simple",
        paragraphs: [
          "Decide what you want most: reservations, takeaway orders, delivery or walk-ins. Then make that the main button on every page.",
        ],
        bullets: [
          "Reservations: use a booking form or a booking tool, and show how far ahead people can book. Large groups can usually be handled with a phone number or enquiry form.",
          "Online ordering: check the fees. Third-party delivery apps usually charge a commission on each order, so ordering from your own site can leave you with more of the sale.",
          "Walk-in places: lead with the menu, location and hours instead.",
          "Whatever you choose, test it on your own phone every few weeks.",
        ],
      },
      {
        heading: "Use your own photos",
        paragraphs: [
          "Photos of your real food, your room and your team do more than stock images. They show people what to expect. You don't need a professional shoot to start; clear, well-lit phone photos of your best dishes are fine, and you can upgrade later.",
          "Compress images so pages stay fast, and add short descriptions (alt text) such as 'Margherita pizza with fresh basil' so the images work for screen readers and search.",
        ],
      },
      {
        heading: "Keep your Google information matching",
        paragraphs: [
          "Many diners find you through Google Maps and your Google Business Profile before they ever reach your website. Make sure your name, address, phone number and hours are identical in both places. If they differ, customers get confused and may turn up at the wrong time.",
          "Link your website from your profile, and your menu and booking links too, if the profile allows it. Our guide on Google Business Profile vs a website explains how the two work together.",
        ],
      },
      {
        heading: "Make it fast and easy on a phone",
        bullets: [
          "Use large tap-friendly buttons, and readable text without zooming.",
          "Avoid auto-playing music or heavy background videos that slow the page.",
          "Test the site on mobile data, not only on your office wifi.",
          "Don't hide the menu or booking behind pop-ups.",
        ],
      },
      {
        heading: "What to skip",
        bullets: [
          "Long welcome speeches before the menu.",
          "Sliders that rotate through ten images and slow the page.",
          "A menu that only exists as a downloadable file.",
          "Old event pages and expired offers that are still live.",
        ],
      },
      {
        heading: "Want a restaurant website that fills tables?",
        paragraphs: [
          "If your current site is hard to read on a phone, or your menu and hours are out of date, we can help. Dandilo Digitals builds websites for small businesses in the US, UK and Canada, with a Business site from $899 and a fixed quote before we start.",
          "Not sure what's holding your site back? Ask for a free website audit and we'll point out the quick wins. You can also get in touch to talk through your restaurant's needs.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does a restaurant need its own website if it has a Facebook page?",
        a: "It helps. A website is yours to control, shows up in Google searches, and can hold your menu, booking and ordering in one place. Facebook is useful for updates but you don't own it. Many owners use both.",
      },
      {
        q: "What pages should a restaurant website have?",
        a: "At minimum: Home, Menu, Contact or Find us (with hours and a map), and Book or Order. Optional extras include About, Private events, Gallery and Jobs.",
      },
      {
        q: "Should I put my menu on my website as a PDF?",
        a: "It's better to use normal text on a web page. PDFs are slow and awkward on phones, and harder for Google to read. If you keep a PDF for printing, offer it as an extra, not the only version.",
      },
      {
        q: "Can I take online orders without paying delivery app fees?",
        a: "Yes. You can add ordering to your own website through an ordering tool or an online store. Check each tool's monthly fee and payment processing fees first, and compare them with the commission you pay on delivery apps.",
      },
      {
        q: "How much does a restaurant website cost?",
        a: "Prices vary widely. A simple restaurant site is typically a few hundred to a few thousand dollars. At Dandilo Digitals, the Business package is $899 and an Online Store, for selling online, is $1,250.",
      },
    ],
    related: ["/industries/restaurant-web-design", "/blog/google-business-profile-vs-website", "/pricing", "/blog/how-to-get-your-business-on-google-maps"],
  },
  {
    path: "/blog/is-shopify-worth-it",
    kind: "blog",
    label: "Is Shopify Worth It?",
    title: "Is Shopify Worth It for a Small Business? Costs and Alternatives",
    description:
      "Is Shopify worth it for a small business in 2026? What it really costs a month, who it suits, who should pick WooCommerce, Wix or Squarespace instead.",
    eyebrow: "Guide",
    h1: "Is Shopify Worth It for a Small Business?",
    date: "2026-11-25",
    readMinutes: 6,
    intro: [
      "In short: Shopify is worth it if selling products online is a main part of your business and you want checkout, payments, stock and security handled for you. It's probably not worth it if you sell only a handful of items, or you mainly offer services and want a few products on the side.",
      "Plans start at roughly $39 a month, and most real stores spend more once apps and payment fees are added. Here's what you get, what it costs, and when another platform is the better choice.",
    ],
    sections: [
      {
        heading: "What do you get with Shopify?",
        bullets: [
          "Hosting, security and updates are included, so there's nothing to patch or renew separately.",
          "A checkout that customers already know and trust, with card payments and other payment methods.",
          "Product, stock, order and customer management in one dashboard.",
          "Shipping, discount codes, gift cards and abandoned-cart emails built in or available as apps.",
          "Selling across your website, social media and marketplaces from the same product list.",
        ],
      },
      {
        heading: "How much does Shopify really cost per month?",
        paragraphs: [
          "Shopify's own plans start at roughly $39 a month for Basic, about $105 for Grow and about $399 for Advanced, with a discount of roughly 25% if you pay yearly. Prices change, so check Shopify's pricing page before you sign up.",
          "The plan is only part of the bill. A typical small store with a few apps spends about $60 to $150 a month in total, plus payment fees on each sale. Your domain name is a separate yearly cost.",
        ],
        bullets: [
          "Plan: the monthly Shopify subscription.",
          "Apps: reviews, email, subscriptions and similar tools often have their own monthly fee.",
          "Payment fees: charged on each sale by the payment provider.",
          "Theme: many good themes are free, and premium ones are usually a one-off cost.",
          "Setup: your own time, or a one-off fee if you hire someone.",
        ],
      },
      {
        heading: "When is Shopify worth it?",
        bullets: [
          "Products are your main income, and you expect orders every week.",
          "You have more than a few products, or products with sizes, colours or other options.",
          "You want to stop worrying about hosting, security and checkout.",
          "You plan to grow, sell on social media or add more products over time.",
          "You'd rather pay a monthly fee than manage a store yourself.",
        ],
      },
      {
        heading: "When is Shopify not worth it?",
        bullets: [
          "You sell fewer than about 10 items, or take enquiries and bookings rather than online payments. A simple site with a payment link may be enough.",
          "You already have a WordPress site you're happy with and want to add a store to it. WooCommerce may fit better.",
          "You're a service business that sells one or two products on the side. Wix or Squarespace can handle that for less.",
          "You have no budget for the monthly cost until your first sales come in.",
        ],
      },
      {
        heading: "Shopify vs WooCommerce, Wix and Squarespace",
        paragraphs: [
          "Shopify is usually the simplest way to run a store, because hosting and security are handled for you. WooCommerce (a free WordPress plugin) gives more flexibility and can cost less per month, but you look after hosting, updates and security, or pay someone to.",
          "Wix and Squarespace both have online store features that suit small catalogues and businesses that are mainly about services or content. If your store is the business, Shopify is normally the stronger choice. Our Wix vs WordPress vs Shopify guide compares all three in more detail.",
        ],
      },
      {
        heading: "Is it worth hiring someone to set up Shopify?",
        paragraphs: [
          "You can set up a basic Shopify store yourself in a few days. Hiring someone is worth considering if you want a design that doesn't look like every other theme, product pages that sell, or help moving products from another platform.",
          "At Dandilo Digitals, an Online Store starts at $1,250 with a fixed quote and a design you approve before we build. Your Shopify plan is paid to Shopify, and the store account stays in your name. We're a remote team working with small businesses in the US, UK and Canada, and we'll tell you honestly if Shopify isn't the right fit.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Shopify worth it for a small business in 2026?",
        a: "Yes, if selling products online is a main part of your business. You pay a monthly fee, and in return checkout, hosting, security and stock tools are handled for you. If you only sell a few items, a cheaper option may do.",
      },
      {
        q: "How much does Shopify cost per month?",
        a: "Plans start at roughly $39 a month (Basic), about $105 for Grow and about $399 for Advanced, with a discount of roughly 25% for yearly billing. A store with a few apps usually spends about $60 to $150 a month in total, plus payment fees. Check Shopify's site for current prices.",
      },
      {
        q: "Is Shopify cheaper than WooCommerce?",
        a: "Not always. WooCommerce is free, but you pay for hosting and look after updates and security. Shopify costs more per month but includes those. The cheaper option depends on your store size and how much time you have.",
      },
      {
        q: "Can I start on Shopify and move later?",
        a: "Yes. Products and customers can be exported and moved to another platform, though design and some apps need to be rebuilt. It's easier to choose well at the start.",
      },
      {
        q: "How much does it cost to have someone build a Shopify store?",
        a: "Shopify designers usually charge from $1,500 to $10,000 or more, depending on the number of products and custom features. At Dandilo Digitals, an Online Store starts from $1,250, with a fixed quote before work starts.",
      },
      {
        q: "Do I own my Shopify store if a designer builds it?",
        a: "You should. Your Shopify account, products, customers and domain ought to be in your name, with the designer added as a collaborator. At Dandilo Digitals, that is how we work.",
      },
    ],
    related: ["/services/shopify-website-design", "/blog/wix-vs-wordpress-vs-shopify", "/services/ecommerce-web-design", "/blog/do-i-need-a-website-for-my-business"],
  },
  {
    path: "/blog/do-i-need-a-website-for-my-business",
    kind: "blog",
    label: "Do I Need a Website for My Business?",
    title: "Do I Need a Website for My Business? (Honest Answer)",
    description:
      "Do you need a website for your small business, and is it worth paying someone to build it? When a site pays for itself, when it can wait, and what it costs.",
    eyebrow: "Guide",
    h1: "Do I Need a Website for My Business, and Is It Worth Paying Someone to Build It?",
    date: "2026-11-25",
    readMinutes: 6,
    intro: [
      "In short: most small businesses need a website, because it's where customers check you out before they call, book or buy, and it's the one place online you own. Paying someone to build it is usually worth it when the site needs to bring in enquiries or sales; if you only need a simple online card and have time to learn, a DIY builder can do for now.",
      "Here's how to tell which group you're in, what a website actually does for a small business, and what it costs.",
    ],
    sections: [
      {
        heading: "Why do most businesses need a website?",
        bullets: [
          "Customers look you up first. Even when someone hears about you by word of mouth, they usually search your name before they get in touch.",
          "It shows up in Google and in AI answers. A page for each service and area gives search engines, and tools like ChatGPT, something to show when people search for what you do.",
          "It works while you're busy. Prices, opening hours, photos and answers to common questions are there at any time of day.",
          "You own it. Social media and directory profiles can change their rules or reach overnight; your website and domain stay yours.",
          "It looks established. A proper website and a matching email address help you win bigger customers who expect them.",
          "It turns visitors into customers, with quote forms, booking, WhatsApp buttons and online payments.",
        ],
      },
      {
        heading: "When can a website wait?",
        paragraphs: [
          "A website isn't the first thing every business needs. It can sensibly wait if:",
        ],
        bullets: [
          "You're fully booked through referrals, and you don't want new customers right now.",
          "You're still testing the idea and haven't settled on a name, prices or services.",
          "All your work comes from one platform you're happy with, such as a marketplace, and you accept the risk of depending on it.",
        ],
      },
      {
        heading: "Isn't a Facebook page or Google Business Profile enough?",
        paragraphs: [
          "They're both worth having, and both are free. A Google Business Profile helps you show up on Google Maps, and a Facebook page keeps you in touch with people who already know you. But neither is yours, both look the same as every other business, and neither has room to explain your services properly. They work best when they point people to your website.",
          "We compare them in more detail in Facebook Page vs Website and Google Business Profile vs Website.",
        ],
      },
      {
        heading: "Is it worth paying someone to build a website?",
        paragraphs: [
          "It's worth it when the website has a job to do. A simple way to check: think about what one new customer is worth to you. If a website brings in even one or two extra customers a year, a $300 to $900 website usually pays for itself.",
          "Paying a professional tends to make sense when:",
        ],
        bullets: [
          "You want customers to find you in Google, not just people who already know your name.",
          "Your time is better spent running your business than learning a website builder.",
          "You need features that are easy to get wrong, such as bookings, payments, an online store or forms that reach your inbox.",
          "You've tried a DIY site and it isn't bringing in enquiries.",
        ],
      },
      {
        heading: "When is DIY good enough?",
        bullets: [
          "You only need a one-page online card with your contact details.",
          "Your budget is close to zero right now.",
          "You enjoy design and have a few weekends to learn Wix, Squarespace or a similar builder.",
        ],
        paragraphs: [
          "Our Website Builder vs Web Designer guide compares the cost, time and results of each route. Many owners start with DIY and switch to a professional site once they're busy.",
        ],
      },
      {
        heading: "What should a small business website include?",
        bullets: [
          "A clear home page that says what you do, where, and for whom.",
          "A page for each main service, with prices or a starting price where you can.",
          "Photos of your real work, plus reviews from real customers.",
          "An easy way to get in touch: phone, email, WhatsApp and a short form.",
          "Basic SEO, a fast mobile layout, and your own domain.",
        ],
      },
      {
        heading: "How much does a small business website cost?",
        paragraphs: [
          "With Dandilo Digitals, a Starter website (up to 3 pages) starts at $300, a Business website (up to 7 pages) at $899, and an Online Store at $1,250. These are starting prices in US dollars, and you get a fixed quote before work starts. Hosting, your domain and any platform plan are paid to those providers, so the accounts stay in your name.",
          "We're a remote team working with small businesses in the US, UK, Canada and Europe, and we can show you a free prototype before you pay.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need a website if I have a Google Business Profile?",
        a: "Your Google Business Profile helps you show up on Google Maps, but it has little room to explain your services and you don't control it. A website gives Google and customers much more to go on. The two work best together.",
      },
      {
        q: "Do I need a website if I get all my work from word of mouth?",
        a: "Not always. But people who hear about you usually search your name before they call, and a simple website reassures them you're a real, established business.",
      },
      {
        q: "Is it worth paying someone to build a website?",
        a: "Usually, if the website needs to bring in enquiries or sales. If one or two extra customers a year cover the cost, a professionally built site pays for itself. If you only need an online card, a DIY builder can do for now.",
      },
      {
        q: "Can I build my own business website?",
        a: "Yes. Builders like Wix and Squarespace make it possible. Expect to spend several days on it, and take care with SEO settings, page speed and forms, which are easy to get wrong.",
      },
      {
        q: "How much does it cost to have someone build a small business website?",
        a: "Freelancers and small agencies usually charge $500 to $5,000. At Dandilo Digitals, websites start at $300 for a Starter site and $899 for a Business site, with a fixed quote before work starts.",
      },
      {
        q: "How long does it take to get a small business website?",
        a: "Most small business websites take 2 to 6 weeks. A simple Starter site can be ready in about 1 to 2 weeks, depending on how quickly the content and feedback come in.",
      },
    ],
    related: ["/blog/website-builder-vs-web-designer", "/blog/small-business-website-cost", "/blog/facebook-page-vs-website", "/services/small-business-web-design"],
  },
  {
    path: "/blog/how-to-choose-a-domain-name",
    kind: "blog",
    label: "How to Choose a Domain Name",
    title: "How to Choose a Domain Name for Your Business (Checklist)",
    description:
      "Picking a domain name for your small business? Use this simple checklist: .com vs .co.uk vs .ca, names to avoid, what it costs, and how to keep it safe.",
    eyebrow: "Checklist",
    h1: "How to Choose a Domain Name for Your Small Business",
    date: "2026-11-24",
    readMinutes: 6,
    intro: [
      "In short: pick a name that is short, easy to say out loud, easy to spell, and matches your business name. Register it in your own name, choose the extension your customers expect, and keep it renewed.",
      "Your domain is your web address and the end of your email address. It's hard to change later without losing visitors, so it's worth ten minutes of thought before you buy. Here's a simple checklist.",
    ],
    sections: [
      {
        heading: "1. Keep it short and easy to say",
        bullets: [
          "Aim for something you could say over the phone without spelling it out.",
          "Shorter is easier to remember, type and fit on a van, a card or a sign.",
          "Avoid hard-to-spell words, because customers who mistype it end up somewhere else.",
        ],
      },
      {
        heading: "2. Match your business name where you can",
        paragraphs: [
          "The best domain is usually your business name. People who hear about you will guess it first, and it keeps your brand, email and social handles consistent.",
          "If your exact name is taken, add a short, natural word such as your trade or town (for example, a plumber could add the town name). Avoid adding random numbers or extra letters.",
        ],
      },
      {
        heading: "3. Choose the right extension",
        bullets: [
          ".com is the safe default and what most people type first, in the US and worldwide.",
          ".co.uk (or .uk) is familiar and trusted for UK businesses serving UK customers.",
          ".ca is a good fit for Canadian businesses and shows you're based in Canada.",
          "If your first choice is taken, a country extension that matches where you work is usually better than an unusual one.",
          "Be careful with unusual extensions. Some people will type .com out of habit and land on a different site.",
        ],
      },
      {
        heading: "4. Things to avoid",
        bullets: [
          "Hyphens and numbers: they're easy to forget when you say the name aloud.",
          "Names too close to a well-known brand. That can cause confusion and legal trouble.",
          "Very narrow names that you'll outgrow, such as a name tied to one product when you plan to add more.",
          "Trendy spellings that customers will get wrong.",
        ],
      },
      {
        heading: "5. Check it before you commit",
        bullets: [
          "Search for the name on Google to see who else uses something similar.",
          "Check that matching social media handles are free, if you plan to use them.",
          "Say the name to a friend and ask them to write it down. If they spell it differently, reconsider.",
          "Check how it looks without spaces. Some word combinations accidentally spell something unwanted.",
        ],
      },
      {
        heading: "6. Buy it in your own name and keep it safe",
        paragraphs: [
          "Register the domain with an account you control, using your business email. Don't let a designer or freelancer register it in their own name, or you may struggle to get it back later.",
          "Domains are paid for by the year. A typical .com costs roughly $10 to $20 a year, though prices vary by registrar and extension, and renewal prices can differ from the first-year price. Turn on auto-renew and keep your contact email current so reminders reach you. Also turn on two-step login for your registrar account.",
        ],
      },
      {
        heading: "7. Set up a business email on your domain",
        paragraphs: [
          "An address like hello@yourbusiness.com looks more established than a free webmail address. Email is usually a separate small monthly cost from the domain, depending on the provider you choose. Our guide to small business website hosting and email explains the options.",
        ],
      },
      {
        heading: "Need help choosing or setting up your domain?",
        paragraphs: [
          "At Dandilo Digitals we help small businesses in the US, UK and Canada pick a domain, connect it and build a website on it. Our Starter website starts at $300 and a Business website at $899, and you'll get a fixed quote before work begins. You own your domain and your site.",
          "Not sure whether your current domain and site are working for you? Request a free website audit at /free-website-audit, or get in touch at /contact and we'll point you in the right direction.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should my domain name be my business name?",
        a: "Usually yes. It's the first thing customers will guess, and it keeps your website, email and social media consistent. If it's taken, add a short natural word like your trade or town.",
      },
      {
        q: "Is .com better than .co.uk or .ca?",
        a: ".com is the most familiar worldwide. For businesses serving customers mainly in the UK or Canada, .co.uk or .ca are good, trusted choices. What matters most is that it's easy to remember and matches your business.",
      },
      {
        q: "How much does a domain name cost?",
        a: "Typically around $10 to $20 a year for a .com, though prices vary by registrar and extension, and renewal prices can differ from the first year. Business email is usually a separate cost.",
      },
      {
        q: "Who should own my domain name?",
        a: "You should. Register it with your own account and business email, even if someone else builds your website. That way you can always move it or change who manages your site.",
      },
      {
        q: "Can I change my domain name later?",
        a: "Yes, but it takes care. You need to redirect the old address to the new one so you don't lose visitors or search visibility, and update your email, listings and social profiles. It's easier to choose well at the start.",
      },
    ],
    related: ["/blog/small-business-website-hosting-and-email", "/blog/how-much-does-a-website-cost-per-month", "/pricing", "/services/small-business-web-design"],
  },
  {
    path: "/blog/facebook-page-vs-website",
    kind: "blog",
    label: "Facebook Page vs Website",
    title: "Facebook Page vs Website: Which Does Your Business Need?",
    description:
      "Facebook page or website for your small business? What each does well, where a Facebook page or shop falls short, and when you need your own site. Starts at $300.",
    eyebrow: "Guide",
    h1: "Facebook Page vs Website: Which Does Your Small Business Need?",
    date: "2026-11-24",
    readMinutes: 6,
    intro: [
      "In short: a Facebook page is a good free start for staying in touch with people who already know you, but a website is the one place you own and control. Most small businesses do best with both: a website as the home base and Facebook as one way to send people to it.",
      "Here's what each one does well, where a Facebook page or Facebook Shop falls short, and how to decide when it's time to get your own site.",
    ],
    sections: [
      {
        heading: "What a Facebook page does well",
        bullets: [
          "It's free and quick to set up, so you can be online the same day.",
          "It's where many people already spend time, so friends and local customers can find and follow you.",
          "Posts, photos, events and messages make it easy to share news and answer questions.",
          "Reviews and recommendations can be seen right on the page.",
        ],
      },
      {
        heading: "Where a Facebook page falls short",
        bullets: [
          "You don't own it. Facebook sets the rules and can change the layout, reach or features, or close an account, at any time.",
          "Your posts aren't guaranteed to reach your followers. Facebook decides who sees them, and reaching more people can mean paying for ads.",
          "You can't fully control how your business looks. Every page uses Facebook's layout and carries Facebook's branding.",
          "Search is limited. A website with a page for each service gives Google much more to show for searches like \"plumber in Dallas\" than a single Facebook page does.",
          "Some customers don't use Facebook, or don't want to log in to read a page.",
          "It's harder to build trust with a larger customer, such as a company or a council, that expects a proper business website.",
        ],
      },
      {
        heading: "What a website gives you that Facebook can't",
        bullets: [
          "Ownership: your domain, your content and your customer list belong to you.",
          "A clear home for your services, prices, photos and contact details, laid out the way you choose.",
          "Search visibility: separate pages for each service and area can show up in Google and in AI answers such as ChatGPT.",
          "Ways to turn visitors into customers: quote forms, booking, and online payments.",
          "Credibility: a website with your own domain and email address looks established.",
        ],
      },
      {
        heading: "Facebook Shop vs your own online store",
        paragraphs: [
          "A Facebook Shop can be a fast way to test whether people will buy, because the audience is already there. The trade-offs are the same as above: Facebook's rules, Facebook's fees and checkout options, and little control over the customer relationship.",
          "Your own online store (on Shopify, WooCommerce or a custom build) lets you set your own branding, shipping, tax and discount rules and collect customer emails. Many sellers run both, using Facebook and Instagram to bring people to the store. If you're choosing a platform, see our comparison of Wix, WordPress and Shopify.",
        ],
      },
      {
        heading: "So which should you choose?",
        bullets: [
          "Just starting, with no budget: set up a Facebook page now, and add a simple website when you can.",
          "Getting customers mostly through word of mouth: a Facebook page may be enough for a while, but a small website makes you easier to find and trust.",
          "Want customers to find you in Google, book or pay online: you need a website.",
          "Selling products: build your own store, and use Facebook to promote it.",
          "Already have a website: keep your Facebook page active and link to it, and link back to your site from every post that needs more detail.",
        ],
      },
      {
        heading: "How to use both well",
        bullets: [
          "Put your website address in your Facebook page's About section and button.",
          "Use the same business name, logo, phone number and email on both, so customers and Google see one consistent business.",
          "Share new website pages, guides and offers on Facebook, with a link back.",
          "Add a link to your Facebook page in your website footer.",
        ],
      },
      {
        heading: "What a website costs with Dandilo Digitals",
        paragraphs: [
          "A professional website doesn't have to be expensive. Our Starter website starts at $300, a Business website at $899, and an Online Store at $1,250. These are starting prices, and we'll give you a fixed quote before any work begins. We're a remote team working with small businesses in the US, UK and Canada, and we can show you a free prototype before you pay.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a Facebook page enough for a small business?",
        a: "It can be enough to start, especially if customers find you by word of mouth. But you don't own it, you can't control who sees your posts, and it shows up less in Google than a website. Most businesses benefit from having both.",
      },
      {
        q: "Do I still need a website if I have a Facebook page?",
        a: "If you want to be found in Google, take bookings or payments, or look established to bigger customers, yes. A website is also yours to keep if Facebook changes its rules or your account is closed.",
      },
      {
        q: "Is a Facebook Shop better than my own website store?",
        a: "A Facebook Shop is quick and free to try, but you follow Facebook's rules and have less control over branding and customer details. Your own store gives you more control. Many sellers use Facebook to bring people to their store.",
      },
      {
        q: "Can I use my Facebook page as my website?",
        a: "You can share the page link as your online presence, but it isn't your own domain, and it doesn't give you the search visibility or control a website does. A small website is a better home base.",
      },
      {
        q: "How much does a small business website cost?",
        a: "At Dandilo Digitals, a Starter website starts at $300 and a Business website at $899. An Online Store starts at $1,250. You'll get a fixed quote before work starts.",
      },
    ],
    related: ["/blog/small-business-website-cost", "/blog/wix-vs-wordpress-vs-shopify", "/blog/google-business-profile-vs-website", "/services/small-business-web-design", "/blog/do-i-need-a-website-for-my-business"],
  },
  {
    path: "/blog/why-is-my-website-not-showing-up-on-google",
    kind: "blog",
    label: "Why Is My Website Not Showing Up on Google?",
    title: "Why Is My Website Not Showing Up on Google? 9 Fixes (2026)",
    description:
      "Website not showing up on Google? Find out why, including Wix and Squarespace settings, missing logos and favicons, and how to get your business found faster.",
    eyebrow: "Guide",
    h1: "Why Is My Website Not Showing Up on Google? Causes and Fixes",
    date: "2026-11-23",
    readMinutes: 7,
    intro: [
      "In short: the most common reasons are that your website is new and Google hasn't found it yet, a setting is telling search engines to stay away, or you're checking for broad phrases that bigger, older websites already rank for.",
      "Most of these are quick to check and fix. Here's how to find out what's going on, step by step, including the settings to look at on Wix and Squarespace.",
    ],
    sections: [
      {
        heading: "Step 1: Check whether Google has your site at all",
        paragraphs: [
          "Search Google for site:yourdomain.com (with your own address). If pages appear, Google has indexed your site and the issue is ranking, not visibility. If nothing appears, Google hasn't indexed it yet, or something is blocking it.",
          "Then search for your exact business name. A new site usually shows up for its own name before it shows up for services like \"plumber in Dallas\".",
        ],
      },
      {
        heading: "9 common reasons and how to fix them",
        bullets: [
          "The site is new: Google can take a few days to a few weeks to find a new site. Speed it up with Google Search Console (step 2 below).",
          "Search engines are blocked: a \"noindex\" tag, a robots.txt rule or a platform setting can hide your site. Check your SEO settings and remove anything that hides the site.",
          "The site is private or password-protected: search engines can't see pages that visitors need a password for.",
          "No sitemap submitted: a sitemap lists your pages for Google. Submit it in Search Console.",
          "The site is still on a free plan or temporary address: connect your own domain so Google indexes the right address.",
          "Pages have very little text: Google needs words that explain what you do and where. A page with only a photo and a phone number is hard to rank.",
          "Every page has the same title: give each page its own title and description that match what people search for.",
          "The site is slow or broken on phones: Google mainly looks at the mobile version of your site.",
          "Strong competition: for broad phrases, older and well-linked websites usually rank first. Target specific services and locations instead.",
        ],
      },
      {
        heading: "Step 2: Set up Google Search Console",
        bullets: [
          "Add your website in Google Search Console and verify that you own it.",
          "Submit your sitemap (often yourdomain.com/sitemap.xml).",
          "Use the URL Inspection tool on your homepage and key service pages, then click Request indexing.",
          "Check the Pages report for anything marked as excluded, and why.",
        ],
      },
      {
        heading: "Wix website not showing on Google",
        bullets: [
          "Make sure the site is published and on a paid plan with your own domain connected.",
          "In your Wix SEO settings, check that search engines are allowed to index your site.",
          "Check that individual pages aren't hidden from search engines in their page SEO settings.",
          "Connect Google Search Console through Wix's SEO tools and submit your sitemap.",
        ],
      },
      {
        heading: "Squarespace website not showing on Google",
        bullets: [
          "Make sure the site isn't private, password-protected or still in a trial.",
          "Check the SEO settings for any option that hides the site or individual pages from search engines.",
          "Connect Google Search Console and submit your sitemap (yourdomain.com/sitemap.xml).",
          "Give each page its own SEO title and description.",
        ],
      },
      {
        heading: "Why your logo or favicon isn't showing in Google",
        paragraphs: [
          "The small icon next to your result (the favicon) needs to be a square image, at least 48 by 48 pixels, linked from your homepage and not blocked from Google. After you add or change it, it can take a few weeks to update in search results.",
          "Your logo can appear in Google when your site includes organisation structured data that points to the logo, but Google decides when to show it. A matching Google Business Profile with your logo also helps.",
        ],
      },
      {
        heading: "Showing up for your name but not your services?",
        paragraphs: [
          "That's a ranking problem rather than a visibility problem. Create a separate page for each main service, mention the areas you cover, set up and complete your Google Business Profile, ask happy customers for reviews, and keep your site fast on phones. Local results usually improve over weeks to months, not days.",
        ],
      },
      {
        heading: "How Dandilo Digitals can help",
        paragraphs: [
          "Every website we build is set up for Google from day one: Search Console, sitemap, page titles, fast mobile pages and structured data. If your current site isn't showing up, ask for a free website audit and we'll tell you what's wrong and how to fix it.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does it take for a new website to show up on Google?",
        a: "Usually a few days to a few weeks. Submitting your sitemap and requesting indexing in Google Search Console helps Google find it sooner.",
      },
      {
        q: "Why does my website show up on Bing but not Google?",
        a: "Each search engine crawls and indexes on its own schedule. Check Google Search Console for errors, submit your sitemap and request indexing for your main pages.",
      },
      {
        q: "Why is my Wix website not showing on Google?",
        a: "Common reasons are that the site isn't published, isn't on your own domain yet, or the SEO setting that lets search engines index it is turned off. Connecting Search Console through Wix and submitting the sitemap usually helps.",
      },
      {
        q: "Why is my Squarespace website not showing on Google?",
        a: "Often the site is private, password-protected or still in a trial, or a setting hides it from search engines. Make it public, then connect Google Search Console and submit your sitemap.",
      },
      {
        q: "Do I have to pay Google to show up in search?",
        a: "No. Normal search results are free. Paid Google Ads appear separately and are marked as sponsored.",
      },
    ],
    related: ["/blog/google-business-profile-vs-website", "/blog/signs-your-website-is-losing-customers", "/services/website-redesign", "/blog/website-redesign-checklist", "/blog/how-to-get-your-business-on-google-maps"],
  },
  {
    path: "/blog/how-much-does-a-website-cost-per-month",
    kind: "blog",
    label: "How Much Does a Website Cost Per Month?",
    title: "How Much Does a Website Cost Per Month? Real Costs (2026)",
    description:
      "What a business website costs per month and per year to run: domain, hosting, apps, email and maintenance, with typical costs for Wix, WordPress and Shopify.",
    eyebrow: "Pricing",
    h1: "How Much Does a Website Cost Per Month to Run?",
    date: "2026-11-23",
    readMinutes: 6,
    intro: [
      "In short: most small business websites cost about $20 to $150 a month to run once they're built, which is roughly $250 to $1,800 a year. The main costs are your domain, hosting or platform plan, any paid apps or plugins, business email and maintenance.",
      "The build itself is a separate, one-off cost. Here's what you'll pay each month, and how to keep it down.",
    ],
    sections: [
      {
        heading: "The monthly and yearly costs of a website",
        bullets: [
          "Domain name: about $10 to $25 a year.",
          "Hosting or platform plan: about $15 to $50 a month for most small business sites. Shopify plans start at roughly $39 a month.",
          "Apps and plugins: $0 to $100+ a month, depending on what you add (bookings, reviews, forms, store features).",
          "Business email: usually a few dollars a month per person.",
          "Maintenance: your own time, or a monthly care plan from your designer.",
        ],
      },
      {
        heading: "Typical monthly cost by platform",
        bullets: [
          "Wix or Squarespace: about $20 to $50 a month for a business plan, with hosting and security included.",
          "WordPress: hosting from a few dollars a month for basic shared hosting to about $20 to $50 for managed hosting, plus any paid plugins.",
          "Shopify: from about $39 a month, plus apps and payment fees on each sale.",
          "Custom-coded website: hosting can be low for a small site, but changes need a developer, so budget for support time.",
          "Prices change, so check each provider's current pricing before you decide.",
        ],
      },
      {
        heading: "Do you have to pay for a website every month?",
        paragraphs: [
          "Some ongoing cost is normal. Free plans exist, but they usually show the builder's advertising, use the builder's web address instead of your own domain and limit features, which doesn't look professional for a business.",
          "You can lower monthly costs by paying yearly (many platforms give a discount), using only the apps you really need and choosing a platform that fits the site's size.",
        ],
      },
      {
        heading: "What does website maintenance cost per month?",
        paragraphs: [
          "If you update the site yourself, maintenance costs your time. If you'd rather hand it over, a care plan covers updates, backups, security monitoring and small changes. Our care plan starts from $99 a month.",
          "WordPress sites need the most maintenance because plugins and themes need regular updates. Wix, Squarespace and Shopify handle platform updates for you.",
        ],
      },
      {
        heading: "Example monthly budgets",
        bullets: [
          "Simple service business on Wix or Squarespace: about $20 to $50 a month, plus your domain.",
          "WordPress business site with managed hosting and a care plan: about $120 to $160 a month.",
          "Small Shopify store with a few apps: about $60 to $150 a month, plus payment fees.",
        ],
      },
      {
        heading: "How Dandilo Digitals can help",
        paragraphs: [
          "We set up your domain, hosting or platform account in your name, so you pay providers directly and never pay a markup. Websites start from $300 to build, and our care plan starts from $99 a month if you want us to look after it.",
          "Ask for a free website audit and we'll tell you what your site should cost to run.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does a website cost per month for a small business?",
        a: "Usually about $20 to $150 a month, depending on the platform, apps and whether you pay for maintenance.",
      },
      {
        q: "How much does a website cost per year?",
        a: "Once it's built, most small business websites cost roughly $250 to $1,800 a year, covering the domain, hosting or platform plan, apps and maintenance.",
      },
      {
        q: "How much does website hosting cost?",
        a: "Basic shared hosting can be a few dollars a month. Managed WordPress hosting usually costs $20 to $50 a month. Wix, Squarespace and Shopify include hosting in their plans.",
      },
      {
        q: "Can I have a business website for free?",
        a: "You can start on a free plan, but it will usually show the builder's ads and use their web address. Most businesses need at least a basic paid plan and their own domain.",
      },
    ],
    related: ["/blog/small-business-website-cost", "/blog/small-business-website-hosting-and-email", "/services/website-maintenance", "/blog/shopify-website-cost"],
  },
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
    related: ["/blog/freelancer-vs-agency-website", "/blog/how-to-choose-a-web-designer", "/blog/small-business-website-cost", "/services/small-business-web-design", "/blog/how-to-hire-a-web-designer-remotely"],
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
    related: ["/blog/get-more-customers-from-your-website", "/blog/small-business-website-cost", "/services/small-business-web-design", "/blog/facebook-page-vs-website", "/blog/how-to-get-your-business-on-google-maps"],
  },
];
