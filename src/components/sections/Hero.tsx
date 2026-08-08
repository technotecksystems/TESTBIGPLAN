"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield } from "lucide-react";

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="bg-paper pt-8 pb-12 md:pt-16 md:pb-20 overflow-hidden relative border-b border-ink-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-10 text-electric text-xs font-bold border border-electric/20">
              <span className="w-2 h-2 rounded-full bg-electric animate-pulse"></span>
              <span>Serving all industries across Canada — every sector except oil & gas.</span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink leading-[1.15] tracking-tight">
              We Write the Documents That Get Canadian Businesses Funded.
            </h1>

            {/* Subhead */}
            <p className="text-base sm:text-lg text-ink-70 leading-relaxed max-w-2xl font-normal">
              Business plans, financial models, and complete lending packages for start-ups, established businesses, farms, and developers — built to meet the exact standards required by BDC, CSBFL lenders, EDC, Farm Credit Canada, chartered banks, and private investors.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenConsultation}
                className="bg-electric hover:bg-electric-dark text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all text-base flex items-center justify-center gap-3 group"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight size={18} className="arrow-nudge" />
              </button>

              <Link
                href="/services"
                className="bg-paper hover:bg-paper-dark text-ink font-semibold py-4 px-6 rounded-lg border border-ink-10 hover:border-ink-40 transition-all text-base text-center"
              >
                View Our Services
              </Link>
            </div>

            {/* Fast Credibility Checklist */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-ink-10 text-xs font-medium text-ink-70">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-success shrink-0" />
                <span>BDC & Bank Credit Standards</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-success shrink-0" />
                <span>5–7 Day Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-success shrink-0" />
                <span>100% Confidential Service</span>
              </div>
            </div>
          </div>

          {/* Right Column: BDC-Style Real Photography Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Rounded Photography Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-paper bg-ink-10 aspect-[4/3] sm:aspect-[5/4]">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
                  alt="Canadian Business Entrepreneur and Financial Advisor reviewing lending documentation"
                  fill
                  priority
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent"></div>

                {/* Overlaid Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-paper/95 backdrop-blur-md p-4 rounded-xl border border-ink-10 shadow-lg flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-electric">Lender Acceptance</div>
                    <div className="text-sm font-extrabold text-ink">98.4% Package Approval Rate</div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-electric/10 flex items-center justify-center text-electric">
                    <Shield size={20} />
                  </div>
                </div>
              </div>

              {/* Decorative Accent Pill */}
              <div className="absolute -top-4 -right-4 bg-ink text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg border border-ink-70 hidden sm:flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-signal"></span>
                <span>CSBFL & BDC Approved Formats</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
