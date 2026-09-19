"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PrayerFlags from "@/components/PrayerFlags";

const DESTINATIONS = [
  "Paro",
  "Thimphu",
  "Punakha",
  "Gangtey",
  "Bumthang",
  "Haa Valley",
  "Trongsa",
  "Trashigang",
];

export default function HeroSection() {
  return (
    <section className="relative bg-paper overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 lg:pt-32 pb-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center lg:items-start">
          {/* Copy */}
          <div className="lg:col-span-7 lg:pt-4">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6"
            >
              <span className="font-tibetan text-brand-maroon text-xl mr-3 align-middle">
                འབྲུག་ཡུལ།
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand-orange align-middle">
                Druk Yul · Land of the Thunder Dragon
              </span>
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-brand-dark leading-[1.02] tracking-tight mb-8"
            >
              The kingdom that measures wealth in{" "}
              <em className="text-brand-maroon">happiness.</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-gray-600 text-lg max-w-xl font-sans leading-relaxed mb-10"
            >
              Cultural journeys, Himalayan treks, and slow travel across
              Bhutan, planned in Thimphu since 2005 by the people who call
              these valleys home.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap items-center gap-6 mb-12"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 bg-brand-maroon text-white px-8 py-4 font-sans font-semibold text-sm tracking-wide hover:bg-brand-dark transition-colors"
              >
                Plan your journey
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/activities"
                className="font-mono text-xs uppercase tracking-[0.2em] text-brand-dark border-b border-brand-dark/40 pb-1 hover:text-brand-maroon hover:border-brand-maroon transition-colors"
              >
                Explore activities
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500"
            >
              Est. 2005 · Thimphu, Bhutan · Licensed by the Tourism Council of
              Bhutan
            </motion.p>
          </div>

          {/* Arched photo: a dzong window onto the Himalaya */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              {/* offset arch echo */}
              <div
                aria-hidden="true"
                className="absolute -right-4 -top-4 w-full h-full rounded-t-full border border-brand-maroon/40"
              />
              <div className="relative rounded-t-full overflow-hidden aspect-3/4 bg-brand-dark">
                <Image
                  src="/img/himalaya.jpg"
                  alt="Himalayan peaks rising above a sea of clouds at dusk"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 24rem, 40vw"
                />
                <div className="absolute inset-0 bg-brand-maroon/20 mix-blend-multiply" />
              </div>
              <PrayerFlags
                count={16}
                className="absolute top-16 -left-6 -right-8 text-brand-dark -rotate-6"
              />
              <div className="flex items-baseline justify-between mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500">
                <span>High Himalaya</span>
                <span>27.5°N · 90.4°E</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Destinations ticker */}
      <div className="border-y border-brand-dark/15 bg-paper-deep/60 py-3 overflow-hidden">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center"
            >
              {DESTINATIONS.map((place) => (
                <span
                  key={place}
                  className="flex items-center font-mono text-[11px] uppercase tracking-[0.25em] text-brand-dark/70"
                >
                  <span className="px-6">{place}</span>
                  <span className="text-brand-orange">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
