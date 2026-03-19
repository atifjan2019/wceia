const articles = [
  {
    image: "/about-home.jpg",
    category: "Research",
    date: "June 27, 2025",
    title: "What have we been learning from our work with young people across Africa and Asia?",
    excerpt: "Young people across the Global South hold tremendous potential, but they face disproportionate risks and barriers that can create challenging transitions into adulthood.",
    href: "/what-have-we-been-learning-from-our-work-with-young-people-across-africa-and-asia/",
  },
  {
    image: "/about-home.jpg",
    category: "Blogs and Stories, Liberia",
    date: "June 27, 2025",
    title: "The climate crisis is coming to our plates. Here's how we need to support farmers",
    excerpt: "Smallholder farmers – many of them women – grow most of the food consumed in South Asia and sub-Saharan Africa. They must be front and centre.",
    href: "/a-farm-of-ones-own-the-potential-of-locally-led-agricultural-cooperatives-in-liberia/",
  },
  {
    image: "/about-home.jpg",
    category: "Afghanistan, Blogs and Stories",
    date: "June 27, 2025",
    title: "It's like learning the future! How girls in Afghanistan are getting a chance to enjoy learning at after-school centres",
    excerpt: "This April marked a milestone for 1,900 students who graduated from BRAC's 76 after-school learning centres — places where children continue to learn despite tremendous odds.",
    href: "/its-like-learning-the-future-how-girls-in-afghanistan-are-getting-a-chance-to-enjoy-learning-at-after-school-centres/",
  },
  {
    image: "/about-home.jpg",
    category: "Blogs and Stories, Education",
    date: "June 27, 2025",
    title: "Policy Recommendations for Building Climate Resilience for the Most Vulnerable During Heatwaves in India",
    excerpt: "By Boudewijn Weijermars, Shweta S. Banerjee, Ramesh Veluru, Courtney Calardo • February 21, 2024 • 6 minute read.",
    href: "/anita-anastacio-on-the-power-of-early-childhood-and-education-at-brac/",
  },
];

export default function LatestInsights() {
  return (
    <section id="resources" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <div>
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">
              From Our Blog
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Latest Insights <span className="text-accent">&amp; Stories</span>
            </h2>
          </div>
          <a
            href="/blogs/"
            className="bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 shrink-0"
          >
            Read More Stories →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.href}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group block"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-2">
                  {article.category}
                </span>
                <p className="text-gray-400 text-xs mb-2">{article.date}</p>
                <h3 className="font-bold text-gray-800 text-sm leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-3">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">{article.excerpt}</p>
                <span className="inline-block mt-3 text-accent text-xs font-semibold hover:underline">Read More →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
