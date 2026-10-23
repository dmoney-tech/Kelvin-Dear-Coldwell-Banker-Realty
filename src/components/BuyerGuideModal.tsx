import React, { useState } from 'react';
import { X, CheckCircle, Compass, FileCheck, DollarSign, Home, Phone } from 'lucide-react';
import { AGENT_INFO } from '../data/mockData';

interface BuyerGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreHomes: () => void;
}

export const BuyerGuideModal: React.FC<BuyerGuideModalProps> = ({
  isOpen,
  onClose,
  onExploreHomes,
}) => {
  if (!isOpen) return null;

  const [email, setEmail] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const steps = [
    {
      icon: DollarSign,
      title: '1. Financial Readiness & Pre-Approval',
      desc: 'Understand purchasing power, competitive loan products, and establish your target monthly budget.',
    },
    {
      icon: Compass,
      title: '2. Enclave & Lifestyle Discovery',
      desc: 'Define ideal neighborhood criteria: commute, golf & hiking proximity, lot dimensions, and HOA amenities in the West Valley.',
    },
    {
      icon: Home,
      title: '3. Strategic Property Tours & Analysis',
      desc: 'Private viewings, evaluating unlisted opportunities, reviewing seller disclosures, and structural assessments.',
    },
    {
      icon: FileCheck,
      title: '4. Offer Strategy & Seamless Escrow',
      desc: 'Crafting compelling offers, managing contingencies, appraisal negotiations, and closing without friction.',
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="buyer-guide-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-md shadow-2xl overflow-hidden my-6 border border-slate-200">
        <div className="bg-[#082B62] text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="text-[11px] font-semibold text-[#C8B58B] tracking-wider uppercase">
            Client Advisory Resource
          </span>
          <h2 id="buyer-guide-modal-title" className="text-2xl font-bold mt-1">
            Arizona West Valley Homebuyer Roadmap
          </h2>
          <p className="text-xs text-slate-300 mt-1 max-w-lg">
            A step-by-step navigational blueprint curated by Kelvin Dear for making informed, confident home purchases.
          </p>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-4">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="flex items-start gap-3.5 p-3.5 bg-slate-50 border border-slate-100 rounded-sm">
                  <div className="w-9 h-9 rounded-sm bg-white border border-slate-200 flex items-center justify-center shrink-0 text-[#082B62]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#061A3A] uppercase tracking-wide">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {downloadSuccess ? (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-sm flex items-center gap-3 text-emerald-800 text-xs">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Full Buyer Advisory Packet sent to <strong>{email}</strong>!</span>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setDownloadSuccess(true);
              }}
              className="p-4 bg-[#F7F5F0] border border-slate-200/80 rounded-sm space-y-3"
            >
              <h4 className="text-xs font-bold text-[#061A3A] uppercase">
                Download Comprehensive Buyer Packet PDF
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 text-xs p-2.5 bg-white border border-slate-200 rounded-sm"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-[#082B62] text-white text-xs font-semibold rounded-sm hover:bg-[#061A3A] transition-colors cursor-pointer"
                >
                  Get Guide
                </button>
              </div>
            </form>
          )}

          <div className="flex items-center justify-between pt-2 border-t border-slate-100">
            <a
              href={`tel:${AGENT_INFO.directPhone.replace(/\D/g, '')}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#082B62] hover:underline"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Kelvin: {AGENT_INFO.directPhone}</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onExploreHomes();
              }}
              className="text-xs font-bold text-[#082B62] hover:underline cursor-pointer"
            >
              Browse Active Listings →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
