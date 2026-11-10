// Sends an enquiry to the email inbox (via Web3Forms, delivered to hello@dandilodigitals.com) and Dandilo CRM, and records it as a lead in every tracking tool.
import { getAttributionFields } from "./attribution";
import { trackLead } from "./metaPixel";
import { trackAdsLead, trackEvent } from "./analytics";

const FORM_ENDPOINT = "https://api.web3forms.com/submit";
// Web3Forms access key (public by design). Emails go to the address it was created for: hello@dandilodigitals.com
const WEB3FORMS_KEY = "3d8d487f-82ce-406e-9138-831dfa56b659";
// Dandilo CRM's server (Leads + Inbox). Enquiries are sent here as well as by email.
export const CRM_API_URL = "https://dandilo-crm-api.vercel.app";

export type LeadFields = {
  name: string;
  email: string;
  phone?: string;
  website?: string;
  budget?: string;
  [extra: string]: string | undefined;
};

/** Throws if the message couldn't be sent. `formName` shows up in the email subject and analytics. */
export async function submitLead(fields: LeadFields, formName: string, turnstileToken = "") {
  const body: Record<string, string> = {};
  for (const [key, value] of Object.entries(fields)) {
    if (value) body[key] = value;
  }
  Object.assign(body, getAttributionFields(), {
    Form: formName,
    access_key: WEB3FORMS_KEY,
    subject: `${formName}: ${fields.name}`,
    from_name: "Dandilo Digitals website",
    replyto: fields.email,
  });

  // Send to the email inbox and the CRM at the same time; the enquiry counts as sent if either works
  const [email, crm] = await Promise.allSettled([sendEmail(body), sendToCrm(fields, formName, turnstileToken)]);
  if (email.status === "rejected" && crm.status === "rejected") throw email.reason;

  trackLead({ email: fields.email, phone: fields.phone, name: fields.name }, formName);
  trackEvent("generate_lead", { method: formName });
  trackAdsLead(fields.email, fields.phone);
}

async function sendEmail(body: Record<string, string>) {
  const res = await fetch(FORM_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body),
  });
  const result = await res.json().catch(() => null);
  // Web3Forms returns success: true when the email was accepted
  if (!res.ok || String(result?.success) !== "true") {
    throw new Error(result?.message || `Request failed (${res.status})`);
  }
}

/** Creates the lead (plus contact and Inbox conversation) in Dandilo CRM. */
async function sendToCrm(fields: LeadFields, formName: string, turnstileToken: string) {
  const a = getAttributionFields();
  const res = await fetch(`${CRM_API_URL}/api/public/leads`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    keepalive: true,
    signal: AbortSignal.timeout(10_000),
    body: JSON.stringify({
      name: fields.name,
      email: fields.email,
      phone: fields.phone || undefined,
      website: fields.website || undefined,
      budget: fields.budget || undefined,
      platform: fields.platform || undefined,
      message: fields.message || undefined,
      formName,
      source: a["Lead source"],
      medium: a["Medium"],
      campaign: a["Campaign"],
      keyword: a["Keyword"],
      landingPage: a["First page visited"],
      turnstileToken: turnstileToken || undefined,
    }),
  });
  if (!res.ok) throw new Error(`CRM request failed (${res.status})`);
}

export const BUDGET_OPTIONS = [
  "$300 – $600",
  "$600 – $1,000",
  "$1,000 – $3,000",
  "$3,000 – $7,500",
  "$7,500+",
  "Not sure yet",
];
