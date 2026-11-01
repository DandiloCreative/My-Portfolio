import { useState, type ReactNode } from "react";
import { useNavigate } from "react-router";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { BUDGET_OPTIONS, submitLead } from "../lib/leads";

const fieldClass =
  "bg-white/5 border-white/10 text-white placeholder-zinc-600 focus:border-violet-500/50 focus:ring-violet-500/30 rounded-xl h-12";
const selectClass =
  "w-full px-4 h-12 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500/50 text-white appearance-none";
const labelClass = "block text-sm font-medium mb-2 text-zinc-300";

const PLATFORMS = [
  ["not-sure", "Not sure yet, help me choose"],
  ["wordpress", "WordPress"],
  ["shopify", "Shopify"],
  ["wix", "Wix Studio"],
  ["custom", "Custom website (React / Next.js)"],
];

type Props = {
  /** Shown in the email subject and analytics, e.g. "Contact form" */
  formName: string;
  submitLabel: string;
  idPrefix: string;
  /** Audit form: website is required and there's no platform question */
  variant?: "contact" | "audit";
};

function Field({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>{label}</label>
      {children}
    </div>
  );
}

export function LeadForm({ formName, submitLabel, idPrefix, variant = "contact" }: Props) {
  const navigate = useNavigate();
  const isAudit = variant === "audit";
  const empty = { name: "", email: "", phone: "", website: "", platform: "", budget: "", message: "" };
  const [data, setData] = useState(empty);
  const [sending, setSending] = useState(false);
  const set = (key: keyof typeof empty) => (e: { target: { value: string } }) => setData({ ...data, [key]: e.target.value });
  const id = (name: string) => `${idPrefix}-${name}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await submitLead(
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          website: data.website,
          platform: isAudit ? "" : data.platform,
          budget: data.budget,
          message: data.message,
        },
        formName
      );
      setData(empty);
      navigate("/thank-you");
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Your message couldn't be sent. Please try again or message us on WhatsApp.");
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Field id={id("name")} label="Name">
        <Input id={id("name")} name="name" autoComplete="name" placeholder="Your name" value={data.name} onChange={set("name")} required className={fieldClass} />
      </Field>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field id={id("email")} label="Email">
          <Input id={id("email")} name="email" type="email" autoComplete="email" placeholder="you@company.com" value={data.email} onChange={set("email")} required className={fieldClass} />
        </Field>
        <Field id={id("phone")} label="Phone / WhatsApp (optional)">
          <Input id={id("phone")} name="phone" type="tel" autoComplete="tel" placeholder="+1 555 123 4567" value={data.phone} onChange={set("phone")} className={fieldClass} />
        </Field>
      </div>

      <Field id={id("website")} label={isAudit ? "Your website" : "Your website (if you have one)"}>
        <Input id={id("website")} name="website" type="text" inputMode="url" autoComplete="url" placeholder="yourbusiness.com" value={data.website} onChange={set("website")} required={isAudit} className={fieldClass} />
      </Field>

      <div className={`grid gap-5 ${isAudit ? "" : "sm:grid-cols-2"}`}>
        {!isAudit && (
          <Field id={id("platform")} label="Platform">
            <select id={id("platform")} name="platform" className={selectClass} value={data.platform} onChange={set("platform")} required>
              <option value="" disabled className="bg-zinc-900">Choose one</option>
              {PLATFORMS.map(([value, label]) => (
                <option key={value} value={value} className="bg-zinc-900">{label}</option>
              ))}
            </select>
          </Field>
        )}
        <Field id={id("budget")} label="Budget (optional)">
          <select id={id("budget")} name="budget" className={selectClass} value={data.budget} onChange={set("budget")}>
            <option value="" className="bg-zinc-900">Choose a range</option>
            {BUDGET_OPTIONS.map((b) => (
              <option key={b} value={b} className="bg-zinc-900">{b}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field id={id("message")} label={isAudit ? "What would you like to improve? (optional)" : "Tell us about your project"}>
        <Textarea
          id={id("message")}
          name="message"
          rows={isAudit ? 3 : 4}
          placeholder={isAudit ? "E.g. more enquiries, faster site, better on mobile…" : "What you need, any deadline, and anything else we should know"}
          value={data.message}
          onChange={set("message")}
          required={!isAudit}
          className="bg-white/5 border-white/10 text-white placeholder-zinc-600 focus:border-violet-500/50 focus:ring-violet-500/30 rounded-xl resize-none p-4"
        />
      </Field>

      <button
        type="submit"
        disabled={sending}
        className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 disabled:opacity-70 text-white rounded-xl h-14 text-lg font-semibold shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all flex items-center justify-center gap-2"
      >
        {sending ? "Sending…" : <>{submitLabel} <ArrowRight className="w-5 h-5" /></>}
      </button>
      <p className="text-xs text-zinc-500 text-center">
        We only use your details to reply to you. See our <a href="/privacy" className="underline underline-offset-2 hover:text-zinc-300">Privacy Policy</a>.
      </p>
    </form>
  );
}
