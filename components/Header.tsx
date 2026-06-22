"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close the drawer on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-viking-light shadow-[0_4px_3px_rgba(0,0,0,0.1),0_2px_2px_rgba(0,0,0,0.1)]">
      <div className="site-container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center" onClick={() => setMenuOpen(false)}>
            <Image
              src="/main-logo.svg"
              alt="Viking Inc."
              width={195}
              height={34}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-semibold uppercase tracking-wide transition-colors ${
                  pathname === href
                    ? "text-viking-accent"
                    : "text-viking-black hover:text-viking-gray"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Phone CTA — desktop */}
          <a
            href="tel:4323371900"
            className="hidden items-center gap-2 rounded bg-viking-accent px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-viking-accent-dark md:flex"
          >
            <PhoneIcon className="h-4 w-4" />
            432-337-1900
          </a>

          {/* Mobile: phone icon + hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href="tel:4323371900"
              className="flex min-h-[44px] min-w-[44px] items-center justify-center p-2 text-viking-accent"
              aria-label="Call Viking at 432-337-1900"
            >
              <PhoneIcon className="h-5 w-5" />
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className="flex min-h-[44px] min-w-[44px] items-center justify-center p-2 text-viking-black"
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className="md:hidden" aria-hidden={!menuOpen}>
        {/* Backdrop */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`fixed inset-0 z-[55] bg-black/40 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        />

        {/* Panel — full height, fades + slides in from the left */}
        <div
          className={`fixed inset-y-0 left-0 z-[60] flex h-full w-[82%] max-w-xs flex-col bg-viking-light shadow-2xl transition-all duration-300 ease-out ${
            menuOpen ? "translate-x-0 opacity-100" : "pointer-events-none -translate-x-full opacity-0"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          {/* Drawer header */}
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-viking-border px-4">
            <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center">
              <Image src="/main-logo.svg" alt="Viking Inc." width={195} height={34} className="h-8 w-auto" />
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="flex min-h-[44px] min-w-[44px] items-center justify-center p-2 text-viking-black"
              aria-label="Close menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6" aria-label="Mobile navigation">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`block rounded px-3 py-3 text-sm font-semibold uppercase tracking-wide transition-colors ${
                  pathname === href
                    ? "bg-viking-accent/10 text-viking-accent"
                    : "text-viking-black hover:bg-viking-border/50"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTAs */}
          <div className="flex shrink-0 flex-col gap-3 border-t border-viking-border px-4 py-4">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded border-2 border-viking-accent px-4 py-3 text-sm font-bold uppercase tracking-wide text-viking-accent transition-colors hover:bg-viking-accent/10"
            >
              Contact Us
            </Link>
            <a
              href="tel:4323371900"
              className="flex items-center justify-center gap-2 rounded bg-viking-accent px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-viking-accent-dark"
            >
              <PhoneIcon className="h-4 w-4" />
              Call 432-337-1900
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
