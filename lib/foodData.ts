export interface FoodItem {
  name: string;
  emoji: string;
  servingSize: string;
  perPersonAppetizer?: number;
  perPersonMain?: number;
  perPersonKid?: number;
  unit: 'pieces' | 'lbs' | 'oz' | 'slices' | 'servings';
  category: 'protein' | 'side' | 'appetizer' | 'dessert' | 'beverage';
  adjustForDuration?: boolean;
}

export interface PartyType {
  id: string;
  name: string;
  multiplier: number;
  description: string;
}

export const partyTypes: PartyType[] = [
  { id: 'casual', name: 'Casual Party', multiplier: 1.0, description: 'Relaxed gathering with variety' },
  { id: 'bbq', name: 'BBQ Party', multiplier: 1.2, description: 'Hearty meat-focused event' },
  { id: 'formal', name: 'Formal Event', multiplier: 0.9, description: 'Elegant sit-down affair' },
  { id: 'cocktail', name: 'Cocktail Party', multiplier: 0.7, description: 'Light appetizers and drinks' },
  { id: 'kids', name: 'Kids Party', multiplier: 0.6, description: 'Kid-friendly favorites' },
  { id: 'wedding', name: 'Wedding Reception', multiplier: 1.1, description: 'Multi-course celebration' },
  { id: 'superbowl', name: 'Super Bowl Party', multiplier: 1.3, description: 'Finger foods and snacks' },
];

