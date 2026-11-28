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
            لقطات من زوايا الكافيه
          </span>
        </div>

        {/* Asymmetric 4-photo collage grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
          
          {/* Main featured photo - Interior Seating */}
          <div className="md:col-span-7 rounded-xl overflow-hidden shadow-sm group">
            <div className="h-64 sm:h-80 md:h-96 w-full overflow-hidden">
              <Img
                src="/images/interior-seating.jpg"
                alt="جلسات كافيه Tree House الداخلية المريحة"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                showDevLabel={true}
              />
            </div>
          </div>

          {/* Right column with 2 stacked photos */}
          <div className="md:col-span-5 grid grid-cols-2 md:grid-cols-1 gap-3 sm:gap-4">
            
            {/* Outdoor Seating */}
            <div className="rounded-xl overflow-hidden shadow-sm group h-32 sm:h-38 md:h-[184px]">
              <Img
                src="/images/outdoor-seating.jpg"
                alt="جلسات كافيه Tree House الخارجية"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                showDevLabel={true}
              />
            </div>

            {/* Bar Counter */}
            <div className="rounded-xl overflow-hidden shadow-sm group h-32 sm:h-38 md:h-[184px]">
              <Img
                src="/images/bar-counter.jpg"
                alt="بار إعداد القهوة والمشروبات"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                showDevLabel={true}
              />
            </div>

          </div>

          {/* Bottom wide photo - Night Lights */}
          <div className="md:col-span-12 rounded-xl overflow-hidden shadow-sm group mt-1">
            <div className="h-44 sm:h-56 w-full overflow-hidden">
              <Img
                src="/images/night-lights.jpg"
                alt="أجواء الإضاءة الليلية الدافئة لكافيه تري هاوس"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                showDevLabel={true}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
