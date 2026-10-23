import React, { useState } from 'react';
import { Property, SearchFilters } from '../types/realEstate';
import { DEMO_PROPERTIES } from '../data/mockData';
import { PropertyModal } from './PropertyModal';
import { ArrowUpRight, Bed, Bath, Square, MapPin, RefreshCw } from 'lucide-react';

interface FeaturedPropertiesProps {
  activeFilters: SearchFilters;
  onResetFilters: () => void;
}

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  activeFilters,
  onResetFilters,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const categories = [
    'All',
    'Single Family',
    'Desert Contemporary',
    'Modern Estate',
    'Luxury Villa',
  ];

  // Filter properties according to active search query, category, and price
  const filteredProperties = DEMO_PROPERTIES.filter((prop) => {
    // Category filter
    if (selectedCategory !== 'All' && prop.type !== selectedCategory) {
      return false;
    }
    // Search query filter (location / address / MLS)
    if (activeFilters.query) {
      const q = activeFilters.query.toLowerCase();
      const matchesLocation =
        prop.city.toLowerCase().includes(q) ||
        prop.address.toLowerCase().includes(q) ||
        prop.zip.includes(q) ||
        prop.title.toLowerCase().includes(q) ||
        prop.mlsNumber.toLowerCase().includes(q);
      if (!matchesLocation) return false;
    }
    // Type filter from search bar
    if (activeFilters.type !== 'All' && prop.type !== activeFilters.type) {
      return false;
    }
    // Price filter
    if (prop.price < activeFilters.minPrice || prop.price > activeFilters.maxPrice) {
      return false;
    }
    return true;
  });

  return (
    <section id="featured-properties" className="py-20 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#082B62] mb-2">
              <span>Curated Portfolio</span>
              <span aria-hidden="true">·</span>
              <span>West Valley Real Estate</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#061A3A] tracking-tight">
              Find a Place That Feels Like Home.
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2 max-w-2xl">
              Explore available properties and discover possibilities for your next move.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 hidden sm:inline">Demonstration MLS Feed</span>
            <button
              onClick={() => {
                setSelectedCategory('All');
                onResetFilters();
              }}
              className="text-xs font-semibold text-[#082B62] hover:text-[#061A3A] flex items-center gap-1 cursor-pointer"
            >
              <span>View All Properties ({DEMO_PROPERTIES.length})</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-slate-100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-sm whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#082B62] text-white shadow-2xs'
                  : 'bg-slate-100/70 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
              }`}
            >
              {cat === 'All' ? 'All Collections' : cat}
            </button>
          ))}
        </div>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProperties.map((property) => (
              <article
                key={property.id}
                onClick={() => setSelectedProperty(property)}
                className="group flex flex-col bg-white border border-slate-200/90 rounded-sm overflow-hidden shadow-2xs hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                {/* Image Container with Restrained Zoom */}
                <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                  <img
                    src={property.featuredImage}
                    alt={property.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />

                  {/* Status Tag */}
                  <div className="absolute top-3 left-3 bg-[#061A3A]/85 backdrop-blur-xs text-white text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-xs">
                    {property.status} (Demo)
                  </div>

                  {/* Price overlay pill on mobile / hover */}
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs text-[#082B62] font-bold text-xs px-2.5 py-1 rounded-xs shadow-xs lg:hidden">
                    ${property.price.toLocaleString()}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Price on Desktop */}
                    <div className="hidden lg:flex items-baseline justify-between mb-1">
                      <span className="text-xl font-extrabold text-[#082B62] tabular-nums">
                        ${property.price.toLocaleString()}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">
                        MLS #{property.mlsNumber}
                      </span>
                    </div>

                    {/* Address & City */}
                    <h3 className="text-sm font-bold text-[#061A3A] group-hover:text-[#082B62] transition-colors line-clamp-1">
                      {property.address}
                    </h3>
                    <p className="flex items-center gap-1 text-xs text-slate-500 mt-0.5">
                      <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                      <span className="truncate">{property.city}, {property.state} {property.zip}</span>
                    </p>
                  </div>

                  {/* Specs Metadata: Zero-Pill Unboxed Text */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11.5px] text-slate-600 font-medium">
                    <div className="flex items-center gap-1.5">
                      <Bed className="w-3.5 h-3.5 text-slate-400" />
                      <span>{property.beds} bds</span>
                    </div>
                    <span className="text-slate-300">·</span>
                    <div className="flex items-center gap-1.5">
                      <Bath className="w-3.5 h-3.5 text-slate-400" />
                      <span>{property.baths} ba</span>
                    </div>
                    <span className="text-slate-300">·</span>
                    <div className="flex items-center gap-1.5">
                      <Square className="w-3.5 h-3.5 text-slate-400" />
                      <span>{property.sqft.toLocaleString()} sqft</span>
                    </div>
                  </div>

                  {/* View Details Action Link */}
                  <div className="mt-3 pt-2 flex items-center justify-between text-xs font-semibold text-[#082B62] group-hover:text-[#061A3A]">
                    <span>View Property Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Empty State Handling */
          <div className="text-center py-16 px-4 bg-slate-50 border border-slate-200 rounded-sm max-w-xl mx-auto">
            <h3 className="text-base font-bold text-[#061A3A]">No properties match your exact filters</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Try adjusting your price range or location parameters to view available West Valley listings.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                onResetFilters();
              }}
              className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 bg-[#082B62] text-white text-xs font-semibold rounded-sm hover:bg-[#061A3A] transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Search Filters</span>
            </button>
          </div>
        )}
      </div>

      {/* Property Detail Modal */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onScheduleTour={(prop, date, time, name, phone) => {
          console.log('Tour requested:', { prop: prop.title, date, time, name, phone });
        }}
      />
    </section>
  );
};
