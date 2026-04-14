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

// Heights staggered so 3 columns balance: ~1480px each
// Col 1: 01(500) + 04(360) + 07(400) = 1260 + gaps
// Col 2: 02(360) + 05(500) = 860 + gap
// Col 3: 03(420) + 06(500) = 920 + gap
// CSS columns equalizes automatically — varied heights create the visual interest
const products = [
  {
    id: "heater-treaters",
    num: "01",
    title: "Heater Treaters",
    tagline: "Vertical or horizontal. Code or non-code.",
    description:
      "Vertical and horizontal configurations. Code and non-code. Built in-house at our Odessa facility with internal coating and custom valve packages available.",
    caps: ["Code / Non-Code", "Vertical / Horizontal", "Internal Coating", "Valves & Accessories"],
    imageSrc: "/images/Gaupo5.webp",
    imageAlt: "Viking heater treaters in service",
    height: "h-[500px]",
  },
  {
    id: "separators",
    num: "02",
    title: "Separators",
    tagline: "2-phase and 3-phase. Built to your application.",
    description:
      "Two-phase and three-phase separation. Vertical or horizontal. Pneumatic or mechanical level controllers with fully custom internals.",
    caps: ["2-Phase / 3-Phase", "Pneumatic or Mechanical", "Internal Coating", "Custom Designed"],
    imageSrc: "/images/Gaupo7.webp",
    imageAlt: "Viking separator vessels",
    height: "h-[360px]",
  },
  {
    id: "free-water-knockouts",
    num: "03",
    title: "Free Water Knockouts",
    tagline: "A/B/C style. Code and non-code.",
    description:
      "A/B/C style designs for effective free water removal. Code and non-code. Internal coating and custom nozzle configurations available.",
    caps: ["A/B/C Style", "Code / Non-Code", "Internal Coating", "Valves & Accessories"],
    imageSrc: "/images/Gaupo2.webp",
    imageAlt: "Viking vessels on location",
    height: "h-[420px]",
  },
  {
    id: "vapor-recovery-towers",
    num: "04",
    title: "Vapor Recovery Towers",
    tagline: "External piping installed. In-house.",
    description:
      "Engineered for vapor recovery with external piping installed at our facility. Reduces emissions and captures value from produced vapors. Internal coating available.",
    caps: ["External Piping Installed", "Internal Coating", "Code / Non-Code", "Custom Design"],
    imageSrc: "/images/Gaupo4.webp",
    imageAlt: "Viking tank battery with vapor recovery",
    height: "h-[360px]",
  },
  {
    id: "specialty-vessels",
    num: "05",
    title: "Specialty Pressure Vessels",
    tagline: "Knock drums, scrubbers, cooling vessels.",
    description:
      "Knock drums, gas scrubbers, AI data center cooling vessels, and custom-purpose pressure vessels. Our team assists with engineering and sizing for unique applications.",
    caps: ["Knock Drums", "Gas Scrubbers", "Data Center Cooling", "Custom-Purpose"],
    imageSrc: "/images/Drago1.webp",
    imageAlt: "Viking large specialty vessels",
    height: "h-[500px]",
  },
  {
    id: "storage-tanks",
    num: "06",
    title: "API Storage Tanks",
    tagline: "Built to API standards. Full customization.",
    description:
      "Built to API standards with full customization. Options include walkways, stairways, cleanout doors, downcomers, roll lines, and internal coating.",
    caps: ["Coupling / Flange / Grooved", "8oz or 16oz on 15'6\" Dia.", "Cleanout Doors", "Internal Coating"],
    imageSrc: "/images/Gaupo3.webp",
    imageAlt: "Viking API storage tank battery aerial view",
    height: "h-[500px]",
  },
  {
    id: "data-center-cooling",
    num: "07",
    title: "AI Data Center Cooling",
    tagline: "Purpose-built for high-density compute cooling.",
    description:
      "ASME code vessels engineered for high-density compute cooling infrastructure. Custom sizing, high-pressure rated, fast turnaround from our Odessa facility.",
    caps: ["ASME Code Certified", "Custom Sizing", "High-Pressure Rated", "Internal Coating"],
    imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "AI data center server infrastructure",
    height: "h-[400px]",
  },
];

function MasonryCard({ p, height }: { p: typeof products[0]; height: string }) {
  return (
    <div
      id={p.id}
      className={`scroll-mt-20 group relative overflow-hidden rounded-xl ${height}`}
    >
      <Image
        src={p.imageSrc}
        alt={p.imageAlt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 1024px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-viking-black/90 via-viking-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-viking-black/95 via-viking-black/55 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-viking-accent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
      <div className="absolute top-4 left-4 text-xs font-black text-white/25 tracking-widest uppercase">{p.num}</div>
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h2 className="text-xl font-black text-white tracking-tight mb-1">{p.title}</h2>
        <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-3">{p.tagline}</p>
        <div className="flex flex-wrap gap-1.5">
          {p.caps.map((cap) => (
            <span key={cap} className="inline-block bg-white/10 border border-white/15 text-white/80 text-xs font-semibold px-2.5 py-1 rounded-full">
              {cap}
            </span>
          ))}
        </div>
        <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500 ease-in-out">
          <p className="text-white/70 text-sm leading-relaxed pt-3 pb-1">{p.description}</p>
          <Link href="/contact" className="inline-flex items-center gap-1.5 text-viking-accent text-xs font-bold uppercase tracking-widest mt-1.5">
            Request a Quote
            <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ProductsV2Page() {
  return (
    <>
      <PageHero
        headline="Products"
        subhead="Custom-built vessels and tanks. Every unit built to your spec — code or non-code, standard or fully custom."
        imageSrc="/images/Gaupo3.webp"
        imageAlt="Viking Inc. API storage tank battery — aerial view"
      />

      {/* Masonry — 3 explicit columns, cards manually assigned so columns balance */}
      <section className="py-10 px-4 bg-viking-light">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-start">

            {/* Col 1: 01 (500) + 04 (490) = ~1006 */}
            <div className="flex flex-col gap-4 w-full lg:w-1/3">
              {[products[0], products[3]].map((p) => (
                <MasonryCard key={p.id} p={p} height={p.id === "heater-treaters" ? "h-[500px]" : "h-[490px]"} />
              ))}
            </div>

            {/* Col 2: 02 (320) + 05 (340) + 07 (320) = ~980 + 2 gaps */}
            <div className="flex flex-col gap-4 w-full lg:w-1/3">
              {[products[1], products[4], products[6]].map((p) => (
                <MasonryCard key={p.id} p={p} height={p.id === "specialty-vessels" ? "h-[340px]" : "h-[320px]"} />
              ))}
            </div>

            {/* Col 3: 03 (490) + 06 (500) = ~1006 */}
            <div className="flex flex-col gap-4 w-full lg:w-1/3">
              {[products[2], products[5]].map((p) => (
                <MasonryCard key={p.id} p={p} height={p.id === "storage-tanks" ? "h-[500px]" : "h-[490px]"} />
              ))}
            </div>

          </div>
        </div>
      </section>

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
