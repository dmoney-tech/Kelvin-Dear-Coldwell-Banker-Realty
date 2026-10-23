import React, { useState } from 'react';
import { X, CheckCircle, Calculator, TrendingUp, ShieldCheck } from 'lucide-react';
import { AGENT_INFO } from '../data/mockData';

interface SellerValuationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SellerValuationModal: React.FC<SellerValuationModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const [address, setAddress] = useState('');
  const [propertyType, setPropertyType] = useState('Single Family Residence');
  const [beds, setBeds] = useState('4');
  const [baths, setBaths] = useState('3');
  const [approxSqft, setApproxSqft] = useState('2800');
  const [sellerName, setSellerName] = useState('');
  const [sellerEmail, setSellerEmail] = useState('');
  const [sellerPhone, setSellerPhone] = useState('');
  const [timeline, setTimeline] = useState('Next 1–3 months');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address || !sellerEmail || !sellerName) return;
    setIsSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="valuation-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-md shadow-2xl overflow-hidden my-6 border border-slate-200">
        {/* Header */}
        <div className="bg-[#082B62] text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="text-[11px] font-semibold text-[#C8B58B] tracking-wider uppercase">
            Comparative Market Analysis
          </span>
          <h2 id="valuation-modal-title" className="text-2xl font-bold mt-1">
            Request an Accurate Home Valuation
          </h2>
          <p className="text-xs text-slate-300 mt-1 max-w-lg">
            Receive a personalized, data-backed assessment of your property’s current market value in the West Valley.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#061A3A]">
                Valuation Analysis Initiated
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong>{sellerName}</strong>. Kelvin Dear will review recent comparable sales around <strong>{address}</strong> and prepare a comprehensive market report for your review.
              </p>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-sm text-xs text-slate-600 max-w-md mx-auto">
                <p className="font-semibold text-slate-800">Need immediate consultation?</p>
                <p className="mt-0.5">Call Kelvin directly at <a href={`tel:${AGENT_INFO.directPhone.replace(/\D/g, '')}`} className="text-[#082B62] font-bold underline">{AGENT_INFO.directPhone}</a></p>
              </div>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 bg-[#082B62] text-white text-xs font-semibold rounded-sm hover:bg-[#061A3A] transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="prop-address" className="block text-xs font-semibold text-slate-700 mb-1">
                  Property Address *
                </label>
                <input
                  id="prop-address"
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Street address, City, ZIP (e.g. 1420 W Estrella Pkwy, Goodyear, AZ)"
                  className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-sm focus:bg-white focus:border-[#082B62]"
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div>
                  <label htmlFor="prop-beds" className="block text-[11px] font-semibold text-slate-700 mb-1">Beds</label>
                  <select
                    id="prop-beds"
                    value={beds}
                    onChange={(e) => setBeds(e.target.value)}
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-sm"
                  >
                    <option value="2">2 Beds</option>
                    <option value="3">3 Beds</option>
                    <option value="4">4 Beds</option>
                    <option value="5+">5+ Beds</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="prop-baths" className="block text-[11px] font-semibold text-slate-700 mb-1">Baths</label>
                  <select
                    id="prop-baths"
                    value={baths}
                    onChange={(e) => setBaths(e.target.value)}
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-sm"
                  >
                    <option value="2">2 Baths</option>
                    <option value="2.5">2.5 Baths</option>
                    <option value="3">3 Baths</option>
                    <option value="4+">4+ Baths</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="prop-sqft" className="block text-[11px] font-semibold text-slate-700 mb-1">Approx Sq Ft</label>
                  <input
                    id="prop-sqft"
                    type="number"
                    value={approxSqft}
                    onChange={(e) => setApproxSqft(e.target.value)}
                    placeholder="2,500"
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-sm"
                  />
                </div>
                <div>
                  <label htmlFor="prop-timeline" className="block text-[11px] font-semibold text-slate-700 mb-1">Selling Timeline</label>
                  <select
                    id="prop-timeline"
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-sm"
                  >
                    <option value="Immediately">Immediately</option>
                    <option value="1-3 months">1–3 Months</option>
                    <option value="3-6 months">3–6 Months</option>
                    <option value="Just curious">Just curious</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <span className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Where should we send your report?
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label htmlFor="seller-name" className="block text-[11px] font-semibold text-slate-600 mb-1">Your Name *</label>
                    <input
                      id="seller-name"
                      type="text"
                      required
                      value={sellerName}
                      onChange={(e) => setSellerName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="seller-email" className="block text-[11px] font-semibold text-slate-600 mb-1">Email Address *</label>
                    <input
                      id="seller-email"
                      type="email"
                      required
                      value={sellerEmail}
                      onChange={(e) => setSellerEmail(e.target.value)}
                      placeholder="jane@example.com"
                      className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="seller-phone" className="block text-[11px] font-semibold text-slate-600 mb-1">Phone Number</label>
                    <input
                      id="seller-phone"
                      type="tel"
                      value={sellerPhone}
                      onChange={(e) => setSellerPhone(e.target.value)}
                      placeholder="(860) 000-0000"
                      className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-[#082B62] hover:bg-[#061A3A] text-white text-xs font-semibold rounded-sm transition-colors shadow-sm cursor-pointer"
                >
                  Generate Valuation Assessment
                </button>
                <p className="text-[11px] text-slate-400 text-center mt-2">
                  No automated estimate inaccuracies. Reviewed directly by Kelvin Dear, REALTOR®.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
