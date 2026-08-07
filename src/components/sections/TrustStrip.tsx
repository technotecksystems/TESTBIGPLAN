"use client";

import React from "react";
import { ShieldCheck, Clock, Award, Building, CheckCircle2 } from "lucide-react";

export const TrustStrip: React.FC = () => {
  const items = [
    { label: "BDC-Ready", icon: ShieldCheck },
    { label: "CSBFL-Compliant", icon: Award },
    { label: "EDC Documentation", icon: Building },
    { label: "Farm Credit Canada Packages", icon: CheckCircle2 },
    { label: "Bank & Private Investor Ready", icon: ShieldCheck },
    { label: "5–7 Day Turnaround", icon: Clock },
  ];

  return (
    <div className="bg-paper-dark border-y border-ink-10 py-4 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-center gap-2 text-ink-70 text-xs sm:text-sm font-semibold">
              <Icon size={16} className="text-electric shrink-0" />
              <span>{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
