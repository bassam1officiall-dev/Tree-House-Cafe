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
  Sparkles,
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

  // Filter items based on activeCategory, searchQuery, and temperatureFilter
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category check
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }

      // Temperature filter
      if (temperatureFilter === 'hot' && item.temperature !== 'hot') {
        return false;
      }
      if (temperatureFilter === 'cold' && item.temperature !== 'cold') {
        return false;
      }

      // Search query check (Arabic & English name, descriptions, tags)
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

  const handleCategorySelect = (categoryId: CategoryId | 'all') => {
    setActiveCategory(categoryId);
    // Smooth scroll tabs into view on mobile if needed
    if (tabsContainerRef.current) {
      // Small horizontal adjustment
    }
  };

  const clearFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
    setTemperatureFilter('all');
  };

  return (
    <section id="menu" className="py-16 sm:py-24 bg-[#F4EFE6] text-[#1A1714] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#E2DACD]">
          <div className="text-right max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#855414] tracking-wider uppercase mb-2">
              <span className="w-6 h-[2px] bg-[#D49B4B]" />
              <span>المنيو الرقمي الرسمي</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D261C] tracking-tight">
              قائمة مشروبات وحلويات Tree House
            </h2>
            <p className="text-sm sm:text-base text-[#524B45] mt-2">
              75 صنفاً موزعة على 9 أقسام لتناسب كل الأذواق في الصباح والمساء. اختر مشروبك المفضل واجمعه في قائمة طلبي.
            </p>
          </div>

          {/* Quick Floating Order Drawer Summary Pill */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-[#0D261C] hover:bg-[#184E37] text-[#F4EFE6] rounded-md text-xs sm:text-sm font-semibold transition-all shadow-sm cursor-pointer border border-[#1C4031]"
            >
              <ShoppingBag className="w-4 h-4 text-[#D49B4B]" />
              <span>قائمة طلبي</span>
              <span className="bg-[#D49B4B] text-[#0D261C] text-xs font-bold px-2 py-0.5 rounded-full font-mono">
                {totalItemsCount}
              </span>
            </button>
          </div>
        </div>

        {/* Search Bar & Quick Filters */}
        <div className="bg-[#FCFAF7] border border-[#E2DACD] rounded-lg p-4 sm:p-5 mb-8 shadow-warm-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input Field */}
            <div className="md:col-span-8 relative">
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث عن مشروبك المفضل... (إسبريسو، سبانيش لاتيه، شاي، ميلك شيك، مانجو...)"
                className="w-full pl-10 pr-10 py-3 bg-white border border-[#E2DACD] rounded-md text-sm text-[#1A1714] placeholder-[#8C847A] focus:outline-none focus:border-[#184E37] focus:ring-1 focus:ring-[#184E37] transition-all"
              />
              <Search className="w-5 h-5 text-[#855414] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C847A] hover:text-[#1A1714] p-1"
                  aria-label="مسح البحث"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Temperature Filter Pills */}
            <div className="md:col-span-4 flex items-center justify-start md:justify-end gap-2">
              <span className="text-xs font-semibold text-[#6E665E] hidden sm:inline flex items-center gap-1">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#855414]" />
                النوع:
              </span>
              <div className="inline-flex rounded-md bg-[#EAE3D5] p-1">
                <button
                  onClick={() => setTemperatureFilter('all')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded transition-all cursor-pointer ${
                    temperatureFilter === 'all'
                      ? 'bg-[#0D261C] text-[#F4EFE6] shadow-xs'
                      : 'text-[#524B45] hover:text-[#0D261C]'
                  }`}
                >
                  الكل
                </button>
                <button
                  onClick={() => setTemperatureFilter('hot')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded transition-all flex items-center gap-1 cursor-pointer ${
                    temperatureFilter === 'hot'
                      ? 'bg-[#855414] text-white shadow-xs'
                      : 'text-[#524B45] hover:text-[#0D261C]'
                  }`}
                >
                  <Flame className="w-3 h-3 text-[#D49B4B]" />
                  <span>ساخن</span>
                </button>
                <button
                  onClick={() => setTemperatureFilter('cold')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded transition-all flex items-center gap-1 cursor-pointer ${
                    temperatureFilter === 'cold'
                      ? 'bg-[#184E37] text-white shadow-xs'
                      : 'text-[#524B45] hover:text-[#0D261C]'
                  }`}
                >
                  <Snowflake className="w-3 h-3 text-[#A3B8AE]" />
                  <span>مثلج / بارد</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Sticky Horizontal Category Navigation */}
        <div className="sticky top-[69px] sm:top-[77px] z-30 bg-[#F4EFE6]/95 backdrop-blur-md py-3 -mx-4 px-4 sm:mx-0 sm:px-0 border-b border-[#E2DACD] mb-8">
          <div
            ref={tabsContainerRef}
            className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1"
          >
            {/* "All" Category Pill */}
            <button
              onClick={() => handleCategorySelect('all')}
              className={`shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeCategory === 'all'
                  ? 'bg-[#0D261C] text-[#F4EFE6] shadow-sm'
                  : 'bg-white text-[#524B45] border border-[#E2DACD] hover:border-[#184E37] hover:text-[#0D261C]'
              }`}
            >
              <span>جميع الأصناف</span>
              <span
                className={`text-[11px] px-1.5 py-0.2 rounded-full font-mono ${
                  activeCategory === 'all'
                    ? 'bg-[#D49B4B] text-[#0D261C]'
                    : 'bg-[#EAE3D5] text-[#524B45]'
                }`}
              >
                75
              </span>
            </button>

            {/* Individual Category Tabs */}
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.id)}
                className={`shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? 'bg-[#184E37] text-[#F4EFE6] shadow-sm'
                    : 'bg-white text-[#524B45] border border-[#E2DACD] hover:border-[#184E37] hover:text-[#0D261C]'
                }`}
              >
                <span>{cat.nameAr}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-full font-mono ${
                    activeCategory === cat.id
                      ? 'bg-[#D49B4B] text-[#0D261C]'
                      : 'bg-[#EAE3D5] text-[#524B45]'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter and Filter Status */}
        <div className="flex items-center justify-between text-xs text-[#6E665E] mb-6">
          <div>
            يتم عرض{' '}
            <span className="font-bold text-[#0D261C] font-mono">{filteredItems.length}</span>{' '}
            من إجمالي{' '}
            <span className="font-bold text-[#0D261C] font-mono">75</span> صنفاً
            {activeCategory !== 'all' && (
              <span className="mr-2 text-[#855414] font-medium">
                (قسم {CATEGORIES.find((c) => c.id === activeCategory)?.nameAr})
              </span>
            )}
          </div>
          {(searchQuery || activeCategory !== 'all' || temperatureFilter !== 'all') && (
            <button
              onClick={clearFilters}
              className="text-[#855414] hover:underline font-semibold cursor-pointer"
            >
              إلغاء كل الفلاتر
            </button>
          )}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#FCFAF7] border border-[#E2DACD] rounded-lg p-8">
            <Coffee className="w-12 h-12 text-[#855414]/50 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#0D261C] mb-2">لا توجد أصناف مطابقة للبحث</h3>
            <p className="text-xs sm:text-sm text-[#6E665E] max-w-sm mx-auto mb-4 leading-relaxed">
              لم نعثر على نتائج لكلمة البحث "{searchQuery}". جرب البحث باسم صنف آخر أو استعراض كل الأقسام.
            </p>
            <button
              onClick={clearFilters}
              className="px-4 py-2 bg-[#0D261C] hover:bg-[#184E37] text-[#F4EFE6] text-xs font-bold rounded transition-colors cursor-pointer"
            >
              عرض كل الأصناف (75)
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#FCFAF7] border border-[#E2DACD] hover:border-[#184E37] rounded-lg p-5 transition-all duration-200 hover:shadow-warm-sm flex flex-col justify-between group"
              >
                <div>
                  {/* Item Badges & Indicators */}
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {item.isPopular && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded bg-[#D49B4B]/20 text-[#855414] border border-[#D49B4B]/40">
                          <Sparkles className="w-3 h-3 text-[#855414]" />
                          الأكثر طلباً
                        </span>
                      )}
                      {item.isSpecialty && (
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#184E37]/15 text-[#184E37] border border-[#184E37]/30">
                          مشروب مميز
                        </span>
                      )}
                    </div>

                    {/* Temperature Indicator */}
                    <div className="shrink-0">
                      {item.temperature === 'hot' && (
                        <span
                          className="inline-flex items-center gap-1 text-[11px] text-[#855414] font-medium"
                          title="يقدم ساخناً"
                        >
                          <Flame className="w-3.5 h-3.5 text-[#855414]" />
                          <span className="hidden sm:inline">ساخن</span>
                        </span>
                      )}
                      {item.temperature === 'cold' && (
                        <span
                          className="inline-flex items-center gap-1 text-[11px] text-[#184E37] font-medium"
                          title="يقدم بارداً / مثلجاً"
                        >
                          <Snowflake className="w-3.5 h-3.5 text-[#184E37]" />
                          <span className="hidden sm:inline">مثلج</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & English Subtitle */}
                  <h4 className="text-lg font-bold text-[#0D261C] group-hover:text-[#184E37] transition-colors leading-snug">
                    {item.nameAr}
                  </h4>
                  <div className="font-brand-latin text-xs font-semibold text-[#855414] mt-0.5 mb-2.5 tracking-tight">
                    {item.nameEn}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#524B45] leading-relaxed mb-4 line-clamp-3">
                    {item.descriptionAr}
                  </p>
                </div>

                {/* Card Footer: Price and Add Button */}
                <div className="pt-3.5 border-t border-[#EAE3D5] flex items-center justify-between">
                  {/* Price display with default fallback: "السعر بالكافيه" */}
                  <div>
                    {item.price !== null ? (
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-bold text-[#0D261C] font-mono">
                          {item.price}
                        </span>
                        <span className="text-xs text-[#6E665E]">ج.م</span>
                      </div>
                    ) : (
                      <span className="text-xs font-semibold text-[#855414] bg-[#F4EFE6] px-2.5 py-1 rounded border border-[#E2DACD]">
                        السعر بالكافيه
                      </span>
                    )}
                  </div>

                  {/* Add to Order Button */}
                  <button
                    onClick={() => handleAddItem(item)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                      addedItemIds[item.id]
                        ? 'bg-[#184E37] text-[#F4EFE6]'
                        : 'bg-[#F4EFE6] hover:bg-[#0D261C] text-[#0D261C] hover:text-[#F4EFE6] border border-[#E2DACD]'
                    }`}
                    aria-label={`إضافة ${item.nameAr} إلى قائمة طلبي`}
                  >
                    {addedItemIds[item.id] ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#D49B4B]" />
                        <span>تمت الإضافة!</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5 text-[#855414]" />
                        <span>أضف لطلبي</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
