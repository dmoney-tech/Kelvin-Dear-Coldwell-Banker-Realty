import React from 'react';
import { ShieldCheck, Award, MapPin, Phone } from 'lucide-react';
import { AGENT_INFO } from '../data/mockData';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: Award,
      title: 'REALTOR® Professional',
      subtitle: 'Adhering to strict Code of Ethics',
    },
    {
      icon: ShieldCheck,
      title: 'Coldwell Banker Realty',
      subtitle: 'Established Global Brand Heritage',
    },
    {
      icon: MapPin,
      title: 'Arizona License #SA714989000',
      subtitle: 'West Valley & Greater Phoenix Specialist',
    },
    {
      icon: Phone,
      title: 'Direct Client Advisory',
      subtitle: `${AGENT_INFO.directPhone} · Personal Service`,
    },
  ];

  return (
    <section className="bg-[#F7F5F0] border-b border-[#E5E7EB] py-6 sm:py-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex items-center gap-3.5 py-3 sm:py-0 ${
                  index !== 0 ? 'sm:pl-6' : ''
                } ${index !== trustItems.length - 1 ? 'sm:pr-6' : ''}`}
              >
                <div className="w-10 h-10 rounded-sm bg-white border border-slate-200/80 flex items-center justify-center shrink-0 text-[#082B62] shadow-2xs">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#061A3A] tracking-tight uppercase">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-normal mt-0.5 leading-snug">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
