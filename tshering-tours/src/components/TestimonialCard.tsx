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
    <div className="border-l-2 border-brand-maroon pl-6 py-1 flex flex-col h-full">
      <p
        className="font-mono text-brand-orange text-xs tracking-[0.3em] mb-4"
        aria-label={`${rating} out of 5 stars`}
      >
        {"★".repeat(rating)}
        <span className="text-gray-300">{"★".repeat(5 - rating)}</span>
      </p>
      <blockquote className="font-display text-[17px] text-brand-dark leading-relaxed flex-1 mb-6">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-dark">
          {name}
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500 mt-1">
          {country}
        </p>
      </div>
    </div>
  );
}
