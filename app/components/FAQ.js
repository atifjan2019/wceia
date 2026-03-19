"use client";
import { useState } from "react";

const faqs = [
  {
    question: "1. What does WCEI stand for?",
    answer:
      "WCEI stands for Women Cultural Empowerment International. It is a global initiative dedicated to empowering women and communities through cultural identity, creative expression, and heritage-based entrepreneurship. WCEI promotes sustainable development by focusing on culture as a tool for social and economic transformation.",
  },
  {
    question: "2. What Is Cultural Empowerment ?",
    answer:
      "Cultural Empowerment is the process of strengthening individuals and communities by valuing and promoting their traditions, heritage, creativity, and cultural identity. It encourages people — especially marginalized groups — to take pride in their customs, arts, music, rituals, and knowledge, and to use these as tools for personal, social, and economic growth.",
  },
  {
    question: "3. How cultural empowerment focus women ?",
    answer:
      "Cultural Empowerment especially focuses on women because they are often the primary carriers of intangible heritage — like storytelling, festive traditions, music, and rituals. Through cultural tourism, creative industries, and community-based businesses, women can gain financial independence, confidence, and leadership roles while preserving their heritage.",
  },
  {
    question: "4. How Cultural Empowerment link with three zero ?",
    answer:
      "Cultural Empowerment directly supports the Three Zero Goals introduced by Nobel Laureate Muhammad Yunus: Zero Poverty – by creating local cultural businesses. Zero Unemployment – by involving communities, especially women, in sustainable cultural work. Zero Net Carbon Emission – by using eco-friendly practices rooted in traditional lifestyles.",
  },
  {
    question: "5. What Is zero donation ?",
    answer:
      "Zero Donation means moving away from dependency on external aid or charity. Instead of relying on financial donations from foreign countries or institutions, the goal is to empower communities through self-sustaining, culturally rooted businesses that generate income, preserve identity, and build confidence.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Left — Image */}
          <div className="w-full lg:w-[420px] shrink-0 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/faq.jpg"
              alt="WCEI FAQ"
              className="w-full h-full object-cover"
              style={{ minHeight: "480px" }}
            />
          </div>

          {/* Right — FAQ */}
          <div className="flex-1">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
              You Might Be Wondering
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Frequently Asked{" "}
              <span className="text-accent">Questions</span>
              <br />About WCEI
            </h2>

            <div className="divide-y divide-gray-100 border border-gray-100 rounded-xl overflow-hidden shadow-sm">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className={`w-full flex items-center justify-between px-5 py-4 text-left transition-colors ${openIndex === index ? "bg-white" : "bg-white hover:bg-gray-50"}`}
                    style={openIndex === index ? { borderBottom: "2px solid #00BCD4" } : {}}
                  >
                    <span className="font-semibold text-gray-800 text-sm md:text-base pr-4">
                      {faq.question}
                    </span>
                    <span className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${openIndex === index ? "border-accent text-accent" : "border-gray-300 text-gray-400"}`}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points={openIndex === index ? "18 15 12 9 6 15" : "6 9 12 15 18 9"} />
                      </svg>
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-64" : "max-h-0"}`}>
                    <p className="px-5 pt-3 pb-5 text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
