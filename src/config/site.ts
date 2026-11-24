export const siteConfig = {
  name: {
    en: 'Tree House Cafe',
    ar: 'تري هاوس كافيه',
  },
  tagline: {
    en: 'Where every cup feels like home',
    ar: 'حيث تشعر في كل فنجان بدفء بيتك',
  },
  subTagline: {
    en: 'Good Vibes. Great Coffee.',
    ar: 'أجواء مريحة وقهوة استثنائية',
  },
  description: {
    ar: 'ملاذك الدافئ على طريق البدرشين السريع بالجيزة. خامات معمارية مستوحاة من الصاج الأخضر، إضاءة كهرمانية مريحة، وقائمة غنية بأشهى المشروبات المحضرة بحرفية.',
    en: 'Your cozy sanctuary on Badrasheen Highway, Giza. Deep forest architectural cladding, warm amber glow, and artisanal coffee crafted for good vibes.',
  },
  address: {
    city: 'الجيزة',
    district: 'البدرشين',
    fullAr: 'الجيزة - البدرشين الطريق السريع بجوار فيلا شريف عناني',
    fullEn: 'Badrasheen Highway, next to Sherif Anani Villa, Giza, Egypt',
    googleMapsUrl: 'https://maps.google.com/?q=Tree+House+Cafe+البدرشين+الطريق+السريع+الجيزة',
  },
  hours: {
    ar: 'يومياً: ٨:٠٠ ص – ٢:٠٠ ص',
    en: 'Daily: 8:00 AM – 2:00 AM',
    noteAr: 'نستقبلكم طوال أيام الأسبوع في الصباح والمساء',
  },
  socials: {
    facebook: {
      name: 'Tree House Cafe',
      url: 'https://www.facebook.com/search/top?q=Tree%20House%20Cafe%20البدرشين',
      handle: 'Tree House Cafe',
    },
    instagram: {
      name: '@tree_house_caffe',
      url: 'https://www.instagram.com/tree_house_caffe/',
      handle: '@tree_house_caffe',
    },
    whatsapp: {
      // Editable WhatsApp phone number for orders and inquiries (international format without + or spaces for api link)
      number: '201090000000',
      display: '010 9000 0000',
      getLink: (text?: string) => {
        const baseUrl = 'https://wa.me/201090000000';
        return text ? `${baseUrl}?text=${encodeURIComponent(text)}` : baseUrl;
      },
    },
  },
  pillars: [
    {
      id: 'friends',
      titleAr: 'جلسات أصدقاء',
      titleEn: 'Coffee & Friends',
      descriptionAr: 'مساحات واسعة مصممة لضحكات الأصدقاء وأحاديث المساء الدافئة في أجواء حيوية ومريحة.',
      highlight: 'جمعات مميزة',
    },
    {
      id: 'work',
      titleAr: 'ركن هادئ للعمل والمذاكرة',
      titleEn: 'Quiet Work & Study',
      descriptionAr: 'طاولات مريحة مع شواحن وإضاءة دافئة وخدمة سريعة لتركز في مشروعك أو مذاكرتك.',
      highlight: 'تركيز وإنتاجية',
    },
    {
      id: 'takeaway',
      titleAr: 'مشروبات سريعة للسفر',
      titleEn: 'Express Highway Takeaway',
      descriptionAr: 'موقعنا المباشر على الطريق السريع يجعل طلب قهوتك الصباحية أو مشروبك المفضل سريعاً وسلساً في طريقك.',
      highlight: 'على طريقك',
    },
    {
      id: 'night',
      titleAr: 'أجواء مسائية ساحرة',
      titleEn: 'Warm Amber Evenings',
      descriptionAr: 'الوهج الكهرماني والموسيقى الهادئة يمنحانك جلسة ليلية تعيد شحن طاقتك بعد يوم طويل.',
      highlight: 'استرخاء دافئ',
    },
  ],
};
