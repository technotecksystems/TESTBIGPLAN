"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

interface WhyProps {
  onOpenConsultation: () => void;
}

export const WhyBigPlans: React.FC<WhyProps> = ({ onOpenConsultation }) => {
  const points = [
    "Direct working knowledge of CSBFL, BDC, EDC, FCC, and bank credit risk standards",
    "Real financial modeling — dynamic Excel pro formas with sensitivity stress-testing",
    "Industry-specific plans built for your exact sector, market, and business model",
    "Fast, dependable turnaround — complete packages delivered in 5 to 7 business days",
    "Dedicated senior writer and financial analyst assigned as your single point of contact",
  ];

  return (
    <section className="bg-electric text-white py-16 md:py-24 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold border border-white/20">
              <ShieldCheck size={14} className="text-paper" />
              <span>The BigPlans.ca Institutional Advantage</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              We Speak the Language Lenders Use
            </h2>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
              Our writers and financial analysts come directly from commercial lending, credit risk, and institutional finance backgrounds. We don't write generic, template-driven essays. We build mathematically sound, credit-committee-tested documentation packages designed to move your application smoothly through underwriting.
            </p>

            <div className="space-y-4 pt-2">
              {points.map((pt, i) => (
                <div key={i} className="flex items-start gap-3 text-sm sm:text-base font-semibold text-white">
                  <div className="w-6 h-6 rounded-full bg-white text-electric flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <CheckCircle2 size={16} />
                  </div>
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button
                onClick={onOpenConsultation}
                className="bg-paper hover:bg-paper-dark text-electric font-extrabold py-4 px-8 rounded-lg shadow-xl transition-all text-base inline-flex items-center gap-3 group"
              >
                <span>Work With Senior Credit Analysts</span>
                <ArrowRight size={18} className="arrow-nudge" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-white space-y-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/20 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-white/80">Lender Metric Standards</span>
                <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full">Passed Credit Audits</span>
              </div>

              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-xl">
                  <div className="text-xs font-semibold text-white/80">Debt Service Coverage Ratio (DSCR)</div>
                  <div className="text-2xl font-black text-white mt-1">1.25x – 1.50x Compliant</div>
                  <div className="text-xs text-white/70 mt-1">Proves borrower capacity under stress test</div>
                </div>

                <div className="bg-white/10 p-4 rounded-xl">
                  <div className="text-xs font-semibold text-white/80">Pro Forma Delivery Guarantee</div>
                  <div className="text-2xl font-black text-white mt-1">5–7 Business Days</div>
                  <div className="text-xs text-white/70 mt-1">Accelerated 48-hr rush options available</div>
                </div>

                <div className="bg-white/10 p-4 rounded-xl">
                  <div className="text-xs font-semibold text-white/80">Lender Approval Track Record</div>
                  <div className="text-2xl font-black text-white mt-1">$450M+ Funded Deals</div>
                  <div className="text-xs text-white/70 mt-1">Across BDC, CSBFL, & Canadian Chartered Banks</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
