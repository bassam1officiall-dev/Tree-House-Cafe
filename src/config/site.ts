export const siteConfig = {
  name: {
    en: 'Tree House Cafe',
    ar: 'تري هاوس كافيه',
  },
  description: {
    ar: 'كافيه ومنيو رقمي على طريق مصر أسيوط السريع في البدرشين بجوار فيلا شريف عناني. قهوة ومشروبات باردة وسخنة وحلويات.',
    en: 'Tree House Cafe on Badrasheen Highway, Giza. Coffee, cold and hot drinks, and desserts.',
  },
  address: {
    city: 'الجيزة',
    district: 'البدرشين',
    fullAr: 'طريق مصر أسيوط السريع، بجوار فيلا شريف عناني، البدرشين، الجيزة',
    fullEn: 'Badrasheen Highway, next to Sherif Anani Villa, Giza, Egypt',
    googleMapsUrl: 'https://maps.google.com/?q=Tree+House+Cafe+البدرشين+الطريق+السريع+الجيزة',
  },
  hours: {
    ar: 'يومياً: من 8:00 صباحاً حتى 2:00 بعد منتصف الليل',
    en: 'Daily: 8:00 AM to 2:00 AM',
    noteAr: 'شغالين طوال أيام الأسبوع',
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
      titleAr: 'قعدة صحاب',
      titleEn: 'Friends & Groups',
      descriptionAr: 'ترابيزات ومساحة واسعة تناسب اللمات والصحاب في أي وقت.',
    },
    {
      id: 'work',
      titleAr: 'شغل ومذاكرة',
      titleEn: 'Work & Study',
      descriptionAr: 'مكان هادي بفيش كهرباء وإضاءة مريحة لو محتاج تركز.',
    },
    {
      id: 'takeaway',
      titleAr: 'تيك أواي على الطريق',
      titleEn: 'Highway Takeaway',
      descriptionAr: 'موقعنا على السريع، اطلب قهوتك وخدها معاك في طريقك.',
    },
    {
      id: 'night',
      titleAr: 'سهرة بالليل',
      titleEn: 'Late Night',
      descriptionAr: 'قعدة رايقة بالليل مع إضاءة هادية ومشروبك المفضل.',
    },
  ],
};
