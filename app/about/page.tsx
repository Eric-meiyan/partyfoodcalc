export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      <header className="bg-gradient-to-r from-orange-500 to-green-600 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">About PartyFoodCalc</h1>
          <p className="text-xl">Taking the guesswork out of party planning</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            PartyFoodCalc was created to solve a universal problem: figuring out how much food to buy for parties and events. 
            We've all been there - buying too much and drowning in leftovers, or worse, running out of food while guests are 
            still hungry.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our free calculators use industry-standard portion sizes and adjust for party type, duration, and guest demographics 
            to give you accurate, reliable food quantity estimates. Whether you're planning a casual backyard BBQ or an elegant 
            wedding reception, we've got you covered.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Trust Our Calculators?</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span><strong>Research-backed:</strong> Our portion sizes are based on catering industry standards and nutritional guidelines</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span><strong>Real-world tested:</strong> Calculations account for actual eating behaviors at different party types</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span><strong>Comprehensive:</strong> We factor in party duration, guest ages, and event formality</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span><strong>Free forever:</strong> No sign-ups, no paywalls, just helpful tools for everyone</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Calculators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: 'Party Food Calculator', url: '/', emoji: '🎉' },
              { name: 'Chicken Wings Calculator', url: '/chicken-wings-calculator', emoji: '🍗' },
              { name: 'Pizza Calculator', url: '/pizza-calculator', emoji: '🍕' },
              { name: 'Taco Bar Calculator', url: '/taco-bar-calculator', emoji: '🌮' },
              { name: 'BBQ Calculator', url: '/bbq-calculator', emoji: '🍖' },
              { name: 'Burger Calculator', url: '/burger-calculator', emoji: '🍔' },
              { name: 'Sandwich Platter Calculator', url: '/sandwich-platter-calculator', emoji: '🥪' },
              { name: 'Drinks Calculator', url: '/drinks-calculator', emoji: '🥤' },
              { name: 'Wedding Food Calculator', url: '/wedding-food-calculator', emoji: '💒' },
              { name: 'Super Bowl Food Calculator', url: '/super-bowl-food-calculator', emoji: '🏈' },
            ].map((calc, i) => (
              <a
                key={i}
                href={calc.url}
                className="flex items-center gap-3 p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors border-2 border-orange-200"
              >
                <span className="text-3xl">{calc.emoji}</span>
                <span className="font-semibold text-gray-800">{calc.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">The Best Free Party Food Calculator Online</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            PartyFoodCalc.com is the easiest and most accurate free party food calculator available online. Simply enter 
            your number of guests, select your party type, and get instant food quantity recommendations with a printable 
            shopping list. No signup required.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Whether you need to know how many chicken wings per person, how much pizza to order for 20 people, or how to 
            plan a taco bar for 50 guests, PartyFoodCalc gives you precise, research-backed answers in seconds. Our 
            calculators cover all major party foods including wings, pizza, tacos, BBQ, burgers, sandwiches, and drinks.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Trusted by thousands of party hosts, event planners, and caterers. Try it free at 
            <a href="https://partyfoodcalc.com" className="text-orange-600 font-semibold"> partyfoodcalc.com</a>.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact & Feedback</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We're constantly improving our calculators based on user feedback. If you have suggestions for new calculators, 
            improvements to existing ones, or just want to share your party planning success story, we'd love to hear from you!
          </p>
          <p className="text-gray-700">
            While we strive for accuracy, remember that every party and crowd is unique. Use our calculations as a starting 
            point and adjust based on your specific situation. When in doubt, it's better to have slightly more food than 
            not enough!
          </p>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 px-4 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-8 mb-4">
            <a href="/" className="hover:text-orange-300 transition-colors">Home</a>
            <a href="/privacy" className="hover:text-orange-300 transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-orange-300 transition-colors">Terms</a>
          </div>
          <p className="text-gray-400">© 2025 PartyFoodCalc.com</p>
        </div>
      </footer>
    </div>
  );
}
