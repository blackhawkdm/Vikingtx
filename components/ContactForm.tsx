"use client";

import { useState, useRef, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { sendGTMEvent } from "@next/third-parties/google";
import ReCAPTCHA from "react-google-recaptcha";

const interests = [
  "Pressure Vessels",
  "Storage Tanks",
  "Specialty Vessels",
  "Coating",
  "Delivery & Setting",
  "Repair",
  "Other",
];

// Formspree endpoint for the Viking Contact form
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqevlvaj";

// reCAPTCHA v2 site key (public). If it's unset — e.g. on a preview build —
// the captcha is skipped so the form still works.
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

type FormState = "idle" | "submitting" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const router = useRouter();

  const captchaEnabled = Boolean(RECAPTCHA_SITE_KEY);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // If the captcha is active, require the box to be checked first.
    if (captchaEnabled && !captchaToken) {
      setState("error");
      return;
    }

    setState("submitting");

    const form = e.currentTarget;
    const data: Record<string, string> = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      interest: (form.elements.namedItem("interest") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      _subject: "New inquiry from the Viking website",
    };

    // Honeypot: real users never see this; bots fill it and Formspree drops them.
    const gotcha = (form.elements.namedItem("_gotcha") as HTMLInputElement)?.value;
    if (gotcha) data._gotcha = gotcha;

    // Include the reCAPTCHA token so Formspree can verify it server-side.
    if (captchaToken) data["g-recaptcha-response"] = captchaToken;

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        sendGTMEvent({ event: "contact_form_submit" });
        router.push("/thank-you");
      } else {
        setState("error");
        recaptchaRef.current?.reset();
        setCaptchaToken(null);
      }
    } catch {
      setState("error");
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName" className="block text-sm font-semibold text-viking-black mb-1">
            First Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            className="w-full border border-viking-border rounded px-3 py-2.5 text-viking-black text-sm focus:outline-none focus:ring-2 focus:ring-viking-accent focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-semibold text-viking-black mb-1">
            Last Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
            className="w-full border border-viking-border rounded px-3 py-2.5 text-viking-black text-sm focus:outline-none focus:ring-2 focus:ring-viking-accent focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-viking-black mb-1">
          Email <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full border border-viking-border rounded px-3 py-2.5 text-viking-black text-sm focus:outline-none focus:ring-2 focus:ring-viking-accent focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-viking-black mb-1">
          Phone Number <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className="w-full border border-viking-border rounded px-3 py-2.5 text-viking-black text-sm focus:outline-none focus:ring-2 focus:ring-viking-accent focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="interest" className="block text-sm font-semibold text-viking-black mb-1">
          I&apos;m interested in
        </label>
        <select
          id="interest"
          name="interest"
          className="w-full border border-viking-border rounded px-3 py-2.5 text-viking-black text-sm focus:outline-none focus:ring-2 focus:ring-viking-accent focus:border-transparent bg-white"
        >
          <option value="">Select a product or service</option>
          {interests.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-viking-black mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full border border-viking-border rounded px-3 py-2.5 text-viking-black text-sm focus:outline-none focus:ring-2 focus:ring-viking-accent focus:border-transparent resize-y"
          placeholder="Tell us about your project or question..."
        />
      </div>

      {/* Honeypot — hidden from real users; bots fill it and get dropped */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {/* reCAPTCHA v2 checkbox — only renders when the site key is present */}
      {captchaEnabled && (
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={RECAPTCHA_SITE_KEY as string}
          onChange={(token) => setCaptchaToken(token)}
          onExpired={() => setCaptchaToken(null)}
        />
      )}

      {state === "error" && (
        <p className="text-red-600 text-sm">
          Something went wrong. Please check the box and try again, or call us at{" "}
          <a href="tel:4323371900" className="underline">432-337-1900</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting" || (captchaEnabled && !captchaToken)}
        className="w-full bg-viking-accent hover:bg-viking-accent-dark disabled:opacity-60 text-white font-bold py-3 rounded transition-colors text-base min-h-[44px]"
      >
        {state === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
