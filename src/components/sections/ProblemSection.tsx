"use client";

import React from "react";
import { Quote, AlertCircle, CheckCircle2 } from "lucide-react";

export const ProblemSection: React.FC = () => {
  return (
    <section className="bg-paper-dark py-16 md:py-24 border-b border-ink-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-paper rounded-card p-8 md:p-12 border border-ink-10 shadow-card">
          <div className="flex items-center gap-2 text-signal font-bold text-xs uppercase tracking-widest mb-3">
            <AlertCircle size={16} />
            <span>The Reality of Commercial Underwriting</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-ink mb-6 leading-tight">
            Banks and Lenders Don't Fund Ideas. They Fund Documents.
          </h2>

          <div className="space-y-6 text-ink-70 text-base md:text-lg leading-relaxed">
            <p>
              Every year, thousands of viable Canadian businesses are turned down for financing — not because their business concept is weak, but because their documentation fails to meet strict institutional underwriting criteria. Commercial loan officers, BDC risk analysts, and CSBFL credit committees process hundreds of files a week. They do not evaluate potential; they evaluate risk, repayment capacity, and market proof formatted to precise guidelines.
            </p>
            <p>
              When your business plan lacks granular pro forma financials, debt service ratios, sensitivity stress-testing, or competitive validation in the format lenders demand, your application is flagged, delayed, or outright declined. BigPlans.ca eliminates that risk by producing institutional-grade documentation tailored specifically to your target lender's underwriting checklist.
            </p>
          </div>

          {/* Pull Quote Box */}
          <div className="mt-10 p-6 md:p-8 bg-electric-10/60 rounded-card border-l-4 border-electric flex items-start gap-4">
            <Quote size={32} className="text-electric shrink-0 mt-1" />
            <div>
              <p className="text-lg md:text-xl font-bold text-ink leading-snug">
                "We build the exact documentation package each lender is trained to evaluate — so your application gets read, understood, and approved."
              </p>
              <span className="text-xs font-bold text-ink-40 uppercase tracking-wider block mt-3">
                — BigPlans.ca Underwriting Team Standard
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
