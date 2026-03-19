const articles = [
  {
    image: "/about-home.jpg",
    category: "Research",
    date: "June 27, 2025",
    title: "What have we been learning from our work with young people across Africa and Asia?",
    excerpt: "Young people across the Global South hold tremendous potential, but they face disproportionate risks and barriers that can create challenging transitions into adulthood. But",
    href: "/what-have-we-been-learning-from-our-work-with-young-people-across-africa-and-asia/",
  },
  {
    image: "/about-home.jpg",
    category: "Blogs and Stories, Liberia",
    date: "June 27, 2025",
    title: "The climate crisis is coming to our plates. Here's how we need to support farmers",
    excerpt: "Smallholder farmers – many of them women – grow most of the food consumed in South Asia and sub-Saharan Africa. They must be front",
    href: "/a-farm-of-ones-own-the-potential-of-locally-led-agricultural-cooperatives-in-liberia/",
  },
];

export default function LatestInsights() {
  return (
    <section id="resources" className="py-16 md:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <div>
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">
              Recent Blogs
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Latest Insights <span className="text-accent">&amp; Stories</span>
            </h2>
          </div>
          <a
            href="/blogs/"
            className="shrink-0 bg-accent hover:bg-orange-600 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Read More Stories →
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.href}
              className="flex flex-row gap-0 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100"
            >
              {/* Image with date badge */}
              <div className="relative w-48 sm:w-56 shrink-0 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Date badge */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium px-2.5 py-1.5 rounded-full shadow">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#EF8B1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  {article.date}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-5 flex-1">
                <h3 className="font-bold text-gray-900 text-base leading-snug mb-3 group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <span
                  className="inline-block self-start text-white text-xs font-semibold px-3 py-1 rounded-full mb-3"
                  style={{ backgroundColor: "#0D3B6B" }}
                >
                  {article.category}
                </span>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-accent text-sm font-semibold border border-accent rounded-full px-4 py-1.5 self-start hover:bg-accent hover:text-white transition-colors">
                  »» Read More
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
