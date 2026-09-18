import PrayerFlags from "@/components/PrayerFlags";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  /* Dzongkha watermark glyph shown faintly behind the title */
  tibetan?: string;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  tibetan = "འབྲུག",
}: PageHeroProps) {
  return (
    <div className="relative bg-brand-dark pt-36 pb-16 overflow-hidden text-white">
      <span
        aria-hidden="true"
        className="absolute -right-6 -top-10 font-tibetan text-[11rem] leading-none text-brand-yellow/10 select-none"
      >
        {tibetan}
      </span>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-brand-yellow uppercase tracking-[0.3em] text-[11px] mb-5">
          ✦ {eyebrow}
        </p>
        <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-tight mb-5">
          {title}
        </h1>
        <p className="text-gray-300 font-sans text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
      <PrayerFlags className="absolute bottom-0 left-0 right-0 text-brand-yellow" />
    </div>
  );
}
