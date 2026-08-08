"use client";

import React from "react";
import { AlertCircle, Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const ProblemSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-paper-dark py-16 md:py-24 border-b border-ink-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-paper rounded-card p-8 md:p-12 border border-ink-10 shadow-card space-y-6">
          <div className="flex items-center gap-2 text-signal font-bold text-xs uppercase tracking-widest">
            <AlertCircle size={16} />
            <span>{t.problem.eyebrow}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-ink leading-tight">
            {t.problem.headline}
          </h2>

          <p className="text-ink-70 text-base md:text-lg leading-relaxed">
            {t.problem.p1}
          </p>

          <p className="text-ink-70 text-base md:text-lg leading-relaxed">
            {t.problem.p2}
          </p>

          <div className="p-6 bg-electric-10 rounded-card border-l-4 border-electric text-lg font-bold text-ink flex items-start gap-4 shadow-sm">
            <Quote size={32} className="text-electric shrink-0 mt-1 opacity-80" />
            <p className="leading-snug">{t.problem.quote}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
