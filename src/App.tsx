import React, { useRef } from 'react';
import { OrderProvider, useOrder } from './context/OrderContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { VibesServices } from './components/VibesServices';
import { InteractiveMenu } from './components/InteractiveMenu';
import { LocationAndHours } from './components/LocationAndHours';
import { Footer } from './components/Footer';
import { OrderSummaryDrawer } from './components/OrderSummaryDrawer';
import { ShoppingBag } from 'lucide-react';

const MainContent: React.FC = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { totalItemsCount, setIsDrawerOpen } = useOrder();

  const handleSearchFocus = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const handleExploreMenu = () => {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewLocation = () => {
    const el = document.getElementById('location');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4EFE6] text-[#1A1714] font-sans selection:bg-[#D49B4B] selection:text-[#0D261C]">
      {/* Sticky Header */}
      <Header onSearchClick={handleSearchFocus} />

      {/* Hero Section with 3D Sign & Real Facade Showcase */}
      <main className="flex-1">
        <Hero
          onExploreMenu={handleExploreMenu}
          onViewLocation={handleViewLocation}
        />

        {/* Vibes & Pillars Section */}
        <VibesServices />

        {/* 75-Item Interactive Animated Menu */}
        <InteractiveMenu searchInputRef={searchInputRef} />

        {/* Location, Hours & Social Media */}
        <LocationAndHours />
      </main>

      {/* Footer */}
      <Footer />

      {/* Order Summary Drawer */}
      <OrderSummaryDrawer />

      {/* Floating Order Button (Mobile and Tablet Quick Access with Aura Glow) */}
      {totalItemsCount > 0 && (
        <div className="fixed bottom-6 left-6 z-40 sm:hidden animate-bounce-subtle">
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="relative flex items-center gap-2.5 px-4.5 py-3 bg-[#0D261C] hover:bg-[#184E37] text-[#F4EFE6] rounded-full shadow-2xl border-2 border-[#D49B4B] cursor-pointer btn-press group"
            aria-label={`عرض قائمة طلبي (${totalItemsCount} أصناف)`}
          >
            {/* Glowing aura */}
            <span className="absolute -inset-1 rounded-full bg-[#D49B4B]/30 blur-md group-hover:bg-[#D49B4B]/50 transition-colors pointer-events-none" />
            <ShoppingBag className="w-5 h-5 text-[#D49B4B] relative" />
            <span className="text-xs font-bold relative">طلبي</span>
            <span className="relative bg-[#D49B4B] text-[#0D261C] text-xs font-black w-5 h-5 rounded-full flex items-center justify-center font-mono">
              {totalItemsCount}
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export function App() {
  return (
    <OrderProvider>
      <MainContent />
    </OrderProvider>
  );
}

export default App;
