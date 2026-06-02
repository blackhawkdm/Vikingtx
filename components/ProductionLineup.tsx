import Link from "next/link";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    title: "Oilfield Production Equipment",
    description:
      "Designed for 2-phase and 3-phase separation. We build heater treaters, separators, FWKOs, and VRTs to meet your specific needs and design pressures.",
    href: "/products#heater-treaters",
    imageSrc: "/images/Gaupo5.webp",
    imageAlt: "Viking Inc. oilfield production equipment — aerial view",
  },
  {
    title: "API Storage Tanks",
    description:
      "Steel and fiberglass storage tanks built to API standards. Features include customizable designs, internal linings, and customer specified fittings for site-specific needs.",
    href: "/products#storage-tanks",
    imageSrc: "/images/Gaupo3.webp",
    imageAlt: "Viking Inc. API storage tank battery",
  },
  {
    title: "ASME Code and Non-Code Pressure Vessels",
    description:
      "Professionally engineered vessels for your unique applications. We manufacture gas scrubbers, knock-out drums, and pressure vessels that meet rigorous industry standards.",
    href: "/products#specialty-vessels",
    imageSrc: "/images/TiffanyWilsohPhotography--10.webp",
    imageAlt: "Viking Inc. welder fabricating a pressure vessel",
  },
  {
    title: "AI Data Center Equipment",
    description:
      "High-capacity liquid cooling and thermal storage tanks. We use our knowledge and expertise to provide the cooling requirements of modern computing facilities.",
    href: "/products#data-center-cooling",
    imageSrc: "/images/Bruce1.webp",
    imageAlt: "Viking Inc. liquid cooling equipment for data centers",
  },
];

export default function ProductionLineup() {
  return (
    <section className="bg-viking-light py-12 sm:py-16 lg:py-[60px]">
      <div className="site-container flex flex-col items-center gap-8">
        <div className="flex max-w-[497px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-viking-navy sm:text-4xl sm:leading-10 sm:tracking-[-0.025em]">
            Our Certified Production Line-up
          </h2>
          <p className="text-base leading-6 text-viking-gray">
            We provide the precision manufacturing required to handle high-volume flow and rigorous site
            demands for maximum operational longevity.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.title} variant="lineup" {...product} />
          ))}
        </div>

        <Link
          href="/products"
          className="inline-flex items-center gap-2.5 text-base font-semibold text-viking-accent transition-colors hover:text-viking-accent-dark"
        >
          View Full Product Catalog
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
