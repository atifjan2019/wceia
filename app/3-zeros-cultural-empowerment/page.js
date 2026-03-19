import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Three Zeros & Cultural Empowerment - Women Cultural Empowerment International (WCEI)",
  description:
    "Exploring Nobel laureate Professor Muhammad Yunus's vision of Three Zeros — zero poverty, zero unemployment, zero carbon emissions — through cultural empowerment.",
};

const povertyQuotes = [
  { num: "274", text: "We can remove poverty from the surface of the earth only if we can redesign our institutions, like the banking institutions, and other institutions; if we redesign our policies, if we look back on our concepts, so that we have a different idea of poor people." },
  { num: "275", text: "If you think creating a world without any poverty is impossible, let's do it. Because it is the right thing to do." },
  { num: "272", text: "I strongly believe that we can create a poverty-free world, if we want to.... In that kind of world, the only place you can see poverty is in the museum. When school children will be on a tour of the poverty museum, they will be horrified." },
  { num: "270", text: "The direct elimination of poverty should be the objective of all development aid. Development should be viewed as a human rights issue, not as a question of simply increasing the gross national product GNP." },
  { num: "261", text: "People were poor not because they were stupid or lazy. They worked all day long, doing complex physical tasks. They were poor because the financial institution in the country did not help them widen their economic base." },
  { num: "258", text: "Even today we don't pay serious attention to the issue of poverty, because the powerful remain relatively untouched by it. Most people distance themselves from the issue by saying that if the poor worked harder, they wouldn't be poor." },
  { num: "269", text: "The poor themselves can create a poverty-free world. All we have to do is to free them from the chains that we have put around them." },
  { num: "266", text: "To overcome poverty and the flaws of the economic crisis in our society, we need to envision our social life. We have to free our mind, imagine what has never happened before and write social fiction. We need to imagine things to make them happen." },
  { num: "264", text: "Poverty has been created by the economic and social system that we have designed for the world. It is the institutions that we have built, and feel so proud of, which created poverty." },
];

const cultureQuotesList = [
  "There are cultural issues everywhere - in Bangladesh, Latin America, Africa, wherever you go. But somehow when we talk about cultural differences, we magnify those differences.",
  "I'm encouraging young people to become social business entrepreneurs and contribute to the world, rather than just making money. Making money is no fun. Contributing to and changing the world is a lot more fun.",
  "I'm on the faculty. I teach. And it's not easy for a poor person to enter the campus to track down the professor in the campus in a Bangladesh situation. They all will be stopped at the gate. You have no business in the university!",
  "The developing world is full of entrepreneurs and visionaries, who with access to education, equity and credit would play a key role in developing the economic situations in their countries.",
];

const cultureQuotesCards = [
  "\u201CHuman creativity is unlimited. It is the capacity of humans to make things happen which didn't happen before. Creativity provides the key to solving our social and economic problems.\u201D",
  "Making money is a happiness. And that's a great incentive. Making other people happy is a super-happiness.",
  "Things are never as complicated as they seem. It is only our arrogance that prompts us to find unnecessarily complicated answers to simple problems.",
  "We can remove poverty from the surface of the earth only if we can redesign our institutions, like the banking institutions, and other institutions; if we redesign our policies, if we look back on our concepts, so that we have a different idea of poor people.",
];

function QuoteIcon() {
  return (
    <svg className="w-10 h-10 shrink-0" viewBox="0 0 24 24" fill="#EF8B1D" opacity="0.3">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
    </svg>
  );
}

