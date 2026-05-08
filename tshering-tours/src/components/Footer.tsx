import Image from "next/image";
import Link from "next/link";
import { Share2, Camera, MessageCircle, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-white shadow-md">
                <Image
                  src="/ttt_logo.jpeg"
                  alt="TTT Tshering Tours and Treks"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h3 className="font-display font-bold text-brand-yellow text-sm leading-tight">
                  Tshering Tours & Treks
                </h3>
                <p className="text-gray-400 text-xs">
                  Bhutan Travel Experts Est. 2005
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Your trusted gateway to the Kingdom of Bhutan. Crafting authentic
              Himalayan experiences since 2005.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-brand-yellow hover:bg-white/20 transition-all"
              >
                <Share2 size={16} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-brand-yellow hover:bg-white/20 transition-all"
              >
                <Camera size={16} />
              </a>
              <a
                href="https://wa.me/97517115200"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-green-400 hover:bg-white/20 transition-all"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-bold text-brand-yellow mb-4 uppercase tracking-widest text-xs">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About Bhutan", href: "/about-bhutan" },
                { label: "Activities", href: "/activities" },
                { label: "Travel Information", href: "/travel-information" },
                { label: "Places to Visit", href: "/places-to-visit" },
                { label: "Hotels", href: "/hotels" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 group font-sans"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-orange group-hover:w-2 transition-all" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-bold text-brand-yellow mb-4 uppercase tracking-widest text-xs">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm text-gray-400 font-sans">
              <li className="flex items-start gap-2">
                <Phone size={14} className="text-brand-orange mt-0.5 shrink-0" />
                <div>
                  <a
                    href="tel:+97517115200"
                    className="hover:text-white transition-colors"
                  >
                    +975 17115200
                  </a>
                  <span className="text-gray-600 mx-1">·</span>
                  <span>+975 2 365044</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={14} className="text-brand-orange mt-0.5 shrink-0" />
                <div>
                  <a
                    href="mailto:ttt.wangdi@gmail.com"
                    className="hover:text-white transition-colors block"
                  >
                    ttt.wangdi@gmail.com
                  </a>
                  <a
                    href="mailto:info@tsheringtours.com"
                    className="hover:text-white transition-colors block"
                  >
                    info@tsheringtours.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange mt-0.5 shrink-0">📍</span>
                <span>
                  SD Building Above Nima High School,
                  <br />
                  Thimphu, Bhutan — P.O. Box 767
                </span>
              </li>
            </ul>
            <a
              href="https://wa.me/97517115200"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold font-sans px-4 py-2.5 rounded-full transition-colors"
            >
              <MessageCircle size={15} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-maroon/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-gray-500 text-xs font-sans">
          <p>© 2025 TTT Tshering Tours and Treks. All rights reserved.</p>
          <p>Licensed by Tourism Council of Bhutan · ABTO Member</p>
        </div>
      </div>
    </footer>
  );
}
