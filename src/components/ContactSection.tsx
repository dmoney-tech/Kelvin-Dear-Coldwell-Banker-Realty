import React, { useState } from 'react';
import { AGENT_INFO } from '../data/mockData';
import { ContactFormData } from '../types/realEstate';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: 'Buying',
    timeframe: '1–3 Months',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!formData.fullName.trim()) {
      setErrorMessage('Please provide your name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);

    // Demonstration submission flow
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  return (
    <section id="contact-kelvin" className="py-20 lg:py-28 bg-[#061A3A] text-white relative overflow-hidden">
      {/* Background Architectural Accent lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#FFFFFF" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C8B58B]">
                <span>Start The Conversation</span>
                <span aria-hidden="true">·</span>
                <span>Direct Access</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Let&apos;s Talk About Your Next Move.
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether you&apos;re exploring the market, looking for a home, or considering selling, start with a conversation. Kelvin provides unbiased local insight and strategic guidance with no obligation.
              </p>
            </div>

            {/* Direct Contact Points */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-sm">
                <div className="w-10 h-10 rounded-sm bg-[#082B62] border border-white/20 flex items-center justify-center shrink-0 text-white">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Direct Client Line
                  </h4>
                  <a
                    href={`tel:${AGENT_INFO.directPhone.replace(/\D/g, '')}`}
                    className="text-lg font-extrabold text-white hover:text-[#C8B58B] transition-colors block mt-0.5"
                  >
                    {AGENT_INFO.directPhone}
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">Office: {AGENT_INFO.officePhone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-sm">
                <div className="w-10 h-10 rounded-sm bg-[#082B62] border border-white/20 flex items-center justify-center shrink-0 text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Email Inquiries
                  </h4>
                  <a
                    href={`mailto:${AGENT_INFO.email}`}
                    className="text-sm font-semibold text-white hover:text-[#C8B58B] transition-colors block mt-0.5"
                  >
                    {AGENT_INFO.email}
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">Prompt responses within 24 business hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-sm">
                <div className="w-10 h-10 rounded-sm bg-[#082B62] border border-white/20 flex items-center justify-center shrink-0 text-white">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Advisory Hours
                  </h4>
                  <p className="text-xs text-white mt-0.5 font-medium">{AGENT_INFO.officeHours}</p>
                  <p className="text-xs text-slate-400 mt-0.5">West Valley & Greater Phoenix Market</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white text-slate-900 p-6 sm:p-10 rounded-sm shadow-2xl border border-slate-200">
            {isSuccess ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#061A3A]">
                  Inquiry Received
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{formData.fullName}</strong>. Your message regarding <strong>{formData.inquiryType}</strong> has been transmitted to Kelvin Dear. Kelvin will contact you via {formData.email} or {formData.phone || 'phone'} shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        inquiryType: 'Buying',
                        timeframe: '1–3 Months',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 bg-[#082B62] text-white text-xs font-semibold rounded-sm hover:bg-[#061A3A] transition-colors cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <span className="text-xs font-bold text-[#082B62] uppercase tracking-wider">
                    Send a Direct Message
                  </span>
                  <h3 className="text-xl font-bold text-[#061A3A] mt-0.5">
                    How Can Kelvin Assist You?
                  </h3>
                </div>

                {errorMessage && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-sm">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="full-name" className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      id="full-name"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-sm focus:bg-white focus:border-[#082B62]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-sm focus:bg-white focus:border-[#082B62]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(860) 000-0000"
                      className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-sm focus:bg-white focus:border-[#082B62]"
                    />
                  </div>

                  <div>
                    <label htmlFor="inquiry-type" className="block text-xs font-bold text-slate-700 mb-1">
                      Primary Objective
                    </label>
                    <select
                      id="inquiry-type"
                      value={formData.inquiryType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          inquiryType: e.target.value as ContactFormData['inquiryType'],
                        })
                      }
                      className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-sm focus:bg-white focus:border-[#082B62]"
                    >
                      <option value="Buying">Looking to Buy a Home</option>
                      <option value="Selling">Looking to Sell My Property</option>
                      <option value="Property Inquiry">Inquiring About a Specific Property</option>
                      <option value="General Consultation">Market Advice & Relocation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-700 mb-1">
                    Message or Specific Questions
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell Kelvin about your target neighborhood, preferred timeline, or questions regarding Arizona real estate..."
                    className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-sm focus:bg-white focus:border-[#082B62]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 bg-[#082B62] hover:bg-[#061A3A] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending Inquiry...' : 'Submit Message to Kelvin Dear'}</span>
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                    <span>Your privacy is respected. No spam, unsolicited lists, or aggressive sales tactics.</span>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
