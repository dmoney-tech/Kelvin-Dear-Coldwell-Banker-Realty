import React, { useState } from 'react';
import { Property } from '../types/realEstate';
import { AGENT_INFO } from '../data/mockData';
import { X, Bed, Bath, Square, MapPin, Calendar, Phone, CheckCircle, ChevronLeft, ChevronRight, Calculator } from 'lucide-react';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
  onScheduleTour: (property: Property, date: string, time: string, name: string, phone: string) => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({
  property,
  onClose,
  onScheduleTour,
}) => {
  if (!property) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [tourDate, setTourDate] = useState('');
  const [tourTime, setTourTime] = useState('Morning (9am - 12pm)');
  const [tourName, setTourName] = useState('');
  const [tourPhone, setTourPhone] = useState('');
  const [tourSubmitted, setTourSubmitted] = useState(false);

  const images = property.gallery && property.gallery.length > 0 ? property.gallery : [property.featuredImage];

  const handleTourSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tourDate || !tourName) return;
    onScheduleTour(property, tourDate, tourTime, tourName, tourPhone);
    setTourSubmitted(true);
  };

  // Quick mortgage estimate calculation (assuming 20% down, 6.5% 30-year fixed)
  const principal = property.price * 0.8;
  const monthlyRate = 0.065 / 12;
  const numberOfPayments = 360;
  const estimatedPI = Math.round(
    (principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
  );
  const estimatedTax = Math.round((property.price * 0.007) / 12);
  const estimatedInsurance = Math.round((property.price * 0.004) / 12);
  const totalMonthlyEstimate = estimatedPI + estimatedTax + estimatedInsurance;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="property-modal-title"
    >
      <div className="relative w-full max-w-4xl bg-white rounded-md shadow-2xl overflow-hidden my-6 border border-slate-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-slate-500 hover:text-slate-900 bg-white/90 hover:bg-white rounded-full shadow-md transition-colors cursor-pointer"
          aria-label="Close property details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Gallery Carousel */}
        <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
          <img
            src={images[activeImageIndex]}
            alt={`${property.title} view ${activeImageIndex + 1}`}
            className="w-full h-full object-cover transition-opacity duration-300"
          />

          {/* Carousel Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={() =>
                  setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/40 hover:bg-black/70 text-white rounded-full transition-colors cursor-pointer"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() =>
                  setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/40 hover:bg-black/70 text-white rounded-full transition-colors cursor-pointer"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Thumbnails Strip */}
              <div className="absolute bottom-3 inset-x-0 flex justify-center gap-2 px-4">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-14 h-9 rounded-xs overflow-hidden border-2 transition-all cursor-pointer ${
                      activeImageIndex === idx ? 'border-white scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Demonstration Notice */}
          <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-xs">
            {property.status} · MLS Demo #{property.mlsNumber}
          </div>
        </div>

        {/* Property Info Container */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Header Title & Price */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-100 pb-6">
            <div>
              <span className="text-xs font-semibold text-[#082B62] uppercase tracking-wider">
                {property.type}
              </span>
              <h2
                id="property-modal-title"
                className="text-2xl sm:text-3xl font-bold text-[#061A3A] mt-1"
              >
                {property.title}
              </h2>
              <p className="flex items-center gap-1.5 text-sm text-slate-500 mt-1">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>{property.address}, {property.city}, {property.state} {property.zip}</span>
              </p>
            </div>

            <div className="md:text-right">
              <span className="text-xs text-slate-400 block font-medium">Offered At</span>
              <span className="text-3xl font-extrabold text-[#082B62] tabular-nums">
                ${property.price.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Key Specs Bar (Zero-Pill format) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-slate-50 rounded-sm border border-slate-100">
            <div className="flex items-center gap-2.5">
              <Bed className="w-4 h-4 text-[#082B62]" />
              <div>
                <p className="text-[11px] text-slate-400 uppercase font-semibold">Bedrooms</p>
                <p className="text-sm font-bold text-slate-900 tabular-nums">{property.beds} Beds</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Bath className="w-4 h-4 text-[#082B62]" />
              <div>
                <p className="text-[11px] text-slate-400 uppercase font-semibold">Bathrooms</p>
                <p className="text-sm font-bold text-slate-900 tabular-nums">{property.baths} Baths</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Square className="w-4 h-4 text-[#082B62]" />
              <div>
                <p className="text-[11px] text-slate-400 uppercase font-semibold">Living Area</p>
                <p className="text-sm font-bold text-slate-900 tabular-nums">{property.sqft.toLocaleString()} Sq Ft</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Calendar className="w-4 h-4 text-[#082B62]" />
              <div>
                <p className="text-[11px] text-slate-400 uppercase font-semibold">Year Built</p>
                <p className="text-sm font-bold text-slate-900 tabular-nums">{property.yearBuilt}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
              Property Overview
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Architectural Highlights */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
              Features & Amenities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
              {property.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#082B62]" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mortgage Quick Estimate Bar */}
          <div className="p-4 bg-[#F7F5F0] border border-slate-200/80 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-700">
              <Calculator className="w-4 h-4 text-[#082B62]" />
              <span>
                Estimated Monthly Payment: <strong className="text-sm text-[#082B62] tabular-nums">${totalMonthlyEstimate.toLocaleString()}</strong>/mo (20% down, 6.5% APR)
              </span>
            </div>
            <span className="text-[11px] text-slate-500">Includes est. P&I, taxes & insurance</span>
          </div>

          {/* Schedule Private Showing Form */}
          <div className="pt-4 border-t border-slate-100">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="text-base font-bold text-[#061A3A]">
                  Request a Private Showing
                </h3>
                <p className="text-xs text-slate-500">
                  Tour this residence with Kelvin Dear, REALTOR®
                </p>
              </div>

              <a
                href={`tel:${AGENT_INFO.directPhone.replace(/\D/g, '')}`}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#082B62] hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {AGENT_INFO.directPhone}</span>
              </a>
            </div>

            {tourSubmitted ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-sm flex items-center gap-3 text-emerald-800 text-sm">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <div>
                  <p className="font-semibold">Showing Request Received</p>
                  <p className="text-xs text-emerald-700 mt-0.5">
                    Kelvin Dear will confirm your scheduled showing for {property.address} shortly.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleTourSubmit} className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                <div>
                  <label htmlFor="tour-name" className="block text-[11px] font-semibold text-slate-600 mb-1">Your Name</label>
                  <input
                    id="tour-name"
                    type="text"
                    required
                    value={tourName}
                    onChange={(e) => setTourName(e.target.value)}
                    placeholder="Jane Smith"
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-sm"
                  />
                </div>
                <div>
                  <label htmlFor="tour-phone" className="block text-[11px] font-semibold text-slate-600 mb-1">Phone</label>
                  <input
                    id="tour-phone"
                    type="tel"
                    required
                    value={tourPhone}
                    onChange={(e) => setTourPhone(e.target.value)}
                    placeholder="(555) 123-4567"
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-sm"
                  />
                </div>
                <div>
                  <label htmlFor="tour-date" className="block text-[11px] font-semibold text-slate-600 mb-1">Preferred Date</label>
                  <input
                    id="tour-date"
                    type="date"
                    required
                    value={tourDate}
                    onChange={(e) => setTourDate(e.target.value)}
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-sm"
                  />
                </div>
                <div className="flex items-end">
                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 bg-[#082B62] hover:bg-[#061A3A] text-white text-xs font-semibold rounded-sm transition-colors shadow-xs cursor-pointer"
                  >
                    Request Tour
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
