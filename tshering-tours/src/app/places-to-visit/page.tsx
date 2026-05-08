import type { Metadata } from "next";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Places to Visit | TTT Tshering Tours and Treks",
  description:
    "Discover the best destinations across Bhutan — Thimphu, Paro, Punakha, Bumthang, Trongsa, and the remote eastern frontier.",
};

const regions = [
  {
    name: "Western Bhutan",
    places: [
      {
        name: "Thimphu",
        description:
          "Bhutan's vibrant capital — one of the world's few capitals without a traffic light. Visit the Memorial Chorten, National Textile Museum, Folk Heritage Museum, and the 51-metre Buddha Dordenma statue. The Tashichho Dzong houses the government and the monk body. The Weekend Market is a riot of local produce and handicrafts.",
        highlights: ["Buddha Dordenma (51m statue)", "National Textile Museum", "Tashichho Dzong", "Weekend Market", "MICE & GNH conferences"],
      },
      {
        name: "Paro",
        description:
          "Home to the iconic Tiger's Nest (Paro Taktsang) — arguably Asia's most dramatic monastery, perched on a sheer cliff 900m above the valley floor. The Paro Museum (Ta Dzong) houses an extraordinary collection of Bhutanese history and culture. The valley is also home to Bhutan's only international airport.",
        highlights: ["Tiger's Nest Monastery (Taktsang)", "Rinpung Dzong", "National Museum (Ta Dzong)", "Kyichu Lhakhang (7th century)", "Paro Tshechu festival"],
      },
      {
        name: "Punakha",
        description:
          "The former winter capital of Bhutan, Punakha is dominated by its magnificent dzong — built at the confluence of the Mo Chu and Pho Chu rivers. Warmer and lower than Thimphu, the Punakha valley produces Bhutan's famous red rice. The annual Punakha Tshechu includes the re-enactment of a great 17th-century battle.",
        highlights: ["Punakha Dzong (1637)", "Suspension bridge (180m, longest in Bhutan)", "Chimi Lhakhang fertility temple", "Punakha Tshechu festival", "Red rice farming valleys"],
      },
      {
        name: "Haa",
        description:
          "One of Bhutan's smallest and most unspoiled districts, Haa is a hidden gem bordering China and India. The summer Haa Festival celebrates Shamanic rituals, folk dances, and rare Himalayan flowers in bloom. The valley offers gentle two-night treks and some of the most authentic rural Bhutanese life.",
        highlights: ["Haa Summer Festival", "Shamanic rituals and folk dances", "Rare Himalayan wildflowers", "Lhakhang Karpo & Nagpo temples", "2-night valley trek"],
      },
      {
        name: "Wangdue Phodrang",
        description:
          "A strategic district commanding the pass between western and central Bhutan. The dzong — destroyed by fire in 2012 and currently being rebuilt — once dominated a rocky ridge above the Puna Tsang Chu. The surrounding farmland produces rice and maize, and traditional Rinchengang village is one of Bhutan's most photographed hamlets.",
        highlights: ["Wangdue Phodrang Dzong (rebuilding)", "Rinchengang village", "Gangtey valley nearby (black-necked cranes)", "Traditional agricultural landscape", "Gateway to central Bhutan"],
      },
      {
        name: "Gasa",
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
        description:
          "Bhutan's spiritual heartland — a cluster of four sacred valleys containing some of the country's oldest temples. Jambay Lhakhang was built in 659 AD by Tibetan Emperor Songtsen Gampo. Kurje Lhakhang contains the body print of Guru Rinpoche left in the 8th century. Tamshing Lhakhang (1501) was founded by treasure-discoverer Pema Lingpa.",
        highlights: ["Jambay Lhakhang (659 AD)", "Kurje Lhakhang (Guru Rinpoche body print)", "Tamshing Lhakhang (1501)", "Mebar Tsho – the Burning Lake", "Bumthang Brewery (Red Panda beer)"],
      },
      {
        name: "Trongsa",
        description:
          "The ancestral seat of Bhutan's royal Wangchuck dynasty. Trongsa Dzong — Bhutan's largest — commands the sole east-west road through a dramatic gorge. The Tower of Trongsa Museum, in the ancient watchtower above the dzong, tells the fascinating story of how the Trongsa Penlop (governor) united Bhutan under one crown.",
        highlights: ["Trongsa Dzong (Bhutan's largest)", "Tower of Trongsa Museum", "Wangchuck dynasty history", "Dramatic gorge views", "Gateway to eastern Bhutan"],
      },
      {
        name: "Zhemgang",
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
        description:
          "The trading and administrative hub of eastern Bhutan, Trashigang sits dramatically above a bend in the Drangme Chhu river. The town retains a medieval quality and is a gateway to some of Bhutan's most remote and authentic villages. Eastern Bhutan is renowned for its unique Kishuthara silk weaving tradition.",
        highlights: ["Trashigang Dzong", "Kishuthara silk weaving in Khoma village", "Gom Kora sacred site", "Ancient trade routes with Tibet", "Authentic eastern Bhutanese culture"],
      },
      {
        name: "Trashiyangtse",
        description:
          "The northernmost district of eastern Bhutan, home to the sacred Chhorten Kora — a replica of the great Boudhanath stupa of Nepal. The annual Chhorten Kora festival draws pilgrims from across Arunachal Pradesh (India) and Bhutan. The district is known for its distinctive woodturning craft.",
        highlights: ["Chhorten Kora (stupa)", "Annual Chhorten Kora festival", "Traditional woodturning crafts", "Gom Kora pilgrimage", "Remote riverside location"],
      },
      {
        name: "Mongar & Lhuntse",
        description:
          "The scenic mountain town of Mongar serves as a staging post for journeys deeper into the east. Lhuntse, to the north, is the ancestral home of Bhutan's royal family — a wild, remote district accessible only by rough mountain roads, offering the most authentic off-the-beaten-path experiences in the kingdom.",
        highlights: ["Mongar Dzong", "Lhuntse — ancestral royal homeland", "Khoma weaving village", "Remote Himalayan scenery", "Genuine off-the-beaten-path travel"],
      },
    ],
  },
];

