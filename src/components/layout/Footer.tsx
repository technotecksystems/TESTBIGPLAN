"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-ink text-white pt-16 pb-8 border-t border-ink-70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-ink-70">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block bg-paper p-2 rounded-lg shadow-sm border border-ink-10">
              <Image
                src="/logo/bigplans-logo.png"
                alt="BigPlans.ca Logo"
                width={220}
                height={62}
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="text-sm font-semibold text-electric-10">
              {t.footer.tagline}
            </p>

            <p className="text-xs text-ink-40 leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>

            <div className="pt-2 text-xs text-ink-10 flex items-center gap-2">
              <ShieldCheck size={16} className="text-electric" />
              <span>{t.utility.tagline}</span>
            </div>
          </div>

          {/* Col 2: Who We Help */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-electric">
              {t.nav.industries}
            </h4>
            <ul className="space-y-2 text-xs text-ink-10">
              <li><Link href="/industries#startups" className="hover:text-electric transition-colors">Start-ups & New Ventures</Link></li>
              <li><Link href="/industries#expansion" className="hover:text-electric transition-colors">Expansion & Working Capital</Link></li>
              <li><Link href="/industries#agriculture" className="hover:text-electric transition-colors">Agriculture & Agribusiness</Link></li>
              <li><Link href="/industries#realestate" className="hover:text-electric transition-colors">Real Estate & Commercial</Link></li>
              <li><Link href="/industries#manufacturing" className="hover:text-electric transition-colors">Manufacturing & Processing</Link></li>
              <li><Link href="/industries#tech" className="hover:text-electric transition-colors">Tech & Innovation</Link></li>
              <li><Link href="/industries#export" className="hover:text-electric transition-colors">Import / Export & Trade</Link></li>
              <li><Link href="/industries#franchise" className="hover:text-electric transition-colors">Franchise Buyers</Link></li>
            </ul>
          </div>

          {/* Col 3: Programs & Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-electric">
              {t.nav.financing}
            </h4>
            <ul className="space-y-2 text-xs text-ink-10">
              <li><Link href="/financing-programs#csbfl" className="hover:text-electric transition-colors">CSBFL Loan Packages</Link></li>
              <li><Link href="/financing-programs#bdc" className="hover:text-electric transition-colors">BDC Capital Plans</Link></li>
              <li><Link href="/financing-programs#edc" className="hover:text-electric transition-colors">EDC Export Programs</Link></li>
              <li><Link href="/financing-programs#fcc" className="hover:text-electric transition-colors">Farm Credit Canada (FCC)</Link></li>
              <li><Link href="/services#business-plans" className="hover:text-electric transition-colors">Bank-Ready Business Plans</Link></li>
              <li><Link href="/services#feasibility-studies" className="hover:text-electric transition-colors">Pro Forma Financial Models</Link></li>
              <li><Link href="/services#capital-structuring" className="hover:text-electric transition-colors">Capital Structuring Advisory</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact & Service Area */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-electric">
              National Advisory Office
            </h4>
            <div className="space-y-2.5 text-xs text-ink-10">
              <div className="flex items-start gap-2">
                <MapPin size={15} className="text-electric shrink-0 mt-0.5" />
                <span>{t.footer.office}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={15} className="text-electric shrink-0" />
                <a href="tel:18005550199" className="hover:text-electric transition-colors">1-800-BIG-PLANS (244-7526)</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={15} className="text-electric shrink-0" />
                <a href="mailto:info@bigplans.ca" className="hover:text-electric transition-colors">info@bigplans.ca</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-40">
          <div>
            © {new Date().getFullYear()} {t.footer.rights}
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility Statement</Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
