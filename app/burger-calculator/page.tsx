'use client';

import { useState } from 'react';
import Calculator from '@/components/Calculator';
import Results from '@/components/Results';
import ContentSection, { FAQ, RelatedCalculators } from '@/components/ContentSection';

export default function BurgerCalculator() {
  const [results, setResults] = useState<any[]>([]);
  const [totalGuests, setTotalGuests] = useState(0);

  const handleCalculate = (adults: number, kids: number, partyType: string, duration: number) => {
    setTotalGuests(adults + kids);
    const burgers = Math.ceil(adults * 1.5 + kids * 1);
    setResults([
      { name: 'Burgers', emoji: '🍔', amount: burgers, unit: 'patties', details: '1.5 per adult' },
      { name: 'Ground Beef', emoji: '🥩', amount: Math.ceil(burgers * 0.33 * 10) / 10, unit: 'lbs', details: '1/3 lb patties' },
      { name: 'Buns', emoji: '🍞', amount: Math.ceil(burgers / 8), unit: 'packs', details: '8 per pack' },
      { name: 'Cheese Slices', emoji: '🧀', amount: burgers, unit: 'slices' },
      { name: 'Lettuce', emoji: '🥬', amount: Math.ceil(totalGuests / 8), unit: 'heads' },
      { name: 'Tomatoes', emoji: '🍅', amount: Math.ceil(totalGuests / 4), unit: 'tomatoes' },
      { name: 'Onions', emoji: '🧅', amount: Math.ceil(totalGuests / 5), unit: 'onions' },
      { name: 'Condiments', emoji: '🫙', amount: 3, unit: 'bottles', details: 'Ketchup, mustard, mayo' },
    ]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-red-50">
      <header className="bg-gradient-to-r from-red-600 to-yellow-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <a href="/" className="text-red-100 hover:text-white block mb-4">← Back</a>
          <h1 className="text-5xl font-bold mb-4">🍔 Burger Calculator</h1>
          <p className="text-xl">Calculate burger quantities for your cookout</p>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-12">
        <Calculator onCalculate={handleCalculate} />
        {results.length > 0 && <Results results={results} totalGuests={totalGuests} />}
        
        <ContentSection title="How Many Burgers Per Person?">
          <p className="mb-4">For a burger cookout, plan <strong>1-1.5 burgers per adult</strong> and <strong>1 burger per child</strong>. Big eaters might have 2 burgers, while smaller appetites stick to 1. It's always better to have extra patties than run short.</p>
          <h3 className="text-2xl font-bold mt-6 mb-3">Patty Sizes</h3>
          <p className="mb-4">Standard burger patties are 1/4 lb (4 oz) or 1/3 lb (5.3 oz). Quarter-pounders are economical and satisfying. Third-pounders feel more premium. For 20 adults at 1.5 burgers each, you need 30 patties = 7.5-10 lbs ground beef.</p>
        </ContentSection>

        <ContentSection title="Burger Party Tips">
          <p className="mb-4">Buy 80/20 ground beef for juicy burgers. Don't over-work the meat. Make patties slightly larger than buns (they shrink). Create a dimple in the center to prevent puffing. Toast buns on the grill. Set up a toppings bar so guests customize their burgers.</p>
        </ContentSection>

        <ContentSection title="FAQ">
          <FAQ questions={[
            { q: "What size burger patties should I make?", a: "1/4 lb (4 oz) patties are standard and economical. 1/3 lb (5.3 oz) patties feel more substantial. For kids, make 2-3 oz slider-sized patties. Pre-form patties 2-4 hours ahead and refrigerate." },
            { q: "How many pounds of ground beef for 20 people?", a: "For 20 adults, buy 8-10 lbs of ground beef. This makes 30-40 quarter-pound patties (1.5 per person). Always round up - leftover patties freeze well for up to 3 months." },
            { q: "What toppings should I offer?", a: "Must-haves: cheese, lettuce, tomato, onion, pickles, ketchup, mustard, mayo. Popular additions: bacon, avocado, jalapeños, BBQ sauce, sautéed mushrooms. Offer both raw and grilled onions." },
          ]} />
        </ContentSection>

        <ContentSection title="More Calculators">
          <RelatedCalculators calculators={[
            { name: 'Home', url: '/', emoji: '🎉' },
            { name: 'BBQ', url: '/bbq-calculator', emoji: '🍖' },
            { name: 'Chicken Wings', url: '/chicken-wings-calculator', emoji: '🍗' },
          ]} />
        </ContentSection>
      </main>
      <footer className="bg-gray-800 text-white py-8 px-4 mt-16 text-center">
        <p className="text-gray-400">© 2025 PartyFoodCalc.com</p>
      </footer>
    </div>
  );
}
