import type { Metadata } from "next";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Coating, Delivery & Equipment Setting",
  description:
    "Viking provides internal coating for corrosion protection, full-service delivery using crane and haul trucks, and professional equipment setting. ASME certified, National Board registered, and R-stamp qualified for repairs.",
};

const services = [
  {
    id: "delivery",
    num: "01",
    title: "Delivery & Equipment Setting",
    tagline: "We bring it. We set it.",
    description:
      "Viking operates a fleet of crane and haul trucks capable of handling larger equipment than most operators encounter. We deliver your vessel or tank directly to location and set it — professionally and efficiently. Tank battery relocation services also available.",
    bullets: [
      "Fleet of crane and haul trucks",
      "Capable of handling larger equipment",
      "Equipment setting on location",
      "Tank battery relocation services",
      "Serving the Permian Basin and beyond",
    ],
    imageSrc: "/images/Drago1.webp",
    imageAlt: "Viking delivering large vessels on location",
    accent: "bg-viking-accent",
  },
  {
    id: "coating",
    num: "02",
    title: "Internal Coating",
    tagline: "In-house. No subcontractors.",
    description:
      "All coating is done in-house at our Odessa facility. We apply internal coatings to protect vessels and tanks from corrosion, extending their service life. Multiple paint types available depending on your fluid chemistry and application.",
    bullets: [
      "In-house application — no subcontracting",
      "Multiple paint types available",
      "Applied to pressure vessels and storage tanks",
      "Corrosion protection for extended service life",
    ],
    imageSrc: "/images/Gaupo1.webp",
    imageAlt: "Viking completed tank battery installation",
    accent: "bg-viking-teal",
  },
  {
    id: "repair",
    num: "03",
    title: "Repair Services",
    tagline: "R-Stamp qualified. Code compliant.",
    description:
      "Viking holds ASME R-Stamp qualification, authorizing us to perform pressure vessel repairs and alterations. Customers bring equipment to our shop for nozzle installation, structural modifications, and code-compliant repairs.",
    bullets: [
      "ASME R-Stamp qualified",
      "Pressure vessel repair and alteration",
      "Nozzle installation and modifications",
      "In-shop service — customers bring equipment in",
      "Code-compliant documentation",
    ],
    imageSrc: "/images/Gaupo6.webp",
    imageAlt: "Viking facility and equipment",
    accent: "bg-viking-black",
  },
];

const certs = [
  { label: "ASME Code Certified", sub: "Pressure vessels built to ASME Section VIII" },
  { label: "National Board Registered", sub: "Registered manufacturer and repair organization" },
  { label: "R-Stamp Qualified", sub: "Authorized for pressure vessel repair and alteration" },
  { label: "Safety & Quality Program", sub: "Meeting the strictest standards expected by major operators" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        headline="Services"
        subhead="Beyond manufacturing — Viking coats, delivers, sets, and repairs. Full-service from our Odessa facility."
        imageSrc="/images/Drago1.webp"
        imageAlt="Viking Inc. delivering large vessels on location"
      />

      {/* Service sections */}
      {services.map((svc, i) => (
        <section
          key={svc.id}
          id={svc.id}
          className={`scroll-mt-20 ${i % 2 === 0 ? "bg-white" : "bg-viking-light"} border-b border-viking-border`}
        >
          <div className="max-w-7xl mx-auto">
            <div className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>

              {/* Image panel with number overlay */}
              <div className="relative w-full lg:w-[45%] min-h-[300px] lg:min-h-[420px] overflow-hidden">
                <Image
                  src={svc.imageSrc}
                  alt={svc.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-viking-black/40" />
                {/* Accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${svc.accent}`} />
                {/* Large number */}
                <div className="absolute bottom-5 left-5 text-[90px] font-black text-white/10 leading-none select-none pointer-events-none">
                  {svc.num}
                </div>
                {/* Tagline on image */}
                <div className="absolute top-6 left-6 right-6">
                  <span className="inline-block bg-black/50 backdrop-blur-sm text-white/80 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                    {svc.tagline}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-[55%] px-6 sm:px-10 py-10 lg:py-14 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-viking-accent/40 text-sm font-black tracking-widest">{svc.num}</span>
                  <div className="h-px w-8 bg-viking-border" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-viking-black tracking-tight mb-3">
                  {svc.title}
                </h2>
                <p className="text-viking-gray leading-relaxed mb-7 text-sm sm:text-base">
                  {svc.description}
                </p>
                <ul className="space-y-2.5">
                  {svc.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-1 w-5 h-5 rounded-full bg-viking-teal/10 border border-viking-teal/30 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-viking-teal" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-viking-gray text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Certifications — dark strip */}
      <section id="certifications" className="bg-viking-black py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Certifications &amp; Standards
            </h2>
            <p className="text-white/50 mt-2 text-sm">
              We meet the strictest safety standards expected by major operators.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certs.map((c) => (
              <div
                key={c.label}
                className="card-hover bg-white/5 border border-white/10 rounded-xl p-6 text-center"
              >
                <div className="w-10 h-10 rounded-full bg-viking-accent/15 border border-viking-accent/30 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-5 h-5 text-viking-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="font-bold text-white text-sm mb-1">{c.label}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Questions about our services?"
        subtext="Call 432-337-1900 or fill out the form and we'll get back to you fast."
      />
    </>
  );
}
