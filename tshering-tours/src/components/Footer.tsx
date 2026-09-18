import Image from "next/image";
import Link from "next/link";
import { Share2, Camera, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import PrayerFlags from "@/components/PrayerFlags";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <PrayerFlags className="text-brand-yellow" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
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
                <h3 className="font-display font-semibold text-brand-yellow text-sm leading-tight">
                  Tshering Tours &amp; Treks
                </h3>
                <p className="font-mono text-gray-400 text-[9px] uppercase tracking-[0.2em] mt-1">
                  Bhutan · Est. 2005
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-sans">
              Your trusted gateway to the Kingdom of Bhutan. Crafting authentic
              Himalayan experiences since 2005.
            </p>
            <div className="flex gap-3 mb-8">
              <a
                href="https://www.facebook.com/profile.php?id=100054541446493"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-gray-400 hover:text-brand-yellow hover:border-brand-yellow/50 transition-all"
              >
                <Share2 size={15} />
              </a>
              <a
                href="https://www.instagram.com/ttt_tshering_tours/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-gray-400 hover:text-brand-yellow hover:border-brand-yellow/50 transition-all"
              >
                <Camera size={15} />
              </a>
              <a
                href="https://wa.me/97517115200"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-400/50 transition-all"
              >
                <MessageCircle size={15} />
              </a>
            </div>
            <p className="font-tibetan text-brand-yellow/70 text-lg">
              བཀྲ་ཤིས་བདེ་ལེགས།
            </p>
            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-gray-500 mt-1">
              Tashi Delek — good fortune to you
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-brand-yellow mb-6 uppercase tracking-[0.3em] text-[10px]">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
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
                    className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-3 group font-sans"
                  >
                    <span className="text-brand-orange text-[8px] group-hover:text-brand-yellow transition-colors">
                      ✦
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-brand-yellow mb-6 uppercase tracking-[0.3em] text-[10px]">
              Get In Touch
            </h4>
            <ul className="space-y-3.5 text-sm text-gray-400 font-sans">
              <li className="flex items-start gap-3">
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
              <li className="flex items-start gap-3">
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
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-brand-orange mt-0.5 shrink-0" />
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
              className="mt-6 inline-flex items-center gap-2 bg-green-700 hover:bg-green-600 text-white text-sm font-semibold font-sans px-5 py-3 transition-colors"
            >
              <MessageCircle size={15} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-gray-500 font-mono text-[10px] uppercase tracking-[0.15em]">
          <p>© 2026 TTT Tshering Tours and Treks</p>
          <p>Tourism Council of Bhutan · ABTO Member</p>
        </div>
      </div>
    </footer>
  );
}
