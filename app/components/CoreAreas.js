const coreLinks = [
  { label: "Zero and Cultural Empowerment", href: "/3-zeros-cultural-empowerment/" },
  { label: "No to Donation and Yes to Cultural Empowerment...our slogan?", href: "/no-to-donation/" },
  { label: "Higher Education and Academic Mentoring", href: "/higher-education-academic-mentoring/" },
  { label: "Vocational Education and Training", href: "/vocational-education-and-training-vet/" },
  { label: "Research and Publication", href: "/research-social-business/" },
];

export default function CoreAreas() {
  return (
    <section id="CoreAreas" style={{ backgroundColor: "#0D3B6B" }}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-14 md:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">

          {/* Image — left, smaller */}
          <div className="w-full lg:w-[38%] shrink-0">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/coreareas.png"
                alt="Core areas of impact"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content — right */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-5 leading-tight">
              Our Core Areas of Impact
            </h2>
            <p className="text-white/80 leading-relaxed mb-7 text-base">
              At WCEI, we go beyond aid to drive real transformation through education, cultural
              empowerment, academic mentorship, and sustainable development models. Our work is
              designed to build leadership, independence, and dignity for women and underserved
              communities—locally and globally.
            </p>
            <ul className="space-y-3.5">
              {coreLinks.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="flex items-start gap-3 group"
                  >
                    {/* Checkmark icon */}
                    <span className="mt-0.5 shrink-0 w-5 h-5 rounded-sm flex items-center justify-center" style={{ backgroundColor: "#1a5f9e" }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#EF8B1D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-white/90 text-sm leading-snug group-hover:text-accent transition-colors">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
