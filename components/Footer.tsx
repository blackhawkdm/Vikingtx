import Link from "next/link";
import Image from "next/image";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-viking-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-3">
              <Image
                src="/images/viking-logo.png"
                alt="Viking Inc."
                width={140}
                height={108}
                className="h-14 w-auto invert"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              ASME Code certified pressure vessel and API tank manufacturer.
              Odessa, Texas. Built for the oilfield since 2008.
            </p>
            <div className="mt-4 flex items-center gap-1 text-xs text-viking-teal font-semibold">
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-white/70">4.6 stars on Google</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-4">Pages</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/products", label: "Products" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
                { href: "/privacy-policy", label: "Privacy Policy" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a
                  href="tel:4323371900"
                  className="flex items-start gap-2 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 mt-0.5 shrink-0 text-viking-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  432-337-1900
                </a>
              </li>
              <li>
                <a
                  href="mailto:jmartin@vikingtx.com"
                  className="flex items-start gap-2 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 mt-0.5 shrink-0 text-viking-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  jmartin@vikingtx.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-viking-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>2700 I-20 West<br />Odessa, TX 79763</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>&copy; {currentYear} Viking Inc. All rights reserved.</p>
          <Link href="/privacy-policy" className="hover:text-white/70 transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
