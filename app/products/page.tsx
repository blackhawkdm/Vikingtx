import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Oilfield Pressure Vessels & Storage Tanks",
  description:
    "Viking manufactures ASME code and non-code pressure vessels, heater treaters, separators, vapor recovery towers, API storage tanks, and specialty vessels — including cooling vessels for data center applications.",
};

const products = [
  {
    id: "heater-treaters",
    num: "01",
    title: "Heater Treaters",
    tagline: "Vertical or horizontal. Code or non-code.",
    description:
      "Vertical and horizontal configurations built in-house at our Odessa facility. Code and non-code available. Each unit is designed to your application — available with internal coating, custom valve packages, and a full accessory lineup.",
    caps: ["Code / Non-Code", "Vertical / Horizontal", "Internal Coating", "Custom Design", "Valves & Accessories"],
    imageSrc: "/images/Gaupo5.webp",
    imageAlt: "Viking heater treaters in service",
  },
  {
    id: "separators",
    num: "02",
    title: "Separators",
    tagline: "2-phase and 3-phase. Built to your application.",
    description:
      "Two-phase and three-phase separation in vertical or horizontal configurations. Pneumatic or mechanical level controllers. Fully custom-designed internals with internal coating available.",
    caps: ["2-Phase / 3-Phase", "Vertical / Horizontal", "Pneumatic or Mechanical", "Internal Coating", "Custom Designed"],
    imageSrc: "/images/Gaupo7.webp",
    imageAlt: "Viking separator vessels",
  },
  {
    id: "free-water-knockouts",
    num: "03",
    title: "Free Water Knockouts",
    tagline: "A/B/C style. Code and non-code.",
    description:
      "A/B/C style designs for effective free water removal. Code and non-code builds available. Internal coating and custom nozzle configurations on request. Valves and accessories included.",
    caps: ["A/B/C Style", "Code / Non-Code", "Internal Coating", "Custom Nozzle Config", "Valves & Accessories"],
    imageSrc: "/images/Gaupo2.webp",
    imageAlt: "Viking vessels on location",
  },
  {
    id: "vapor-recovery-towers",
    num: "04",
    title: "Vapor Recovery Towers",
    tagline: "External piping installed. In-house.",
    description:
      "Engineered for vapor recovery with external piping installed at our facility — no field assembly required. Internal coating available. Reduces emissions and captures value from produced vapors.",
    caps: ["External Piping Installed", "Internal Coating", "Code / Non-Code", "Custom Design"],
    imageSrc: "/images/Gaupo4.webp",
    imageAlt: "Viking tank battery with vapor recovery",
  },
  {
    id: "specialty-vessels",
    num: "05",
    title: "Specialty Pressure Vessels",
    tagline: "Knock drums, scrubbers, cooling vessels.",
    description:
      "Knock drums, gas scrubbers, AI data center cooling vessels, and custom-purpose pressure vessels for unique applications. Contact us with your specific requirement — our team assists with engineering and sizing.",
    caps: ["Knock Drums", "Gas Scrubbers", "Data Center Cooling", "Custom-Purpose", "Engineer-Assisted Sizing"],
    imageSrc: "/images/Drago1.webp",
    imageAlt: "Viking large specialty vessels",
  },
  {
    id: "storage-tanks",
    num: "06",
    title: "API Storage Tanks",
    tagline: "Built to API standards. Full customization.",
    description:
      "Built to API standards with full customization. Standard and non-standard configurations available. Options include walkways, stairways, one or two-piece cleanout doors, downcomers, roll lines, and internal coating.",
    caps: ["Coupling / Flange / Grooved", "8oz or 16oz on 15'6\" Dia.", "One or Two-Piece Cleanout Doors", "Walkways & Stairways", "Internal Coating"],
    imageSrc: "/images/Gaupo3.webp",
    imageAlt: "Viking API storage tank battery aerial view",
  },
  {
    id: "data-center-cooling",
    num: "07",
    title: "AI Data Center Cooling",
    tagline: "Purpose-built for high-density compute cooling.",
    description:
      "ASME code pressure vessels engineered specifically for high-density compute cooling infrastructure. Custom sizing, high-pressure rated, fast turnaround. Built and delivered from our Odessa facility.",
    caps: ["ASME Code Certified", "Custom Sizing", "High-Pressure Rated", "Internal Coating", "Fast Turnaround"],
    imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "AI data center server infrastructure",
  },
];

