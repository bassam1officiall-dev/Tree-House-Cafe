import React, { useState, useMemo, useRef } from 'react';
import { CATEGORIES, MENU_ITEMS } from '../data/menu';
import { CategoryId, MenuItem } from '../types';
import { useOrder } from '../context/OrderContext';
import {
  Search,
  Flame,
  Snowflake,
  Plus,
  Check,
  X,
  Coffee,
  ShoppingBag,
  SlidersHorizontal,
} from 'lucide-react';

interface InteractiveMenuProps {
  searchInputRef?: React.RefObject<HTMLInputElement>;
}

export const InteractiveMenu: React.FC<InteractiveMenuProps> = ({ searchInputRef }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryId | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [temperatureFilter, setTemperatureFilter] = useState<'all' | 'hot' | 'cold'>('all');
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});

  const { addItem, totalItemsCount, setIsDrawerOpen } = useOrder();
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }

      if (temperatureFilter === 'hot' && item.temperature !== 'hot') {
        return false;
      }
      if (temperatureFilter === 'cold' && item.temperature !== 'cold') {
        return false;
      }

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesNameAr = item.nameAr.toLowerCase().includes(query);
        const matchesNameEn = item.nameEn.toLowerCase().includes(query);
        const matchesDescAr = item.descriptionAr.toLowerCase().includes(query);
        const matchesDescEn = item.descriptionEn.toLowerCase().includes(query);
        const matchesTags = item.tags?.some((t) => t.toLowerCase().includes(query)) || false;

        if (!matchesNameAr && !matchesNameEn && !matchesDescAr && !matchesDescEn && !matchesTags) {
          return false;
        }
      }

      return true;
    });
  }, [activeCategory, searchQuery, temperatureFilter]);

  const handleAddItem = (item: MenuItem) => {
    addItem(item);
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  const clearFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
    setTemperatureFilter('all');
  };

  return (
    <section id="menu" className="py-10 sm:py-14 bg-[#F4EFE6] text-[#1A1714]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-[#E2DACD]">
          <div className="text-right">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0D261C]">
              المنيو
            </h2>
            <p className="text-xs sm:text-sm text-[#524B45] mt-1">
              اختر طلبك واجمعه في القائمة.
            </p>
          </div>

          <button
            onClick={() => setIsDrawerOpen(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#0D261C] hover:bg-[#184E37] text-[#F4EFE6] rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer border border-[#1C4031]"
          >
            <ShoppingBag className="w-4 h-4 text-[#D49B4B]" />
            <span>طلبي</span>
            {totalItemsCount > 0 && (
              <span className="bg-[#D49B4B] text-[#0D261C] text-xs font-bold px-1.5 py-0.2 rounded-full font-mono">
                {totalItemsCount}
              </span>
            )}
          </button>
        </div>

        <div className="bg-[#FCFAF7] border border-[#E2DACD] rounded-lg p-3 sm:p-4 mb-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            
            <div className="md:col-span-8 relative">
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث عن مشروب أو حلوى..."
                className="w-full pl-8 pr-9 py-2 bg-white border border-[#E2DACD] rounded-lg text-xs sm:text-sm text-[#1A1714] placeholder-[#8C847A] focus:outline-none focus:border-[#184E37] transition-colors"
              />
              <Search className="w-4 h-4 text-[#855414] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#8C847A] hover:text-[#1A1714] p-1"
                  aria-label="مسح البحث"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="md:col-span-4 flex items-center justify-start md:justify-end gap-1.5">
              <span className="text-xs text-[#6E665E] hidden sm:inline-flex items-center gap-1">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                النوع:
              </span>
              <div className="inline-flex rounded-lg bg-[#EAE3D5] p-0.5">
                <button
                  onClick={() => setTemperatureFilter('all')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                    temperatureFilter === 'all'
                      ? 'bg-[#0D261C] text-[#F4EFE6]'
                      : 'text-[#524B45] hover:text-[#0D261C]'
                  }`}
                >
                  الكل
                </button>
                <button
                  onClick={() => setTemperatureFilter('hot')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors flex items-center gap-1 cursor-pointer ${
                    temperatureFilter === 'hot'
                      ? 'bg-[#855414] text-white'
                      : 'text-[#524B45] hover:text-[#0D261C]'
                  }`}
                >
                  <Flame className="w-3 h-3 text-[#D49B4B]" />
                  <span>ساخن</span>
                </button>
                <button
                  onClick={() => setTemperatureFilter('cold')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors flex items-center gap-1 cursor-pointer ${
                    temperatureFilter === 'cold'
                      ? 'bg-[#184E37] text-white'
                      : 'text-[#524B45] hover:text-[#0D261C]'
                  }`}
                >
                  <Snowflake className="w-3 h-3 text-[#A3B8AE]" />
                  <span>مثلج</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        <div className="sticky top-[60px] sm:top-[68px] z-30 bg-[#F4EFE6]/95 backdrop-blur-md py-2.5 -mx-4 px-4 sm:mx-0 sm:px-0 border-b border-[#E2DACD] mb-5">
          <div
            ref={tabsContainerRef}
            className="flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth py-0.5"
          >
            <button
              onClick={() => setActiveCategory('all')}
              className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#0D261C] text-[#F4EFE6]'
                  : 'bg-white text-[#524B45] border border-[#E2DACD] hover:border-[#184E37]'
              }`}
            >
              الكل
            </button>

            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1 ${
                  activeCategory === cat.id
                    ? 'bg-[#184E37] text-[#F4EFE6]'
                    : 'bg-white text-[#524B45] border border-[#E2DACD] hover:border-[#184E37]'
                }`}
              >
                <span>{cat.nameAr}</span>
                <span className="text-[10px] opacity-75 font-mono">
                  ({cat.count})
                </span>
              </button>
            ))}
          </div>
        </div>

        {filteredItems.length === 0 ? (
          <div className="text-center py-12 bg-[#FCFAF7] border border-[#E2DACD] rounded-lg p-6">
            <Coffee className="w-8 h-8 text-[#855414]/40 mx-auto mb-2" />
            <p className="text-xs text-[#6E665E] mb-3">لا توجد نتائج تطابق بحثك.</p>
            <button
              onClick={clearFilters}
              className="px-3.5 py-1.5 bg-[#0D261C] hover:bg-[#184E37] text-[#F4EFE6] text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              عرض الكل
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#FCFAF7] border border-[#E2DACD] hover:border-[#184E37] rounded-lg p-3.5 transition-colors flex items-center justify-between text-right gap-3"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <h3 className="text-sm font-bold text-[#0D261C] truncate">
                      {item.nameAr}
                    </h3>
                    {item.temperature === 'hot' && (
                      <Flame className="w-3.5 h-3.5 text-[#855414] shrink-0" />
                    )}
                    {item.temperature === 'cold' && (
                      <Snowflake className="w-3.5 h-3.5 text-[#184E37] shrink-0" />
                    )}
                  </div>

                  <div className="font-brand-latin text-xs text-[#855414] truncate mb-1">
                    {item.nameEn}
                  </div>

                  <div>
                    {item.price !== null ? (
                      <span className="text-xs font-bold text-[#0D261C] font-mono">
                        {item.price} ج.م
                      </span>
                    ) : (
                      <span className="text-[11px] text-[#855414]">
                        السعر بالكافيه
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => handleAddItem(item)}
                  className={`shrink-0 inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    addedItemIds[item.id]
                      ? 'bg-[#184E37] text-[#F4EFE6]'
                      : 'bg-[#F4EFE6] hover:bg-[#0D261C] text-[#0D261C] hover:text-[#F4EFE6] border border-[#E2DACD]'
                  }`}
                  aria-label={`إضافة ${item.nameAr}`}
                >
                  {addedItemIds[item.id] ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#D49B4B]" />
                      <span>تمت الإضافة</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5 text-[#855414]" />
                      <span>أضف</span>
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
