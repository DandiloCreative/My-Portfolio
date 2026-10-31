export type Faq = { q: string; a: string };

export type ContentSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

/** A text page rendered by ContentPage (service, industry, blog post or legal page). */
export type ContentPageData = {
  path: string;
  kind: "service" | "industry" | "blog" | "legal";
  /** Short name used in breadcrumbs and link lists */
  label: string;
  /** <title> and meta description */
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string[];
  sections: ContentSection[];
  faqs?: Faq[];
  /** Paths of related pages to link to at the bottom */
  related?: string[];
  /** Blog posts only */
  date?: string;
  readMinutes?: number;
};
