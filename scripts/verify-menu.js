import fs from 'fs';
import path from 'path';

// Read src/data/menu.ts and parse items
const menuFilePath = path.resolve('src/data/menu.ts');
const content = fs.readFileSync(menuFilePath, 'utf8');

// Match MENU_ITEMS section
const menuItemsStart = content.indexOf('export const MENU_ITEMS: MenuItem[] = [');
const menuItemsContent = content.slice(menuItemsStart);

// Count items by matching id: '...' inside MENU_ITEMS
const idMatches = menuItemsContent.match(/id:\s*['"]([^'"]+)['"]/g);
const ids = idMatches ? idMatches.map(m => m.replace(/id:\s*['"]/, '').replace(/['"]/, '')) : [];


console.log(`Found ${ids.length} item definitions in src/data/menu.ts`);

// Check for uniqueness
const uniqueIds = new Set(ids);
if (uniqueIds.size !== ids.length) {
  console.error(`Duplicate IDs detected! Total: ${ids.length}, Unique: ${uniqueIds.size}`);
  process.exit(1);
} else {
  console.log(`✓ All ${ids.length} IDs are completely unique!`);
}

if (ids.length !== 75) {
  console.error(`Expected 75 items, but found ${ids.length}`);
  process.exit(1);
} else {
  console.log(`✓ Exactly 75 items verified!`);
}

// Category checks
const categories = [
  { id: 'coffee', expected: 17 },
  { id: 'hot-beverages', expected: 10 },
  { id: 'iced-coffee', expected: 6 },
  { id: 'frappe', expected: 3 },
  { id: 'milkshakes', expected: 8 },
  { id: 'fresh-juice', expected: 7 },
  { id: 'soft-drinks', expected: 19 },
  { id: 'desserts', expected: 3 },
  { id: 'water', expected: 2 },
];

let sum = 0;
for (const cat of categories) {
  const catRegex = new RegExp(`category:\\s*['"]${cat.id}['"]`, 'g');
  const matches = content.match(catRegex) || [];
  console.log(`- Category "${cat.id}": ${matches.length} items (expected ${cat.expected})`);
  if (matches.length !== cat.expected) {
    console.error(`Mismatch in category ${cat.id}: got ${matches.length}, expected ${cat.expected}`);
    process.exit(1);
  }
  sum += matches.length;
}

console.log(`\n✓ Total across categories sum is ${sum} (matches 75)`);
console.log('✓ All menu checks passed 100%!');
