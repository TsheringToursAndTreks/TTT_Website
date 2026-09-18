import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";
import PrayerFlags from "@/components/PrayerFlags";

export const metadata: Metadata = {
  title: "About Us | TTT Tshering Tours and Treks",
  description:
    "Licensed Bhutanese tour operator based in Thimphu, Bhutan. Established in 2005 with 20+ years crafting authentic Himalayan travel experiences.",
};

const values = [
  {
    title: "Local Expertise",
    desc: "As native Bhutanese, we offer unparalleled insider knowledge of hidden gems, local customs, and authentic experiences that larger operators simply cannot provide.",
  },
  {
    title: "Personalized Service",
    desc: "Every traveler is unique. We design bespoke itineraries tailored to your interests, fitness level, and budget, from luxury lodges to authentic cultural homestays.",
  },
  {
    title: "Sustainable Tourism",
    desc: "We fully embrace Bhutan's 'High Value, Low Impact' tourism philosophy, prioritising eco-friendly practices and ensuring every visit benefits local communities.",
  },
  {
    title: "Global Partnerships",
    desc: "Trusted by leading international travel agencies across Europe and beyond, bringing Bhutan to travelers from four continents.",
  },
];

const team = [
  {
    initials: "TW",
    name: "Tshering Wangdi",
    role: "Founder & Owner",
    bio: "Born and raised in Bhutan, Tshering Wangdi established TTT Tshering Tours & Treks in 2005 with a vision to share his homeland's extraordinary culture and landscapes with the world. His deep connections across Bhutan ensure every journey goes beyond the tourist trail.",
  },
  {
    initials: "རི",
    name: "Our Trekking Guides",
    role: "Certified Mountain Guides",
    bio: "Our treks are led by certified Bhutanese mountain guides with deep experience of the kingdom's trails, from gentle valley walks to the high passes of the Chomolhari and Snowman routes, supported by cooks and horsemen from the villages along the way.",
  },
  {
    initials: "ལམ",
    name: "Our Cultural Guides",
    role: "Licensed by the Tourism Council",
    bio: "Every cultural journey is accompanied by a licensed Bhutanese guide, a storyteller who brings the kingdom's history, Buddhist art, festivals, and living traditions vividly to life in fluent English.",
  },
];

const partners = [
  { name: "Geo Reisen", country: "Austria" },
  { name: "Die Zeit Reisen", country: "Germany" },
  { name: "Unique Destinations", country: "South Africa" },
  { name: "Thika Travels", country: "Netherlands" },
];

