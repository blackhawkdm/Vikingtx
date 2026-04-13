import type { Metadata } from "next";
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
  },
  {
    name: "Michael Ashton",
    title: "President",
    bio: "Michael founded Viking Inc. in 2008 and brings 50 years of experience in the oil industry. His leadership has shaped Viking into a trusted manufacturer known for quality products and on-time delivery.",
  },
  {
    name: "Taylor Grimes",
    title: "Team Member",
    bio: "Bio to be provided.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-viking-black py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">About Viking</h1>
          <p className="text-white/70 mt-3 max-w-2xl text-lg">
            Founded in 2008 in Odessa, Texas. Built on quality products and on-time deliveries.
          </p>
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
                  className="bg-viking-light rounded-lg p-6 border border-viking-border text-center"
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
              Decades of combined oilfield experience. The people behind every vessel we build.
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
            {/* Facility image placeholder */}
            <div className="relative h-72 sm:h-96 bg-viking-light rounded-lg border border-viking-border flex items-center justify-center overflow-hidden">
              <div className="text-viking-gray/20 text-center">
                <svg className="w-24 h-24 mx-auto" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                </svg>
                <p className="text-sm mt-2">Facility photo coming soon</p>
              </div>
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
