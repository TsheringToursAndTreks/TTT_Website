import type { Metadata } from "next";
import Link from "next/link";
import { Award, Users, Leaf, Globe } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Us | TTT Tshering Tours and Treks",
  description:
    "Licensed Bhutanese tour operator based in Thimphu, Bhutan. Established in 2005 with 20+ years crafting authentic Himalayan travel experiences.",
};

const values = [
  {
    icon: <Award size={26} className="text-brand-orange" />,
    title: "Local Expertise",
    desc: "As native Bhutanese, we offer unparalleled insider knowledge of hidden gems, local customs, and authentic experiences that larger operators simply cannot provide.",
  },
  {
    icon: <Users size={26} className="text-brand-orange" />,
    title: "Personalized Service",
    desc: "Every traveler is unique. We design bespoke itineraries tailored to your interests, fitness level, and budget — from luxury lodges to authentic cultural homestays.",
  },
  {
    icon: <Leaf size={26} className="text-brand-orange" />,
    title: "Sustainable Tourism",
    desc: "We fully embrace Bhutan's 'High Value, Low Impact' tourism philosophy, prioritising eco-friendly practices and ensuring every visit benefits local communities.",
  },
  {
    icon: <Globe size={26} className="text-brand-orange" />,
    title: "Global Partnerships",
    desc: "Trusted by leading international travel agencies in Austria, Germany, South Africa, and the Netherlands — bringing Bhutan to travelers across four continents.",
  },
];

const team = [
  {
    initials: "PT",
    name: "Passang Tshering",
    role: "Founder & Managing Director",
    bio: "Born and raised in Bhutan, Passang established TTT Tshering Tours & Treks in 2005 with a vision to share his homeland's extraordinary culture and landscapes with the world. His deep connections across Bhutan ensure every journey goes beyond the tourist trail.",
  },
  {
    initials: "KD",
    name: "Karma Dorji",
    role: "Senior Trekking Guide",
    bio: "Certified high-altitude mountain guide with extensive expertise in Bhutan's most demanding trails — from the Chomolhari Base Camp to the legendary Snowman Trek across the Lunana wilderness.",
  },
  {
    initials: "PL",
    name: "Pema Lhamo",
    role: "Cultural Guide & Interpreter",
    bio: "A passionate storyteller fluent in four languages, Pema brings Bhutanese history, Buddhist art, and living traditions vividly to life for visitors from around the world.",
  },
];

