import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PrayerFlags from "@/components/PrayerFlags";

export default function NotFound() {
  return (
    <div className="relative bg-brand-dark min-h-screen flex items-center overflow-hidden text-white">
      <span
        aria-hidden="true"
        className="absolute -right-8 -bottom-24 font-tibetan text-[18rem] leading-none text-brand-yellow/10 select-none"
      >
        འབྲུག
      </span>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <p className="font-mono text-brand-yellow uppercase tracking-[0.3em] text-[11px] mb-6">
          ✦ 404 · Off the map
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tight mb-6 max-w-3xl">
          This trail doesn&apos;t lead anywhere.
        </h1>
        <p className="text-gray-300 font-sans text-lg max-w-xl leading-relaxed mb-10">
          Even in Bhutan, some paths end at a cliff edge. The page you&apos;re
          looking for doesn&apos;t exist, but the kingdom is just a step away.
        </p>
        <div className="flex flex-wrap gap-6 items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 bg-brand-yellow text-brand-dark px-8 py-4 font-sans font-bold text-sm tracking-wide hover:bg-white transition-colors"
          >
            Back to the homepage
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/places-to-visit"
            className="font-mono text-xs uppercase tracking-[0.2em] text-white border-b border-white/40 pb-1 hover:text-brand-yellow hover:border-brand-yellow transition-colors"
          >
            Explore places to visit
          </Link>
        </div>
      </div>
      <PrayerFlags className="absolute bottom-0 left-0 right-0 text-brand-yellow" />
    </div>
  );
}
