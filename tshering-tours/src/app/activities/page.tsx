import type { Metadata } from "next";
import Link from "next/link";
import { Landmark, Mountain, Leaf, Bike } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Activities | TTT Tshering Tours and Treks",
  description:
    "Explore Bhutan through cultural tours, trekking expeditions, nature tours, and cycling journeys with TTT Tshering Tours & Treks.",
};

const activities = [
  {
    icon: <Landmark size={28} className="text-brand-orange" />,
    title: "Cultural Tours",
    duration: "7 nights – 1 month",
    description:
      "Our cultural tours introduce visitors to the unique aspects of Bhutanese life through visits to villages, temples, historical monuments, pilgrimage sites, and scenic spots. A standard cultural trip of 10–15 days covers the western and central regions — Paro, Punakha, Haa, Thimphu, Wangdue, Trongsa, and Bumthang. Eastern Bhutan — Trashigang and Trashiyangtse — can be added for a deeper, more remote experience.",
    highlights: [
      "Annual Tshechu festivals with sacred mask dances",
      "Tiger's Nest (Paro Taktsang) monastery hike",
      "Ancient dzong fortresses in every valley",
      "Local village and farm visits",
      "Traditional hot stone bath experience",
    ],
    season: "All year round",
  },
  {
    icon: <Mountain size={28} className="text-brand-orange" />,
    title: "Trekking",
    duration: "2 – 25 days",
    description:
      "Bhutan offers trekking of incredible beauty across clean air, unspoiled, and uncrowded trails. Your private guide and pack animals carry equipment; an experienced cook prepares nutritious meals each evening. Treks range from gentle valley walks to the legendary Snowman Trek — one of the most challenging routes on Earth, crossing 11 passes above 4,500 metres.",
    highlights: [
      "2-night trek around the Haa valley",
      "3-day walk from Thimphu to Paro",
      "8-day trek to Chomolhari Base Camp (7,326m views)",
      "Snowman Trek — 25 days across Lunana wilderness",
      "Fully supported: guide, cook, pack horses",
    ],
    season: "March–May, September–November",
  },
  {
    icon: <Leaf size={28} className="text-brand-orange" />,
    title: "Nature Tours",
    duration: "5 – 14 days",
    description:
      "Bhutan is one of the world's great biodiversity hotspots. With over 5,500 plant species (including 300 medicinal plants, 50+ rhododendron species, and 600+ orchid species) and more than 600 bird species, it is an ornithological paradise. Our nature tours take you through Bhutan's diverse ecosystems — from subtropical riverine forests to high alpine meadows — with expert naturalist guides.",
    highlights: [
      "600+ bird species — a world-class birding destination",
      "Snow leopards, red pandas, and golden langurs",
      "50+ rhododendron species in bloom (April–May)",
      "Thrumshingla National Park — temperate cloud forest",
      "Botanical walks with expert naturalist guide",
    ],
    season: "April–June for flowers; October–November for birds",
  },
  {
    icon: <Bike size={28} className="text-brand-orange" />,
    title: "Cycling Tours",
    duration: "10 – 15 days",
    description:
      "Cycle through one of the world's most unspoiled kingdoms, from the ancient Paro valley to the spiritual heartland of Bumthang. A support vehicle accompanies the group throughout, carrying luggage and providing assistance on steep mountain passes. The route winds through Thimphu, Punakha, Gangtey's black-necked crane valley, and Jakar — offering a constantly changing landscape of monasteries, forests, and rice terraces.",
    highlights: [
      "Paro to Bumthang cycling route",
      "Stops in Thimphu, Punakha, Gangtey, and Jakar",
      "Ancient suspension bridges and forest trails",
      "Support vehicle throughout for luggage and assistance",
      "Mixed terrain — downhill descents and scenic passes",
    ],
    season: "October–November, March–April",
  },
];

export default function ActivitiesPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Explore the Kingdom"
        title="Activities"
        description="Cultural immersions, Himalayan treks, nature expeditions, and cycling journeys — crafted for every type of traveler."
      />

      {/* Activity cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {activities.map((act, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-orange-100 transition-all duration-300">
                  <div className="p-7">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Main content */}
                      <div className="lg:col-span-2">
                        <div className="flex items-center gap-4 mb-5">
                          <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center shrink-0 shadow-sm">
                            {act.icon}
                          </div>
                          <div>
                            <h2 className="font-display text-2xl font-bold text-brand-dark">
                              {act.title}
                            </h2>
                            <p className="text-brand-orange font-sans text-xs font-bold uppercase tracking-wider mt-0.5">
                              {act.duration}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-600 font-sans text-sm leading-relaxed mb-6">
                          {act.description}
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {act.highlights.map((h, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-2.5 text-gray-700 text-sm font-sans"
                            >
                              <span className="text-brand-orange mt-0.5 shrink-0">✦</span>
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Sidebar */}
                      <div className="flex flex-col gap-4">
                        <div className="bg-white rounded-xl p-5 border border-gray-100">
                          <p className="text-xs font-sans font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                            Best Season
                          </p>
                          <p className="text-brand-dark font-sans font-semibold text-sm leading-snug">
                            {act.season}
                          </p>
                        </div>
                        <Link
                          href="/contact"
                          className="block text-center bg-brand-maroon text-white py-3.5 rounded-xl font-sans font-bold text-sm hover:bg-brand-dark transition-colors"
                        >
                          Enquire About This Activity
                        </Link>
                      </div>
                    </div>
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
              Can&apos;t Find What You&apos;re Looking For?
            </h2>
            <p className="text-gray-300 font-sans mb-6">
              All our activities can be combined and customised. Tell us your
              interests and we&apos;ll build the perfect itinerary.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-brand-yellow text-brand-dark px-9 py-3.5 rounded-full font-sans font-bold hover:bg-white transition-colors"
            >
              Request Custom Itinerary
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
