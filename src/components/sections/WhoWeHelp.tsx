"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, AlertTriangle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const WhoWeHelp: React.FC = () => {
  const { t } = useLanguage();
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  const sectors = [
    {
      title: "Start-ups & New Ventures",
      desc: "Feasibility studies, first-time loan applications, and seed investor pitch decks.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      href: "/industries#startups",
    },
    {
      title: "Expansion & Working Capital",
      desc: "Growth capital models, line of credit applications, and second-location proposals.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      href: "/industries#expansion",
    },
    {
      title: "Agriculture & Agribusiness",
      desc: "FCC & bank farming packages, equipment financing, land acquisition, and processing facilities.",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      href: "/industries#agriculture",
    },
    {
      title: "Real Estate & Multi-Unit Commercial",
      desc: "Commercial development loan proposals, multi-family pro formas, and construction financing.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      href: "/industries#realestate",
    },
    {
      title: "Manufacturing & Processing",
      desc: "Equipment acquisition capital, supply chain expansion plans, and BDC industrial packages.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      href: "/industries#manufacturing",
    },
    {
      title: "Tech & Innovation",
      desc: "SR&ED integration, non-dilutive grant documentation, and venture debt presentations.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
      href: "/industries#tech",
    },
    {
      title: "Import / Export & International Trade",
      desc: "EDC trade guarantee applications, inventory financing, and global market expansion plans.",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
      href: "/industries#export",
    },
    {
      title: "Franchise Buyers",
      desc: "Turnkey franchise business plans tailored to franchisor standards and CSBFL lender rules.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      href: "/industries#franchise",
    },
    {
      title: "Non-Profits & Social Enterprises",
      desc: "Government grant proposals, social impact capital plans, and municipal funding applications.",
      image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80",
      href: "/industries#nonprofit",
    },
  ];

  const handleImageError = (index: number) => {
    setFailedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section id="who-we-help" className="bg-paper py-16 md:py-24 border-b border-ink-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-electric block mb-2">
            {t.whoWeHelp.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink">
            {t.whoWeHelp.headline}
          </h2>
          <p className="text-ink-70 text-base mt-3">
            {t.whoWeHelp.sub}
          </p>
        </div>

        {/* 9-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="bg-paper rounded-card border border-ink-10 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-ink">
                  {!failedImages[index] ? (
                    <Image
                      src={sector.image}
                      alt={sector.title}
                      fill
                      unoptimized
                      onError={() => handleImageError(index)}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink-70 to-electric flex items-center justify-center p-4">
                      <span className="text-white font-bold text-lg text-center">{sector.title}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent"></div>
                  <div className="absolute bottom-3 left-4 right-4 text-white font-bold text-lg leading-tight">
                    {sector.title}
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-ink-70 text-sm leading-relaxed mb-4">
                    {sector.desc}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <Link
                  href={sector.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-electric group-hover:text-electric-dark transition-colors"
                >
                  <span>Sector Documentation Specs</span>
                  <ArrowRight size={14} className="arrow-nudge" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote Exclusion Disclaimer */}
        <div className="mt-12 bg-ink-10/50 p-4 rounded-xl border border-ink-10 flex items-center gap-3 text-xs text-ink-70 max-w-2xl mx-auto">
          <AlertTriangle size={18} className="text-signal shrink-0" />
          <span>
            {t.whoWeHelp.disclaimer}
          </span>
        </div>
      </div>
    </section>
  );
};
