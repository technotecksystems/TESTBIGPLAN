"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, FileText, Briefcase, TrendingUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const ThreeUpGrid: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-paper py-16 md:py-24 border-b border-ink-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-electric block mb-2">
            {t.threePillars.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink">
            {t.threePillars.title}
          </h2>
          <p className="text-ink-70 text-base mt-3">
            {t.threePillars.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Business Plans */}
          <div className="bg-paper p-8 rounded-card border border-ink-10 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-electric-10 text-electric flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FileText size={24} />
              </div>
              <div className="text-xs font-bold text-electric uppercase tracking-wider mb-2">
                {t.threePillars.p1Tag}
              </div>
              <h3 className="text-xl font-extrabold text-ink mb-3 group-hover:text-electric transition-colors">
                {t.threePillars.p1Title}
              </h3>
              <p className="text-ink-70 text-sm leading-relaxed mb-6">
                {t.threePillars.p1Desc}
              </p>
            </div>

            <Link
              href="/services#business-plans"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-electric group-hover:text-electric-dark transition-colors pt-4 border-t border-ink-10"
            >
              <span>{t.threePillars.p1Link}</span>
              <ArrowRight size={16} className="arrow-nudge" />
            </Link>
          </div>

          {/* Card 2: Financing Packages */}
          <div className="bg-paper p-8 rounded-card border border-ink-10 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-electric-10 text-electric flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Briefcase size={24} />
              </div>
              <div className="text-xs font-bold text-electric uppercase tracking-wider mb-2">
                {t.threePillars.p2Tag}
              </div>
              <h3 className="text-xl font-extrabold text-ink mb-3 group-hover:text-electric transition-colors">
                {t.threePillars.p2Title}
              </h3>
              <p className="text-ink-70 text-sm leading-relaxed mb-6">
                {t.threePillars.p2Desc}
              </p>
            </div>

            <Link
              href="/financing-programs"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-electric group-hover:text-electric-dark transition-colors pt-4 border-t border-ink-10"
            >
              <span>{t.threePillars.p2Link}</span>
              <ArrowRight size={16} className="arrow-nudge" />
            </Link>
          </div>

          {/* Card 3: Feasibility Studies & Financial Modeling */}
          <div className="bg-paper p-8 rounded-card border border-ink-10 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-electric-10 text-electric flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp size={24} />
              </div>
              <div className="text-xs font-bold text-electric uppercase tracking-wider mb-2">
                {t.threePillars.p3Tag}
              </div>
              <h3 className="text-xl font-extrabold text-ink mb-3 group-hover:text-electric transition-colors">
                {t.threePillars.p3Title}
              </h3>
              <p className="text-ink-70 text-sm leading-relaxed mb-6">
                {t.threePillars.p3Desc}
              </p>
            </div>

            <Link
              href="/services#feasibility-studies"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-electric group-hover:text-electric-dark transition-colors pt-4 border-t border-ink-10"
            >
              <span>{t.threePillars.p3Link}</span>
              <ArrowRight size={16} className="arrow-nudge" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
