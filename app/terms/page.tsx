export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
          <p className="text-gray-300">Last updated: February 25, 2025</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-md p-8 prose prose-lg max-w-none">
          <h2>Agreement to Terms</h2>
          <p>
            By accessing and using PartyFoodCalc.com ("the Website"), you agree to be bound by these Terms of Service. 
            If you do not agree to these terms, please do not use the Website.
          </p>

          <h2>Description of Service</h2>
          <p>
            PartyFoodCalc.com provides free online calculators to help users estimate food quantities for parties and events. 
            Our calculators are tools to assist with planning and should be used as guidelines, not absolute requirements.
          </p>

          <h2>Use of Calculators</h2>
          <p>
            Our calculators provide estimates based on industry-standard portion sizes and general assumptions. Actual food 
            needs may vary based on:
          </p>
          <ul>
            <li>Individual appetites and preferences</li>
            <li>Specific dietary requirements</li>
            <li>Cultural and regional eating habits</li>
            <li>Quality and type of food served</li>
            <li>Time of day and other factors</li>
          </ul>
          <p>
            <strong>We do not guarantee</strong> that following our calculator recommendations will result in perfect portions 
            for your specific event.
          </p>

          <h2>No Liability</h2>
          <p>
            PartyFoodCalc.com and its operators are not liable for:
          </p>
          <ul>
            <li>Running out of food or having excess food at your event</li>
            <li>Financial losses related to food purchases</li>
            <li>Food safety, quality, or preparation issues</li>
            <li>Any damages arising from use of our calculators</li>
          </ul>
          <p>
            Use our calculators at your own discretion and adjust recommendations based on your knowledge of your guests 
            and circumstances.
          </p>

          <h2>Accuracy of Information</h2>
          <p>
            We strive to provide accurate and helpful information. However, we make no warranties about the completeness, 
            reliability, or accuracy of our calculators or content. Information may become outdated.
          </p>

          <h2>User Responsibilities</h2>
          <p>You agree to:</p>
          <ul>
            <li>Use the Website for lawful purposes only</li>
            <li>Not attempt to disrupt or interfere with the Website's operation</li>
            <li>Not use automated systems to access the Website excessively</li>
            <li>Not copy or reproduce our content without permission</li>
          </ul>

          <h2>Intellectual Property</h2>
          <p>
            The content, design, calculators, and other materials on PartyFoodCalc.com are protected by copyright and 
            other intellectual property laws. You may use our calculators for personal, non-commercial purposes.
          </p>

          <h2>External Links</h2>
          <p>
            Our Website may contain links to third-party websites. We are not responsible for the content, accuracy, or 
            practices of external sites.
          </p>

          <h2>Modifications to Service</h2>
          <p>
            We reserve the right to modify, suspend, or discontinue any part of the Website at any time without notice.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We may update these Terms of Service periodically. Continued use of the Website after changes constitutes 
            acceptance of the new terms.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms are governed by applicable laws. Any disputes shall be resolved in appropriate courts.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these Terms of Service? Contact us through our website.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
            <p className="font-semibold">Disclaimer:</p>
            <p className="text-sm mt-2">
              PartyFoodCalc.com is a free tool provided "as is" for informational and planning purposes. Always use your 
              best judgment when planning food for events. When in doubt, prepare slightly more food than calculated to 
              ensure your guests are well-fed.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 px-4 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-8 mb-4">
            <a href="/" className="hover:text-orange-300 transition-colors">Home</a>
            <a href="/about" className="hover:text-orange-300 transition-colors">About</a>
            <a href="/privacy" className="hover:text-orange-300 transition-colors">Privacy</a>
          </div>
          <p className="text-gray-400">© 2025 PartyFoodCalc.com</p>
        </div>
      </footer>
    </div>
  );
}
