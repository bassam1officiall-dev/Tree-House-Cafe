import React, { useState, useEffect } from 'react';
import { TreeHouseLogo } from './TreeHouseLogo';
import { useOrder } from '../context/OrderContext';
import { ShoppingBag, Search, Menu as MenuIcon, X } from 'lucide-react';

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
          ? 'bg-[#0D261C]/95 backdrop-blur-md border-b border-[#1C4031] py-2.5'
          : 'bg-[#0D261C] border-b border-[#1C4031] py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          <a
            href="#"
            className="flex items-center gap-2.5 focus:outline-none"
            aria-label="Tree House Cafe"
          >
            <TreeHouseLogo size={36} className="shrink-0" />
            <div className="flex flex-col text-right">
              <span className="font-brand-latin text-lg sm:text-xl font-bold tracking-tight text-[#F4EFE6] leading-none">
                Tree House
              </span>
              <span className="text-[10px] text-[#A3B8AE] mt-0.5">
                كافيه | البدرشين
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
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
              الموقع
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                scrollToSection('menu');
                if (onSearchClick) onSearchClick();
              }}
              aria-label="البحث"
              className="p-2 text-[#D5E0DA] hover:text-[#D49B4B] rounded-lg transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsDrawerOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#184E37] hover:bg-[#1f6346] text-[#F4EFE6] border border-[#2B664B] rounded-lg text-xs font-semibold transition-colors cursor-pointer"
              aria-label="طلبي"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#D49B4B]" />
              <span>طلبي</span>
              {totalItemsCount > 0 && (
                <span className="inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold bg-[#D49B4B] text-[#0D261C] rounded-full font-mono">
                  {totalItemsCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-[#D5E0DA] hover:text-[#D49B4B] rounded-lg transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'إغلاق' : 'القائمة'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pt-3 pb-2 border-t border-[#1C4031] mt-2.5 flex items-center justify-around text-xs">
            <button
              onClick={() => scrollToSection('menu')}
              className="px-3 py-1.5 text-[#D5E0DA] hover:text-[#D49B4B] font-medium"
            >
              المنيو
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="px-3 py-1.5 text-[#D5E0DA] hover:text-[#D49B4B] font-medium"
            >
              الموقع
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
