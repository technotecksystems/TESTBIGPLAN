"use client";

import React from "react";
import { ArrowRight, Phone, ShieldCheck, Clock } from "lucide-react";

interface FinalCTAProps {
  onOpenConsultation: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenConsultation }) => {
  return (
    <section className="bg-electric text-white py-20 md:py-28 relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-electric-dark/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold border border-white/20">
          <Clock size={14} className="text-white" />
          <span>5–7 Business Day Delivery Available Across All Provinces</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight max-w-3xl mx-auto">
          Ready to Turn Your Business Idea Into a Funded One?
        </h2>

        <p className="text-base sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto font-normal">
          Don't let inadequate documentation stand between your business and the capital it needs. Schedule a free, confidential strategy consultation with a BigPlans senior specialist today.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto bg-paper hover:bg-paper-dark text-electric font-extrabold py-5 px-10 rounded-xl shadow-2xl transition-all text-lg flex items-center justify-center gap-3 group"
          >
            <span>Book Your Free Consultation</span>
            <ArrowRight size={20} className="arrow-nudge" />
          </button>

          <a
            href="tel:18005550199"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold py-5 px-8 rounded-xl border border-white/20 transition-all text-base flex items-center justify-center gap-2"
          >
            <Phone size={18} />
            <span>Call 1-800-BIG-PLANS</span>
          </a>
        </div>

        <div className="pt-8 flex flex-wrap items-center justify-center gap-8 text-xs font-semibold text-white/80 border-t border-white/10 max-w-xl mx-auto">
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={16} className="text-white" />
            <span>No Obligation Intake</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={16} className="text-white" />
            <span>Strict NDA Confidentiality</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={16} className="text-white" />
            <span>Direct Credit Analyst Review</span>
          </div>
        </div>
      </div>
    </section>
  );
};
