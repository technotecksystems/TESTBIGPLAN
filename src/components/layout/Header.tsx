"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, Search, Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { MegaMenu } from "./MegaMenu";
import { useLanguage } from "@/context/LanguageContext";

interface HeaderProps {
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const { language, setLanguage, t } = useLanguage();
  const [activeMegaTab, setActiveMegaTab] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavHover = (tabName: string) => {
    setActiveMegaTab(tabName);
  };

  const closeMegaMenu = () => {
    setActiveMegaTab(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-paper transition-all duration-300">
      {/* Utility Bar */}
      <div className="bg-ink text-white py-1.5 px-6 border-b border-ink-70 text-xs hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6 text-ink-10">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck size={14} className="text-electric" />
              {t.utility.tagline}
            </span>
            <span className="text-ink-40">|</span>
            <span className="text-ink-10">{t.utility.coverage}</span>
          </div>
          <div className="flex items-center gap-6 text-ink-10">
            <a href="tel:18005550199" className="hover:text-electric flex items-center gap-1.5 transition-colors">
              <Phone size={13} className="text-electric" />
              <span>{t.utility.phone}</span>
            </a>
            <span className="text-ink-40">|</span>

            {/* EN / FR Translation Switcher */}
            <div className="flex items-center gap-1.5 bg-ink-70/60 px-2 py-0.5 rounded text-xs">
              <button
                onClick={() => setLanguage("en")}
                className={`font-bold px-1.5 py-0.5 rounded transition-all ${
                  language === "en"
                    ? "bg-electric text-white shadow-sm"
                    : "text-ink-40 hover:text-white"
                }`}
              >
                EN
              </button>
              <span className="text-ink-40">/</span>
              <button
                onClick={() => setLanguage("fr")}
                className={`font-bold px-1.5 py-0.5 rounded transition-all ${
                  language === "fr"
                    ? "bg-electric text-white shadow-sm"
                    : "text-ink-40 hover:text-white"
                }`}
              >
                FR
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div
        className={`border-b border-ink-10 bg-paper transition-all duration-200 ${
          scrolled ? "py-2.5 shadow-nav" : "py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo Asset */}
          <Link href="/" className="flex items-center focus:outline-none focus:ring-2 focus:ring-electric rounded-lg py-0.5">
            <Image
              src="/logo/bigplans-logo.png"
              alt="BigPlans.ca Logo"
              width={240}
              height={68}
              priority
              className="h-10 sm:h-12 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 font-semibold text-sm text-ink">
            <Link
              href="/"
              className="px-3 py-2 rounded-lg hover:text-electric hover:bg-electric-10/40 transition-colors"
            >
              {t.nav.home}
            </Link>

            <button
              onMouseEnter={() => handleNavHover("services")}
              onClick={() => setActiveMegaTab(activeMegaTab === "services" ? null : "services")}
              className={`px-3 py-2 rounded-lg hover:text-electric hover:bg-electric-10/40 transition-colors flex items-center gap-1.5 ${
                activeMegaTab === "services" ? "text-electric bg-electric-10/50" : ""
              }`}
              aria-expanded={activeMegaTab === "services"}
            >
              <span>{t.nav.services}</span>
              <ChevronDown size={14} className={`transition-transform ${activeMegaTab === "services" ? "rotate-180" : ""}`} />
            </button>

            <button
              onMouseEnter={() => handleNavHover("financing")}
              onClick={() => setActiveMegaTab(activeMegaTab === "financing" ? null : "financing")}
              className={`px-3 py-2 rounded-lg hover:text-electric hover:bg-electric-10/40 transition-colors flex items-center gap-1.5 ${
                activeMegaTab === "financing" ? "text-electric bg-electric-10/50" : ""
              }`}
              aria-expanded={activeMegaTab === "financing"}
            >
              <span>{t.nav.financing}</span>
              <ChevronDown size={14} className={`transition-transform ${activeMegaTab === "financing" ? "rotate-180" : ""}`} />
            </button>

            <button
              onMouseEnter={() => handleNavHover("industries")}
              onClick={() => setActiveMegaTab(activeMegaTab === "industries" ? null : "industries")}
              className={`px-3 py-2 rounded-lg hover:text-electric hover:bg-electric-10/40 transition-colors flex items-center gap-1.5 ${
                activeMegaTab === "industries" ? "text-electric bg-electric-10/50" : ""
              }`}
              aria-expanded={activeMegaTab === "industries"}
            >
              <span>{t.nav.industries}</span>
              <ChevronDown size={14} className={`transition-transform ${activeMegaTab === "industries" ? "rotate-180" : ""}`} />
            </button>

            <Link
              href="/#how-it-works"
              className="px-3 py-2 rounded-lg hover:text-electric hover:bg-electric-10/40 transition-colors"
            >
              {t.nav.howItWorks}
            </Link>

            <Link
              href="/faq"
              className="px-3 py-2 rounded-lg hover:text-electric hover:bg-electric-10/40 transition-colors"
            >
              {t.nav.faq}
            </Link>

            <Link
              href="/contact"
              className="px-3 py-2 rounded-lg hover:text-electric hover:bg-electric-10/40 transition-colors"
            >
              {t.nav.contact}
            </Link>
          </nav>

          {/* Right Action Bar */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2.5 text-ink-70 hover:text-electric hover:bg-electric-10/50 rounded-lg transition-colors"
              aria-label="Search website"
            >
              <Search size={18} />
            </button>

            <button
              onClick={onOpenConsultation}
              className="bg-electric hover:bg-electric-dark text-white font-bold px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all text-sm flex items-center gap-2 group"
            >
              <span>{t.nav.bookConsultation}</span>
              <ArrowRight size={16} className="arrow-nudge" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Language Selector */}
            <button
              onClick={() => setLanguage(language === "en" ? "fr" : "en")}
              className="bg-ink-10 font-extrabold text-xs px-2 py-1 rounded text-ink"
            >
              {language === "en" ? "FR" : "EN"}
            </button>
            <button
              onClick={onOpenConsultation}
              className="bg-electric text-white text-xs font-bold px-3 py-2 rounded-lg"
            >
              Book Call
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-ink hover:text-electric rounded-lg"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MegaMenu Dropdown */}
      <MegaMenu
        activeTab={activeMegaTab}
        onClose={closeMegaMenu}
        onOpenConsultation={onOpenConsultation}
      />

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-paper border-b border-ink-10 p-6 space-y-4 shadow-2xl animate-fadeIn max-h-[85vh] overflow-y-auto">
          <div className="space-y-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-bold text-ink hover:text-electric"
            >
              {t.nav.home}
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-bold text-ink hover:text-electric"
            >
              {t.nav.services}
            </Link>
            <Link
              href="/financing-programs"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-bold text-ink hover:text-electric"
            >
              {t.nav.financing}
            </Link>
            <Link
              href="/industries"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-bold text-ink hover:text-electric"
            >
              {t.nav.industries}
            </Link>
            <Link
              href="/#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-bold text-ink hover:text-electric"
            >
              {t.nav.howItWorks}
            </Link>
            <Link
              href="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-bold text-ink hover:text-electric"
            >
              {t.nav.faq}
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-bold text-ink hover:text-electric"
            >
              {t.nav.contact}
            </Link>
          </div>

          <div className="pt-4 border-t border-ink-10 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full bg-electric text-white font-bold py-3.5 px-4 rounded-lg flex items-center justify-center gap-2 text-sm shadow-md"
            >
              <span>{t.nav.bookConsultation}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
