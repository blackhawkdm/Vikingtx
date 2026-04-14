const certs = [
  {
    label: "ASME Certified",
    description: "Code-stamped pressure vessels built to ASME standards",
    color: "text-viking-accent",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    label: "National Board Registered",
    description: "Registered manufacturer with the National Board of Boiler and Pressure Vessel Inspectors",
    color: "text-viking-steel",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "R-Stamp Qualified",
    description: "Authorized for pressure vessel repair and alteration under ASME standards",
    color: "text-viking-steel",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
];

export default function CertBadges() {
  return (
    <section className="bg-viking-light border-t border-viking-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-viking-steel text-sm font-semibold uppercase tracking-wider">
            Certifications &amp; Standards
          </p>
          <p className="text-viking-gray text-sm mt-1">
            Built on decades of oilfield experience
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {certs.map((cert) => (
            <div
              key={cert.label}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg border border-viking-border"
            >
              <div className={`${cert.color} mb-3`}>{cert.icon}</div>
              <h3 className="font-bold text-viking-black text-base mb-1">{cert.label}</h3>
              <p className="text-viking-gray text-sm">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
