'use client';

import { useState } from 'react';
import Calculator from '@/components/Calculator';
import Results from '@/components/Results';
import ContentSection, { FAQ, RelatedCalculators } from '@/components/ContentSection';

export default function SandwichCalculator() {
  const [results, setResults] = useState<any[]>([]);
  const [totalGuests, setTotalGuests] = useState(0);

  const handleCalculate = (adults: number, kids: number, partyType: string, duration: number) => {
    setTotalGuests(adults + kids);
    const sandwiches = Math.ceil(adults * 1.5 + kids * 1);
    setResults([
      { name: 'Sandwiches', emoji: '🥪', amount: sandwiches, unit: 'sandwiches', details: '1.5 per adult' },
      { name: 'Deli Meat', emoji: '🥩', amount: Math.ceil(sandwiches / 4), unit: 'lbs', details: '2-3 oz per sandwich' },
      { name: 'Cheese', emoji: '🧀', amount: Math.ceil(sandwiches / 6), unit: 'lbs' },
      { name: 'Bread/Rolls', emoji: '🥖', amount: sandwiches, unit: 'rolls' },
      { name: 'Lettuce', emoji: '🥬', amount: Math.ceil(totalGuests / 6), unit: 'heads' },
      { name: 'Tomatoes', emoji: '🍅', amount: Math.ceil(totalGuests / 4), unit: 'tomatoes' },
      { name: 'Condiments', emoji: '🫙', amount: 3, unit: 'jars', details: 'Mayo, mustard, etc.' },
    ]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50">
      <header className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <a href="/" className="text-green-100 hover:text-white block mb-4">← Back</a>
          <h1 className="text-5xl font-bold mb-4">🥪 Sandwich Platter Calculator</h1>
          <p className="text-xl">Plan the perfect sandwich spread</p>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-12">
        <Calculator onCalculate={handleCalculate} />
        {results.length > 0 && <Results results={results} totalGuests={totalGuests} />}
        
        <ContentSection title="How Many Sandwiches Per Person?">
          <p className="mb-4">For a sandwich platter, plan <strong>1.5 sandwiches per adult</strong> and <strong>1 per child</strong>. Cut full sandwiches into halves or quarters - people will take 2-3 pieces. This allows variety without waste.</p>
          <h3 className="text-2xl font-bold mt-6 mb-3">Deli Meat Quantities</h3>
          <p className="mb-4">Each sandwich needs 2-3 oz of meat. For 30 sandwiches, buy 6-7 lbs of assorted deli meats. Popular choices: turkey (40%), ham (30%), roast beef (20%), vegetarian (10%).</p>
        </ContentSection>

        <ContentSection title="Sandwich Platter Tips">
          <p className="mb-4">Offer variety: turkey, ham, roast beef, and veggie. Use quality bread - ciabatta rolls or artisan breads elevate the spread. Prep sandwiches 2-3 hours ahead, wrap tightly in plastic wrap, refrigerate. Arrange on platters 30 minutes before serving. Label with toothpick flags.</p>
        </ContentSection>

        <ContentSection title="FAQ">
          <FAQ questions={[
            { q: "How many sandwiches for 25 people?", a: "For 25 adults, prepare 35-40 sandwich halves (18-20 full sandwiches cut in half). This ensures everyone gets 1.5-2 pieces with some extras. Kids' party? Make 25-30 sandwiches." },
            { q: "Can I make sandwiches the night before?", a: "Yes, but avoid wet ingredients (tomatoes, pickles). Assemble with meat, cheese, and dry ingredients. Add lettuce and tomatoes the morning of. Wrap individually in plastic wrap or wax paper. Store in refrigerator up to 24 hours." },
            { q: "What bread is best for sandwich platters?", a: "Sub rolls, ciabatta, and croissants work great. Avoid soft white bread - it gets soggy. For variety, offer wraps alongside sandwiches. Gluten-free options are increasingly important." },
          ]} />
        </ContentSection>

        <ContentSection title="More Calculators">
          <RelatedCalculators calculators={[
            { name: 'Home', url: '/', emoji: '🎉' },
            { name: 'Pizza', url: '/pizza-calculator', emoji: '🍕' },
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
