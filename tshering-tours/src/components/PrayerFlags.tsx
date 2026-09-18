/* The five prayer-flag colours in traditional order:
   blue (sky), white (air), red (fire), green (water), yellow (earth). */
const FLAG_COLORS = ["#3e6b8c", "#ede8d8", "#b3352e", "#4a7c59", "#e9b949"];

export default function PrayerFlags({
  count = 40,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  return (
    <div aria-hidden="true" className={`pointer-events-none ${className}`}>
      <div className="h-px bg-current opacity-30" />
      <div className="flex overflow-hidden gap-1.5 pl-1">
        {Array.from({ length: count }).map((_, i) => (
          <span
            key={i}
            className="h-4 w-5 shrink-0"
            style={{
              backgroundColor: FLAG_COLORS[i % FLAG_COLORS.length],
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
