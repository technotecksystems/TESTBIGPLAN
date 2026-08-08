"use client";

import React from "react";
import { ArrowRight, PhoneCall, FileSearch, PenTool, CheckCircle, Send } from "lucide-react";

interface HowProps {
  onOpenConsultation: () => void;
}

export const HowItWorks: React.FC<HowProps> = ({ onOpenConsultation }) => {
  const steps = [
    {
      num: "01",
      title: "Free Consultation",
      desc: "We discuss your project, target funding amount, timeline, and intended lender (BDC, CSBFL, chartered bank, EDC, FCC, or private investor).",
      icon: PhoneCall,
    },
    {
      num: "02",
      title: "Document Scope & Quote",
      desc: "We define the exact documentation package required, outline data inputs needed from you, and provide a clear fixed-fee proposal.",
      icon: FileSearch,
    },
    {
      num: "03",
      title: "We Build It",
      desc: "Our team of financial analysts and credit writers drafts your business plan, builds your pro forma model, and structures your loan package.",
      icon: PenTool,
    },
    {
      num: "04",
      title: "Review & Refine",
      desc: "We review the full draft with you, incorporate your feedback, and ensure every detail aligns with your operational realities and lender expectations.",
      icon: CheckCircle,
    },
    {
      num: "05",
      title: "Submit With Confidence",
      desc: "You receive your final, submission-ready documentation package in PDF and Excel formats — structured to pass credit committee evaluation.",
      icon: Send,
    },
  ];

  return (
    <section id="how-it-works" className="bg-paper py-16 md:py-24 border-b border-ink-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-electric block mb-2">
            Streamlined 5-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink">
            How It Works
          </h2>
          <p className="text-ink-70 text-base mt-3">
            From initial strategy session to final lender submission package in 5–7 business days.
          </p>
        </div>

        {/* Horizontal Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-paper p-6 rounded-card border border-ink-10 shadow-card hover:border-electric transition-all group relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-electric">{step.num}</span>
                    <div className="w-10 h-10 rounded-lg bg-electric-10 text-electric flex items-center justify-center group-hover:bg-electric group-hover:text-white transition-colors">
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-ink mb-2 group-hover:text-electric transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-ink-70 leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>

                <div className="text-[11px] font-bold text-ink-40 pt-3 border-t border-ink-10 flex items-center justify-between">
                  <span>Step {index + 1} of 5</span>
                  {index < 4 && <ArrowRight size={12} className="hidden md:block text-ink-40" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenConsultation}
            className="bg-electric hover:bg-electric-dark text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all text-base inline-flex items-center gap-3 group"
          >
            <span>Start Step 1: Free Consultation</span>
            <ArrowRight size={18} className="arrow-nudge" />
          </button>
        </div>
      </div>
    </section>
  );
};
