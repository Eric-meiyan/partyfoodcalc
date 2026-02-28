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
      <header className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 text-white py-16 md:py-24 px-4 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute top-20 right-10 w-60 h-60 bg-amber-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-80 h-40 bg-orange-400/20 rounded-full blur-3xl" />
          {/* Floating food emojis */}
          <div className="absolute top-8 left-[10%] text-4xl opacity-20 animate-bounce" style={{animationDuration:'3s'}}>🍕</div>
          <div className="absolute top-16 right-[15%] text-3xl opacity-20 animate-bounce" style={{animationDuration:'4s',animationDelay:'1s'}}>🍗</div>
          <div className="absolute bottom-12 left-[20%] text-3xl opacity-20 animate-bounce" style={{animationDuration:'3.5s',animationDelay:'0.5s'}}>🌮</div>
          <div className="absolute bottom-8 right-[25%] text-4xl opacity-20 animate-bounce" style={{animationDuration:'4.5s',animationDelay:'2s'}}>🍔</div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            ✨ Free — No signup required
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-5 leading-tight tracking-tight">
            Party Food<br />Calculator
          </h1>
          <p className="text-xl md:text-2xl opacity-90 font-medium max-w-2xl mx-auto">
            Never run out of food or waste money again. Calculate exact portions for any party in seconds.
          </p>
          <div className="flex items-center justify-center gap-6 mt-8 text-sm opacity-80">
            <span className="flex items-center gap-1.5">✓ 10+ food types</span>
            <span className="flex items-center gap-1.5">✓ Shopping list</span>
            <span className="flex items-center gap-1.5">✓ 100% free</span>
          </div>
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
      <footer className="bg-gray-900 text-white py-12 px-4 mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-extrabold text-lg mb-3">🎉 PartyFoodCalc</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                The easiest way to calculate how much food you need for any party. Free, fast, and accurate.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-sm uppercase tracking-wide text-gray-400 mb-3">Calculators</h3>
              <div className="grid grid-cols-2 gap-2">
                <a href="/pizza-calculator" className="text-gray-300 hover:text-orange-400 text-sm transition-colors">Pizza</a>
                <a href="/chicken-wings-calculator" className="text-gray-300 hover:text-orange-400 text-sm transition-colors">Wings</a>
                <a href="/taco-bar-calculator" className="text-gray-300 hover:text-orange-400 text-sm transition-colors">Taco Bar</a>
                <a href="/bbq-calculator" className="text-gray-300 hover:text-orange-400 text-sm transition-colors">BBQ</a>
                <a href="/burger-calculator" className="text-gray-300 hover:text-orange-400 text-sm transition-colors">Burgers</a>
                <a href="/drinks-calculator" className="text-gray-300 hover:text-orange-400 text-sm transition-colors">Drinks</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-sm uppercase tracking-wide text-gray-400 mb-3">Links</h3>
              <div className="flex flex-col gap-2">
                <a href="/about" className="text-gray-300 hover:text-orange-400 text-sm transition-colors">About Us</a>
                <a href="/privacy" className="text-gray-300 hover:text-orange-400 text-sm transition-colors">Privacy Policy</a>
                <a href="/terms" className="text-gray-300 hover:text-orange-400 text-sm transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} PartyFoodCalc.com — More from us: <a href="https://howmuchfiber.com" target="_blank" rel="noopener" className="text-gray-400 hover:text-orange-400">HowMuchFiber</a> · <a href="https://iqgame.online" target="_blank" rel="noopener" className="text-gray-400 hover:text-orange-400">IQGame</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
