import React from 'react';
import { AGENT_INFO } from '../data/mockData';
import { Phone, Mail, Award, MapPin, Building, ArrowRight, ShieldCheck } from 'lucide-react';

interface AgentProfileProps {
  onContactClick: () => void;
}

export const AgentProfile: React.FC<AgentProfileProps> = ({ onContactClick }) => {
  return (
    <section id="about-kelvin" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait and Credential Card */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start">
            <div className="relative w-full max-w-md">
              {/* Outer Decorative Architectural Matting */}
              <div className="relative rounded-sm overflow-hidden bg-slate-100 border border-slate-200/90 shadow-md">
                <img
                  src={AGENT_INFO.portraitUrl}
                  alt="Kelvin Dear, REALTOR with Coldwell Banker Realty"
                  className="w-full aspect-[4/5] object-cover object-top"
                  loading="lazy"
                />

                {/* Verified Credential Badge in Card Foot */}
                <div className="p-4 bg-[#082B62] text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-bold tracking-tight text-white">
                        {AGENT_INFO.name}
                      </h4>
                      <p className="text-xs text-[#C8B58B] font-semibold tracking-wider uppercase">
                        {AGENT_INFO.title} · Arizona
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] uppercase tracking-wider text-slate-300 block">
                        License ID
                      </span>
                      <span className="text-xs font-mono font-medium text-white">
                        #{AGENT_INFO.license}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Quick Card Strip below portrait */}
              <div className="mt-4 p-4 bg-[#F7F5F0] border border-slate-200/80 rounded-sm space-y-2.5 text-xs text-slate-700">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Direct Line:</span>
                  <a
                    href={`tel:${AGENT_INFO.directPhone.replace(/\D/g, '')}`}
                    className="font-bold text-[#082B62] hover:underline"
                  >
                    {AGENT_INFO.directPhone}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Office Line:</span>
                  <a
                    href={`tel:${AGENT_INFO.officePhone.replace(/\D/g, '')}`}
                    className="font-medium text-slate-800 hover:text-[#082B62]"
                  >
                    {AGENT_INFO.officePhone}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Email:</span>
                  <a
                    href={`mailto:${AGENT_INFO.email}`}
                    className="font-medium text-[#082B62] hover:underline truncate max-w-[200px]"
                  >
                    {AGENT_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#082B62]">
              <span>Meet Your Real Estate Partner</span>
              <span aria-hidden="true">·</span>
              <span>Coldwell Banker Realty</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#061A3A] tracking-tight leading-[1.15]">
              {AGENT_INFO.bioHeadline}
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                {AGENT_INFO.bioParagraph1}
              </p>
              <p>
                As your dedicated neighborhood partner across the West Valley, Kelvin brings deep local market fluency—the right pricing strategy, timely access to incoming inventory, and the pulse of evolving communities.
              </p>
              <p className="text-slate-700 font-medium border-l-2 border-[#082B62] pl-4 italic">
                &ldquo;From first search to final closing, my mission is simple: provide expert advice, steadfast negotiation, and personalized service so your next move is straightforward, informed, and completely stress-free.&rdquo;
              </p>
            </div>

            {/* Credential Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-sm bg-slate-100 flex items-center justify-center text-[#082B62] shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase">Licensed REALTOR®</h4>
                  <p className="text-[11px] text-slate-500">Arizona Dept of Real Estate</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-sm bg-slate-100 flex items-center justify-center text-[#082B62] shrink-0">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase">Coldwell Banker Network</h4>
                  <p className="text-[11px] text-slate-500">Global Luxury Reach & Marketing</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-sm bg-slate-100 flex items-center justify-center text-[#082B62] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase">West Valley Focus</h4>
                  <p className="text-[11px] text-slate-500">Goodyear, Buckeye, Surprise, Litchfield</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-sm bg-slate-100 flex items-center justify-center text-[#082B62] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase">Fiduciary Standard</h4>
                  <p className="text-[11px] text-slate-500">Your Interests Uncompromisingly First</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={onContactClick}
                className="px-6 py-3 bg-[#082B62] hover:bg-[#061A3A] text-white text-xs font-semibold rounded-sm transition-colors shadow-2xs flex items-center gap-2 cursor-pointer"
              >
                <span>Contact Kelvin</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={`tel:${AGENT_INFO.directPhone.replace(/\D/g, '')}`}
                className="px-5 py-3 border border-slate-300 text-slate-800 hover:text-[#082B62] hover:border-[#082B62] text-xs font-semibold rounded-sm transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#082B62]" />
                <span>Call {AGENT_INFO.directPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
