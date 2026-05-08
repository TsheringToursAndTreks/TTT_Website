import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Clock, Phone } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | TTT Tshering Tours and Treks",
  description:
    "Get in touch with TTT Tshering Tours and Treks in Thimphu, Bhutan. Call +975 17115200, email ttt.wangdi@gmail.com, or WhatsApp us.",
};

const contactItems = [
  {
    icon: <Phone size={20} className="text-brand-orange" />,
    label: "Phone",
    content: (
      <div>
        <a
          href="tel:+97517115200"
          className="text-brand-dark font-semibold font-sans hover:text-brand-orange transition-colors"
        >
          +975 17115200
        </a>
        <p className="text-gray-400 text-xs font-sans mt-0.5">
          Office: +975 2 365044
        </p>
      </div>
    ),
  },
  {
    icon: <Mail size={20} className="text-brand-orange" />,
    label: "Email",
    content: (
      <div>
        <a
          href="mailto:ttt.wangdi@gmail.com"
          className="text-brand-dark font-semibold font-sans hover:text-brand-orange transition-colors block"
        >
          ttt.wangdi@gmail.com
        </a>
        <a
          href="mailto:info@tsheringtours.com"
          className="text-brand-dark font-semibold font-sans hover:text-brand-orange transition-colors block"
        >
          info@tsheringtours.com
        </a>
      </div>
    ),
  },
  {
    icon: <MapPin size={20} className="text-brand-orange" />,
    label: "Office",
    content: (
      <p className="text-gray-600 font-sans text-sm leading-relaxed">
        SD Building Above Nima High School
        <br />
        Thimphu, Bhutan — P.O. Box 767
      </p>
    ),
  },
  {
    icon: <Clock size={20} className="text-brand-orange" />,
    label: "Response Time",
    content: (
      <p className="text-brand-dark font-semibold font-sans">Within 24 hours</p>
    ),
  },
];

export default function ContactPage() {
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
            Get In Touch
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full mb-5" />
          <p className="text-gray-300 font-sans text-lg max-w-2xl mx-auto leading-relaxed">
            Our Thimphu team responds to every inquiry within 24 hours.
          </p>
        </div>
      </div>

      {/* Main content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* Contact info */}
            <FadeUp>
              <div>
                <h2 className="font-display text-3xl font-bold text-brand-dark mb-3">
                  We&apos;d Love to Hear from You
                </h2>
                <p className="text-gray-600 font-sans leading-relaxed mb-10 text-[15px]">
                  Planning a trip to Bhutan? Whether you have questions about
                  our activities, want a customised itinerary, or are ready to
                  book — our Thimphu team responds to every inquiry within 24
                  hours.
                </p>

                {/* Contact details */}
                <div className="space-y-3 mb-8">
                  {contactItems.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center shrink-0 shadow-sm">
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="font-sans font-bold text-gray-400 text-xs uppercase tracking-wider mb-1">
                          {item.label}
                        </p>
                        {item.content}
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/97517115200"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white px-7 py-3.5 rounded-full font-sans font-bold transition-colors shadow-md"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>

                {/* What happens next */}
                <div className="mt-10 bg-brand-maroon/5 border border-brand-maroon/15 rounded-2xl p-7">
                  <h3 className="font-display text-lg font-bold text-brand-dark mb-5">
                    What Happens Next?
                  </h3>
                  <ol className="space-y-4">
                    {[
                      "We receive your inquiry and review your travel preferences.",
                      "Within 24 hours, we send a tailored itinerary proposal.",
                      "We refine the plan together until it's perfect for you.",
                      "Confirm your dates and we handle everything else.",
                    ].map((step, i) => (
                      <li key={i} className="flex gap-4 items-start">
                        <span className="w-7 h-7 rounded-full bg-brand-orange text-white text-xs font-bold font-sans flex items-center justify-center shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <p className="text-gray-600 font-sans text-sm leading-relaxed pt-0.5">
                          {step}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </FadeUp>

            {/* Contact form */}
            <FadeUp delay={0.2}>
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sticky top-28">
                <h3 className="font-display text-2xl font-bold text-brand-dark mb-1">
                  Send Us a Message
                </h3>
                <p className="text-gray-400 font-sans text-sm mb-7">
                  Free consultation — no commitment required.
                </p>
                <ContactForm />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Location strip */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeUp>
            <h2 className="font-display text-2xl font-bold text-brand-dark mb-3">
              Based in Thimphu, Bhutan
            </h2>
            <p className="text-gray-600 font-sans leading-relaxed mb-6">
              Our office is located in Thimphu — Bhutan&apos;s vibrant capital
              and the heart of the kingdom. We organise journeys to all regions,
              from the westernmost valleys of Haa and Paro to the remote eastern
              frontier of Trashigang and Trashiyangtse.
            </p>
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-6 py-3 text-sm text-gray-600 font-sans shadow-sm">
              <span className="text-brand-orange font-bold">✓</span>
              Tourism Council of Bhutan
              <span className="text-gray-300 mx-1">·</span>
              <span className="text-brand-orange font-bold">✓</span>
              ABTO Member
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