const partners = [
  { name: "Geo Reisen", country: "Austria" },
  { name: "Die Zeit Reisen", country: "Germany" },
  { name: "Unique Destinations", country: "South Africa" },
  { name: "Thika Travels", country: "Netherlands" },
];

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
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-brand-orange font-sans font-bold uppercase tracking-[0.25em] text-xs mb-3 text-center">
              Who We Are
            </p>
            <h2 className="font-display text-4xl font-bold text-brand-dark mb-10 text-center">
              Born in Bhutan, Built for You
            </h2>

            <div className="border-l-4 border-brand-orange pl-7 py-2 mb-10">
              <p className="text-brand-dark font-display text-xl italic leading-relaxed">
                &ldquo;In today&apos;s world of homogenized cultures and
                contrived re-enactments of outgrown traditions, Bhutan&apos;s
                pure and genuine cultural heritage is a priceless jewel.&rdquo;
              </p>
            </div>

            <div className="space-y-5 text-gray-600 font-sans text-lg leading-relaxed">
              <p>
                TTT Tshering Tours & Treks was established in{" "}
                <strong className="text-brand-dark">2005</strong> with the
                technical expertise of its adviser, the Late Dr. Martin Uitz of
                Austria, who was instrumental in drafting Bhutan&apos;s Tourism
                Master Plan from 2003 to 2005. From those expert foundations, we
                have grown into one of Bhutan&apos;s most trusted tour operators.
              </p>
              <p>
                Based in <strong className="text-brand-dark">Thimphu</strong>,
                the heart of Bhutan, we specialise in creating authentic,
                immersive travel experiences across all regions of the kingdom —
                from the western valleys of Paro and Punakha to the remote
                eastern districts of Trashigang and Trashiyangtse.
              </p>
              <p>
                Every journey we craft is a personal story — shaped by your
                interests, your pace, and your desire to truly know Bhutan.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <p className="text-brand-orange font-sans font-bold uppercase tracking-[0.25em] text-xs mb-3">
                What Drives Us
              </p>
              <h2 className="font-display text-4xl font-bold text-brand-dark">
                Our Values
              </h2>
              <div className="w-16 h-1 bg-brand-orange mx-auto mt-4 rounded-full" />
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {values.map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-lg hover:border-orange-100 transition-all duration-300 group h-full">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 group-hover:bg-orange-100 transition-colors flex items-center justify-center mb-5">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-lg font-bold text-brand-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-sans mb-4">
                    {item.desc}
                  </p>
                  <div className="h-0.5 w-10 bg-brand-orange rounded-full group-hover:w-16 transition-all duration-500" />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <p className="text-brand-orange font-sans font-bold uppercase tracking-[0.25em] text-xs mb-3">
                The People Behind Your Journey
              </p>
              <h2 className="font-display text-4xl font-bold text-brand-dark">
                Meet Our Team
              </h2>
              <div className="w-16 h-1 bg-brand-orange mx-auto mt-4 rounded-full" />
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {team.map((member, i) => (
              <FadeUp key={i} delay={i * 0.15}>
                <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:shadow-lg hover:border-orange-100 transition-all duration-300 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-brand-maroon/10 border border-brand-maroon/20 flex items-center justify-center mb-5">
                    <span className="font-display text-xl font-bold text-brand-maroon">
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-brand-dark mb-0.5">
                    {member.name}
                  </h3>
                  <p className="text-brand-orange font-sans font-semibold text-xs uppercase tracking-wider mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed font-sans">
                    {member.bio}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* International Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <p className="text-brand-orange font-sans font-bold uppercase tracking-[0.25em] text-xs mb-3">
                Trusted Worldwide
              </p>
              <h2 className="font-display text-3xl font-bold text-brand-dark">
                International Partners
              </h2>
              <div className="w-16 h-1 bg-brand-orange mx-auto mt-4 rounded-full" />
            </div>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {partners.map((p, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-7 text-center border border-gray-100 hover:shadow-md hover:border-orange-100 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 group-hover:bg-orange-100 transition-colors flex items-center justify-center mx-auto mb-3">
                    <Globe size={18} className="text-brand-orange" />
                  </div>
                  <p className="font-display font-bold text-brand-dark text-sm mb-0.5">
                    {p.name}
                  </p>
                  <p className="text-gray-400 text-xs font-sans">{p.country}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* License */}
      <section className="bg-brand-maroon py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-brand-yellow -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-white translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <FadeUp>
            <div className="border border-brand-yellow/30 rounded-2xl px-8 py-10">
              <p className="text-brand-yellow font-sans font-bold uppercase tracking-[0.25em] text-xs mb-3">
                Official Registrations
              </p>
              <h3 className="font-display text-2xl font-bold text-white mb-6">
                Licensed & Certified Since 2005
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                {["Tourism Council of Bhutan", "Association of Bhutan Tour Operators (ABTO)"].map((cert) => (
                  <span key={cert} className="inline-flex items-center gap-2 text-sm text-gray-200 font-sans">
                    <span className="text-brand-yellow">✓</span> {cert}
                  </span>
                ))}
              </div>
              <p className="text-gray-300 font-sans text-sm leading-relaxed max-w-lg mx-auto mb-8">
                We operate fully in compliance with Bhutan&apos;s tourism
                regulations, ensuring your journey is safe, legal, and
                contributes to the nation&apos;s Gross National Happiness goals.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-brand-yellow text-brand-dark px-9 py-3.5 rounded-full font-sans font-bold hover:bg-white transition-colors"
              >
                Start Planning Your Trip
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
