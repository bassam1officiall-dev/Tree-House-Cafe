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
      setIsScrolled(window.scrollY > 20);
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
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
        isScrolled
          ? 'bg-[#0D261C]/95 backdrop-blur-md border-b border-[#1C4031] py-3'
          : 'bg-[#0D261C] border-b border-[#1C4031] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          <a
            href="#"
            className="flex items-center gap-3 focus:outline-none"
            aria-label="Tree House Cafe الصفحة الرئيسية"
          >
            <TreeHouseLogo size={40} className="shrink-0" />
            <div className="flex flex-col text-right">
              <span className="font-brand-latin text-xl font-bold tracking-tight text-[#F4EFE6] leading-none">
                Tree House
              </span>
              <span className="text-[11px] text-[#A3B8AE] mt-1">
                كافيه | البدرشين
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-[#D5E0DA] hover:text-[#D49B4B] font-medium text-sm transition-colors cursor-pointer"
            >
              عن المكان
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-[#D5E0DA] hover:text-[#D49B4B] font-medium text-sm transition-colors cursor-pointer"
            >
              المنيو
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="text-[#D5E0DA] hover:text-[#D49B4B] font-medium text-sm transition-colors cursor-pointer"
            >
              الموقع وساعات العمل
            </button>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => {
                scrollToSection('menu');
                if (onSearchClick) onSearchClick();
              }}
              aria-label="البحث في المنيو"
              className="p-2 text-[#D5E0DA] hover:text-[#D49B4B] rounded-lg transition-colors cursor-pointer"
              title="البحث في المنيو"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsDrawerOpen(true)}
              className="relative flex items-center gap-2 px-3.5 py-2 bg-[#184E37] hover:bg-[#1f6346] text-[#F4EFE6] border border-[#2B664B] rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              aria-label={`قائمة طلبي: ${totalItemsCount} أصناف`}
            >
              <ShoppingBag className="w-4 h-4 text-[#D49B4B]" />
              <span className="hidden sm:inline">قائمة طلبي</span>
              {totalItemsCount > 0 && (
                <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold bg-[#D49B4B] text-[#0D261C] rounded-full font-mono">
                  {totalItemsCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#D5E0DA] hover:text-[#D49B4B] rounded-lg transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-[#1C4031] mt-3 space-y-2">
            <button
              onClick={() => scrollToSection('services')}
              className="w-full text-right px-3 py-2 text-[#D5E0DA] hover:text-[#D49B4B] rounded-lg text-sm font-medium transition-colors"
            >
              عن المكان
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="w-full text-right px-3 py-2 text-[#D5E0DA] hover:text-[#D49B4B] rounded-lg text-sm font-medium transition-colors"
            >
              المنيو
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="w-full text-right px-3 py-2 text-[#D5E0DA] hover:text-[#D49B4B] rounded-lg text-sm font-medium transition-colors"
            >
              الموقع وساعات العمل
            </button>
            <div className="pt-2 border-t border-[#1C4031] flex items-center justify-between text-xs text-[#A3B8AE] px-3">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#D49B4B]" />
                البدرشين، الطريق السريع
              </span>
              <a
                href={siteConfig.socials.whatsapp.getLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#D49B4B] font-medium hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                واتساب
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
