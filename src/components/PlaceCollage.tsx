import React from 'react';
import { Img } from './Img';

export const PlaceCollage: React.FC = () => {
  return (
    <section className="py-10 sm:py-14 bg-[#F4EFE6] text-[#1A1714]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0D261C]">
            المكان
          </h2>
          <span className="text-xs text-[#855414] font-medium">
            واجهة وأجواء الكافيه الحقيقية
          </span>
        </div>

        {/* Real photo showcase: Full-bleed images with NO empty space */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
          
          {/* Real wide night exterior photo - fills 100% */}
          <div className="md:col-span-8 rounded-xl overflow-hidden shadow-sm group border border-[#E2DACD] h-56 sm:h-72 md:h-84 relative">
            <Img
              src="/images/fb/cover.jpg"
              alt="واجهة كافيه تري هاوس الليلية ومدخل المكان في البدرشين"
              fallbackSrc="/images/tree-house-facade.jpg"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>

          {/* Real illuminated 3D facade sign - fills 100% */}
          <div className="md:col-span-4 rounded-xl overflow-hidden shadow-sm group border border-[#E2DACD] h-56 sm:h-72 md:h-84 relative">
            <Img
              src="/images/fb/exterior-night.jpg"
              alt="حروف Tree House المضيئة ثلاثية الأبعاد على الواجهة"
              fallbackSrc="/images/tree-house-facade.jpg"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
