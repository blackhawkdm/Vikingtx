import Link from "next/link";

interface CTABannerProps {
  heading?: string;
  subtext?: string;
}

export default function CTABanner({
  heading = "Need sizing help? Our team can assist.",
  subtext,
}: CTABannerProps) {
  return (
    <section className="bg-viking-accent py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2">{heading}</h2>
        {subtext && <p className="text-white/80 text-lg mb-6">{subtext}</p>}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <a
            href="tel:4323371900"
            className="inline-flex items-center gap-2 bg-white text-viking-accent font-bold px-6 py-3 rounded hover:bg-viking-light transition-colors text-lg min-h-[44px]"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call 432-337-1900
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-6 py-3 rounded hover:bg-white/10 transition-colors text-base min-h-[44px]"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
