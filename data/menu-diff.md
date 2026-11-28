# تقرير مقارنة المنيو (Menu Diff)
**المصدر المقارن:** لوحة المنيو الرسمية المصورة بالكافيه (`data/menu-board.jpg`) مقابل ملف البيانات البرمجي (`src/data/menu.ts`).

---

## 1. الإحصائيات العامة
- **إجمالي عدد الأصناف على لوحة المنيو الرسمية:** 75 صنفاً موزعة على 9 أقسام.
- **إجمالي عدد الأصناف في ملف `src/data/menu.ts`:** 75 صنفاً موزعة على 9 أقسام.
- **الأسعار على اللوحة الأصلية:** تترك خطوط الأسعار فارغة ("السعر بالكافيه").

---

## 2. المقارنة التفصيلية حسب الأقسام

### أ. القهوة والإسبريسو (Coffee) - 17 صنفاً
* **الأصناف الموجودة على لوحة المنيو:**
  1. Turkish Coffee
  2. Turkish Coffee Double
  3. French Coffee
  4. Hazelnut Coffee
  5. Espresso
  6. Espresso Double
  7. Coffee Macchiato
  8. Coffee Macchiato Double
  9. Americano
  10. Nescafe with Milk
  11. Nescafe Black
  12. Caffe Mocha
  13. White Mocha
  14. Cappuccino
  15. Caffe Latte
  16. Spanish Latte
  17. Spanish Latte with Milk

* **أصناف موجودة على اللوحة ولكن مختلفة في `menu.ts`:**
  - `Coffee Macchiato Double` (موجود على اللوحة، بينما في `menu.ts` وضع بدلاً منه `Cortado`).
  - `Nescafe with Milk` (موجود على اللوحة، بينما في `menu.ts` وضع بدلاً منه `Flat White`).
  - `Nescafe Black` (موجود على اللوحة، بينما في `menu.ts` وضع بدلاً منه `Caramel Macchiato`).
  - `Spanish Latte with Milk` (موجود على اللوحة، بينما في `menu.ts` وضع بدلاً منه `Classic Affogato`).

---

### ب. المشروبات الساخنة (Hot Beverage) - 10 أصناف
* **الأصناف الموجودة على لوحة المنيو:**
  1. Black Tea
  2. Packet Tea
  3. Green Tea
  4. Flavored Tea
  5. Iced Tea Flavored
  6. Yansoon
  7. Karkadeh
  8. Saydleya
  9. Hot Chocolate
  10. Apple Cinnamon

* **الفروقات مع `menu.ts`:**
  - على اللوحة: `Packet Tea` و `Flavored Tea` و `Apple Cinnamon`.
  - في `menu.ts`: تم استبدالها بـ `Earl Grey Tea` و `سحلب سادة بالحليب` و `سحلب بالمكسرات والزبيب` (ملاحظة: السحلب لم يذكر بالاسم الإنجليزي الصريح على اللوحة أو يندرج كـ Hot Beverage موسمي).

---

### ج. القهوة المثلجة (Iced Coffee) - 6 أصناف
* **الأصناف على لوحة المنيو:**
  1. Iced Coffee
  2. Caramel Iced Coffee
  3. Chocolate Iced Coffee
  4. Hazelnut Iced Coffee
  5. Vanilla Iced Coffee
  6. White Iced Coffee

* **الفروقات مع `menu.ts`:**
  - على اللوحة تستخدم تسميات الكوفي المثلج بالنكهات: (Caramel, Chocolate, Hazelnut, Vanilla, White).
  - في `menu.ts` تمت تسميتها: (Iced Americano, Iced Latte, Iced Spanish Latte, Iced Caramel Latte, Iced Hazelnut Latte, Iced Caffe Mocha).

---

### د. فرابيه مثلج (Frappe) - 3 أصناف
* **الأصناف على لوحة المنيو متطابقة 100%:**
  1. Mocha Frappe
  2. White Mocha Frappe
  3. Nutella Frappe

---

### هـ. ميلك شيك (Milkshakes) - 8 أصناف
* **الأصناف على لوحة المنيو متطابقة 100%:**
  1. Vanilla Milkshake
  2. Chocolate Milkshake
  3. Strawberry Milkshake
  4. Blueberry Milkshake
  5. Banana Milkshake
  6. Mango Milkshake
  7. Oreo Milkshake
  8. Lotus Milkshake

---

### و. العصائر الطبيعية والسموذي (Fresh Juice) - 7 أصناف
* **الأصناف الموجودة على لوحة المنيو:**
  1. Mango
  2. Guava
  3. Strawberry
  4. Orange
  5. Lemon Mint
  6. Mango Smoothie
  7. **Affogato** (مدرج على لوحة المحل الورقية تحت قسم Fresh Juice)

* **الفروقات مع `menu.ts`:**
  - في `menu.ts` تم نقل `Affogato` إلى قسم القهوة، وإضافة `سموذي فراولة وتوت` بدلاً منه للحفاظ على 7 أصناف.

---

### ز. الحلويات والمخبوزات (Desserts) - 3 أصناف
* **الأصناف على لوحة المنيو متطابقة 100%:**
  1. Cinnamon (Assorted)
  2. Cookies
  3. Donuts

---

### ح. المياه المعدنية (Water) - صنفان
* **الأصناف على لوحة المنيو متطابقة 100%:**
  1. Water Small
  2. Water Large

---

### ط. المشروبات الغازية والطاقة (Soft Drinks) - 19 صنفاً
* **الأصناف الموجودة على لوحة المنيو:**
  1. Pepsi Mini
  2. Pepsi Turbo
  3. Pepsi Cans
  4. Mountain Dew Can
  5. Mountain Dew Bottle
  6. Big Cola
  7. V Cola
  8. Sting
  9. Sting Power
  10. Twist White
  11. Red Bull
  12. Bitell (Birell)
  13. Fayrouz
  14. Domty Juice
  15. Besty Juice
  16. Juhayna Mix
  17. Sun Top
  18. Nescafe Can
  19. Ice Cup

* **الفروقات مع `menu.ts`:**
  - على اللوحة تظهر أصناف معبأة صريحة (Pepsi Turbo، Mountain Dew Bottle، Big Cola، Domty Juice، Besty Juice، Juhayna Mix، Nescafe Can).
  - في `menu.ts` تم تفصيل نكهات العصائر والصودا مثل (شويبس رمان، شويبس أناناس، ميريندا برتقال، ميريندا تفاح، فيروز تفاح، فيروز أناناس).

---

## 3. التوصيات للخطوة القادمة
- اللوحة الورقية لا تحتوي على أي أسعار مطبوعة (فارغة لملئها يدوياً أو إبقائها مرنة).
- يُنصح بسؤال صاحب الكافيه قبل تعديل مسميات `menu.ts` هل يفضل مطابقة النص الإنجليزي الحرفي للوحة (مثل Pepsi Turbo و Saydleya و Mountain Dew Bottle) أم إبقاء المسميات الوصفية الحالية.
