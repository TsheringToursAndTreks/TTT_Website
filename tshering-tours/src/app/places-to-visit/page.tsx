import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";
import PrayerFlags from "@/components/PrayerFlags";

export const metadata: Metadata = {
  title: "Places to Visit | TTT Tshering Tours and Treks",
  description:
    "Discover the best destinations across Bhutan: Thimphu, Paro, Punakha, Bumthang, Trongsa, and the remote eastern frontier.",
};

const regions = [
  {
    name: "Western Bhutan",
    places: [
      {
        name: "Thimphu",
        image:
          "/img/buddha-dordenma.jpg",
        alt: "The great bronze Buddha Dordenma statue above Thimphu",
        description:
          "Bhutan's vibrant capital, one of the world's few capitals without a traffic light. Visit the Memorial Chorten, National Textile Museum, Folk Heritage Museum, and the 51-metre Buddha Dordenma statue. The Tashichho Dzong houses the government and the monk body. The Weekend Market is a riot of local produce and handicrafts.",
        highlights: ["Buddha Dordenma (51m statue)", "National Textile Museum", "Tashichho Dzong", "Weekend Market", "MICE & GNH conferences"],
      },
      {
        name: "Paro",
        image:
          "/img/tigers-nest-cliff.jpg",
        alt: "The Tiger's Nest monastery on its cliff face above the Paro valley",
        description:
          "Home to the iconic Tiger's Nest (Paro Taktsang), arguably Asia's most dramatic monastery, perched on a sheer cliff 900m above the valley floor. The Paro Museum (Ta Dzong) houses an extraordinary collection of Bhutanese history and culture. The valley is also home to Bhutan's only international airport.",
        highlights: ["Tiger's Nest Monastery (Taktsang)", "Rinpung Dzong", "National Museum (Ta Dzong)", "Kyichu Lhakhang (7th century)", "Paro Tshechu festival"],
      },
      {
        name: "Punakha",
        image:
          "/img/punakha-dzong.jpg",
        alt: "Punakha Dzong at the confluence of the Mo Chu and Pho Chu rivers",
        description:
          "The former winter capital of Bhutan, Punakha is dominated by its magnificent dzong, built at the confluence of the Mo Chu and Pho Chu rivers. Warmer and lower than Thimphu, the Punakha valley produces Bhutan's famous red rice. The annual Punakha Tshechu includes the re-enactment of a great 17th-century battle.",
        highlights: ["Punakha Dzong (1637)", "Suspension bridge (180m, longest in Bhutan)", "Chimi Lhakhang fertility temple", "Punakha Tshechu festival", "Red rice farming valleys"],
      },
      {
        name: "Haa",
        image: "/haa.jpg",
        alt: "Chortens on a green hillside in the Haa valley",
        description:
          "One of Bhutan's smallest and most unspoiled districts, Haa is a hidden gem bordering China and India. The summer Haa Festival celebrates Shamanic rituals, folk dances, and rare Himalayan flowers in bloom. The valley offers gentle two-night treks and some of the most authentic rural Bhutanese life.",
        highlights: ["Haa Summer Festival", "Shamanic rituals and folk dances", "Rare Himalayan wildflowers", "Lhakhang Karpo & Nagpo temples", "2-night valley trek"],
      },
      {
        name: "Wangdue Phodrang",
        image:
          "/img/gangtey-goemba.jpg",
        alt: "Gangtey Goemba monastery above the Phobjikha valley",
        description:
          "A strategic district commanding the pass between western and central Bhutan. The dzong, destroyed by fire in 2012 and currently being rebuilt, once dominated a rocky ridge above the Puna Tsang Chu. The surrounding farmland produces rice and maize, and traditional Rinchengang village is one of Bhutan's most photographed hamlets.",
        highlights: ["Wangdue Phodrang Dzong (rebuilding)", "Rinchengang village", "Gangtey valley nearby (black-necked cranes)", "Traditional agricultural landscape", "Gateway to central Bhutan"],
      },
      {
        name: "Gasa",
        image: "/Gasa.jpg",
        alt: "Gasa Dzong on its hilltop beneath the high Himalaya",
        description:
          "A remote northern district bordering Tibet, Gasa is famed for its natural hot springs and the Nob Tsonapatra trekking route. The Gasa Tshechu festival draws pilgrims from across the region. The area is home to snow leopards and blue sheep in the high northern reaches.",
        highlights: ["Gasa Tshechu festival", "Natural hot springs", "Nob Tsonapatra trek", "Snow leopard habitat", "Remote Tibetan border"],
      },
    ],
  },
  {
    name: "Central Bhutan",
    places: [
      {
        name: "Bumthang",
        image:
          "/img/jakar-dzong.jpg",
        alt: "Jakar Dzong in Bumthang, surrounded by trees",
        description:
          "Bhutan's spiritual heartland, a cluster of four sacred valleys containing some of the country's oldest temples. Jambay Lhakhang was built in 659 AD by Tibetan Emperor Songtsen Gampo. Kurje Lhakhang contains the body print of Guru Rinpoche left in the 8th century. Tamshing Lhakhang (1501) was founded by treasure-discoverer Pema Lingpa.",
        highlights: ["Jambay Lhakhang (659 AD)", "Kurje Lhakhang (Guru Rinpoche body print)", "Tamshing Lhakhang (1501)", "Mebar Tsho – the Burning Lake", "Bumthang Brewery (Red Panda beer)"],
      },
      {
        name: "Trongsa",
        image: "/trongsa.jpg",
        alt: "Trongsa Dzong sprawling along its ridge above the gorge",
        description:
          "The ancestral seat of Bhutan's royal Wangchuck dynasty. Trongsa Dzong, Bhutan's largest, commands the sole east-west road through a dramatic gorge. The Tower of Trongsa Museum, in the ancient watchtower above the dzong, tells the fascinating story of how the Trongsa Penlop (governor) united Bhutan under one crown.",
        highlights: ["Trongsa Dzong (Bhutan's largest)", "Tower of Trongsa Museum", "Wangchuck dynasty history", "Dramatic gorge views", "Gateway to eastern Bhutan"],
      },
      {
        name: "Zhemgang",
        image: "/zhemgang.jpg",
        alt: "Zhemgang Dzong with snow-capped Himalayan peaks behind",
        description:
          "One of Bhutan's least-visited districts, Zhemgang is a biodiversity hotspot in the subtropical south. The Zhemgang Tshechu festival showcases unique local traditions. The district's forests shelter golden langurs, hornbills, and rare subtropical birds.",
        highlights: ["Zhemgang Tshechu festival", "Golden langur habitat", "Subtropical forest birding", "Traditional Khengpa culture", "Untouched rural Bhutan"],
      },
    ],
  },
  {
    name: "Eastern Bhutan",
    places: [
      {
        name: "Trashigang",
        image: "/tashigang.jpg",
        alt: "Trashigang Dzong in evening light",
        description:
          "The trading and administrative hub of eastern Bhutan, Trashigang sits dramatically above a bend in the Drangme Chhu river. The town retains a medieval quality and is a gateway to some of Bhutan's most remote and authentic villages. Eastern Bhutan is renowned for its unique Kishuthara silk weaving tradition.",
        highlights: ["Trashigang Dzong", "Kishuthara silk weaving tradition", "Gom Kora sacred site", "Ancient trade routes with Tibet", "Authentic eastern Bhutanese culture"],
      },
      {
        name: "Trashiyangtse",
        image: "/trashiyangtse.jpg",
        alt: "The white Chhorten Kora stupa with its golden spire",
        description:
          "The northernmost district of eastern Bhutan, home to the sacred Chhorten Kora, a replica of the great Boudhanath stupa of Nepal. The annual Chhorten Kora festival draws pilgrims from across Arunachal Pradesh (India) and Bhutan. The district is known for its distinctive woodturning craft.",
        highlights: ["Chhorten Kora (stupa)", "Annual Chhorten Kora festival", "Traditional woodturning crafts", "Gom Kora pilgrimage", "Remote riverside location"],
      },
      {
        name: "Mongar",
        image: "/mongar.jpg",
        alt: "The hillside town of Mongar in golden light",
        description:
          "The scenic mountain town of Mongar serves as the hub of the east and a staging post for journeys deeper into the region. Built along a ridge rather than on a valley floor, unusual for Bhutan, it offers sweeping views, a relaxed pace, and a genuine sense of frontier life.",
        highlights: ["Mongar Dzong", "Hub of eastern Bhutan", "Ridge-top town views", "Remote Himalayan scenery", "Staging post for the far east"],
      },
      {
        name: "Lhuntse",
        image: "/lhuentse.jpg",
        alt: "Lhuentse Dzong rising from its forested cliff above the valley",
        description:
          "The ancestral home of Bhutan's royal family, a wild, remote district accessible only by rough mountain roads. Lhuentse Dzong rises dramatically from a cliff above the Kuri Chhu river, and the village of Khoma is famed for weaving Kishuthara, Bhutan's most intricate silk textile.",
        highlights: ["Lhuentse Dzong", "Ancestral royal homeland", "Khoma weaving village (Kishuthara)", "Kuri Chhu river valley", "Genuine off-the-beaten-path travel"],
      },
    ],
  },
];

