import React from 'react';
import { siteConfig } from '../config/site';
import { Users, BookOpen, Coffee } from 'lucide-react';

export const VibesServices: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'friends':
        return <Users className="w-5 h-5 text-[#184E37]" />;
      case 'work':
        return <BookOpen className="w-5 h-5 text-[#184E37]" />;
      default:
        return <Coffee className="w-5 h-5 text-[#184E37]" />;
    }
  };

  return (
    <section id="services" className="py-8 sm:py-10 bg-[#F4EFE6] text-[#1A1714] border-b border-[#E2DACD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-lg sm:text-xl font-bold text-[#0D261C] mb-4 text-right">
          خدمات المكان
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {siteConfig.pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="p-4 bg-[#FCFAF7] border border-[#E2DACD] rounded-lg flex items-center gap-3 text-right"
            >
              <div className="w-9 h-9 rounded-lg bg-[#F4EFE6] border border-[#E2DACD] flex items-center justify-center shrink-0">
                {getIcon(pillar.id)}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-[#0D261C]">
                {pillar.titleAr}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
