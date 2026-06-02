import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  description: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
  /** Figma production lineup cards (node 319-18357) */
  variant?: "default" | "lineup";
}

export default function ProductCard({
  title,
  description,
  href,
  imageSrc,
  imageAlt,
  variant = "default",
}: ProductCardProps) {
  const isLineup = variant === "lineup";

  return (
    <Link
      href={href}
      className={
        isLineup
          ? "group flex h-full flex-col overflow-hidden rounded-xl border border-viking-border bg-white transition-shadow hover:shadow-md"
          : "card-hover group block overflow-hidden rounded-xl border border-viking-border bg-white"
      }
    >
      <div className="relative h-52 shrink-0 overflow-hidden bg-viking-light">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt ?? title}
            fill
            className={`object-cover ${isLineup ? "" : "transition-transform duration-500 group-hover:scale-105"}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-viking-gray/20">
            <svg className="h-20 w-20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
          </div>
        )}
        {!isLineup && (
          <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-viking-accent transition-all duration-300 group-hover:w-full" />
        )}
      </div>
      <div className={isLineup ? "flex flex-1 flex-col gap-4 px-5 pb-6 pt-4" : "p-5"}>
        <div className={isLineup ? "flex flex-col gap-1" : ""}>
          <h3
            className={
              isLineup
                ? "text-lg font-bold leading-7 text-viking-black"
                : "mb-1 text-lg font-bold text-viking-black transition-colors duration-200 group-hover:text-viking-accent"
            }
          >
            {title}
          </h3>
          <p className={`text-sm leading-relaxed text-viking-gray ${isLineup ? "leading-[1.625]" : ""}`}>
            {description}
          </p>
        </div>
        <span
          className={`inline-flex items-center gap-2 text-viking-accent font-semibold ${
            isLineup ? "mt-auto text-sm" : "mt-3 gap-1 text-sm group-hover:gap-2 transition-all duration-200"
          }`}
        >
          View Products
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