function SectionHeader({
  number,
  kicker,
  title,
}: {
  number: string;
  kicker: string;
  title: string;
}) {
  return (
    <div className="border-b border-brand-dark/15 pb-5 mb-14">
      <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand-orange mb-4">
        {number} / {kicker}
      </p>
      <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-brand-dark max-w-3xl">
        {title}
      </h2>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Our Story"
        title="About Us"
        description="Born in Bhutan, crafting authentic Himalayan journeys since 2005."
      />

      {/* Story */}
      <section className="py-20 lg:py-24 bg-paper overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeader
              number="01"
              kicker="Who We Are"
              title="Born in Bhutan, built for you"
            />
          </FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <FadeUp className="lg:col-span-7">
              <div>
                <p
                  className="font-tibetan text-brand-maroon text-2xl mb-6"
                  aria-hidden="true"
                >
                  ༄༅།
                </p>
                <p className="text-gray-600 font-sans leading-relaxed mb-5 text-[17px] first-letter:font-display first-letter:text-6xl first-letter:font-semibold first-letter:text-brand-maroon first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85]">
                  TTT Tshering Tours &amp; Treks was established in 2005 with
                  the technical expertise of its adviser, the Late Dr. Martin
                  Uitz of Austria, who was instrumental in drafting
                  Bhutan&apos;s Tourism Master Plan from 2003 to 2005. From
                  those expert foundations, we have grown into one of
                  Bhutan&apos;s most trusted tour operators.
                </p>
                <p className="text-gray-600 font-sans leading-relaxed mb-5 text-[17px]">
                  Based in Thimphu, the heart of Bhutan, we specialise in
                  creating authentic, immersive travel experiences across all
                  regions of the kingdom, from the western valleys of Paro and
                  Punakha to the remote eastern districts of Trashigang and
                  Trashiyangtse.
                </p>
                <p className="text-gray-600 font-sans leading-relaxed mb-8 text-[17px]">
                  Every journey we craft is a personal story, shaped by your
                  interests, your pace, and your desire to truly know Bhutan.
                </p>
                <p className="font-display italic text-xl text-brand-dark mb-10">
                  Tshering Wangdi, Founder &amp; Owner
                </p>
                <ul className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray-600 space-y-2">
                  {[
                    "Established 2005 · Thimphu",
                    "Adviser · Late Dr. Martin Uitz, Austria",
                    "All regions · All seasons",
                  ].map((line) => (
                    <li key={line} className="flex items-center gap-3">
                      <span className="text-brand-orange">✦</span>
                      {line}
                    </li>
                  ))}
                </ul>
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
                      src="/img/buddha-dordenma.jpg"
                      alt="The great Buddha Dordenma statue above Thimphu"
                      fill
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
                  <span>Buddha Dordenma</span>
                  <span>Thimphu · our home</span>
                </figcaption>
              </figure>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-24 bg-paper-deep/60 border-y border-brand-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeader
              number="02"
              kicker="What Drives Us"
              title="Four promises we make to every traveler"
            />
          </FadeUp>
          <div className="divide-y divide-brand-dark/10">
            {values.map((item, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 items-baseline">
                  <span
                    aria-hidden="true"
                    className="md:col-span-2 font-display italic text-6xl text-brand-maroon/25 leading-none"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="md:col-span-4 font-display text-2xl font-semibold text-brand-dark">
                    {item.title}
                  </h3>
                  <p className="md:col-span-6 text-gray-600 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeader
              number="03"
              kicker="The People Behind Your Journey"
              title="Meet our team"
            />
          </FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <FadeUp className="lg:col-span-5">
              <figure className="max-w-sm mx-auto lg:mx-0 lg:sticky lg:top-28">
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute -right-3 -bottom-3 w-full h-full border border-brand-maroon/40"
                  />
                  <div className="relative aspect-square overflow-hidden bg-brand-dark">
                    <Image
                      src="/ourteam.jpg"
                      alt="The TTT Tshering Tours team in traditional gho, holding the company sign"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 24rem, 24rem"
                    />
                  </div>
                </div>
                <figcaption className="flex items-center gap-3 mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  <span className="text-brand-orange">✦</span>
                  The TTT team · Thimphu
                </figcaption>
              </figure>
            </FadeUp>
            <div className="lg:col-span-7 space-y-12">
              {team.map((member, i) => (
                <FadeUp key={i} delay={i * 0.1}>
                  <article className="border-t-2 border-brand-maroon pt-6">
                    <div className="w-14 h-14 bg-brand-maroon flex items-center justify-center mb-5">
                      <span
                        className={`text-lg font-semibold text-brand-yellow ${
                          member.initials.charCodeAt(0) > 127
                            ? "font-tibetan"
                            : "font-display"
                        }`}
                      >
                        {member.initials}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-brand-dark">
                      {member.name}
                    </h3>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-orange mt-2 mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed font-sans">
                      {member.bio}
                    </p>
                  </article>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* International Partners */}
      <section className="py-20 lg:py-24 bg-paper-deep/60 border-t border-brand-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeader
              number="04"
              kicker="Trusted Worldwide"
              title="International partners"
            />
          </FadeUp>
          <div className="max-w-3xl">
            {partners.map((p, i) => (
              <FadeUp key={i} delay={i * 0.06}>
                <div className="flex items-baseline justify-between py-5 border-b border-brand-dark/10 last:border-0">
                  <span className="font-display text-xl font-semibold text-brand-dark">
                    {p.name}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500">
                    {p.country}
                  </span>
                </div>
              </FadeUp>
            ))}
            <p className="text-gray-500 font-sans text-sm mt-8 leading-relaxed">
              Trusted by leading international travel companies to deliver
              authentic, unforgettable Bhutan experiences.
            </p>
          </div>
        </div>
      </section>

      {/* License */}
      <section className="bg-brand-maroon relative overflow-hidden">
        <PrayerFlags className="text-brand-yellow" />
        <span
          aria-hidden="true"
          className="absolute -right-8 -bottom-20 font-tibetan text-[14rem] leading-none text-brand-yellow/10 select-none"
        >
          འབྲུག
        </span>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <FadeUp>
            <p className="font-mono text-brand-yellow text-[11px] uppercase tracking-[0.3em] mb-6">
              ✦ Official Registrations
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6 max-w-2xl">
              Licensed &amp; certified since 2005
            </h2>
            <ul className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray-300 space-y-2.5 mb-8">
              {[
                "Tourism Council of Bhutan",
                "Association of Bhutan Tour Operators (ABTO)",
              ].map((cert) => (
                <li key={cert} className="flex items-center gap-3">
                  <span className="text-brand-yellow">✓</span>
                  {cert}
                </li>
              ))}
            </ul>
            <p className="text-gray-300 font-sans leading-relaxed max-w-xl mb-10">
              We operate fully in compliance with Bhutan&apos;s tourism
              regulations, ensuring your journey is safe, legal, and
              contributes to the nation&apos;s Gross National Happiness goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-brand-yellow text-brand-dark px-9 py-4 font-sans font-bold text-sm tracking-wide hover:bg-white transition-colors"
            >
              Start planning your trip
              <ArrowRight size={16} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
