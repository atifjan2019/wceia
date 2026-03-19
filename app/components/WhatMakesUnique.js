const features = [
  {
    title: "Scientific Innovation",
    description:
      "WCEI drives innovation to enhance research and policy efforts for women's empowerment within cultural contexts aligned with Sustainable Development Goals 5 and 8.",
    image: "/Scientific.jpg",
  },
  {
    title: "Cultural Diversity",
    description:
      "WCEI welcomes people from all cultures to build collaboration around customary needs and support the development of a more inclusive and empowered society for unity!",
    image: "/Cultural.jpg",
  },
  {
    title: "Sustainable Solution",
    description:
      "WCEI takes a business approach to ending poverty, using social enterprise models to recover costs and accelerate impact at scale for strong community growth and care.",
    image: "/Sustainable.jpg",
  },
  {
    title: "Transparency",
    description:
      "WCEI ensures transparency in research and operations, archiving all sources while upholding copyright and international law to promote trust, accountability and care.",
    image: "/Transparency.jpg",
  },
];

export default function WhatMakesUnique() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Our Difference
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What makes WCEI unique
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold text-accent text-lg mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
