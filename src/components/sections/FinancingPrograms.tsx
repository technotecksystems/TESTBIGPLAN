"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Landmark, ShieldCheck, ArrowRight, Building, Award, CheckCircle2, ChevronRight } from "lucide-react";

interface ProgramProps {
  onOpenConsultation: () => void;
}

export const FinancingPrograms: React.FC<ProgramProps> = ({ onOpenConsultation }) => {
  const [activeId, setActiveId] = useState("csbfl");

  const programs = [
    {
      id: "csbfl",
      title: "CSBFL Loans",
      subtitle: "Canada Small Business Financing Program",
      lenderType: "Government-Backed Federal Program",
      maxCapital: "Up to $1.15 Million",
      description: "Government-backed loan program under Innovation, Science and Economic Development Canada (ISED). Provides financing for land, commercial real estate, equipment, and leasehold improvements.",
      keyRequirements: [
        "Strict federal eligibility structuring & asset allocation",
        "Debt Service Coverage Ratio (DSCR) proof ≥ 1.25x",
        "Personal guarantee & asset appraisal documentation",
        "5–7 day rapid turnaround for bank credit submission",
      ],
      badge: "Federal Loan",
    },
    {
      id: "bdc",
      title: "BDC Financing",
      subtitle: "Business Development Bank of Canada",
      lenderType: "Crown Corporation Financial Services",
      maxCapital: "Up to $35 Million+",
      description: "Development bank tailored financing for working capital, business acquisition, equipment purchase, ICT technology adoption, and commercial property.",
      keyRequirements: [
        "Thorough competitive market positioning & growth rationale",
        "Flexible repayment capacity & seasonal cash flow modeling",
        "Management team track record & risk mitigation narrative",
        "Compliant with BDC Senior Credit Committee guidelines",
      ],
      badge: "Crown Corp",
    },
    {
      id: "edc",
      title: "EDC Programs",
      subtitle: "Export Development Canada",
      lenderType: "Trade & Export Financial Guarantee",
      maxCapital: "Flexible Trade Limits",
      description: "Export guarantees, international working capital, foreign buyer financing, and political risk mitigation for Canadian companies expanding globally.",
      keyRequirements: [
        "International target market assessment & export revenue proof",
        "Supply chain risk evaluation & foreign buyer credit metrics",
        "Working Capital Guarantee (WCG) compliance reporting",
        "Trade-focused 36-month pro forma projections",
      ],
      badge: "Global Trade",
    },
    {
      id: "fcc",
      title: "Farm Credit Canada (FCC)",
      subtitle: "Agri-Business & Farming Financing",
      lenderType: "Federal Agricultural Lender",
      maxCapital: "Custom Agri Capital",
      description: "Specialized financial packages for primary producers, agribusiness processors, equipment acquisition, livestock, and farmland purchasing.",
      keyRequirements: [
        "Agri-financial pro forma models with crop/yield sensitivity",
        "Seasonal cash flow stress testing & commodity price hedging",
        "Environmental compliance & land valuation reporting",
        "FCC credit officer standardized formatting",
      ],
      badge: "Agriculture",
    },
    {
      id: "banks",
      title: "Chartered Banks",
      subtitle: "Big 5 Banks & Credit Unions",
      lenderType: "RBC, TD, Scotiabank, BMO, CIBC & Credit Unions",
      maxCapital: "Tiered Commercial Limits",
      description: "Traditional commercial term loans, revolving operating lines of credit, and commercial mortgages requiring conservative risk underwriting.",
      keyRequirements: [
        "Rigorous historical vs pro forma debt coverage validation",
        "Detailed collateral schedule & asset valuation backup",
        "Industry benchmark comparisons & sensitivity analysis",
        "Formed to match commercial bank credit memo structure",
      ],
      badge: "Tier 1 Banks",
    },
    {
      id: "private",
      title: "Private & VC",
      subtitle: "Alternative Lenders & Venture Funds",
      lenderType: "Mezzanine Debt, Private Equity & Angels",
      maxCapital: "$500K to $20M+",
      description: "Growth equity, private debt funds, syndicated debt, and angel investor presentations designed to showcase ROI, cap table logic, and scale potential.",
      keyRequirements: [
        "High-impact growth story & addressable market size (TAM)",
        "Granular unit economics, customer acquisition cost (CAC) & LTV",
        "Clear exit strategy & return-on-equity projections",
        "Investor data room presentation package",
      ],
      badge: "Private Capital",
    },
    {
      id: "grants",
      title: "Government Grants",
      subtitle: "Regional Development & Subsidies",
      lenderType: "FedDev, PrairiesCan, PacifiCan, ACOA, IRAP",
      maxCapital: "Non-repayable & Matching Grants",
      description: "Federal and provincial non-dilutive grant applications, regional economic development packages, and job creation subsidies.",
      keyRequirements: [
        "Public-benefit alignment & economic multiplier impact",
        "Job creation targets & clean-tech innovation scoring",
        "Eligible cost breakdown & matching funds validation",
        "Strict compliance with regional agency application scoring",
      ],
      badge: "Non-Dilutive",
    },
  ];

  const activeProgram = programs.find((p) => p.id === activeId) || programs[0];

  return (
    <section id="financing-programs" className="bg-paper-dark py-16 md:py-24 border-b border-ink-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-electric block mb-2">
            Institutional Funding Programs
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink">
            We Know the Lenders. We Know What They Require.
          </h2>
          <p className="text-ink-70 text-base mt-3 leading-relaxed">
            Each Canadian funding program operates under distinct underwriting criteria, risk limits, and submission protocols. We build tailored documentation packages aligned with exact credit officer guidelines.
          </p>
        </div>

        {/* Program Selector Tabs & Detail View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Tab List */}
          <div className="lg:col-span-4 space-y-2 bg-paper p-3 rounded-card border border-ink-10 shadow-card">
            {programs.map((prog) => (
              <button
                key={prog.id}
                onClick={() => setActiveId(prog.id)}
                className={`w-full text-left p-4 rounded-xl font-bold transition-all flex items-center justify-between group ${
                  activeId === prog.id
                    ? "bg-electric text-white shadow-md"
                    : "text-ink hover:bg-electric-10/50 hover:text-electric"
                }`}
              >
                <div>
                  <div className="text-sm">{prog.title}</div>
                  <div className={`text-xs font-normal ${activeId === prog.id ? "text-white/80" : "text-ink-40"}`}>
                    {prog.subtitle}
                  </div>
                </div>
                <ChevronRight
                  size={18}
                  className={`transition-transform ${activeId === prog.id ? "translate-x-1 text-white" : "text-ink-40 group-hover:text-electric"}`}
                />
              </button>
            ))}
          </div>

          {/* Right Active Program Detail Card */}
          <div className="lg:col-span-8 bg-paper p-8 sm:p-10 rounded-card border border-ink-10 shadow-card animate-fadeIn">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-ink-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-electric block mb-1">
                  {activeProgram.lenderType}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-ink">
                  {activeProgram.title} Documentation Package
                </h3>
              </div>
              <div className="bg-electric-10 text-electric text-xs font-extrabold px-4 py-2 rounded-full border border-electric/20">
                {activeProgram.maxCapital}
              </div>
            </div>

            <p className="text-ink-70 text-base leading-relaxed my-6">
              {activeProgram.description}
            </p>

            <div className="space-y-4 mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-ink text-ink-70">
                Mandatory Lender Documentation Deliverables:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeProgram.keyRequirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-2.5 bg-paper-dark p-3 rounded-lg border border-ink-10 text-xs font-semibold text-ink">
                    <CheckCircle2 size={16} className="text-success shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-6 border-t border-ink-10">
              <button
                onClick={onOpenConsultation}
                className="bg-electric hover:bg-electric-dark text-white font-bold py-3.5 px-6 rounded-lg shadow-md transition-all text-sm flex items-center justify-center gap-2 group"
              >
                <span>Book {activeProgram.title} Package Call</span>
                <ArrowRight size={16} className="arrow-nudge" />
              </button>

              <Link
                href={`/financing-programs#${activeProgram.id}`}
                className="text-xs font-bold text-ink-70 hover:text-electric text-center flex items-center justify-center gap-1"
              >
                <span>View Full Program Specs</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