export default function PlacesToVisitPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative bg-brand-dark pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-brand-yellow translate-y-1/2 -translate-x-1/4" />
          <div className="absolute top-0 right-0 w-56 h-56 rounded-full bg-brand-orange -translate-y-1/2 translate-x-1/4" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-yellow font-sans font-bold uppercase tracking-[0.25em] text-xs mb-3">
            Discover the Kingdom
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
            Places to Visit
          </h1>
          <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full mb-5" />
          <p className="text-gray-300 font-sans text-lg max-w-2xl mx-auto leading-relaxed">
            From Paro&apos;s Tiger&apos;s Nest to the remote eastern frontier of
            Trashigang — Bhutan unfolds across three distinct regions.
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeUp>
            <p className="text-gray-600 font-sans text-lg leading-relaxed">
              Bhutan is divided into three broad regions — Western, Central, and
              Eastern — each with its own distinct character, landscapes, and
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
          className={`py-20 ${ri % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp>
              <div className="flex items-center gap-4 mb-12">
                <div className="w-1.5 h-10 rounded-full bg-brand-orange" />
                <h2 className="font-display text-3xl font-bold text-brand-dark">
                  {region.name}
                </h2>
              </div>
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {region.places.map((place, pi) => (
                <FadeUp key={pi} delay={pi * 0.1}>
                  <div className="bg-white rounded-2xl border border-gray-100 hover:shadow-lg hover:border-orange-100 transition-all duration-300 h-full">
                    <div className="p-7">
                      <h3 className="font-display text-xl font-bold text-brand-dark mb-3">
                        {place.name}
                      </h3>
                      <p className="text-gray-600 font-sans text-sm leading-relaxed mb-5">
                        {place.description}
                      </p>
                      <ul className="space-y-1.5">
                        {place.highlights.map((h, hi) => (
                          <li
                            key={hi}
                            className="text-gray-700 text-xs font-sans flex gap-2 items-start"
                          >
                            <span className="text-brand-orange shrink-0 mt-0.5">✦</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-brand-maroon py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <FadeUp>
            <h2 className="font-display text-3xl font-bold text-white mb-3">
              Where Would You Like to Go?
            </h2>
            <p className="text-gray-300 font-sans mb-6">
              Tell us your interests and we&apos;ll design a route through
              Bhutan&apos;s most remarkable places — just for you.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-brand-yellow text-brand-dark px-9 py-3.5 rounded-full font-sans font-bold hover:bg-white transition-colors"
            >
              Plan My Route
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
