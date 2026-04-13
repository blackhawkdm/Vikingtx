import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Viking Inc. privacy policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-black text-viking-black tracking-tight mb-8">
          Privacy Policy
        </h1>
        <div className="prose prose-sm max-w-none text-viking-gray space-y-6">
          <p className="text-sm text-viking-gray/70">
            Last updated: {new Date().getFullYear()}
          </p>

          <section>
            <h2 className="text-lg font-bold text-viking-black mb-2">Information We Collect</h2>
            <p>
              When you submit a contact or quote request form on this website, we collect the
              information you provide — including your name, phone number, and message. We do not
              collect any information automatically beyond standard web server logs.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-viking-black mb-2">How We Use Your Information</h2>
            <p>
              Information you submit is used solely to respond to your inquiry. We do not sell,
              trade, or share your personal information with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-viking-black mb-2">Contact</h2>
            <p>
              If you have questions about this policy, contact us at{" "}
              <a href="mailto:jmartin@vikingtx.com" className="text-viking-accent hover:underline">
                jmartin@vikingtx.com
              </a>{" "}
              or call{" "}
              <a href="tel:4323371900" className="text-viking-accent hover:underline">
                432-337-1900
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
