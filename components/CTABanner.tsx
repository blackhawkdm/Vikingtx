import Link from "next/link";

interface CTABannerProps {
  heading?: string;
  subtext?: string;
}

export default function CTABanner({
  heading = "Optimize your production with expert sizing and technical support.",
  subtext,
}: CTABannerProps) {
  return (
    <section className="bg-gradient-to-r from-viking-accent via-[#963d1c] to-viking-accent py-[42px]">
      <div className="site-container">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-9 text-center">
          <div>
            <h2 className="text-white text-2xl sm:text-3xl font-bold leading-9">{heading}</h2>
            {subtext && <p className="text-white/80 text-lg mt-2">{subtext}</p>}
          </div>
          <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row">
            <a
              href="tel:4323371900"
              className="inline-flex items-center justify-center gap-2 border-2 border-transparent bg-white text-viking-accent font-bold px-6 py-3 rounded hover:bg-viking-light transition-colors text-base min-h-[44px]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Now!
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-6 py-3 rounded hover:bg-white/10 transition-colors text-base min-h-[44px]"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
