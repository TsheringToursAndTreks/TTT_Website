"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
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

  const isHomepage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileOpen(false);

  const transparent = isHomepage && !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent ? "bg-transparent" : "bg-brand-maroon shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-13 h-13 rounded-full overflow-hidden shadow-md shrink-0 bg-white">
              <Image
                src="/ttt_logo.jpeg"
                alt="TTT Tshering Tours and Treks"
                width={52}
                height={52}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="hidden lg:block">
              <p className="text-white font-display font-bold text-sm leading-tight group-hover:text-brand-yellow transition-colors">
                Tshering Tours
              </p>
              <p className="text-brand-yellow text-[10px] font-sans leading-none">
                & Treks — Bhutan
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-5 lg:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-semibold tracking-wide transition-colors duration-200 whitespace-nowrap ${
                  pathname === link.href
                    ? "text-brand-yellow"
                    : "text-white hover:text-brand-yellow"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-dark border-t border-brand-maroon/40">
          <div className="px-4 py-5 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className={`block px-3 py-3 rounded-lg text-sm font-semibold transition-colors ${
                  pathname === link.href
                    ? "text-brand-yellow bg-brand-maroon/30"
                    : "text-white hover:text-brand-yellow hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="block mt-3 bg-brand-orange text-white px-4 py-3 rounded-full text-sm font-bold text-center hover:bg-brand-red transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
