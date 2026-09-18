import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, Plane, Banknote, Lightbulb } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Travel Information | TTT Tshering Tours and Treks",
  description:
    "Everything you need to know before visiting Bhutan — visa requirements, flights, entry process, sustainable development fee, packing tips, and more.",
};

const festivals2025 = [
  { name: "Punakha Drubchen & Tshechu", date: "Feb–Mar", location: "Punakha" },
  { name: "Paro Tshechu", date: "March", location: "Paro" },
  { name: "Gasa Tshechu", date: "March", location: "Gasa" },
  { name: "Rhododendron Festival", date: "April", location: "Thimphu" },
  { name: "Ura Yakchoe", date: "April–May", location: "Bumthang" },
  { name: "Nimalung Tshechu", date: "June", location: "Bumthang" },
  { name: "Kurjey Tshechu", date: "June", location: "Bumthang" },
  { name: "Thimphu Tshechu", date: "September–October", location: "Thimphu" },
  { name: "Wangdue Tshechu", date: "October", location: "Wangdue Phodrang" },
  { name: "Jambay Lhakhang Drup", date: "October–November", location: "Bumthang" },
  { name: "Gomphukora", date: "March", location: "Trashigang" },
  { name: "Chhorten Kora", date: "Feb–March", location: "Trashi Yangtse" },
];

const entryCards = [
  {
    icon: <BadgeCheck size={26} className="text-brand-orange" />,
    iconBg: "bg-orange-50",
    title: "Visa & Entry Clearance",
    content: (
      <>
        <p className="text-gray-600 font-sans text-sm leading-relaxed mb-3">
          Once your travel dates are confirmed, TTT Tshering Tours &amp; Treks
          handles all formalities required for entering Bhutan, including the
          Visa Clearance Letter. All visitors must have this letter before
          departure.
        </p>
        <p className="text-gray-600 font-sans text-sm leading-relaxed">
          Upon arrival at Paro International Airport, the Visa Clearance Letter
          is endorsed by immigration officers, and you will receive your Visa
          Permit. Your guide will escort you through this process seamlessly.
        </p>
      </>
    ),
  },
  {
    icon: <Plane size={26} className="text-brand-orange" />,
    iconBg: "bg-orange-50",
    title: "Flights to Paro",
    content: (
      <>
        <p className="text-gray-600 font-sans text-sm leading-relaxed mb-4">
          The most common method of entering Bhutan is by air into Paro
          International Airport — one of the world&apos;s most dramatic
          landings, surrounded by Himalayan peaks. Two airlines operate
          international routes into Paro:
        </p>
        <ul className="space-y-2.5 text-sm font-sans text-gray-600">
          <li className="flex gap-2.5">
            <span className="text-brand-orange font-bold shrink-0 mt-0.5">→</span>
            <span>
              <strong className="text-brand-dark">Druk Air</strong> —
              Bhutan&apos;s national carrier. Note: Druk Air flights may be
              delayed during the monsoon (July–August). Allow a 24-hour buffer
              before onward connections.
            </span>
          </li>
          <li className="flex gap-2.5">
            <span className="text-brand-orange font-bold shrink-0 mt-0.5">→</span>
            <span>
              <strong className="text-brand-dark">Bhutan Airlines</strong> —
              Private airline with routes from major regional hubs.
            </span>
          </li>
        </ul>
      </>
    ),
  },
  {
    icon: <Banknote size={26} className="text-brand-orange" />,
    iconBg: "bg-orange-50",
    title: "Sustainable Development Fee",
    content: (
      <>
        <p className="text-gray-600 font-sans text-sm leading-relaxed mb-3">
          Bhutan operates a &ldquo;High Value, Low Impact&rdquo; tourism policy.
          All visitors pay a Sustainable Development Fee (SDF) of{" "}
          <strong className="text-brand-maroon">
            $100 USD per person per night
          </strong>{" "}
          (reduced from $200 as of 2024). This fee is included in your tour
          package and supports Bhutan&apos;s healthcare, education, and
          environmental programmes.
        </p>
        <p className="text-gray-600 font-sans text-sm leading-relaxed">
          The SDF is not a barrier — it is an investment in the country you are
          visiting, ensuring Bhutan remains pristine for generations to come.
        </p>
      </>
    ),
  },
  {
    icon: <Lightbulb size={26} className="text-brand-orange" />,
    iconBg: "bg-orange-50",
    title: "Essential Travel Tips",
    content: (
      <ul className="space-y-2.5 text-sm font-sans text-gray-600">
        {[
          "Bhutan has no tobacco sales — it is illegal to buy or sell tobacco products anywhere in the country.",
          "Dress modestly when visiting dzongs and temples; traditional dress (gho/kira) is required in official buildings.",
          "The Bhutanese currency is the Ngultrum (BTN), pegged 1:1 to the Indian Rupee.",
          "Most ATMs are in Thimphu and Paro — carry sufficient cash for rural areas.",
          "Altitude sickness can affect visitors above 3,500m; acclimatise gradually.",
          "Mobile connectivity (Bhutan Telecom / TashiCell) covers most valleys but not all trekking routes.",
        ].map((tip, i) => (
          <li key={i} className="flex gap-2.5">
            <span className="text-brand-orange shrink-0 font-bold mt-0.5">✓</span>
            {tip}
          </li>
        ))}
      </ul>
    ),
  },
];

