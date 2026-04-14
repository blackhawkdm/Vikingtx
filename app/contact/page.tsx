import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact Viking | Request a Quote",
  description:
    "Ready to talk tanks, parts, or trucking? Contact Viking's team to request a quote, ask about availability, or get directions to our facility. We respond fast — call or fill out the form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        headline="Contact Us"
        subhead="We respond fast. Call for immediate assistance or fill out the form below."
        imageSrc="/images/Bruce1.webp"
        imageAlt="Viking Inc. tank battery installation on location"
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Call + Office Info + Map */}
            <div className="space-y-8">
              {/* Click-to-call */}
              <div className="bg-viking-accent rounded-lg p-8 text-center sm:text-left">
                <p className="text-white/80 text-sm font-semibold uppercase tracking-wider mb-2">
                  For immediate assistance
                </p>
                <a
                  href="tel:4323371900"
                  className="flex flex-col sm:flex-row items-center gap-3 group"
                >
                  <div className="bg-white/20 rounded-full p-3 group-hover:bg-white/30 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <span className="text-white font-black text-3xl tracking-wide group-hover:underline">
                    432-337-1900
                  </span>
                </a>
              </div>

              {/* Office info */}
              <div className="space-y-4">
                <h2 className="text-xl font-black text-viking-black">Office</h2>
                <ul className="space-y-3 text-viking-gray text-sm">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-viking-steel shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>
                      2700 I-20 West<br />Odessa, TX 79763
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-viking-accent shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <a href="tel:4323371900" className="hover:text-viking-accent transition-colors">
                      432-337-1900
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-viking-steel shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <a
                      href="mailto:jmartin@vikingtx.com"
                      className="hover:text-viking-accent transition-colors"
                    >
                      jmartin@vikingtx.com
                    </a>
                  </li>
                </ul>
              </div>

              {/* Map */}
              <MapEmbed />
            </div>

            {/* Right: Form */}
            <div>
              <h2 className="text-xl font-black text-viking-black mb-6">Request a Quote</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
