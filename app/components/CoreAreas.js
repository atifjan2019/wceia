const coreLinks = [
  { label: "Zero and Cultural Empowerment", href: "/3-zeros-cultural-empowerment/" },
  { label: "No to Donation and Yes to Cultural Empowerment…our slogan?", href: "/no-to-donation/" },
  { label: "Higher Education and Academic Mentoring", href: "/higher-education-academic-mentoring/" },
  { label: "Vocational Education and Training", href: "/vocational-education-and-training-vet/" },
  { label: "Research and Publication", href: "/research-social-business/" },
];

export default function CoreAreas() {
  return (
    <section id="CoreAreas" style={{ backgroundColor: "#0D3B6B" }}>
      <div className="w-full px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16 md:py-20">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
            <img
              src="/coreareas.png"
              alt="Core areas of impact"
              className="w-full h-full object-cover aspect-square"
            />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
              Areas of Focus
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Core Areas of Impact
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              At WCEI, we go beyond aid to drive real transformation through education, cultural
              empowerment, academic mentorship, and sustainable development models. Our work is
              designed to build leadership, independence, and dignity for women and underserved
              communities — locally and globally.
            </p>
            <ul className="space-y-3">
              {coreLinks.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="flex items-start gap-3 text-white/90 hover:text-accent transition-colors group"
                  >
                    <span className="w-5 h-5 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-sm leading-snug group-hover:underline">{item.label}</span>
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
