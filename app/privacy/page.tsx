export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-gray-300">Last updated: February 25, 2025</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-md p-8 prose prose-lg max-w-none">
          <h2>Introduction</h2>
          <p>
            PartyFoodCalc.com ("we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, 
            use, and protect your information when you use our website and calculators.
          </p>

          <h2>Information We Collect</h2>
          <h3>Information You Provide</h3>
          <p>
            Our calculators work entirely in your browser. We do not collect or store the numbers you enter into our 
            calculators (number of guests, party type, etc.). This information never leaves your device.
          </p>

          <h3>Automatically Collected Information</h3>
          <p>Like most websites, we may collect:</p>
          <ul>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring website addresses</li>
            <li>IP address (anonymized)</li>
          </ul>

          <h2>How We Use Information</h2>
          <p>We use collected information to:</p>
          <ul>
            <li>Improve our calculators and website functionality</li>
            <li>Understand how visitors use our site</li>
            <li>Detect and prevent technical issues</li>
            <li>Analyze traffic patterns and trends</li>
          </ul>

          <h2>Cookies and Tracking</h2>
          <p>
            We may use cookies and similar tracking technologies to improve your experience. You can control cookies 
            through your browser settings. Disabling cookies may affect some website functionality.
          </p>

          <h2>Third-Party Services</h2>
          <p>We may use third-party services such as:</p>
          <ul>
            <li>Google Analytics for website analytics</li>
            <li>Advertising networks (if applicable)</li>
          </ul>
          <p>These services have their own privacy policies governing how they use information.</p>

          <h2>Data Security</h2>
          <p>
            We implement reasonable security measures to protect information. However, no internet transmission is 100% 
            secure. We cannot guarantee absolute security.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            Our website is not directed to children under 13. We do not knowingly collect information from children under 13.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access information we have about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt out of certain data collection</li>
          </ul>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Changes will be posted on this page with an updated revision date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us through our website.
          </p>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 px-4 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-8 mb-4">
            <a href="/" className="hover:text-orange-300 transition-colors">Home</a>
            <a href="/about" className="hover:text-orange-300 transition-colors">About</a>
            <a href="/terms" className="hover:text-orange-300 transition-colors">Terms</a>
          </div>
          <p className="text-gray-400">© 2025 PartyFoodCalc.com</p>
        </div>
      </footer>
    </div>
  );
}
