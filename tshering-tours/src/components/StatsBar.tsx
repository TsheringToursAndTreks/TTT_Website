export default function StatsBar() {
  const stats = [
    { value: "500+", label: "Happy Travelers" },
    { value: "20+", label: "Years Experience" },
    { value: "30+", label: "Destinations" },
    { value: "100%", label: "Licensed & Trusted" },
  ];

  return (
    <section className="bg-brand-maroon py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="font-display text-4xl md:text-5xl font-bold text-brand-yellow mb-1">
                {stat.value}
              </div>
              <div className="text-white text-xs font-sans uppercase tracking-widest font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
