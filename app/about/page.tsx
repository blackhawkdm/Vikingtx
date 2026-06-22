import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TeamMember from "@/components/TeamMember";
import CertBadges from "@/components/CertBadges";
import CTABanner from "@/components/CTABanner";
import HeroStatBar from "@/components/HeroStatBar";

export const metadata: Metadata = {
  title: "About Viking | ASME Certified Tank Manufacturer TX",
  description:
    "Meet the Viking team — Joe Keith Martin, Michael Ashton, and Taylor Grimes — with decades of oilfield experience. Learn about our 40,000 sq ft Odessa facility, ASME certifications, and commitment to precision manufacturing.",
};

const team = [
  {
    name: "Michael S. Ashton",
    title: "President",
    bio: "Michael S. Ashton graduated with a Bachelor of Business Administration from Baylor University, where he built the foundation for a distinguished career in the oil and gas industry. A respected leader in the field, he has proudly served on the board of the Permian Basin International Oilfield Show for 30 years, a testament to his deep ties to the industry and his ongoing commitment to its growth and community.",
    imageSrc: "/images/Michael-Ashton-Headshot.webp",
  },
  {
    name: "Taylor Grimes",
    title: "Vice President",
    bio: "Taylor Grimes directs the daily manufacturing operations, ensuring that Viking’s high standards for quality and safety are met on every build. Educated at Kilgore College and with over 45 years of experience in the oil industry, Taylor brings deep expertise to every project — coordinating the transition from engineering designs to finished products with a strict focus on code compliance and timeline management.",
    imageSrc: "/images/Taylor-Grimes-Headshot.webp",
  },
  {
    name: "Joe Keith Martin",
    title: "Operations Manager",
    bio: "Joe Keith Martin brings a well-rounded experience to Viking Inc. from his extensive work history as a Quality Control Manager, Engineering Manager, Code Shop Foreman, Manufacturing Sales Specialist, and Machinist. He completed AWS welding classes and attended Odessa College for ASME CODE Div 1 section VII and section IX and is PEC certified, giving him expertise in manufacturing quality products and the training required to do it safely.",
    imageSrc: "/images/Joe-Keith-Martin-Headshot.webp",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero — split, white (Figma 139:309) ── */}
      <section className="relative flex min-h-[520px] flex-col overflow-hidden bg-white">
        {/* Hero body — content + diagonal photo */}
        <div className="relative flex flex-1 flex-col lg:block">

          {/* Right — group photo, full-bleed diagonal (desktop) */}
          <div className="clip-diagonal absolute inset-y-0 right-0 hidden w-1/2 lg:block">
            <Image
              src="/images/about-page-hero.webp"
              alt="Viking Inc. leadership — Joe Keith Martin, Michael Ashton, and Taylor Grimes"
              fill
              priority
              className="object-cover object-top"
              sizes="50vw"
            />
          </div>

          {/* Left content */}
          <div className="site-container relative z-10">
            <div className="flex w-full flex-col justify-center py-16 lg:min-h-[520px] lg:w-[52%] lg:py-24">
              <p className="animate-fade-up mb-6 text-xs font-bold uppercase tracking-[0.1em] text-viking-accent">
                Viking Inc. — Odessa, Texas
              </p>
              <h1 className="animate-fade-up-delay-1 mb-4 text-4xl font-extrabold leading-tight tracking-tight text-viking-black sm:text-5xl lg:text-[48px] lg:leading-[60px] lg:tracking-[-0.025em]">
                Decades of Expertise,<br />
                <span className="text-viking-accent">Proven in the Field.</span>
              </h1>
              <p className="animate-fade-up-delay-2 mb-8 max-w-xl text-base leading-relaxed text-viking-gray sm:text-lg">
                Three leaders. A lifetime of industry experience. Every vessel we build carries that collective knowledge.
              </p>
              <div className="animate-fade-up-delay-3 flex flex-col items-start gap-3 sm:flex-row">
                <a
                  href="tel:4323371900"
                  className="inline-flex min-h-[52px] items-center gap-2 rounded-lg bg-viking-accent px-6 py-3.5 text-base font-bold text-white transition-colors duration-200 hover:bg-viking-accent-dark"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call 432-337-1900
                </a>
                <Link
                  href="/contact"
                  className="inline-flex min-h-[52px] items-center gap-2 rounded-lg border-2 border-viking-accent px-6 py-3.5 text-base font-semibold text-viking-accent transition-colors duration-200 hover:bg-viking-accent/10"
                >
                  Request a Quote
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile — photo strip below text */}
          <div className="relative h-72 w-full lg:hidden">
            <Image
              src="/images/about-page-hero.webp"
              alt="Viking Inc. leadership team"
              fill
              priority
              className="object-cover object-top"
              sizes="100vw"
            />
          </div>
        </div>

        {/* Stats bar — identical to homepage */}
        <HeroStatBar />
      </section>

      {/* Company Overview */}
      <section className="border-b border-viking-border bg-white py-16">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-viking-black tracking-tight mb-5">
                The Experience Behind the Engineering.
              </h2>
              <div className="space-y-5 text-base text-viking-gray leading-relaxed">
                <p>
                  We started Viking with a clear mission: to engineer oilfield equipment for
                  performance rather than just price. Based in the heart of Odessa, we’ve spent the
                  last 15 years balancing shop-floor precision with the rugged durability the field
                  demands.
                </p>
                <p>
                  Viking was built on a foundation of trust and technical integrity. By overseeing
                  every stage of the manufacturing process—from initial engineering to the final
                  coat—we ensure that every vessel reflects the high standards we’ve spent our
                  careers upholding. For us, reliability isn’t just a metric; it’s a personal
                  commitment.
                </p>
                <p>
                  You can depend on us for the critical-path equipment that keeps your operations
                  moving—from heater treaters to separators and API storage tanks. Partnering with
                  Viking means getting equipment built to outlast the job, backed by a team that
                  truly understands the field.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "2008", label: "Founded" },
                { stat: "40,000 sq ft", label: "Production Facility" },
                { stat: "ASME Certified", label: "Code Manufacturer" },
                { stat: "R-Stamp", label: "Repair Qualified" },
              ].map(({ stat, label }) => (
                <div
                  key={label}
                  className="card-hover bg-viking-light rounded-xl p-6 border border-viking-border text-center"
                >
                  <div className="text-2xl font-extrabold text-viking-accent mb-1">{stat}</div>
                  <div className="text-viking-gray text-sm font-semibold">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="border-b border-viking-border bg-viking-light py-16">
        <div className="site-container">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-viking-black tracking-tight">
              Our Leadership Team
            </h2>
            <p className="text-viking-gray mt-2 max-w-2xl mx-auto">
              We bring decades of field experience. View our leadership profiles below.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Facility — split, image left (Figma 139:1081) */}
      <section className="relative flex min-h-[491px] flex-col overflow-hidden border-b border-viking-border bg-viking-cream">
        <div className="relative flex flex-1 flex-col lg:block">

          {/* Left — facility photo, full-bleed diagonal (desktop) */}
          <div className="clip-diagonal-left absolute inset-y-0 left-0 hidden w-1/2 lg:block">
            <Image
              src="/images/our-facility-image.webp"
              alt="Viking Inc. 40,000 sq ft production facility and tank battery in Odessa, Texas"
              fill
              className="object-cover"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-viking-black/15" />
          </div>

          {/* Mobile — facility photo (rounded card, above text) */}
          <div className="site-container pt-16 lg:hidden">
            <div className="relative h-72 w-full overflow-hidden rounded-xl shadow-md">
              <Image
                src="/images/our-facility-image.webp"
                alt="Viking Inc. 40,000 sq ft production facility and tank battery in Odessa, Texas"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </div>

          {/* Right content */}
          <div className="site-container relative z-10">
            <div className="flex w-full flex-col justify-center pb-16 pt-12 lg:ml-auto lg:min-h-[491px] lg:w-[52%] lg:py-20 lg:pl-8">
              <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-viking-accent">
                Our Odessa Facility.
              </h2>
              <div className="space-y-6 text-base leading-relaxed text-viking-grey">
                <p>
                  Our 40,000-square-foot Odessa facility is purpose-built for the full production
                  cycle. We&apos;ve consolidated the entire process under one roof: heavy steel
                  fabrication, ASME-certified welding, precision coating, and quality inspection.
                </p>
                <p>
                  By maintaining our own fleet of crane and haul trucks on-site, we eliminate
                  third-party delays and logistical gaps.
                </p>
                <p>
                  Everything under one roof means tighter control and faster turnaround for
                  operators who can&apos;t wait.
                </p>
              </div>
              <div className="mt-6 text-sm">
                <strong className="font-bold text-viking-black">2700 I-20 West</strong>
                <br />
                <span className="text-viking-grey">Odessa, TX 79763</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CertBadges />

      <CTABanner heading="Bring Viking's technical authority to your next project." />
    </>
  );
}
