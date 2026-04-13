import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  description: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function ProductCard({
  title,
  description,
  href,
  imageSrc,
  imageAlt,
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-lg overflow-hidden border border-viking-border hover:shadow-lg transition-shadow"
    >
      <div className="relative h-52 bg-viking-light overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt ?? title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-viking-gray/20">
            <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-bold text-viking-black text-lg mb-1 group-hover:text-viking-accent transition-colors">
          {title}
        </h3>
        <p className="text-viking-gray text-sm leading-relaxed">{description}</p>
        <span className="mt-3 inline-flex items-center gap-1 text-viking-accent text-sm font-semibold">
          View Products
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
