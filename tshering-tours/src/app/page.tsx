import Link from "next/link";
import { Mountain, Heart, BookOpen, Landmark, Leaf, Bike } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import TestimonialCard from "@/components/TestimonialCard";
import StatsBar from "@/components/StatsBar";
import FadeUp from "@/components/FadeUp";

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
    icon: <Heart size={28} className="text-brand-orange" />,
    title: "Gross National Happiness",
    desc: "Bhutan measures prosperity not in GDP but in the happiness and well-being of its people — a philosophy you'll feel in every single interaction.",
  },
  {
    icon: <Mountain size={28} className="text-brand-orange" />,
    title: "Pristine Himalayan Nature",
    desc: "More than 60% of Bhutan is forest-covered, with a constitutional mandate for conservation. Discover glacial valleys, alpine meadows, 600+ bird species, and ancient rivers.",
  },
  {
    icon: <BookOpen size={28} className="text-brand-orange" />,
    title: "Rich Buddhist Culture",
    desc: "Centuries-old dzongs, prayer flags adorning mountain passes, and living monastic traditions make Bhutan a deeply spiritual destination unlike any other on Earth.",
  },
];

const experiences = [
  {
    icon: <Landmark size={30} className="text-brand-orange" />,
    title: "Cultural Tours",
    duration: "7 nights – 1 month",
    desc: "Sacred dzongs, village ceremonies, Tshechu festivals, and Tiger's Nest — guided by Bhutanese experts who have spent their lives in these valleys.",
  },
  {
    icon: <Mountain size={30} className="text-brand-orange" />,
    title: "Trekking",
    duration: "2 – 25 days",
    desc: "From gentle Haa valley walks to the legendary Snowman Trek crossing 11 passes above 4,500m — fully supported with guides, cooks, and pack animals.",
  },
  {
    icon: <Leaf size={30} className="text-brand-orange" />,
    title: "Nature Tours",
    duration: "5 – 14 days",
    desc: "600+ bird species, rare orchids, snow leopards, and red pandas — a world-class biodiversity hotspot explored with expert naturalist guides.",
  },
  {
    icon: <Bike size={30} className="text-brand-orange" />,
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16">
              <p className="text-brand-orange font-sans font-bold uppercase tracking-[0.25em] text-xs mb-3">
                Why Visit
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-dark">
                The Magic of Bhutan
              </h2>
              <div className="w-16 h-1 bg-brand-orange mx-auto mt-4 rounded-full" />
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyBhutan.map((item, i) => (
              <FadeUp key={i} delay={i * 0.15}>
                <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:shadow-lg hover:border-orange-100 transition-all duration-300 group h-full">
                  <div className="w-14 h-14 rounded-xl bg-white border border-gray-200 group-hover:border-orange-200 group-hover:bg-orange-50 transition-all flex items-center justify-center mb-6 shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-brand-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-sans mb-5">
                    {item.desc}
                  </p>
                  <div className="h-0.5 w-10 bg-brand-orange rounded-full group-hover:w-16 transition-all duration-500" />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeUp>
            <p
              className="font-display text-7xl text-brand-yellow/20 leading-none select-none"
              aria-hidden="true"
            >
              &ldquo;
            </p>
            <blockquote className="font-display text-xl md:text-2xl italic text-white leading-relaxed -mt-4">
              In today&apos;s world of homogenized cultures and contrived
              re-enactments of outgrown traditions, Bhutan&apos;s pure and
              genuine cultural heritage is a priceless jewel.
            </blockquote>
          </FadeUp>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16">
              <p className="text-brand-orange font-sans font-bold uppercase tracking-[0.25em] text-xs mb-3">
                Our Experiences
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-dark">
                What We Offer
              </h2>
              <div className="w-16 h-1 bg-brand-orange mx-auto mt-4 rounded-full" />
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((exp, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <Link
                  href="/activities"
                  className="group block bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:border-orange-200 transition-all duration-300 h-full"
                >
                  <div className="w-14 h-14 rounded-xl bg-orange-50 group-hover:bg-orange-100 transition-colors flex items-center justify-center mb-5">
                    {exp.icon}
                  </div>
                  <h3 className="font-display text-lg font-bold text-brand-dark mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-brand-orange font-sans text-xs font-semibold uppercase tracking-wider mb-3">
                    {exp.duration}
                  </p>
                  <p className="text-gray-600 font-sans text-sm leading-relaxed">
                    {exp.desc}
                  </p>
                </Link>
              </FadeUp>
            ))}
          </div>
          <FadeUp>
            <div className="text-center mt-10">
              <Link
                href="/activities"
                className="inline-block bg-brand-maroon text-white px-9 py-3.5 rounded-full font-sans font-bold hover:bg-brand-dark transition-colors shadow-md"
              >
                View All Activities
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* About TTT */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div>
                <p className="text-brand-orange font-sans font-bold uppercase tracking-[0.25em] text-xs mb-3">
                  Established 2005
                </p>
                <h2 className="font-display text-4xl font-bold text-brand-dark mb-6">
                  Your Trusted Bhutan Specialist
                </h2>
                <p className="text-gray-600 font-sans leading-relaxed mb-4 text-[15px]">
                  TTT Tshering Tours & Treks was established in{" "}
                  <strong>2005</strong> in Thimphu, Bhutan, with the guidance of
                  the Late Dr. Martin Uitz of Austria — the architect of
                  Bhutan&apos;s Tourism Master Plan. For over 20 years, we have
                  been connecting travelers from around the world with
                  Bhutan&apos;s extraordinary culture, landscapes, and people.
                </p>
                <p className="text-gray-600 font-sans leading-relaxed mb-8 text-[15px]">
                  Every journey we craft is personal — tailored to your dates,
                  interests, and pace, available across all seasons throughout
                  the kingdom.
                </p>
                <div className="flex flex-wrap gap-2.5 mb-8">
                  {[
                    "Tourism Council of Bhutan",
                    "ABTO Member",
                    "Est. 2005",
                  ].map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-1.5 bg-green-50 text-green-800 text-xs font-sans font-semibold px-3 py-1.5 rounded-full border border-green-200"
                    >
                      <span className="text-green-600">✓</span> {badge}
                    </span>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-block bg-brand-orange text-white px-8 py-3.5 rounded-full font-sans font-bold hover:bg-brand-red transition-colors shadow-md"
                >
                  Plan Your Journey
                </Link>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <h4 className="font-display text-lg font-bold text-brand-dark mb-6">
                  International Partners
                </h4>
                <div className="space-y-1">
                  {[
                    { name: "Geo Reisen", country: "Germany" },
                    { name: "Die Zeit Reisen", country: "Germany" },
                    { name: "Unique Destinations", country: "United Kingdom" },
                    { name: "Thika Travels", country: "Kenya" },
                  ].map((partner, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-3.5 border-b border-gray-200 last:border-0"
                    >
                      <span className="font-display font-bold text-brand-dark text-sm">
                        {partner.name}
                      </span>
                      <span className="text-gray-400 font-sans text-xs bg-gray-100 px-2.5 py-1 rounded-full">
                        {partner.country}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-500 font-sans text-xs mt-6 leading-relaxed">
                  Trusted by leading international travel companies to deliver
                  authentic, unforgettable Bhutan experiences.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16">
              <p className="text-brand-orange font-sans font-bold uppercase tracking-[0.25em] text-xs mb-3">
                What Travelers Say
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-dark">
                Stories from the Kingdom
              </h2>
              <div className="w-16 h-1 bg-brand-orange mx-auto mt-4 rounded-full" />
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeUp key={i} delay={i * 0.15}>
                <TestimonialCard {...t} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-maroon py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-brand-yellow -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brand-orange translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <FadeUp>
            <p className="text-brand-yellow font-sans font-bold uppercase tracking-[0.25em] text-xs mb-4">
              Start Your Journey
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              Plan Your Dream Bhutan
              <br />
              Trip Today
            </h2>
            <p className="text-gray-300 text-lg mb-10 font-sans max-w-xl mx-auto leading-relaxed">
              Let us craft a journey that transforms your life. Every trip is
              tailor-made just for you — available across all seasons.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-brand-yellow text-brand-dark px-10 py-4 rounded-full font-sans font-bold text-lg hover:bg-white transition-colors duration-300 shadow-lg"
              >
                Get In Touch
              </Link>
              <a
                href="https://wa.me/97517115200"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-sans font-bold text-lg hover:bg-white hover:text-brand-dark transition-all duration-300"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
