import Image from "next/image";

interface PageHeroFullProps {
  eyebrow?: string;
  headline: string;
  subhead: string;
  imageSrc: string;
  imageAlt: string;
}

/* Full-bleed page hero (Figma 323:20418) — image background, overlay, pill badge */
export default function PageHeroFull({
  eyebrow = "Viking Inc.",
  headline,
  subhead,
  imageSrc,
  imageAlt,
}: PageHeroFullProps) {
  return (
    <section
      className="relative flex min-h-[480px] items-center overflow-hidden bg-viking-black"
      aria-label={imageAlt}
    >
      {/* Background image + overlays */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image src={imageSrc} alt="" fill priority className="object-cover" sizes="100vw" />
        <div className="hero-media-overlay absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 to-transparent" />
      </div>

      {/* Content */}
      <div className="site-container relative z-10">
        <div className="flex max-w-lg flex-col items-start gap-3.5 py-20">
          <span className="animate-fade-up inline-flex items-center rounded-full border border-viking-accent bg-viking-accent/70 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            {eyebrow}
          </span>
          <h1 className="animate-fade-up-delay-1 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-[60px] lg:leading-[63px] lg:tracking-[-0.02em]">
            {headline}
          </h1>
          <p className="animate-fade-up-delay-2 max-w-md text-base font-medium leading-relaxed text-white sm:text-lg sm:leading-[29px]">
            {subhead}
          </p>
        </div>
      </div>
    </section>
  );
}
