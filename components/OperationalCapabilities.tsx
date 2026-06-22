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
    <section className="relative overflow-hidden bg-viking-cream py-12 sm:py-16 lg:py-[60px]">
      {/* Right — diagonal facility image, full-bleed to the viewport's right edge (desktop) */}
      <div className="absolute inset-y-0 right-0 hidden w-[46%] lg:block">
        <div className="clip-diagonal absolute inset-0 overflow-hidden">
          <Image
            src="/images/facility-aerial.webp"
            alt="Aerial view of the Viking manufacturing facility and product yard in Odessa, Texas"
            fill
            className="rotate-[9.79deg] scale-[1.2] object-cover object-[58%_42%]"
            sizes="50vw"
          />
        </div>
      </div>

      {/* Mobile — facility photo (rounded card, above content) */}
      <div className="site-container mb-8 lg:hidden">
        <div className="relative h-72 w-full overflow-hidden rounded-xl shadow-md">
          <Image
            src="/images/facility-aerial.webp"
            alt="Aerial view of the Viking manufacturing facility and product yard in Odessa, Texas"
            fill
            className="object-cover object-[center_40%]"
            sizes="100vw"
          />
        </div>
      </div>

      <div className="site-container relative">
        <div className="flex flex-col gap-10">
          {/* Left — copy */}
          <div className="flex flex-col gap-8 lg:w-[55%] lg:shrink-0 lg:pr-12">
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
        </div>
      </div>
    </section>
  );
}
