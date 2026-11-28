import React, { useState, useEffect, useCallback, useRef } from 'react';
import { X, ChevronRight, ChevronLeft, ExternalLink } from 'lucide-react';

interface GalleryItem {
  src: string;
  alt: string;
  w: number;
  h: number;
}

const GALLERY: GalleryItem[] = [
  {
    src: '/images/gallery/gallery-1.jpg',
    alt: 'واجهة كافيه Tree House بالكامل ليلاً مع لافتة المكان والإضاءة الكهرمانية الدافئة',
    w: 705,
    h: 262,
  },
  {
    src: '/images/gallery/gallery-2.jpg',
    alt: 'حروف Tree House المضيئة ثلاثية الأبعاد على الواجهة الصاج الخضراء',
    w: 960,
    h: 960,
  },
  {
    src: '/images/gallery/gallery-3.jpg',
    alt: 'مدخل الكافيه واللافتة الدائرية المضيئة بشعار Tree House COFFEE & FRIENDS',
    w: 282,
    h: 249,
  },
  {
    src: '/images/gallery/gallery-4.jpg',
    alt: 'الجلسات والواجهة المعمارية المضيئة بنوافذ الديكور الأخضر والإضاءة المسائية',
    w: 282,
    h: 262,
  },
];

export const Gallery: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  // If fewer than 3 photos, hide section
  if (GALLERY.length < 3) {
    return null;
  }

  const handlePrev = useCallback(() => {
    setActiveIdx((curr) => {
      if (curr === null) return null;
      return curr === 0 ? GALLERY.length - 1 : curr - 1;
    });
  }, []);

  const handleNext = useCallback(() => {
    setActiveIdx((curr) => {
      if (curr === null) return null;
      return curr === GALLERY.length - 1 ? 0 : curr + 1;
    });
  }, []);

  const handleClose = useCallback(() => {
    setActiveIdx(null);
  }, []);

  // Keyboard navigation (RTL aware)
  useEffect(() => {
    if (activeIdx === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'ArrowRight') {
        // In RTL, right arrow is previous
        handlePrev();
      } else if (e.key === 'ArrowLeft') {
        // In RTL, left arrow is next
        handleNext();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeIdx, handleClose, handlePrev, handleNext]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX.current;
    
    // In RTL: swipe right (positive diff) -> previous, swipe left (negative diff) -> next
    if (diff > 40) {
      handlePrev();
    } else if (diff < -40) {
      handleNext();
    }
    touchStartX.current = null;
  };

  return (
    <section id="gallery" className="py-10 sm:py-14 bg-[#F4EFE6] text-[#1A1714] border-t border-[#E2DACD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0D261C]">
            أجواء المكان
          </h2>
          <a
            href="https://www.instagram.com/tree_house_caffe/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-[#855414] hover:text-[#0D261C] font-semibold transition-colors px-2.5 py-1 rounded-md border border-[#E2DACD] hover:border-[#855414] bg-white/70"
            aria-label="زيارة حساب الكافيه على انستجرام"
          >
            <span>انستجرام</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Asymmetric Responsive Grid: 2 columns on mobile, adaptive on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-2.5 sm:gap-3">
          
          {/* Photo 1: Wide exterior view - spans 7 columns on desktop */}
          <div
            onClick={() => setActiveIdx(0)}
            className="col-span-2 md:col-span-7 rounded-xl overflow-hidden shadow-sm group bg-[#0D261C] border border-[#E2DACD] cursor-pointer h-48 sm:h-64 md:h-80 relative"
          >
            <picture>
              <source srcSet="/images/gallery/gallery-1.webp" type="image/webp" />
              <img
                src={GALLERY[0].src}
                alt={GALLERY[0].alt}
                width={GALLERY[0].w}
                height={GALLERY[0].h}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D261C]/30 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Photo 2: Close-up 3D Letters - spans 5 columns on desktop */}
          <div
            onClick={() => setActiveIdx(1)}
            className="col-span-2 md:col-span-5 rounded-xl overflow-hidden shadow-sm group bg-[#0D261C] border border-[#E2DACD] cursor-pointer h-48 sm:h-64 md:h-80 relative"
          >
            <picture>
              <source srcSet="/images/gallery/gallery-2.webp" type="image/webp" />
              <img
                src={GALLERY[1].src}
                alt={GALLERY[1].alt}
                width={GALLERY[1].w}
                height={GALLERY[1].h}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D261C]/30 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Photo 3: Entrance & Round Sign - spans 1 col on mobile, 6 cols on desktop */}
          <div
            onClick={() => setActiveIdx(2)}
            className="col-span-1 md:col-span-6 rounded-xl overflow-hidden shadow-sm group bg-[#0D261C] border border-[#E2DACD] cursor-pointer h-40 sm:h-52 md:h-60 relative"
          >
            <picture>
              <source srcSet="/images/gallery/gallery-3.webp" type="image/webp" />
              <img
                src={GALLERY[2].src}
                alt={GALLERY[2].alt}
                width={GALLERY[2].w}
                height={GALLERY[2].h}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D261C]/30 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Photo 4: Restaurant Windows & Warm Arch - spans 1 col on mobile, 6 cols on desktop */}
          <div
            onClick={() => setActiveIdx(3)}
            className="col-span-1 md:col-span-6 rounded-xl overflow-hidden shadow-sm group bg-[#0D261C] border border-[#E2DACD] cursor-pointer h-40 sm:h-52 md:h-60 relative"
          >
            <picture>
              <source srcSet="/images/gallery/gallery-4.webp" type="image/webp" />
              <img
                src={GALLERY[3].src}
                alt={GALLERY[3].alt}
                width={GALLERY[3].w}
                height={GALLERY[3].h}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D261C]/30 via-transparent to-transparent pointer-events-none" />
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {activeIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="عرض الصورة بالحجم الكامل"
          onClick={handleClose}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="fixed inset-0 z-50 bg-[#0D261C]/92 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
        >
          {/* Top Controls Bar */}
          <div
            className="absolute top-4 left-4 right-4 flex items-center justify-between text-[#F4EFE6] z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-xs sm:text-sm font-mono opacity-80 dir-ltr">
              {activeIdx + 1} / {GALLERY.length}
            </span>

            <button
              onClick={handleClose}
              className="p-2 rounded-full bg-[#184E37]/80 hover:bg-[#184E37] text-[#F4EFE6] transition-colors cursor-pointer border border-[#2B664B]"
              aria-label="إغلاق"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Buttons (RTL aware) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#0D261C]/80 hover:bg-[#184E37] text-[#F4EFE6] border border-[#2B664B] transition-colors cursor-pointer z-10"
            aria-label="الصورة السابقة"
          >
            <ChevronRight className="w-5 h-5 text-[#D49B4B]" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#0D261C]/80 hover:bg-[#184E37] text-[#F4EFE6] border border-[#2B664B] transition-colors cursor-pointer z-10"
            aria-label="الصورة التالية"
          >
            <ChevronLeft className="w-5 h-5 text-[#D49B4B]" />
          </button>

          {/* Image & Caption Container */}
          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-xl overflow-hidden border border-[#1C4031] shadow-2xl bg-[#071610] max-h-[75vh]">
              <img
                src={GALLERY[activeIdx].src}
                alt={GALLERY[activeIdx].alt}
                className="max-h-[75vh] w-auto object-contain mx-auto"
              />
            </div>

            <p className="mt-3 text-xs sm:text-sm text-[#D5E0DA] text-center max-w-xl px-2">
              {GALLERY[activeIdx].alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
