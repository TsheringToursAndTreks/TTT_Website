import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";
import PrayerFlags from "@/components/PrayerFlags";

export const metadata: Metadata = {
  title: "Hotels & Accommodation | TTT Tshering Tours and Treks",
  description:
    "Discover Bhutan's finest hotels, resorts, and farm-stays — from luxury Amankora and Taj Tashi to authentic village homestays arranged by TTT Tshering Tours.",
};

const luxuryHotels = [
  {
    name: "Amankora",
    type: "Ultra-Luxury Lodge",
    locations: "Paro, Thimphu, Punakha, Gangtey, Bumthang",
    description:
      "Aman's signature five-lodge retreat across Bhutan's most iconic valleys. Each lodge is designed in traditional rammed-earth architecture with warm interiors and wood-burning fireplaces. The journey between lodges is as curated as the stays themselves.",
    stars: 5,
  },
  {
    name: "Taj Tashi",
    type: "Luxury Hotel",
    locations: "Thimphu",
    description:
      "Bhutan's most celebrated city hotel, designed as an homage to traditional Bhutanese dzong architecture. Located in the heart of Thimphu, Taj Tashi combines traditional craftsmanship with world-class luxury. The spa offers Bhutanese wellness treatments including the traditional hot stone bath.",
    stars: 5,
  },
  {
    name: "Zhiwa Ling",
    type: "Luxury Heritage Hotel",
    locations: "Paro",
    description:
      "An award-winning luxury hotel in the Paro valley, built entirely by Bhutanese craftsmen using traditional techniques. Zhiwa Ling means 'resting place of the divine' — an ethos felt throughout the hand-painted interiors, carved woodwork, and garden landscaping.",
    stars: 5,
  },
  {
    name: "Termalinca Resort & Spa",
    type: "Luxury Resort",
    locations: "Paro",
    description:
      "Set beside the Paro Chhu river, Termalinca offers luxury villas and suites in a serene riverside setting. The spa uses traditional Bhutanese medicinal plants, and the resort's farm supplies organic produce for its restaurant. One of Bhutan's most romantic retreats.",
    stars: 5,
  },
  {
    name: "Uma by Como",
    type: "Luxury Boutique",
    locations: "Paro",
    description:
      "COMO's signature Bhutan property sits above the Paro valley with panoramic views to Paro Taktsang. Uma blends contemporary design with local materials, and COMO Shambhala's renowned wellness philosophy is present throughout — from the spa treatments to the organic cuisine.",
    stars: 5,
  },
  {
    name: "Le Méridien",
    type: "Luxury Hotel",
    locations: "Thimphu",
    description:
      "Le Méridien Thimphu brings international luxury to Bhutan's capital. The hotel features spacious rooms with mountain views, a full-service spa, and fine dining showcasing both Bhutanese and international cuisine. Centrally located, ideal for exploring Thimphu.",
    stars: 5,
  },
  {
    name: "Gangtey Goenpa Lodge",
    type: "Boutique Wilderness Lodge",
    locations: "Gangtey, Phobjikha Valley",
    description:
      "Perched beside the ancient Gangtey Monastery overlooking the Phobjikha valley — winter home of the endangered black-necked crane — this intimate lodge offers some of the most spectacular scenery in Bhutan. Perfect for nature lovers seeking remoteness without sacrificing comfort.",
    stars: 5,
  },
];

const accommodationTypes = [
  {
    title: "Hotels & Guest Houses",
    description:
      "Our standard tours use comfortable 3-star hotels throughout Bhutan, typically featuring television, room service, spa, and Wi-Fi. Every room is arranged for scenic valley views where possible. We have close relationships with properties in all major towns.",
  },
  {
    title: "Resorts",
    description:
      "Bhutan's boutique resorts offer an elevated experience — many designed by award-winning architects using traditional materials and techniques. We work closely with 5-star properties including Amankora, Taj Tashi, and Uma by Como for guests seeking the finest accommodation.",
  },
  {
    title: "Farm-Stays & Homestays",
    description:
      "For an authentically Bhutanese experience, we arrange stays with local farming families in their traditional homes. Guests dine with the family, participate in daily activities, and gain a genuine understanding of rural Bhutanese life that no hotel can replicate.",
  },
];

export default function HotelsPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Where You&apos;ll Stay"
        title="Hotels & Accommodation"
        description="From authentic farm-stays to world-class luxury lodges — we arrange accommodation to match every style and budget."
      />

      {/* Accommodation types */}
      <section className="py-20 lg:py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="border-b border-brand-dark/15 pb-5 mb-14">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand-orange mb-4">
                01 / Choose Your Style
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-brand-dark max-w-3xl">
                Three ways to stay
              </h2>
            </div>
          </FadeUp>
          <div className="divide-y divide-brand-dark/10">
            {accommodationTypes.map((type, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 items-baseline">
                  <span
                    aria-hidden="true"
                    className="md:col-span-2 font-display italic text-6xl text-brand-maroon/25 leading-none"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="md:col-span-4 font-display text-2xl font-semibold text-brand-dark">
                    {type.title}
                  </h3>
                  <p className="md:col-span-6 text-gray-600 font-sans leading-relaxed">
                    {type.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Hotels */}
      <section className="py-20 lg:py-24 bg-paper-deep/60 border-t border-brand-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="border-b border-brand-dark/15 pb-5 mb-14">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand-orange mb-4">
                02 / World-Class Stays
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-brand-dark max-w-3xl mb-4">
                Luxury hotels in Bhutan
              </h2>
              <p className="text-gray-600 font-sans max-w-xl">
                TTT Tshering Tours has close connections with Bhutan&apos;s
                finest 5-star hotels. We arrange stays at any of these
                properties as part of your tailor-made tour.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-12">
            {luxuryHotels.map((hotel, i) => (
              <FadeUp key={i} delay={i * 0.06}>
                <article className="border-t-2 border-brand-maroon pt-5 h-full flex flex-col">
                  <p
                    className="font-mono text-brand-orange text-xs tracking-[0.3em] mb-3"
                    aria-label={`${hotel.stars} star property`}
                  >
                    {"★".repeat(hotel.stars)}
                  </p>
                  <h3 className="font-display text-2xl font-semibold text-brand-dark">
                    {hotel.name}
                  </h3>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500 mt-2 mb-4">
                    {hotel.type} · {hotel.locations}
                  </p>
                  <p className="text-gray-600 font-sans text-sm leading-relaxed flex-1">
                    {hotel.description}
                  </p>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-maroon">
        <PrayerFlags className="text-brand-yellow" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <FadeUp>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
              Let us arrange your stay
            </h2>
            <p className="text-gray-300 font-sans text-lg mb-8 max-w-xl">
              Whether you prefer a farm-stay or a five-star lodge, we handle all
              accommodation as part of your tailor-made Bhutan package.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-brand-yellow text-brand-dark px-9 py-4 font-sans font-bold text-sm tracking-wide hover:bg-white transition-colors"
            >
              Enquire about accommodation
              <ArrowRight size={16} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
