'use client';

import { useState } from 'react';
import Calculator from '@/components/Calculator';
import Results from '@/components/Results';
import ContentSection, { FAQ, RelatedCalculators } from '@/components/ContentSection';
import { calculatePortions } from '@/lib/foodData';

export default function BBQCalculator() {
  const [results, setResults] = useState<any[]>([]);
  const [totalGuests, setTotalGuests] = useState(0);

  const handleCalculate = (adults: number, kids: number, partyType: string, duration: number) => {
    setTotalGuests(adults + kids);
    setResults([
      { name: 'Total Meat', emoji: '🍖', amount: Math.round((adults * 0.5 + kids * 0.25) * 10) / 10, unit: 'lbs', details: '1/2 lb per adult' },
      { name: 'Pulled Pork', emoji: '🥩', amount: Math.ceil((adults * 0.33 + kids * 0.2) * 10) / 10, unit: 'lbs' },
      { name: 'Ribs', emoji: '🍖', amount: Math.ceil(adults + kids * 0.5), unit: 'lbs', details: '1 lb bone-in per person' },
      { name: 'Brisket', emoji: '🥩', amount: Math.ceil((adults * 0.33 + kids * 0.2) * 10) / 10, unit: 'lbs' },
      { name: 'Sausages', emoji: '🌭', amount: Math.ceil(adults * 2 + kids * 1.5), unit: 'sausages' },
      { name: 'BBQ Sauce', emoji: '🫙', amount: Math.ceil(totalGuests / 10), unit: 'bottles' },
      { name: 'Coleslaw', emoji: '🥗', amount: Math.ceil(totalGuests * 4 / 16), unit: 'lbs' },
      { name: 'Baked Beans', emoji: '🫘', amount: Math.ceil(totalGuests * 4 / 16), unit: 'lbs' },
      { name: 'Corn', emoji: '🌽', amount: totalGuests, unit: 'ears' },
    ]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      <header className="bg-gradient-to-r from-red-700 to-orange-700 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <a href="/" className="text-red-100 hover:text-white transition-colors block mb-4">← Back</a>
          <h1 className="text-5xl font-bold mb-4">🍖 BBQ Calculator</h1>
          <p className="text-xl">Plan the perfect BBQ portions</p>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-12">
        <Calculator onCalculate={handleCalculate} />
        {results.length > 0 && <Results results={results} totalGuests={totalGuests} />}
        
        <ContentSection title="How Much BBQ Meat Per Person?">
          <p className="mb-4">BBQ portions can be tricky because bone-in meats weigh more but yield less. The standard rule: <strong>1/2 pound of cooked meat per person</strong> for a meat-focused BBQ with sides, or 1/3 pound if serving multiple proteins or heavy sides.</p>
          <h3 className="text-2xl font-bold mt-6 mb-3">Meat Guide</h3>
          <p className="mb-4"><strong>Pulled Pork:</strong> Buy 1/2 lb raw per person (shrinks to 1/3 lb cooked). A 10 lb pork shoulder feeds 20-25 people.<br/>
          <strong>Brisket:</strong> 1/2 lb raw per person (shrinks to 1/3 lb). Brisket has significant fat loss.<br/>
          <strong>Ribs:</strong> 1 lb per person (bone-in). Half rack per adult, 1/3 rack per child.<br/>
          <strong>Chicken:</strong> 2 pieces per person (1/2 to 3/4 lb per person).</p>
        </ContentSection>

        <ContentSection title="BBQ Party Tips">
          <p className="mb-4">Start your smoker early - brisket takes 12-16 hours, pork shoulder 8-12 hours. Ribs need 4-6 hours. Cook to temperature, not time. Rest meats before serving. Have backup proteins in case cooking takes longer than expected.</p>
        </ContentSection>

        <ContentSection title="BBQ Calculator FAQ">
          <FAQ questions={[
            { q: "How much brisket per person?", a: "Plan 1/2 lb of raw brisket per person, which yields about 1/3 lb cooked. Brisket shrinks 30-40% during cooking due to fat rendering and moisture loss. For 20 people, buy a 10-12 lb brisket." },
            { q: "How many ribs per person?", a: "One pound of bone-in ribs per person, which equals about half a rack for adults or 4-5 rib bones. Kids typically eat 1/3 rack. Ribs are filling, so if serving multiple proteins, reduce to 3-4 bones per person." },
            { q: "What sides go with BBQ?", a: "Classic BBQ sides: coleslaw, baked beans, potato salad, corn on the cob, mac and cheese, and cornbread. Plan 4-6 oz per person per side. Offer at least 3 sides for variety." },
          ]} />
        </ContentSection>

        <ContentSection title="More Calculators">
          <RelatedCalculators calculators={[
            { name: 'Home', url: '/', emoji: '🎉' },
            { name: 'Burgers', url: '/burger-calculator', emoji: '🍔' },
            { name: 'Chicken Wings', url: '/chicken-wings-calculator', emoji: '🍗' },
            { name: 'Taco Bar', url: '/taco-bar-calculator', emoji: '🌮' },
          ]} />
        </ContentSection>
      </main>
      <footer className="bg-gray-800 text-white py-8 px-4 mt-16 text-center">
        <p className="text-gray-400">© 2025 PartyFoodCalc.com</p>
      </footer>
    </div>
  );
}
