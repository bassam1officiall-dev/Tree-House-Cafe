import React from 'react';
import { siteConfig } from '../config/site';
import { MapPin, Clock, MessageCircle, Navigation, Phone } from 'lucide-react';

export const LocationAndHours: React.FC = () => {
  return (
    <section id="location" className="py-12 sm:py-16 bg-[#0D261C] text-[#F4EFE6] border-t border-[#1C4031]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-xl sm:text-2xl font-bold text-[#F4EFE6] mb-6 text-right">
          الموقع والمواعيد
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          <div className="lg:col-span-5 bg-[#071610] border border-[#1C4031] rounded-lg p-5 text-right space-y-4">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-5 h-5 text-[#D49B4B] shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-[#F4EFE6] leading-relaxed">
                {siteConfig.address.fullAr}
              </div>
            </div>

            <div className="flex items-center gap-2.5 pt-3 border-t border-[#1C4031]">
              <Clock className="w-5 h-5 text-[#D49B4B] shrink-0" />
              <div className="text-xs sm:text-sm text-[#D49B4B]">
                {siteConfig.hours.ar}
              </div>
            </div>

            <div className="flex items-center gap-2.5 pt-3 border-t border-[#1C4031]">
              <Phone className="w-5 h-5 text-[#D49B4B] shrink-0" />
              <a
                href={siteConfig.socials.whatsapp.getLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-[#F4EFE6] hover:text-[#D49B4B] font-mono transition-colors"
                dir="ltr"
              >
                {siteConfig.socials.whatsapp.display}
              </a>
            </div>

            <div className="pt-3 border-t border-[#1C4031] flex items-center gap-2">
              <a
                href={siteConfig.socials.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-[#0D261C] hover:bg-[#184E37] text-xs text-[#D49B4B] rounded-lg border border-[#1C4031] transition-colors"
                aria-label="فيسبوك"
              >
                Facebook
              </a>
              <a
                href={siteConfig.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-[#0D261C] hover:bg-[#184E37] text-xs text-[#D49B4B] rounded-lg border border-[#1C4031] transition-colors"
                aria-label="إنستجرام"
              >
                Instagram
              </a>
              <a
                href={siteConfig.socials.whatsapp.getLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-[#0D261C] hover:bg-[#184E37] text-xs text-[#D49B4B] rounded-lg border border-[#1C4031] transition-colors"
                aria-label="واتساب"
              >
                WhatsApp
              </a>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <a
                href={siteConfig.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#D49B4B] hover:bg-[#c28b3f] text-[#0D261C] font-bold text-xs rounded-lg transition-colors cursor-pointer"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>خرائط Google</span>
              </a>

              <a
                href={siteConfig.socials.whatsapp.getLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#184E37] hover:bg-[#206346] text-[#F4EFE6] text-xs rounded-lg transition-colors border border-[#2B664B] cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#D49B4B]" />
                <span>واتساب</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-lg overflow-hidden border border-[#1C4031] bg-[#071610] h-56 sm:h-72">
            <iframe
              title="موقع Tree House Cafe"
              src="https://maps.google.com/maps?q=Tree+House+Cafe+البدرشين&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
