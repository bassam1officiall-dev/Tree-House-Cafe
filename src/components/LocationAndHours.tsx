import React from 'react';
import { siteConfig } from '../config/site';
import {
  MapPin,
  Clock,
  ExternalLink,
  MessageCircle,
  Navigation,
  Compass,
  QrCode,
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
    <section id="location" className="py-20 sm:py-28 bg-[#0D261C] text-[#F4EFE6] relative overflow-hidden border-t border-[#1C4031]">
      {/* Background architectural pattern */}
      <div className="absolute inset-0 bg-cladding-pattern opacity-40 pointer-events-none" />
      
      {/* Ambient warm lamp glow */}
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#D49B4B]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-14 text-right">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#D49B4B] tracking-wider uppercase mb-3">
            <span className="w-6 h-[2px] bg-[#D49B4B]" />
            <span>الموقع وساعات العمل والتواصل</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4EFE6] leading-tight mb-4">
            نرحب بكم يومياً على طريق البدرشين السريع
          </h2>
          <p className="text-base text-[#D5E0DA] leading-relaxed">
            موقعنا المباشر على الطريق السريع يجعل الوصول إلينا مريحاً سواء لسكان البدرشين والمناطق المجاورة أو للمسافرين الراغبين في استراحة مميزة.
          </p>
        </div>

        {/* Content Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Location Card */}
          <div className="lg:col-span-7 bg-[#071610] border border-[#1C4031] rounded-lg p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-5 border-b border-[#1C4031] mb-6">
                <span className="flex items-center gap-2 text-sm font-bold text-[#D49B4B]">
                  <Compass className="w-4 h-4" />
                  العنوان الدقيق
                </span>
                <span className="text-xs text-[#A3B8AE] bg-[#184E37]/50 px-2.5 py-1 rounded">
                  الجيزة — مصر
                </span>
              </div>

              {/* Exact Address as requested */}
              <div className="flex items-start gap-3.5 mb-6">
                <MapPin className="w-6 h-6 text-[#D49B4B] shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F4EFE6] leading-snug">
                    {siteConfig.address.fullAr}
                  </h3>
                  <div className="font-brand-latin text-xs text-[#A3B8AE] mt-1">
                    {siteConfig.address.fullEn}
                  </div>
                  <p className="text-xs text-[#D5E0DA] mt-3 leading-relaxed bg-[#0D261C] p-3 rounded border border-[#1C4031]">
                    علامة مميزة: على الطريق السريع بالبدرشين مباشرة، ملاصق لفيلا شريف عناني، بواجهة صاج خضراء بارزة وحروف لافتة مضيئة لا تخطئها العين.
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3.5 pt-6 border-t border-[#1C4031]">
                <Clock className="w-5 h-5 text-[#D49B4B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#F4EFE6] mb-1">ساعات الاستقبال</h4>
                  <div className="text-base font-bold text-[#D49B4B] font-mono">
                    {siteConfig.hours.ar}
                  </div>
                  <div className="text-xs text-[#A3B8AE] mt-1">
                    {siteConfig.hours.noteAr}
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Map and WhatsApp Actions */}
            <div className="pt-8 border-t border-[#1C4031] mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={siteConfig.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D49B4B] hover:bg-[#c28b3f] text-[#0D261C] font-bold text-sm rounded-md transition-all shadow-md cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>فتح خرائط جوجل (Google Maps)</span>
              </a>

              <a
                href={siteConfig.socials.whatsapp.getLink('مرحباً Tree House Cafe، أود الاستفسار عن تفاصيل الحجز والموقع')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#184E37] hover:bg-[#206346] text-[#F4EFE6] font-semibold text-sm rounded-md transition-colors border border-[#2B664B] cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#D49B4B]" />
                <span>تواصل واتساب المباشر</span>
              </a>
            </div>
          </div>

          {/* Social Media & QR Code Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Social Channels Card */}
            <div className="bg-[#071610] border border-[#1C4031] rounded-lg p-6 sm:p-7">
              <h3 className="text-lg font-bold text-[#F4EFE6] mb-4 pb-3 border-b border-[#1C4031] flex items-center justify-between">
                <span>قنوات التواصل الرسمية</span>
                <span className="text-xs text-[#D49B4B] font-mono">Social Hub</span>
              </h3>

              <div className="space-y-3">
                {/* Facebook */}
                <a
                  href={siteConfig.socials.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded bg-[#0D261C] hover:bg-[#184E37]/40 border border-[#1C4031] flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded bg-[#184E37] flex items-center justify-center text-[#D49B4B] font-bold text-sm font-brand-latin">
                      f
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#F4EFE6] group-hover:text-[#D49B4B] transition-colors">
                        فيسبوك — {siteConfig.socials.facebook.name}
                      </div>
                      <div className="text-xs text-[#A3B8AE]">
                        تابع آخر العروض وجلسات الكافيه
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#A3B8AE] group-hover:text-[#D49B4B] transition-colors" />
                </a>

                {/* Instagram */}
                <a
                  href={siteConfig.socials.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded bg-[#0D261C] hover:bg-[#184E37]/40 border border-[#1C4031] flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded bg-[#184E37] flex items-center justify-center text-[#D49B4B] font-bold text-sm font-brand-latin">
                      IG
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#F4EFE6] group-hover:text-[#D49B4B] transition-colors">
                        إنستجرام — {siteConfig.socials.instagram.handle}
                      </div>
                      <div className="text-xs text-[#A3B8AE]">
                        صور المشروبات وأجواء المكان الدافئة
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#A3B8AE] group-hover:text-[#D49B4B] transition-colors" />
                </a>

                {/* WhatsApp Direct */}
                <a
                  href={siteConfig.socials.whatsapp.getLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded bg-[#0D261C] hover:bg-[#184E37]/40 border border-[#1C4031] flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded bg-[#184E37] flex items-center justify-center text-[#D49B4B] font-bold text-sm font-brand-latin">
                      WA
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#F4EFE6] group-hover:text-[#D49B4B] transition-colors">
                        واتساب الكافيه
                      </div>
                      <div className="text-xs text-[#A3B8AE] font-mono">
                        {siteConfig.socials.whatsapp.display}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#A3B8AE] group-hover:text-[#D49B4B] transition-colors" />
                </a>
              </div>
            </div>

            {/* QR Code / Share on Table Card */}
            <div className="bg-[#071610] border border-[#1C4031] rounded-lg p-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded bg-[#184E37] flex items-center justify-center text-[#D49B4B] shrink-0">
                  <QrCode className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#F4EFE6]">مشاركة المنيو على الطاولة</h4>
                  <p className="text-xs text-[#A3B8AE] mt-0.5">
                    انسخ الرابط وشاركه مع أصدقائك الجالسين معك بسهولة.
                  </p>
                </div>
              </div>

              <button
                onClick={handleShare}
                className="shrink-0 p-2.5 rounded bg-[#184E37] hover:bg-[#206346] text-[#D49B4B] transition-colors cursor-pointer"
                title="مشاركة رابط الموقع"
                aria-label="مشاركة رابط الموقع"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
            {copiedLink && (
              <div className="text-xs text-center text-[#D49B4B] font-medium animate-fade-in">
                تم نسخ رابط المنيو للحافظة بنجاح!
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
