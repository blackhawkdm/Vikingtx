import Image from "next/image";

interface ProductSectionProps {
  id: string;
  title: string;
  description?: string;
  capabilities: string[];
  imageSrc?: string;
  imageAlt?: string;
  reverse?: boolean;
}

export default function ProductSection({
  id,
  title,
  description,
  capabilities,
  imageSrc,
  imageAlt,
  reverse = false,
}: ProductSectionProps) {
  return (
    <section id={id} className="py-14 px-4 border-b border-viking-border scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 items-center`}
        >
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden bg-viking-light">
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={imageAlt ?? title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-viking-gray/20">
                  <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-black text-viking-black mb-3 tracking-tight">
              {title}
            </h2>
            {description && (
              <p className="text-viking-gray mb-5 leading-relaxed">{description}</p>
            )}
            <ul className="space-y-2">
              {capabilities.map((item) => (
                <li key={item} className="flex items-start gap-2 text-viking-gray text-sm">
                  <svg
                    className="w-5 h-5 text-viking-teal shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
