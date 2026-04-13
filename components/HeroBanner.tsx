import Link from "next/link";
import Image from "next/image";

interface HeroBannerProps {
  headline: string;
  subhead: string;
  imageSrc?: string;
  imageAlt?: string;
  overlayOpacity?: string;
}

export default function HeroBanner({
  headline,
  subhead,
  imageSrc,
  imageAlt = "Viking Inc. manufacturing facility",
  overlayOpacity = "opacity-60",
}: HeroBannerProps) {
  return (
    <section className="relative min-h-[580px] sm:min-h-[640px] flex items-center justify-center overflow-hidden bg-viking-black">
      {/* Background image */}
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      )}

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-viking-black ${overlayOpacity}`}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-4">
          {headline}
        </h1>
        <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          {subhead}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:4323371900"
            className="inline-flex items-center gap-2 bg-viking-accent hover:bg-viking-accent-dark text-white font-bold px-8 py-4 rounded text-lg transition-colors min-h-[44px]"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call 432-337-1900
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-4 rounded text-base transition-colors min-h-[44px]"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
