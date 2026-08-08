"use client";

import React from "react";
import { ArrowRight, Calendar, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface FinalCTAProps {
  onOpenConsultation: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenConsultation }) => {
  const { t } = useLanguage();

  return (
    <section className="bg-electric text-white py-20 md:py-28 relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold border border-white/20">
          <ShieldCheck size={14} />
          <span>{t.finalCta.eyebrow}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
          {t.finalCta.headline}
        </h2>

        <p className="text-base sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto font-normal">
          {t.finalCta.desc}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto bg-paper hover:bg-paper-dark text-electric font-black py-5 px-10 rounded-xl shadow-2xl transition-all text-lg flex items-center justify-center gap-3 group"
          >
            <Calendar size={20} />
            <span>{t.finalCta.cta}</span>
            <ArrowRight size={20} className="arrow-nudge" />
          </button>
        </div>

        <div className="pt-6 text-xs text-white/70 flex flex-wrap items-center justify-center gap-6 font-semibold">
          <span>✓ 100% Confidential</span>
          <span>•</span>
          <span>✓ Direct Analyst Access</span>
          <span>•</span>
          <span>✓ No Obligations</span>
        </div>
      </div>
    </section>
  );
};
