import React from 'react';
import { siteConfig } from '../config/site';
import { ArrowLeft, MapPin } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onViewLocation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onViewLocation }) => {
  return (
    <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 bg-[#0D261C] text-[#F4EFE6] border-b border-[#1C4031]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-6 flex flex-col items-start text-right">
            <span className="font-brand-latin text-2xl sm:text-3xl font-bold text-[#D49B4B] mb-2">
              Tree House Cafe
            </span>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F4EFE6] leading-tight mb-4 tracking-tight">
              قهوة وقعدة على الطريق
            </h1>

            <p className="text-xs sm:text-sm text-[#D5E0DA] mb-6">
              {siteConfig.address.fullAr} • {siteConfig.hours.ar}
            </p>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onExploreMenu}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D49B4B] hover:bg-[#c28b3f] text-[#0D261C] font-bold text-sm rounded-lg transition-colors cursor-pointer"
              >
                <span>المنيو</span>
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={onViewLocation}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent hover:bg-[#184E37] text-[#F4EFE6] font-medium text-sm border border-[#2B664B] rounded-lg transition-colors cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#D49B4B]" />
                <span>الموقع</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-lg overflow-hidden border border-[#1C4031] shadow-sm bg-[#071610]">
              <img
                src="/images/tree-house-facade.jpg"
                alt="واجهة كافيه Tree House في البدرشين"
                className="w-full h-auto max-h-[420px] object-cover object-center"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
