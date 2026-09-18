import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";
import PrayerFlags from "@/components/PrayerFlags";

export const metadata: Metadata = {
  title: "Activities | TTT Tshering Tours and Treks",
  description:
    "Explore Bhutan through cultural tours, trekking expeditions, nature tours, and cycling journeys with TTT Tshering Tours & Treks.",
};

const activities = [
  {
    title: "Cultural Tours",
    duration: "7 nights – 1 month",
    image: "/img/tshechu-dance.jpg",
    alt: "Masked dancers performing at a tshechu festival in Bhutan",
    caption: "Masked dance at a tshechu festival",
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
    title: "Trekking",
    duration: "2 – 25 days",
    image: "/img/suspension-bridge.jpg",
    alt: "A trekker crossing a prayer-flag-draped suspension bridge in Bhutan",
    caption: "A suspension bridge on the trail",
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
    title: "Nature Tours",
    duration: "5 – 14 days",
    image: "/img/green-ridges.jpg",
    alt: "Forested green mountains under white clouds in Bhutan",
    caption: "Forested ridges under monsoon cloud",
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
    title: "Cycling Tours",
    duration: "10 – 15 days",
    image: "/img/mountain-road.jpg",
    alt: "A winding mountain road through green hills strung with prayer flags",
    caption: "Mountain roads between the valleys",
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

      {/* Activities — alternating editorial rows */}
      <section className="py-20 lg:py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 lg:space-y-28">
            {activities.map((act, i) => (
              <FadeUp key={i}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                  <div
                    className={`lg:col-span-5 ${
                      i % 2 === 1 ? "lg:order-2 lg:col-start-8" : ""
                    }`}
                  >
                    <figure>
                      <div className="relative">
                        <div
                          aria-hidden="true"
                          className="absolute -right-3 -bottom-3 w-full h-full border border-brand-maroon/40"
                        />
                        <div className="relative aspect-4/3 overflow-hidden bg-brand-dark">
                          <Image
                            src={act.image}
                            alt={act.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 45vw"
                          />
                        </div>
                      </div>
                      <figcaption className="flex items-center gap-3 mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500">
                        <span className="text-brand-orange">✦</span>
                        {act.caption}
                      </figcaption>
                    </figure>
                  </div>
                  <div
                    className={`lg:col-span-7 ${
                      i % 2 === 1 ? "lg:order-1 lg:col-start-1" : ""
                    }`}
                  >
                    <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand-orange mb-4">
                      {String(i + 1).padStart(2, "0")} / {act.duration}
                    </p>
                    <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-brand-dark mb-5">
                      {act.title}
                    </h2>
                    <p className="text-gray-600 font-sans leading-relaxed mb-7">
                      {act.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 border-t border-brand-dark/10 pt-6 mb-8">
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
                    <div className="flex flex-wrap items-center gap-6">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2.5 bg-brand-maroon text-white px-7 py-3.5 font-sans font-semibold text-sm tracking-wide hover:bg-brand-dark transition-colors"
                      >
                        Enquire about this activity
                        <ArrowRight size={15} />
                      </Link>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500">
                        Season · {act.season}
                      </p>
                    </div>
                  </div>
                </div>
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
              Can&apos;t find what you&apos;re looking for?
            </h2>
            <p className="text-gray-300 font-sans text-lg mb-8 max-w-xl">
              All our activities can be combined and customised. Tell us your
              interests and we&apos;ll build the perfect itinerary.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-brand-yellow text-brand-dark px-9 py-4 font-sans font-bold text-sm tracking-wide hover:bg-white transition-colors"
            >
              Request custom itinerary
              <ArrowRight size={16} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
