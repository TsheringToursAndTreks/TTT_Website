"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/about-bhutan", label: "About Bhutan" },
  { href: "/activities", label: "Activities" },
  { href: "/travel-information", label: "Travel Info" },
  { href: "/places-to-visit", label: "Places to Visit" },
  { href: "/hotels", label: "Hotels" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-paper/95 backdrop-blur border-b border-brand-dark/10 transition-shadow duration-300 ${
        scrolled ? "shadow-md shadow-brand-dark/5" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-12 h-12 rounded-full overflow-hidden shadow-sm shrink-0 bg-white border border-brand-dark/10">
              <Image
                src="/ttt_logo.jpeg"
                alt="TTT Tshering Tours and Treks"
                width={48}
                height={48}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="hidden lg:block">
              <p className="font-display font-semibold text-brand-dark text-[15px] leading-tight group-hover:text-brand-maroon transition-colors">
                Tshering Tours
              </p>
              <p className="font-mono text-brand-maroon text-[9px] uppercase tracking-[0.25em] leading-none mt-1">
                &amp; Treks · Bhutan
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-3 lg:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-mono text-[9px] lg:text-[10px] uppercase tracking-[0.1em] lg:tracking-[0.15em] transition-colors duration-200 whitespace-nowrap pb-1 border-b ${
                  pathname === link.href
                    ? "text-brand-maroon border-brand-maroon"
                    : "text-brand-dark/80 border-transparent hover:text-brand-maroon"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-brand-dark p-2 hover:bg-brand-dark/5 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-paper border-t border-brand-dark/10">
          <div className="px-4 py-5 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className={`block px-3 py-3 font-mono text-xs uppercase tracking-[0.15em] transition-colors ${
                  pathname === link.href
                    ? "text-brand-maroon bg-brand-maroon/5 border-l-2 border-brand-maroon"
                    : "text-brand-dark hover:text-brand-maroon hover:bg-brand-dark/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="block mt-4 bg-brand-maroon text-white px-4 py-3.5 font-sans text-sm font-bold text-center hover:bg-brand-dark transition-colors"
            >
              Plan Your Journey
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
