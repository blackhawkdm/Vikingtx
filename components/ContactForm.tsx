"use client";

import { useState, FormEvent } from "react";

const interests = [
  "Pressure Vessels",
  "Storage Tanks",
  "Specialty Vessels",
  "Coating",
  "Delivery & Setting",
  "Repair",
  "Other",
];

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      interest: (form.elements.namedItem("interest") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="bg-viking-teal/10 border border-viking-teal rounded-lg p-8 text-center">
        <svg className="w-12 h-12 text-viking-teal mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-viking-black font-bold text-xl mb-2">Message Sent</h3>
        <p className="text-viking-gray">
          We&apos;ve received your inquiry and will be in touch shortly. For immediate assistance, call{" "}
          <a href="tel:4323371900" className="text-viking-accent font-semibold">
            432-337-1900
          </a>.
        </p>
      </div>
    );
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

      {state === "error" && (
        <p className="text-red-600 text-sm">
          Something went wrong. Please try again or call us at{" "}
          <a href="tel:4323371900" className="underline">432-337-1900</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full bg-viking-accent hover:bg-viking-accent-dark disabled:opacity-60 text-white font-bold py-3 rounded transition-colors text-base min-h-[44px]"
      >
        {state === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