export default function PlacesToVisitPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Discover the Kingdom"
        title="Places to Visit"
        description="From Paro's Tiger's Nest to the remote eastern frontier of Trashigang, Bhutan unfolds across three distinct regions."
      />

      {/* Intro */}
      <section className="py-14 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-gray-600 font-sans text-lg leading-relaxed max-w-3xl">
              Bhutan is divided into three broad regions: Western, Central, and
              Eastern, each with its own distinct character, landscapes, and
              culture. A standard trip covers the west; a longer journey reveals
              the untouched east.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Regions */}
      {regions.map((region, ri) => (
        <section
          key={ri}
          className={`py-20 border-t border-brand-dark/10 ${
            ri % 2 === 0 ? "bg-paper" : "bg-paper-deep/50"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp>
              <div className="border-b border-brand-dark/15 pb-5 mb-12">
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand-orange mb-4">
                  {String(ri + 1).padStart(2, "0")} / {region.name}
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-brand-dark">
                  {region.name}
                </h2>
              </div>
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-16">
              {region.places.map((place, pi) => (
                <FadeUp key={pi} delay={pi * 0.08}>
                  <article className="group h-full flex flex-col">
                    <div className="relative mb-5">
                      <div
                        aria-hidden="true"
                        className="absolute -right-3 -bottom-3 w-full h-full border border-brand-maroon/40"
                      />
                      <div className="relative aspect-3/2 overflow-hidden bg-brand-dark">
                        <Image
                          src={place.image}
                          alt={place.alt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                    <p className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-4">
                      <span className="text-brand-orange">✦</span>
                      {region.name} · {String(pi + 1).padStart(2, "0")}
                    </p>
                    <h3 className="font-display text-2xl font-semibold text-brand-dark mb-3">
                      {place.name}
                    </h3>
                    <p className="text-gray-600 font-sans text-sm leading-relaxed flex-1">
                      {place.description}
                    </p>
                    <ul className="space-y-2 border-t border-brand-dark/10 pt-5 mt-6">
                      {place.highlights.map((h, hi) => (
                        <li
                          key={hi}
                          className="text-gray-700 text-xs font-sans flex gap-2.5 items-start"
                        >
                          <span className="text-brand-orange shrink-0 mt-0.5">✦</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </article>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-brand-maroon">
        <PrayerFlags className="text-brand-yellow" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <FadeUp>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
              Where would you like to go?
            </h2>
            <p className="text-gray-300 font-sans text-lg mb-8 max-w-xl">
              Tell us your interests and we&apos;ll design a route through
              Bhutan&apos;s most remarkable places, just for you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-brand-yellow text-brand-dark px-9 py-4 font-sans font-bold text-sm tracking-wide hover:bg-white transition-colors"
            >
              Plan my route
              <ArrowRight size={16} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
