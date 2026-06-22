const stats = [
  { value: "50+", label: "Years Industry Experience" },
  { value: "2008", label: "Founded in Odessa, TX" },
  { value: "40k sqft", label: "Production Facility" },
  { value: "ASME", label: "Code Certified" },
];

/* Borders form a quadrant on the 2-col grid (mobile + tablet) and a single
   row of dividers on the 4-col grid (lg) — no lingering outer edges. */
const cellBorders = [
  "border-r border-b lg:border-b-0", // top-left
  "border-b lg:border-b-0 lg:border-r", // top-right
  "border-r", // bottom-left
  "", // bottom-right
];

export default function HeroStatBar() {
  return (
    <div className="hero-stat-bar relative z-10 border-t border-white/10">
      <div className="site-container grid grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col items-start border-white/10 px-4 py-4 lg:py-5 ${cellBorders[i]}`}
          >
            <span className="hero-stat-value text-xl font-extrabold leading-none sm:text-2xl">{s.value}</span>
            <span className="mt-0.5 text-xs font-medium uppercase tracking-wide text-white/80">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
