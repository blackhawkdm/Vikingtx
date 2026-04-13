import type { Metadata } from "next";
import Link from "next/link";
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
  },
  {
    title: "Storage Tanks",
    description:
      "API storage tanks built to your spec — couplings, flanges, internal coating, walkways, and custom configurations.",
    href: "/products#storage-tanks",
  },
  {
    title: "Specialty Vessels",
    description:
      "Knock drums, gas scrubbers, data center cooling vessels, and custom-purpose pressure vessels for unique applications.",
    href: "/products#specialty-vessels",
  },
];

const serviceHighlights = [
  {
    title: "Internal Coating",
    description:
      "In-house corrosion protection for vessels and tanks. Multiple paint types available.",
    href: "/services#coating",
    icon: (
      <svg className="w-8 h-8 text-viking-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "Delivery & Equipment Setting",
    description:
      "Fleet of crane and haul trucks. We deliver and set your equipment on location. Tank battery relocation available.",
    href: "/services#delivery",
    icon: (
      <svg className="w-8 h-8 text-viking-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: "R-Stamp Repair",
    description:
      "ASME R-Stamp qualified for pressure vessel repair, nozzle installation, and modifications.",
    href: "/services#repair",
    icon: (
      <svg className="w-8 h-8 text-viking-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      <HeroBanner
        headline="Precision-Built. Field-Ready."
        subhead="ASME Code certified pressure vessel and API tank manufacturer. Odessa, Texas."
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Services Overview Strip */}
      <section className="py-16 px-4 bg-viking-light border-t border-viking-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-viking-black tracking-tight">
              What We Do
            </h2>
            <p className="text-viking-gray mt-2">
              Manufacturing is one part. We also coat, haul, and set.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {serviceHighlights.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white rounded-lg border border-viking-border p-6 hover:shadow-md transition-shadow"
              >
                <div className="mb-3">{service.icon}</div>
                <h3 className="font-bold text-viking-black text-base mb-2 group-hover:text-viking-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-viking-gray text-sm leading-relaxed">{service.description}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-viking-accent font-semibold hover:text-viking-accent-dark transition-colors"
            >
              Learn More About Our Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <CertBadges />

      {/* CTA Banner */}
      <CTABanner heading="Need sizing help? Our team can assist." />
    </>
  );
}
