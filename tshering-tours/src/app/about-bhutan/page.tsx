import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";
import PrayerFlags from "@/components/PrayerFlags";

export const metadata: Metadata = {
  title: "About Bhutan | TTT Tshering Tours and Treks",
  description:
    "Learn about the Kingdom of Bhutan — its Gross National Happiness philosophy, Buddhist culture, pristine nature, people, food, and traditions.",
};

const sections = [
  {
    title: "Geography & Climate",
    caption: "A glacial river threads the valley floor",
    image: "/img/river-valley.jpg",
    alt: "A river running through a forested Himalayan valley in Bhutan",
    content:
      "The Kingdom of Bhutan is a small, landlocked country nestled in the eastern Himalayas between India and China. Despite its modest size, Bhutan encompasses an extraordinary range of ecosystems — from subtropical plains in the south rising to glacial peaks above 7,000 metres in the north. More than 60% of the country is covered by forest, with a constitutional requirement that this figure never fall below that threshold.",
  },
  {
    title: "Religion",
    caption: "A monk in the dzong corridors",
    image: "/img/monk-dzong.jpg",
    alt: "A Buddhist monk in red robes walking through a dzong hallway",
    content:
      "Mahayana Buddhism is deeply rooted in every aspect of Bhutanese life. Introduced in the 8th century by Guru Rinpoche (Padmasambhava), it influences architecture, governance, festivals, and daily existence. Dzongs — fortress-monasteries — serve as both administrative and religious centres in every district. Prayer flags flutter from mountain passes, and the sound of monks chanting is as common as birdsong.",
  },
  {
    title: "Culture & Traditions",
    caption: "Masked dancers at a tshechu festival",
    image: "/img/tshechu-dance.jpg",
    alt: "Bhutanese dancers in traditional costume performing at a tshechu festival",
    content:
      "Bhutan has consciously chosen to preserve its cultural heritage in the face of globalisation. Traditional dress — the gho for men and kira for women — is mandatory in government buildings and dzongs. The government carefully manages foreign cultural influence, and traditional arts (the Zorig Chusum — 13 traditional crafts) are taught in dedicated schools. Bhutan's annual tsechu festivals are living religious theatre, performed by monks in elaborate masks and costumes.",
  },
  {
    title: "People & Society",
    caption: "A farmer of the Punakha valley",
    image: "/img/punakha-farmer.jpg",
    alt: "A Bhutanese woman in a traditional straw hat in the Punakha valley",
    content:
      "Bhutan is a relatively egalitarian society where women enjoy equal rights with men in every respect. There is no rigid caste system; social mobility is possible regardless of origin. The Bhutanese people are renowned across the world for their warmth, hospitality, and genuine contentment. Bhutan has no significant crime, no pollution crisis, and no homeless population — qualities that flow directly from the country's values and governance philosophy.",
  },
  {
    title: "Food & Cuisine",
    caption: "Chillies drying in the sun — a vegetable, not a spice",
    image: "/img/chillies.jpg",
    alt: "Bunches of dried red chillies hanging outdoors in Bhutan",
    content:
      "A traditional Bhutanese meal centres on red rice and chillies. The national dish is Ema Datshi — chillies cooked in a sauce of local cheese — where chillies function as a vegetable rather than a seasoning. Buckwheat pancakes, yak meat, and fresh river fish are common in rural areas. An important note for visitors: it is illegal in Bhutan to sell or buy tobacco products, and smoking in public places is strictly banned.",
  },
  {
    title: "Gross National Happiness",
    caption: "Prayer flags on a mountain pass",
    image: "/img/prayer-flags-chelela.jpg",
    alt: "Colourful prayer flags strung across a Himalayan mountain pass",
    content:
      "Bhutan's Fourth King, His Majesty Jigme Singye Wangchuck, famously declared that 'Gross National Happiness is more important than Gross National Product.' This philosophy — now enshrined in Bhutan's constitution — measures national progress across four pillars: sustainable socioeconomic development, environmental conservation, preservation of culture, and good governance. It is not a vague aspiration; GNH shapes every major policy decision the government makes.",
  },
  {
    title: "Environment & Conservation",
    caption: "Old-growth forest covers most of the kingdom",
    image: "/img/forest-pond.jpg",
    alt: "A still pond in the middle of a pristine Bhutanese forest",
    content:
      "Bhutan is the world's only carbon-negative country — it absorbs more carbon dioxide than it produces. With over 70% forest cover, numerous protected areas covering more than half the country, and a constitutional environmental mandate, Bhutan is a global leader in conservation. The country is home to snow leopards, Bengal tigers, red pandas, one-horned rhinoceroses, golden langurs, and over 600 species of birds.",
  },
];

function FramedImage({
  src,
  alt,
  caption,
  priority = false,
}: {
  src: string;
  alt: string;
  caption: string;
  priority?: boolean;
}) {
  return (
    <figure>
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute -right-3 -bottom-3 w-full h-full border border-brand-maroon/40"
        />
        <div className="relative aspect-4/3 overflow-hidden bg-brand-dark">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>
      </div>
      <figcaption className="flex items-center gap-3 mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500">
        <span className="text-brand-orange">✦</span>
        {caption}
      </figcaption>
    </figure>
  );
}

