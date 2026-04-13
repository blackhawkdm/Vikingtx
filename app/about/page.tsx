import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TeamMember from "@/components/TeamMember";
import CertBadges from "@/components/CertBadges";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About Viking | ASME Certified Tank Manufacturer TX",
  description:
    "Meet the Viking team — Joe Keith Martin, Michael Ashton, and Taylor Grimes — with decades of oilfield experience. Learn about our 40,000 sq ft Odessa facility, ASME certifications, and commitment to precision manufacturing.",
};

const team = [
  {
    name: "Joe Keith Martin",
    title: "Operations Manager",
    bio: "Joe Keith brings over 45 years of experience in engineering, design, and sales to Viking. His deep technical knowledge and field expertise ensure every project is spec'd and executed right the first time.",
    imageSrc: "/images/TiffanyWilsohPhotography--4.webp",
    yearsExp: "45+ Years Experience",
  },
  {
    name: "Michael Ashton",
    title: "President",
    bio: "Michael founded Viking Inc. in 2008 and brings 50 years of experience in the oil industry. His leadership has shaped Viking into a trusted manufacturer known for quality products and on-time delivery.",
    imageSrc: "/images/TiffanyWilsohPhotography-.webp",
    yearsExp: "50 Years Experience",
  },
  {
    name: "Taylor Grimes",
    title: "Team Member",
    bio: "Bio to be provided.",
    imageSrc: "/images/TiffanyWilsohPhotography--5.webp",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero — group photo split ── */}
      <section className="relative bg-viking-black overflow-hidden min-h-[480px] flex flex-col">
        <div className="relative z-10 flex flex-col lg:flex-row flex-1">

          {/* Left content */}
          <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-16 lg:py-20 w-full lg:w-[52%]">
            <p className="animate-fade-up text-viking-accent text-xs font-bold uppercase tracking-widest mb-4">
              Viking Inc. — Odessa, Texas
            </p>
            <h1 className="animate-fade-up-delay-1 text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Built on Experience.<br />
              <span className="text-viking-accent">Founded in 2008.</span>
            </h1>
            <p className="animate-fade-up-delay-2 text-white/65 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
              Three leaders. Over 100 combined years in the oilfield. Every vessel we build carries that knowledge.
            </p>
            <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-start gap-3">
              <a
                href="tel:4323371900"
                className="inline-flex items-center gap-2 bg-viking-accent hover:bg-viking-accent-dark text-white font-bold px-6 py-3.5 rounded-lg text-base transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-viking-accent/20"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call 432-337-1900
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/30 text-white hover:border-white/60 hover:bg-white/5 font-semibold px-6 py-3.5 rounded-lg text-base transition-all duration-200"
              >
                Request a Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right — group photo */}
          <div className="hidden lg:block relative w-[48%] min-h-[480px]">
            <div className="clip-diagonal absolute inset-0">
              <Image
                src="/images/TiffanyWilsohPhotography--9.webp"
                alt="Viking Inc. leadership — Joe Keith Martin, Michael Ashton, and Taylor Grimes"
                fill
                priority
                className="object-cover object-top"
                sizes="48vw"
              />
              {/* Subtle dark vignette on right edge */}
              <div className="absolute inset-0 bg-gradient-to-l from-viking-black/20 to-transparent" />
            </div>
          </div>

          {/* Mobile: photo strip below text */}
          <div className="lg:hidden relative h-72 w-full">
            <Image
              src="/images/TiffanyWilsohPhotography--9.webp"
              alt="Viking Inc. leadership team"
              fill
              priority
              className="object-cover object-top"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-viking-black/60 to-transparent" />
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative z-10 border-t border-white/10 bg-white/[0.04]">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {[
                { value: "50", label: "Years — Michael Ashton" },
                { value: "45+", label: "Years — Joe Keith Martin" },
                { value: "2008", label: "Founded in Odessa, TX" },
                { value: "100+", label: "Combined Industry Years" },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className={`py-4 px-4 flex flex-col items-center sm:items-start ${i < 3 ? "border-r border-white/10" : ""}`}
                >
                  <span className="text-xl sm:text-2xl font-black text-viking-accent leading-none">{s.value}</span>
                  <span className="text-white/50 text-xs font-medium mt-0.5 uppercase tracking-wide">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-4 bg-white border-b border-viking-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-viking-black tracking-tight mb-4">
                Who We Are
              </h2>
              <div className="space-y-4 text-viking-gray leading-relaxed">
                <p>
                  Viking Inc. is an ASME Code certified pressure vessel and API tank manufacturer
                  headquartered in Odessa, Texas. Since our founding in 2008, we have built a
                  reputation on delivering quality equipment on time to operators across the
                  Permian Basin and beyond.
                </p>
                <p>
                  Our 40,000 square foot production facility houses our full manufacturing,
                  coating, and fleet operations — giving us end-to-end control over quality and
                  delivery. When you order from Viking, it gets built here and delivered by us.
                </p>
                <p>
                  We specialize in heater treaters, separators, vapor recovery towers, free water
                  knockouts, API storage tanks, and specialty vessels. Our team of experienced
                  engineers and craftsmen handles custom design, code compliance, internal
                  coating, and field delivery.
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
                  <div className="text-2xl font-black text-viking-accent mb-1">{stat}</div>
                  <div className="text-viking-gray text-sm font-semibold">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 px-4 bg-viking-light border-b border-viking-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-viking-black tracking-tight">
              Leadership Team
            </h2>
            <p className="text-viking-gray mt-2 max-w-xl mx-auto">
              Hover each card to read their story.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Facility */}
      <section className="py-16 px-4 bg-white border-b border-viking-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-72 sm:h-96 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/Gaupo3.webp"
                alt="Viking Inc. tank battery installation — aerial view"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-black text-viking-black tracking-tight mb-4">
                Our Facility
              </h2>
              <div className="space-y-4 text-viking-gray leading-relaxed">
                <p>
                  Viking operates a 40,000 square foot production facility in Odessa, Texas —
                  purpose-built for manufacturing, coating, and fleet operations.
                </p>
                <p>
                  Our facility is equipped to handle the full production cycle: steel fabrication,
                  ASME code welding, internal coating application, quality inspection, and staging
                  for delivery. Our fleet of crane and haul trucks dispatches directly from the
                  yard.
                </p>
                <p>
                  Everything under one roof means tighter control and faster turnaround for
                  operators who can&apos;t wait.
                </p>
              </div>
              <div className="mt-6 text-sm text-viking-gray">
                <strong className="text-viking-black">2700 I-20 West</strong>
                <br />
                Odessa, TX 79763
              </div>
            </div>
          </div>
        </div>
      </section>

      <CertBadges />

      <CTABanner heading="Ready to work with Viking?" />
    </>
  );
}
