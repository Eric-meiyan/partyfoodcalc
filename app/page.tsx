'use client';

import { useState } from 'react';
import Calculator from '@/components/Calculator';
import Results from '@/components/Results';
import ShoppingList from '@/components/ShoppingList';
import ContentSection, { FAQ, RelatedCalculators } from '@/components/ContentSection';
import { calculatePortions, foodItems } from '@/lib/foodData';

interface ResultItem {
  name: string;
  emoji: string;
  amount: number;
  unit: string;
  details?: string;
}

export default function Home() {
  const [results, setResults] = useState<ResultItem[]>([]);
  const [totalGuests, setTotalGuests] = useState(0);
  const [showShoppingList, setShowShoppingList] = useState(false);

  const handleCalculate = (adults: number, kids: number, partyType: string, duration: number) => {
    setTotalGuests(adults + kids);

    const calculated: ResultItem[] = [];

    // Main proteins
    const wings = calculatePortions(adults, kids, partyType, duration, 'chickenWings', true);
    if (wings > 0) {
      calculated.push({
        name: 'Chicken Wings',
        emoji: '🍗',
        amount: wings,
        unit: 'wings',
        details: `About ${Math.ceil(wings / 10)} lbs`
      });
    }

    const pizzaSlices = calculatePortions(adults, kids, partyType, duration, 'pizza', true);
    if (pizzaSlices > 0) {
      calculated.push({
        name: 'Pizza',
        emoji: '🍕',
        amount: Math.ceil(pizzaSlices / 8),
        unit: 'pizzas',
        details: `${pizzaSlices} slices total`
      });
    }

    const burgers = calculatePortions(adults, kids, partyType, duration, 'burgers', true);
    if (burgers > 0) {
      calculated.push({
        name: 'Burgers',
        emoji: '🍔',
        amount: Math.ceil(burgers),
        unit: 'burgers',
        details: `${Math.ceil(burgers * 0.25)} lbs ground beef`
      });
    }

    const hotDogs = calculatePortions(adults, kids, partyType, duration, 'hotDogs', true);
    if (hotDogs > 0) {
      calculated.push({
        name: 'Hot Dogs',
        emoji: '🌭',
        amount: Math.ceil(hotDogs),
        unit: 'hot dogs'
      });
    }

    // BBQ meats
    const pulledPork = calculatePortions(adults, kids, partyType, duration, 'pulledPork', true);
    if (pulledPork > 0) {
      calculated.push({
        name: 'Pulled Pork',
        emoji: '🥩',
        amount: Math.round(pulledPork * 10) / 10,
        unit: 'lbs'
      });
    }

    // Sides
    const coleslaw = calculatePortions(adults, kids, partyType, duration, 'coleslaw', true);
    calculated.push({
      name: 'Coleslaw',
      emoji: '🥗',
      amount: Math.ceil(coleslaw / 16),
      unit: 'lbs',
      details: `${coleslaw} oz total`
    });

    const potatoSalad = calculatePortions(adults, kids, partyType, duration, 'potatoSalad', true);
    calculated.push({
      name: 'Potato Salad',
      emoji: '🥔',
      amount: Math.ceil(potatoSalad / 16),
      unit: 'lbs',
      details: `${potatoSalad} oz total`
    });

    const bakedBeans = calculatePortions(adults, kids, partyType, duration, 'bakedBeans', true);
    calculated.push({
      name: 'Baked Beans',
      emoji: '🫘',
      amount: Math.ceil(bakedBeans / 16),
      unit: 'lbs',
      details: `${bakedBeans} oz total`
    });

    // Beverages
    const water = calculatePortions(adults, kids, partyType, duration, 'water', true);
    calculated.push({
      name: 'Water',
      emoji: '💧',
      amount: Math.ceil(water),
      unit: 'bottles/glasses'
    });

    const soda = calculatePortions(adults, kids, partyType, duration, 'soda', true);
    calculated.push({
      name: 'Soda',
      emoji: '🥤',
      amount: Math.ceil(soda / 6),
      unit: '6-packs',
      details: `${Math.ceil(soda)} cans total`
    });

    const beer = calculatePortions(adults, kids, partyType, duration, 'beer', true);
    if (adults > 0) {
      calculated.push({
        name: 'Beer',
        emoji: '🍺',
        amount: Math.ceil(beer / 6),
        unit: '6-packs',
        details: `${Math.ceil(beer)} beers total`
      });
    }

    setResults(calculated);
    setShowShoppingList(false);
  };

  const relatedCalculators = [
    { name: 'Chicken Wings', url: '/chicken-wings-calculator', emoji: '🍗' },
    { name: 'Pizza', url: '/pizza-calculator', emoji: '🍕' },
    { name: 'Taco Bar', url: '/taco-bar-calculator', emoji: '🌮' },
    { name: 'BBQ', url: '/bbq-calculator', emoji: '🍖' },
    { name: 'Burgers', url: '/burger-calculator', emoji: '🍔' },
    { name: 'Sandwiches', url: '/sandwich-platter-calculator', emoji: '🥪' },
    { name: 'Drinks', url: '/drinks-calculator', emoji: '🥤' },
    { name: 'Wedding', url: '/wedding-food-calculator', emoji: '💒' },
  ];

  const faqs = [
    {
      q: "How accurate is this party food calculator?",
      a: "Our calculator uses industry-standard portion sizes and adjusts for party type, duration, and guest mix (adults vs. kids). It's designed to ensure you have enough food without excessive waste. We recommend buying 10-15% extra for unexpected guests or bigger appetites."
    },
    {
      q: "Should I adjust amounts based on time of day?",
      a: "Yes! Dinner parties typically need more food than afternoon gatherings. Cocktail parties (appetizers only) need less than meal-time events. Our calculator adjusts for party type, but if you're hosting during typical meal times, lean toward the higher end of recommendations."
    },
    {
      q: "How do I account for dietary restrictions?",
      a: "Plan for about 20-30% of guests to have dietary preferences. Ensure you have vegetarian options, gluten-free choices, and clearly labeled dishes. Our calculator gives you base amounts - add specialized items as needed for your specific guest list."
    },
    {
      q: "What if some guests eat more than others?",
      a: "The calculator already factors in variety in appetite by using average portion sizes. For groups with known hearty eaters (teenagers, athletes), consider increasing the totals by 20-25%. For mostly light eaters, you can reduce by 10-15%."
    },
    {
      q: "How far in advance should I prepare food?",
      a: "Most cold sides can be prepared 1-2 days ahead. Proteins are best cooked day-of or the day before and reheated. Use this calculator to create your shopping list 3-5 days before the party, shop 2-3 days ahead, and prep cold items 1-2 days before."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            🎉 Party Food Calculator
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Never run out of food (or waste money) again!
          </p>
          <p className="text-lg opacity-80 mt-2">
            Calculate exactly how much food you need for your party in seconds
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Calculator */}
        <Calculator onCalculate={handleCalculate} />

        {/* Results */}
        {results.length > 0 && (
          <>
            <Results 
              results={results} 
              totalGuests={totalGuests}
              onGenerateShoppingList={() => setShowShoppingList(true)}
            />

            {showShoppingList && (
              <ShoppingList items={results.map(r => ({ ...r, checked: false }))} />
            )}
          </>
        )}

        {/* Content Sections */}
        <ContentSection title="How to Use the Party Food Calculator">
          <p className="mb-4">
            Planning the perfect amount of food for your party can be stressful. Too little and your guests go hungry. 
            Too much and you're stuck with leftovers for weeks. Our party food calculator takes the guesswork out of party planning.
          </p>
          <p className="mb-4">
            Simply enter the number of adults and kids attending, select your party type (casual, BBQ, formal, cocktail, or kids party), 
            and specify how long the party will last. Our intelligent algorithm calculates the ideal portions for every type of food, 
            from chicken wings and pizza to sides and beverages.
          </p>
          <p className="mb-4">
            The calculator adjusts for different party types because a formal dinner requires different portions than a Super Bowl party. 
            It also factors in party duration - longer parties need more food and drinks. Kids portions are automatically reduced to 
            realistic amounts.
          </p>
          <p>
            Once you get your results, you can generate a printable shopping list with exact quantities. Perfect for stress-free party planning!
          </p>
        </ContentSection>

        <ContentSection title="Party Food Planning Tips">
          <h3 className="text-2xl font-bold mt-6 mb-3">Start with the Basics</h3>
          <p className="mb-4">
            For most parties, plan for 1.5 pounds of food per person total (including proteins, sides, and appetizers). 
            This ensures everyone gets enough without massive waste. Our calculator does this math for you automatically.
          </p>

          <h3 className="text-2xl font-bold mt-6 mb-3">Balance Your Menu</h3>
          <p className="mb-4">
            Offer variety: 2-3 protein options, 3-4 sides, and 2-3 appetizers. This ensures everyone finds something they like 
            and creates an appealing spread. Variety also means people eat moderate amounts of each item rather than loading up on one thing.
          </p>

          <h3 className="text-2xl font-bold mt-6 mb-3">Consider Your Crowd</h3>
          <p className="mb-4">
            Teenagers and young adults typically eat 20-30% more than average. Elderly guests and young children eat less. 
            Afternoon parties need less food than dinner-time events. Sports events (like Super Bowl parties) typically see higher consumption.
          </p>

          <h3 className="text-2xl font-bold mt-6 mb-3">Don't Forget Dietary Needs</h3>
          <p className="mb-4">
            Always have vegetarian options (even if you don't know of specific vegetarians attending - about 5-10% of guests will appreciate it). 
            Consider gluten-free choices and label dishes with common allergens. Having options ensures everyone feels welcome.
          </p>

          <h3 className="text-2xl font-bold mt-6 mb-3">Beverage Planning</h3>
          <p className="mb-4">
            Plan for guests to drink 2 beverages in the first hour and 1 per hour after that. Always have plenty of water available. 
            For alcoholic events, assume 30-40% of guests won't drink alcohol, so have good non-alcoholic options.
          </p>
        </ContentSection>

        <ContentSection title="Frequently Asked Questions">
          <FAQ questions={faqs} />
        </ContentSection>

        <ContentSection title="More Party Calculators">
          <p className="mb-6">
            Need help with specific foods? Check out our specialized calculators:
          </p>
          <RelatedCalculators calculators={relatedCalculators} />
        </ContentSection>

        {/* Google Adsense Placeholder */}
        {/* TODO: Add Google Adsense code here */}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center gap-8 mb-4">
            <a href="/about" className="hover:text-orange-300 transition-colors">About</a>
            <a href="/privacy" className="hover:text-orange-300 transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-orange-300 transition-colors">Terms</a>
          </div>
          <p className="text-gray-400">
            © 2025 PartyFoodCalc.com - Calculate the perfect party portions
          </p>
        </div>
      </footer>
    </div>
  );
}