export default function AboutBhutanPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="The Last Shangri-La"
        title="About Bhutan"
        description="A tiny Himalayan kingdom that measures prosperity in happiness, not economic output."
      />

      {/* Intro — quote beside the Tiger's Nest */}
      <section className="py-20 lg:py-24 bg-paper overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <FadeUp className="lg:col-span-7">
              <div>
                <p
                  className="font-tibetan text-brand-maroon text-2xl mb-6"
                  aria-hidden="true"
                >
                  ༄༅།
                </p>
                <blockquote className="font-display italic text-2xl md:text-3xl text-brand-dark leading-relaxed mb-8">
                  In today&apos;s world of homogenized cultures and contrived
                  re-enactments of outgrown traditions, Bhutan&apos;s pure and
                  genuine cultural heritage is a priceless jewel.
                </blockquote>
                <p className="text-gray-600 font-sans text-lg leading-relaxed">
                  Bhutan is unlike any other destination on Earth. A tiny
                  Himalayan kingdom that has chosen to measure its success not
                  in economic output but in the happiness of its people, the
                  health of its forests, and the vitality of its ancient
                  culture. Visiting Bhutan is not merely a holiday — it is a
                  transformation.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15} className="lg:col-span-5">
              <figure className="max-w-sm mx-auto lg:max-w-none">
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute -right-4 -top-4 w-full h-full rounded-t-full border border-brand-maroon/40"
                  />
                  <div className="relative rounded-t-full overflow-hidden aspect-3/4 bg-brand-dark">
                    <Image
                      src="/img/tigers-nest.jpg"
                      alt="Paro Taktsang, the Tiger's Nest monastery, clinging to a cliff face"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 1024px) 24rem, 40vw"
                    />
                    <div className="absolute inset-0 bg-brand-maroon/15 mix-blend-multiply" />
                  </div>
                  <PrayerFlags
                    count={16}
                    className="absolute top-14 -left-6 -right-8 text-brand-dark -rotate-6"
                  />
                </div>
                <figcaption className="flex items-baseline justify-between mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  <span>Taktsang — the Tiger&apos;s Nest</span>
                  <span>Paro Valley</span>
                </figcaption>
              </figure>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Sections — alternating editorial rows */}
      <section className="py-20 lg:py-24 bg-paper border-t border-brand-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="border-b border-brand-dark/15 pb-5 mb-16">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand-orange mb-4">
                01 / The Kingdom
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-brand-dark max-w-3xl">
                Seven things to understand about Bhutan
              </h2>
            </div>
          </FadeUp>
          <div className="space-y-20 lg:space-y-24">
            {sections.map((s, i) => (
              <FadeUp key={i}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                  <div
                    className={`lg:col-span-6 ${
                      i % 2 === 1 ? "lg:order-2 lg:col-start-7" : ""
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="block font-display italic text-5xl text-brand-maroon/25 leading-none mb-5"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-3xl font-semibold text-brand-dark mb-5">
                      {s.title}
                    </h3>
                    <p className="text-gray-600 font-sans leading-relaxed">
                      {s.content}
                    </p>
                  </div>
                  <div
                    className={`lg:col-span-5 ${
                      i % 2 === 1 ? "lg:order-1 lg:col-start-1" : "lg:col-start-8"
                    }`}
                  >
                    <FramedImage src={s.image} alt={s.alt} caption={s.caption} />
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Fast facts */}
      <section className="bg-brand-maroon py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="font-mono text-brand-yellow text-[11px] uppercase tracking-[0.3em] mb-10">
              02 / Bhutan at a glance
            </p>
          </FadeUp>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-10">
            {[
              { value: "38,394", label: "km² Area" },
              { value: "700K+", label: "Population" },
              { value: "60%+", label: "Forest Cover" },
              { value: "600+", label: "Bird Species" },
              { value: "5,000+", label: "Plant Species" },
              { value: "Carbon−", label: "Negative Nation" },
            ].map((f, i) => (
              <FadeUp key={i} delay={i * 0.06}>
                <div className="border-l border-white/20 pl-5">
                  <div className="font-mono text-2xl md:text-3xl text-brand-yellow mb-2">
                    {f.value}
                  </div>
                  <div className="font-mono text-white/70 text-[10px] uppercase tracking-[0.2em]">
                    {f.label}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-brand-dark mb-4">
              Ready to experience Bhutan?
            </h2>
            <p className="text-gray-600 font-sans text-lg mb-8 max-w-xl">
              Let TTT Tshering Tours &amp; Treks craft your perfect Bhutan
              journey.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-brand-maroon text-white px-8 py-4 font-sans font-semibold text-sm tracking-wide hover:bg-brand-dark transition-colors"
            >
              Plan my trip
              <ArrowRight size={16} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
