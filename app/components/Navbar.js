"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  {
    label: "Who We Are",
    href: "/#AboutUs",
    children: [
      { label: "About Us", href: "/#AboutUs" },
      { label: "Founder and CEO", href: "/founder-and-ceo-2/" },
      { label: "Leading Team", href: "/our-team/#team" },
      { label: "Archives & Gallery", href: "/archives/" },
    ],
  },
  {
    label: "3 Zeros",
    href: "/3-zeros-cultural-empowerment/",
    children: [
      { label: "Nobel laureate Yunus", href: "/3-zeros-cultural-empowerment/#NobellaureateYunus" },
      { label: "Advancing Three Zero", href: "/3-zeros-cultural-empowerment/#AdvancingThreeZero" },
      { label: "Media", href: "/media-posts/" },
      { label: "Blog", href: "/blogs" },
      { label: "Podcast", href: "/podcast/" },
      { label: "Achievement", href: "/achievement/" },
      { label: "Where We Work", href: "/where-we-work/" },
    ],
  },
  {
    label: "No to Donation",
    href: "/no-to-donation/",
    children: [
      { label: "Yes, to Cultural Empowerment?", href: "/no-to-donation/#Yes,toCulturalEmpowerment?" },
      { label: "Get involved", href: "/involved" },
      { label: "Cultural dependence and beneficiaries", href: "/no-to-donation/#Culturaldependenceandbeneficiaries" },
      { label: "Cultural Empowerment Through Social Business", href: "/no-to-donation/#CulturalEmpowermentThroughSocialBusiness" },
    ],
  },
  {
    label: "HED & Mentoring",
    href: "/higher-education-academic-mentoring/",
    children: [
      { label: "Why Academic Mentoring?", href: "/higher-education-academic-mentoring/#whyAcademicMentoring" },
      { label: "Local to Global?", href: "/higher-education-academic-mentoring/#LocaltoGlobal?" },
      { label: "Our Services", href: "/higher-education-academic-mentoring/#OurServices" },
      { label: "Mentor Profiles", href: "/staff" },
    ],
  },
  {
    label: "Research & Business",
    href: "/research-social-business/",
    children: [
      { label: "Why Research?", href: "/research-social-business/#WhyResearchMatters" },
      { label: "Journal Author Club", href: "/driving-change/" },
      { label: "Become a partner", href: "/research-social-business/#partner" },
    ],
  },
  {
    label: "Skills Training",
    href: "/vocational-education-and-training-vet/",
    children: [
      { label: "Family-Based Caregiving Training", href: "/vocational-education-and-training-vet/#Family-BasedCaregivingTraining" },
      { label: "Social Worker and Legal Aid", href: "/vocational-education-and-training-vet/#SocialWorkerandLegalAid" },
      { label: "Economic Incentives", href: "/vocational-education-and-training-vet/#EconomicIncentives" },
      { label: "Beyond the Middlemen", href: "/vocational-education-and-training-vet/#middlemen" },
    ],
  },
];

function DropdownItem({ item }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        className="flex items-center gap-1 text-white/90 hover:text-white px-3 xl:px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md hover:bg-white/10 whitespace-nowrap"
      >
        {item.label}
        {item.children && (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
            <polyline points="6 9 12 15 18 9" />
          </svg>
        )}
      </Link>
      {item.children && open && (
        <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 py-1 overflow-hidden">
          {item.children.map((child) => (
            <Link
              key={child.label}
              href={child.href}
              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors duration-150"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  return (
    <nav className="bg-primary fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo.png"
              alt="WCEIA Logo"
              width={48}
              height={48}
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <DropdownItem key={item.label} item={item} />
            ))}
            <Link
              href="/involved"
              className="ml-3 bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
            >
              Get Involved
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-screen" : "max-h-0"}`}>
        <div className="bg-primary-dark px-4 py-3 space-y-1 border-t border-white/10">
          {navItems.map((item, i) => (
            <div key={item.label}>
              <button
                onClick={() => setMobileExpanded(mobileExpanded === i ? null : i)}
                className="w-full flex items-center justify-between text-white/80 hover:text-white hover:bg-white/10 px-3 py-2.5 rounded-md text-sm font-medium transition-colors"
              >
                {item.label}
                {item.children && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className={`transition-transform ${mobileExpanded === i ? "rotate-180" : ""}`}>
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                )}
              </button>
              {item.children && mobileExpanded === i && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-accent pl-3">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block text-white/60 hover:text-white py-1.5 text-sm transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/involved"
            onClick={() => setMobileOpen(false)}
            className="block text-center bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-full text-sm font-semibold mt-3 transition-all"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </nav>
  );
}
