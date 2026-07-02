import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | Viking Inc.",
  description: "Your message has been received. Viking Inc. will be in touch shortly.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="bg-viking-light py-20 sm:py-28">
      <div className="site-container">
        <div className="mx-auto max-w-xl rounded-xl border border-viking-border bg-white px-8 py-12 text-center shadow-sm">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-viking-accent/10">
            <svg className="h-8 w-8 text-viking-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-viking-black sm:text-4xl">
            Thank You
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-viking-gray">
            We&apos;ve received your message and a member of our team will be in touch shortly. For
            immediate assistance, give us a call.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
            <a
              href="tel:4323371900"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg border-2 border-transparent bg-viking-accent px-6 py-3.5 text-base font-bold text-white transition-colors hover:bg-viking-accent-dark"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call 432-337-1900
            </a>
            <Link
              href="/"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg border-2 border-viking-accent px-6 py-3.5 text-base font-semibold text-viking-accent transition-colors hover:bg-viking-accent/10"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
