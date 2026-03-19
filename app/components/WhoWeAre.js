import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section id="AboutUs" className="py-16 md:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Text */}
          <div>
            <p className="text-accent font-semibold text-sm mb-2">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Who we are
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5 text-justify">
              WCEI is an international leading not-for-profit organization with a mission to the
              empowerment of women in situations of family violence, poverty, and cultural injustice.
              Financial and legal support alone cannot help women to be empowered in family and
              society, especially in the communal heritage of developing countries.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify">
              The literacy rate and economic empowerment of women are increasing but that is
              insufficient to prove women&apos;s political leadership. In this modern era, women
              empowerment should focus beyond economic empowerment and overcome the barriers to
              psychological and cultural empowerment of women founded in traditional family heritage.
              We provide support to women to flourish their dreams by guiding them in every walk of
              their life — from educating themselves in renowned institutes to enhancing their
              vocational life skills, empowering themselves in their families and society through
              developing leadership skills.
            </p>
          </div>

          {/* Right — Image + CEO card */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/about-home.jpg"
                alt="Who we are"
                width={800}
                height={600}
                className="w-full object-cover"
              />
            </div>

            {/* CEO Bio Card */}
            <div className="absolute bottom-0 left-0 w-[300px] bg-primary rounded-xl p-6 shadow-2xl">
              <p className="text-white/90 text-sm leading-relaxed mb-5">
                Shahida Khanom, PhD was born and brought up in Bangladesh. She holds a PhD degree
                in Tourism and Cultural Heritage from Griffith University, Australia.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-white">
                  <Image
                    src="/ceo.png"
                    alt="Shahida Khanom"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="text-white font-bold text-base">Shahida Khanom</p>
                  <p className="text-white/70 text-sm">Founder and CEO</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

