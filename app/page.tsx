import type { Metadata } from "next";
import HeroBanner from "@/components/HeroBanner";
import ProductionLineup from "@/components/ProductionLineup";
import OperationalCapabilities from "@/components/OperationalCapabilities";
import CTABanner from "@/components/CTABanner";
import CertBadges from "@/components/CertBadges";

export const metadata: Metadata = {
  title: "Viking – Custom Oilfield Tanks, Parts & Trucking",
  description:
    "Viking manufactures custom steel tanks, supplies oilfield parts, and provides field trucking across Texas. Built for the oilfield. Ready for what's next. Request a quote today.",
};

export default function HomePage() {
  return (
    <>
      <HeroBanner
        headline="Precision Engineered. Field-Ready Performance."
        subhead="We provide code-compliant pressure vessels and storage solutions for high-stakes environments. Built with 50 years of industry experience and zero compromise on safety."
      />

      <ProductionLineup />

      {/* Operational Capabilities */}
      <OperationalCapabilities />

      {/* Certifications */}
      <CertBadges />

      {/* CTA Banner */}
      <CTABanner heading="Optimize your production with expert sizing and technical support." />
    </>
  );
}
