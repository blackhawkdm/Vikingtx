import Image from "next/image";
import { ReactNode } from "react";

interface ServiceBlockProps {
  id: string;
  title: string;
  description: string;
  bullets?: string[];
  imageSrc?: string;
  imageAlt?: string;
  icon?: ReactNode;
  reverse?: boolean;
}

export default function ServiceBlock({
  id,
  title,
  description,
  bullets,
  imageSrc,
  imageAlt,
  icon,
  reverse = false,
}: ServiceBlockProps) {
  return (
    <section id={id} className="py-14 px-4 border-b border-viking-border scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 items-center`}
        >
          {/* Image / Icon placeholder */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden bg-viking-light flex items-center justify-center">
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={imageAlt ?? title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="text-viking-gray/20">
                  {icon ?? (
                    <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-black text-viking-black mb-3 tracking-tight">
              {title}
            </h2>
            <p className="text-viking-gray leading-relaxed mb-5">{description}</p>
            {bullets && bullets.length > 0 && (
              <ul className="space-y-2">
                {bullets.map((item) => (
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
