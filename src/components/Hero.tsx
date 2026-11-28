import React from 'react';
import { siteConfig } from '../config/site';
import { ArrowLeft, MapPin } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onViewLocation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onViewLocation }) => {
  return (
    <section className="relative min-h-[460px] sm:min-h-[520px] flex items-center bg-[#0D261C] text-[#F4EFE6] border-b border-[#1C4031] overflow-hidden pt-24 sm:pt-32 pb-14 sm:pb-20">
      {/* Full-bleed background photo: right side on desktop in RTL, top on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-full lg:w-3/5 h-72 sm:h-96 lg:h-full">
          <picture>
            <source srcSet="/images/tree-house-facade.webp" type="image/webp" />
            <img
              src="/images/tree-house-facade.jpg"
              alt="واجهة كافيه Tree House في البدرشين"
              className="w-full h-full object-cover object-center"
              loading="eager"
              decoding="async"
            />
          </picture>
          {/* Dark green gradient overlay (#0D261C ~60%) keeping text crystal clear */}
          <div className="absolute inset-0 bg-[#0D261C]/60" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0D261C]/80 to-[#0D261C] hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D261C] via-[#0D261C]/40 to-transparent lg:hidden" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl text-right">
          <span className="font-brand-latin text-2xl sm:text-3xl font-bold text-[#D49B4B] mb-2 block">
            Tree House Cafe
          </span>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F4EFE6] leading-tight mb-4 tracking-tight drop-shadow-sm">
            قهوة وقعدة على الطريق
          </h1>

          <p className="text-xs sm:text-sm text-[#D5E0DA] mb-6">
            {siteConfig.address.fullAr} • {siteConfig.hours.ar}
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onExploreMenu}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D49B4B] hover:bg-[#c28b3f] text-[#0D261C] font-bold text-sm rounded-lg transition-colors cursor-pointer shadow-sm"
            >
              <span>المنيو</span>
              <ArrowLeft className="w-4 h-4" />
            </button>

            <button
              onClick={onViewLocation}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0D261C]/80 hover:bg-[#184E37] text-[#F4EFE6] font-medium text-sm border border-[#2B664B] rounded-lg transition-colors cursor-pointer backdrop-blur-sm"
            >
              <MapPin className="w-4 h-4 text-[#D49B4B]" />
              <span>الموقع</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
