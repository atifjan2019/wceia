import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Founder and CEO - Women Cultural Empowerment International (WCEI)",
  description: "Founder and CEO",
};

const background = [
  "PhD degree from an international reputable university with high-rank publications.",
  "Strategic thinker with a collaborative working style and experience working with a not-for-profit board.",
  "Strong operational leader with a track record of success.",
  "Financial acumen and business savvy, combined with entrepreneurial skills and innovative thinking.",
  "Experience leading a not-for-profit cultural organization with significant physical assets is preferred.",
  "Demonstrated success in fundraising, including local and international.",
  "Able to build and nurture relationships with government, tourism, business, and community organizations.",
  "Exceptional verbal and written communications skills and an effective presenter.",
];

export default function FounderAndCEO() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section className="relative flex items-center justify-center overflow-hidden" style={{ height: "50vh" }}>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/founderhero.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white">Founder And CEO</h1>
            <p className="text-white/70 text-sm mt-3">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span className="mx-2">›</span>
              <span>Founder and CEO</span>
            </p>
          </div>
        </section>

        {/* ── Bio ── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="flex flex-col lg:flex-row gap-12 items-start">

              {/* Text */}
              <div className="flex-1">
                <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">
                  Founder and CEO
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Dr. Shahida Khanom
                </h2>
                <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                  <p>
                    WCEI is the brainchild of Bangladeshi Culture Empowerment Changemaker Dr. Shahida
                    Khanom who experienced the improvisation of women empowerment by Noble Laureate Prof. Yunus.
                  </p>
                  <p>
                    Shahida Khanom, PhD was born and brought up in Bangladesh. She holds an undergraduate
                    degree in Environmental Science from Khulna University, Bangladesh. After completing her
                    undergraduate, she began her career as a Research Associate at the International Union for
                    Conservation of Nature (IUCN), Bangladesh. Later, she was offered a scholarship for a
                    Master&apos;s in Natural Resources Management at the Asian Institute of Technology (AIT), Thailand.
                  </p>
                  <p>
                    Following her postgraduation, she engaged as a Culture Specialist at the United Nations
                    Educational, Scientific and Cultural Organization (UNESCO), Bangladesh for about seven years.
                    She was responsible for the planning and implementation of natural and cultural strategy for
                    the Paharpur World Heritage, Mosque City of Bagerhat, and Sundarbans Natural Heritage with
                    the Academic, Government and NGO.
                  </p>
                  <p>
                    In 2016, She was offered a postgraduate scholarship at Griffith University, Australia, and
                    left UNESCO. Her area of Doctoral Research was Tourism, Culture, and Heritage. She joined as
                    a Natural and Cultural Heritage Coordinator at UNESCO-designated Fundy Biosphere Region in
                    2024. Her function was to plan and implement the strategy for biodiversity conservation,
                    sustainable tourism, cultural preservation, and community participation. She is a member and
                    volunteer of IUCN and Biosphere Ecocity Canada.
                  </p>
                  <p>
                    ORCID ID:{" "}
                    <a
                      href="https://orcid.org/0000-0003-1290-9089"
                      className="text-accent hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      0000-0003-1290-9089
                    </a>
                  </p>
                </div>
              </div>

              {/* Portrait */}
              <div className="w-full lg:w-72 shrink-0">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/ceo.png"
                    alt="Dr. Shahida Khanom"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Background ── */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Background</h2>
            <ul className="space-y-4">
              {background.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-1 shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#EF8B1D" }}
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Shaking Hand with Prof Yunus ── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="flex flex-col lg:flex-row gap-12 items-stretch">

              <div className="w-full lg:w-[420px] shrink-0 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/Shaking Hand.png"
                  alt="Shaking hand with Professor Yunus"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">
                  A New World!
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Shaking Hand with Professor Yunus
                </h2>
                <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                  <p>
                    Shahida recalls her meeting with Prof. Yunus at the Asian Institute of Technology
                    (AIT) where she was pursuing her Master&apos;s degree (2003–2004). She was very astonished
                    to greet Professor Yunus and talk about the microfinance for women empowerment.
                  </p>
                  <p>
                    While in AIT, my fellow friend and colleagues often spoking about poor Bangladesh which
                    hurt me unbearably at very early age! The whole situation was changed in a blink when
                    Prof. Yunus invited in AIT for convocation and everyone about whispering his achievement.
                    So, far I can remember he was not awarded the Noble when he visited AIT.
                  </p>
                  <p>
                    I got a chance to handshake with him and greet him as a Bangladeshi student. And, he was
                    so generous to talk with me and later I took him to move around the campus. That day, I
                    realized a new inner force to change the vision to build a better future for Bangladesh to
                    be rewarded globally.
                  </p>
                  <p>
                    I realized that if Professor Yunus could empower 10.56 million illiterate women through
                    microfinance, then I could dream of a little bit more. I changed my school of thought to
                    be an empowerment changemaker following Yunus.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Quote ── */}
        <section className="py-20" style={{ backgroundColor: "#1E3B8A" }}>
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row items-center gap-12">

              {/* Quote text */}
              <div className="flex-1">
                <div className="text-7xl font-serif leading-none mb-4" style={{ color: "#EF8B1D" }}>&ldquo;</div>
                <p className="text-white text-2xl md:text-3xl font-semibold italic leading-snug mb-6">
                  Whip up your culture and gain knowledge
                </p>
                <div className="w-12 h-1 mb-5 rounded" style={{ backgroundColor: "#EF8B1D" }} />
                <p className="text-white/80 text-base font-medium">Dr. Shahida Khanom</p>
                <p className="text-white/50 text-sm mt-1">Founder &amp; CEO, WCEI</p>
              </div>

              {/* Portrait card */}
              <div className="shrink-0 rounded-3xl p-6 flex items-center justify-center" style={{ backgroundColor: "#EF8B1D" }}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl" style={{ width: "200px", height: "230px" }}>
                  <img
                    src="/ceo.png"
                    alt="Dr. Shahida Khanom"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
