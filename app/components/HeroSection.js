export default function HeroSection() {
  return (
    <section className="relative min-h-[580px] md:min-h-[680px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero.webp')" }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-primary/65" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-24">
        <span className="inline-block border border-white/60 text-white text-sm px-5 py-1.5 rounded-full mb-6">
          Empowerment
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight mb-6">
          Women Cultural Empowerment{" "}
          <span className="text-accent">International</span>
        </h1>
        <p className="text-white/85 text-base md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
          WCEI supports women in overcoming cultural and economic barriers by providing
          education, life skills, and leadership guidance — helping them thrive in family
          and society.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/#AboutUs"
            className="bg-accent hover:bg-accent-hover text-white px-8 py-3.5 rounded-full font-semibold text-sm md:text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto"
          >
            About Us
          </a>
          <a
            href="/involved"
            className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3.5 rounded-full font-semibold text-sm md:text-base transition-all duration-200 w-full sm:w-auto"
          >
            Get Involved
          </a>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
