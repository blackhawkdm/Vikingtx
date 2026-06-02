import Link from "next/link";
import Image from "next/image";

interface HeroBannerProps {
  headline: string;
  subhead: string;
  imageSrc?: string;
  imageAlt?: string;
}

const stats = [
  { value: "50+", label: "Years Industry Experience" },
  { value: "2008", label: "Founded in Odessa, TX" },
  { value: "40k sqft", label: "Production Facility" },
  { value: "ASME", label: "Code Certified" },
];

function headlineLines(headline: string): [string, string] | [string] {
  const match = headline.match(/^(.+\.)\s+(.+)$/);
  if (match) return [match[1], match[2]];
  return [headline];
}

export default function HeroBanner({
  headline,
  subhead,
  imageSrc = "/images/Gaupo1.webp",
  imageAlt = "Viking Inc. tank battery installation with crane",
}: HeroBannerProps) {
  const lines = headlineLines(headline);

  return (
    <section
      className="relative flex min-h-[595px] flex-col overflow-hidden"
      aria-label={imageAlt}
    >
      {/* Full-bleed background */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="hero-media-overlay absolute inset-0" />
      </div>

      {/* Left-aligned content — Figma: 114px inset @ 1440px */}
      <div className="relative z-10 flex flex-1 flex-col justify-center py-16 sm:py-20 lg:py-[86px]">
        <div className="site-container">
          <div className="flex w-full max-w-3xl flex-col gap-7">
          {/* Badge row */}
          <div className="animate-fade-up flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-viking-accent bg-viking-accent/70 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              ASME Certified
            </span>
            <span className="inline-flex items-center rounded-full border border-viking-black/50 bg-viking-grey/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
              National Board Registered
            </span>
            <span className="inline-flex items-center rounded-full border border-viking-black/50 bg-viking-grey/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
              R-Stamp Certified
            </span>
          </div>

          {/* Headline + subhead */}
          <div className="flex flex-col gap-4">
            <h1 className="animate-fade-up-delay-1 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[60px] lg:leading-[63px] lg:tracking-[-0.025em]">
              {lines.length === 2 ? (
                <>
                  <span className="block">{lines[0]}</span>
                  <span className="block">{lines[1]}</span>
                </>
              ) : (
                lines[0]
              )}
            </h1>

            <p className="animate-fade-up-delay-2 max-w-3xl text-base leading-relaxed text-white sm:text-lg sm:leading-[29px]">
              {subhead}
            </p>
          </div>

          {/* CTAs */}
          <div className="animate-fade-up-delay-3 flex flex-col items-start gap-3 sm:flex-row">
            <a
              href="tel:4323371900"
              className="inline-flex min-h-[52px] items-center gap-2 rounded-lg bg-viking-accent px-6 py-3.5 text-base font-bold text-white transition-colors duration-200 hover:bg-viking-accent-dark"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call 432-337-1900
            </a>
            <Link
              href="/contact"
              className="inline-flex min-h-[52px] items-center gap-2 rounded-lg border-2 border-white px-6 py-3.5 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/5"
            >
              Request a Quote
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          </div>
        </div>
      </div>

      {/* Stats bar — Figma: 144px side gutters @ 1440px */}
      <div className="hero-stat-bar relative z-10 border-t border-white/10">
        <div className="site-container grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col items-center py-4 sm:items-start lg:py-5 lg:pl-4 ${i < stats.length - 1 ? "border-r border-white/10" : ""}`}
            >
              <span className="hero-stat-value text-xl font-extrabold leading-none sm:text-2xl">{s.value}</span>
              <span className="mt-0.5 text-xs font-medium uppercase tracking-wide text-white/80">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
