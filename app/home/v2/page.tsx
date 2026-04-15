import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import CTABanner from "@/components/CTABanner";
import CertBadges from "@/components/CertBadges";

export const metadata: Metadata = {
  title: "Viking – Custom Oilfield Tanks, Parts & Trucking",
  description:
    "Viking manufactures custom steel tanks, supplies oilfield parts, and provides field trucking across Texas. Built for the oilfield. Ready for what's next. Request a quote today.",
};

const productCategories = [
  {
    title: "Pressure Vessels",
    description:
      "Heater treaters, separators, free water knockouts, and vapor recovery towers. Code and non-code. Custom designed.",
    href: "/products#heater-treaters",
    imageSrc: "/images/Gaupo5.webp",
    imageAlt: "Viking Inc. pressure vessels in service — aerial view",
  },
  {
    title: "Storage Tanks",
    description:
      "API storage tanks built to your spec — couplings, flanges, internal coating, walkways, and custom configurations.",
    href: "/products#storage-tanks",
    imageSrc: "/images/Gaupo3.webp",
    imageAlt: "Viking Inc. API storage tank battery — aerial view",
  },
  {
    title: "Specialty Vessels",
    description:
      "Knock drums, gas scrubbers, and custom-purpose pressure vessels for unique applications.",
    href: "/products#specialty-vessels",
    imageSrc: "/images/Drago1.webp",
    imageAlt: "Viking Inc. large specialty vessels being delivered on site",
  },
  {
    title: "AI Data Center Cooling",
    description:
      "ASME code pressure vessels engineered for high-density compute cooling infrastructure. Custom sizing, fast turnaround.",
    href: "/products#data-center-cooling",
    imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    imageAlt: "AI data center server infrastructure",
  },
];

const services = [
  {
    num: "01",
    title: "Delivery & Equipment Setting",
    description: "Fleet of crane and haul trucks. We deliver and set your equipment on location. Tank battery relocation available.",
    href: "/services#delivery",
    imageSrc: "/images/Drago2.webp",
    imageAlt: "Viking crane truck delivering vessel",
  },
  {
    num: "02",
    title: "Internal Coating",
    description: "In-house corrosion protection. Multiple paint types available. No subcontractors — all done at our Odessa facility.",
    href: "/services#coating",
    imageSrc: "/images/Gaupo1.webp",
    imageAlt: "Viking tank battery installation",
  },
  {
    num: "03",
    title: "R-Stamp Repair",
    description: "ASME R-Stamp qualified for pressure vessel repair, nozzle installation, and code-compliant modifications.",
    href: "/services#repair",
    imageSrc: "/images/Gaupo6.webp",
    imageAlt: "Viking facility and equipment",
  },
];

export default function HomeV2Page() {
  return (
    <>
      <HeroBanner
        headline="Precision-Built. Field-Ready."
        subhead="ASME Code certified pressure vessel and API tank manufacturer. Odessa, Texas."
        imageSrc="/images/Gaupo1.webp"
        imageAlt="Viking Inc. tank battery installation in the Permian Basin"
      />

      {/* Product Category Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-viking-black tracking-tight">
              What We Build
            </h2>
            <p className="text-viking-gray mt-2 max-w-xl mx-auto">
              Custom-manufactured vessels and tanks for the oil and gas industry.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-viking-accent font-semibold hover:text-viking-accent-dark transition-colors"
            >
              View Full Product Catalog
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Services — dark horizontal row strip */}
      <section className="bg-viking-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">What We Do</h2>
            <p className="text-white/50 mt-1 text-sm">Manufacturing is one part. We also coat, haul, and set.</p>
          </div>
          <Link href="/services" className="inline-flex items-center gap-2 text-viking-accent font-semibold hover:text-viking-accent-dark transition-colors text-sm whitespace-nowrap">
            All Services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {services.map((svc, i) => (
          <Link
            key={svc.num}
            href={svc.href}
            className={`group flex items-stretch border-t border-white/8 ${i === services.length - 1 ? "border-b border-white/8" : ""}`}
          >
            {/* Text side */}
            <div className="flex items-center gap-6 px-6 lg:px-8 py-8 w-full lg:w-1/2 flex-shrink-0">
              <span className="text-6xl font-black text-white/8 group-hover:text-viking-accent/20 transition-colors duration-500 leading-none flex-shrink-0 select-none">
                {svc.num}
              </span>
              <div className="w-px self-stretch bg-white/10 group-hover:bg-viking-accent/40 transition-colors duration-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-black text-white tracking-tight mb-2 group-hover:text-viking-accent transition-colors duration-300">
                  {svc.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{svc.description}</p>
                <span className="inline-flex items-center gap-1.5 mt-4 text-viking-accent text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Image side */}
            <div className="hidden lg:block relative w-1/2 flex-shrink-0 min-h-[220px] overflow-hidden">
              <Image
                src={svc.imageSrc}
                alt={svc.imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-viking-black via-viking-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-viking-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          </Link>
        ))}
      </section>

      <CertBadges />
      <CTABanner heading="Need sizing help? Our team can assist." />
    </>
  );
}
