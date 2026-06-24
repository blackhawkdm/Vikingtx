import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import PageHeroFull from "@/components/PageHeroFull";
import HeroStatBar from "@/components/HeroStatBar";

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
      "We operate a private fleet of crane and haul trucks to eliminate the scheduling delays often associated with third party logistics. Our team handles the transport and the on-site setting of large diameter vessels and API tanks.",
    bullets: [
      "Private Fleet: Dedicated crane and haul trucks for total schedule control.",
      "Heavy Haul Capability: Specialized transport for oversized oilfield equipment.",
      "On Site Setting: Professional placement and setting on your location.",
      "Battery Relocation: Teardown and transport services for site transitions.",
    ],
    imageSrc: "/images/delivery-equipment-setting.webp",
    imageAlt: "Viking crane setting tank battery vessels on location",
  },
  {
    id: "coating",
    num: "02",
    title: "Internal Coating",
    tagline: "In-house. No subcontractors.",
    description:
      "We manage the entire coating process in-house to ensure superior bond strength and corrosion protection. By eliminating third-party variables, we deliver specialized liners built for high-pressure and corrosive service.",
    bullets: [
      "In House Application: We own the process from prep to finish with no subcontractors.",
      "Corrosion Protection: Specialized liners designed for high pressure and corrosive service.",
      "Controlled Environment: Shop application eliminates field variables and environmental contamination.",
      "Total Protection: Available for all pressure vessels and API storage tanks.",
    ],
    imageSrc: "/images/api-storage-tanks.webp",
    imageAlt: "Viking coated pressure vessels and storage tanks",
  },
  {
    id: "repair",
    num: "03",
    title: "Repair Services",
    tagline: "R-Stamp qualified. Code compliant.",
    description:
      "Minimize downtime with code-compliant repairs and modifications. As an R-Stamp qualified shop, we provide the technical expertise and documentation required to return your assets to service safely.",
    bullets: [
      "ASME R Stamp Qualified: Certified for repairs and alterations of code vessels.",
      "Custom Modifications: Nozzle installations and structural adjustments to meet site specs.",
      "Technical Integrity: Every repair is supported by code compliant documentation.",
      "Sizing Support: Direct access to staff for assistance with design and sizing.",
    ],
    imageSrc: "/images/repair-services.webp",
    imageAlt: "Viking welder performing an R-Stamp repair on a pressure vessel",
  },
];

const certs = [
  { label: "ASME Code Certified", sub: "Authorized to manufacture pressure vessels to strict Section VIII standards." },
  { label: "National Board Registered", sub: "We maintain permanent records and lifelong traceability for every vessel we build." },
  { label: "R-Stamp Qualified", sub: "Authorized to perform critical repairs and alterations on pressure-retaining items." },
  { label: "Safety & Quality Program", sub: "Strict adherence to the internal QC and safety protocols required by major operators." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeroFull
        headline="Field Services & Support"
        subhead="From delivery and equipment setting to on-site repairs, we provide full-service support for every vessel we build."
        imageSrc="/images/products-hero-image.webp"
        imageAlt="Viking Inc. delivering large vessels on location"
      />
      <HeroStatBar />

      {/* Service sections — alternating image / content (matches products, checkmark bullets) */}
      <div className="bg-viking-light py-12">
        <div className="site-container space-y-6">
          {services.map((svc, i) => (
            <section
              key={svc.id}
              id={svc.id}
              className="scroll-mt-32 overflow-hidden rounded-xl border border-viking-border bg-white shadow"
            >
              <div className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>

                {/* Image panel */}
                <div className="relative min-h-[300px] w-full overflow-hidden lg:min-h-[440px] lg:w-1/2">
                  <Image
                    src={svc.imageSrc}
                    alt={svc.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-viking-black/25" />
                  <div className="absolute inset-x-0 top-0 h-1 bg-viking-accent" />
                  <div className="absolute inset-x-4 top-4 flex justify-center sm:inset-x-auto sm:left-6 sm:top-6 sm:block">
                    <span className="inline-block max-w-full rounded-full bg-black/50 px-3 py-1.5 text-center text-xs font-bold uppercase tracking-widest text-white/80 backdrop-blur-sm sm:text-left">
                      {svc.tagline}
                    </span>
                  </div>
                </div>

                {/* Content panel */}
                <div className="flex w-full flex-col justify-center gap-6 px-8 py-10 lg:w-1/2 lg:px-12 lg:py-12">
                  <h2 className="text-2xl font-extrabold tracking-tight text-viking-black lg:text-3xl">
                    {svc.title}
                  </h2>
                  <p className="text-base leading-relaxed text-viking-gray">
                    {svc.description}
                  </p>
                  <ul className="flex flex-col gap-[18px]">
                    {svc.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="mt-0.5 flex size-5 flex-shrink-0 items-center justify-center rounded-full border border-viking-accent bg-viking-cream">
                          <svg className="size-3 text-viking-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-sm text-viking-gray">{b}</span>
                      </li>
                    ))}
                  </ul>
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

      {/* Certifications & Standards (Figma 152:2774) */}
      <section id="certifications" className="bg-white py-16">
        <div className="site-container">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-viking-black tracking-tight">
              Certifications &amp; Standards
            </h2>
            <p className="mt-2 mx-auto max-w-xl text-sm text-viking-gray">
              Code-compliant manufacturing backed by industry-leading quality and safety programs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certs.map((c) => (
              <div
                key={c.label}
                className="rounded-xl border border-viking-accent bg-viking-cream p-6 text-center"
              >
                <div className="mx-auto mb-4 flex size-10 items-center justify-center rounded-full border border-viking-accent-dark bg-viking-accent">
                  <svg className="size-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mb-1 text-sm font-bold text-viking-black">{c.label}</h3>
                <p className="text-xs leading-relaxed text-viking-gray">{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Need Technical Assistance?"
        subtext="Contact our Odessa office to discuss sizing or project specifications."
      />
    </>
  );
}
