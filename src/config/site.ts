export const siteConfig = {
  name: {
    en: 'Tree House Cafe',
    ar: 'تري هاوس كافيه',
  },
  tagline: {
    en: 'COFFEE & FRIENDS',
    bio: 'Where every cup feels like home 🌿☕',
  },
  address: {
    fullAr: 'الجيزة - البدرشين الطريق السريع بجوار فيلا شريف عناني',
    googleMapsUrl: 'https://maps.google.com/?q=Tree+House+Cafe+البدرشين+الطريق+السريع+الجيزة',
  },
  hours: {
    ar: 'يومياً من 8:00 ص حتى 2:00 ص',
    isConfirmed: false, // Pending confirmation from owner
  },
  socials: {
    facebook: {
      name: 'Tree House Cafe',
      url: 'https://www.facebook.com/profile.php?id=61591876180504&locale=ar_AR',
    },
    instagram: {
      name: '@tree_house_caffe',
      url: 'https://www.instagram.com/tree_house_caffe/',
    },
    whatsapp: {
      number: '201090000000', // Unconfirmed placeholder, order drawer flow preserved
      display: '010 9000 0000',
      getLink: (text?: string) => {
        const baseUrl = 'https://wa.me/201090000000';
        return text ? `${baseUrl}?text=${encodeURIComponent(text)}` : baseUrl;
      },
    },
  },
  pillars: [
    { id: 'friends', titleAr: 'قعدة صحاب' },
    { id: 'work', titleAr: 'شغل ومذاكرة' },
    { id: 'takeaway', titleAr: 'قهوة تيك أواي' },
  ],
};
