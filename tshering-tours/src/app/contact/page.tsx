import type { Metadata } from "next";
import { Mail, MapPin, Clock, Phone, ArrowUpRight } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact Us | TTT Tshering Tours and Treks",
  description:
    "Reach TTT Tshering Tours and Treks in Thimphu, Bhutan by email, WhatsApp, or Facebook. Call +975 17115200 or email ttt.wangdi@gmail.com.",
};

const FACEBOOK_URL =
  "https://www.facebook.com/profile.php?id=100054541446493";
const GMAIL_COMPOSE_URL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=ttt.wangdi@gmail.com&su=Bhutan%20Trip%20Inquiry";
const WHATSAPP_URL =
  "https://wa.me/97517115200?text=Hello%20TTT%20Tshering%20Tours!%20I%27d%20like%20to%20plan%20a%20trip%20to%20Bhutan.";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12.073C24 5.446 18.627.073 12 .073S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z" />
    </svg>
  );
}

const channels = [
  {
    name: "Email Us",
    handle: "ttt.wangdi@gmail.com",
    desc: "Best for detailed itinerary requests and questions. We reply within 24 hours.",
    href: GMAIL_COMPOSE_URL,
    cta: "Open in Gmail",
    icon: <Mail size={24} strokeWidth={2} />,
    iconBg: "bg-red-50 text-red-600 border-red-100",
    button: "bg-red-600 hover:bg-red-500",
    extra: (
      <a
        href="mailto:ttt.wangdi@gmail.com"
        className="text-gray-400 text-xs font-sans hover:text-brand-orange transition-colors underline underline-offset-2"
      >
        or open in your mail app
      </a>
    ),
  },
  {
    name: "WhatsApp",
    handle: "+975 17115200",
    desc: "Fastest way to reach us. Chat directly with our Thimphu team, any time zone.",
    href: WHATSAPP_URL,
    cta: "Chat on WhatsApp",
    icon: <WhatsAppIcon className="w-6 h-6" />,
    iconBg: "bg-green-50 text-green-600 border-green-100",
    button: "bg-green-600 hover:bg-green-500",
    extra: null,
  },
  {
    name: "Facebook",
    handle: "TTT Tshering Tours and Treks",
    desc: "Follow our journeys across Bhutan and send us a message on our page.",
    href: FACEBOOK_URL,
    cta: "Visit Our Page",
    icon: <FacebookIcon className="w-6 h-6" />,
    iconBg: "bg-blue-50 text-blue-600 border-blue-100",
    button: "bg-blue-600 hover:bg-blue-500",
    extra: null,
  },
];

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
          Office: +975 2 365044 · Fax: +975 2 365247
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
        Thimphu, Bhutan · P.O. Box 767
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
      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        description="Reach us on the channel you prefer. Our Thimphu team responds to every inquiry within 24 hours."
      />

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
                  book, message us on Gmail, WhatsApp, or Facebook and our
                  Thimphu team will get back to you within 24 hours.
                </p>

                {/* Contact details */}
                <div className="space-y-3 mb-10">
                  {contactItems.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 bg-white border border-brand-dark/10 p-4"
                    >
                      <div className="w-10 h-10 bg-paper border border-brand-dark/15 flex items-center justify-center shrink-0 shadow-sm">
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

                {/* What happens next */}
                <div className="bg-brand-maroon/5 border border-brand-maroon/15 p-7">
                  <h3 className="font-display text-lg font-bold text-brand-dark mb-5">
                    What Happens Next?
                  </h3>
                  <ol className="space-y-4">
                    {[
                      "We receive your message and review your travel preferences.",
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

            {/* Reach-out channels */}
            <FadeUp delay={0.2}>
              <div className="lg:sticky lg:top-28">
                <h3 className="font-display text-2xl font-bold text-brand-dark mb-1">
                  Reach Out Directly
                </h3>
                <p className="text-gray-400 font-sans text-sm mb-7">
                  No forms to fill. Message us on the platform you already use.
                </p>
                <div className="space-y-5">
                  {channels.map((channel) => (
                    <div
                      key={channel.name}
                      className="bg-white border border-brand-dark/15 hover:border-brand-maroon/40 transition-all duration-300 p-6"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 border flex items-center justify-center shrink-0 ${channel.iconBg}`}
                        >
                          {channel.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-display text-lg font-bold text-brand-dark">
                            {channel.name}
                          </h4>
                          <p className="text-brand-orange font-sans text-xs font-semibold mb-2 truncate">
                            {channel.handle}
                          </p>
                          <p className="text-gray-600 font-sans text-sm leading-relaxed mb-4">
                            {channel.desc}
                          </p>
                          <div className="flex flex-wrap items-center gap-3">
                            <a
                              href={channel.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-2 text-white px-5 py-2.5 font-sans font-bold text-sm transition-colors shadow-sm ${channel.button}`}
                            >
                              {channel.cta}
                              <ArrowUpRight size={15} />
                            </a>
                            {channel.extra}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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
              Our office is located in Thimphu, Bhutan&apos;s vibrant capital
              and the heart of the kingdom. We organise journeys to all regions,
              from the westernmost valleys of Haa and Paro to the remote eastern
              frontier of Trashigang and Trashiyangtse.
            </p>
            <div className="inline-flex items-center gap-2 bg-white border border-brand-dark/15 px-6 py-3 text-sm text-gray-600 font-sans shadow-sm">
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
