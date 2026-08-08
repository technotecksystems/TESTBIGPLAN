"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ThreeUpGrid } from "@/components/sections/ThreeUpGrid";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { WhoWeHelp } from "@/components/sections/WhoWeHelp";
import { FinancingPrograms } from "@/components/sections/FinancingPrograms";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyBigPlans } from "@/components/sections/WhyBigPlans";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";
import { ConsultationModal } from "@/components/ui/ConsultationModal";

export default function Home() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const openConsultation = () => setIsConsultationOpen(true);
  const closeConsultation = () => setIsConsultationOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-paper">
      {/* Header Navigation */}
      <Header onOpenConsultation={openConsultation} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero */}
        <Hero onOpenConsultation={openConsultation} />

        {/* Trust Badges Bar */}
        <TrustStrip />

        {/* 2. Three Pillars Grid */}
        <ThreeUpGrid />

        {/* 3. The Problem */}
        <ProblemSection />

        {/* 4. Who We Help (9 Industry Tiles) */}
        <WhoWeHelp />

        {/* 5. Financing Programs (7 Accordion/Tab Programs) */}
        <FinancingPrograms onOpenConsultation={openConsultation} />

        {/* 6. Core Services / What We Deliver */}
        <ServicesSection onOpenConsultation={openConsultation} />

        {/* 7. Why BigPlans.ca (Electric Blue Band) */}
        <WhyBigPlans onOpenConsultation={openConsultation} />

        {/* 8. How It Works (5 Steps) */}
        <HowItWorks onOpenConsultation={openConsultation} />

        {/* 9. FAQ Accordion */}
        <FAQSection />

        {/* 10. Final CTA Band */}
        <FinalCTA onOpenConsultation={openConsultation} />
      </main>

      {/* Mega Footer */}
      <Footer />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={closeConsultation}
      />
    </div>
  );
}
