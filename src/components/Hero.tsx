import React from 'react';
import { siteConfig } from '../config/site';
import { ArrowLeft, MapPin, Clock, Coffee, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onViewLocation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onViewLocation }) => {
  return (
    <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden bg-cladding-pattern text-[#F4EFE6] border-b border-[#1C4031]">
      {/* Subtle Warm Amber Ceiling Lamp Glow (Realistic architectural accent) */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[340px] pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(212, 155, 75, 0.35) 0%, rgba(212, 155, 75, 0.08) 45%, transparent 70%)'
        }}
        aria-hidden="true"
      />

      {/* Subtle corner botanical framing element */}
      <div 
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#184E37]/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#184E37]/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Text & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-right">
            {/* Architectural & Highway Location Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#184E37]/70 border border-[#2B664B] text-xs sm:text-sm text-[#D5E0DA] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#D49B4B] animate-pulse" />
              <span className="font-medium text-[#F4EFE6]">طريق البدرشين السريع — بجوار فيلا شريف عناني</span>
            </div>

            {/* English Slogan Subtitle (Fraunces Serif) */}
            <div className="font-brand-latin text-[#D49B4B] text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 tracking-wide">
              {siteConfig.tagline.en}
            </div>

            {/* Arabic Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F4EFE6] leading-[1.2] mb-6 tracking-tight">
              أجواء دافئة، <br />
              وقهوة تليق برحلتك ولقائك.
            </h1>

            {/* Subtext Paragraph */}
            <p className="text-base sm:text-lg text-[#D5E0DA] max-w-2xl leading-relaxed mb-8 font-normal">
              واجهة معمارية من الصاج الأخضر العميق وإضاءة كهرمانية مريحة صُممت لتكون محطتك المفضلة على الطريق السريع بالجيزة. استمتع بقهوتك المختصة، مشروباتك المثلجة، وجلسات الأصدقاء في بيئة هادئة.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onExploreMenu}
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-[#D49B4B] hover:bg-[#c28b3f] text-[#0D261C] font-bold text-base rounded-md transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer group"
              >
                <span>استكشف المنيو (75 صنفاً)</span>
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              </button>

              <button
                onClick={onViewLocation}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-transparent hover:bg-[#184E37]/50 text-[#F4EFE6] hover:text-[#D49B4B] font-semibold text-base border border-[#2B664B] rounded-md transition-all duration-200 cursor-pointer"
              >
                <MapPin className="w-5 h-5 text-[#D49B4B]" />
                <span>موقعنا على الطريق السريع</span>
              </button>
            </div>

            {/* Quick trust metrics (no fake badges, just real practical cafe facts) */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#1C4031] w-full text-right">
              <div>
                <div className="font-brand-latin text-2xl sm:text-3xl font-bold text-[#D49B4B]">75</div>
                <div className="text-xs text-[#A3B8AE] mt-0.5">صنفاً متنوعاً بالمنيو</div>
              </div>
              <div>
                <div className="font-brand-latin text-2xl sm:text-3xl font-bold text-[#F4EFE6]">2:00</div>
                <div className="text-xs text-[#A3B8AE] mt-0.5">صباحاً موعد الإغلاق</div>
              </div>
              <div>
                <div className="font-brand-latin text-2xl sm:text-3xl font-bold text-[#D49B4B]">100%</div>
                <div className="text-xs text-[#A3B8AE] mt-0.5">ضيافة وأجواء ودودة</div>
              </div>
            </div>

          </div>

          {/* Architectural Facade Card / Visual Accent */}
          <div className="lg:col-span-5">
            <div className="relative p-6 sm:p-8 rounded-lg bg-[#071610] border border-[#1C4031] shadow-2xl overflow-hidden">
              {/* Window grid pattern decoration reminiscent of cafe windows */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#184E37]/20 rounded-bl-full pointer-events-none" />

              <div className="flex items-center justify-between pb-5 border-b border-[#1C4031] mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#D49B4B]" />
                  <span className="font-brand-latin text-lg text-[#F4EFE6] font-bold">
                    {siteConfig.subTagline.en}
                  </span>
                </div>
                <span className="text-xs text-[#D49B4B] bg-[#184E37]/60 px-2.5 py-1 rounded">
                  البدرشين
                </span>
              </div>

              {/* Cafe Facade Elements Breakdown */}
              <div className="space-y-4">
                <div className="flex items-start gap-3.5 p-3 rounded bg-[#0D261C] border border-[#1C4031]/60">
                  <Coffee className="w-5 h-5 text-[#D49B4B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#F4EFE6]">قهوة تركي وإسبريسو ومشروبات فريش</h4>
                    <p className="text-xs text-[#A3B8AE] mt-0.5 leading-relaxed">
                      حبوب بن محمصة بعناية وعصائر فريش تُحضر لحظة الطلب لانتعاش مثالي.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded bg-[#0D261C] border border-[#1C4031]/60">
                  <Clock className="w-5 h-5 text-[#D49B4B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#F4EFE6]">مواعيد العمل اليومية</h4>
                    <p className="text-xs text-[#A3B8AE] mt-0.5">
                      {siteConfig.hours.ar} — نخدمك في الصباح المبكر وحتى ساعات السهر.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded bg-[#0D261C] border border-[#1C4031]/60">
                  <ShieldCheck className="w-5 h-5 text-[#D49B4B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#F4EFE6]">منيو رقمي سريع عبر QR Code</h4>
                    <p className="text-xs text-[#A3B8AE] mt-0.5 leading-relaxed">
                      تصفح كل المشروبات والأسعار واحفظ اختياراتك في قائمة طلبي بسهولة.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="mt-6 pt-5 border-t border-[#1C4031] flex items-center justify-between">
                <span className="text-xs text-[#A3B8AE]">للحجز أو الاستفسار السريع:</span>
                <a
                  href={siteConfig.socials.whatsapp.getLink('مرحباً Tree House Cafe، أود الاستفسار عن تفاصيل المكان')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#D49B4B] hover:text-[#e4b573] hover:underline"
                >
                  راسلنا واتساب مباشرة &larr;
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
