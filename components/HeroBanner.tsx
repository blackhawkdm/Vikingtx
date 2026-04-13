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

export default function HeroBanner({
  headline,
  subhead,
  imageSrc,
  imageAlt = "Viking Inc. tank battery installation",
}: HeroBannerProps) {
  return (
    <section className="relative bg-viking-black overflow-hidden min-h-[520px] flex flex-col">
      <div className="relative z-10 flex flex-col lg:flex-row flex-1">

        {/* ── Left content panel ── */}
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-16 lg:py-20 w-full lg:w-[58%]">

          {/* Badge row */}
          <div className="animate-fade-up flex flex-wrap items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-viking-accent/15 border border-viking-accent/30 text-viking-accent text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              ASME Certified
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/15 text-white/60 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              National Board Registered
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/15 text-white/60 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              R-Stamp Qualified
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up-delay-1 text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-4">
            {headline}
          </h1>

          {/* Subhead */}
          <p className="animate-fade-up-delay-2 text-base sm:text-lg text-white/65 mb-8 max-w-lg leading-relaxed">
            {subhead}
          </p>

          {/* CTAs */}
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-start gap-3">
            <a
              href="tel:4323371900"
              className="inline-flex items-center gap-2 bg-viking-accent hover:bg-viking-accent-dark text-white font-bold px-6 py-3.5 rounded-lg text-base transition-all duration-200 hover:scale-[1.02] min-h-[44px] shadow-lg shadow-viking-accent/20"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call 432-337-1900
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/30 text-white hover:border-white/60 hover:bg-white/5 font-semibold px-6 py-3.5 rounded-lg text-base transition-all duration-200 min-h-[44px]"
            >
              Request a Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* ── Right image panel ── */}
        {imageSrc && (
          <div className="hidden lg:block relative w-[42%] min-h-[520px]">
            {/* Diagonal cut on left edge */}
            <div className="clip-diagonal absolute inset-0">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                className="object-cover"
                sizes="42vw"
              />
              <div className="absolute inset-0 bg-viking-black/30" aria-hidden="true" />
            </div>
          </div>
        )}

        {/* Mobile: full-bleed image behind content */}
        {imageSrc && (
          <div className="lg:hidden absolute inset-0" aria-hidden="true">
            <Image
              src={imageSrc}
              alt=""
              fill
              priority
              className="object-cover opacity-15"
              sizes="100vw"
            />
          </div>
        )}
      </div>

      {/* ── Stats bar ── */}
      <div className="relative z-10 border-t border-white/10 bg-white/[0.04] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`py-4 px-4 flex flex-col items-center sm:items-start ${i < stats.length - 1 ? "border-r border-white/10" : ""}`}
              >
                <span className="text-xl sm:text-2xl font-black text-viking-accent leading-none">{s.value}</span>
                <span className="text-white/50 text-xs font-medium mt-0.5 uppercase tracking-wide">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
