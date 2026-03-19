import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Archives - Women Cultural Empowerment International (WCEI)",
  description:
    "Access WCEI's financial reports, reference documents, legal framework, and gallery archives.",
};

const financialDocs = [
  {
    title: "Social Business Benefit",
    description:
      "Here's a structured Benefit Distribution Plan for a Non-Profit Academic Organization.",
    link: "/WCEI_BENEFIT_SOCIAL_BUSINESS.docx-1.pdf",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    title: "Financial ToR",
    description:
      "These Financial Terms of Reference (ToR) establish the framework for managing the financial resources.",
    link: "/WCEI_FinanCial_ToR_25.docx-2.pdf",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

const referenceDocuments = [
  "A literature review of empirical studies of philanthropy: eight mechanisms that drive charitable giving. Nonprofit and Voluntary Sector Quarterly, 40(5), 924–973.",
  "Bareket, O., Ein-Gar, D., & Kogut, T. (2023). I will help you survive but not thrive: Helping decisions in situations that empower women. Group Processes & Intergroup Relations, 26(7), 1641-1659.",
  "Becker, C. C. (2022). Migrants' social integration and its relevance for national identification: An empirical comparison across three social spheres. Frontiers in sociology, 6, 700580.",
  "Bekkers, R., & Wiepking, P. (2011a). Accuracy of self-reports on donations to charitable organizations. Quality and Quantity, 45(6), 1369–1383.",
  "Bekkers, R., & Wiepking, P. (2011b). Testing mechanisms for philanthropic behaviour. International Journal of Nonprofit and Voluntary Sector Marketing, 16(4), 291–297.",
  "Bekkers, R., & Wiepking, P. (2011c). Who gives? A literature review of predictors of charitable giving part one: religion, education, age and socialisation. Voluntary Sector Review, 2(3), 337–365.",
  "Damayanti, F. N, Wahyati, E. (2019). Food safety in the protection of the right to health.",
  "Hasan, M. T., Anwar, T., Christopher, E., Hossain, S., Hossain, M. M., Koly, K. N., … & Hossain, S. W. (2021). The current state of mental healthcare in Bangladesh: part 1–an updated country profile. BJPsych international, 18(4), 78-82.",
  "Jackson, L. M., & Esses, V. M. (2000). Effects of perceived economic competition on people's willingness to help empower immigrants. Group Processes & Intergroup Relations, 3(4), 419-435.",
  "Khanom, S., Moyle, B., Scott, N., & Kennelly, M. (2019). Host–guest authentication of intangible cultural heritage: A literature review and conceptual model. Journal of Heritage Tourism, 14(5-6), 396-408.",
  "Vohs, K. D., Mead, N. L., & Goode, M. R. (2006). The psychological consequences of money. Science, 314(5802), 1154-1156.",
  "Yunus, M., Moingeon, B., & Lehmann-Ortega, L. (2010). Building social business models: Lessons from the Grameen experience. Long range planning, 43(2-3), 308-325.",
];

export default function Archives() {
  return (
    <>
      <Navbar />
      <main className="bg-white">

        {/* ── Hero ── */}
        <section className="relative flex items-center justify-center overflow-hidden" style={{ height: "50vh" }}>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/hero archive.jpg')" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(30,59,138,0.85) 0%, rgba(0,0,0,0.6) 100%)" }} />
          <div className="relative z-10 text-center">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#EF8B1D" }}>
              Resources & Documents
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Archives</h1>
            <p className="text-white/60 text-sm">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span className="mx-2">/</span>
              <span className="text-white/90">Archives</span>
            </p>
          </div>
        </section>

        {/* ── Financial Report ── */}
        <section className="py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "#1E3B8A" }}>Financial Report</h2>
              <div className="w-16 h-1 rounded-full mx-auto mb-4" style={{ backgroundColor: "#EF8B1D" }} />
              <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed">
                Welcome to the Financial Report section. Here you&apos;ll find our annual reports, quarterly updates, and key financial documents. We are committed to transparency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {financialDocs.map((doc) => (
                <div
                  key={doc.title}
                  className="group relative rounded-2xl border border-gray-100 p-8 text-center hover:shadow-xl transition-all duration-300 bg-white"
                >
                  {/* Top accent */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-b-full" style={{ backgroundColor: "#EF8B1D" }} />

                  <div
                    className="w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"
                    style={{ backgroundColor: "rgba(239, 139, 29, 0.1)", color: "#EF8B1D" }}
                  >
                    {doc.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "#1E3B8A" }}>{doc.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{doc.description}</p>
                  <a
                    href={doc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                    style={{ backgroundColor: "#EF8B1D" }}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Download PDF
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Reference Documents ── */}
        <section className="py-20" style={{ backgroundColor: "#f8f7f4" }}>
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "#1E3B8A" }}>Reference Documents</h2>
              <div className="w-16 h-1 rounded-full" style={{ backgroundColor: "#EF8B1D" }} />
            </div>

            <div className="space-y-4">
              {referenceDocuments.map((doc, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white rounded-xl px-6 py-4 border border-gray-100 hover:shadow-sm transition-shadow duration-200"
                >
                  <span
                    className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5"
                    style={{ backgroundColor: "#1E3B8A" }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed">{doc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Legal Documents ── */}
        <section className="py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "#1E3B8A" }}>Legal Documents</h2>
              <p className="text-sm font-semibold tracking-wide uppercase" style={{ color: "#EF8B1D" }}>
                Policy and Advocacy
              </p>
              <div className="w-16 h-1 rounded-full mx-auto mt-4" style={{ backgroundColor: "#EF8B1D" }} />
              <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed mt-4">
                The Goal of WCEI is based on Canada and follows the provision of the Canadian Government and other relevant bodies and Institutions including Provincial and National level.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <div className="group relative rounded-2xl border border-gray-100 p-8 text-center hover:shadow-xl transition-all duration-300 bg-white">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-b-full" style={{ backgroundColor: "#1E3B8A" }} />

                <div
                  className="w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: "rgba(30, 59, 138, 0.1)", color: "#1E3B8A" }}
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#1E3B8A" }}>Legal Framework</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  To promote academic excellence and knowledge sharing across disciplines.
                </p>
                <a
                  href="/WCEI_Legal_T0R_Sept_25.docx.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                  style={{ backgroundColor: "#1E3B8A" }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Gallery ── */}
        <section className="py-20" style={{ backgroundColor: "#f8f7f4" }}>
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "#1E3B8A" }}>Gallery</h2>
              <div className="w-16 h-1 rounded-full" style={{ backgroundColor: "#EF8B1D" }} />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "/Archive Gallery (1).jpg",
                "/Archive Gallery (1).png",
                "/Archive Gallery (1).webp",
                "/Archive Gallery (2).jpg",
                "/Archive Gallery (2).png",
                "/Archive Gallery (2).webp",
                "/Archive Gallery (3).jpg",
                "/Archive Gallery (3).png",
                "/Archive Gallery (3).webp",
                "/Archive Gallery (4).jpg",
                "/Archive Gallery (4).png",
                "/Archive Gallery (4).webp",
              ].map((src, i) => (
                <div
                  key={i}
                  className="group aspect-square rounded-xl overflow-hidden bg-gray-200"
                >
                  <img
                    src={src}
                    alt={`Gallery image ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
