import React, { useState } from 'react';
import { useOrder } from '../context/OrderContext';
import { siteConfig } from '../config/site';
import { X, Trash2, Plus, Minus, Send, CheckCircle2, UserCheck, MessageSquare, Sparkles } from 'lucide-react';

export const OrderSummaryDrawer: React.FC = () => {
  const {
    orderItems,
    isDrawerOpen,
    setIsDrawerOpen,
    updateQuantity,
    removeItem,
    clearOrder,
    totalItemsCount,
  } = useOrder();

  const [tableNumber, setTableNumber] = useState('');
  const [customerNotes, setCustomerNotes] = useState('');
  const [waiterMode, setWaiterMode] = useState(false);

  if (!isDrawerOpen) return null;

  // Build formatted WhatsApp message
  const generateWhatsAppMessage = () => {
    let msg = `*طلب جديد من منيو Tree House Cafe*\n`;
    if (tableNumber) {
      msg += `📍 *رقم الطاولة / الجلسة:* ${tableNumber}\n`;
    }
    msg += `--------------------------\n`;
    orderItems.forEach((oi) => {
      msg += `• ${oi.quantity}x ${oi.item.nameAr} (${oi.item.nameEn})\n`;
    });
    msg += `--------------------------\n`;
    msg += `إجمالي الأصناف: ${totalItemsCount}\n`;
    if (customerNotes) {
      msg += `ملاحظات إضافية: ${customerNotes}\n`;
    }
    msg += `شكراً لكم!`;
    return msg;
  };

  const handleSendWhatsApp = () => {
    const text = generateWhatsAppMessage();
    const url = siteConfig.socials.whatsapp.getLink(text);
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      {/* Backdrop with smooth blur */}
      <div
        className="fixed inset-0 bg-[#071610]/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => setIsDrawerOpen(false)}
      />

      <div className="fixed inset-y-0 left-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-md bg-[#FCFAF7] shadow-2xl border-r-2 border-[#D49B4B]/30 flex flex-col justify-between text-right animate-slide-left">
          
          {/* Drawer Header with 3D Brand Element */}
          <div className="p-5 sm:p-6 bg-[#0D261C] text-[#F4EFE6] flex items-center justify-between border-b border-[#1C4031]">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="p-2 text-[#D5E0DA] hover:text-[#D49B4B] hover:bg-[#184E37]/50 rounded-lg transition-colors cursor-pointer btn-press"
                aria-label="إغلاق قائمة طلبي"
              >
                <X className="w-5 h-5" />
              </button>
              <div>
                <h3 id="slide-over-title" className="text-lg font-bold text-[#F4EFE6] flex items-center gap-2">
                  <span>قائمة طلبي</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#D49B4B]" />
                </h3>
                <span className="text-xs text-[#D49B4B] font-semibold">
                  {totalItemsCount > 0 ? `${totalItemsCount} أصناف مختارة` : 'القائمة فارغة حالياً'}
                </span>
              </div>
            </div>

            {orderItems.length > 0 && (
              <button
                onClick={clearOrder}
                className="text-xs text-[#A3B8AE] hover:text-red-400 flex items-center gap-1 transition-colors cursor-pointer py-1 px-2 rounded hover:bg-red-950/30"
                title="تفريغ القائمة"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>مسح الكل</span>
              </button>
            )}
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4 custom-scrollbar">
            {orderItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 text-[#524B45]">
                <div className="w-20 h-20 rounded-full bg-[#EAE3D5] flex items-center justify-center text-[#855414] mb-4 shadow-inner">
                  <CheckCircle2 className="w-10 h-10 text-[#855414]" />
                </div>
                <h4 className="text-base font-bold text-[#0D261C] mb-2">
                  لم تختر أي مشروب بعد
                </h4>
                <p className="text-xs text-[#6E665E] max-w-xs leading-relaxed mb-6">
                  تصفح المنيو واضغط زر (+) بجانب أي صنف لإضافته إلى قائمتك وعرضه للنادل عند وصولك أو إرساله عبر واتساب.
                </p>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="px-6 py-3 bg-[#0D261C] hover:bg-[#184E37] text-[#F4EFE6] text-xs font-bold rounded-lg transition-all duration-200 cursor-pointer shadow-md btn-press"
                >
                  تصفح المنيو الآن
                </button>
              </div>
            ) : (
              <>
                {/* Mode Switcher: Waiter Presentation vs Edit Mode */}
                <div className="p-3 bg-[#EAE3D5]/80 rounded-lg border border-[#E2DACD] flex items-center justify-between text-xs">
                  <span className="text-[#0D261C] font-semibold flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-[#855414]" />
                    <span>جاهز للعرض على الطاولة للنادل</span>
                  </span>
                  <button
                    onClick={() => setWaiterMode(!waiterMode)}
                    className="text-[#855414] font-bold underline hover:text-[#0D261C] cursor-pointer"
                  >
                    {waiterMode ? 'تعديل الكميات' : 'وضع الشاشة الكبيرة'}
                  </button>
                </div>

                {/* Items List */}
                <div className="space-y-3">
                  {orderItems.map((oi) => (
                    <div
                      key={oi.item.id}
                      className={`p-3.5 rounded-xl border transition-all duration-200 ${
                        waiterMode
                          ? 'bg-white border-[#184E37] shadow-md scale-101'
                          : 'bg-white border-[#E2DACD] hover:border-[#184E37]/50'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <h5 className={`font-bold text-[#0D261C] ${waiterMode ? 'text-lg' : 'text-sm'}`}>
                            {oi.item.nameAr}
                          </h5>
                          <div className="font-brand-latin text-xs text-[#855414] font-semibold">
                            {oi.item.nameEn}
                          </div>
                          <div className="text-[11px] text-[#6E665E] mt-1 font-mono">
                            {oi.item.price !== null ? `${oi.item.price} ج.م` : 'السعر بالكافيه'}
                          </div>
                        </div>

                        {/* Quantity Controls with tactile feel */}
                        <div className="flex items-center gap-2 bg-[#F4EFE6] px-2.5 py-1.5 rounded-lg border border-[#E2DACD]">
                          {!waiterMode && (
                            <button
                              onClick={() => updateQuantity(oi.item.id, -1)}
                              className="p-1 text-[#524B45] hover:text-red-600 rounded transition-colors btn-press cursor-pointer"
                              aria-label="تقليل الكمية"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                          )}
                          <span className="font-extrabold text-sm text-[#0D261C] px-1 font-mono">
                            {oi.quantity}
                          </span>
                          {!waiterMode && (
                            <button
                              onClick={() => updateQuantity(oi.item.id, 1)}
                              className="p-1 text-[#524B45] hover:text-[#184E37] rounded transition-colors btn-press cursor-pointer"
                              aria-label="زيادة الكمية"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </div>

                      {!waiterMode && (
                        <div className="mt-2.5 pt-2 border-t border-[#F0EAE1] flex justify-end">
                          <button
                            onClick={() => removeItem(oi.item.id)}
                            className="text-[11px] text-red-600 hover:text-red-800 hover:underline flex items-center gap-1 cursor-pointer"
                          >
                            <Trash2 className="w-3 h-3" />
                            <span>حذف من القائمة</span>
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Additional Table & Notes Info */}
                <div className="pt-4 border-t border-[#E2DACD] space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-[#0D261C] mb-1">
                      رقم الطاولة أو مكان الجلوس (اختياري):
                    </label>
                    <input
                      type="text"
                      value={tableNumber}
                      onChange={(e) => setTableNumber(e.target.value)}
                      placeholder="مثال: طاولة 4، ركن المذاكرة، أو تيك أواي بالسيارة"
                      className="w-full text-xs p-3 bg-white border border-[#E2DACD] rounded-lg focus:border-[#D49B4B] focus:ring-1 focus:ring-[#D49B4B] focus:outline-none transition-all shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0D261C] mb-1">
                      ملاحظات خاصة (سكر خفيف، بدون ثلج، شوت إضافي):
                    </label>
                    <input
                      type="text"
                      value={customerNotes}
                      onChange={(e) => setCustomerNotes(e.target.value)}
                      placeholder="أي تفضيل تحبه في تحضير مشروبك..."
                      className="w-full text-xs p-3 bg-white border border-[#E2DACD] rounded-lg focus:border-[#D49B4B] focus:ring-1 focus:ring-[#D49B4B] focus:outline-none transition-all shadow-inner"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Drawer Footer Actions with Vibrant WhatsApp CTA */}
          {orderItems.length > 0 && (
            <div className="p-5 bg-white border-t border-[#E2DACD] space-y-3 shadow-lg">
              <div className="flex items-center justify-between text-xs text-[#524B45]">
                <span className="font-medium">إجمالي الأصناف المختارة:</span>
                <span className="font-black text-base text-[#0D261C] font-mono">
                  {totalItemsCount}
                </span>
              </div>

              {/* Send Order to WhatsApp */}
              <button
                onClick={handleSendWhatsApp}
                className="w-full py-3.5 bg-[#184E37] hover:bg-[#123e2b] text-[#F4EFE6] font-extrabold text-sm rounded-lg transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-glow-amber cursor-pointer btn-press shimmer-container"
              >
                <Send className="w-4 h-4 text-[#D49B4B]" />
                <span>إرسال الطلب عبر واتساب</span>
              </button>

              {/* Show Waiter Quick Button */}
              <button
                onClick={() => setWaiterMode(!waiterMode)}
                className="w-full py-2.5 bg-[#F4EFE6] hover:bg-[#EAE3D5] text-[#0D261C] font-bold text-xs border border-[#E2DACD] rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer btn-press"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#855414]" />
                <span>{waiterMode ? 'العودة للشاشة العادية' : 'عرض للنادل مباشرة على الطاولة'}</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
