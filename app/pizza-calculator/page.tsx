'use client';

import { useState } from 'react';
import Calculator from '@/components/Calculator';
import Results from '@/components/Results';
import ShoppingList from '@/components/ShoppingList';
import ContentSection, { FAQ, RelatedCalculators } from '@/components/ContentSection';
import { calculatePortions } from '@/lib/foodData';

export default function PizzaCalculator() {
  const [results, setResults] = useState<any[]>([]);
  const [totalGuests, setTotalGuests] = useState(0);
  const [showShoppingList, setShowShoppingList] = useState(false);

  const handleCalculate = (adults: number, kids: number, partyType: string, duration: number) => {
    setTotalGuests(adults + kids);

    const pizzaSlices = calculatePortions(adults, kids, partyType, duration, 'pizza', true);
    const numPizzas = Math.ceil(pizzaSlices / 8);

    const calculated = [
      {
        name: 'Pizzas Needed',
        emoji: '🍕',
        amount: numPizzas,
        unit: 'large pizzas',
        details: `${Math.ceil(pizzaSlices)} slices total (8 slices per pizza)`
      },
      {
        name: 'Cheese Pizza',
        emoji: '🧀',
        amount: Math.ceil(numPizzas * 0.4),
        unit: 'pizzas',
        details: 'Most popular choice'
      },
      {
        name: 'Pepperoni Pizza',
        emoji: '🍕',
        amount: Math.ceil(numPizzas * 0.3),
        unit: 'pizzas'
      },
      {
        name: 'Veggie/Other',
        emoji: '🥦',
        amount: Math.ceil(numPizzas * 0.3),
        unit: 'pizzas',
        details: 'Supreme, Hawaiian, etc.'
      },
      {
        name: 'Paper Plates',
        emoji: '🍽️',
        amount: totalGuests * 2,
        unit: 'plates'
      },
      {
        name: 'Napkins',
        emoji: '🧻',
        amount: totalGuests * 3,
        unit: 'napkins'
      }
    ];

    setResults(calculated);
    setShowShoppingList(false);
  };

  const relatedCalculators = [
    { name: 'Main Calculator', url: '/', emoji: '🎉' },
    { name: 'Chicken Wings', url: '/chicken-wings-calculator', emoji: '🍗' },
    { name: 'Taco Bar', url: '/taco-bar-calculator', emoji: '🌮' },
    { name: 'BBQ', url: '/bbq-calculator', emoji: '🍖' },
    { name: 'Burgers', url: '/burger-calculator', emoji: '🍔' },
    { name: 'Drinks', url: '/drinks-calculator', emoji: '🥤' },
    { name: 'Super Bowl', url: '/super-bowl-food-calculator', emoji: '🏈' },
    { name: 'Wedding', url: '/wedding-food-calculator', emoji: '💒' },
  ];

  const faqs = [
    {
      q: "How many slices of pizza per person should I order?",
      a: "The general rule is 2-3 slices per adult and 2 slices per child for a meal. If pizza is just an appetizer or there are other food options, 1-2 slices per person is sufficient. Teenagers and hungry adults might eat 3-4 slices."
    },
    {
      q: "How many pizzas do I need for 20 people?",
      a: "For 20 adults, order 8-10 large pizzas (assuming 8 slices per pizza and 3 slices per person). If some guests are children or you're serving other foods, you can reduce this to 6-8 pizzas. Always round up to ensure you have enough!"
    },
    {
      q: "What size pizza should I order for a party?",
      a: "Large pizzas (14-16 inches, 8 slices) are the most economical for parties. They provide more slices per dollar than medium or small pizzas. For very large parties, consider extra-large pizzas if available. Avoid ordering many small pizzas - it's more expensive and creates more waste."
    },
    {
      q: "What pizza flavors should I order?",
      a: "A safe mix is 40% cheese (most popular), 30% pepperoni, and 30% variety (supreme, veggie, Hawaiian, etc.). Always have at least one vegetarian option. For kids' parties, stick primarily to cheese and pepperoni. For adult parties, you can be more adventurous with specialty flavors."
    },
    {
      q: "Should I order more pizza than the calculator suggests?",
      a: "If your crowd is known for big appetites, add 1-2 extra pizzas. Pizza keeps well and makes great leftovers. Running out of food is worse than having extras. Consider adding 15-20% more if: it's a Super Bowl party, mostly teenagers, or pizza is the only food."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-yellow-50">
      <header className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <a href="/" className="text-red-100 hover:text-white transition-colors">← Back to Main Calculator</a>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            🍕 Pizza Calculator
          </h1>
          <p className="text-xl md:text-2xl opacity-90 text-center">
            Calculate how much pizza you need for your party
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

        <ContentSection title="How Much Pizza Per Person?">
          <p className="mb-4">
            Pizza is the ultimate party food - easy to order, universally loved, and no cooking required. But ordering 
            the right amount can be tricky. Order too little and guests go hungry. Order too much and you're eating 
            leftover pizza for a week (though is that really a problem?).
          </p>

          <h3 className="text-2xl font-bold mt-6 mb-3">The Basic Formula</h3>
          <p className="mb-4">
            For a standard large pizza with 8 slices, plan for each adult to eat <strong>2-3 slices</strong> if it's 
            the main meal. Kids typically eat <strong>2 slices</strong>. If pizza is just part of a larger spread 
            with other foods, reduce to 1-2 slices per person.
          </p>

          <h3 className="text-2xl font-bold mt-6 mb-3">Quick Reference Guide</h3>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li><strong>10 people:</strong> 4-5 large pizzas</li>
            <li><strong>20 people:</strong> 8-10 large pizzas</li>
            <li><strong>30 people:</strong> 12-15 large pizzas</li>
            <li><strong>50 people:</strong> 19-25 large pizzas</li>
          </ul>

          <h3 className="text-2xl font-bold mt-6 mb-3">Adjusting for Your Crowd</h3>
          <p className="mb-4">
            <strong>Order more if:</strong> Mostly teenage boys or young adults, pizza is the only food, it's a 
            Super Bowl or sports party, or the party is longer than 3 hours.
          </p>
          <p className="mb-4">
            <strong>Order less if:</strong> Lots of young children, multiple food options available, it's a cocktail 
            party with appetizers, or it's a more formal daytime event.
          </p>

          <h3 className="text-2xl font-bold mt-6 mb-3">Pizza Sizes Explained</h3>
          <p className="mb-4">
            <strong>Small (10"):</strong> 6 slices - serves 2-3 people<br />
            <strong>Medium (12"):</strong> 8 slices - serves 3-4 people<br />
            <strong>Large (14"):</strong> 8-10 slices - serves 4-5 people<br />
            <strong>Extra Large (16"+):</strong> 10-12 slices - serves 5-7 people
          </p>
          <p className="mb-4">
            Note: Large pizzas are almost always the best value. Two medium pizzas cost more and provide fewer slices 
            than one large pizza.
          </p>
        </ContentSection>

        <ContentSection title="Tips for Ordering Party Pizza">
          <h3 className="text-2xl font-bold mt-6 mb-3">Choosing Flavors</h3>
          <p className="mb-4">
            The golden rule: <strong>40% cheese, 30% pepperoni, 30% variety</strong>. Cheese is universally popular 
            and works for vegetarians. Pepperoni is a classic favorite. Use the remaining 30% for variety - supreme, 
            Hawaiian, BBQ chicken, veggie lovers, or meat lovers.
          </p>

          <h3 className="text-2xl font-bold mt-6 mb-3">Dietary Considerations</h3>
          <p className="mb-4">
            Always have at least one vegetarian pizza (cheese or veggie). If you know attendees are vegan, order 
            a vegan cheese option. For gluten-free needs, check if your pizzeria offers gluten-free crusts - many 
            chains now do. Label which pizzas are which so guests can easily identify their options.
          </p>

          <h3 className="text-2xl font-bold mt-6 mb-3">Timing Your Order</h3>
          <p className="mb-4">
            For parties, call ahead and schedule a delivery time - don't just order same-day during the party. 
            Large orders may take 45-90 minutes. For very large parties (50+ people), give 24-48 hours notice. 
            Some pizzerias offer discounts for bulk orders.
          </p>

          <h3 className="text-2xl font-bold mt-6 mb-3">Keeping Pizza Hot</h3>
          <p className="mb-4">
            Pizza boxes stack well and insulate. Keep pizzas closed in boxes until serving to retain heat. If needed, 
            you can keep pizzas warm in a 200°F oven (but this can make the crust tough). For long parties, consider 
            ordering in two batches - fresh hot pizza halfway through is always a hit.
          </p>

          <h3 className="text-2xl font-bold mt-6 mb-3">Don't Forget the Extras</h3>
          <p className="mb-4">
            Order sides strategically: breadsticks or garlic bread are great starters while you wait for pizzas. 
            Salads add freshness and help stretch the meal. Wings or pasta can supplement if you're worried about 
            running short. Most importantly, have plenty of napkins - plan for 3 per person minimum.
          </p>
        </ContentSection>

        <ContentSection title="Pizza Calculator FAQ">
          <FAQ questions={faqs} />
        </ContentSection>

        <ContentSection title="More Party Calculators">
          <p className="mb-6">
            Planning other party foods? Check out our other calculators:
          </p>
          <RelatedCalculators calculators={relatedCalculators} />
        </ContentSection>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Pizza Calculator",
              "applicationCategory": "UtilityApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "Calculate how many pizzas you need for a party. Free pizza calculator for events and gatherings."
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
            © 2025 PartyFoodCalc.com - Pizza Calculator
          </p>
        </div>
      </footer>
    </div>
  );
}
