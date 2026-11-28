import React from 'react';
import { siteConfig } from '../config/site';
import {
  MapPin,
  Clock,
  ExternalLink,
  MessageCircle,
  Navigation,
  Share2,
} from 'lucide-react';

export const LocationAndHours: React.FC = () => {
  const [copiedLink, setCopiedLink] = React.useState(false);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      if (navigator.share) {
        navigator.share({
          title: 'Tree House Cafe | البدرشين',
          text: 'منيو وموقع Tree House Cafe على طريق البدرشين السريع',
          url: window.location.href,
        }).catch(() => {});
      } else {
        navigator.clipboard.writeText(window.location.href);
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2000);
      }
    }
  };

  return (
    <section id="location" className="py-16 sm:py-20 bg-[#0D261C] text-[#F4EFE6] border-t border-[#1C4031]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-10 text-right">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F4EFE6] mb-2">
            العنوان ومواعيد العمل
          </h2>
          <p className="text-sm sm:text-base text-[#D5E0DA]">
            موقعنا على طريق مصر أسيوط السريع في البدرشين، بجوار فيلا شريف عناني مباشرة.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          <div className="lg:col-span-7 bg-[#071610] border border-[#1C4031] rounded-lg p-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D49B4B] shrink-0 mt-1" />
                <div className="text-right">
                  <h3 className="text-base sm:text-lg font-bold text-[#F4EFE6]">
                    {siteConfig.address.fullAr}
                  </h3>
                  <p className="text-xs text-[#A3B8AE] mt-1.5 leading-relaxed">
                    علامة مميزة: على الطريق السريع في البدرشين، بجوار فيلا شريف عناني مباشرة.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-4 border-t border-[#1C4031]">
                <Clock className="w-5 h-5 text-[#D49B4B] shrink-0 mt-1" />
                <div className="text-right">
                  <h4 className="text-sm font-bold text-[#F4EFE6] mb-1">ساعات العمل</h4>
                  <div className="text-sm text-[#D49B4B]">
                    {siteConfig.hours.ar}
                  </div>
                  <div className="text-xs text-[#A3B8AE] mt-0.5">
                    {siteConfig.hours.noteAr}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#1C4031] mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={siteConfig.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#D49B4B] hover:bg-[#c28b3f] text-[#0D261C] font-bold text-sm rounded-lg transition-colors cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>فتح خرائط Google</span>
              </a>

              <a
                href={siteConfig.socials.whatsapp.getLink('مساء الخير، حابب أستفسر بخصوص الكافيه ومكانه')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#184E37] hover:bg-[#206346] text-[#F4EFE6] font-medium text-sm rounded-lg transition-colors border border-[#2B664B] cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#D49B4B]" />
                <span>واتساب</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-[#071610] border border-[#1C4031] rounded-lg p-5">
              <h3 className="text-sm font-bold text-[#F4EFE6] mb-3 pb-2 border-b border-[#1C4031]">
                صفحاتنا الرسمية
              </h3>

              <div className="space-y-2">
                <a
                  href={siteConfig.socials.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#0D261C] hover:bg-[#184E37] border border-[#1C4031] flex items-center justify-between transition-colors text-right"
                >
                  <span className="text-sm text-[#F4EFE6]">
                    فيسبوك | {siteConfig.socials.facebook.name}
                  </span>
                  <ExternalLink className="w-4 h-4 text-[#A3B8AE]" />
                </a>

                <a
                  href={siteConfig.socials.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#0D261C] hover:bg-[#184E37] border border-[#1C4031] flex items-center justify-between transition-colors text-right"
                >
                  <span className="text-sm text-[#F4EFE6]">
                    إنستجرام | {siteConfig.socials.instagram.handle}
                  </span>
                  <ExternalLink className="w-4 h-4 text-[#A3B8AE]" />
                </a>

                <a
                  href={siteConfig.socials.whatsapp.getLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#0D261C] hover:bg-[#184E37] border border-[#1C4031] flex items-center justify-between transition-colors text-right"
                >
                  <span className="text-sm text-[#F4EFE6]">
                    واتساب | {siteConfig.socials.whatsapp.display}
                  </span>
                  <ExternalLink className="w-4 h-4 text-[#A3B8AE]" />
                </a>
              </div>
            </div>

            <div className="bg-[#071610] border border-[#1C4031] rounded-lg p-4 flex items-center justify-between gap-3">
              <div className="text-right">
                <h4 className="text-xs sm:text-sm font-semibold text-[#F4EFE6]">مشاركة المنيو مع صحابك</h4>
                <p className="text-[11px] text-[#A3B8AE] mt-0.5">
                  انسخ الرابط وابعت المنيو لأي حد على الطاولة.
                </p>
              </div>

              <button
                onClick={handleShare}
                className="p-2.5 rounded-lg bg-[#184E37] hover:bg-[#206346] text-[#D49B4B] transition-colors cursor-pointer shrink-0"
                title="مشاركة رابط المنيو"
                aria-label="مشاركة رابط المنيو"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
            {copiedLink && (
              <div className="text-xs text-center text-[#D49B4B]">
                تم نسخ الرابط.
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
