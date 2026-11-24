import React from 'react';
import { TreeHouseLogo } from './TreeHouseLogo';
import { siteConfig } from '../config/site';
import { ArrowUp, MapPin, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071610] text-[#D5E0DA] border-t border-[#1C4031] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1C4031]">
          
          {/* Brand & Slogans Column */}
          <div className="md:col-span-5 text-right">
            <div className="flex items-center gap-3 mb-4">
              <TreeHouseLogo size={46} />
              <div>
                <span className="font-brand-latin text-2xl font-bold text-[#F4EFE6] tracking-tight block">
                  Tree House
                </span>
                <span className="text-xs font-sans text-[#D49B4B] tracking-wider uppercase font-semibold">
                  Cafe • البدرشين
                </span>
              </div>
            </div>

            <p className="text-sm text-[#A3B8AE] leading-relaxed max-w-sm mb-4">
              {siteConfig.description.ar}
            </p>

            <div className="font-brand-latin text-sm text-[#D49B4B] font-medium italic">
              "{siteConfig.tagline.en}" — {siteConfig.subTagline.en}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 text-right">
            <h4 className="text-sm font-bold text-[#F4EFE6] uppercase tracking-wider mb-4 pb-1 border-b border-[#1C4031]">
              روابط سريعة
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#services" className="hover:text-[#D49B4B] transition-colors">
                  روح المكان والخدمات
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#D49B4B] transition-colors">
                  المنيو الرقمي (75 صنفاً)
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#D49B4B] transition-colors">
                  الموقع وساعات العمل
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.whatsapp.getLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D49B4B] hover:underline"
                >
                  حجز طاولة أو استفسار سريع
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Hours Quick Column */}
          <div className="md:col-span-4 text-right">
            <h4 className="text-sm font-bold text-[#F4EFE6] uppercase tracking-wider mb-4 pb-1 border-b border-[#1C4031]">
              بيانات الكافيه
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D49B4B] shrink-0 mt-1" />
                <span className="text-[#A3B8AE] leading-relaxed">
                  {siteConfig.address.fullAr}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D49B4B] shrink-0 mt-1" />
                <span className="text-[#A3B8AE]">
                  {siteConfig.hours.ar}
                </span>
              </div>
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={siteConfig.socials.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-[#0D261C] hover:bg-[#184E37] text-xs text-[#D49B4B] rounded border border-[#1C4031] transition-colors"
                >
                  Facebook
                </a>
                <a
                  href={siteConfig.socials.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-[#0D261C] hover:bg-[#184E37] text-xs text-[#D49B4B] rounded border border-[#1C4031] transition-colors"
                >
                  Instagram
                </a>
                <a
                  href={siteConfig.socials.whatsapp.getLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-[#0D261C] hover:bg-[#184E37] text-xs text-[#D49B4B] rounded border border-[#1C4031] transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A8C83]">
          <div>
            جميع الحقوق محفوظة © {new Date().getFullYear()} لـ{' '}
            <span className="text-[#F4EFE6] font-semibold">Tree House Cafe</span> — البدرشين، الجيزة.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#0D261C] hover:bg-[#184E37] text-[#D49B4B] border border-[#1C4031] transition-colors cursor-pointer"
            aria-label="العودة لأعلى الصفحة"
          >
            <span>العودة للأعلى</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
