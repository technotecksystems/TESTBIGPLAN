"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, FileText, Landmark, Building2, CheckCircle2, ShieldCheck, HelpCircle, PhoneCall } from "lucide-react";

interface MegaMenuProps {
  activeTab: string | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ activeTab, onClose, onOpenConsultation }) => {
  if (!activeTab) return null;

  return (
    <div
      className="absolute top-full left-0 w-full bg-paper border-b border-ink-10 shadow-2xl z-40 transition-all duration-200 animate-fadeIn"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === "services" && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/services#business-plans" onClick={onClose} className="p-4 rounded-card hover:bg-electric-10/40 border border-transparent hover:border-electric/20 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-electric/10 text-electric flex items-center justify-center mb-3 group-hover:bg-electric group-hover:text-white transition-colors">
                  <FileText size={20} />
                </div>
                <h4 className="font-bold text-ink text-base mb-1 group-hover:text-electric flex items-center justify-between">
                  Business Plans <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 arrow-nudge transition-all" />
                </h4>
                <p className="text-xs text-ink-70 leading-relaxed">
                  Lender-matched business plans for BDC, CSBFL, & chartered banks. 5–7 day delivery.
                </p>
              </Link>

              <Link href="/services#loan-packages" onClick={onClose} className="p-4 rounded-card hover:bg-electric-10/40 border border-transparent hover:border-electric/20 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-electric/10 text-electric flex items-center justify-center mb-3 group-hover:bg-electric group-hover:text-white transition-colors">
                  <Landmark size={20} />
                </div>
                <h4 className="font-bold text-ink text-base mb-1 group-hover:text-electric flex items-center justify-between">
                  Loan Packages <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 arrow-nudge transition-all" />
                </h4>
                <p className="text-xs text-ink-70 leading-relaxed">
                  Turnkey underwriting applications complete with executive summaries & debt service coverage ratios.
                </p>
              </Link>

              <Link href="/services#feasibility-studies" onClick={onClose} className="p-4 rounded-card hover:bg-electric-10/40 border border-transparent hover:border-electric/20 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-electric/10 text-electric flex items-center justify-center mb-3 group-hover:bg-electric group-hover:text-white transition-colors">
                  <ShieldCheck size={20} />
                </div>
                <h4 className="font-bold text-ink text-base mb-1 group-hover:text-electric flex items-center justify-between">
                  Feasibility & Pro Formas <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 arrow-nudge transition-all" />
                </h4>
                <p className="text-xs text-ink-70 leading-relaxed">
                  36-month monthly financial projections, sensitivity matrix, and break-even modeling.
                </p>
              </Link>
            </div>

            {/* Featured Box */}
            <div className="bg-ink text-white p-6 rounded-card flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-signal block mb-2">Fast Turnaround</span>
                <h4 className="font-bold text-lg mb-2 text-white">5–7 Business Day Delivery</h4>
                <p className="text-xs text-ink-10 leading-relaxed mb-4">
                  Need funding quickly? Our standard documentation timeline ensures your application hits lender desks without delay.
                </p>
              </div>
              <button
                onClick={() => { onClose(); onOpenConsultation(); }}
                className="w-full bg-electric hover:bg-electric-dark text-white font-bold py-2.5 px-4 rounded-lg text-xs transition-all flex items-center justify-center gap-1.5"
              >
                <span>Request Scope & Quote</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        )}

        {activeTab === "financing" && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/financing-programs#csbfl" onClick={onClose} className="p-4 rounded-card hover:bg-electric-10/40 border border-transparent hover:border-electric/20 transition-all group">
                <div className="text-xs font-bold text-electric mb-1">Government Backed</div>
                <h4 className="font-bold text-ink text-base mb-1 group-hover:text-electric">CSBFL Loans</h4>
                <p className="text-xs text-ink-70">Up to $1.15M for real estate, equipment, & leasehold improvements.</p>
              </Link>

              <Link href="/financing-programs#bdc" onClick={onClose} className="p-4 rounded-card hover:bg-electric-10/40 border border-transparent hover:border-electric/20 transition-all group">
                <div className="text-xs font-bold text-electric mb-1">Crown Corporation</div>
                <h4 className="font-bold text-ink text-base mb-1 group-hover:text-electric">BDC Capital</h4>
                <p className="text-xs text-ink-70">Subordinated debt, working capital, and specialized growth financing.</p>
              </Link>

              <Link href="/financing-programs#fcc" onClick={onClose} className="p-4 rounded-card hover:bg-electric-10/40 border border-transparent hover:border-electric/20 transition-all group">
                <div className="text-xs font-bold text-electric mb-1">Agri-Specialized</div>
                <h4 className="font-bold text-ink text-base mb-1 group-hover:text-electric">Farm Credit Canada</h4>
                <p className="text-xs text-ink-70">Agricultural operations, land acquisition, equipment & processing facilities.</p>
              </Link>

              <Link href="/financing-programs#edc" onClick={onClose} className="p-4 rounded-card hover:bg-electric-10/40 border border-transparent hover:border-electric/20 transition-all group">
                <div className="text-xs font-bold text-electric mb-1">Trade & Export</div>
                <h4 className="font-bold text-ink text-base mb-1 group-hover:text-electric">EDC Programs</h4>
                <p className="text-xs text-ink-70">International expansion guarantees, working capital, and buyer financing.</p>
              </Link>

              <Link href="/financing-programs#banks" onClick={onClose} className="p-4 rounded-card hover:bg-electric-10/40 border border-transparent hover:border-electric/20 transition-all group">
                <div className="text-xs font-bold text-electric mb-1">Big 5 & Credit Unions</div>
                <h4 className="font-bold text-ink text-base mb-1 group-hover:text-electric">Chartered Banks</h4>
                <p className="text-xs text-ink-70">RBC, TD, Scotiabank, BMO, CIBC, and regional credit union packages.</p>
              </Link>

              <Link href="/financing-programs#private" onClick={onClose} className="p-4 rounded-card hover:bg-electric-10/40 border border-transparent hover:border-electric/20 transition-all group">
                <div className="text-xs font-bold text-electric mb-1">Alternative Capital</div>
                <h4 className="font-bold text-ink text-base mb-1 group-hover:text-electric">Private Lenders</h4>
                <p className="text-xs text-ink-70">Private debt, venture capital, angel networks, and mezzanine funding.</p>
              </Link>
            </div>

            <div className="bg-electric-10 p-6 rounded-card border border-electric/20 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-electric block mb-1">Lender Standards</span>
                <h4 className="font-bold text-ink text-base mb-2">Unsure which program fits?</h4>
                <p className="text-xs text-ink-70 leading-relaxed mb-4">
                  We match your capital requirement with the exact documentation structure your target lender requires.
                </p>
              </div>
              <button
                onClick={() => { onClose(); onOpenConsultation(); }}
                className="w-full bg-ink hover:bg-ink-70 text-white font-bold py-2.5 px-4 rounded-lg text-xs transition-all text-center"
              >
                Compare Programs
              </button>
            </div>
          </div>
        )}

        {activeTab === "industries" && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Start-ups & New Ventures", href: "/industries#startups" },
                { name: "Agriculture & Agri-Business", href: "/industries#agriculture" },
                { name: "Real Estate & Development", href: "/industries#realestate" },
                { name: "Manufacturing & Processing", href: "/industries#manufacturing" },
                { name: "Tech & Innovation", href: "/industries#tech" },
                { name: "Import / Export & Trade", href: "/industries#export" },
                { name: "Franchise Buyers", href: "/industries#franchise" },
                { name: "Non-Profits & Social Enterprises", href: "/industries#nonprofit" },
              ].map((ind, i) => (
                <Link
                  key={i}
                  href={ind.href}
                  onClick={onClose}
                  className="p-3 rounded-lg border border-ink-10 hover:border-electric hover:bg-electric-10/30 transition-all text-sm font-semibold text-ink hover:text-electric flex items-center justify-between group"
                >
                  <span>{ind.name}</span>
                  <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 arrow-nudge transition-all" />
                </Link>
              ))}
            </div>

            <div className="bg-paper p-5 rounded-card border border-ink-10 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-signal uppercase tracking-wider block mb-1">Coverage Policy</span>
                <h4 className="font-bold text-ink text-sm mb-2">Serving All Canadian Sectors</h4>
                <p className="text-xs text-ink-70 leading-relaxed mb-3">
                  We write plans for every major commercial sector across Canada — except upstream oil & gas.
                </p>
              </div>
              <Link href="/industries" onClick={onClose} className="text-xs font-bold text-electric hover:underline flex items-center gap-1">
                View All Industry Profiles <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
