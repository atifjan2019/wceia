const values = [
  {
    title: "The Instinct",
    description:
      "We grow up seeing that our mother is the nuclear and primary caregiver of the family. By nature, and in practice mother has a strong influence on kids compared to the father to be a empowerment change maker.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Reciprocity",
    description:
      "Cultural empowerment through mutual support is central to our values. We focus on inclusion for those who need it most and aim to strengthen reciprocal norms that guide benefit to all.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 1l4 4-4 4" /><path d="M3 11V9a4 4 0 014-4h14" />
        <path d="M7 23l-4-4 4-4" /><path d="M21 13v2a4 4 0 01-4 4H3" />
      </svg>
    ),
  },
  {
    title: "Advocacy",
    description:
      "WCEI will advocate for cultural empowerment aligned with SDG 5, working with the United Nations, key organizations, and local communities to advance meaningful and inclusive growth.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

export default function EmpoweringChange() {
  return (
    <section id="get-involved" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Our Values
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Empowering Change for a{" "}
            <span className="text-accent">Better Future</span>
          </h2>
          <p className="text-gray-500 leading-relaxed">
            At WCEI, our values form the foundation of everything we do. We believe in empowering
            women to become cultural change-makers, strengthening communities, and fostering
            holistic socio-cultural development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-gray-100"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src="/about-home.jpg"
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-800 text-xl mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
