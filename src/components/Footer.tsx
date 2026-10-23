import React, { useState } from 'react';
import { ColdwellBankerLogo } from './ColdwellBankerLogo';
import { AGENT_INFO } from '../data/mockData';
import { Phone, Mail, MapPin, X, ArrowUp } from 'lucide-react';

interface FooterProps {
  onExploreHomesClick: () => void;
  onSellClick: () => void;
  onCommunitiesClick: () => void;
  onAboutClick: () => void;
  onContactClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onExploreHomesClick,
  onSellClick,
  onCommunitiesClick,
  onAboutClick,
  onContactClick,
}) => {
  const [legalModalTitle, setLegalModalTitle] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040E20] text-slate-300 border-t border-white/10">
      {/* Upper Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand & Brokerage Identity */}
          <div className="lg:col-span-4 space-y-4">
            <ColdwellBankerLogo variant="light" showAgentLockup={false} />
            <div className="pt-1">
              <h4 className="text-sm font-bold text-white tracking-wide">
                Kelvin Dear, REALTOR®
              </h4>
              <p className="text-xs text-[#C8B58B] mt-0.5 font-medium">
                Coldwell Banker Realty · Arizona License #SA714989000
              </p>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Providing modern editorial representation and dedicated client advocacy across the West Valley, including Goodyear, Litchfield Park, Buckeye, Surprise, and Scottsdale.
            </p>

            {/* Quick Contact Links */}
            <div className="pt-2 space-y-2 text-xs">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C8B58B]" />
                <span>Direct: <a href={`tel:${AGENT_INFO.directPhone.replace(/\D/g, '')}`} className="text-white hover:text-[#C8B58B] underline">{AGENT_INFO.directPhone}</a></span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C8B58B]" />
                <a href={`mailto:${AGENT_INFO.email}`} className="text-slate-300 hover:text-white underline">{AGENT_INFO.email}</a>
              </p>
              <p className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-[#C8B58B]" />
                <span>Office: {AGENT_INFO.officePhone} · West Valley, AZ</span>
              </p>
            </div>
          </div>

          {/* Column 2: Navigation / Explore */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white">
              Discover Homes
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={onExploreHomesClick} className="hover:text-white transition-colors cursor-pointer">
                  Featured Properties
                </button>
              </li>
              <li>
                <button onClick={onExploreHomesClick} className="hover:text-white transition-colors cursor-pointer">
                  Single Family Homes
                </button>
              </li>
              <li>
                <button onClick={onExploreHomesClick} className="hover:text-white transition-colors cursor-pointer">
                  Desert Contemporary
                </button>
              </li>
              <li>
                <button onClick={onExploreHomesClick} className="hover:text-white transition-colors cursor-pointer">
                  Luxury Estates
                </button>
              </li>
              <li>
                <button onClick={onExploreHomesClick} className="hover:text-white transition-colors cursor-pointer">
                  New Construction
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Client Services */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white">
              Client Advisory
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={onSellClick} className="hover:text-white transition-colors cursor-pointer">
                  Seller Comparative Valuation
                </button>
              </li>
              <li>
                <button onClick={onExploreHomesClick} className="hover:text-white transition-colors cursor-pointer">
                  Buyer Roadmap & Checklist
                </button>
              </li>
              <li>
                <button onClick={onCommunitiesClick} className="hover:text-white transition-colors cursor-pointer">
                  West Valley Communities
                </button>
              </li>
              <li>
                <button onClick={onAboutClick} className="hover:text-white transition-colors cursor-pointer">
                  About Kelvin Dear
                </button>
              </li>
              <li>
                <button onClick={onContactClick} className="hover:text-white transition-colors cursor-pointer">
                  Schedule Private Showing
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Professional Affiliations & Compliance Badge */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white">
              Affiliations & Standards
            </h5>
            <div className="p-4 bg-white/5 border border-white/10 rounded-sm space-y-3 text-xs text-slate-400">
              <div className="flex items-center gap-3">
                {/* Equal Housing Logo SVG */}
                <div className="w-8 h-8 rounded-xs bg-white text-slate-900 flex items-center justify-center font-bold text-xs shrink-0" title="Equal Housing Opportunity">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 3L2 12h3v8h14v-8h3L12 3zm0 2.84L18 11v7H6v-7l6-5.16zM8 13h8v2H8v-2zm0 3h8v1H8v-1z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">Equal Housing Opportunity</p>
                  <p className="text-[11px] text-slate-400">Committed to fair housing for all</p>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 text-[11px] text-slate-400">
                <span className="font-semibold text-slate-200">REALTOR®:</span> Kelvin Dear is a member of the National Association of REALTORS® and adheres to its strict Code of Ethics.
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-[#C8B58B] hover:text-white transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to top</span>
            </button>
          </div>
        </div>
      </div>

      {/* Disclosures & Regulatory Hairline Strip */}
      <div className="border-t border-white/10 bg-[#020813] py-8 text-[11px] text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p className="leading-relaxed">
            <strong>Legal Notice & Brokerage Affiliation:</strong> Coldwell Banker Realty and the Coldwell Banker logo are registered trademarks licensed to Coldwell Banker Real Estate LLC. An Equal Opportunity Company. Equal Housing Opportunity. Each office is independently owned and operated. Kelvin Dear is an affiliated real estate salesperson licensed with the Arizona Department of Real Estate (License #SA714989000 AZ).
          </p>

          <p className="leading-relaxed text-slate-400">
            <strong>Demonstration Prototype Note:</strong> This website redesign concept for Kelvin Dear is built for presentation, demonstrating modern editorial architecture, responsive user experience, and verified agent information. Active MLS listing feeds and external IDX data feeds are represented via demonstration fixtures and can be linked to production MLS systems (ARMLS) upon deployment.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-white/5 text-slate-400">
            <p>© {new Date().getFullYear()} Kelvin Dear, REALTOR®. All rights reserved.</p>

            <div className="flex items-center gap-4 text-slate-400">
              <button
                onClick={() => setLegalModalTitle('Equal Housing Opportunity Notice')}
                className="hover:text-white underline cursor-pointer"
              >
                Equal Housing
              </button>
              <button
                onClick={() => setLegalModalTitle('Privacy Policy')}
                className="hover:text-white underline cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setLegalModalTitle('Terms of Service & Disclosures')}
                className="hover:text-white underline cursor-pointer"
              >
                Terms & Disclosures
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Disclosures Modal */}
      {legalModalTitle && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 text-slate-900"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-lg bg-white rounded-md shadow-2xl p-6 border border-slate-200">
            <button
              onClick={() => setLegalModalTitle(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-bold text-[#061A3A] mb-3">
              {legalModalTitle}
            </h3>
            <div className="text-xs text-slate-600 space-y-3 max-h-96 overflow-y-auto">
              <p>
                Kelvin Dear and Coldwell Banker Realty are fully committed to the Federal Fair Housing Act and Title VIII of the Civil Rights Act of 1968. We do not discriminate on the basis of race, color, religion, sex, handicap, familial status, or national origin.
              </p>
              <p>
                All property information presented herein is deemed reliable but is not guaranteed and should be independently verified. Properties are subject to prior sale, change, or withdrawal. Neither Coldwell Banker Realty nor Kelvin Dear shall be responsible for any typographical errors, misinformation, or misprints.
              </p>
              <p>
                Information collected through inquiry forms on this website is utilized solely by Kelvin Dear for client advisory purposes and is never sold, leased, or distributed to third-party marketing entities.
              </p>
            </div>
            <div className="mt-5 text-right">
              <button
                onClick={() => setLegalModalTitle(null)}
                className="px-4 py-2 bg-[#082B62] text-white text-xs font-semibold rounded-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
