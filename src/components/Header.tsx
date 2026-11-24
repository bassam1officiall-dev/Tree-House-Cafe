import React, { useState, useEffect } from 'react';
import { TreeHouseLogo } from './TreeHouseLogo';
import { siteConfig } from '../config/site';
import { useOrder } from '../context/OrderContext';
import { ShoppingBag, Search, Menu as MenuIcon, X, MapPin, Phone, Sparkles } from 'lucide-react';

interface HeaderProps {
  onSearchClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearchClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItemsCount, setIsDrawerOpen } = useOrder();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0D261C]/95 backdrop-blur-md border-b border-[#1C4031] shadow-2xl py-3'
          : 'bg-[#0D261C] border-b border-[#1C4031]/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name with 3D Illumination */}
          <a
            href="#"
            className="flex items-center gap-3.5 group focus:outline-none"
            aria-label="Tree House Cafe الصفحة الرئيسية"
          >
            <div className="relative">
              <TreeHouseLogo size={44} className="transition-transform duration-300 group-hover:scale-108 group-hover:rotate-1" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#D49B4B] animate-ping opacity-60 pointer-events-none" />
            </div>

            <div className="flex flex-col text-right">
              <span className="font-brand-latin text-xl sm:text-2xl font-bold tracking-tight text-[#FFF8EB] leading-none group-hover:text-[#D49B4B] transition-colors sign-3d-subtle">
                Tree House
              </span>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[11px] font-sans font-extrabold text-[#D49B4B] uppercase tracking-wider">
                  Cafe
                </span>
                <span className="text-[10px] text-[#A3B8AE] font-sans">
                  • البدرشين
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-400 bg-emerald-950/60 px-1.5 py-0.2 rounded border border-emerald-800/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  مفتوح
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-[#D5E0DA] hover:text-[#D49B4B] font-medium text-sm transition-colors cursor-pointer relative py-1 group"
            >
              <span>القصة والخدمات</span>
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#D49B4B] transition-all duration-200 group-hover:w-full" />
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-[#D5E0DA] hover:text-[#D49B4B] font-medium text-sm transition-colors cursor-pointer relative py-1 group flex items-center gap-1"
            >
              <span>المنيو الكامل</span>
              <span className="text-[11px] bg-[#184E37] text-[#D49B4B] px-1.5 py-0.2 rounded font-mono font-bold">
                75
              </span>
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#D49B4B] transition-all duration-200 group-hover:w-full" />
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="text-[#D5E0DA] hover:text-[#D49B4B] font-medium text-sm transition-colors cursor-pointer relative py-1 group"
            >
              <span>الموقع وساعات العمل</span>
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#D49B4B] transition-all duration-200 group-hover:w-full" />
            </button>
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Search Button */}
            <button
              onClick={() => {
                scrollToSection('menu');
                if (onSearchClick) onSearchClick();
              }}
              aria-label="البحث في المنيو"
              className="p-2.5 text-[#D5E0DA] hover:text-[#D49B4B] hover:bg-[#184E37]/50 rounded-full transition-all duration-200 cursor-pointer btn-press"
              title="البحث في المنيو"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Order Drawer Trigger with subtle bounce and badge */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="relative flex items-center gap-2 px-3.5 py-2 sm:px-4.5 sm:py-2.5 bg-[#184E37] hover:bg-[#1f6346] text-[#F4EFE6] border border-[#2B664B] hover:border-[#D49B4B] rounded-full text-xs sm:text-sm font-bold transition-all duration-200 shadow-sm hover:shadow-glow-amber cursor-pointer btn-press"
              aria-label={`قائمة طلبي: ${totalItemsCount} أصناف`}
            >
              <ShoppingBag className="w-4 h-4 text-[#D49B4B]" />
              <span className="hidden sm:inline">قائمة طلبي</span>
              {totalItemsCount > 0 ? (
                <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-black bg-[#D49B4B] text-[#0D261C] rounded-full animate-scale-pop">
                  {totalItemsCount}
                </span>
              ) : (
                <span className="w-1.5 h-1.5 rounded-full bg-[#D49B4B]/60 hidden sm:inline" />
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#D5E0DA] hover:text-[#D49B4B] rounded-md transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with slide-down feel */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-[#1C4031] mt-3 space-y-2 animate-fade-in">
            <button
              onClick={() => scrollToSection('services')}
              className="w-full text-right px-3.5 py-2.5 text-[#D5E0DA] hover:text-[#D49B4B] hover:bg-[#184E37]/30 rounded-md text-sm font-semibold transition-colors flex items-center justify-between"
            >
              <span>القصة والخدمات</span>
              <Sparkles className="w-3.5 h-3.5 text-[#D49B4B]" />
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="w-full text-right px-3.5 py-2.5 text-[#D5E0DA] hover:text-[#D49B4B] hover:bg-[#184E37]/30 rounded-md text-sm font-semibold transition-colors flex items-center justify-between"
            >
              <span>المنيو الرقمي</span>
              <span className="text-xs bg-[#184E37] text-[#D49B4B] px-2 py-0.5 rounded font-mono">
                75 صنفاً
              </span>
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="w-full text-right px-3.5 py-2.5 text-[#D5E0DA] hover:text-[#D49B4B] hover:bg-[#184E37]/30 rounded-md text-sm font-semibold transition-colors flex items-center justify-between"
            >
              <span>الموقع وساعات العمل</span>
              <MapPin className="w-3.5 h-3.5 text-[#D49B4B]" />
            </button>
            <div className="pt-2.5 border-t border-[#1C4031]/60 flex items-center justify-between text-xs text-[#A3B8AE] px-3.5">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#D49B4B]" />
                البدرشين - الطريق السريع
              </span>
              <a
                href={siteConfig.socials.whatsapp.getLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#D49B4B] font-bold hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                تواصل واتساب
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
