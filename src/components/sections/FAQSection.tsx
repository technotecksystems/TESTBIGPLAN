"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const FAQSection: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { question: t.faq.q1, answer: t.faq.a1 },
    { question: t.faq.q2, answer: t.faq.a2 },
    { question: t.faq.q3, answer: t.faq.a3 },
    { question: t.faq.q4, answer: t.faq.a4 },
    { question: t.faq.q5, answer: t.faq.a5 },
  ];

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-paper-dark py-16 md:py-24 border-b border-ink-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-electric block mb-2">
            {t.faq.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink">
            {t.faq.headline}
          </h2>
          <p className="text-ink-70 text-base mt-3">
            {t.faq.sub}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-paper rounded-card border border-ink-10 shadow-card overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-6 font-extrabold text-base sm:text-lg text-ink flex items-center justify-between gap-4 hover:text-electric transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle size={20} className="text-electric shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-ink-40 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-electric" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm text-ink-70 leading-relaxed border-t border-ink-10/50 pt-4 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
