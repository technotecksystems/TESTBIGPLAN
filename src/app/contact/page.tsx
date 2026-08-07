"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { ConsultationForm } from "@/components/ui/ConsultationModal";
import { Footer } from "@/components/layout/Footer";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Phone, Mail, MapPin, ShieldCheck, Clock } from "lucide-react";
import { ConsultationModal } from "@/components/ui/ConsultationModal";

export default function ContactPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <Header onOpenConsultation={() => setIsConsultationOpen(true)} />
      <main className="flex-grow">
        <div className="bg-paper-dark py-12 md:py-16 border-b border-ink-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <span className="text-xs font-bold uppercase tracking-widest text-electric block mb-2">
              Direct Senior Advisory
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-ink mb-4">
              Book a Free Capital Strategy Consultation
            </h1>
            <p className="text-lg text-ink-70 max-w-3xl leading-relaxed">
              Connect directly with a Senior Financial Analyst to review your capital project, target lender, and required documentation scope.
            </p>
          </div>
        </div>

        <TrustStrip />

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: Form */}
              <div className="lg:col-span-7 bg-paper p-8 md:p-10 rounded-card border border-ink-10 shadow-card">
                <h2 className="text-2xl font-bold text-ink mb-2">
                  Request Your Custom Documentation Scope
                </h2>
                <p className="text-sm text-ink-70 mb-6">
                  Fill out the form below. A senior credit specialist will evaluate your request and follow up within 24 business hours.
                </p>
                <ConsultationForm />
              </div>

              {/* Right Column: Contact info */}
              <div className="lg:col-span-5 space-y-8">
                <div className="bg-electric-10/50 p-8 rounded-card border border-electric/20 space-y-6">
                  <h3 className="text-xl font-bold text-ink">
                    National Advisory Office
                  </h3>

                  <div className="space-y-4 text-sm text-ink-70">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-electric/10 text-electric flex items-center justify-center shrink-0">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <div className="font-bold text-ink text-base">National Service Coverage</div>
                        <p className="text-xs text-ink-70 mt-0.5">
                          Serving entrepreneurs & companies across all Canadian Provinces & Territories.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-electric/10 text-electric flex items-center justify-center shrink-0">
                        <Phone size={20} />
                      </div>
                      <div>
                        <div className="font-bold text-ink text-base">Direct Client Advisory Line</div>
                        <a href="tel:18005550199" className="text-electric font-semibold hover:underline block text-sm mt-0.5">
                          1-800-BIG-PLANS (244-7526)
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-electric/10 text-electric flex items-center justify-center shrink-0">
                        <Mail size={20} />
                      </div>
                      <div>
                        <div className="font-bold text-ink text-base">Electronic Submissions</div>
                        <a href="mailto:info@bigplans.ca" className="text-electric font-semibold hover:underline block text-sm mt-0.5">
                          info@bigplans.ca
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-paper p-8 rounded-card border border-ink-10 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-electric">
                    <Clock size={16} />
                    <span>Guaranteed Turnarounds</span>
                  </div>
                  <h4 className="text-lg font-bold text-ink">5–7 Day Delivery Guarantee</h4>
                  <p className="text-xs text-ink-70 leading-relaxed">
                    Standard business plans and financial packages delivered within 5–7 business days of intake completion. 48-hour expedited options available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
    </div>
  );
}
