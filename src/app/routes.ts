// Every page on the site, in one place.
// Used by the app (titles, which page to show), the build-time prerender and the sitemap.
import type { ContentPageData } from "./content/types";
import { servicePages } from "./content/services";
import { industryPages } from "./content/industries";
import { blogPosts as basePosts } from "./content/blog";
import { countryPosts } from "./content/blog-countries";
import { guidePosts } from "./content/blog-guides";
import { locationPages } from "./content/locations";
import { devPages, devPosts } from "./content/dev-services";
import { legalPages } from "./content/legal";
import { pricingFaqs, pricingPackages } from "./content/pricing";

export const SITE_URL = "https://dandilodigitals.com";

export type RouteInfo = {
  path: string;
  title: string;
  description: string;
  /** Shows the main FAQ section (so its structured data belongs on the page) */
  mainFaq: boolean;
  /** Set for text pages rendered by ContentPage */
  content?: ContentPageData;
  /** Ad landing and thank-you pages: kept out of Google's index and the sitemap */
  noindex?: boolean;
  /** Extra structured data (JSON-LD objects) added by the prerender */
  schema?: object[];
};

const pricingSchema = [
  {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Web design packages",
    url: `${SITE_URL}/pricing`,
    itemListElement: pricingPackages.map((p) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: p.name, description: p.summary },
      priceSpecification: {
        "@type": p.per ? "UnitPriceSpecification" : "PriceSpecification",
        minPrice: p.price,
        priceCurrency: "USD",
        ...(p.per ? { unitText: "MONTH" } : {}),
      },
      seller: { "@type": "ProfessionalService", name: "Dandilo Digitals", url: SITE_URL },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pricingFaqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  },
];

const mainPages: RouteInfo[] = [
  {
    path: "/",
    title: "Web Design Company for Small Businesses | Dandilo Digitals",
    description:
      "Website design company for small businesses in the US, UK and Canada. WordPress, Shopify, Wix Studio and custom websites built to win customers. Free audit.",
    mainFaq: true,
  },
  {
    path: "/services",
    title: "Web Design & Development Services | Dandilo Digitals",
    description:
      "Custom website design, website redesign, landing pages and ecommerce web design for small businesses. Fast, mobile-friendly sites built to bring in leads.",
    mainFaq: true,
  },
  {
    path: "/platforms",
    title: "WordPress, Shopify, Wix, Squarespace & GoHighLevel | Dandilo",
    description:
      "WordPress, Shopify, Wix Studio, Squarespace and GoHighLevel websites, plus full stack development with React, Next.js, NestJS, Laravel and Django.",
    mainFaq: false,
  },
  {
    path: "/pricing",
    title: "Affordable Web Design Packages & Pricing | Dandilo",
    description:
      "Affordable web design packages for small businesses: websites from $300, online stores from $1,250 and redesigns from $300. Clear quotes, no surprises.",
    mainFaq: false,
    schema: pricingSchema,
  },
  {
    path: "/portfolio",
    title: "Web Design Portfolio & Projects | Dandilo Digitals",
    description:
      "See recent website design and development projects on WordPress, Shopify, Wix Studio and custom code, from online stores to real estate websites.",
    mainFaq: false,
  },
  {
    path: "/reviews",
    title: "Client Reviews & Testimonials | Dandilo Digitals",
    description:
      "Read what clients say about working with Dandilo Digitals on their WordPress, Shopify, Wix Studio and custom website projects.",
    mainFaq: false,
  },
  {
    path: "/contact",
    title: "Contact Us & Free Website Audit | Dandilo Digitals",
    description:
      "Get a free website audit or start your project. Contact Dandilo Digitals by form, email or WhatsApp at +1 224-620-0930.",
    mainFaq: true,
  },
  {
    path: "/blog",
    title: "Web Design Tips for Small Businesses | Dandilo Digitals",
    description:
      "Practical web design, SEO and website platform guides for small business owners, from choosing between Wix, WordPress and Shopify to getting more leads.",
    mainFaq: false,
  },
];

// Pages for paid ads and after a form is sent. Not in the menu, sitemap or search results.
const hiddenPages: RouteInfo[] = [
  {
    path: "/free-website-audit",
    title: "Free Small Business Website Audit | Dandilo Digitals",
    description:
      "Get a free small business website audit. We review your design, mobile experience, speed, security and SEO, and send clear fixes to get more enquiries.",
    mainFaq: false,
    noindex: true,
  },
  {
    path: "/thank-you",
    title: "Thank You | Dandilo Digitals",
    description: "Thanks for contacting Dandilo Digitals. We'll reply by email soon.",
    mainFaq: false,
    noindex: true,
  },
];

const blogPosts = [...guidePosts, ...devPosts, ...countryPosts, ...basePosts];
export const CONTENT_PAGES: ContentPageData[] = [...servicePages, ...devPages, ...locationPages, ...industryPages, ...blogPosts, ...legalPages];
export { servicePages, devPages, locationPages, industryPages, blogPosts, legalPages };

export const ROUTES: RouteInfo[] = [
  ...mainPages,
  ...hiddenPages,
  ...CONTENT_PAGES.map((c) => ({
    path: c.path,
    title: c.title,
    description: c.description,
    mainFaq: false,
    content: c,
  })),
];

export const ROUTE_MAP: Record<string, RouteInfo> = Object.fromEntries(ROUTES.map((r) => [r.path, r]));

export function normalizePath(path: string) {
  return path.length > 1 ? path.replace(/\/+$/, "") : path;
}
