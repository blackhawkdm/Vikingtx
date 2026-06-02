import Image from "next/image";
import Link from "next/link";

/* Figma: "Operational Capabilities" (node 319-18421) */

const capabilities = [
  {
    number: "01",
    title: "Equipment Delivery and Set-up",
    description:
      "We operate a dedicated fleet of crane and haul trucks to manage the final stage of your project. Our team provides precise on-site setting for every asset we manufacture, ensuring equipment is placed exactly to spec. Equipment relocation is also available.",
  },
  {
    number: "02",
    title: "Internal Coating and Painting",
    description:
      "Protect your investment with high-performance corrosion protection. We apply specialized internal linings and multiple paint types in our controlled Odessa facility. By handling all coating in-house, we eliminate subcontractor delays and maintain 100% quality control.",
  },
  {
    number: "03",
    title: "R-Stamp Repair",
    description:
      "Maintain site compliance with our certified repair services. Viking is National Board R-Stamp Certified for pressure vessel repair and alterations. From nozzle installations to major code-compliant modifications, we provide the expertise to extend your equipment's service life.",
  },
];

export default function OperationalCapabilities() {
  return (
    <section className="overflow-hidden bg-viking-cream py-12 sm:py-16 lg:py-[60px]">
      <div className="site-container">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-12">
          {/* Left — copy */}
          <div className="flex flex-col gap-8 lg:w-[55%] lg:shrink-0">
            {/* Heading + section link */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
              <div className="flex max-w-[488px] flex-col gap-3">
                <h2 className="text-3xl font-extrabold tracking-tight text-viking-accent sm:text-4xl">
                  Operational Capabilities
                </h2>
                <p className="text-sm leading-5 text-viking-gray">
                  Manufacturing is only the first step. We provide the technical support and engineering
                  experience to move your project from the shop floor to a fully set-up facility.
                </p>
              </div>
              <Link
                href="/services"
                className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-viking-black transition-colors hover:text-viking-accent"
              >
                All Services
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Numbered capabilities */}
            <div className="flex flex-col gap-6">
              {capabilities.map((cap) => (
                <div key={cap.number} className="flex items-stretch gap-5 sm:gap-6">
                  <span className="flex w-12 shrink-0 items-center justify-end text-5xl font-extrabold leading-none text-viking-accent sm:w-16 sm:text-6xl">
                    {cap.number}
                  </span>
                  <span className="w-px shrink-0 self-stretch bg-viking-black/80" aria-hidden="true" />
                  <div className="flex flex-col gap-2 pt-0.5">
                    <h3 className="text-xl font-extrabold tracking-tight text-viking-accent">{cap.title}</h3>
                    <p className="text-sm leading-relaxed text-viking-gray">{cap.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — diagonal facility image (desktop); bleeds to the section's right edge */}
          <div className="relative hidden min-h-[480px] self-stretch lg:block lg:flex-1 lg:[margin-right:calc(var(--spacing-gutter-lg)*-1)] xl:[margin-right:calc(var(--spacing-gutter-xl)*-1)]">
            <div className="clip-diagonal absolute inset-0 overflow-hidden">
              <Image
                src="/images/facility-aerial.webp"
                alt="Aerial view of the Viking manufacturing facility in Odessa, Texas"
                fill
                className="rotate-[9.79deg] scale-[1.3] object-cover object-center"
                sizes="45vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile image strip */}
      <div className="relative mt-10 h-56 w-full lg:hidden">
        <Image
          src="/images/facility-aerial.webp"
          alt="Aerial view of the Viking manufacturing facility in Odessa, Texas"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
