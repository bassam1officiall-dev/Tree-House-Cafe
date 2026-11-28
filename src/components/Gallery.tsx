import React from 'react';
import { Img } from './Img';

const GALLERY_IMAGES = [
  { id: '1', src: '/images/gallery-1.jpg', alt: 'تفاصيل كافيه تري هاوس' },
  { id: '2', src: '/images/gallery-2.jpg', alt: 'أجواء القهوة في تري هاوس' },
  { id: '3', src: '/images/gallery-3.jpg', alt: 'جلسات تري هاوس المسائية' },
  { id: '4', src: '/images/gallery-4.jpg', alt: 'زوايا الديكور المعماري والخشب' },
  { id: '5', src: '/images/gallery-5.jpg', alt: 'ركن العمل والمذاكرة الهادئ' },
  { id: '6', src: '/images/gallery-6.jpg', alt: 'تحضير المشروبات الطازجة' },
  { id: '7', src: '/images/gallery-7.jpg', alt: 'جلسة الأصدقاء في الهواء الطلق' },
  { id: '8', src: '/images/gallery-8.jpg', alt: 'إضاءة الكافيه ليلاً' },
];

export const Gallery: React.FC = () => {
  return (
    <section className="py-10 sm:py-14 bg-[#F4EFE6] text-[#1A1714] border-t border-[#E2DACD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0D261C]">
            أجواء المكان
          </h2>
          <span className="text-xs text-[#855414] font-medium">
            يوميات تري هاوس
          </span>
        </div>

        {/* 8-Photo Grid / Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {GALLERY_IMAGES.map((img) => (
            <div
              key={img.id}
              className="rounded-xl overflow-hidden shadow-sm group bg-[#0D261C] border border-[#E2DACD]/60"
            >
              <div className="h-36 sm:h-44 md:h-48 w-full overflow-hidden">
                <Img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  showDevLabel={true}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
