import React, { useState } from 'react';
import { Search, MapPin, Navigation, ArrowRight, SlidersHorizontal, Check } from 'lucide-react';
import { SearchFilters } from '../types/realEstate';

interface HeroSectionProps {
  onSearch: (filters: SearchFilters) => void;
  onExploreHomesClick: () => void;
  onSellClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSearch,
  onExploreHomesClick,
  onSellClick,
}) => {
  const [searchMode, setSearchMode] = useState<'location' | 'mls'>('location');
  const [searchQuery, setSearchQuery] = useState('');
  const [propertyType, setPropertyType] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [minBeds, setMinBeds] = useState(0);
  const [isLocating, setIsLocating] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);

  const quickLocations = ['Goodyear', 'Litchfield Park', 'Surprise', 'Peoria', 'Scottsdale'];

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    let min = 0;
    let max = 10000000;
    if (priceRange === 'under-1m') max = 1000000;
    else if (priceRange === '1m-2m') { min = 1000000; max = 2000000; }
    else if (priceRange === '2m-plus') { min = 2000000; }

    onSearch({
      query: searchQuery.trim(),
      type: propertyType,
      minPrice: min,
      maxPrice: max,
      minBeds,
      searchMode,
    });
  };

  const handleNearMeClick = () => {
    setIsLocating(true);
    setFeedbackMsg(null);

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        () => {
          setIsLocating(false);
          setSearchQuery('West Valley, AZ');
          setFeedbackMsg('Located nearby West Valley market listings');
          setTimeout(() => setFeedbackMsg(null), 3500);
        },
        () => {
          setIsLocating(false);
          setSearchQuery('West Valley, AZ');
          setFeedbackMsg('Set to Kelvin Dear West Valley primary market');
          setTimeout(() => setFeedbackMsg(null), 3500);
        },
        { timeout: 4000 }
      );
    } else {
      setIsLocating(false);
      setSearchQuery('West Valley, AZ');
    }
  };

  return (
    <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Architectural House Photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_house.jpg"
          alt="Luxury residential architectural estate"
          className="w-full h-full object-cover object-center scale-[1.02] transform transition-transform duration-1000"
          loading="eager"
          fetchPriority="high"
        />
        {/* Measured Scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#061A3A]/95 via-[#061A3A]/60 to-[#061A3A]/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col justify-center">
        <div className="max-w-3xl space-y-6">
          {/* Subtle Coldwell Banker Realty West Valley Marker */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C8B58B]">
            <span>Coldwell Banker Realty</span>
            <span aria-hidden="true">·</span>
            <span>West Valley, Arizona</span>
          </div>

          {/* Hero Headline */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]"
            style={{ textWrap: 'balance' }}
          >
            Find the Right Home. Make Your Next Move With Confidence.
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-slate-200 font-normal max-w-2xl leading-relaxed">
            Explore homes, discover your ideal neighborhood, and get personalized guidance from Kelvin Dear.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onExploreHomesClick}
              className="px-6 py-3.5 bg-[#082B62] hover:bg-[#061A3A] text-white text-sm font-semibold rounded-sm shadow-md transition-all flex items-center gap-2 cursor-pointer border border-white/20"
            >
              <span>Explore Homes</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onSellClick}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-xs text-white text-sm font-semibold rounded-sm transition-all cursor-pointer border border-white/30"
            >
              Sell Your Home
            </button>
          </div>
        </div>

        {/* Refined Search Interface */}
        <div className="mt-12 w-full max-w-4xl bg-white rounded-md shadow-xl border border-slate-200/80 p-4 sm:p-5">
          {/* Search Tabs & Mode Toggle */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSearchMode('location')}
                className={`text-xs font-semibold pb-1.5 transition-colors relative cursor-pointer ${
                  searchMode === 'location' ? 'text-[#082B62]' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Search by Location
                {searchMode === 'location' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#082B62]" />
                )}
              </button>

              <span className="text-slate-300 text-xs">|</span>

              <button
                type="button"
                onClick={() => setSearchMode('mls')}
                className={`text-xs font-semibold pb-1.5 transition-colors relative cursor-pointer ${
                  searchMode === 'mls' ? 'text-[#082B62]' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Search by MLS# or Address
                {searchMode === 'mls' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#082B62]" />
                )}
              </button>
            </div>

            {/* Geolocation Button */}
            <button
              type="button"
              onClick={handleNearMeClick}
              disabled={isLocating}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-[#082B62] transition-colors cursor-pointer"
            >
              <Navigation className={`w-3.5 h-3.5 text-[#082B62] ${isLocating ? 'animate-spin' : ''}`} />
              <span>{isLocating ? 'Locating...' : 'Search near me'}</span>
            </button>
          </div>

          {/* Form Inputs Grid */}
          <form onSubmit={handleSearchSubmit} className="pt-4 grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
            {/* Primary Search Input */}
            <div className="md:col-span-5 relative">
              <label htmlFor="search-input" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                {searchMode === 'location' ? 'Location or Community' : 'MLS# or Specific Address'}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {searchMode === 'location' ? (
                    <MapPin className="h-4 w-4 text-slate-400" />
                  ) : (
                    <Search className="h-4 w-4 text-slate-400" />
                  )}
                </div>
                <input
                  id="search-input"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    searchMode === 'location'
                      ? 'Neighborhood, City, ZIP (e.g. Goodyear, 85395)'
                      : 'Enter MLS # (e.g. AZ-6598214)'
                  }
                  className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#082B62] focus:ring-1 focus:ring-[#082B62] transition-colors"
                />
              </div>
            </div>

            {/* Property Type Dropdown */}
            <div className="md:col-span-3">
              <label htmlFor="property-type" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                Property Type
              </label>
              <select
                id="property-type"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full py-2.5 px-3 text-sm bg-slate-50 border border-slate-200 rounded-sm text-slate-900 focus:bg-white focus:border-[#082B62] focus:ring-1 focus:ring-[#082B62] transition-colors"
              >
                <option value="All">All Property Types</option>
                <option value="Single Family">Single Family</option>
                <option value="Desert Contemporary">Desert Contemporary</option>
                <option value="Modern Estate">Modern Estate</option>
                <option value="Luxury Villa">Luxury Villa</option>
              </select>
            </div>

            {/* Price Range Dropdown */}
            <div className="md:col-span-2">
              <label htmlFor="price-range" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                Price
              </label>
              <select
                id="price-range"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full py-2.5 px-3 text-sm bg-slate-50 border border-slate-200 rounded-sm text-slate-900 focus:bg-white focus:border-[#082B62] focus:ring-1 focus:ring-[#082B62] transition-colors"
              >
                <option value="All">Any Price</option>
                <option value="under-1m">&lt; $1,000,000</option>
                <option value="1m-2m">$1M – $2,000,000</option>
                <option value="2m-plus">$2,000,000+</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-[#082B62] hover:bg-[#061A3A] text-white text-sm font-semibold rounded-sm transition-colors flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>Search</span>
              </button>
            </div>
          </form>

          {/* Quick Location Pills & Feedback message */}
          <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-slate-400 font-medium">Quick find:</span>
              {quickLocations.map((loc) => (
                <button
                  key={loc}
                  type="button"
                  onClick={() => {
                    setSearchQuery(loc);
                    onSearch({
                      query: loc,
                      type: propertyType,
                      minPrice: 0,
                      maxPrice: 10000000,
                      minBeds: 0,
                      searchMode: 'location',
                    });
                  }}
                  className="px-2 py-0.5 text-slate-600 hover:text-[#082B62] hover:bg-slate-100 rounded-xs transition-colors cursor-pointer"
                >
                  {loc}
                </button>
              ))}
            </div>

            {feedbackMsg && (
              <div className="flex items-center gap-1 text-emerald-700 font-medium animate-in fade-in">
                <Check className="w-3.5 h-3.5" />
                <span>{feedbackMsg}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
