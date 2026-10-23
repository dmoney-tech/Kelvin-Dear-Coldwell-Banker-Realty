/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TrustStrip } from './components/TrustStrip';
import { FeaturedProperties } from './components/FeaturedProperties';
import { BuyingSellingSection } from './components/BuyingSellingSection';
import { AgentProfile } from './components/AgentProfile';
import { CommunitySection } from './components/CommunitySection';
import { MortgageCalculator } from './components/MortgageCalculator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SearchFilters } from './types/realEstate';

export default function App() {
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    type: 'All',
    minPrice: 0,
    maxPrice: 10000000,
    minBeds: 0,
    searchMode: 'location',
  });

  const handleSearch = (newFilters: SearchFilters) => {
    setFilters(newFilters);
    // Smooth scroll down to featured properties section
    const target = document.getElementById('featured-properties');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResetFilters = () => {
    setFilters({
      query: '',
      type: 'All',
      minPrice: 0,
      maxPrice: 10000000,
      minBeds: 0,
      searchMode: 'location',
    });
  };

  const handleSelectCommunity = (communityName: string) => {
    setFilters({
      query: communityName,
      type: 'All',
      minPrice: 0,
      maxPrice: 10000000,
      minBeds: 0,
      searchMode: 'location',
    });
    const target = document.getElementById('featured-properties');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#061A3A] font-sans antialiased selection:bg-[#082B62] selection:text-white">
      {/* 1. Header Navigation Bar */}
      <Header
        onContactClick={() => scrollToSection('contact-kelvin')}
        onExploreHomesClick={() => scrollToSection('featured-properties')}
        onSellClick={() => scrollToSection('about-kelvin')}
        onCommunitiesClick={() => scrollToSection('communities')}
        onAboutClick={() => scrollToSection('about-kelvin')}
      />

      <main className="flex-1">
        {/* 2. Hero Section: Primary Visual Statement & Property Search */}
        <HeroSection
          onSearch={handleSearch}
          onExploreHomesClick={() => scrollToSection('featured-properties')}
          onSellClick={() => scrollToSection('about-kelvin')}
        />

        {/* 3. Credibility Trust Strip */}
        <TrustStrip />

        {/* 4. Featured Properties Portfolio with Filter Controls */}
        <FeaturedProperties
          activeFilters={filters}
          onResetFilters={handleResetFilters}
        />

        {/* 5. Buying & Selling Pathways */}
        <BuyingSellingSection
          onExploreHomesClick={() => scrollToSection('featured-properties')}
          onContactClick={() => scrollToSection('contact-kelvin')}
        />

        {/* 6. Agent Profile: Meet Kelvin Dear */}
        <AgentProfile
          onContactClick={() => scrollToSection('contact-kelvin')}
        />

        {/* 7. Community Discovery Section */}
        <CommunitySection
          onSelectCommunity={handleSelectCommunity}
        />

        {/* 8. Mortgage & Investment Planning Calculator */}
        <MortgageCalculator
          onConsultationClick={() => scrollToSection('contact-kelvin')}
        />

        {/* 9. Contact & Conversion Section */}
        <ContactSection />
      </main>

      {/* 10. Comprehensive Regulatory & Brokerage Footer */}
      <Footer
        onExploreHomesClick={() => scrollToSection('featured-properties')}
        onSellClick={() => scrollToSection('about-kelvin')}
        onCommunitiesClick={() => scrollToSection('communities')}
        onAboutClick={() => scrollToSection('about-kelvin')}
        onContactClick={() => scrollToSection('contact-kelvin')}
      />
    </div>
  );
}
