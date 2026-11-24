export type CategoryId =
  | 'coffee'
  | 'hot-beverages'
  | 'iced-coffee'
  | 'frappe'
  | 'milkshakes'
  | 'fresh-juice'
  | 'soft-drinks'
  | 'desserts'
  | 'water';

export interface Category {
  id: CategoryId;
  nameAr: string;
  nameEn: string;
  count: number;
  descriptionAr: string;
}

export interface MenuItem {
  id: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  category: CategoryId;
  price: number | null; // null displays "السعر بالكافيه"
  isPopular?: boolean;
  isSpecialty?: boolean;
  temperature?: 'hot' | 'cold' | 'ambient';
  tags?: string[];
  options?: string[]; // e.g., ["حليب نباتي", "شوت إضافي", "سكر دايت"]
}

export interface OrderItem {
  item: MenuItem;
  quantity: number;
  selectedOption?: string;
  note?: string;
}

export interface FilterState {
  searchQuery: string;
  activeCategory: CategoryId | 'all';
  temperature?: 'all' | 'hot' | 'cold';
}
