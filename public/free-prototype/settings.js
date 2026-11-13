// Settings for the Free Prototype landing page (used by index.html and thank-you.html).
// The site's security rules block inline <script> code, so the settings live in this file.
window.DD = {
  // Leads go to Dandilo CRM (Leads + Inbox) and to hello@dandilodigitals.com by email (Web3Forms).
  CRM_URL: "https://dandilo-crm-api.vercel.app",
  WEB3FORMS_KEY: "3d8d487f-82ce-406e-9138-831dfa56b659", // public by design
  // Cloudflare Turnstile public site key: the CRM's "are you human?" check
  TURNSTILE_SITE_KEY: "0x4AAAAAAFzgWU8srwiu33c7",
  WHATSAPP_NUMBER: "12246200930", // digits only, with country code
  WHATSAPP_TEXT: "Hi Dandilo Digitals, I'd like my free website prototype.",
  PIXEL_ID: "1153704343895256", // Meta Pixel
  BOOK_CALL_URL: "https://calendly.com/dandilodigitals/30min", // "Book a Call" (Calendly)
};
