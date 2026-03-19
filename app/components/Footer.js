"use client";
import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "Who We Are", href: "/" },
  { label: "3 Zeros", href: "/3-zeros-cultural-empowerment/" },
  { label: "No to Donation", href: "/no-to-donation/" },
  { label: "HED & Mentoring", href: "/higher-education-academic-mentoring/" },
  { label: "Research & Business", href: "/research-social-business/" },
  { label: "Skills Training", href: "/vocational-education-and-training-vet/" },
  { label: "Where We Work", href: "/where-we-work/" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <Image src="/logo.png" alt="WCEIA Logo" width={44} height={44} className="object-contain" />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Women Cultural Empowerment International — empowering women through culture,
              education, and community development globally.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/wceiaorg" target="_blank" rel="noreferrer" aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors duration-200">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
              </a>
              <a href="https://www.linkedin.com/company/111454108" target="_blank" rel="noreferrer" aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors duration-200">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="https://www.instagram.com/wceiaorg/" target="_blank" rel="noreferrer" aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors duration-200">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-base mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-white/70 hover:text-accent text-sm transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-base mb-5">Contact Us</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                <a href="mailto:skh060697@gmail.com" className="hover:text-accent transition-colors">skh060697@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
                <a href="tel:+19023882241" className="hover:text-accent transition-colors">+1 902 388 2241</a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                <a href="https://maps.app.goo.gl/bzi2KvyPwcDd119N9" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors leading-relaxed">
                  Shahida Khanom, 18 Birkdale Crescent, Unit 2, Halifax, Nova Scotia B3M1H5
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-base mb-5">Stay Updated with Our Newsletter</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Subscribe for the latest updates, stories, and opportunities to get involved.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
              />
              <button type="submit" className="bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/50 text-xs">WCEIA International 2025</p>
          <p className="text-white/40 text-xs">
            Design &amp; Developed By:{" "}
            <a href="https://webspires.com.pk" target="_blank" rel="noreferrer" className="hover:text-white/70 transition-colors">
              Webspires Pvt Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
