import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import PageHeroFull from "@/components/PageHeroFull";

export const metadata: Metadata = {
  alternates: { canonical: "/products" },
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
      "Manufactured in-house at our Odessa facility to specific crude oil treating requirements. Available in vertical or horizontal configurations with custom valve packages and specialized internal coatings.",
    caps: ["Code / Non-Code", "Vertical / Horizontal", "Internal Coating", "Custom Design", "Valves & Accessories"],
    imageSrc: "/images/treater-1.webp",
    imageAlt: "Viking heater treater vessel built at the Odessa facility",
  },
  {
    id: "separators",
    num: "02",
    title: "Separators",
    tagline: "2-phase and 3-phase. Built to your application.",
    description:
      "High and low-pressure separation units designed for reliable liquid and gas measurement. Fully custom-designed internals with pneumatic or mechanical level controllers.",
    caps: ["2-Phase / 3-Phase", "Vertical / Horizontal", "Pneumatic or Mechanical", "Internal Coating", "Custom Designed"],
    imageSrc: "/images/separator.webp",
    imageAlt: "Viking horizontal separator vessels",
  },
  {
    id: "free-water-knockouts",
    num: "03",
    title: "Free Water Knockouts",
    tagline: "A/B/C style. Code and non-code.",
    description:
      "Engineered for high-volume water removal to reduce the heat load on downstream treating equipment. Available in A, B, or C style designs with custom nozzle configurations.",
    caps: ["A/B/C Style", "Code / Non-Code", "Internal Coating", "Custom Nozzle Config", "Valves & Accessories"],
    imageSrc: "/images/free-water-knockouts.webp",
    imageAlt: "Viking free water knockout vessel",
  },
  {
    id: "vapor-recovery-towers",
    num: "04",
    title: "Vapor Recovery Towers",
    tagline: "External piping installed. In-house.",
    description:
      "Engineered to capture high-value vapors and maintain zero-emission compliance. Every unit is delivered with external piping pre-installed and pressure-tested at our facility, significantly reducing on-site crane time and assembly costs.",
    caps: ["External Piping Installed", "Internal Coating", "Code / Non-Code", "Custom Design"],
    imageSrc: "/images/vapor-recovery-towers.webp",
    imageAlt: "Viking vapor recovery tower with external piping",
  },
  {
    id: "specialty-vessels",
    num: "05",
    title: "Specialty Pressure Vessels",
    tagline: "Knock drums, scrubbers, cooling vessels.",
    description:
      "Purpose-built vessels for unique applications, including gas scrubbers and knock drums. Our staff provides engineering and sizing support to meet specific project specifications.",
    caps: ["Knock Drums", "Gas Scrubbers", "Data Center Cooling", "Custom-Purpose", "Engineer-Assisted Sizing"],
    imageSrc: "/images/specialty-pressure-vessels.webp",
    imageAlt: "Viking specialty pressure vessels fabrication at the Odessa shop",
  },
  {
    id: "storage-tanks",
    num: "06",
    title: "API Storage Tanks",
    tagline: "Built to API standards. Full customization.",
    description:
      "A full line of oilfield storage tanks and gun barrels manufactured to API 12F specifications. Features include one or two-piece clean out doors, downcomers, and internal coating.",
    caps: ["Coupling / Flange / Grooved", "8oz or 16oz on 15'6\" Dia.", "One or Two-Piece Cleanout Doors", "Walkways & Stairways", "Internal Coating"],
    imageSrc: "/images/api-storage-tanks.webp",
    imageAlt: "Viking API 12F storage tanks at the Odessa yard",
  },
  {
    id: "data-center-cooling",
    num: "07",
    title: "AI Data Center Cooling",
    tagline: "Purpose-built for high-density compute cooling.",
    description:
      "ASME code pressure vessels engineered specifically for high-density compute cooling infrastructure. Custom-sized, high-pressure rated, and delivered with the technical integrity required for critical data center environments.",
    caps: ["ASME Code Certified", "Custom Sizing", "High-Pressure Rated", "Internal Coating", "Fast Turnaround"],
    imageSrc: "/images/data-center-cooling.webp",
    imageAlt: "Data center cooling infrastructure with pressure vessels",
  },
];

export default function ProductsV1Page() {
  return (
    <>
      <PageHeroFull
        headline="Engineered for Performance"
        subhead="Our comprehensive catalog of custom-built vessels and tanks — code or non-code, standard or fully custom."
        imageSrc="/images/tank-battery-aerial.webp"
        imageAlt="Viking Inc. API storage tank battery — aerial view"
      />

      {/* Sticky anchor nav */}
      <nav className="bg-viking-accent border-b border-viking-border sticky top-16 z-40 overflow-x-auto shadow" aria-label="Products navigation">
        <div className="site-container flex min-w-max items-center gap-2 py-0">
          {products.map(({ id, title }) => (
            <a
              key={id}
              href={`#${id}`}
              className="flex items-center whitespace-nowrap border-b-2 border-transparent px-4 py-[15px] text-xs font-bold uppercase tracking-wide text-white transition-colors hover:border-white hover:bg-black/10"
            >
              {title}
            </a>
          ))}
        </div>
      </nav>

      {/* Product sections — alternating image/text cards (Figma 97:433 / 97:463) */}
      <div className="bg-viking-light py-12">
        <div className="site-container space-y-6">
          {products.map((p, i) => (
            <section
              key={p.id}
              id={p.id}
              className="scroll-mt-32 overflow-hidden rounded-xl border border-viking-border bg-white shadow"
            >
              <div className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>

                {/* Image panel */}
                <div className="relative min-h-[300px] w-full overflow-hidden lg:min-h-[440px] lg:w-1/2">
                  <Image
                    src={p.imageSrc}
                    alt={p.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-viking-black/25" />
                  <div className="absolute inset-x-0 top-0 h-1 bg-viking-accent" />
                  <div className="absolute inset-x-4 top-4 flex justify-center sm:inset-x-auto sm:left-6 sm:top-6 sm:block">
                    <span className="inline-block max-w-full rounded-full bg-black/50 px-3 py-1.5 text-center text-xs font-bold uppercase tracking-widest text-white/80 backdrop-blur-sm sm:text-left">
                      {p.tagline}
                    </span>
                  </div>
                </div>

                {/* Content panel */}
                <div className="flex w-full flex-col justify-center gap-6 px-8 py-10 lg:w-1/2 lg:px-12 lg:py-12">
                  <h2 className="text-2xl font-extrabold tracking-tight text-viking-black lg:text-3xl">
                    {p.title}
                  </h2>
                  <p className="text-base leading-relaxed text-viking-gray">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.caps.map((cap) => (
                      <span
                        key={cap}
                        className="inline-flex items-center gap-1.5 rounded-full border border-viking-accent/25 bg-viking-cream px-3 py-1.5 text-xs font-semibold text-viking-gray"
                      >
                        <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-viking-accent" />
                        {cap}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="group inline-flex w-fit items-center gap-2 text-sm font-bold text-viking-accent transition-colors hover:text-viking-accent-dark"
                  >
                    Request a Quote
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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

      <section className="border-t border-viking-border bg-viking-light py-10">
        <div className="site-container max-w-4xl">
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
