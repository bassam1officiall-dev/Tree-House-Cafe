import React, { useState } from 'react';
import { useOrder } from '../context/OrderContext';
import { siteConfig } from '../config/site';
import { X, Trash2, Plus, Minus, Send, CheckCircle2, UserCheck, MessageSquare } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      <div
        className="fixed inset-0 bg-[#071610]/70 backdrop-blur-sm transition-opacity duration-200"
        onClick={() => setIsDrawerOpen(false)}
      />

      <div className="fixed inset-y-0 left-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-md bg-[#FCFAF7] shadow-xl border-r border-[#E2DACD] flex flex-col justify-between text-right">
          
          <div className="p-4 sm:p-5 bg-[#0D261C] text-[#F4EFE6] flex items-center justify-between border-b border-[#1C4031]">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="p-1.5 text-[#D5E0DA] hover:text-[#D49B4B] rounded-lg transition-colors cursor-pointer"
                aria-label="إغلاق قائمة طلبي"
              >
                <X className="w-5 h-5" />
              </button>
              <div>
                <h3 id="slide-over-title" className="text-base font-bold text-[#F4EFE6]">
                  قائمة طلبي
                </h3>
                <span className="text-xs text-[#D49B4B]">
                  {totalItemsCount > 0 ? `${totalItemsCount} أصناف مختارة` : 'القائمة فارغة'}
                </span>
              </div>
            </div>

            {orderItems.length > 0 && (
              <button
                onClick={clearOrder}
                className="text-xs text-[#A3B8AE] hover:text-red-400 flex items-center gap-1 transition-colors cursor-pointer px-2 py-1 rounded"
                title="تفريغ القائمة"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>مسح الكل</span>
              </button>
            )}
          </div>

          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 custom-scrollbar">
            {orderItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#524B45]">
                <div className="w-16 h-16 rounded-full bg-[#EAE3D5] flex items-center justify-center text-[#855414] mb-3">
                  <CheckCircle2 className="w-8 h-8 text-[#855414]" />
                </div>
                <h4 className="text-base font-bold text-[#0D261C] mb-1">
                  القائمة فارغة
                </h4>
                <p className="text-xs text-[#6E665E] max-w-xs leading-relaxed mb-4">
                  تصفح المنيو واضغط زر (+) بجانب أي مشروب لإضافته هنا.
                </p>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="px-5 py-2.5 bg-[#0D261C] hover:bg-[#184E37] text-[#F4EFE6] text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  الرجوع للمنيو
                </button>
              </div>
            ) : (
              <>
                <div className="p-3 bg-[#EAE3D5] rounded-lg flex items-center justify-between text-xs">
                  <span className="text-[#0D261C] font-semibold flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-[#855414]" />
                    <span>عرض الطلب للنادل</span>
                  </span>
                  <button
                    onClick={() => setWaiterMode(!waiterMode)}
                    className="text-[#855414] font-bold underline hover:text-[#0D261C] cursor-pointer"
                  >
                    {waiterMode ? 'تعديل الكميات' : 'وضع الشاشة الكبيرة'}
                  </button>
                </div>

                <div className="space-y-2.5">
                  {orderItems.map((oi) => (
                    <div
                      key={oi.item.id}
                      className={`p-3 rounded-lg border transition-colors ${
                        waiterMode
                          ? 'bg-white border-[#184E37] shadow-sm'
                          : 'bg-white border-[#E2DACD]'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <h5 className={`font-bold text-[#0D261C] ${waiterMode ? 'text-base' : 'text-sm'}`}>
                            {oi.item.nameAr}
                          </h5>
                          <div className="font-brand-latin text-xs text-[#855414]">
                            {oi.item.nameEn}
                          </div>
                          <div className="text-[11px] text-[#6E665E] mt-0.5 font-mono">
                            {oi.item.price !== null ? `${oi.item.price} ج.م` : 'السعر بالكافيه'}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 bg-[#F4EFE6] px-2 py-1 rounded-lg border border-[#E2DACD]">
                          {!waiterMode && (
                            <button
                              onClick={() => updateQuantity(oi.item.id, -1)}
                              className="p-1 text-[#524B45] hover:text-red-600 rounded transition-colors cursor-pointer"
                              aria-label="تقليل الكمية"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                          )}
                          <span className="font-bold text-sm text-[#0D261C] px-1 font-mono">
                            {oi.quantity}
                          </span>
                          {!waiterMode && (
                            <button
                              onClick={() => updateQuantity(oi.item.id, 1)}
                              className="p-1 text-[#524B45] hover:text-[#184E37] rounded transition-colors cursor-pointer"
                              aria-label="زيادة الكمية"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </div>

                      {!waiterMode && (
                        <div className="mt-2 pt-2 border-t border-[#F0EAE1] flex justify-end">
                          <button
                            onClick={() => removeItem(oi.item.id)}
                            className="text-[11px] text-red-600 hover:underline flex items-center gap-1 cursor-pointer"
                          >
                            <Trash2 className="w-3 h-3" />
                            <span>حذف</span>
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-[#E2DACD] space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#0D261C] mb-1">
                      رقم الطاولة أو مكان الجلوس (اختياري):
                    </label>
                    <input
                      type="text"
                      value={tableNumber}
                      onChange={(e) => setTableNumber(e.target.value)}
                      placeholder="مثال: طاولة 4، تيك أواي"
                      className="w-full text-xs p-2.5 bg-white border border-[#E2DACD] rounded-lg focus:border-[#D49B4B] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0D261C] mb-1">
                      ملاحظات خاصة:
                    </label>
                    <input
                      type="text"
                      value={customerNotes}
                      onChange={(e) => setCustomerNotes(e.target.value)}
                      placeholder="مثال: سكر خفيف، بدون ثلج"
                      className="w-full text-xs p-2.5 bg-white border border-[#E2DACD] rounded-lg focus:border-[#D49B4B] focus:outline-none"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {orderItems.length > 0 && (
            <div className="p-4 bg-white border-t border-[#E2DACD] space-y-2.5">
              <div className="flex items-center justify-between text-xs text-[#524B45]">
                <span>إجمالي الأصناف:</span>
                <span className="font-bold text-sm text-[#0D261C] font-mono">
                  {totalItemsCount}
                </span>
              </div>

              <button
                onClick={handleSendWhatsApp}
                className="w-full py-3 bg-[#184E37] hover:bg-[#123e2b] text-[#F4EFE6] font-bold text-sm rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4 text-[#D49B4B]" />
                <span>إرسال الطلب عبر واتساب</span>
              </button>

              <button
                onClick={() => setWaiterMode(!waiterMode)}
                className="w-full py-2 bg-[#F4EFE6] hover:bg-[#EAE3D5] text-[#0D261C] font-semibold text-xs border border-[#E2DACD] rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#855414]" />
                <span>{waiterMode ? 'العودة للشاشة العادية' : 'عرض للنادل مباشرة'}</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
