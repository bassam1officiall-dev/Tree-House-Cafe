import React, { useState } from 'react';
import { siteConfig } from '../config/site';
import { ArrowLeft, MapPin, Clock, Eye, X } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onViewLocation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onViewLocation }) => {
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 bg-[#0D261C] text-[#F4EFE6] border-b border-[#1C4031]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 flex flex-col items-start text-right">
            <div className="text-xs sm:text-sm text-[#D49B4B] font-medium mb-4">
              طريق مصر أسيوط السريع، بجوار فيلا شريف عناني، البدرشين
            </div>

            <div className="font-brand-latin text-4xl sm:text-6xl font-bold tracking-tight text-[#F4EFE6] mb-4">
              Tree House Cafe
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#F4EFE6] leading-snug mb-4 tracking-tight">
              قهوة مظبوطة، مشروبات باردة وسخنة، <br />
              وقعدة رايقة على الطريق.
            </h1>

            <p className="text-sm sm:text-base text-[#D5E0DA] max-w-xl leading-relaxed mb-8">
              مكانك في البدرشين، سواء نازل تشرب قهوتك مع صحابك، تذاكر في هدوء، أو تاخد مشروبك تيك أواي وأنت مسافر على الطريق السريع.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onExploreMenu}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#D49B4B] hover:bg-[#c28b3f] text-[#0D261C] font-bold text-sm rounded-lg transition-colors cursor-pointer"
              >
                <span>استكشف المنيو</span>
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={onViewLocation}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent hover:bg-[#184E37] text-[#F4EFE6] font-medium text-sm border border-[#2B664B] rounded-lg transition-colors cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#D49B4B]" />
                <span>موقعنا على الخريطة</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-lg overflow-hidden bg-[#071610] border border-[#1C4031] shadow-sm">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0D261C]">
                <img
                  src="/images/tree-house-facade.jpg"
                  alt="واجهة كافيه Tree House في البدرشين"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />

                <button
                  onClick={() => setIsPhotoModalOpen(true)}
                  className="absolute bottom-3 left-3 p-2 rounded-lg bg-[#071610]/80 hover:bg-[#0D261C] text-[#F4EFE6] border border-[#1C4031] transition-colors cursor-pointer"
                  title="تكبير الصورة"
                  aria-label="تكبير الصورة"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              <div className="p-5 bg-[#071610] border-t border-[#1C4031] space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-[#D5E0DA]">
                  <MapPin className="w-4 h-4 text-[#D49B4B] shrink-0 mt-0.5" />
                  <span>{siteConfig.address.fullAr}</span>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-[#D5E0DA]">
                  <Clock className="w-4 h-4 text-[#D49B4B] shrink-0 mt-0.5" />
                  <span>{siteConfig.hours.ar}</span>
                </div>

                <div className="pt-2 border-t border-[#1C4031] flex items-center justify-between text-xs">
                  <span className="text-[#A3B8AE]">للحجز أو الاستفسار:</span>
                  <a
                    href={siteConfig.socials.whatsapp.getLink('مساء الخير، حابب أستفسر بخصوص الكافيه')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#D49B4B] hover:underline"
                  >
                    واتساب مباشرة &larr;
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {isPhotoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-3xl w-full bg-[#0D261C] border border-[#1C4031] rounded-lg overflow-hidden shadow-lg">
            <div className="p-3 bg-[#071610] border-b border-[#1C4031] flex items-center justify-between text-right">
              <span className="text-sm font-semibold text-[#F4EFE6]">
                واجهة Tree House Cafe | البدرشين
              </span>
              <button
                onClick={() => setIsPhotoModalOpen(false)}
                className="p-1 text-[#D5E0DA] hover:text-[#D49B4B] rounded transition-colors"
                aria-label="إغلاق"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="max-h-[75vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src="/images/tree-house-facade.jpg"
                alt="واجهة كافيه Tree House"
                className="w-full h-auto max-h-[75vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
