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
    description:
      "Vertical and horizontal configurations. Code and non-code. Designed and built in-house at our Odessa facility.",
    caps: ["Code or non-code", "Vertical or horizontal", "Internal coating", "Custom design", "Valves & accessories"],
    imageSrc: "/images/Gaupo5.webp",
    imageAlt: "Viking heater treaters in service",
  },
  {
    id: "separators",
    num: "02",
    title: "Separators",
    description:
      "Two-phase and three-phase separation. Pneumatic or mechanical level controllers. Built to your application.",
    caps: ["Code or non-code", "Vertical or horizontal", "2-phase or 3-phase", "Pneumatic or mechanical controllers", "Internal coating", "Custom designed", "Valves & accessories"],
    imageSrc: "/images/Gaupo7.webp",
    imageAlt: "Viking separator vessels in service",
  },
  {
    id: "free-water-knockouts",
    num: "03",
    title: "Free Water Knockouts",
    description: "A/B/C style designs. Code and non-code. Internal coating available.",
    caps: ["Code or non-code", "A/B/C style design", "Internal coating", "Custom designed", "Valves & accessories"],
    imageSrc: "/images/Gaupo2.webp",
    imageAlt: "Viking vessels on location",
  },
  {
    id: "vapor-recovery-towers",
    num: "04",
    title: "Vapor Recovery Towers",
    description:
      "Engineered for vapor recovery with external piping installed and internal coating available.",
    caps: ["Code or non-code", "External piping installed", "Internal coating", "Custom design"],
    imageSrc: "/images/Gaupo4.webp",
    imageAlt: "Viking tank battery with vapor recovery",
  },
  {
    id: "specialty-vessels",
    num: "05",
    title: "Specialty Pressure Vessels",
    description:
      "Knock drums, gas scrubbers, data center cooling vessels, and custom-purpose pressure vessels. Contact us with your specific need — our team will help you design the right vessel.",
    caps: ["Knock drums", "Gas scrubbers", "Data center cooling vessels", "Custom-purpose vessels", "Engineer-assisted sizing"],
    imageSrc: "/images/Drago1.webp",
    imageAlt: "Viking large specialty vessels delivered on site",
  },
  {
    id: "storage-tanks",
    num: "06",
    title: "API Storage Tanks",
    description:
      "Built to API standards with full customization. Standard and non-standard configurations available.",
    caps: [
      "Coupling, flange & grooved connections",
      "8oz or 16oz on 15'6\" diameter",
      "One or two-piece cleanout doors",
      "Downcomers & roll lines",
      "Internal coating",
      "Walkway & stairways",
    ],
    imageSrc: "/images/Gaupo3.webp",
    imageAlt: "Viking API storage tank battery aerial view",
  },
];

export default function ProductsPage() {
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
              <span className="text-viking-accent/40">{num}</span>
              {title}
            </a>
          ))}
        </div>
      </nav>

      {/* Product sections */}
      {products.map((p, i) => (
        <section
          key={p.id}
          id={p.id}
          className={`scroll-mt-28 ${i % 2 === 0 ? "bg-white" : "bg-viking-light"} border-b border-viking-border`}
        >
          <div className="max-w-7xl mx-auto">
            <div className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>

              {/* Image panel */}
              <div className="relative w-full lg:w-[45%] min-h-[300px] lg:min-h-[400px] overflow-hidden">
                <Image
                  src={p.imageSrc}
                  alt={p.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                {/* Number overlay */}
                <div className="absolute bottom-4 left-4 text-[80px] font-black text-white/10 leading-none select-none pointer-events-none">
                  {p.num}
                </div>
              </div>

              {/* Content panel */}
              <div className="w-full lg:w-[55%] px-6 sm:px-10 py-10 lg:py-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-viking-accent/40 text-sm font-black tracking-widest">{p.num}</span>
                  <div className="h-px flex-1 bg-viking-border max-w-[40px]" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-viking-black tracking-tight mb-3">
                  {p.title}
                </h2>
                <p className="text-viking-gray leading-relaxed mb-6 text-sm sm:text-base">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.caps.map((cap) => (
                    <span
                      key={cap}
                      className="inline-flex items-center gap-1.5 bg-viking-black/5 border border-viking-border text-viking-gray text-xs font-semibold px-3 py-1.5 rounded-full"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-viking-teal flex-shrink-0" />
                      {cap}
                    </span>
                  ))}
                </div>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-viking-accent font-bold text-sm hover:text-viking-accent-dark transition-colors group"
                  >
                    Request a quote for {p.title}
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

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
