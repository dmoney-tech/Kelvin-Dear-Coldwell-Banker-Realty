import React, { useState } from 'react';
import { ArrowRight, FileText, CheckCircle2 } from 'lucide-react';
import { SellerValuationModal } from './SellerValuationModal';
import { BuyerGuideModal } from './BuyerGuideModal';

interface BuyingSellingSectionProps {
  onExploreHomesClick: () => void;
  onContactClick: () => void;
}

export const BuyingSellingSection: React.FC<BuyingSellingSectionProps> = ({
  onExploreHomesClick,
  onContactClick,
}) => {
  const [valuationModalOpen, setValuationModalOpen] = useState(false);
  const [buyerGuideModalOpen, setBuyerGuideModalOpen] = useState(false);

  return (
    <section className="py-20 lg:py-24 bg-[#F7F5F0] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Lead */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#082B62] mb-2">
            <span>Tailored Advisory</span>
            <span aria-hidden="true">·</span>
            <span>Personalized Strategy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#061A3A] tracking-tight">
            Guidance for Every Stage of Your Move.
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            Whether acquiring your next residence or preparing an existing property for sale, move forward with clarity and seasoned local representation.
          </p>
        </div>

        {/* 2 Balanced Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Buying Pathway */}
          <div className="flex flex-col bg-white rounded-sm border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-shadow">
            {/* Image Banner */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
              <img
                src="/images/buy_interior.jpg"
                alt="Sunlit architectural luxury home interior"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-[#082B62] text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-xs shadow-2xs">
                Buying a Home
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-[#061A3A] tracking-tight leading-snug">
                  Find the Right Home for Your Next Chapter.
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Explore available properties and get guidance as you navigate your home search. From private architectural previews to nuanced market valuation and contract negotiations, Kelvin Dear protects your best interests at every milestone.
                </p>

                {/* Key Benefits */}
                <div className="pt-2 space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#082B62] shrink-0" />
                    <span>Direct access to off-market & coming-soon listings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#082B62] shrink-0" />
                    <span>Neighborhood diligence & lifestyle compatibility</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#082B62] shrink-0" />
                    <span>Disciplined offer drafting and escrow advocacy</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
                <button
                  onClick={onExploreHomesClick}
                  className="px-5 py-2.5 bg-[#082B62] hover:bg-[#061A3A] text-white text-xs font-semibold rounded-sm transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer"
                >
                  <span>Explore Homes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => setBuyerGuideModalOpen(true)}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-[#082B62] border border-slate-200 rounded-sm hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-400" />
                  <span>Buyer Guide & Roadmap</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Selling Pathway */}
          <div className="flex flex-col bg-white rounded-sm border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-shadow">
            {/* Image Banner */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
              <img
                src="/images/sell_exterior.jpg"
                alt="Luxury estate exterior at twilight"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-[#082B62] text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-xs shadow-2xs">
                Selling a Home
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-[#061A3A] tracking-tight leading-snug">
                  Make Your Next Move With a Plan.
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Understand your options, prepare your property, and explore a strategy for your next move. Backed by Coldwell Banker’s global distribution network and Kelvin's precision pricing methodology, we position your residence to capture qualified high-intent buyers.
                </p>

                {/* Key Benefits */}
                <div className="pt-2 space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#082B62] shrink-0" />
                    <span>Comprehensive Comparative Market Analysis (CMA)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#082B62] shrink-0" />
                    <span>Editorial architectural photography & virtual staging</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#082B62] shrink-0" />
                    <span>Coldwell Banker Global Luxury international syndication</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setValuationModalOpen(true)}
                  className="px-5 py-2.5 bg-[#082B62] hover:bg-[#061A3A] text-white text-xs font-semibold rounded-sm transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer"
                >
                  <span>Request Home Valuation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={onContactClick}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-[#082B62] border border-slate-200 rounded-sm hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Schedule Consultation</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Modals */}
      <SellerValuationModal
        isOpen={valuationModalOpen}
        onClose={() => setValuationModalOpen(false)}
      />
      <BuyerGuideModal
        isOpen={buyerGuideModalOpen}
        onClose={() => setBuyerGuideModalOpen(false)}
        onExploreHomes={onExploreHomesClick}
      />
    </section>
  );
};
