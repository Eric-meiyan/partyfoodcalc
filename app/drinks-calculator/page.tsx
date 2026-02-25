'use client';

import { useState } from 'react';
import Calculator from '@/components/Calculator';
import Results from '@/components/Results';
import ContentSection, { FAQ, RelatedCalculators } from '@/components/ContentSection';
import { calculatePortions } from '@/lib/foodData';

export default function DrinksCalculator() {
  const [results, setResults] = useState<any[]>([]);
  const [totalGuests, setTotalGuests] = useState(0);

  const handleCalculate = (adults: number, kids: number, partyType: string, duration: number) => {
    setTotalGuests(adults + kids);
    const water = calculatePortions(adults, kids, partyType, duration, 'water', true);
    const soda = calculatePortions(adults, kids, partyType, duration, 'soda', true);
    const beer = calculatePortions(adults, kids, partyType, duration, 'beer', true);
    const wine = calculatePortions(adults, kids, partyType, duration, 'wine', true);

    setResults([
      { name: 'Water Bottles', emoji: '💧', amount: Math.ceil(water), unit: 'bottles', details: '16 oz bottles' },
      { name: 'Soda', emoji: '🥤', amount: Math.ceil(soda / 6), unit: '6-packs', details: `${Math.ceil(soda)} cans total` },
      { name: 'Beer', emoji: '🍺', amount: Math.ceil(beer / 6), unit: '6-packs', details: `${Math.ceil(beer)} beers total` },
      { name: 'Wine', emoji: '🍷', amount: Math.ceil(wine / 5), unit: 'bottles', details: '5 glasses per bottle' },
      { name: 'Ice', emoji: '🧊', amount: Math.ceil(totalGuests / 5), unit: 'lbs', details: '1 lb per 5 guests' },
      { name: 'Cups', emoji: '🥤', amount: totalGuests * 3, unit: 'cups' },
    ]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <header className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <a href="/" className="text-blue-100 hover:text-white block mb-4">← Back</a>
          <h1 className="text-5xl font-bold mb-4">🥤 Drinks Calculator</h1>
          <p className="text-xl">Calculate beverage quantities for any party</p>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-12">
        <Calculator onCalculate={handleCalculate} />
        {results.length > 0 && <Results results={results} totalGuests={totalGuests} />}
        
        <ContentSection title="How Many Drinks Per Person?">
          <p className="mb-4">The golden rule: <strong>2 drinks in the first hour, then 1 drink per hour after</strong>. For a 3-hour party with 20 people, that's 20 × (2 + 2) = 80 drinks. Always have more than you think you'll need - unopened drinks can be saved.</p>
          <h3 className="text-2xl font-bold mt-6 mb-3">Beverage Mix</h3>
          <p className="mb-4">For adult parties: 40% beer, 30% wine, 20% soda, 10% water. For all-ages: 50% soda, 30% water, 20% juice. Always overstock water - it's cheap insurance.</p>
        </ContentSection>

        <ContentSection title="Party Drink Planning Tips">
          <p className="mb-4">Buy drinks 1-2 days ahead. Chill beer and white wine 24 hours before. Buy ice day-of (1 lb per guest for drinks + coolers). Use coolers or ice-filled tubs - fridge space runs out fast. Provide both alcoholic and appealing non-alcoholic options.</p>
        </ContentSection>

        <ContentSection title="FAQ">
          <FAQ questions={[
            { q: "How much beer for a party of 30?", a: "For 30 adults at a 4-hour party, plan for 150 total drinks. If 40% choose beer, that's 60 beers = ten 6-packs. Adjust based on your crowd's preferences." },
            { q: "How many bottles of wine for 25 people?", a: "One 750ml bottle serves 5 glasses. For 25 people at a 3-hour event (100 total drinks) with 30% choosing wine, buy 6-7 bottles. Go 60% white, 40% red." },
            { q: "How much ice do I need?", a: "Plan 1 lb of ice per guest for drinks. Add 5-10 lbs per cooler for chilling. For 30 people, buy 35-40 lbs ice. Buy it day-of - it melts fast." },
          ]} />
        </ContentSection>

        <ContentSection title="More Calculators">
          <RelatedCalculators calculators={[
            { name: 'Home', url: '/', emoji: '🎉' },
            { name: 'Super Bowl', url: '/super-bowl-food-calculator', emoji: '🏈' },
            { name: 'Wedding', url: '/wedding-food-calculator', emoji: '💒' },
          ]} />
        </ContentSection>
      </main>
      <footer className="bg-gray-800 text-white py-8 px-4 mt-16 text-center">
        <p className="text-gray-400">© 2025 PartyFoodCalc.com</p>
      </footer>
    </div>
  );
}
