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
  title: "TTT Tshering Tours and Treks | Bhutan Travel Experts",
  description:
    "Discover authentic Bhutan with TTT Tshering Tours and Treks. Licensed Bhutanese tour operator offering cultural tours, trekking, and immersive Himalayan experiences.",
  keywords:
    "Bhutan tours, trekking Bhutan, Bhutan travel, Tiger's Nest, cultural tour Bhutan, Himalayan adventure",
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
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
