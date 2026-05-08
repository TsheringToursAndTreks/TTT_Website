import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  country: string;
  rating: number;
  quote: string;
}

export default function TestimonialCard({
  name,
  country,
  rating,
  quote,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col h-full">
      <div className="text-5xl font-display text-brand-orange/20 leading-none select-none mb-2">
        &ldquo;
      </div>
      <blockquote className="text-gray-700 text-sm leading-relaxed flex-1 mb-6 font-sans">
        {quote}
      </blockquote>
      <div className="flex items-center justify-between border-t border-gray-100 pt-5">
        <div>
          <p className="font-display font-bold text-brand-dark text-sm">{name}</p>
          <p className="text-brand-orange text-xs font-sans font-semibold mt-0.5">
            {country}
          </p>
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={13}
              className={
                i < rating
                  ? "text-brand-yellow fill-brand-yellow"
                  : "text-gray-200 fill-gray-200"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
