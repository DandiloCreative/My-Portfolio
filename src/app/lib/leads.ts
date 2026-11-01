// Sends an enquiry to the inbox (via FormSubmit) and records it as a lead in every tracking tool.
import { getAttributionFields } from "./attribution";
import { trackLead } from "./metaPixel";
import { trackAdsLead, trackEvent } from "./analytics";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/dandilodigitals@gmail.com";

export type LeadFields = {
  name: string;
  email: string;
  phone?: string;
  website?: string;
  budget?: string;
  [extra: string]: string | undefined;
};

/** Throws if the message couldn't be sent. `formName` shows up in the email subject and analytics. */
export async function submitLead(fields: LeadFields, formName: string) {
  const body: Record<string, string> = {};
  for (const [key, value] of Object.entries(fields)) {
    if (value) body[key] = value;
  }
  Object.assign(body, getAttributionFields(), {
    Form: formName,
    _subject: `${formName}: ${fields.name}`,
    _template: "table",
    _replyto: fields.email,
  });

  const res = await fetch(FORM_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body),
  });
  const result = await res.json().catch(() => null);
  // FormSubmit returns success: "true" (string) when the email was accepted
  if (!res.ok || String(result?.success) !== "true") {
    throw new Error(result?.message || `Request failed (${res.status})`);
  }

  trackLead({ email: fields.email, phone: fields.phone, name: fields.name }, formName);
  trackEvent("generate_lead", { method: formName });
  trackAdsLead(fields.email, fields.phone);
}

export const BUDGET_OPTIONS = [
  "Under $1,000",
  "$1,000 – $3,000",
  "$3,000 – $7,500",
  "$7,500+",
  "Not sure yet",
];
