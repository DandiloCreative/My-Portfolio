// Every page on the site, in one place.
// Used by the app (titles, which page to show), the build-time prerender and the sitemap.
import type { ContentPageData } from "./content/types";
import { servicePages } from "./content/services";
import { industryPages } from "./content/industries";
import { blogPosts } from "./content/blog";
import { legalPages } from "./content/legal";

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
};

const mainPages: RouteInfo[] = [
  {
    path: "/",
    title: "Web Design Company for Small Businesses | Dandilo Digitals",
    description:
      "Web design and development agency for US small businesses. WordPress, Shopify, Wix Studio and custom websites built to win customers. Free website audit.",
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
    title: "WordPress, Shopify & Wix Website Development | Dandilo",
    description:
      "WordPress web design, Shopify store development, Wix Studio websites and custom React builds. We help small businesses pick and build on the right platform.",
    mainFaq: false,
  },
  {
    path: "/portfolio",
    title: "Web Design Portfolio & Recent Projects | Dandilo Digitals",
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
    title: "Web Design Tips & Guides for Small Businesses | Dandilo Digitals",
    description:
      "Practical web design, SEO and website platform guides for small business owners, from choosing between Wix, WordPress and Shopify to getting more leads.",
    mainFaq: false,
  },
];

// Pages for paid ads and after a form is sent. Not in the menu, sitemap or search results.
const hiddenPages: RouteInfo[] = [
  {
    path: "/free-website-audit",
    title: "Free Website Audit for Small Businesses | Dandilo Digitals",
    description:
      "Get a free, no-obligation website audit. We review your design, mobile experience, speed and SEO, and send clear fixes to get more enquiries.",
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

export const CONTENT_PAGES: ContentPageData[] = [...servicePages, ...industryPages, ...blogPosts, ...legalPages];
export { servicePages, industryPages, blogPosts, legalPages };

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
