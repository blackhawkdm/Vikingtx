"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-viking-light shadow-[0_4px_3px_rgba(0,0,0,0.1),0_2px_2px_rgba(0,0,0,0.1)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-[60px]">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/images/main-logo.png"
              alt="Viking Inc."
              width={196}
              height={32}
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
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            432-337-1900
          </a>

          {/* Mobile: phone icon + hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href="tel:4323371900"
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded bg-viking-accent p-2 text-white"
              aria-label="Call Viking at 432-337-1900"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex min-h-[44px] min-w-[44px] items-center justify-center p-2 text-viking-black"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-viking-border bg-viking-light md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile navigation">
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
            <a
              href="tel:4323371900"
              className="mt-3 flex items-center justify-center gap-2 rounded bg-viking-accent px-4 py-3 text-sm font-bold text-white"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call 432-337-1900
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
