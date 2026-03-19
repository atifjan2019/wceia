import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Our Team - Women Cultural Empowerment International (WCEI)",
  description:
    "Meet the dedicated leadership team and potential team members powering WCEI's mission of cultural empowerment.",
};

const leadershipTeam = [
  {
    name: "Professor Noel Scott",
    role: "Chief Adviser",
    image: "/team/noel-scott.jpg",
    bio: `Professor Noel Scott was Dr. Shahida Khanom's PhD supervisor at the Griffith Institute of Tourism, Australia. Noel is a Professor and was Deputy Director of the Griffith Institute for Tourism. His research interests include the study of tourism experiences, destination management and marketing. He has over 210 academic articles published including 13 books and has supervised 19 doctoral students. He has 26 years of experience as a tourism consultant and academic researcher, with international clients including UNWTO, OECD, ASEAN, and the Australian Department of Foreign Affairs and Trade. Currently, he is an Adjunct Professor of Tourism Management at the Sustainability Research Centre, University of the Sunshine Coast.`,
    background: [
      "PhD degree from an International reputable university.",
      "Experience as an international academic with reputable publication and people management.",
      "Experience supporting projects in education and empowerment.",
      "Experience designing and/or implementing women inclusion programming.",
      "Knowledge of results-based monitoring for cultural empowerment and inclusion.",
      "Execution of International Research Project on cultural tourism and cultural empowerment.",
      "Experience working within an international NGO context.",
      "Knowledge of the project implementation in developing and developed countries.",
    ],
  },
  {
    name: "Rawan Osman PhD",
    role: "Director Academic",
    image: "/team/rawan-osman.jpg",
    bio: `Rawan is a Heritage Planner and Researcher with a PhD in Conservation and Heritage Studies from University College Dublin. Her work examines how migrant communities and minorities shape historic urban landscapes and contemporary architectural spaces. She brings extensive interdisciplinary experience in historic and archival research, spatial and architectural analysis, planning policy evaluation, and qualitative stakeholder engagement.`,
    background: [
      "PhD holder with expertise in mentoring, research, funding, and scholarship networking.",
      "Strong research skills with high-quality publications and academic integrity.",
      "Experience creating and delivering workshops, webinars, and educational materials.",
      "Skilled in writing grant proposals and securing funding.",
      "Excellent communication skills; engage with diverse audiences and stakeholders.",
    ],
  },
  {
    name: "Nina Aminzadeh PhD Enrolled",
    role: "Director Administrative Operation",
    image: "/team/nina-aminzadeh.jpg",
    bio: `Nina Aminzadeh is an Iranian researcher and practitioner with over a decade of experience working directly with local communities and Indigenous peoples to support participatory governance of natural water resources and community-led sustainability. She is currently a PhD candidate at Ca' Foscari University of Venice. Her research explores customary governance systems, gendered power structures, and women's agency through a transdisciplinary approach.`,
    background: [
      "Assist Executive Officer with admin tasks, reports, and calendar management.",
      "Coordinate Board/committee meetings, agendas, minutes, and follow-ups.",
      "Ensure legal compliance, records management, and document filing.",
      "Prepare reports to support Board decisions and AGM.",
      "Handle memberships, calls, and visitor greetings professionally.",
    ],
  },
  {
    name: "Patricia Lucas Petersen",
    role: "Director Vocational",
    image: "/team/patricia-petersen.jpg",
    bio: `Patricia Lucas Petersen is a Faroese-based cultural advocate and project leader with extensive experience in community engagement, educational support, and cross-border collaboration. She designs and manages educational and cultural initiatives that promote empowerment, inclusion, and cross-cultural understanding. She holds a BA in Anthropology and Environmental Science from SNHU and an MA in Conservation from Uppsala University, Sweden.`,
    background: [
      "University degree and vocational training from a reputed university.",
      "Lead growth and expansion of vocational, career, and employment services.",
      "Develop and track KPIs to improve services and outcomes.",
      "Execute plans for better service delivery, client results, and efficiency.",
      "Promote vocational services through networking and presentations.",
    ],
  },
  {
    name: "Betty Akoth Onyando",
    role: "Global Communications & Marketing Coordinator",
    image: "/team/betty-onyando.jpg",
    bio: `Betty Akoth Onyando is a communications and research professional dedicated to transforming ideas into impact through strategic storytelling and evidence-based advocacy. With over eleven years of experience across media, policy, and development communication. She holds a Master's degree in International Relations from USIU-Africa and a Bachelor's in Communication from Daystar University.`,
    background: [
      "University degree in Journalism, Communications, Marketing or 2 years recent experience.",
      "Knowledge of fundraising standards, ethics, protocol, and diplomacy.",
      "Skilled in creating work-back schedules, critical paths, and resource planning.",
      "Experience supervising student staff/volunteers.",
      "Proven commitment to decolonizing, equity, diversity, and inclusion.",
    ],
  },
  {
    name: "Sufia Khanom PhD",
    role: "Academic Co-ordinator (Bangladesh)",
    image: "/team/sufia-khanom.jpg",
    bio: `Dr. Sufia Khanom is a senior research fellow and environmental, gender, and climate scholar with over nineteen years of experience. She has led research projects examining the intersection of climate change, natural resource management, gender equity, and human security. She holds a PhD from Macquarie University and is currently at the Bangladesh Institute of International & Strategic Studies (BIISS).`,
    background: [
      "PhD holder with expertise in mentoring, research, funding, and scholarship networking.",
      "Strong research skills with high-quality publications and academic integrity.",
      "Experience creating and delivering workshops, webinars, and educational materials.",
      "Skilled in writing grant proposals and securing funding.",
      "Strong organizational skills for managing multiple projects efficiently.",
    ],
  },
  {
    name: "Giacomo Martinis",
    role: "Social Innovation Specialist",
    image: "/team/giacomo-martinis.jpg",
    bio: `Giacomo Martinis is an architect and cultural heritage professional with extensive international experience in heritage preservation, built environment research, and project management of cultural development initiatives. He holds degrees from UCL, ENSA Paris-Val de Seine, and the Universities of Florence and Venice. He has worked across the private sector, UNESCO's Culture Sector, and various civil society groups.`,
    background: [
      "Build and maintain relationships with employees, customers, and community partners.",
      "Develop and communicate a strong brand message reflecting social purpose.",
      "Track, analyze, and report social impact; identify improvements.",
      "Create strategies for funding and financial sustainability of projects.",
      "Guide, train, and support teams on social enterprise initiatives.",
    ],
  },
  {
    name: "Dafer Sief",
    role: "Volunteer Co-ordinator",
    image: "/team/dafer-sief.jpg",
    bio: `Dafer Sief is a program and policy professional committed to advancing refugee rights, inclusion, and equitable immigration policies. With over six years of experience across humanitarian and refugee-led initiatives. He is currently pursuing a master's in criminal justice administration at Niagara University and is based in Oakville, Canada.`,
    background: [
      "Post-secondary degree from a reputed university.",
      "Collaborative team player with strong communication skills.",
      "Experienced in creating training manuals and program materials.",
      "Solution-oriented with strong troubleshooting abilities.",
      "Proactive and able to work independently.",
    ],
  },
  {
    name: "A T M Ishaque",
    role: "Communication & Marketing Coordinator (Bangladesh)",
    image: "/team/atm-ishaque.jpg",
    bio: `Journalist Ishaque has been in journalism and communication for about thirty years with the number of remarkable newspapers including The Prothom Alo in Bangladesh. He is a graduate in journalism and mass communication from the reputed Dhaka University, Bangladesh.`,
    background: [
      "University degree in Journalism, Communications, or Marketing.",
      "Knowledge of fundraising standards, ethics, protocol, and diplomacy.",
      "Experience developing work-back schedules and critical paths.",
      "Experience supervising student staff and/or volunteers.",
      "Proven track record in equity, diversity, and inclusion practices.",
    ],
  },
  {
    name: "Atif Jan",
    role: "IT Co-ordinator",
    image: "/team/atif-jan.jpg",
    bio: `Born and raised in Charsadda, Pakistan, Atif Jan pursued his passion for technology by completing a bachelor's degree in computer science from Agriculture University Peshawar. Atif's biggest achievement so far has been turning non-profitable businesses into profitable ones using digital strategies. His ultimate vision is to establish a global tech company that innovates at the intersection of marketing, technology, and digital transformation.`,
    background: [
      "Customer service experience",
      "Digital Marketing",
      "Web Development",
      "CRM",
      "Complex Integration Expert",
    ],
  },
  {
    name: "Touhid Ebne Safayet, MBA",
    role: "Financial Operations Manager",
    image: "/team/touhid-safayet.jpg",
    bio: `Touhid has a Master's degree in Strategic Change Management from Trent University, Canada, and an MBA from Dhaka University, Bangladesh. He is a customer-focused professional with a strong track record in banking, financial services and mortgage administration. He brings expertise in delivering tailored financial solutions while minimizing risk and ensuring regulatory compliance.`,
    background: [
      "Have a reputed university degree in a relevant field.",
      "Lead annual budget preparation aligned with business goals.",
      "Prepare and review accurate financial statements as per GAAP/IFRS.",
      "Oversee month-end, quarter-end, and year-end closings.",
      "Conduct variance analysis and provide recommendations to management.",
    ],
  },
];

