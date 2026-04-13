import Image from "next/image";

interface PageHeroProps {
  eyebrow?: string;
  headline: string;
  subhead: string;
  imageSrc: string;
  imageAlt: string;
}

export default function PageHero({
  eyebrow = "Viking Inc.",
  headline,
  subhead,
  imageSrc,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="relative bg-viking-black overflow-hidden min-h-[380px] flex">
      <div className="relative z-10 flex flex-col lg:flex-row w-full">

        {/* Left — text */}
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-14 lg:py-16 w-full lg:w-[55%]">
          <p className="animate-fade-up text-viking-accent text-xs font-bold uppercase tracking-widest mb-3">
            {eyebrow}
          </p>
          <h1 className="animate-fade-up-delay-1 text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-3">
            {headline}
          </h1>
          <p className="animate-fade-up-delay-2 text-white/60 text-base sm:text-lg leading-relaxed max-w-lg">
            {subhead}
          </p>
        </div>

        {/* Right — image with diagonal clip */}
        <div className="hidden lg:block relative w-[45%] min-h-[380px]">
          <div className="clip-diagonal absolute inset-0">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              className="object-cover"
              sizes="45vw"
            />
            <div className="absolute inset-0 bg-viking-black/25" />
          </div>
        </div>

        {/* Mobile image strip */}
        <div className="lg:hidden relative h-48 w-full" aria-hidden="true">
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-viking-black/80 to-transparent" />
        </div>
      </div>
    </section>
  );
}
