import type { Metadata } from "next";
import ProductSection from "@/components/ProductSection";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Oilfield Pressure Vessels & Storage Tanks",
  description:
    "Viking manufactures ASME code and non-code pressure vessels, heater treaters, separators, vapor recovery towers, API storage tanks, and specialty vessels — including cooling vessels for data center applications.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-viking-black py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">Products</h1>
          <p className="text-white/70 mt-3 max-w-2xl text-lg">
            Custom-built vessels and tanks for the oil and gas industry. Every unit built to your
            spec — code or non-code, standard or fully custom.
          </p>
        </div>
      </section>

      {/* Quick nav anchors */}
      <nav className="bg-viking-light border-b border-viking-border sticky top-16 z-40 overflow-x-auto" aria-label="Products quick navigation">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-1 py-2 min-w-max">
          {[
            { href: "#heater-treaters", label: "Heater Treaters" },
            { href: "#separators", label: "Separators" },
            { href: "#free-water-knockouts", label: "Free Water Knockouts" },
            { href: "#vapor-recovery-towers", label: "VRTs" },
            { href: "#specialty-vessels", label: "Specialty Vessels" },
            { href: "#storage-tanks", label: "Storage Tanks" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="whitespace-nowrap text-sm font-semibold text-viking-gray hover:text-viking-accent px-3 py-1.5 rounded transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* Products */}
      <ProductSection
        id="heater-treaters"
        title="Heater Treaters"
        description="Vertical and horizontal configurations. Code and non-code. Designed and built in-house at our Odessa facility."
        capabilities={[
          "Code or non-code",
          "Vertical or horizontal",
          "Internal coating",
          "Custom design",
          "Valves and accessories",
        ]}
      />

      <ProductSection
        id="separators"
        title="Separators"
        description="Two-phase and three-phase separation. Pneumatic or mechanical level controllers. Built to your application."
        capabilities={[
          "Code or non-code",
          "Vertical or horizontal",
          "2-phase or 3-phase",
          "Pneumatic or mechanical level controllers",
          "Internal coating",
          "Custom designed",
          "Valves and accessories",
        ]}
        reverse
      />

      <ProductSection
        id="free-water-knockouts"
        title="Free Water Knockouts"
        description="A/B/C style designs. Code and non-code. Internal coating available."
        capabilities={[
          "Code or non-code",
          "A/B/C style design",
          "Internal coating",
          "Custom designed",
          "Valves and accessories",
        ]}
      />

      <ProductSection
        id="vapor-recovery-towers"
        title="Vapor Recovery Towers"
        description="Engineered for vapor recovery with external piping installed and internal coating available."
        capabilities={[
          "Code or non-code",
          "External piping installed",
          "Internal coating",
          "Custom design",
        ]}
        reverse
      />

      <ProductSection
        id="specialty-vessels"
        title="Specialty Pressure Vessels"
        description="Knock drums, gas scrubbers, data center cooling vessels, and custom-purpose pressure vessels. Contact us with your specific need — our team will help you design a vessel for your application."
        capabilities={[
          "Knock drums",
          "Gas scrubbers",
          "Data center cooling vessels",
          "Custom-purpose pressure vessels",
          "Engineer-assisted sizing and design",
        ]}
      />

      <ProductSection
        id="storage-tanks"
        title="API Storage Tanks"
        description="Built to API standards with full customization. Standard and non-standard configurations available."
        capabilities={[
          "Coupling, flange, and grooved connections",
          "8oz or 16oz on 15'6\" diameter tanks",
          "One or two-piece cleanout doors",
          "Downcomers and roll lines",
          "Internal coating",
          "Custom design",
          "Walkway and stairways",
        ]}
        reverse
      />

      {/* Sizing Assistance CTA */}
      <CTABanner
        heading="We can assist you in sizing your equipment needs."
        subtext="Contact our team and we'll help you spec the right vessel for your application."
      />

      {/* Design Disclaimer */}
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
