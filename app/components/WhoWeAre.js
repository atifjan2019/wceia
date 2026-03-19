import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section id="AboutUs" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
              About WCEIA
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Who we are
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              WCEI is an international leading not-for-profit organization with a mission to the
              empowerment of women in situations of family violence, poverty, and cultural injustice.
              Financial and legal support alone cannot help women to be empowered in family and
              society, especially in the communal heritage of developing countries.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              The literacy rate and economic empowerment of women are increasing but that is
              insufficient to prove women's political leadership. In this modern era, women
              empowerment should focus beyond economic empowerment and overcome the barriers to
              psychological and cultural empowerment of women founded in traditional family heritage.
              We provide support to women to flourish their dreams by guiding them in every walk of
              their life — from educating themselves in renowned institutes to enhancing their
              vocational life skills, empowering themselves in their families and society through
              developing leadership skills.
            </p>
            <a
              href="/#AboutUs"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold text-sm transition-colors group"
            >
              Learn more about us
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          {/* Image with CEO info */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/about-home.jpg"
                alt="Who we are"
                fill
                className="object-cover"
              />
            </div>
            {/* CEO Card */}
            <div className="absolute -bottom-6 -left-4 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3 max-w-[220px]">
              <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                <Image src="/ceo.png" alt="CEO" width={48} height={48} className="object-cover w-full h-full" />
              </div>
              <div>
                <p className="font-bold text-gray-800 text-sm">Dr. Shahida Khanom</p>
                <p className="text-accent text-xs font-medium">Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
