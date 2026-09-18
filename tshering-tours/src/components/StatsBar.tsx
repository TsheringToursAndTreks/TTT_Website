export default function StatsBar() {
  const stats = [
    { value: "500+", label: "Happy Travelers" },
    { value: "20+", label: "Years Experience" },
    { value: "30+", label: "Destinations" },
    { value: "100%", label: "Licensed & Trusted" },
  ];

  return (
    <section className="bg-brand-maroon py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10">
          {stats.map((stat, i) => (
            <div key={i} className="border-l border-white/20 pl-5 md:pl-7">
              <div className="font-mono text-4xl md:text-5xl text-brand-yellow mb-2">
                {stat.value}
              </div>
              <div className="font-mono text-white/70 text-[10px] uppercase tracking-[0.25em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
