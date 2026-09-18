import type { Metadata } from "next";
import {
  Fraunces,
  Work_Sans,
  IBM_Plex_Mono,
  Noto_Serif_Tibetan,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL, SITE_NAME, SOCIAL } from "@/lib/site";

const OG_IMAGE =
  "/img/tigers-nest.jpg";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/ttt_logo.jpeg`,
  image: OG_IMAGE,
  description:
    "Licensed Bhutanese tour operator in Thimphu offering cultural tours, trekking, nature tours, and cycling journeys across Bhutan since 2005.",
  telephone: "+975-17115200",
  email: "ttt.wangdi@gmail.com",
  foundingDate: "2005",
  founder: {
    "@type": "Person",
    name: "Tshering Wangdi",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "SD Building Above Nima High School, P.O. Box 767",
    addressLocality: "Thimphu",
    addressCountry: "BT",
  },
  sameAs: [SOCIAL.facebook, SOCIAL.instagram],
};

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const notoTibetan = Noto_Serif_Tibetan({
  variable: "--font-noto-tibetan",
  subsets: ["tibetan"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "TTT Tshering Tours and Treks | Bhutan Travel Experts",
  description:
    "Discover authentic Bhutan with TTT Tshering Tours and Treks. Licensed Bhutanese tour operator offering cultural tours, trekking, and immersive Himalayan experiences.",
  keywords:
    "Bhutan tours, trekking Bhutan, Bhutan travel, Tiger's Nest, cultural tour Bhutan, Himalayan adventure",
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "TTT Tshering Tours and Treks | Bhutan Travel Experts",
    description:
      "Authentic Bhutan journeys crafted in Thimphu since 2005: cultural tours, Himalayan treks, nature and cycling tours.",
    images: [{ url: OG_IMAGE, width: 1600, height: 1067, alt: "Paro Taktsang, the Tiger's Nest monastery, Bhutan" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TTT Tshering Tours and Treks | Bhutan Travel Experts",
    description:
      "Authentic Bhutan journeys crafted in Thimphu since 2005: cultural tours, Himalayan treks, nature and cycling tours.",
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${workSans.variable} ${plexMono.variable} ${notoTibetan.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
