import React, { useState } from 'react';
import { DEMO_COMMUNITIES } from '../data/mockData';
import { Community } from '../types/realEstate';
import { ArrowUpRight, Compass, MapPin, X, Check } from 'lucide-react';

interface CommunitySectionProps {
  onSelectCommunity: (communityName: string) => void;
}

export const CommunitySection: React.FC<CommunitySectionProps> = ({ onSelectCommunity }) => {
  const [selectedCommunity, setSelectedCommunity] = useState<Community | null>(null);

  return (
    <section id="communities" className="py-20 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#082B62] mb-2">
              <span>Local Enclaves</span>
              <span aria-hidden="true">·</span>
              <span>West Valley Communities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#061A3A] tracking-tight">
              Discover Your Next Neighborhood.
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2 max-w-2xl">
              Explore the communities, homes, and local character that could make your next move feel right.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Compass className="w-4 h-4 text-[#082B62]" />
            <span>Select a community to view matching listings</span>
          </div>
        </div>

        {/* 3 Editorial Community Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DEMO_COMMUNITIES.map((comm) => (
            <article
              key={comm.id}
              onClick={() => setSelectedCommunity(comm)}
              className="group flex flex-col bg-white border border-slate-200/90 rounded-sm overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <img
                  src={comm.image}
                  alt={comm.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#C8B58B] block">
                    {comm.vibe}
                  </span>
                  <h3 className="text-lg font-bold leading-tight">
                    {comm.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {comm.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {comm.features.slice(0, 2).map((feat, idx) => (
                      <span key={idx} className="text-[11px] text-slate-500 flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-[#082B62]" />
                        <span>{feat}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer with Avg Price & Explore Action */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase font-medium">Price Range</span>
                    <span className="text-xs font-bold text-[#082B62] tabular-nums">{comm.avgPrice}</span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectCommunity(comm.name.split(' ')[0]);
                    }}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#082B62] group-hover:text-[#061A3A] cursor-pointer"
                  >
                    <span>Browse Homes</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Community Detail Modal */}
      {selectedCommunity && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-xl bg-white rounded-md shadow-2xl overflow-hidden my-6 border border-slate-200">
            <button
              onClick={() => setSelectedCommunity(null)}
              className="absolute top-4 right-4 z-10 p-2 text-slate-500 hover:text-slate-900 bg-white/90 rounded-full shadow-xs cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100">
              <img
                src={selectedCommunity.image}
                alt={selectedCommunity.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 space-y-4">
              <div>
                <span className="text-xs font-semibold text-[#082B62] uppercase tracking-wider">
                  Community Spotlight · {selectedCommunity.vibe}
                </span>
                <h3 className="text-2xl font-bold text-[#061A3A] mt-1">
                  {selectedCommunity.name}
                </h3>
                <p className="text-xs text-[#C8B58B] font-bold mt-0.5">
                  Typical Market Range: {selectedCommunity.avgPrice}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedCommunity.description}
              </p>

              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Neighborhood Amenities & Character
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
                  {selectedCommunity.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#082B62] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedCommunity(null)}
                  className="px-4 py-2 text-xs text-slate-600 hover:text-slate-900"
                >
                  Close
                </button>

                <button
                  onClick={() => {
                    const name = selectedCommunity.name.split(' ')[0];
                    setSelectedCommunity(null);
                    onSelectCommunity(name);
                  }}
                  className="px-5 py-2.5 bg-[#082B62] hover:bg-[#061A3A] text-white text-xs font-semibold rounded-sm transition-colors cursor-pointer"
                >
                  View Listings in {selectedCommunity.name.split(' ')[0]}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
