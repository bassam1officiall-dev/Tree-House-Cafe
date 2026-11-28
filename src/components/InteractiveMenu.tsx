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
  const [floatingBadgeId, setFloatingBadgeId] = useState<string | null>(null);

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
    setFloatingBadgeId(item.id);

    setTimeout(() => {
      setFloatingBadgeId(null);
    }, 900);

    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1200);
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
    <section id="menu" className="py-16 sm:py-20 bg-[#F4EFE6] text-[#1A1714]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-[#E2DACD]">
          <div className="text-right max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0D261C]">
              المنيو
            </h2>
            <p className="text-sm text-[#524B45] mt-1.5 leading-relaxed">
              اختر طلبك واجمعه في القائمة لتعرضه على الطاولة للنادل أو تبعته واتساب.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0D261C] hover:bg-[#184E37] text-[#F4EFE6] rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer border border-[#1C4031]"
            >
              <ShoppingBag className="w-4 h-4 text-[#D49B4B]" />
              <span>قائمة طلبي</span>
              <span className="bg-[#D49B4B] text-[#0D261C] text-xs font-bold px-2 py-0.5 rounded-full font-mono">
                {totalItemsCount}
              </span>
            </button>
          </div>
        </div>

        <div className="bg-[#FCFAF7] border border-[#E2DACD] rounded-lg p-4 sm:p-5 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            <div className="md:col-span-8 relative">
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث عن مشروب أو حلوى..."
                className="w-full pl-10 pr-10 py-2.5 bg-white border border-[#E2DACD] rounded-lg text-sm text-[#1A1714] placeholder-[#8C847A] focus:outline-none focus:border-[#184E37] transition-colors"
              />
              <Search className="w-4 h-4 text-[#855414] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8C847A] hover:text-[#1A1714] p-1"
                  aria-label="مسح البحث"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="md:col-span-4 flex items-center justify-start md:justify-end gap-2">
              <span className="text-xs text-[#6E665E] hidden sm:inline-flex items-center gap-1">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                النوع:
              </span>
              <div className="inline-flex rounded-lg bg-[#EAE3D5] p-1">
                <button
                  onClick={() => setTemperatureFilter('all')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                    temperatureFilter === 'all'
                      ? 'bg-[#0D261C] text-[#F4EFE6]'
                      : 'text-[#524B45] hover:text-[#0D261C]'
                  }`}
                >
                  الكل
                </button>
                <button
                  onClick={() => setTemperatureFilter('hot')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors flex items-center gap-1 cursor-pointer ${
                    temperatureFilter === 'hot'
                      ? 'bg-[#855414] text-white'
                      : 'text-[#524B45] hover:text-[#0D261C]'
                  }`}
                >
                  <Flame className="w-3.5 h-3.5 text-[#D49B4B]" />
                  <span>ساخن</span>
                </button>
                <button
                  onClick={() => setTemperatureFilter('cold')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors flex items-center gap-1 cursor-pointer ${
                    temperatureFilter === 'cold'
                      ? 'bg-[#184E37] text-white'
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

        <div className="sticky top-[65px] sm:top-[73px] z-30 bg-[#F4EFE6]/95 backdrop-blur-md py-3 -mx-4 px-4 sm:mx-0 sm:px-0 border-b border-[#E2DACD] mb-6">
          <div
            ref={tabsContainerRef}
            className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1"
          >
            <button
              onClick={() => handleCategorySelect('all')}
              className={`shrink-0 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeCategory === 'all'
                  ? 'bg-[#0D261C] text-[#F4EFE6]'
                  : 'bg-white text-[#524B45] border border-[#E2DACD] hover:border-[#184E37]'
              }`}
            >
              <span>جميع الأصناف</span>
              <span
                className={`text-[11px] px-1.5 py-0.2 rounded font-mono ${
                  activeCategory === 'all'
                    ? 'bg-[#D49B4B] text-[#0D261C]'
                    : 'bg-[#EAE3D5] text-[#524B45]'
                }`}
              >
                75
              </span>
            </button>

            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.id)}
                className={`shrink-0 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? 'bg-[#184E37] text-[#F4EFE6]'
                    : 'bg-white text-[#524B45] border border-[#E2DACD] hover:border-[#184E37]'
                }`}
              >
                <span>{cat.nameAr}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded font-mono ${
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

        <div className="flex items-center justify-between text-xs text-[#6E665E] mb-6">
          <div>
            عرض{' '}
            <span className="font-bold text-[#0D261C] font-mono">{filteredItems.length}</span> صنف
            {activeCategory !== 'all' && (
              <span className="mr-2 text-[#855414]">
                ({CATEGORIES.find((c) => c.id === activeCategory)?.nameAr})
              </span>
            )}
          </div>
          {(searchQuery || activeCategory !== 'all' || temperatureFilter !== 'all') && (
            <button
              onClick={clearFilters}
              className="text-[#855414] hover:underline cursor-pointer"
            >
              مسح الفلاتر
            </button>
          )}
        </div>

        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#FCFAF7] border border-[#E2DACD] rounded-lg p-6">
            <Coffee className="w-10 h-10 text-[#855414]/40 mx-auto mb-2" />
            <h3 className="text-base font-bold text-[#0D261C] mb-1">لا توجد نتائج</h3>
            <p className="text-xs text-[#6E665E] max-w-xs mx-auto mb-4">
              لم نعثر على نتائج تطابق بحثك.
            </p>
            <button
              onClick={clearFilters}
              className="px-4 py-2 bg-[#0D261C] hover:bg-[#184E37] text-[#F4EFE6] text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              عرض كل الأصناف
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="relative bg-[#FCFAF7] border border-[#E2DACD] hover:border-[#184E37] rounded-lg p-4 transition-colors flex flex-col justify-between text-right"
              >
                {floatingBadgeId === item.id && (
                  <div className="absolute top-2 left-2 z-10 bg-[#D49B4B] text-[#0D261C] text-[11px] font-bold px-2 py-0.5 rounded pointer-events-none">
                    +1 أضيف للطلب
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {item.isPopular && (
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#D49B4B]/15 text-[#855414] border border-[#D49B4B]/30">
                          الأكثر طلباً
                        </span>
                      )}
                      {item.isSpecialty && (
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#184E37]/10 text-[#184E37] border border-[#184E37]/20">
                          مميز
                        </span>
                      )}
                    </div>

                    <div className="shrink-0">
                      {item.temperature === 'hot' && (
                        <span
                          className="inline-flex items-center gap-1 text-[11px] text-[#855414]"
                          title="يقدم ساخناً"
                        >
                          <Flame className="w-3.5 h-3.5 text-[#855414]" />
                          <span className="hidden sm:inline">ساخن</span>
                        </span>
                      )}
                      {item.temperature === 'cold' && (
                        <span
                          className="inline-flex items-center gap-1 text-[11px] text-[#184E37]"
                          title="يقدم مثلجاً"
                        >
                          <Snowflake className="w-3.5 h-3.5 text-[#184E37]" />
                          <span className="hidden sm:inline">مثلج</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#0D261C] leading-snug">
                    {item.nameAr}
                  </h3>
                  <div className="font-brand-latin text-xs text-[#855414] mt-0.5 mb-2">
                    {item.nameEn}
                  </div>

                  <p className="text-xs text-[#524B45] leading-relaxed mb-4">
                    {item.descriptionAr}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EAE3D5] flex items-center justify-between">
                  <div>
                    {item.price !== null ? (
                      <div className="flex items-baseline gap-1">
                        <span className="text-base font-bold text-[#0D261C] font-mono">
                          {item.price}
                        </span>
                        <span className="text-xs text-[#6E665E]">ج.م</span>
                      </div>
                    ) : (
                      <span className="text-xs text-[#855414] bg-[#F4EFE6] px-2 py-0.5 rounded border border-[#E2DACD]">
                        السعر بالكافيه
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => handleAddItem(item)}
                    className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      addedItemIds[item.id]
                        ? 'bg-[#184E37] text-[#F4EFE6]'
                        : 'bg-[#F4EFE6] hover:bg-[#0D261C] text-[#0D261C] hover:text-[#F4EFE6] border border-[#E2DACD]'
                    }`}
                    aria-label={`إضافة ${item.nameAr} إلى قائمة طلبي`}
                  >
                    {addedItemIds[item.id] ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#D49B4B]" />
                        <span>تمت الإضافة</span>
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
