"use client";

import React from "react";
import { ShieldCheck, CheckCircle2, Award, Clock, Building2, Landmark } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const TrustStrip: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-paper-dark border-b border-ink-10 py-4 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm font-bold text-ink-70">
        <div className="flex items-center gap-2">
          <ShieldCheck size={16} className="text-electric shrink-0" />
          <span>{t.trustStrip.bdc}</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 size={16} className="text-electric shrink-0" />
          <span>{t.trustStrip.csbfl}</span>
        </div>
        <div className="flex items-center gap-2">
          <Landmark size={16} className="text-electric shrink-0" />
          <span>{t.trustStrip.edc}</span>
        </div>
        <div className="flex items-center gap-2">
          <Building2 size={16} className="text-electric shrink-0" />
          <span>{t.trustStrip.fcc}</span>
        </div>
        <div className="flex items-center gap-2">
          <Award size={16} className="text-electric shrink-0" />
          <span>{t.trustStrip.bank}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={16} className="text-electric shrink-0" />
          <span>{t.trustStrip.turnaround}</span>
        </div>
      </div>
    </div>
  );
};
