"use client";

import React from "react";
import Link from "next/link";
import { FileText, Landmark, BarChart3, ArrowRight } from "lucide-react";

export const ThreeUpGrid: React.FC = () => {
  const cards = [
    {
      title: "Business Plans",
      tagline: "Bank & Investor Submission Ready",
      description: "Custom written, lender-specific business plans tailored to credit committee guidelines for BDC, CSBFL, chartered banks, and private equity.",
      icon: FileText,
      href: "/services#business-plans",
      badge: "Most Requested",
    },
    {
      title: "Financing Packages",
      tagline: "Complete Underwriting Submissions",
      description: "End-to-end loan application files including debt service coverage, executive summaries, collateral schedules, and lender risk mitigation.",
      icon: Landmark,
      href: "/services#loan-packages",
      badge: "Turnkey Service",
    },
    {
      title: "Feasibility & Advisory",
      tagline: "Pro Formas & Financial Models",
      description: "36-month monthly projections, sensitivity analyses, break-even modeling, and capital structure advisory built by experienced underwriters.",
      icon: BarChart3,
      href: "/services#feasibility-studies",
      badge: "36-Mo Projections",
    },
  ];

  return (
    <section className="bg-paper py-16 border-b border-ink-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-electric block mb-2">
            Dedicated to Canadian Entrepreneurs
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink">
            Three Core Pillars of Capital Success
          </h2>
          <p className="text-ink-70 text-sm sm:text-base mt-2">
            Every document we write is engineered to pass credit risk evaluation on the first review.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="bg-paper p-8 rounded-card border border-ink-10 hover:border-electric/40 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-electric-10 text-electric flex items-center justify-center group-hover:bg-electric group-hover:text-white transition-colors">
                      <Icon size={24} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-ink-70 bg-ink-10/60 px-3 py-1 rounded-full">
                      {card.badge}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-electric block mb-1">{card.tagline}</span>
                  <h3 className="text-xl font-bold text-ink mb-3 group-hover:text-electric transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-ink-70 text-sm leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                <Link
                  href={card.href}
                  className="inline-flex items-center gap-2 text-sm font-bold text-electric group-hover:text-electric-dark transition-colors pt-4 border-t border-ink-10"
                >
                  <span>Explore {card.title}</span>
                  <ArrowRight size={16} className="arrow-nudge" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
