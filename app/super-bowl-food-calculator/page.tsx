'use client';

import { useState } from 'react';
import Calculator from '@/components/Calculator';
import Results from '@/components/Results';
import ContentSection, { FAQ, RelatedCalculators } from '@/components/ContentSection';
import { calculatePortions } from '@/lib/foodData';

export default function SuperBowlCalculator() {
  const [results, setResults] = useState<any[]>([]);
  const [totalGuests, setTotalGuests] = useState(0);

  const handleCalculate = (adults: number, kids: number, partyType: string, duration: number) => {
    setTotalGuests(adults + kids);
    const wings = calculatePortions(adults, kids, 'superbowl', duration, 'chickenWings', true);
    
    setResults([
      { name: 'Chicken Wings', emoji: '🍗', amount: Math.ceil(wings), unit: 'wings', details: '10-12 per person' },
      { name: 'Chips', emoji: '🥔', amount: Math.ceil(totalGuests / 3), unit: 'bags', details: '13 oz bags' },
      { name: 'Dips', emoji: '🫙', amount: Math.ceil(totalGuests / 6), unit: 'containers', details: 'Guac, salsa, queso' },
      { name: 'Pizza', emoji: '🍕', amount: Math.ceil(totalGuests / 3), unit: 'pizzas', details: '2-3 slices per person' },
      { name: 'Sliders', emoji: '🍔', amount: totalGuests * 2, unit: 'sliders', details: '2 per person' },
      { name: 'Veggie Tray', emoji: '🥕', amount: Math.ceil(totalGuests * 3 / 16), unit: 'lbs' },
      { name: 'Beer', emoji: '🍺', amount: Math.ceil(adults * 4 / 6), unit: '6-packs', details: '4 per person for 4 hours' },
      { name: 'Soda', emoji: '🥤', amount: Math.ceil(totalGuests * 3 / 6), unit: '6-packs' },
      { name: 'Ice', emoji: '🧊', amount: Math.ceil(totalGuests / 3), unit: 'bags', details: '10 lb bags' },
      { name: 'Paper Plates', emoji: '🍽️', amount: totalGuests * 3, unit: 'plates' },
      { name: 'Napkins', emoji: '🧻', amount: totalGuests * 10, unit: 'napkins', details: 'Wings are messy!' },
    ]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      <header className="bg-gradient-to-r from-blue-700 to-red-700 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <a href="/" className="text-blue-100 hover:text-white block mb-4">← Back</a>
          <h1 className="text-5xl font-bold mb-4">🏈 Super Bowl Food Calculator</h1>
          <p className="text-xl">Plan the ultimate Super Bowl party spread</p>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-12">
        <Calculator onCalculate={handleCalculate} defaultPartyType="superbowl" />
        {results.length > 0 && <Results results={results} totalGuests={totalGuests} />}
        
        <ContentSection title="How Much Food for Super Bowl Party?">
          <p className="mb-4">Super Bowl parties are all about finger foods and snacks. People eat MORE at Super Bowl parties than regular gatherings because they're grazing for 3-4 hours straight. Plan for <strong>1.5-2x normal portions</strong>.</p>
          <h3 className="text-2xl font-bold mt-6 mb-3">The Perfect Super Bowl Menu</h3>
          <p className="mb-4"><strong>Chicken Wings:</strong> 10-12 per person (main attraction)<br/>
          <strong>Pizza:</strong> 2-3 slices per person<br/>
          <strong>Sliders/Mini Burgers:</strong> 2 per person<br/>
          <strong>Chips & Dips:</strong> 1 bag of chips per 3 people, multiple dips<br/>
          <strong>Veggie/Cheese Tray:</strong> For the health-conscious (and guilt relief)</p>
        </ContentSection>

        <ContentSection title="Super Bowl Party Planning Tips">
          <p className="mb-4">Start cooking wings 2 hours before kickoff. Order pizza at halftime (fresh hot pizza beats cold wings). Set up food buffet-style so people can graze. Have lots of napkins - wings, pizza, and dips are messy. Stock drinks in coolers - fridge space runs out. Don't forget dessert - brownies, cookies, or chips & guac work great.</p>
        </ContentSection>

        <ContentSection title="FAQ">
          <FAQ questions={[
            { q: "What is the most popular Super Bowl food?", a: "Chicken wings are #1, followed by pizza, chips & dip, and sliders. Wings reign supreme - Americans eat over 1.4 billion wings on Super Bowl Sunday. Have multiple flavors: buffalo, BBQ, honey garlic, and dry rub." },
            { q: "How much beer for Super Bowl party?", a: "For a 4-hour game with 20 adults, plan 80 beers (four 6-packs per person seems like a lot, but it's a long game). Also have soda and water. Buy more than you think - you can always save extras." },
            { q: "When should I put food out?", a: "Set out chips, dips, and cold appetizers before kickoff. Serve wings hot just before or at kickoff. Order pizza for halftime. Save desserts for after halftime or end of game. Continuous food flow keeps energy up." },
          ]} />
        </ContentSection>

        <ContentSection title="More Calculators">
          <RelatedCalculators calculators={[
            { name: 'Home', url: '/', emoji: '🎉' },
            { name: 'Chicken Wings', url: '/chicken-wings-calculator', emoji: '🍗' },
            { name: 'Pizza', url: '/pizza-calculator', emoji: '🍕' },
            { name: 'Drinks', url: '/drinks-calculator', emoji: '🥤' },
          ]} />
        </ContentSection>
      </main>
      <footer className="bg-gray-800 text-white py-8 px-4 mt-16 text-center">
        <p className="text-gray-400">© 2025 PartyFoodCalc.com</p>
      </footer>
    </div>
  );
}