export default function TravelInformationPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Before You Arrive"
        title="Travel Information"
        description="Visa, flights, sustainable development fee, and everything you need to know before departure."
      />

      {/* Getting into Bhutan */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <p className="text-brand-orange font-sans font-bold uppercase tracking-[0.25em] text-xs mb-3">
                Entry Requirements
              </p>
              <h2 className="font-display text-4xl font-bold text-brand-dark">
                Getting Into Bhutan
              </h2>
              <div className="w-16 h-1 bg-brand-orange mx-auto mt-4 rounded-full" />
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {entryCards.map((card, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:shadow-lg hover:border-orange-100 transition-all duration-300 group h-full">
                  <div
                    className={`w-12 h-12 rounded-xl ${card.iconBg} border border-gray-100 group-hover:border-orange-200 transition-all flex items-center justify-center mb-5`}
                  >
                    {card.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-brand-dark mb-4">
                    {card.title}
                  </h3>
                  {card.content}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Festival Dates */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <p className="text-brand-orange font-sans font-bold uppercase tracking-[0.25em] text-xs mb-3">
                Plan Around the Celebrations
              </p>
              <h2 className="font-display text-4xl font-bold text-brand-dark">
                Key Festival Dates
              </h2>
              <div className="w-16 h-1 bg-brand-orange mx-auto mt-4 rounded-full" />
              <p className="text-gray-500 font-sans text-sm mt-4 max-w-xl mx-auto">
                Tshechu festivals are among the world&apos;s most extraordinary
                cultural spectacles. Timing your visit with one is highly
                recommended — contact us for exact dates for your travel year.
              </p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {festivals2025.map((f, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div className="bg-white rounded-xl border border-gray-100 hover:shadow-md hover:border-orange-100 transition-all duration-300 p-5">
                  <h4 className="font-display font-bold text-brand-dark text-sm mb-1">
                    {f.name}
                  </h4>
                  <p className="text-brand-orange font-sans text-xs font-bold">
                    {f.date}
                  </p>
                  <p className="text-gray-400 font-sans text-xs mt-0.5">
                    {f.location}
                  </p>
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
              Have More Questions?
            </h2>
            <p className="text-gray-300 font-sans mb-6">
              Our team in Thimphu will answer every question about entry,
              health, packing, and timing — within 24 hours.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-brand-yellow text-brand-dark px-9 py-3.5 rounded-full font-sans font-bold hover:bg-white transition-colors"
            >
              Ask Us Anything
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
