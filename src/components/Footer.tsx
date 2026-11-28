import React from 'react';
import { TreeHouseLogo } from './TreeHouseLogo';
import { siteConfig } from '../config/site';
import { ArrowUp, MapPin, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071610] text-[#D5E0DA] border-t border-[#1C4031] pt-12 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#1C4031]">
          
          <div className="md:col-span-5 text-right">
            <div className="flex items-center gap-3 mb-3">
              <TreeHouseLogo size={38} />
              <div>
                <span className="font-brand-latin text-xl font-bold text-[#F4EFE6] block">
                  Tree House
                </span>
                <span className="text-xs text-[#D49B4B]">
                  كافيه | البدرشين
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A3B8AE] leading-relaxed max-w-sm">
              {siteConfig.description.ar}
            </p>
          </div>

          <div className="md:col-span-3 text-right">
            <h4 className="text-xs font-bold text-[#F4EFE6] uppercase tracking-wider mb-3">
              أقسام سريعة
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#services" className="hover:text-[#D49B4B] transition-colors">
                  عن المكان
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#D49B4B] transition-colors">
                  المنيو
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
                  تواصل عبر واتساب
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 text-right">
            <h4 className="text-xs font-bold text-[#F4EFE6] uppercase tracking-wider mb-3">
              العنوان والمواعيد
            </h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D49B4B] shrink-0 mt-0.5" />
                <span className="text-[#A3B8AE] leading-relaxed">
                  {siteConfig.address.fullAr}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#D49B4B] shrink-0 mt-0.5" />
                <span className="text-[#A3B8AE]">
                  {siteConfig.hours.ar}
                </span>
              </div>
              <div className="pt-2 flex items-center gap-2">
                <a
                  href={siteConfig.socials.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 bg-[#0D261C] hover:bg-[#184E37] text-xs text-[#D49B4B] rounded border border-[#1C4031] transition-colors"
                >
                  Facebook
                </a>
                <a
                  href={siteConfig.socials.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 bg-[#0D261C] hover:bg-[#184E37] text-xs text-[#D49B4B] rounded border border-[#1C4031] transition-colors"
                >
                  Instagram
                </a>
                <a
                  href={siteConfig.socials.whatsapp.getLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 bg-[#0D261C] hover:bg-[#184E37] text-xs text-[#D49B4B] rounded border border-[#1C4031] transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#7A8C83]">
          <div>
            جميع الحقوق محفوظة © {new Date().getFullYear()} Tree House Cafe, البدرشين
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0D261C] hover:bg-[#184E37] text-[#D49B4B] border border-[#1C4031] transition-colors cursor-pointer"
            aria-label="العودة لأعلى الصفحة"
          >
            <span>للأعلى</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
