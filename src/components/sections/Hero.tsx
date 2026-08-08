"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Clock, Lock, Award, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-paper pt-10 pb-16 md:pt-16 md:pb-24 border-b border-ink-10 overflow-hidden">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & Primary CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Sector Scope Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-10 text-electric text-xs font-bold border border-electric/20">
              <span className="w-2 h-2 rounded-full bg-electric animate-pulse"></span>
              <span>{t.hero.eyebrow}</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink leading-[1.15] tracking-tight">
              {t.hero.headline}
            </h1>

            {/* Subhead Paragraph */}
            <p className="text-base sm:text-lg text-ink-70 leading-relaxed font-normal max-w-2xl">
              {t.hero.subhead}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenConsultation}
                className="bg-electric hover:bg-electric-dark text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all text-base flex items-center justify-center gap-3 group"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowRight size={18} className="arrow-nudge" />
              </button>

              <Link
                href="/services"
                className="bg-paper hover:bg-paper-dark text-ink font-semibold py-4 px-6 rounded-lg border border-ink-10 transition-colors text-center text-base shadow-sm"
              >
                {t.hero.secondaryCta}
              </Link>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-ink-10 text-xs font-semibold text-ink-70">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-success shrink-0" />
                <span>{t.hero.trust1}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-success shrink-0" />
                <span>{t.hero.trust2}</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock size={16} className="text-success shrink-0" />
                <span>{t.hero.trust3}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-paper bg-ink-10 aspect-[4/3] sm:aspect-[5/4]">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
                alt="Canadian Entrepreneur Strategy Meeting"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/20 to-transparent"></div>

              {/* Floating Credibility Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-paper/95 backdrop-blur-md p-4 rounded-xl border border-ink-10 shadow-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-electric/10 flex items-center justify-center text-electric">
                    <Award size={20} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-electric">
                      {t.hero.badgeTitle}
                    </div>
                    <div className="text-sm font-extrabold text-ink">
                      {t.hero.badgeVal}
                    </div>
                  </div>
                </div>
                <div className="text-xs font-bold text-ink-70 bg-paper-dark px-2.5 py-1 rounded border border-ink-10">
                  BDC-Matched
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
