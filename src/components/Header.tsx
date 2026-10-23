import React, { useState, useEffect } from 'react';
import { ColdwellBankerLogo } from './ColdwellBankerLogo';
import { AGENT_INFO } from '../data/mockData';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onContactClick: () => void;
  onExploreHomesClick: () => void;
  onSellClick: () => void;
  onCommunitiesClick: () => void;
  onAboutClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onContactClick,
  onExploreHomesClick,
  onSellClick,
  onCommunitiesClick,
  onAboutClick,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Buy', onClick: onExploreHomesClick },
    { label: 'Sell', onClick: onSellClick },
    { label: 'Properties', onClick: onExploreHomesClick },
    { label: 'Communities', onClick: onCommunitiesClick },
    { label: 'About', onClick: onAboutClick },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-200 bg-white/95 backdrop-blur-md border-b ${
          isScrolled ? 'border-slate-200 shadow-xs py-3' : 'border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand wordmark & Affiliation */}
            <a
              href="#"
              className="flex items-center gap-2 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#082B62]"
              aria-label="Kelvin Dear, REALTOR - Coldwell Banker Realty Home"
            >
              <ColdwellBankerLogo variant="dark" />
            </a>

            {/* Zone 2: Navigation links */}
            <nav
              className="hidden lg:flex items-center gap-7 text-[13.5px] font-medium text-slate-700"
              aria-label="Main Navigation"
            >
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className="whitespace-nowrap hover:text-[#082B62] transition-colors py-1 relative group cursor-pointer"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#082B62] transition-all duration-200 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* Zone 3: Direct Phone & Primary CTA */}
            <div className="hidden sm:flex items-center gap-4 shrink-0">
              <a
                href={`tel:${AGENT_INFO.directPhone.replace(/\D/g, '')}`}
                className="hidden xl:flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-[#082B62] transition-colors whitespace-nowrap"
                title="Direct Phone Line to Kelvin Dear"
              >
                <Phone className="w-3.5 h-3.5 text-[#082B62]" />
                <span>{AGENT_INFO.directPhone}</span>
              </a>

              <button
                onClick={onContactClick}
                className="px-4 py-2 text-xs font-semibold tracking-wide text-white bg-[#082B62] hover:bg-[#061A3A] transition-colors rounded-sm shadow-xs whitespace-nowrap cursor-pointer flex items-center gap-1"
              >
                <span>Contact Kelvin</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${AGENT_INFO.directPhone.replace(/\D/g, '')}`}
                className="p-2 text-[#082B62] hover:bg-slate-100 rounded-sm sm:hidden"
                aria-label="Call Kelvin Dear"
              >
                <Phone className="w-5 h-5" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-[#082B62] hover:bg-slate-100 rounded-sm transition-colors focus-visible:outline-2 focus-visible:outline-[#082B62]"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden flex flex-col bg-slate-900/40 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="bg-white w-full max-w-sm ml-auto h-full flex flex-col shadow-xl animate-in slide-in-from-right duration-200">
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <ColdwellBankerLogo variant="dark" showAgentLockup={false} />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-slate-500 hover:text-slate-900 rounded-sm"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Agent Quick Bio Header in Drawer */}
            <div className="px-6 py-4 bg-slate-50 border-b border-slate-100 flex items-center gap-3">
              <img
                src={AGENT_INFO.portraitUrl}
                alt="Kelvin Dear REALTOR"
                className="w-12 h-12 rounded-sm object-cover border border-slate-200"
              />
              <div>
                <p className="text-sm font-bold text-[#061A3A]">{AGENT_INFO.name}</p>
                <p className="text-xs text-[#082B62] font-semibold">{AGENT_INFO.title}</p>
                <p className="text-[11px] text-slate-500">Lic. #{AGENT_INFO.license}</p>
              </div>
            </div>

            {/* Drawer Links */}
            <nav className="flex-1 px-6 py-6 space-y-2 overflow-y-auto">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    item.onClick();
                  }}
                  className="w-full text-left py-3 px-3 text-sm font-semibold text-slate-800 hover:text-[#082B62] hover:bg-slate-50 rounded-sm transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Drawer Footer Actions */}
            <div className="p-6 border-t border-slate-100 space-y-3 bg-slate-50/50">
              <a
                href={`tel:${AGENT_INFO.directPhone.replace(/\D/g, '')}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold text-slate-800 border border-slate-200 rounded-sm hover:bg-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#082B62]" />
                <span>Call {AGENT_INFO.directPhone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#082B62] hover:bg-[#061A3A] rounded-sm transition-colors shadow-xs"
              >
                Contact Kelvin
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
