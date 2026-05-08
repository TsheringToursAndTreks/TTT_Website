import type { Metadata } from "next";
import Link from "next/link";
import { Mountain, Sun, BookOpen, Users, Utensils, Heart, Leaf } from "lucide-react";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "About Bhutan | TTT Tshering Tours and Treks",
  description:
    "Learn about the Kingdom of Bhutan — its Gross National Happiness philosophy, Buddhist culture, pristine nature, people, food, and traditions.",
};

const sections = [
  {
    icon: <Mountain size={26} className="text-brand-orange" />,
    title: "Geography & Climate",
    content:
      "The Kingdom of Bhutan is a small, landlocked country nestled in the eastern Himalayas between India and China. Despite its modest size, Bhutan encompasses an extraordinary range of ecosystems — from subtropical plains in the south rising to glacial peaks above 7,000 metres in the north. More than 60% of the country is covered by forest, with a constitutional requirement that this figure never fall below that threshold.",
  },
  {
    icon: <Sun size={26} className="text-brand-orange" />,
    title: "Religion",
    content:
      "Mahayana Buddhism is deeply rooted in every aspect of Bhutanese life. Introduced in the 8th century by Guru Rinpoche (Padmasambhava), it influences architecture, governance, festivals, and daily existence. Dzongs — fortress-monasteries — serve as both administrative and religious centres in every district. Prayer flags flutter from mountain passes, and the sound of monks chanting is as common as birdsong.",
  },
  {
    icon: <BookOpen size={26} className="text-brand-orange" />,
    title: "Culture & Traditions",
    content:
      "Bhutan has consciously chosen to preserve its cultural heritage in the face of globalisation. Traditional dress — the gho for men and kira for women — is mandatory in government buildings and dzongs. The government carefully manages foreign cultural influence, and traditional arts (the Zorig Chusum — 13 traditional crafts) are taught in dedicated schools. Bhutan's annual tsechu festivals are living religious theatre, performed by monks in elaborate masks and costumes.",
  },
  {
    icon: <Users size={26} className="text-brand-orange" />,
    title: "People & Society",
    content:
      "Bhutan is a relatively egalitarian society where women enjoy equal rights with men in every respect. There is no rigid caste system; social mobility is possible regardless of origin. The Bhutanese people are renowned across the world for their warmth, hospitality, and genuine contentment. Bhutan has no significant crime, no pollution crisis, and no homeless population — qualities that flow directly from the country's values and governance philosophy.",
  },
  {
    icon: <Utensils size={26} className="text-brand-orange" />,
    title: "Food & Cuisine",
    content:
      "A traditional Bhutanese meal centres on red rice and chillies. The national dish is Ema Datshi — chillies cooked in a sauce of local cheese — where chillies function as a vegetable rather than a seasoning. Buckwheat pancakes, yak meat, and fresh river fish are common in rural areas. An important note for visitors: it is illegal in Bhutan to sell or buy tobacco products, and smoking in public places is strictly banned.",
  },
  {
    icon: <Heart size={26} className="text-brand-orange" />,
    title: "Gross National Happiness",
    content:
      "Bhutan's Fourth King, His Majesty Jigme Singye Wangchuck, famously declared that 'Gross National Happiness is more important than Gross National Product.' This philosophy — now enshrined in Bhutan's constitution — measures national progress across four pillars: sustainable socioeconomic development, environmental conservation, preservation of culture, and good governance. It is not a vague aspiration; GNH shapes every major policy decision the government makes.",
  },
  {
    icon: <Leaf size={26} className="text-brand-orange" />,
    title: "Environment & Conservation",
    content:
      "Bhutan is the world's only carbon-negative country — it absorbs more carbon dioxide than it produces. With over 70% forest cover, numerous protected areas covering more than half the country, and a constitutional environmental mandate, Bhutan is a global leader in conservation. The country is home to snow leopards, Bengal tigers, red pandas, one-horned rhinoceroses, golden langurs, and over 600 species of birds.",
  },
];

export default function AboutBhutanPage() {
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
            The Last Shangri-La
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
            About Bhutan
          </h1>
          <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full mb-5" />
          <p className="text-gray-300 font-sans text-lg max-w-2xl mx-auto leading-relaxed">
            A tiny Himalayan kingdom that measures prosperity in happiness, not
            economic output.
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="border-l-4 border-brand-orange pl-7 py-2 mb-10">
              <p className="text-brand-dark font-display text-xl md:text-2xl italic leading-relaxed">
                &ldquo;In today&apos;s world of homogenized cultures and
                contrived re-enactments of outgrown traditions, Bhutan&apos;s
                pure and genuine cultural heritage is a priceless
                jewel.&rdquo;
              </p>
            </div>
            <p className="text-gray-600 font-sans text-lg leading-relaxed">
              Bhutan is unlike any other destination on Earth. A tiny Himalayan
              kingdom that has chosen to measure its success not in economic
              output but in the happiness of its people, the health of its
              forests, and the vitality of its ancient culture. Visiting Bhutan
              is not merely a holiday — it is a transformation.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Sections grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((s, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:shadow-lg hover:border-orange-100 transition-all duration-300 group h-full">
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 group-hover:border-orange-200 group-hover:bg-orange-50 transition-all flex items-center justify-center mb-5 shadow-sm">
                    {s.icon}
                  </div>
                  <h2 className="font-display text-xl font-bold text-brand-dark mb-3">
                    {s.title}
                  </h2>
                  <p className="text-gray-600 font-sans text-sm leading-relaxed mb-4">
                    {s.content}
                  </p>
                  <div className="h-0.5 w-10 bg-brand-orange rounded-full group-hover:w-16 transition-all duration-500" />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Fast facts */}
      <section className="bg-brand-maroon py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="font-display text-3xl font-bold text-white text-center mb-10">
              Bhutan at a Glance
            </h2>
          </FadeUp>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {[
              { value: "38,394", label: "km² Area" },
              { value: "700K+", label: "Population" },
              { value: "60%+", label: "Forest Cover" },
              { value: "600+", label: "Bird Species" },
              { value: "5,000+", label: "Plant Species" },
              { value: "Carbon−", label: "Negative Nation" },
            ].map((f, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="bg-white/10 rounded-xl p-5 border border-white/10">
                  <div className="font-display text-2xl font-bold text-brand-yellow mb-1">
                    {f.value}
                  </div>
                  <div className="text-white text-xs font-sans uppercase tracking-wider opacity-80">
                    {f.label}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <FadeUp>
            <h2 className="font-display text-3xl font-bold text-brand-dark mb-3">
              Ready to Experience Bhutan?
            </h2>
            <p className="text-gray-600 font-sans mb-6">
              Let TTT Tshering Tours & Treks craft your perfect Bhutan journey.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-brand-maroon text-white px-9 py-3.5 rounded-full font-sans font-bold hover:bg-brand-dark transition-colors shadow-md"
            >
              Plan My Trip
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
