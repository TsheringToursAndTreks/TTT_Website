"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-160 flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800"
        alt="Himalayan mountain landscape in Bhutan"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Dark maroon overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-brand-dark/80 via-brand-dark/60 to-brand-dark/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-brand-yellow text-xs sm:text-sm uppercase tracking-[0.35em] font-sans font-bold mb-5"
        >
          ✦ Welcome to the Kingdom of Bhutan ✦
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] mb-6"
        >
          Discover the Last{" "}
          <span className="text-brand-yellow italic">Shangri-La</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-gray-200 text-lg sm:text-xl mb-10 max-w-2xl mx-auto font-sans leading-relaxed"
        >
          Authentic Bhutan experiences crafted by locals — where every journey
          transforms your understanding of happiness.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/activities"
            className="bg-brand-orange text-white px-9 py-4 rounded-full font-sans font-bold text-base sm:text-lg hover:bg-brand-red transition-all duration-300 hover:scale-105 shadow-lg shadow-brand-orange/30"
          >
            Explore Activities
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white text-white px-9 py-4 rounded-full font-sans font-bold text-base sm:text-lg hover:bg-white hover:text-brand-dark transition-all duration-300"
          >
            Contact Us
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6 mt-12 text-xs text-gray-300 font-sans uppercase tracking-wider"
        >
          <span className="flex items-center gap-1.5">
            <span className="text-brand-yellow">✓</span> Licensed Operator
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-brand-yellow">✓</span> 500+ Happy Travelers
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-brand-yellow">✓</span> 20+ Years Experience
          </span>
        </motion.div>
      </div>

      {/* Scroll arrow */}
      <motion.button
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-yellow cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
        onClick={scrollDown}
        aria-label="Scroll down"
      >
        <ChevronDown size={38} strokeWidth={1.5} />
      </motion.button>
    </section>
  );
}
