"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Clock, Award, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface WhyBigPlansProps {
  onOpenConsultation: () => void;
}

export const WhyBigPlans: React.FC<WhyBigPlansProps> = ({ onOpenConsultation }) => {
  const { t } = useLanguage();

  return (
    <section className="bg-electric text-white py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold border border-white/20">
              <ShieldCheck size={14} />
              <span>{t.whyBigPlans.eyebrow}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              {t.whyBigPlans.headline}
            </h2>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
              {t.whyBigPlans.desc}
            </p>

            <div className="space-y-3 pt-2 text-sm sm:text-base font-medium">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-white shrink-0 mt-0.5" />
                <span>{t.whyBigPlans.b1}</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-white shrink-0 mt-0.5" />
                <span>{t.whyBigPlans.b2}</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-white shrink-0 mt-0.5" />
                <span>{t.whyBigPlans.b3}</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-white shrink-0 mt-0.5" />
                <span>{t.whyBigPlans.b4}</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-white shrink-0 mt-0.5" />
                <span>{t.whyBigPlans.b5}</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenConsultation}
                className="bg-paper hover:bg-paper-dark text-electric font-extrabold py-4 px-8 rounded-lg shadow-xl transition-all text-base inline-flex items-center gap-2 group"
              >
                <span>{t.whyBigPlans.cta}</span>
                <ArrowRight size={18} className="arrow-nudge" />
              </button>
            </div>
          </div>

          {/* Right Column: Statistics & Underwriting Benchmarks */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 space-y-4 shadow-2xl">
              <div className="text-xs font-bold uppercase tracking-widest text-white/80 border-b border-white/10 pb-3 flex items-center justify-between">
                <span>Underwriting Metric</span>
                <span>Target Benchmark</span>
              </div>

              <div className="bg-white/10 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-white/80">{t.whyBigPlans.stat1Label}</div>
                  <div className="text-xl sm:text-2xl font-black text-white mt-1">{t.whyBigPlans.stat1Val}</div>
                </div>
                <Award size={28} className="text-white opacity-80 shrink-0" />
              </div>

              <div className="bg-white/10 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-white/80">{t.whyBigPlans.stat2Label}</div>
                  <div className="text-xl sm:text-2xl font-black text-white mt-1">{t.whyBigPlans.stat2Val}</div>
                </div>
                <Clock size={28} className="text-white opacity-80 shrink-0" />
              </div>

              <div className="bg-white/10 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-white/80">{t.whyBigPlans.stat3Label}</div>
                  <div className="text-xl sm:text-2xl font-black text-white mt-1">{t.whyBigPlans.stat3Val}</div>
                </div>
                <ShieldCheck size={28} className="text-white opacity-80 shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
