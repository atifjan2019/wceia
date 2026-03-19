"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What does WCEI stand for, and what is it about?",
    answer:
      "WCEI stands for Women Cultural Empowerment International. It is a global initiative dedicated to empowering women and communities through cultural identity, creative expression, and heritage-based entrepreneurship. WCEI promotes sustainable development by focusing on culture as a tool for social and economic transformation.",
  },
  {
    question: "What is Cultural Empowerment?",
    answer:
      "Cultural Empowerment is the process of strengthening individuals and communities by valuing and promoting their traditions, heritage, creativity, and cultural identity. It encourages people — especially marginalized groups — to take pride in their customs, arts, music, rituals, and knowledge, and to use these as tools for personal, social, and economic growth.",
  },
  {
    question: "Why does Cultural Empowerment focus on women?",
    answer:
      "Cultural Empowerment especially focuses on women because they are often the primary carriers of intangible heritage — like storytelling, festive traditions, music, and rituals. Through cultural tourism, creative industries, and community-based businesses, women can gain financial independence, confidence, and leadership roles while preserving their heritage.",
  },
  {
    question: "How does Cultural Empowerment connect to the Three Zeros?",
    answer:
      "Cultural Empowerment directly supports the Three Zero Goals introduced by Nobel Laureate Muhammad Yunus: 1. Zero Poverty – by creating local cultural businesses. 2. Zero Unemployment – by involving communities, especially women, in sustainable cultural work. 3. Zero Net Carbon Emission – by using eco-friendly practices rooted in traditional lifestyles.",
  },
  {
    question: "What does Zero Donation mean?",
    answer:
      "Zero Donation means moving away from dependency on external aid or charity. Instead of relying on financial donations from foreign countries or institutions, the goal is to empower communities through self-sustaining, culturally rooted businesses that generate income, preserve identity, and build confidence.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            You&apos;ve Got Questions
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Frequently Asked Questions{" "}
            <span className="text-accent">About WCEI</span>
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden divide-y divide-gray-100">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-800 text-sm md:text-base pr-4">
                  {faq.question}
                </span>
                <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? "bg-accent text-white rotate-180" : "bg-gray-100 text-gray-500"}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-64" : "max-h-0"}`}>
                <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
