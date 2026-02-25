'use client';

import { useState } from 'react';
import Calculator from '@/components/Calculator';
import Results from '@/components/Results';
import ShoppingList from '@/components/ShoppingList';
import ContentSection, { FAQ, RelatedCalculators } from '@/components/ContentSection';
import { calculatePortions } from '@/lib/foodData';

export default function TacoBarCalculator() {
  const [results, setResults] = useState<any[]>([]);
  const [totalGuests, setTotalGuests] = useState(0);
  const [showShoppingList, setShowShoppingList] = useState(false);

  const handleCalculate = (adults: number, kids: number, partyType: string, duration: number) => {
    setTotalGuests(adults + kids);
    const tacos = calculatePortions(adults, kids, partyType, duration, 'tacos', true);
    const meatLbs = Math.ceil(tacos * 2) / 16; // 2 oz per taco

    setResults([
      { name: 'Tacos', emoji: '🌮', amount: Math.ceil(tacos), unit: 'tacos', details: '2-3 per person' },
      { name: 'Ground Beef/Chicken', emoji: '🥩', amount: Math.ceil(meatLbs * 10) / 10, unit: 'lbs', details: '2 oz per taco' },
      { name: 'Taco Shells', emoji: '🌮', amount: Math.ceil(tacos / 12), unit: 'boxes', details: '12 shells per box' },
      { name: 'Tortillas', emoji: '🫓', amount: Math.ceil(tacos / 10), unit: 'packs', details: 'As alternative to shells' },
      { name: 'Shredded Cheese', emoji: '🧀', amount: Math.ceil(totalGuests / 4), unit: 'lbs', details: '8 oz bags' },
      { name: 'Lettuce', emoji: '🥬', amount: Math.ceil(totalGuests / 8), unit: 'heads' },
      { name: 'Tomatoes', emoji: '🍅', amount: Math.ceil(totalGuests / 5), unit: 'tomatoes' },
      { name: 'Sour Cream', emoji: '🥛', amount: Math.ceil(totalGuests / 8), unit: 'containers', details: '16 oz each' },
      { name: 'Salsa', emoji: '🫙', amount: Math.ceil(totalGuests / 8), unit: 'jars', details: '16 oz each' },
      { name: 'Guacamole', emoji: '🥑', amount: Math.ceil(totalGuests / 10), unit: 'containers' },
    ]);
    setShowShoppingList(false);
  };

  const faqs = [
    { q: "How many tacos per person for a taco bar?", a: "Plan for 2-3 tacos per person on average. Adults typically eat 2-3 tacos, while kids eat 1-2. If tacos are the only main course and you have hearty eaters, plan for 3-4 per person. Always round up to avoid running out!" },
    { q: "How much meat do I need for a taco bar?", a: "Plan for 4 ounces (1/4 lb) of cooked meat per person. Since meat loses about 25% of its weight when cooked, buy 5-6 ounces raw meat per person. For 20 people, that's about 7-8 lbs of raw ground beef or chicken." },
    { q: "What toppings should I include in a taco bar?", a: "Essential toppings: shredded cheese, lettuce, tomatoes, sour cream, and salsa. Popular additions: guacamole, jalapeños, cilantro, lime wedges, black beans, corn, and hot sauce. Set up toppings in order: meat, cheese, lettuce, tomatoes, then wet toppings last." },
    { q: "Should I serve hard or soft tacos?", a: "Offer both! Plan for 60% soft tortillas and 40% hard shells. Soft tortillas are more popular with adults, while kids often prefer crunchy shells. Having both options ensures everyone is happy and adds variety to your taco bar." },
    { q: "Can I prep taco bar ingredients ahead of time?", a: "Yes! Cook and season meat up to 24 hours ahead and reheat before serving. Chop vegetables and grate cheese the morning of the party. Set up toppings 1-2 hours before guests arrive. Keep hot ingredients hot (165°F+) and cold ingredients cold (40°F or below)." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-green-50">
      <header className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <a href="/" className="text-yellow-100 hover:text-white transition-colors">← Back to Main Calculator</a>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">🌮 Taco Bar Calculator</h1>
          <p className="text-xl md:text-2xl opacity-90 text-center">Build the perfect taco bar for your party</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <Calculator onCalculate={handleCalculate} />
        {results.length > 0 && (
          <>
            <Results results={results} totalGuests={totalGuests} onGenerateShoppingList={() => setShowShoppingList(true)} />
            {showShoppingList && <ShoppingList items={results} />}
          </>
        )}

        <ContentSection title="How Many Tacos Per Person?">
          <p className="mb-4">Taco bars are perfect for parties - interactive, customizable, and loved by all ages. The key is having enough meat, shells, and toppings without going overboard. Our taco bar calculator does the math for you based on guest count and party type.</p>
          <p className="mb-4">On average, plan for <strong>2-3 tacos per adult</strong> and <strong>1-2 tacos per child</strong>. This assumes tacos are the main course. If you're serving other foods alongside, reduce to 1-2 tacos per person.</p>
          <h3 className="text-2xl font-bold mt-6 mb-3">Meat Quantities</h3>
          <p className="mb-4">Each taco needs about 2 ounces of meat. For 20 people eating 2.5 tacos each, that's 50 tacos × 2 oz = 100 oz = 6.25 lbs cooked meat. Buy 7-8 lbs raw to account for cooking loss.</p>
        </ContentSection>

        <ContentSection title="Tips for an Amazing Taco Bar">
          <h3 className="text-2xl font-bold mt-6 mb-3">Setting Up Your Taco Bar</h3>
          <p className="mb-4">Arrange ingredients in logical order: shells/tortillas first, then meat, cheese, lettuce, tomatoes, and wet toppings (sour cream, salsa, guacamole) last. This prevents soggy tacos and keeps the line moving efficiently.</p>
          <h3 className="text-2xl font-bold mt-6 mb-3">Protein Options</h3>
          <p className="mb-4">Ground beef is classic and economical. Seasoned shredded chicken is a lighter option. For variety, offer both or add carnitas, carne asada, or vegetarian options like seasoned black beans. Always have at least one vegetarian protein option.</p>
        </ContentSection>

        <ContentSection title="Taco Bar Calculator FAQ">
          <FAQ questions={faqs} />
        </ContentSection>

        <ContentSection title="More Party Calculators">
          <RelatedCalculators calculators={[
            { name: 'Main Calculator', url: '/', emoji: '🎉' },
            { name: 'Pizza', url: '/pizza-calculator', emoji: '🍕' },
            { name: 'BBQ', url: '/bbq-calculator', emoji: '🍖' },
            { name: 'Burgers', url: '/burger-calculator', emoji: '🍔' },
            { name: 'Chicken Wings', url: '/chicken-wings-calculator', emoji: '🍗' },
            { name: 'Drinks', url: '/drinks-calculator', emoji: '🥤' },
          ]} />
        </ContentSection>

        <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Taco Bar Calculator",
              "applicationCategory": "UtilityApplication",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
              "description": "Calculate how much food you need for a taco bar. Free taco bar calculator for parties."
            })
          }} />
      </main>

      <footer className="bg-gray-800 text-white py-8 px-4 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center gap-8 mb-4">
            <a href="/" className="hover:text-orange-300 transition-colors">Home</a>
            <a href="/about" className="hover:text-orange-300 transition-colors">About</a>
          </div>
          <p className="text-gray-400">© 2025 PartyFoodCalc.com</p>
        </div>
      </footer>
    </div>
  );
}
