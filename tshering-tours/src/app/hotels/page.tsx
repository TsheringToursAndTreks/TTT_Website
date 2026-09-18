import type { Metadata } from "next";
import Link from "next/link";
import { Building2, TreePine, Home } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";

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
    icon: <Building2 size={26} className="text-brand-orange" />,
    title: "Hotels & Guest Houses",
    description:
      "Our standard tours use comfortable 3-star hotels throughout Bhutan, typically featuring television, room service, spa, and Wi-Fi. Every room is arranged for scenic valley views where possible. We have close relationships with properties in all major towns.",
  },
  {
    icon: <TreePine size={26} className="text-brand-orange" />,
    title: "Resorts",
    description:
      "Bhutan's boutique resorts offer an elevated experience — many designed by award-winning architects using traditional materials and techniques. We work closely with 5-star properties including Amankora, Taj Tashi, and Uma by Como for guests seeking the finest accommodation.",
  },
  {
    icon: <Home size={26} className="text-brand-orange" />,
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <p className="text-brand-orange font-sans font-bold uppercase tracking-[0.25em] text-xs mb-3">
                Choose Your Style
              </p>
              <h2 className="font-display text-4xl font-bold text-brand-dark">
                Accommodation Types
              </h2>
              <div className="w-16 h-1 bg-brand-orange mx-auto mt-4 rounded-full" />
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {accommodationTypes.map((type, i) => (
              <FadeUp key={i} delay={i * 0.15}>
                <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:shadow-lg hover:border-orange-100 transition-all duration-300 group h-full">
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 group-hover:border-orange-200 group-hover:bg-orange-50 transition-all flex items-center justify-center mb-6 shadow-sm">
                    {type.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-brand-dark mb-3">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 font-sans text-sm leading-relaxed mb-5">
                    {type.description}
                  </p>
                  <div className="h-0.5 w-10 bg-brand-orange rounded-full group-hover:w-16 transition-all duration-500" />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Hotels */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <p className="text-brand-orange font-sans font-bold uppercase tracking-[0.25em] text-xs mb-3">
                World-Class Stays
              </p>
              <h2 className="font-display text-4xl font-bold text-brand-dark">
                Luxury Hotels in Bhutan
              </h2>
              <div className="w-16 h-1 bg-brand-orange mx-auto mt-4 rounded-full" />
              <p className="text-gray-500 font-sans text-sm mt-4 max-w-xl mx-auto">
                TTT Tshering Tours has close connections with Bhutan&apos;s
                finest 5-star hotels. We arrange stays at any of these
                properties as part of your tailor-made tour.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
            {luxuryHotels.map((hotel, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="bg-white rounded-2xl border border-gray-100 hover:shadow-lg hover:border-orange-100 transition-all duration-300 h-full flex flex-col">
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1 min-w-0 pr-2">
                        <h3 className="font-display text-xl font-bold text-brand-dark">
                          {hotel.name}
                        </h3>
                        <p className="text-brand-orange font-sans text-xs font-bold uppercase tracking-wider mt-0.5">
                          {hotel.type}
                        </p>
                      </div>
                      <div className="flex gap-0.5 shrink-0">
                        {Array.from({ length: hotel.stars }).map((_, si) => (
                          <span
                            key={si}
                            className="text-brand-yellow text-sm"
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-400 font-sans text-xs font-semibold mb-4 flex items-center gap-1">
                      <span className="text-brand-orange">📍</span>{" "}
                      {hotel.locations}
                    </p>
                    <p className="text-gray-600 font-sans text-sm leading-relaxed flex-1">
                      {hotel.description}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-maroon py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <FadeUp>
            <h2 className="font-display text-3xl font-bold text-white mb-3">
              Let Us Arrange Your Stay
            </h2>
            <p className="text-gray-300 font-sans mb-6">
              Whether you prefer a farm-stay or a five-star lodge, we handle all
              accommodation as part of your tailor-made Bhutan package.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-brand-yellow text-brand-dark px-9 py-3.5 rounded-full font-sans font-bold hover:bg-white transition-colors"
            >
              Enquire About Accommodation
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
