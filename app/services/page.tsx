import type { Metadata } from "next";
import ServiceBlock from "@/components/ServiceBlock";
import CertBadges from "@/components/CertBadges";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Coating, Delivery & Equipment Setting",
  description:
    "Viking provides internal coating for corrosion protection, full-service delivery using crane and haul trucks, and professional equipment setting. ASME certified, National Board registered, and R-stamp qualified for repairs.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-viking-black py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">Services</h1>
          <p className="text-white/70 mt-3 max-w-2xl text-lg">
            Beyond manufacturing — Viking coats, delivers, sets, and repairs. Full-service capabilities
            from our Odessa facility.
          </p>
        </div>
      </section>

      {/* Delivery & Equipment Setting */}
      <ServiceBlock
        id="delivery"
        title="Delivery & Equipment Setting"
        description="Viking operates a fleet of crane and haul trucks capable of handling larger equipment than most. We deliver your vessel or tank to location and set it — professionally and efficiently. Tank battery relocation services also available."
        bullets={[
          "Fleet of crane and haul trucks",
          "Capable of handling larger equipment",
          "Equipment setting on location",
          "Tank battery relocation services",
          "Odessa, TX based — serving the Permian Basin and beyond",
        ]}
      />

      {/* Internal Coating */}
      <ServiceBlock
        id="coating"
        title="Internal Coating"
        description="All coating is done in-house at our Odessa facility. We apply internal coatings to protect vessels and tanks from corrosion, extending their service life. Multiple paint types available depending on your fluid chemistry and application."
        bullets={[
          "In-house application — no subcontracting",
          "Multiple paint types available",
          "Applied to pressure vessels and storage tanks",
          "Corrosion protection for extended service life",
        ]}
        reverse
      />

      {/* Repair Services */}
      <ServiceBlock
        id="repair"
        title="Repair Services (R-Stamp)"
        description="Viking holds ASME R-Stamp qualification, authorizing us to perform pressure vessel repairs and alterations. Customers bring equipment to our shop for nozzle installation, structural modifications, and code-compliant repairs."
        bullets={[
          "ASME R-Stamp qualified",
          "Pressure vessel repair and alteration",
          "Nozzle installation and modifications",
          "In-shop service — customers bring equipment in",
          "Code-compliant documentation",
        ]}
      />

      {/* Certifications & Safety */}
      <section id="certifications" className="py-14 px-4 bg-viking-light border-b border-viking-border scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-black text-viking-black mb-4 tracking-tight">
              Certifications &amp; Safety
            </h2>
            <p className="text-viking-gray leading-relaxed mb-6">
              Viking meets the strictest safety standards expected by major operators. Our
              certifications reflect a commitment to quality that runs through every weld, every
              inspection, and every delivery.
            </p>
            <ul className="space-y-3 text-viking-gray text-sm">
              {[
                "ASME Code Certification — pressure vessels built to ASME Section VIII",
                "National Board Registration — registered manufacturer and repair organization",
                "R-Stamp Qualification — authorized for pressure vessel repair and alteration",
                "Safety training and quality program",
                "We meet the strictest safety standards expected by major operators",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-viking-teal shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CertBadges />

      <CTABanner
        heading="Questions about our services?"
        subtext="Call 432-337-1900 or fill out the form and we'll get back to you fast."
      />
    </>
  );
}
