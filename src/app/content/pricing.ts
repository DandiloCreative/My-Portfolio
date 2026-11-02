// Packages and prices shown on /pricing (and in its structured data). Prices are "from" prices in USD.
import type { Faq } from "./types";

export type PricingPackage = {
  name: string;
  price: number;
  /** Shown after the price, e.g. "/month" for the care plan */
  per?: string;
  summary: string;
  features: string[];
  popular?: boolean;
  /** Service page with more detail */
  link?: string;
};

export const pricingPackages: PricingPackage[] = [
  {
    name: "Starter Website",
    price: 600,
    summary: "A clean, professional website to get your business online.",
    features: ["Up to 3 pages", "Mobile-friendly design", "Contact form and WhatsApp button", "Basic on-page SEO"],
    link: "/services/small-business-web-design",
  },
  {
    name: "Business Website",
    price: 1200,
    summary: "A complete website built to bring in calls, bookings and enquiries.",
    features: [
      "Up to 7 pages",
      "WordPress or Wix Studio",
      "Blog and reviews section",
      "On-page SEO and Google Analytics",
    ],
    popular: true,
    link: "/services/small-business-web-design",
  },
  {
    name: "Online Store",
    price: 1500,
    summary: "A Shopify or WooCommerce store that's easy to shop and easy to manage.",
    features: ["Shopify or WooCommerce", "Product pages and collections", "Payments and shipping setup", "Mobile-friendly checkout"],
    link: "/services/ecommerce-web-design",
  },
  {
    name: "Website Redesign",
    price: 800,
    summary: "Give your current website a modern look without losing your Google rankings.",
    features: ["Modern, mobile-friendly redesign", "Keep your content and page addresses", "Faster loading pages", "Redirects set up where needed"],
    link: "/services/website-redesign",
  },
  {
    name: "Custom Website Development",
    price: 2500,
    summary: "Custom-coded websites and web apps for businesses that need more.",
    features: ["Built with React / Next.js", "Custom features and integrations", "Fast and secure", "Built to grow with your business"],
    link: "/platforms",
  },
  {
    name: "SEO Setup",
    price: 600,
    summary: "Help customers find you on Google, including Google Merchant Center.",
    features: [
      "Keyword research",
      "On-page SEO for your key pages",
      "Google Search Console and Analytics",
      "Google Merchant Center setup",
    ],
  },
  {
    name: "Care Plan",
    price: 99,
    per: "/month",
    summary: "We look after your website so you can focus on your business.",
    features: ["Updates and backups", "Security monitoring", "Small content changes each month", "Priority support"],
  },
];

export const pricingFaqs: Faq[] = [
  {
    q: "Are these fixed prices?",
    a: "They're starting prices in US dollars. Your final price depends on the number of pages, features and content you need. After a free website audit or a short chat, we'll send you a clear, fixed quote before any work starts.",
  },
  {
    q: "Why are your prices lower than many US agencies?",
    a: "We're a remote team, so we don't carry the overheads of a big city office. That lets us offer professional design and development at prices that work for small businesses.",
  },
  {
    q: "Are there any other costs?",
    a: "Your domain name, hosting or platform plan (for example Shopify or Wix) and any paid apps are paid directly to those providers, so you always own your accounts. We'll tell you what to expect in your quote.",
  },
  {
    q: "Which package is right for me?",
    a: "Most service businesses choose the Business Website. If you sell products, choose the Online Store. Not sure? Request a free website audit and we'll recommend the best option.",
  },
  {
    q: "Do I own my website?",
    a: "Yes. Your website, content and domain belong to you.",
  },
];
