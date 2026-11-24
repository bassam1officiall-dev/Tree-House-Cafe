import React, { useState, useEffect } from 'react';
import { TreeHouseLogo } from './TreeHouseLogo';
import { siteConfig } from '../config/site';
import { useOrder } from '../context/OrderContext';
import { ShoppingBag, Search, Menu as MenuIcon, X, MapPin, Phone } from 'lucide-react';

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
          ? 'bg-[#0D261C]/95 backdrop-blur-md border-b border-[#1C4031] shadow-lg py-3'
          : 'bg-[#0D261C] border-b border-[#1C4031]/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Tree House Cafe الصفحة الرئيسية"
          >
            <div className="relative">
              <TreeHouseLogo size={42} className="transition-transform group-hover:scale-105" />
            </div>
            <div className="flex flex-col">
              <span className="font-brand-latin text-xl sm:text-2xl font-bold tracking-tight text-[#F4EFE6] leading-none group-hover:text-[#D49B4B] transition-colors">
                Tree House
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[11px] font-sans font-medium text-[#D49B4B] uppercase tracking-wider">
                  Cafe
                </span>
                <span className="text-[10px] text-[#A3B8AE] font-sans">
                  • البدرشين
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-[#D5E0DA] hover:text-[#D49B4B] font-medium text-sm transition-colors cursor-pointer"
            >
              القصة والخدمات
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-[#D5E0DA] hover:text-[#D49B4B] font-medium text-sm transition-colors cursor-pointer"
            >
              المنيو الكامل (75 صنفاً)
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="text-[#D5E0DA] hover:text-[#D49B4B] font-medium text-sm transition-colors cursor-pointer"
            >
              الموقع وساعات العمل
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
              className="p-2 text-[#D5E0DA] hover:text-[#D49B4B] hover:bg-[#184E37]/40 rounded-full transition-colors cursor-pointer"
              title="البحث في المنيو"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Order Drawer Trigger (قائمة طلبي) */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="relative flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#184E37] hover:bg-[#1f6346] text-[#F4EFE6] border border-[#2B664B] rounded-full text-xs sm:text-sm font-medium transition-all shadow-sm cursor-pointer hover:border-[#D49B4B]/60"
              aria-label={`قائمة طلبي: ${totalItemsCount} أصناف`}
            >
              <ShoppingBag className="w-4 h-4 text-[#D49B4B]" />
              <span className="hidden sm:inline">قائمة طلبي</span>
              {totalItemsCount > 0 && (
                <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold bg-[#D49B4B] text-[#0D261C] rounded-full">
                  {totalItemsCount}
                </span>
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

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-[#1C4031] mt-3 space-y-2">
            <button
              onClick={() => scrollToSection('services')}
              className="w-full text-right px-3 py-2 text-[#D5E0DA] hover:text-[#D49B4B] hover:bg-[#184E37]/30 rounded-md text-sm font-medium transition-colors"
            >
              القصة والخدمات
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="w-full text-right px-3 py-2 text-[#D5E0DA] hover:text-[#D49B4B] hover:bg-[#184E37]/30 rounded-md text-sm font-medium transition-colors"
            >
              المنيو الرقمي (75 صنفاً)
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="w-full text-right px-3 py-2 text-[#D5E0DA] hover:text-[#D49B4B] hover:bg-[#184E37]/30 rounded-md text-sm font-medium transition-colors"
            >
              الموقع وساعات العمل
            </button>
            <div className="pt-2 border-t border-[#1C4031]/60 flex items-center justify-between text-xs text-[#A3B8AE] px-3">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#D49B4B]" />
                البدرشين - الطريق السريع
              </span>
              <a
                href={siteConfig.socials.whatsapp.getLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#D49B4B] hover:underline"
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
