import React, { useState } from 'react';
import { siteConfig } from '../config/site';
import { ArrowLeft, MapPin, Clock, Coffee, ShieldCheck, Sparkles, Eye, X } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onViewLocation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onViewLocation }) => {
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  return (
    <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden bg-cladding-vertical text-[#F4EFE6] border-b border-[#1C4031]">
      {/* Dynamic Warm Amber Ceiling Lamp Glow (Simulating real facade downlights) */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none opacity-50 animate-glow-pulse"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(212, 155, 75, 0.45) 0%, rgba(212, 155, 75, 0.12) 50%, transparent 75%)'
        }}
        aria-hidden="true"
      />

      {/* Floating ambient botanical backdrops */}
      <div 
        className="absolute -top-32 -left-32 w-[450px] h-[450px] rounded-full bg-[#184E37]/30 blur-3xl pointer-events-none animate-float-slow"
        aria-hidden="true"
      />
      <div 
        className="absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#D49B4B]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Text & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-right">
            
            {/* Live Status Highway Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#184E37]/80 border border-[#2B664B] text-xs sm:text-sm text-[#D5E0DA] mb-6 shadow-sm hover:border-[#D49B4B] transition-colors">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D49B4B] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D49B4B]"></span>
              </span>
              <span className="font-semibold text-[#F4EFE6]">مفتوح الآن</span>
              <span className="text-[#A3B8AE]">• طريق البدرشين السريع بجوار فيلا شريف عناني</span>
            </div>

            {/* Signature 3D Glowing Brand Typography (Inspired by real photo) */}
            <div className="mb-4">
              <div className="font-brand-latin text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight sign-3d-glow select-none leading-tight">
                Tree House
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs sm:text-sm uppercase tracking-[0.25em] font-sans font-bold text-[#D49B4B]">
                  CAFE & BOTANICAL LOUNGE
                </span>
                <span className="w-12 h-[1.5px] bg-[#D49B4B]/60" />
              </div>
            </div>

            {/* English Slogan Subtitle */}
            <div className="font-brand-latin text-[#F4EFE6] text-xl sm:text-2xl font-medium mb-4 italic">
              "{siteConfig.tagline.en}"
            </div>

            {/* Arabic Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#F4EFE6] leading-[1.3] mb-6 tracking-tight">
              الوجهة التي تجمع بين هدوء الطبيعة <br />
              وعبق القهوة الاستثنائية.
            </h1>

            {/* Subtext Paragraph */}
            <p className="text-base sm:text-lg text-[#D5E0DA] max-w-2xl leading-relaxed mb-8 font-normal">
              واجهة متميزة من الصاج الأخضر المضلع وحروف مضيئة ثلاثية الأبعاد تنبض بالدفء الكهرماني على الطريق السريع. جلسات مريحة ومشروبات محضرة بشغف لتعيش لحظات لا تُنسى.
            </p>

            {/* Action Buttons with interactive animations */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onExploreMenu}
                className="relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D49B4B] hover:bg-[#c28b3f] text-[#0D261C] font-extrabold text-base rounded-md transition-all duration-200 shadow-glow-amber hover:shadow-lg cursor-pointer group btn-press shimmer-container"
              >
                <span>استكشف المنيو (75 صنفاً)</span>
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1.5 duration-200" />
              </button>

              <button
                onClick={onViewLocation}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#184E37]/50 hover:bg-[#184E37] text-[#F4EFE6] hover:text-[#D49B4B] font-semibold text-base border border-[#2B664B] rounded-md transition-all duration-200 cursor-pointer btn-press"
              >
                <MapPin className="w-5 h-5 text-[#D49B4B]" />
                <span>موقعنا على الطريق السريع</span>
              </button>
            </div>

            {/* Real Cafe Stats Counter */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#1C4031] w-full text-right">
              <div className="group">
                <div className="font-brand-latin text-2xl sm:text-3xl font-bold text-[#D49B4B] group-hover:scale-105 transition-transform origin-right">
                  75
                </div>
                <div className="text-xs text-[#A3B8AE] mt-0.5">صنفاً متنوعاً بالمنيو</div>
              </div>
              <div className="group">
                <div className="font-brand-latin text-2xl sm:text-3xl font-bold text-[#F4EFE6] group-hover:scale-105 transition-transform origin-right">
                  2:00
                </div>
                <div className="text-xs text-[#A3B8AE] mt-0.5">صباحاً موعد الإغلاق</div>
              </div>
              <div className="group">
                <div className="font-brand-latin text-2xl sm:text-3xl font-bold text-[#D49B4B] group-hover:scale-105 transition-transform origin-right">
                  100%
                </div>
                <div className="text-xs text-[#A3B8AE] mt-0.5">ضيافة وأجواء دافئة</div>
              </div>
            </div>

          </div>

          {/* Real Facade Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden bg-[#071610] border-2 border-[#1C4031] hover:border-[#D49B4B]/80 transition-all duration-300 shadow-2xl group">
              
              {/* Real Facade Photo Container with Hover Spotlight */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0D261C]">
                <img
                  src="/images/tree-house-facade.jpg"
                  alt="واجهة كافيه Tree House Cafe الحقيقية بالصاج الأخضر واللافتة المضيئة"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Subtle Amber Vignette on the photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071610] via-transparent to-black/30 pointer-events-none" />

                {/* Live Floating Badge on Photo */}
                <div className="absolute top-3.5 right-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D261C]/85 backdrop-blur-md border border-[#D49B4B]/50 text-xs text-[#F4EFE6] shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-[#D49B4B]" />
                  <span>الواجهة واللافتة الحقيقية</span>
                </div>

                {/* Zoom Preview Button */}
                <button
                  onClick={() => setIsPhotoModalOpen(true)}
                  className="absolute bottom-3.5 left-3.5 p-2 rounded-full bg-[#0D261C]/80 hover:bg-[#D49B4B] text-[#D49B4B] hover:text-[#0D261C] backdrop-blur-md border border-[#1C4031] transition-all duration-200 cursor-pointer shadow-md group/btn"
                  title="تكبير صورة الواجهة"
                  aria-label="تكبير صورة الواجهة"
                >
                  <Eye className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                </button>
              </div>

              {/* Facade Architectural Breakdown info */}
              <div className="p-5 sm:p-6 bg-[#071610] border-t border-[#1C4031]">
                <div className="flex items-center justify-between pb-3 border-b border-[#1C4031]/60 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D49B4B] animate-pulse" />
                    <span className="font-brand-latin text-sm font-bold text-[#F4EFE6]">
                      {siteConfig.subTagline.en}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#D49B4B] bg-[#184E37]/60 px-2.5 py-0.5 rounded">
                    البدرشين — الجيزة
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-xs text-[#D5E0DA]">
                    <Coffee className="w-4 h-4 text-[#D49B4B] shrink-0 mt-0.5" />
                    <span>
                      <strong>صاج مضلع أخضر وإضاءة كهرمانية 3D:</strong> تصميم معماري حقيقي يميز مكانك المفضل على الطريق السريع.
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-[#D5E0DA]">
                    <Clock className="w-4 h-4 text-[#D49B4B] shrink-0 mt-0.5" />
                    <span>
                      <strong>ساعات العمل:</strong> {siteConfig.hours.ar} — جاهزون لاستقبالكم في أي وقت.
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-[#D5E0DA]">
                    <ShieldCheck className="w-4 h-4 text-[#D49B4B] shrink-0 mt-0.5" />
                    <span>
                      <strong>منيو رقمي وطلب سريع:</strong> تصفح 75 صنفاً واطلب مباشرة عبر QR الطاولة أو الواتساب.
                    </span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-[#1C4031] flex items-center justify-between text-xs">
                  <span className="text-[#A3B8AE]">طريق البدرشين السريع:</span>
                  <a
                    href={siteConfig.socials.whatsapp.getLink('مرحباً كافيه Tree House، أود الاستفسار عن تفاصيل المكان والموقع')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#D49B4B] hover:text-[#e4b573] hover:underline"
                  >
                    تواصل واتساب مباشر &larr;
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* High-Res Photo Modal / Lightbox */}
      {isPhotoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative max-w-4xl w-full bg-[#0D261C] border border-[#1C4031] rounded-xl overflow-hidden shadow-2xl">
            <div className="p-4 bg-[#071610] border-b border-[#1C4031] flex items-center justify-between text-right">
              <div>
                <h3 className="text-base font-bold text-[#F4EFE6]">
                  واجهة Tree House Cafe الأصلية — البدرشين
                </h3>
                <p className="text-xs text-[#A3B8AE]">
                  توثيق الصاج المضلع، الحروف ثلاثية الأبعاد المضيئة، والشبابيك الكلاسيكية
                </p>
              </div>
              <button
                onClick={() => setIsPhotoModalOpen(false)}
                className="p-1.5 text-[#D5E0DA] hover:text-[#D49B4B] rounded-lg transition-colors"
                aria-label="إغلاق"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="max-h-[75vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src="/images/tree-house-facade.jpg"
                alt="واجهة كافيه Tree House Cafe كاملة"
                className="w-full h-auto max-h-[75vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
