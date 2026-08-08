"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, FileText, Briefcase, Building2, Landmark, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface MegaMenuProps {
  activeTab: string | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({
  activeTab,
  onClose,
  onOpenConsultation,
}) => {
  const { t } = useLanguage();
  if (!activeTab) return null;

  return (
    <div
      onMouseLeave={onClose}
      className="absolute top-full left-0 w-full bg-paper border-b border-ink-10 shadow-2xl z-50 animate-fadeIn py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {activeTab === "services" && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4 bg-paper-dark p-6 rounded-card border border-ink-10">
              <span className="text-xs font-bold uppercase tracking-widest text-electric block mb-2">
                {t.megaMenu.servicesTitle}
              </span>
              <h3 className="text-xl font-extrabold text-ink mb-3">
                {t.services.headline}
              </h3>
              <p className="text-xs text-ink-70 leading-relaxed mb-6">
                {t.megaMenu.servicesSub}
              </p>
              <button
                onClick={() => {
                  onClose();
                  onOpenConsultation();
                }}
                className="w-full bg-electric text-white font-bold py-2.5 px-4 rounded-lg text-xs flex items-center justify-center gap-2"
              >
                <span>{t.nav.bookConsultation}</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/services#business-plans"
                onClick={onClose}
                className="p-4 rounded-xl border border-ink-10 hover:border-electric hover:bg-electric-10/30 transition-all group flex items-start gap-3"
              >
                <FileText size={20} className="text-electric shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-ink group-hover:text-electric transition-colors">
                    {t.services.s1Title}
                  </h4>
                  <p className="text-xs text-ink-70 mt-1">{t.services.s1Desc}</p>
                </div>
              </Link>

              <Link
                href="/services#feasibility-studies"
                onClick={onClose}
                className="p-4 rounded-xl border border-ink-10 hover:border-electric hover:bg-electric-10/30 transition-all group flex items-start gap-3"
              >
                <Briefcase size={20} className="text-electric shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-ink group-hover:text-electric transition-colors">
                    {t.services.s2Title}
                  </h4>
                  <p className="text-xs text-ink-70 mt-1">{t.services.s2Desc}</p>
                </div>
              </Link>
            </div>
          </div>
        )}

        {activeTab === "financing" && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4 bg-paper-dark p-6 rounded-card border border-ink-10">
              <span className="text-xs font-bold uppercase tracking-widest text-electric block mb-2">
                {t.megaMenu.financingTitle}
              </span>
              <h3 className="text-xl font-extrabold text-ink mb-3">
                {t.financingPrograms.headline}
              </h3>
              <p className="text-xs text-ink-70 leading-relaxed mb-6">
                {t.megaMenu.financingSub}
              </p>
            </div>

            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/financing-programs#csbfl"
                onClick={onClose}
                className="p-4 rounded-xl border border-ink-10 hover:border-electric hover:bg-electric-10/30 transition-all group flex items-start gap-3"
              >
                <Landmark size={20} className="text-electric shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-ink group-hover:text-electric transition-colors">
                    {t.financingPrograms.p1Name}
                  </h4>
                  <p className="text-xs text-ink-70 mt-1">{t.financingPrograms.p1Tag}</p>
                </div>
              </Link>

              <Link
                href="/financing-programs#bdc"
                onClick={onClose}
                className="p-4 rounded-xl border border-ink-10 hover:border-electric hover:bg-electric-10/30 transition-all group flex items-start gap-3"
              >
                <Building2 size={20} className="text-electric shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-ink group-hover:text-electric transition-colors">
                    {t.financingPrograms.p2Name}
                  </h4>
                  <p className="text-xs text-ink-70 mt-1">{t.financingPrograms.p2Tag}</p>
                </div>
              </Link>
            </div>
          </div>
        )}

        {activeTab === "industries" && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4 bg-paper-dark p-6 rounded-card border border-ink-10">
              <span className="text-xs font-bold uppercase tracking-widest text-electric block mb-2">
                {t.megaMenu.industriesTitle}
              </span>
              <h3 className="text-xl font-extrabold text-ink mb-3">
                {t.whoWeHelp.headline}
              </h3>
              <p className="text-xs text-ink-70 leading-relaxed mb-6">
                {t.megaMenu.industriesSub}
              </p>
            </div>

            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link href="/industries#startups" onClick={onClose} className="p-3 rounded-lg border border-ink-10 hover:border-electric text-xs font-bold text-ink hover:text-electric flex items-center justify-between">
                <span>{t.whoWeHelp.s1Title}</span>
                <ChevronRight size={14} />
              </Link>
              <Link href="/industries#expansion" onClick={onClose} className="p-3 rounded-lg border border-ink-10 hover:border-electric text-xs font-bold text-ink hover:text-electric flex items-center justify-between">
                <span>{t.whoWeHelp.s2Title}</span>
                <ChevronRight size={14} />
              </Link>
              <Link href="/industries#agriculture" onClick={onClose} className="p-3 rounded-lg border border-ink-10 hover:border-electric text-xs font-bold text-ink hover:text-electric flex items-center justify-between">
                <span>{t.whoWeHelp.s3Title}</span>
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
