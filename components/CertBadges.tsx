/* Shared certifications grid. Homepage uses the defaults; the About page
   passes the "Credentials That Define Our Standards." copy (Figma 139-368). */

const ITEMS = [
  {
    label: "ASME Certified",
    description: "Code-stamped vessels engineered to strict U-stamp standards for high-pressure safety.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    label: "National Board Registered",
    description: "Every vessel is documented and registered to ensure lifelong traceability and compliance.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "R-Stamp Certified",
    description: "Authorized to perform certified repairs and alterations to keep assets in service.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
];

interface CertBadgesProps {
  title?: string;
  subtitle?: string;
  descriptions?: [string, string, string];
}

export default function CertBadges({
  title = "Certifications & Standards",
  subtitle = "Industry-leading compliance backed by 50 years of oilfield expertise.",
  descriptions,
}: CertBadgesProps) {
  return (
    <section className="border-t border-viking-border bg-viking-light py-12 sm:py-16 lg:py-[60px]">
      <div className="site-container flex flex-col items-center gap-6">
        <div className="flex max-w-2xl flex-col items-center gap-2 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-viking-black sm:text-4xl">
            {title}
          </h2>
          <p className="text-base leading-6 text-viking-gray">{subtitle}</p>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
          {ITEMS.map((item, i) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-2 rounded-lg border border-viking-border bg-white px-8 py-6 text-center"
            >
              <div className="text-viking-accent">{item.icon}</div>
              <h3 className="text-base font-bold leading-6 text-viking-black">{item.label}</h3>
              <p className="text-sm leading-5 text-viking-gray">{descriptions?.[i] ?? item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
