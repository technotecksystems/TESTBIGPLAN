"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, FileText, Landmark, BarChart3, Sprout, Globe2, Layers } from "lucide-react";

interface ServicesProps {
  onOpenConsultation: () => void;
}

export const ServicesSection: React.FC<ServicesProps> = ({ onOpenConsultation }) => {
  const services = [
    {
      id: "business-plans",
      title: "Business Plans That Get Funded",
      icon: FileText,
      tagline: "Standard & Turnkey Packages",
      bullets: [
        "Matched to exact credit committee & lender criteria",
        "5–7 business day guaranteed delivery timeline",
        "Bank, government & private investor submission ready",
      ],
      desc: "Full comprehensive business plans built from scratch by credit analysts. Formatted for commercial loan officers, risk managers, and investment committees.",
    },
    {
      id: "loan-packages",
      title: "Complete Loan & Grant Packages",
      icon: Landmark,
      tagline: "Turnkey Credit Submissions",
      bullets: [
        "Underwriting executive summary & credit memo narrative",
        "Debt Service Coverage Ratio (DSCR) & capacity calculations",
        "Collateral schedule, security evaluation & net worth integration",
        "Risk mitigation & contingency stress-test planning",
      ],
      desc: "An end-to-end loan application package designed so your loan officer can immediately present your file to the credit risk department.",
    },
    {
      id: "feasibility-studies",
      title: "Feasibility Studies & Pro Forma Reports",
      icon: BarChart3,
      tagline: "Granular Financial Modeling",
      bullets: [
        "36-month monthly cash flow forecast & operating budget",
        "3-year income statement & balance sheet pro forma",
        "Break-even analysis & sensitivity stress-testing matrix",
        "Capital expenditure (CapEx) schedules & ROI modeling",
      ],
      desc: "Rigorous mathematical modeling built in Excel with dynamic inputs, demonstrating exact debt repayment capacity under multiple economic scenarios.",
    },
    {
      id: "agribusiness",
      title: "Agricultural & Agribusiness Financial Packages",
      icon: Sprout,
      tagline: "Agri-Lender Compliant",
      bullets: [
        "Farm Credit Canada (FCC) & commercial agri-lender compliant",
        "Livestock, crop yield & farmland acquisition models",
        "Seasonal cash flow & commodity price hedging narrative",
      ],
      desc: "Specialized documentation for Canadian farmers, food processors, and agricultural tech operators designed for agri-credit committee standards.",
    },
    {
      id: "export-trade",
      title: "Export & International Trade Documentation",
      icon: Globe2,
      tagline: "EDC & Global Expansion",
      bullets: [
        "Export Development Canada (EDC) guarantee alignment",
        "Foreign market entry feasibility & currency risk analysis",
        "Supply chain & international buyer credit documentation",
      ],
      desc: "Comprehensive market entry and credit documentation for Canadian exporters seeking trade financing, guarantees, and working capital.",
    },
    {
      id: "capital-structuring",
      title: "Capital Structuring & Advisory",
      icon: Layers,
      tagline: "Optimal Debt/Equity Mix",
      bullets: [
        "Senior vs subordinated debt mix optimization",
        "CSBFL vs BDC vs commercial bank program matching",
        "Debt-to-equity ratio balancing & investor cap table prep",
      ],
      desc: "Strategic advisory on structuring your capital request to lower overall cost of capital, maximize leverage, and protect founder equity.",
    },
  ];

  return (
    <section id="services" className="bg-paper py-16 md:py-24 border-b border-ink-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-electric block mb-2">
            Institutional Standards
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink">
            What We Deliver
          </h2>
          <p className="text-ink-70 text-base mt-3">
            Every document package is custom-crafted, fully audited, and delivered ready for immediate lender submission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                id={service.id}
                className="bg-paper p-8 rounded-card border border-ink-10 hover:border-electric/40 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-electric-10 text-electric flex items-center justify-center group-hover:bg-electric group-hover:text-white transition-colors">
                      <Icon size={24} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-electric bg-electric-10 px-3 py-1 rounded-full">
                      {service.tagline}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-ink mb-3 group-hover:text-electric transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-ink-70 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  <div className="space-y-2 mb-6 pt-4 border-t border-ink-10">
                    {service.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs font-semibold text-ink-70">
                        <CheckCircle2 size={15} className="text-success shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-ink-10 flex items-center justify-between">
                  <button
                    onClick={onOpenConsultation}
                    className="text-xs font-bold text-electric hover:text-electric-dark flex items-center gap-1 group/btn"
                  >
                    <span>Request Package Scope</span>
                    <ArrowRight size={14} className="arrow-nudge" />
                  </button>
                  <span className="text-[11px] font-bold text-ink-40">5–7 Day Delivery</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