const potentialMembers = [
  { name: "Sean Burke", role: "Nonprofit Executive, Hope International" },
  { name: "Dr. Reza Soltani", role: "President @ Institute of Tourism" },
  { name: "Ravindra Ngo", role: "Founder @ The Asian Network" },
  { name: "Claire McGuire", role: "Policy and Advocacy Manager" },
  { name: "Mike McPhee MA", role: "Instructor - Tourism Management, College of Rockies" },
  { name: "Stephanie Wighton", role: "Head of Marketing, Ray White Alliance" },
  { name: "Marina Hernandez", role: "Director of Marketing at The St. Regis Toronto" },
  { name: "Amila Indika, CEE", role: "Senior Lecturer, University of Vocational Technology" },
];

function CheckIcon() {
  return (
    <span
      className="mt-1 shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
      style={{ backgroundColor: "#EF8B1D" }}
    >
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}

export default function OurTeam() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section className="relative flex items-center justify-center overflow-hidden" style={{ height: "50vh" }}>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/hero.webp')" }}
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white">Our Team</h1>
            <p className="text-white/70 text-sm mt-3">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span className="mx-2">›</span>
              <span>Our Team</span>
            </p>
          </div>
        </section>

        {/* ── Leadership Tag ── */}
        <section className="pt-16 pb-4">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 text-center">
            <span
              className="inline-block text-sm font-semibold tracking-widest uppercase px-5 py-2 rounded-full text-white"
              style={{ backgroundColor: "#EF8B1D" }}
            >
              Leadership Team
            </span>
          </div>
        </section>

        {/* ── Team Members ── */}
        <section className="pb-16">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 space-y-16">
            {leadershipTeam.map((member, i) => (
              <div
                key={member.name}
                className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 items-start py-10 border-b border-gray-100 last:border-b-0`}
              >
                {/* Photo */}
                <div className="w-full lg:w-64 shrink-0">
                  <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{member.name}</h2>
                  <p className="text-sm font-semibold mb-4" style={{ color: "#EF8B1D" }}>{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.bio}</p>

                  <h3 className="text-base font-bold text-gray-800 mb-3">Background</h3>
                  <ul className="space-y-2.5">
                    {member.background.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckIcon />
                        <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Potential Team Members ── */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="text-center mb-12">
              <span
                className="inline-block text-sm font-semibold tracking-widest uppercase px-5 py-2 rounded-full text-white"
                style={{ backgroundColor: "#EF8B1D" }}
              >
                Potential Team Members
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {potentialMembers.map((member) => (
                <div
                  key={member.name}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 text-center"
                >
                  <div className="w-20 h-20 mx-auto rounded-full bg-gray-100 flex items-center justify-center text-gray-300 mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-1">{member.name}</h3>
                  <p className="text-xs text-gray-500 leading-snug">{member.role}</p>
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
