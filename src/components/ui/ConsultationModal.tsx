"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const ConsultationForm: React.FC<{ onSuccess?: () => void }> = ({ onSuccess }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    targetProgram: "CSBFL Loan Program",
    targetAmount: "",
    projectOverview: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        if (onSuccess) onSuccess();
      } else {
        const errData = await res.json().catch(() => ({}));
        setErrorMsg(errData.error || "Submission failed. Please try again.");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8 space-y-4">
        <div className="w-16 h-16 rounded-full bg-success/10 text-success flex items-center justify-center mx-auto">
          <CheckCircle2 size={36} />
        </div>
        <h4 className="text-2xl font-extrabold text-ink">
          {t.modal.successTitle}
        </h4>
        <p className="text-sm text-ink-70 max-w-md mx-auto leading-relaxed">
          {t.modal.successMsg}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errorMsg && (
        <div className="p-3 text-xs bg-signal/10 border border-signal/20 text-signal rounded-lg font-semibold">
          {errorMsg}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-ink-70 mb-1">
            {t.modal.fullName} *
          </label>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder={t.modal.fullNamePlaceholder}
            className="w-full p-3 rounded-lg border border-ink-10 text-sm focus:ring-2 focus:ring-electric outline-none bg-paper"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-ink-70 mb-1">
            {t.modal.businessName} *
          </label>
          <input
            type="text"
            name="businessName"
            required
            value={formData.businessName}
            onChange={handleChange}
            placeholder={t.modal.businessPlaceholder}
            className="w-full p-3 rounded-lg border border-ink-10 text-sm focus:ring-2 focus:ring-electric outline-none bg-paper"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-ink-70 mb-1">
            {t.modal.email} *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder={t.modal.emailPlaceholder}
            className="w-full p-3 rounded-lg border border-ink-10 text-sm focus:ring-2 focus:ring-electric outline-none bg-paper"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-ink-70 mb-1">
            {t.modal.phone} *
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder={t.modal.phonePlaceholder}
            className="w-full p-3 rounded-lg border border-ink-10 text-sm focus:ring-2 focus:ring-electric outline-none bg-paper"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-ink-70 mb-1">
            {t.modal.targetProgram} *
          </label>
          <select
            name="targetProgram"
            value={formData.targetProgram}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-ink-10 text-sm focus:ring-2 focus:ring-electric outline-none bg-paper"
          >
            <option value="CSBFL Loan Program">{t.financingPrograms.p1Name}</option>
            <option value="BDC Financing & Growth Capital">{t.financingPrograms.p2Name}</option>
            <option value="EDC Export Financial Services">{t.financingPrograms.p3Name}</option>
            <option value="Farm Credit Canada (FCC)">{t.financingPrograms.p4Name}</option>
            <option value="Chartered Bank Commercial Loan">{t.financingPrograms.p5Name}</option>
            <option value="Private Investor / Venture Capital">{t.financingPrograms.p6Name}</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-ink-70 mb-1">
            {t.modal.targetAmount}
          </label>
          <input
            type="text"
            name="targetAmount"
            value={formData.targetAmount}
            onChange={handleChange}
            placeholder={t.modal.amountPlaceholder}
            className="w-full p-3 rounded-lg border border-ink-10 text-sm focus:ring-2 focus:ring-electric outline-none bg-paper"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-ink-70 mb-1">
          {t.modal.projectDesc}
        </label>
        <textarea
          name="projectOverview"
          rows={3}
          value={formData.projectOverview}
          onChange={handleChange}
          placeholder={t.modal.projectPlaceholder}
          className="w-full p-3 rounded-lg border border-ink-10 text-sm focus:ring-2 focus:ring-electric outline-none bg-paper"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-electric hover:bg-electric-dark text-white font-bold py-4 px-6 rounded-lg shadow-md transition-all text-base flex items-center justify-center gap-2 group disabled:opacity-50"
      >
        {loading ? (
          <span>{t.modal.submitting}</span>
        ) : (
          <>
            <span>{t.modal.submitBtn}</span>
            <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
};

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { t } = useLanguage();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-paper rounded-card shadow-2xl overflow-hidden border border-ink-10 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-ink text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div>
            <span className="text-xs font-bold text-electric block flex items-center gap-1">
              <ShieldCheck size={14} />
              {t.modal.eyebrow}
            </span>
            <h3 className="text-lg font-bold text-white">{t.modal.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-ink-40 hover:text-white rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-4">
          <ConsultationForm onSuccess={() => {}} />
        </div>
      </div>
    </div>
  );
};
