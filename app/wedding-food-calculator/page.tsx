'use client';

import { useState } from 'react';
import Calculator from '@/components/Calculator';
import Results from '@/components/Results';
import ContentSection, { FAQ, RelatedCalculators } from '@/components/ContentSection';

export default function WeddingCalculator() {
  const [results, setResults] = useState<any[]>([]);
  const [totalGuests, setTotalGuests] = useState(0);

  const handleCalculate = (adults: number, kids: number, partyType: string, duration: number) => {
    setTotalGuests(adults + kids);
    setResults([
      { name: 'Total Food', emoji: '🍽️', amount: Math.ceil((adults * 1.5 + kids * 1) * 10) / 10, unit: 'lbs', details: '1.5 lbs per adult' },
      { name: 'Main Protein', emoji: '🥩', amount: Math.ceil((adults * 0.5 + kids * 0.3) * 10) / 10, unit: 'lbs', details: 'Chicken, beef, or fish' },
      { name: 'Appetizers', emoji: '🧆', amount: adults * 6 + kids * 3, unit: 'pieces', details: '6-8 per person during cocktail hour' },
      { name: 'Salad', emoji: '🥗', amount: Math.ceil(totalGuests * 3 / 16), unit: 'lbs' },
      { name: 'Side Dishes', emoji: '🥔', amount: Math.ceil(totalGuests * 6 / 16), unit: 'lbs', details: '6 oz per person, 2-3 sides' },
      { name: 'Dinner Rolls', emoji: '🥖', amount: totalGuests * 2, unit: 'rolls' },
      { name: 'Wine', emoji: '🍷', amount: Math.ceil(adults / 2), unit: 'bottles', details: '1 bottle per 2 guests' },
      { name: 'Champagne Toast', emoji: '🥂', amount: Math.ceil(totalGuests / 6), unit: 'bottles', details: '1 bottle serves 6' },
    ]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <header className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <a href="/" className="text-pink-100 hover:text-white block mb-4">← Back</a>
          <h1 className="text-5xl font-bold mb-4">💒 Wedding Food Calculator</h1>
          <p className="text-xl">Plan the perfect wedding reception menu</p>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-12">
        <Calculator onCalculate={handleCalculate} defaultPartyType="wedding" />
        {results.length > 0 && <Results results={results} totalGuests={totalGuests} />}
        
        <ContentSection title="How Much Food for a Wedding?">
          <p className="mb-4">Wedding catering requires careful planning. The standard is <strong>1.5 lbs of food per person</strong> for a full meal, including proteins, sides, salad, and bread. This ensures guests are well-fed without excessive waste.</p>
          <h3 className="text-2xl font-bold mt-6 mb-3">Cocktail Hour</h3>
          <p className="mb-4">Plan 6-8 appetizers per person during cocktail hour. Offer variety: 2-3 hot options (mini quiche, stuffed mushrooms), 2-3 cold (shrimp cocktail, caprese skewers), and a cheese/charcuterie display.</p>
          <h3 className="text-2xl font-bold mt-6 mb-3">Main Course</h3>
          <p className="mb-4">For plated dinners, 6-8 oz protein per person. Buffet-style needs more: 8-10 oz per person (people take more at buffets). Always have vegetarian and one other dietary option (vegan, gluten-free).</p>
        </ContentSection>

        <ContentSection title="Wedding Food Planning Tips">
          <p className="mb-4">Book caterer 6-12 months ahead for popular dates. Do a tasting 2-3 months before. Final headcount due 1-2 weeks before. Order 5-10% extra for vendor meals and unexpected guests. Consider late-night snacks if reception goes past 10 PM (pizza, sliders, churros).</p>
        </ContentSection>

        <ContentSection title="FAQ">
          <FAQ questions={[
            { q: "How much does wedding catering cost per person?", a: "Wedding catering averages $70-150 per person depending on region, menu, and service style. Buffet is usually less expensive than plated. Heavy appetizers are cheaper than full meals. Get quotes from 3-4 caterers to compare." },
            { q: "Buffet or plated dinner for wedding?", a: "Plated dinners feel more formal and portions are controlled. Buffets offer variety and accommodate different appetites but require 15-20% more food. Budget-wise, buffets with 2 proteins cost less than plated with choice of entrée." },
            { q: "How many hors d'oeuvres per person at a wedding?", a: "For 1-hour cocktail hour before dinner: 6-8 pieces per person. For appetizer-only reception: 12-15 pieces per person for first hour, 6-8 per additional hour. Always have substantial options, not just finger foods." },
          ]} />
        </ContentSection>

        <ContentSection title="More Calculators">
          <RelatedCalculators calculators={[
            { name: 'Home', url: '/', emoji: '🎉' },
            { name: 'Drinks', url: '/drinks-calculator', emoji: '🥤' },
            { name: 'Sandwich Platter', url: '/sandwich-platter-calculator', emoji: '🥪' },
          ]} />
        </ContentSection>
      </main>
      <footer className="bg-gray-800 text-white py-8 px-4 mt-16 text-center">
        <p className="text-gray-400">© 2025 PartyFoodCalc.com</p>
      </footer>
    </div>
  );
}
