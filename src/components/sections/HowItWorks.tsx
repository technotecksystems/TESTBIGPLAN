"use client";

import React from "react";
import { ArrowRight, MessageSquare, FileCheck, Code2, RefreshCw, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface HowItWorksProps {
  onOpenConsultation: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenConsultation }) => {
  const { t } = useLanguage();

  const steps = [
    {
      step: "01",
      title: t.howItWorks.step1Title,
      desc: t.howItWorks.step1Desc,
      icon: MessageSquare,
    },
    {
      step: "02",
      title: t.howItWorks.step2Title,
      desc: t.howItWorks.step2Desc,
      icon: FileCheck,
    },
    {
      step: "03",
      title: t.howItWorks.step3Title,
      desc: t.howItWorks.step3Desc,
      icon: Code2,
    },
    {
      step: "04",
      title: t.howItWorks.step4Title,
      desc: t.howItWorks.step4Desc,
      icon: RefreshCw,
    },
    {
      step: "05",
      title: t.howItWorks.step5Title,
      desc: t.howItWorks.step5Desc,
      icon: Send,
    },
  ];

  return (
    <section id="how-it-works" className="bg-paper py-16 md:py-24 border-b border-ink-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-electric block mb-2">
            {t.howItWorks.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink">
            {t.howItWorks.headline}
          </h2>
          <p className="text-ink-70 text-base mt-3">
            {t.howItWorks.sub}
          </p>
        </div>

        {/* 5-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-paper p-6 rounded-card border border-ink-10 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-electric group-hover:scale-110 transition-transform">
                      {item.step}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-electric-10 text-electric flex items-center justify-center">
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3 className="font-extrabold text-lg text-ink mb-2 group-hover:text-electric transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-ink-70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onOpenConsultation}
            className="bg-electric hover:bg-electric-dark text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all text-sm inline-flex items-center gap-2 group"
          >
            <span>{t.howItWorks.cta}</span>
            <ArrowRight size={16} className="arrow-nudge" />
          </button>
        </div>
      </div>
    </section>
  );
};
