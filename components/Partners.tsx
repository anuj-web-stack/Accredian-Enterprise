const academicPartners = [
  { short: "IIT", name: "IIT Delhi", type: "IIT" },
  { short: "IIT", name: "IIT Bombay", type: "IIT" },
  { short: "IIT", name: "IIT Kanpur", type: "IIT" },
  { short: "IIT", name: "IIT Madras", type: "IIT" },
  { short: "IIT", name: "IIT Roorkee", type: "IIT" },
  { short: "IIM", name: "IIM Bangalore", type: "IIM" },
  { short: "IIM", name: "IIM Kozhikode", type: "IIM" },
  { short: "IIM", name: "IIM Lucknow", type: "IIM" },
  { short: "GL", name: "Great Lakes", type: "Global" },
  { short: "NUS", name: "NUS Singapore", type: "Global" },
  { short: "MIT", name: "MIT xPRO", type: "Global" },
];

const industryPartners = [
  { short: "G", name: "Google", color: "bg-red-100 text-red-700" },
  { short: "MS", name: "Microsoft", color: "bg-blue-100 text-blue-700" },
  { short: "AWS", name: "Amazon AWS", color: "bg-orange-100 text-orange-700" },
  { short: "IBM", name: "IBM", color: "bg-blue-100 text-blue-800" },
  { short: "TBL", name: "Tableau", color: "bg-cyan-100 text-cyan-700" },
];

const typeColors: Record<string, string> = {
  IIT: "bg-brand-100 text-brand-700",
  IIM: "bg-violet-100 text-violet-700",
  Global: "bg-emerald-100 text-emerald-700",
};

function LogoBadge({ short, name, color }: { short: string; name: string; color?: string }) {
  const bg = color ?? "bg-gray-100 text-gray-600";
  return (
    <div className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-2.5 border border-gray-100 shadow-sm flex-shrink-0 mx-2">
      <div
        className={`w-8 h-8 rounded-lg ${bg} flex items-center justify-center text-xs font-bold leading-none`}
      >
        {short}
      </div>
      <span className="text-sm font-medium text-gray-700 whitespace-nowrap">{name}</span>
    </div>
  );
}

export default function Partners() {
  const allAcademic = [...academicPartners, ...academicPartners]; // duplicate for infinite scroll
  const allIndustry = [...industryPartners, ...industryPartners];

  return (
    <section id="partners" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-500 mb-3">
            Academic & Industry Partners
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Built on world-class institutions.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our programs are co-designed and certified by India's most prestigious academic
            institutions and global technology leaders.
          </p>
        </div>
      </div>

      {/* Academic ticker */}
      <div className="relative mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10" />
        <div className="ticker-track">
          {allAcademic.map((p, i) => (
            <LogoBadge key={`${p.name}-${i}`} short={p.short} name={p.name} color={typeColors[p.type]} />
          ))}
        </div>
      </div>

      {/* Industry ticker (reverse) */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10" />
        <div className="ticker-track" style={{ animationDirection: "reverse" }}>
          {allIndustry.map((p, i) => (
            <LogoBadge key={`${p.name}-${i}`} short={p.short} name={p.name} color={p.color} />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 text-center shadow-sm">
          <h3 className="font-display font-bold text-xl text-gray-900 mb-2">
            Academic excellence meets industry relevance.
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto text-sm">
            Every program on our platform carries the credential of a top-tier institution. No fluff.
            No self-certification. Real university partnerships, real accreditation.
          </p>
          <div className="flex justify-center gap-8 md:gap-12">
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-brand-600">50+</div>
              <div className="text-sm text-gray-500 mt-1">Partner Institutions</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-brand-600">200+</div>
              <div className="text-sm text-gray-500 mt-1">Certified Programs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
