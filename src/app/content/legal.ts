import type { ContentPageData } from "./types";

// Plain-English drafts. Have them reviewed by a qualified professional for your situation.
export const legalPages: ContentPageData[] = [
  {
    path: "/privacy",
    kind: "legal",
    label: "Privacy Policy",
    title: "Privacy Policy | Dandilo Digitals",
    description: "How Dandilo Digitals collects, uses and protects your information when you use our website or contact us.",
    eyebrow: "Legal",
    h1: "Privacy Policy",
    intro: [
      "Last updated: October 30, 2026.",
      "This policy explains what information Dandilo Digitals (\"we\", \"us\") collects when you visit dandilodigitals.com or contact us, how we use it and the choices you have.",
    ],
    sections: [
      {
        heading: "Information you give us",
        paragraphs: [
          "When you use our contact form, we collect your name, email address, the platform you're interested in and your message. If you contact us by email or WhatsApp, we receive the details you choose to share, such as your name, phone number and message.",
          "Contact form messages are delivered to our email inbox through a form-delivery service (FormSubmit).",
        ],
      },
      {
        heading: "Information collected automatically",
        bullets: [
          "Meta Pixel: we use the Meta Pixel to understand how visitors use our site and to measure and improve our Facebook and Instagram advertising. It may collect information such as pages visited, buttons clicked, your browser and device, and your IP address, and may use cookies. Meta's use of this data is governed by Meta's own privacy policy.",
          "Google Analytics: we may use Google Analytics to understand how visitors find and use our website (for example, pages viewed and how long people stay). It uses cookies and collects information such as your device, browser and approximate location. You can opt out with Google's browser add-on at tools.google.com/dlpage/gaoptout.",
          "Hosting logs: our hosting provider may record technical information such as IP addresses and browser types to keep the site secure and running.",
          "Fonts: our website loads fonts from Google Fonts, which means your browser connects to Google's servers.",
          "Your theme choice (light or dark mode) is saved in your own browser's storage and is not sent to us.",
        ],
      },
      {
        heading: "How we use your information",
        bullets: [
          "To reply to your enquiries and provide the services you ask for",
          "To understand how our website is used and improve it",
          "To measure and improve our advertising",
          "To keep our website secure",
        ],
        paragraphs: ["We do not sell your personal information."],
      },
      {
        heading: "Sharing your information",
        paragraphs: [
          "We share information only with the service providers that help us run our website and business (such as our hosting provider, FormSubmit, Meta and Google), and when required by law.",
        ],
      },
      {
        heading: "Your choices",
        bullets: [
          "You can ask us what personal information we hold about you, or ask us to correct or delete it.",
          "You can block or delete cookies in your browser settings.",
          "You can control how Meta uses your information for ads in your Facebook or Instagram ad settings.",
        ],
      },
      {
        heading: "How long we keep information",
        paragraphs: [
          "We keep enquiry messages for as long as needed to respond to you and manage our working relationship, and then delete them when they're no longer needed.",
        ],
      },
      {
        heading: "Children's privacy",
        paragraphs: ["Our website is intended for businesses and adults. We do not knowingly collect information from children under 13."],
      },
      {
        heading: "Changes and contact",
        paragraphs: [
          "We may update this policy from time to time. The \"last updated\" date at the top shows when it last changed.",
          "Questions about your privacy? Email us at dandilodigitals@gmail.com.",
        ],
      },
    ],
  },
  {
    path: "/terms",
    kind: "legal",
    label: "Terms of Use",
    title: "Terms of Use | Dandilo Digitals",
    description: "The terms that apply when you use the Dandilo Digitals website.",
    eyebrow: "Legal",
    h1: "Terms of Use",
    intro: [
      "Last updated: October 30, 2026.",
      "These terms apply to your use of dandilodigitals.com. By using the website, you agree to them. Website design and development projects are covered by a separate written agreement.",
    ],
    sections: [
      {
        heading: "Using our website",
        paragraphs: [
          "You may browse and use this website for your own information. Please don't misuse it, for example by trying to break its security, sending spam through our contact form or copying the site.",
        ],
      },
      {
        heading: "Our content",
        paragraphs: [
          "The design, text, graphics and portfolio images on this website belong to Dandilo Digitals or are used with permission. Portfolio projects remain the property of their respective owners. You may not copy or reuse our content without permission.",
        ],
      },
      {
        heading: "Information on this website",
        paragraphs: [
          "We work to keep the information on this website accurate and up to date, but it's provided for general information only and may change without notice. It isn't a quote or a binding offer; pricing and project details are agreed in writing.",
        ],
      },
      {
        heading: "Links to other websites",
        paragraphs: [
          "Our website links to other sites, such as WhatsApp, Facebook and Instagram. We're not responsible for their content or privacy practices.",
        ],
      },
      {
        heading: "Limitation of liability",
        paragraphs: [
          "To the extent allowed by law, Dandilo Digitals is not liable for any loss or damage arising from your use of this website.",
        ],
      },
      {
        heading: "Changes and contact",
        paragraphs: [
          "We may update these terms from time to time. Questions? Email us at dandilodigitals@gmail.com.",
        ],
      },
    ],
  },
];
