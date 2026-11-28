import React from 'react';
import { TreeHouseLogo } from './TreeHouseLogo';
import { siteConfig } from '../config/site';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#071610] text-[#A3B8AE] border-t border-[#1C4031] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-right">
          
          <div className="flex items-center gap-2.5">
            <TreeHouseLogo size={28} />
            <span className="font-brand-latin text-sm font-bold text-[#F4EFE6]">
              Tree House Cafe
            </span>
            <span className="text-[#6E665E]">•</span>
            <span>{siteConfig.address.fullAr}</span>
            <span className="text-[#6E665E]">•</span>
            <span>{siteConfig.hours.ar}</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={siteConfig.socials.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D49B4B] transition-colors"
                aria-label="فيسبوك"
              >
                Facebook
              </a>
              <span>•</span>
              <a
                href={siteConfig.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D49B4B] transition-colors"
                aria-label="إنستجرام"
              >
                Instagram
              </a>
              <span>•</span>
              <a
                href={siteConfig.socials.whatsapp.getLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D49B4B] transition-colors"
                aria-label="واتساب"
              >
                WhatsApp
              </a>
            </div>

            <span className="text-[#6E665E] hidden sm:inline">|</span>

            <span>
              جميع الحقوق محفوظة © {new Date().getFullYear()} Tree House Cafe
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
};