export default function ThreeZeros() {
  return (
    <>
      <Navbar />
      <main className="bg-white">

        {/* ── Hero ── */}
        <section className="relative flex items-center justify-center overflow-hidden" style={{ height: "50vh" }}>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/3-zeros hero.jpg')" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(30,59,138,0.85) 0%, rgba(0,0,0,0.6) 100%)" }} />
          <div className="relative z-10 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-3xl mx-auto leading-tight">
              Three Zeros &amp; Cultural Empowerment
            </h1>
            <p className="text-white/60 text-sm">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span className="mx-2">/</span>
              <span className="text-white/90">Three Zeros &amp; Cultural Empowerment</span>
            </p>
          </div>
        </section>

        {/* ── Nobel Laureate Intro ── */}
        <section className="py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="flex-1">
                <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#EF8B1D" }}>
                  An Inspiring Vision for a Better World
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{ color: "#1E3B8A" }}>
                  Nobel laureate Yunus on A World of Three Zeroes
                </h2>
                <div className="space-y-4 text-gray-600 text-sm leading-relaxed text-justify">
                  <p>
                    Muhammad Yunus who won the 2006 Nobel Peace Prize for his efforts in alleviating poverty was touring Italy speaking about zero poverty, zero unemployment, and zero carbon emissions. Yunus is convinced that a world of zero poverty, zero unemployment, and zero carbon emissions is very much possible. He says the United Nations and the world&apos;s nations are working towards the Sustainable Development Goals (SDGs), a set of 17 global economic and social targets set by the UN to be reached by 2030. One of the goals of the SDGs aims at zero poverty. Yunus notes that though the SDGs don&apos;t talk about zero carbon emissions, there is a general awareness for improvement of the environment. But the economist is insisting that we should reach zero net carbon emissions by 2040 or 2050. The MDGs do talk about reducing unemployment but does not explicitly talk about zero unemployment which is one of the issues of Yunus in his book.
                  </p>
                  <p className="text-xs text-gray-400 italic mt-4">
                    Source: IMPACTDOTS, 2025 (Nobel Laureate, Professor Yunus)
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-[420px] shrink-0">
                <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
                  <img
                    src="/Nobel laureate Yunus on A World of Three Zeroes.webp"
                    alt="Nobel laureate Yunus on A World of Three Zeroes"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <p className="text-xs text-gray-400 text-center mt-3 italic">
                  Source: IMPACTDOTS 2025 (Nobel Laureate, Professor Yunus)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Rethinking Poverty Quotes ── */}
        <section className="py-20" style={{ backgroundColor: "#f8f7f4" }}>
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="text-center mb-14">
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#EF8B1D" }}>
                Words of Inspiration
              </p>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#1E3B8A" }}>
                Rethinking Poverty: Insights from Muhammad Yunus
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {povertyQuotes.map((q, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <QuoteIcon />
                  <h3 className="text-sm font-bold mt-3 mb-2" style={{ color: "#1E3B8A" }}>
                    Quote {q.num}: Professor Muhammad Yunus, Poverty
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{q.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Cultural Empowerment Section ── */}
        <section className="py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="mb-10">
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#EF8B1D" }}>
                Professor Yunus&apos; Vision on Cultural Empowerment
              </p>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#1E3B8A" }}>
                Empowering Communities through Culture and Creativity
              </h2>
            </div>

            {/* Quotes list + image */}
            <div className="flex flex-col lg:flex-row gap-10 items-start mb-16">
              <div className="flex-1 space-y-6">
                {cultureQuotesList.map((quote, i) => (
                  <div key={i} className="border-l-4 pl-5 py-1" style={{ borderColor: "#EF8B1D" }}>
                    <h4 className="text-sm font-bold mb-1" style={{ color: "#1E3B8A" }}>
                      Quote: Professor Muhammad Yunus, Cultural Empowerment
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{quote}</p>
                  </div>
                ))}
              </div>
              <div className="w-full lg:w-[320px] shrink-0 space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/Empowering Communities through Culture and Creativity.png"
                    alt="Empowering Communities through Culture and Creativity"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="rounded-xl p-4 text-white text-sm leading-relaxed" style={{ backgroundColor: "#EF8B1D" }}>
                  &ldquo;A charity dollar has only one life; a Social Business dollar can be invested over and over again.&rdquo;
                </div>
              </div>
            </div>

            {/* Quote cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cultureQuotesCards.map((quote, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <QuoteIcon />
                  <h4 className="text-sm font-bold mt-3 mb-2" style={{ color: "#1E3B8A" }}>
                    Quote: Professor Muhammad Yunus, Cultural Empowerment
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{quote}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Advancing Three Zero ── */}
        <section className="py-20" style={{ backgroundColor: "#f8f7f4" }}>
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{ color: "#1E3B8A" }}>
                  Advancing Three Zero through Cultural Empowerment
                </h2>
                <div className="space-y-4 text-gray-600 text-sm leading-relaxed text-justify">
                  <p>
                    Poverty, unemployment, and carbon emissions are global problems. What if there was a way to face these issues and bring them to zero? Borrowing its title from Muhammad Yunus&apos; bestseller <em>A World of 3 Zeros</em>, this documentary explores new ways of living together and doing business in a responsible and sustainable perspective. Zero net carbon emissions. Zero poverty. Zero unemployment. In solidarity and inclusiveness while respecting the planetary boundaries and leaving no one behind to reclaim cultural empowerment.
                  </p>
                  <p className="italic text-gray-700">
                    &ldquo;Cultural empowerment recognises and values the cultural heritage of a place and the people who make up the tourism destination. This acknowledges the position taken by Indigenous communities, who understand cultural diversity as the root of a more moral, spiritual, ethical and sustainable way of life.&rdquo;
                  </p>
                  <p>
                    Inspired by his achievements and by his own humility, fascinated by his visionary business ideas, Aime and Michel started their own journey. This documentary is both their journal and their open letter to people and businesses all over the world.
                  </p>
                  <p className="text-xs text-gray-400 italic">
                    Source: Adopted from IMPACTDOTS, 2025 (Nobel Laureate, Professor Yunus)
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-[400px] shrink-0">
                <img
                  src="/Advancing Three Zero through Cultural Empowerment.jpg"
                  alt="Advancing Three Zero through Cultural Empowerment"
                  className="w-full h-auto object-contain"
                />
                <p className="text-xs text-gray-400 text-center mt-3 italic">
                  Source: Adopted from IMPACTDOTS, 2025 (Nobel Laureate, Professor Yunus)
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
