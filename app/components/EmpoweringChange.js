const values = [
  {
    title: "The Instinct",
    description:
      "We grow up seeing that our mother is the nuclear and primary caregiver of the family. By nature, and in practice mother has a strong influence on kids compared to the father to be a empowerment change maker.",
    image: "/intinct.png",
  },
  {
    title: "Reciprocity",
    description:
      "Cultural empowerment through mutual support is central to our values. We focus on inclusion for those who need it most and aim to strengthen reciprocal norms that guide benefit to all.",
    image: "/Reciprocity.jpg",
  },
  {
    title: "Advocacy",
    description:
      "WCEI will advocate for cultural empowerment aligned with SDG 5, working with the United Nations, key organizations, and local communities to advance meaningful and inclusive growth.",
    image: "/Advocacy.jpg",
  },
];

export default function EmpoweringChange() {
  return (
    <section id="get-involved" className="py-16 md:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
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
              <div className="w-full h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-bold text-xl mb-3" style={{ color: "#EF8B1D" }}>{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
