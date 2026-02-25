'use client';

import { useState } from 'react';
import Calculator from '@/components/Calculator';
import Results from '@/components/Results';
import ShoppingList from '@/components/ShoppingList';
import ContentSection, { FAQ, RelatedCalculators } from '@/components/ContentSection';
import { calculatePortions } from '@/lib/foodData';

export default function ChickenWingsCalculator() {
  const [results, setResults] = useState<any[]>([]);
  const [totalGuests, setTotalGuests] = useState(0);
  const [showShoppingList, setShowShoppingList] = useState(false);

  const handleCalculate = (adults: number, kids: number, partyType: string, duration: number) => {
    setTotalGuests(adults + kids);

    const wingsAsMain = calculatePortions(adults, kids, partyType, duration, 'chickenWings', true);
    const wingsAsAppetizer = calculatePortions(adults, kids, partyType, duration, 'chickenWings', false);

    const calculated = [
      {
        name: 'Chicken Wings (Main Course)',
        emoji: '🍗',
        amount: Math.ceil(wingsAsMain),
        unit: 'wings',
        details: `About ${Math.ceil(wingsAsMain / 10)} lbs`
      },
      {
        name: 'Chicken Wings (Appetizer)',
        emoji: '🍗',
        amount: Math.ceil(wingsAsAppetizer),
        unit: 'wings',
        details: `About ${Math.ceil(wingsAsAppetizer / 10)} lbs`
      },
      {
        name: 'Ranch Dressing',
        emoji: '🥣',
        amount: Math.ceil(totalGuests / 8),
        unit: 'bottles',
        details: '16 oz bottles'
      },
      {
        name: 'Blue Cheese',
        emoji: '🧀',
        amount: Math.ceil(totalGuests / 8),
        unit: 'containers',
        details: '12 oz containers'
      },
      {
        name: 'Celery Sticks',
        emoji: '🥬',
        amount: Math.ceil(totalGuests / 4),
        unit: 'bunches'
      },
      {
        name: 'Napkins',
        emoji: '🧻',
        amount: totalGuests * 5,
        unit: 'napkins',
        details: 'Wings are messy!'
      }
    ];

    setResults(calculated);
    setShowShoppingList(false);
  };

  const relatedCalculators = [
    { name: 'Main Calculator', url: '/', emoji: '🎉' },
    { name: 'Pizza', url: '/pizza-calculator', emoji: '🍕' },
    { name: 'BBQ', url: '/bbq-calculator', emoji: '🍖' },
    { name: 'Burgers', url: '/burger-calculator', emoji: '🍔' },
    { name: 'Taco Bar', url: '/taco-bar-calculator', emoji: '🌮' },
    { name: 'Drinks', url: '/drinks-calculator', emoji: '🥤' },
    { name: 'Super Bowl', url: '/super-bowl-food-calculator', emoji: '🏈' },
    { name: 'Wedding', url: '/wedding-food-calculator', emoji: '💒' },
  ];

  const faqs = [
    {
      q: "How many chicken wings per person should I plan for?",
      a: "For appetizers, plan for 6-10 wings per person. If wings are the main course, increase to 12-16 wings per person. Kids typically eat about 6 wings. Our calculator adjusts based on whether wings are the main dish or an appetizer."
    },
    {
      q: "How many pounds of chicken wings do I need?",
      a: "On average, there are about 10 wings per pound. For a main course, plan 1.2-1.6 lbs per adult and 0.6 lbs per child. For appetizers, plan 0.6-1 lb per adult. Use our calculator to get exact amounts for your party size."
    },
    {
      q: "Should I serve flats or drums, or both?",
      a: "Most people prefer a mix of both flats (wingettes) and drums (drumettes). When buying whole wings, you'll get approximately 50% flats and 50% drums naturally. If you know your guests strongly prefer one type, you can buy them separately."
    },
    {
      q: "How much sauce and dip do I need for chicken wings?",
      a: "Plan for about 2 oz of sauce per person for tossing the wings, plus extra on the side. For dips (ranch, blue cheese), plan one 16 oz bottle per 8 people. Always have more than you think you'll need - running out of ranch at a wing party is a disaster!"
    },
    {
      q: "Can I prepare chicken wings ahead of time?",
      a: "Yes! You can season and refrigerate raw wings up to 24 hours ahead. For cooked wings, prepare them 1-2 hours before and keep warm in a low oven (200°F). For best results, toss in sauce right before serving. Crispy wings don't stay crispy long, so timing matters!"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      <header className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <a href="/" className="text-orange-100 hover:text-white transition-colors">← Back to Main Calculator</a>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            🍗 Chicken Wings Calculator
          </h1>
          <p className="text-xl md:text-2xl opacity-90 text-center">
            Calculate exactly how many wings you need for your party
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <Calculator onCalculate={handleCalculate} showPartyTypeSelector={true} />

        {results.length > 0 && (
          <>
            <Results 
              results={results} 
              totalGuests={totalGuests}
              onGenerateShoppingList={() => setShowShoppingList(true)}
            />
            {showShoppingList && <ShoppingList items={results} />}
          </>
        )}

        <ContentSection title="How Many Chicken Wings Per Person?">
          <p className="mb-4">
            Chicken wings are one of the most popular party foods, but figuring out how many to serve can be tricky. 
            The amount depends on whether wings are your main dish or just an appetizer, the ages of your guests, and 
            how long the party lasts.
          </p>
          
          <h3 className="text-2xl font-bold mt-6 mb-3">Chicken Wings as an Appetizer</h3>
          <p className="mb-4">
            When serving wings as an appetizer alongside other foods, plan for <strong>6-10 wings per person</strong>. 
            If you have multiple appetizer options, you can lean toward the lower end (6-8 wings). If wings are the 
            primary appetizer, go higher (8-10 wings).
          </p>

          <h3 className="text-2xl font-bold mt-6 mb-3">Chicken Wings as Main Course</h3>
          <p className="mb-4">
            For a wing-focused meal (like a Super Bowl party or wing night), plan for <strong>12-16 wings per adult</strong>. 
            Men and teenagers often eat more - up to 20 wings. Women typically eat 10-14. Kids usually eat about 6-8 wings. 
            These numbers assume you're also serving sides like fries, coleslaw, or celery.
          </p>

          <h3 className="text-2xl font-bold mt-6 mb-3">Converting Wings to Pounds</h3>
          <p className="mb-4">
            There are approximately <strong>10 wings per pound</strong> (including both flats and drums). So for a party 
            of 20 adults where wings are the main course:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>20 adults × 14 wings average = 280 wings needed</li>
            <li>280 wings ÷ 10 wings per lb = 28 lbs of wings</li>
          </ul>

          <h3 className="text-2xl font-bold mt-6 mb-3">Accounting for Variety</h3>
          <p className="mb-4">
            If you're offering wings in multiple flavors (buffalo, BBQ, garlic parmesan, etc.), buy a bit extra as 
            people will want to try different flavors. Add 10-20% more when offering 3+ flavors.
          </p>
        </ContentSection>

        <ContentSection title="Tips for Perfect Party Wings">
          <h3 className="text-2xl font-bold mt-6 mb-3">Buying Tips</h3>
          <p className="mb-4">
            Buy whole wings and cut them yourself to save money, or purchase pre-cut party wings for convenience. 
            Frozen wings work great - they're often flash-frozen fresh and can be more economical. Thaw in the 
            refrigerator 24 hours before cooking.
          </p>

          <h3 className="text-2xl font-bold mt-6 mb-3">Cooking Methods</h3>
          <p className="mb-4">
            For crispy wings, bake at 425°F for 45-50 minutes, flipping halfway. For even crispier skin, use the 
            double-fry method: fry at 275°F for 8 minutes, rest 10 minutes, then fry at 400°F for 6-8 minutes. 
            Air fryers also work great for smaller batches.
          </p>

          <h3 className="text-2xl font-bold mt-6 mb-3">Sauce Strategy</h3>
          <p className="mb-4">
            Offer at least 2-3 sauce options: a classic buffalo, a BBQ, and something unique like honey garlic or 
            teriyaki. Keep some wings plain (unsauced) for those who prefer dry rubs or want to control their own sauce.
          </p>

          <h3 className="text-2xl font-bold mt-6 mb-3">Don't Forget the Sides</h3>
          <p className="mb-4">
            Traditional wing accompaniments include: celery and carrot sticks with ranch or blue cheese dressing, 
            french fries, coleslaw, and plenty of napkins! For every 8 guests, plan on one 16 oz bottle of ranch 
            and one container of blue cheese.
          </p>

          <h3 className="text-2xl font-bold mt-6 mb-3">Keeping Wings Hot</h3>
          <p className="mb-4">
            Wings are best served hot and fresh. If cooking ahead, keep them warm in a 200°F oven on wire racks 
            (not foil - it makes them soggy). Sauce them right before serving for maximum crispiness. For large 
            parties, cook in batches so guests always have hot, fresh wings.
          </p>
        </ContentSection>

        <ContentSection title="Chicken Wings Calculator FAQ">
          <FAQ questions={faqs} />
        </ContentSection>

        <ContentSection title="More Party Calculators">
          <p className="mb-6">
            Planning other party foods? Check out our other calculators:
          </p>
          <RelatedCalculators calculators={relatedCalculators} />
        </ContentSection>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Chicken Wings Calculator",
              "applicationCategory": "UtilityApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "Calculate how many chicken wings you need per person for your party. Free chicken wings calculator for parties, events, and gatherings."
            })
          }}
        />
      </main>

      <footer className="bg-gray-800 text-white py-8 px-4 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center gap-8 mb-4">
            <a href="/" className="hover:text-orange-300 transition-colors">Home</a>
            <a href="/about" className="hover:text-orange-300 transition-colors">About</a>
            <a href="/privacy" className="hover:text-orange-300 transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-orange-300 transition-colors">Terms</a>
          </div>
          <p className="text-gray-400">
            © 2025 PartyFoodCalc.com - Chicken Wings Calculator
          </p>
        </div>
      </footer>
    </div>
  );
}
