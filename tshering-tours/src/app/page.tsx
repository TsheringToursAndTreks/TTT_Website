import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import TestimonialCard from "@/components/TestimonialCard";
import StatsBar from "@/components/StatsBar";
import PrayerFlags from "@/components/PrayerFlags";
import FadeUp from "@/components/FadeUp";

function SectionHeader({
  number,
  kicker,
  title,
  light = false,
}: {
  number: string;
  kicker: string;
  title: string;
  light?: boolean;
}) {
  return (
    <div
      className={`border-b pb-5 mb-14 ${
        light ? "border-white/20" : "border-brand-dark/15"
      }`}
    >
      <p
        className={`font-mono text-[11px] uppercase tracking-[0.3em] mb-4 ${
          light ? "text-brand-yellow" : "text-brand-orange"
        }`}
      >
        {number} / {kicker}
      </p>
      <h2
        className={`font-display text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl ${
          light ? "text-white" : "text-brand-dark"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}

const testimonials = [
  {
    name: "Sarah Johnson",
    country: "United States",
    rating: 5,
    quote:
      "TTT Tshering Tours crafted the most magical journey of my life. Every detail was perfect — from the monastery visits to the family dinners. Bhutan truly changed my perspective on happiness.",
  },
  {
    name: "Thomas Mueller",
    country: "Germany",
    rating: 5,
    quote:
      "Our guide was extraordinary — knowledgeable, warm, and passionate about sharing his country. The Tiger's Nest trek was unforgettable. We will absolutely return.",
  },
  {
    name: "Yuki Tanaka",
    country: "Japan",
    rating: 5,
    quote:
      "Absolutely seamless from start to finish. The cultural immersion was profound, and the landscapes are unlike anywhere else on Earth. I highly recommend TTT for any Bhutan journey.",
  },
];

const whyBhutan = [
  {
    title: "Gross National Happiness",
    desc: "Bhutan measures prosperity not in GDP but in the happiness and well-being of its people — a philosophy you'll feel in every single interaction.",
  },
  {
    title: "Pristine Himalayan Nature",
    desc: "More than 60% of Bhutan is forest-covered, with a constitutional mandate for conservation. Discover glacial valleys, alpine meadows, 600+ bird species, and ancient rivers.",
  },
  {
    title: "A Living Buddhist Culture",
    desc: "Centuries-old dzongs, prayer flags adorning mountain passes, and living monastic traditions make Bhutan a deeply spiritual destination unlike any other on Earth.",
  },
];

const experiences = [
  {
    title: "Cultural Tours",
    duration: "7 nights – 1 month",
    desc: "Sacred dzongs, village ceremonies, Tshechu festivals, and Tiger's Nest — guided by Bhutanese experts who have spent their lives in these valleys.",
  },
  {
    title: "Trekking",
    duration: "2 – 25 days",
    desc: "From gentle Haa valley walks to the legendary Snowman Trek crossing 11 passes above 4,500m — fully supported with guides, cooks, and pack animals.",
  },
  {
    title: "Nature Tours",
    duration: "5 – 14 days",
    desc: "600+ bird species, rare orchids, snow leopards, and red pandas — a world-class biodiversity hotspot explored with expert naturalist guides.",
  },
  {
    title: "Cycling Tours",
    duration: "10 – 15 days",
    desc: "Pedal from the ancient Paro valley through Thimphu, Punakha, and Gangtey to Bumthang — support vehicle carries your luggage throughout.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Stats */}
      <StatsBar />

      {/* Why Bhutan */}
      <section className="py-20 lg:py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeader
              number="01"
              kicker="Why Bhutan"
              title="Why travelers cross the world for this kingdom"
            />
          </FadeUp>
          <div className="divide-y divide-brand-dark/10">
            {whyBhutan.map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
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

      {/* Quote band */}
      <section className="bg-paper-deep border-y border-brand-dark/10 py-20 relative overflow-hidden">
        <span
          aria-hidden="true"
          className="absolute -right-4 -bottom-16 font-tibetan text-[14rem] leading-none text-brand-maroon/8 select-none"
        >
          འབྲུག
        </span>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p
              className="font-tibetan text-brand-maroon text-2xl mb-6"
              aria-hidden="true"
            >
              ༄༅།
            </p>
            <blockquote className="font-display italic text-2xl md:text-3xl text-brand-dark leading-relaxed mb-6">
              In today&apos;s world of homogenized cultures and contrived
              re-enactments of outgrown traditions, Bhutan&apos;s pure and
              genuine cultural heritage is a priceless jewel.
            </blockquote>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gray-500">
              — On the kingdom&apos;s living heritage
            </p>
          </FadeUp>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 lg:py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeader
              number="02"
              kicker="Our Experiences"
              title="Four ways to know Bhutan"
            />
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-dark/15 border border-brand-dark/15">
            {experiences.map((exp, i) => (
              <Link
                key={i}
                href="/activities"
                className="group flex flex-col bg-paper p-7 min-h-72 hover:bg-brand-maroon transition-colors duration-300"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-orange group-hover:text-brand-yellow transition-colors mb-6">
                  {exp.duration}
                </p>
                <h3 className="font-display text-2xl font-semibold text-brand-dark group-hover:text-white transition-colors mb-4">
                  {exp.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/75 transition-colors font-sans text-sm leading-relaxed flex-1">
                  {exp.desc}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-brand-dark group-hover:text-brand-yellow transition-colors">
                  View tours
                  <ArrowUpRight
                    size={13}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeader
              number="03"
              kicker="Our Story"
              title="Built in Thimphu, trusted worldwide"
            />
          </FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <FadeUp className="lg:col-span-7">
              <div>
                <p className="text-gray-600 font-sans leading-relaxed mb-5 text-[17px] first-letter:font-display first-letter:text-6xl first-letter:font-semibold first-letter:text-brand-maroon first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85]">
                  TTT Tshering Tours &amp; Treks was established in 2005 in
                  Thimphu, with the guidance of the Late Dr. Martin Uitz of
                  Austria — the architect of Bhutan&apos;s Tourism Master Plan.
                  For over twenty years we have connected travelers from around
                  the world with Bhutan&apos;s extraordinary culture,
                  landscapes, and people.
                </p>
                <p className="text-gray-600 font-sans leading-relaxed mb-8 text-[17px]">
                  Every journey we craft is personal — tailored to your dates,
                  interests, and pace, in every season, across the whole
                  kingdom.
                </p>
                <p className="font-display italic text-xl text-brand-dark mb-10">
                  — Passang Tshering, Founder
                </p>
                <ul className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray-600 space-y-2 mb-10">
                  {[
                    "Licensed · Tourism Council of Bhutan",
                    "Member · Assoc. of Bhutan Tour Operators",
                    "Established 2005 · Thimphu",
                  ].map((line) => (
                    <li key={line} className="flex items-center gap-3">
                      <span className="text-brand-orange">✦</span>
                      {line}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2.5 bg-brand-maroon text-white px-8 py-4 font-sans font-semibold text-sm tracking-wide hover:bg-brand-dark transition-colors"
                >
                  Meet the team
                  <ArrowRight size={16} />
                </Link>
              </div>
            </FadeUp>
            <FadeUp delay={0.2} className="lg:col-span-5">
              <div className="border border-brand-dark/15 bg-paper-deep/50 p-8 h-full">
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand-orange mb-8">
                  International Partners
                </p>
                <div>
                  {[
                    { name: "Geo Reisen", country: "Germany" },
                    { name: "Die Zeit Reisen", country: "Germany" },
                    { name: "Unique Destinations", country: "United Kingdom" },
                    { name: "Thika Travels", country: "Kenya" },
                  ].map((partner, i) => (
                    <div
                      key={i}
                      className="flex items-baseline justify-between py-4 border-b border-brand-dark/10 last:border-0"
                    >
                      <span className="font-display font-semibold text-brand-dark">
                        {partner.name}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500">
                        {partner.country}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-500 font-sans text-sm mt-8 leading-relaxed">
                  Trusted by leading international travel companies to deliver
                  authentic, unforgettable Bhutan experiences.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-24 bg-paper-deep/60 border-t border-brand-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeader
              number="04"
              kicker="Travelers' Words"
              title="Stories from the kingdom"
            />
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <FadeUp key={i} delay={i * 0.15}>
                <TestimonialCard {...t} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark relative overflow-hidden">
        <PrayerFlags className="text-brand-yellow" />
        <span
          aria-hidden="true"
          className="absolute -right-8 -bottom-20 font-tibetan text-[16rem] leading-none text-brand-yellow/8 select-none"
        >
          བཀྲ་ཤིས
        </span>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <FadeUp>
            <p className="font-mono text-brand-yellow text-[11px] uppercase tracking-[0.3em] mb-6">
              ✦ Start your journey
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6 max-w-3xl">
              Come see the kingdom for yourself.
            </h2>
            <p className="text-gray-300 text-lg mb-12 font-sans max-w-xl leading-relaxed">
              Tell us your dates and interests — we&apos;ll craft an itinerary
              that is yours alone, in any season.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 bg-brand-yellow text-brand-dark px-9 py-4 font-sans font-bold text-sm tracking-wide hover:bg-white transition-colors"
              >
                Get in touch
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/97517115200"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-white/40 text-white px-9 py-4 font-sans font-semibold text-sm tracking-wide hover:bg-white hover:text-brand-dark transition-colors"
              >
                WhatsApp us
              </a>
            </div>
            <p className="font-tibetan text-brand-yellow/60 text-lg mt-14">
              བཀྲ་ཤིས་བདེ་ལེགས།{" "}
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gray-400 ml-3 align-middle">
                Tashi Delek — good fortune on your journey
              </span>
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
