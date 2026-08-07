"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";
import { ConsultationModal } from "@/components/ui/ConsultationModal";
import { TrustStrip } from "@/components/sections/TrustStrip";

export default function ServicesPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <Header onOpenConsultation={() => setIsConsultationOpen(true)} />
      <main className="flex-grow">
        <div className="bg-paper-dark py-12 md:py-16 border-b border-ink-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <span className="text-xs font-bold uppercase tracking-widest text-electric block mb-2">
              Commercial Documentation Services
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-ink mb-4">
              Institutional Business Plans & Financial Modeling
            </h1>
            <p className="text-lg text-ink-70 max-w-3xl leading-relaxed">
              Explore our full suite of lender-ready documentation services — engineered specifically for BDC, CSBFL, Farm Credit Canada, EDC, and commercial chartered banks.
            </p>
          </div>
        </div>
        <TrustStrip />
        <ServicesSection onOpenConsultation={() => setIsConsultationOpen(true)} />
        <FinalCTA onOpenConsultation={() => setIsConsultationOpen(true)} />
      </main>
      <Footer />
      <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
    </div>
  );
}
