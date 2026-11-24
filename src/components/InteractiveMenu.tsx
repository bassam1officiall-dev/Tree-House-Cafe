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
  const [floatingBadgeId, setFloatingBadgeId] = useState<string | null>(null);

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
    setFloatingBadgeId(item.id);

    setTimeout(() => {
      setFloatingBadgeId(null);
    }, 900);

    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  const handleCategorySelect = (categoryId: CategoryId | 'all') => {
    setActiveCategory(categoryId);
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
              <span>المنيو الرقمي التفاعلي الرسمي</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D261C] tracking-tight">
              قائمة مشروبات وحلويات Tree House
            </h2>
            <p className="text-sm sm:text-base text-[#524B45] mt-2">
              75 صنفاً موزعة على 9 أقسام لتناسب كل الأذواق في الصباح والمساء. اختر مشروبك المفضل واجمعه في قائمة طلبي بنقرة واحدة.
            </p>
          </div>

          {/* Quick Floating Order Drawer Summary Pill */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-[#0D261C] hover:bg-[#184E37] text-[#F4EFE6] rounded-md text-xs sm:text-sm font-bold transition-all duration-200 shadow-md hover:shadow-glow-amber cursor-pointer border border-[#1C4031] btn-press"
            >
              <ShoppingBag className="w-4 h-4 text-[#D49B4B]" />
              <span>قائمة طلبي</span>
              <span className="bg-[#D49B4B] text-[#0D261C] text-xs font-black px-2 py-0.5 rounded-full font-mono">
                {totalItemsCount}
              </span>
            </button>
          </div>
        </div>

        {/* Search Bar & Quick Filters */}
        <div className="bg-[#FCFAF7] border border-[#E2DACD] rounded-xl p-4 sm:p-5 mb-8 shadow-warm-sm transition-all duration-200 hover:border-[#184E37]/50">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input Field with animated focus */}
            <div className="md:col-span-8 relative">
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث عن مشروبك المفضل... (إسبريسو، سبانيش لاتيه، شاي، ميلك شيك، مانجو...)"
                className="w-full pl-10 pr-11 py-3 bg-white border border-[#E2DACD] rounded-lg text-sm text-[#1A1714] placeholder-[#8C847A] focus:outline-none focus:border-[#184E37] focus:ring-2 focus:ring-[#184E37]/20 transition-all shadow-inner"
              />
              <Search className="w-5 h-5 text-[#855414] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C847A] hover:text-[#1A1714] p-1 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="مسح البحث"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Temperature Filter Pills */}
            <div className="md:col-span-4 flex items-center justify-start md:justify-end gap-2">
              <span className="text-xs font-semibold text-[#6E665E] hidden sm:inline-flex items-center gap-1">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#855414]" />
                الحرارة:
              </span>
              <div className="inline-flex rounded-lg bg-[#EAE3D5] p-1">
                <button
                  onClick={() => setTemperatureFilter('all')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all duration-150 cursor-pointer ${
                    temperatureFilter === 'all'
                      ? 'bg-[#0D261C] text-[#F4EFE6] shadow-sm'
                      : 'text-[#524B45] hover:text-[#0D261C]'
                  }`}
                >
                  الكل
                </button>
                <button
                  onClick={() => setTemperatureFilter('hot')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
                    temperatureFilter === 'hot'
                      ? 'bg-[#855414] text-white shadow-sm'
                      : 'text-[#524B45] hover:text-[#0D261C]'
                  }`}
                >
                  <Flame className="w-3.5 h-3.5 text-[#D49B4B] animate-pulse" />
                  <span>ساخن</span>
                </button>
                <button
                  onClick={() => setTemperatureFilter('cold')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
                    temperatureFilter === 'cold'
                      ? 'bg-[#184E37] text-white shadow-sm'
                      : 'text-[#524B45] hover:text-[#0D261C]'
                  }`}
                >
                  <Snowflake className="w-3.5 h-3.5 text-[#A3B8AE]" />
                  <span>مثلج</span>
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
              className={`shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 btn-press ${
                activeCategory === 'all'
                  ? 'bg-[#0D261C] text-[#F4EFE6] shadow-md scale-102 ring-2 ring-[#D49B4B]/50'
                  : 'bg-white text-[#524B45] border border-[#E2DACD] hover:border-[#184E37] hover:text-[#0D261C]'
              }`}
            >
              <span>جميع الأصناف</span>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full font-mono font-bold ${
                  activeCategory === 'all'
                    ? 'bg-[#D49B4B] text-[#0D261C]'
                    : 'bg-[#EAE3D5] text-[#524B45]'
                }`}
              >
                75
              </span>
            </button>

            {/* Individual Category Tabs with Animated Pill Counter */}
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.id)}
                className={`shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 btn-press ${
                  activeCategory === cat.id
                    ? 'bg-[#184E37] text-[#F4EFE6] shadow-md scale-102 ring-2 ring-[#D49B4B]/50'
                    : 'bg-white text-[#524B45] border border-[#E2DACD] hover:border-[#184E37] hover:text-[#0D261C]'
                }`}
              >
                <span>{cat.nameAr}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-mono font-bold ${
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
            <span className="font-extrabold text-[#0D261C] font-mono text-sm">{filteredItems.length}</span>{' '}
            من إجمالي{' '}
            <span className="font-extrabold text-[#0D261C] font-mono text-sm">75</span> صنفاً
            {activeCategory !== 'all' && (
              <span className="mr-2 text-[#855414] font-bold">
                (قسم {CATEGORIES.find((c) => c.id === activeCategory)?.nameAr})
              </span>
            )}
          </div>
          {(searchQuery || activeCategory !== 'all' || temperatureFilter !== 'all') && (
            <button
              onClick={clearFilters}
              className="text-[#855414] hover:text-[#0D261C] hover:underline font-bold cursor-pointer"
            >
              إلغاء كل الفلاتر &times;
            </button>
          )}
        </div>

        {/* Menu Items Grid with Smooth Hover Lift */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#FCFAF7] border border-[#E2DACD] rounded-xl p-8">
            <Coffee className="w-12 h-12 text-[#855414]/50 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#0D261C] mb-2">لا توجد أصناف مطابقة للبحث</h3>
            <p className="text-xs sm:text-sm text-[#6E665E] max-w-sm mx-auto mb-4 leading-relaxed">
              لم نعثر على نتائج لكلمة البحث "{searchQuery}". جرب البحث باسم صنف آخر أو استعراض كل الأقسام.
            </p>
            <button
              onClick={clearFilters}
              className="px-5 py-2.5 bg-[#0D261C] hover:bg-[#184E37] text-[#F4EFE6] text-xs font-bold rounded-md transition-colors cursor-pointer btn-press"
            >
              عرض كل الأصناف (75)
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="relative bg-[#FCFAF7] border border-[#E2DACD] hover:border-[#D49B4B] rounded-xl p-5 transition-all duration-300 hover:shadow-warm-md hover:-translate-y-1 flex flex-col justify-between group interactive-card"
              >
                {/* Floating "+1" animated ping badge when item added */}
                {floatingBadgeId === item.id && (
                  <div className="absolute top-3 left-3 z-10 bg-[#D49B4B] text-[#0D261C] text-xs font-black px-2 py-0.5 rounded-full shadow-lg animate-bounce pointer-events-none">
                    +1 أضيف للطلب
                  </div>
                )}

                <div>
                  {/* Item Badges & Temperature Indicator */}
                  <div className="flex items-center justify-between gap-2 mb-3">
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

                    {/* Temperature Indicator with steam animation for hot */}
                    <div className="shrink-0">
                      {item.temperature === 'hot' && (
                        <span
                          className="inline-flex items-center gap-1 text-[11px] text-[#855414] font-medium bg-[#F4EFE6] px-2 py-0.5 rounded border border-[#E2DACD]"
                          title="يقدم ساخناً"
                        >
                          <Flame className="w-3.5 h-3.5 text-[#855414] group-hover:text-[#D49B4B] transition-colors" />
                          <span className="hidden sm:inline">ساخن</span>
                        </span>
                      )}
                      {item.temperature === 'cold' && (
                        <span
                          className="inline-flex items-center gap-1 text-[11px] text-[#184E37] font-medium bg-[#F4EFE6] px-2 py-0.5 rounded border border-[#E2DACD]"
                          title="يقدم بارداً / مثلجاً"
                        >
                          <Snowflake className="w-3.5 h-3.5 text-[#184E37] group-hover:rotate-45 transition-transform" />
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
                      <span className="text-xs font-semibold text-[#855414] bg-[#F4EFE6] px-2.5 py-1 rounded border border-[#E2DACD] group-hover:border-[#D49B4B]/60 transition-colors">
                        السعر بالكافيه
                      </span>
                    )}
                  </div>

                  {/* Interactive Add to Order Button */}
                  <button
                    onClick={() => handleAddItem(item)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer btn-press ${
                      addedItemIds[item.id]
                        ? 'bg-[#184E37] text-[#F4EFE6] shadow-sm animate-scale-pop'
                        : 'bg-[#F4EFE6] hover:bg-[#0D261C] text-[#0D261C] hover:text-[#F4EFE6] border border-[#E2DACD] hover:border-[#0D261C]'
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
                        <Plus className="w-3.5 h-3.5 text-[#855414] group-hover:text-[#D49B4B] transition-colors" />
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
