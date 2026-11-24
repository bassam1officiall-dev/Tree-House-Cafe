import React from 'react';
import { siteConfig } from '../config/site';
import { Users, BookOpen, Car, Moon, Sparkles } from 'lucide-react';

export const VibesServices: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'friends':
        return <Users className="w-6 h-6 text-[#184E37]" />;
      case 'work':
        return <BookOpen className="w-6 h-6 text-[#184E37]" />;
      case 'takeaway':
        return <Car className="w-6 h-6 text-[#184E37]" />;
      case 'night':
        return <Moon className="w-6 h-6 text-[#184E37]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#184E37]" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F4EFE6] text-[#1A1714] border-b border-[#E2DACD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-right">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#855414] tracking-wider uppercase mb-3">
            <span className="w-6 h-[2px] bg-[#D49B4B]" />
            <span>فلسفة وتجربة المكان</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D261C] leading-tight mb-4">
            مساحة مصممة لتستريح فيها، لا مجرد مقهى عابر.
          </h2>
          <p className="text-base sm:text-lg text-[#524B45] leading-relaxed">
            استوحينا تفاصيل <span className="font-brand-latin font-bold text-[#0D261C]">Tree House Cafe</span> من روح البيوت الريفية المريحة مع لمسة معمارية عصرية بالصاج الأخضر الداكن وشبابيك تطل على حركة الطريق السريع. إليك الركائز الأربع التي بنينا عليها تجربتك:
          </p>
        </div>

        {/* 4 Pillars Grid (Architectural, refined, zero glassmorphism) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {siteConfig.pillars.map((pillar, index) => (
            <div
              key={pillar.id}
              className="relative p-7 bg-[#FCFAF7] border border-[#E2DACD] rounded-lg transition-all duration-300 hover:border-[#184E37] hover:shadow-warm-md flex flex-col justify-between group"
            >
              {/* Top Accent line & index */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-md bg-[#F4EFE6] border border-[#E2DACD] flex items-center justify-center group-hover:bg-[#184E37]/10 group-hover:border-[#184E37]/30 transition-colors">
                    {getIcon(pillar.id)}
                  </div>
                  <span className="font-brand-latin text-2xl font-bold text-[#855414]/40 group-hover:text-[#855414] transition-colors">
                    0{index + 1}
                  </span>
                </div>

                <div className="text-xs font-bold text-[#855414] mb-1 font-sans">
                  {pillar.highlight}
                </div>

                <h3 className="text-xl font-bold text-[#0D261C] mb-2">
                  {pillar.titleAr}
                </h3>

                <div className="font-brand-latin text-xs font-semibold text-[#6E665E] mb-3">
                  {pillar.titleEn}
                </div>

                <p className="text-sm text-[#524B45] leading-relaxed">
                  {pillar.descriptionAr}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-4 border-t border-[#EAE3D5] flex items-center justify-between text-xs text-[#6E665E]">
                <span>خدمة مريحة ومرحبة</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#184E37]" />
              </div>
            </div>
          ))}
        </div>

        {/* Cafe Facade Architectural Note Band */}
        <div className="mt-14 p-6 sm:p-8 rounded-lg bg-[#0D261C] text-[#F4EFE6] border border-[#1C4031] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl text-right">
            <h4 className="text-lg font-bold text-[#D49B4B] mb-1">
              موقع مريح على الطريق السريع في قلب البدرشين
            </h4>
            <p className="text-sm text-[#D5E0DA] leading-relaxed">
              سواء كنت في رحلة عمل، مسافراً، أو قادماً لقضاء سهرة هادئة مع أصدقائك، وفرنا لك مكاناً يسهل الوصول إليه وتجربة تحترم وقتك ومزاجك.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <a
              href="#location"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#184E37] hover:bg-[#206346] text-[#F4EFE6] font-semibold text-sm transition-colors border border-[#2B664B]"
            >
              عرض تفاصيل العنوان &larr;
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