export const foodItems: Record<string, FoodItem> = {
  // CHICKEN WINGS
  chickenWings: {
    name: 'Chicken Wings',
    emoji: '🍗',
    servingSize: '6-10 wings (appetizer) / 12-16 wings (main)',
    perPersonAppetizer: 8,
    perPersonMain: 14,
    perPersonKid: 6,
    unit: 'pieces',
    category: 'protein',
  },
  
  // PIZZA
  pizza: {
    name: 'Pizza',
    emoji: '🍕',
    servingSize: '2-3 slices per person',
    perPersonAppetizer: 2,
    perPersonMain: 3,
    perPersonKid: 2,
    unit: 'slices',
    category: 'protein',
  },
  
  // TACOS
  tacos: {
    name: 'Tacos',
    emoji: '🌮',
    servingSize: '2-3 tacos per person',
    perPersonAppetizer: 2,
    perPersonMain: 3,
    perPersonKid: 2,
    unit: 'pieces',
    category: 'protein',
  },
  
  // BURGERS
  burgers: {
    name: 'Burgers',
    emoji: '🍔',
    servingSize: '1-1.5 burgers per person',
    perPersonMain: 1.5,
    perPersonKid: 1,
    unit: 'pieces',
    category: 'protein',
  },
  
  // BBQ MEATS
  pulledPork: {
    name: 'Pulled Pork',
    emoji: '🥩',
    servingSize: '1/3 lb per person',
    perPersonMain: 0.33,
    perPersonKid: 0.2,
    unit: 'lbs',
    category: 'protein',
  },
  
  ribs: {
    name: 'Ribs',
    emoji: '🍖',
    servingSize: '1 lb (bone-in) per person',
    perPersonMain: 1,
    perPersonKid: 0.5,
    unit: 'lbs',
    category: 'protein',
  },
  
  brisket: {
    name: 'Brisket',
    emoji: '🥩',
    servingSize: '1/3 lb per person',
    perPersonMain: 0.33,
    perPersonKid: 0.2,
    unit: 'lbs',
    category: 'protein',
  },
  
  // HOT DOGS & SAUSAGES
  hotDogs: {
    name: 'Hot Dogs',
    emoji: '🌭',
    servingSize: '2 hot dogs per person',
    perPersonMain: 2,
    perPersonKid: 1.5,
    unit: 'pieces',
    category: 'protein',
  },
  
  sausages: {
    name: 'Sausages',
    emoji: '🌭',
    servingSize: '2 sausages per person',
    perPersonMain: 2,
    perPersonKid: 1,
    unit: 'pieces',
    category: 'protein',
  },
  
  // SANDWICHES
  sandwiches: {
    name: 'Sandwiches',
    emoji: '🥪',
    servingSize: '1.5 sandwiches per person',
    perPersonMain: 1.5,
    perPersonKid: 1,
    unit: 'pieces',
    category: 'protein',
  },
  
  // SIDES
  coleslaw: {
    name: 'Coleslaw',
    emoji: '🥗',
    servingSize: '4 oz per person',
    perPersonMain: 4,
    perPersonKid: 2,
    unit: 'oz',
    category: 'side',
  },
  
  potatoSalad: {
    name: 'Potato Salad',
    emoji: '🥔',
    servingSize: '5 oz per person',
    perPersonMain: 5,
    perPersonKid: 3,
    unit: 'oz',
    category: 'side',
  },
  
  bakedBeans: {
    name: 'Baked Beans',
    emoji: '🫘',
    servingSize: '4 oz per person',
    perPersonMain: 4,
    perPersonKid: 3,
    unit: 'oz',
    category: 'side',
  },
  
  cornOnCob: {
    name: 'Corn on the Cob',
    emoji: '🌽',
    servingSize: '1 ear per person',
    perPersonMain: 1,
    perPersonKid: 1,
    unit: 'pieces',
    category: 'side',
  },
  
  macaroniCheese: {
    name: 'Mac & Cheese',
    emoji: '🧀',
    servingSize: '6 oz per person',
    perPersonMain: 6,
    perPersonKid: 5,
    unit: 'oz',
    category: 'side',
  },
  
  greenSalad: {
    name: 'Green Salad',
    emoji: '🥗',
    servingSize: '3 oz per person',
    perPersonMain: 3,
    perPersonKid: 2,
    unit: 'oz',
    category: 'side',
  },
  
  // APPETIZERS
  chips: {
    name: 'Chips & Dip',
    emoji: '🥔',
    servingSize: '2 oz per person',
    perPersonAppetizer: 2,
    perPersonKid: 1.5,
    unit: 'oz',
    category: 'appetizer',
    adjustForDuration: true,
  },
  
  veggies: {
    name: 'Veggie Tray',
    emoji: '🥕',
    servingSize: '3 oz per person',
    perPersonAppetizer: 3,
    perPersonKid: 2,
    unit: 'oz',
    category: 'appetizer',
  },
  
  // DRINKS
  water: {
    name: 'Water',
    emoji: '💧',
    servingSize: '2 bottles/glasses',
    perPersonMain: 2,
    perPersonKid: 2,
    unit: 'servings',
    category: 'beverage',
    adjustForDuration: true,
  },
  
  soda: {
    name: 'Soda',
    emoji: '🥤',
    servingSize: '2 cans/glasses',
    perPersonMain: 2,
    perPersonKid: 1.5,
    unit: 'servings',
    category: 'beverage',
    adjustForDuration: true,
  },
  
  beer: {
    name: 'Beer',
    emoji: '🍺',
    servingSize: '2-3 beers',
    perPersonMain: 2.5,
    unit: 'servings',
    category: 'beverage',
    adjustForDuration: true,
  },
  
  wine: {
    name: 'Wine',
    emoji: '🍷',
    servingSize: '2-3 glasses',
    perPersonMain: 2.5,
    unit: 'servings',
    category: 'beverage',
    adjustForDuration: true,
  },
};

export function calculatePortions(
  adults: number,
  kids: number,
  partyTypeId: string,
  durationHours: number,
  foodItemKey: string,
  isMain: boolean = true
): number {
  const item = foodItems[foodItemKey];
  if (!item) return 0;
  
  const partyType = partyTypes.find(pt => pt.id === partyTypeId);
  const multiplier = partyType?.multiplier || 1.0;
  
  const basePerAdult = isMain ? (item.perPersonMain || item.perPersonAppetizer || 0) : (item.perPersonAppetizer || item.perPersonMain || 0);
  const basePerKid = item.perPersonKid || basePerAdult * 0.5;
  
  let total = (adults * basePerAdult) + (kids * basePerKid);
  
  // Apply party type multiplier
  total *= multiplier;
  
  // Adjust for duration if applicable
  if (item.adjustForDuration && durationHours > 3) {
    const extraHours = durationHours - 3;
    total += (total * 0.2 * extraHours); // 20% more per hour after 3 hours
  }
  
  return Math.ceil(total * 10) / 10; // Round to 1 decimal
}