export default function ProductsV1Page() {
  return (
    <>
      <PageHero
        headline="Products"
        subhead="Custom-built vessels and tanks. Every unit built to your spec — code or non-code, standard or fully custom."
        imageSrc="/images/Gaupo3.webp"
        imageAlt="Viking Inc. API storage tank battery — aerial view"
      />

      {/* Sticky anchor nav */}
      <nav className="bg-white border-b border-viking-border sticky top-16 z-40 overflow-x-auto shadow-sm" aria-label="Products navigation">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-0 py-0 min-w-max">
          {products.map(({ id, num, title }) => (
            <a
              key={id}
              href={`#${id}`}
              className="flex items-center gap-2 text-xs font-bold text-viking-gray hover:text-viking-accent hover:bg-viking-light px-4 py-3.5 border-b-2 border-transparent hover:border-viking-accent transition-all whitespace-nowrap uppercase tracking-wide"
            >
              <span className="text-viking-steel/70">{num}</span>
              {title}
            </a>
          ))}
        </div>
      </nav>

      {/* Product sections — services-style alternating cards */}
      <div className="py-12 px-4 bg-viking-light space-y-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {products.map((p, i) => (
            <section
              key={p.id}
              id={p.id}
              className="scroll-mt-32 rounded-xl overflow-hidden shadow-sm border border-viking-border bg-white"
            >
              <div className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>

                {/* Image panel */}
                <div className="relative w-full lg:w-1/2 min-h-[300px] lg:min-h-[420px] overflow-hidden">
                  <Image
                    src={p.imageSrc}
                    alt={p.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-viking-black/25" />
                  <div className="absolute top-0 left-0 right-0 h-1 bg-viking-accent" />
                  <div className="absolute bottom-6 right-6 text-[100px] font-black text-white/10 leading-none select-none pointer-events-none">
                    {p.num}
                  </div>
                  <div className="absolute top-6 left-6">
                    <span className="inline-block bg-black/50 backdrop-blur-sm text-white/80 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                      {p.tagline}
                    </span>
                  </div>
                </div>

                {/* Content panel */}
                <div className="w-full lg:w-1/2 px-8 sm:px-12 py-12 lg:py-14 flex flex-col justify-center">
                  <p className="text-viking-steel text-xs font-black uppercase tracking-widest mb-3">
                    {p.num}
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-black text-viking-black tracking-tight mb-4">
                    {p.title}
                  </h2>
                  <p className="text-viking-gray leading-relaxed mb-6 text-sm sm:text-base">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {p.caps.map((cap) => (
                      <span
                        key={cap}
                        className="inline-flex items-center gap-1.5 bg-viking-steel-light border border-viking-steel/20 text-viking-gray text-xs font-semibold px-3 py-1.5 rounded-full"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-viking-accent flex-shrink-0" />
                        {cap}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-viking-accent font-bold text-sm hover:text-viking-accent-dark transition-colors group w-fit"
                  >
                    Request a Quote
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

              </div>
            </section>
          ))}
        </div>
      </div>

      <CTABanner
        heading="We can assist you in sizing your equipment needs."
        subtext="Contact our team and we'll help you spec the right vessel for your application."
      />

      <section className="py-10 px-4 bg-viking-light border-t border-viking-border">
        <div className="max-w-4xl mx-auto">
          <p className="text-viking-gray text-xs leading-relaxed">
            The information and illustrations depicted on this site represent the basic operations
            of the equipment produced by Viking Inc. for the oil and gas industry. We accept no
            liability for any incorrect application or sizing of equipment derived from the
            information provided on the site. The sizing information provided on our brochures is
            based on the most common produced oil and water chemistry. Since oil and water
            chemistry varies from well to well, we suggest you contact our knowledgeable sales
            staff or other qualified personnel for proper vessel selection and sizing. We highly
            recommend you also use qualified personnel for the proper placement, hookup and
            operation of all equipment purchased from Viking Inc.
          </p>
        </div>
      </section>
    </>
  );
}
