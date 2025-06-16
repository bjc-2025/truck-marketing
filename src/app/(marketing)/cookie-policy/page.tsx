import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy - Trucking Marketing Experts',
  description: 'Learn about how Truck Marketing uses cookies and similar technologies to improve your browsing experience.',
  alternates: {
    canonical: 'https://truckmarketing.com.au/cookie-policy',
  },
}

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-truck-blue-900">Cookie Policy</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          Last updated: {new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-truck-blue-800">1. Introduction</h2>
          <p className="mb-4">
            Truck Marketing (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) uses cookies and similar tracking technologies on our website (truckmarketing.com.au) to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from. This Cookie Policy explains what cookies are, how we use them, and your choices regarding cookies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-truck-blue-800">2. What Are Cookies?</h2>
          <p className="mb-4">
            Cookies are small text files that are placed on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and provide information to the site owners.
          </p>
          <p className="mb-4">
            Cookies can be &ldquo;persistent&rdquo; or &ldquo;session&rdquo; cookies:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Persistent cookies:</strong> These remain on your device for a set period or until you delete them manually</li>
            <li><strong>Session cookies:</strong> These are temporary and are deleted when you close your browser</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-truck-blue-800">3. How We Use Cookies</h2>
          <p className="mb-4">
            We use cookies for the following purposes:
          </p>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-truck-blue-700">Essential Cookies</h3>
            <p className="mb-2">These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Session management</li>
              <li>Security features</li>
              <li>Load balancing</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-truck-blue-700">Performance and Analytics Cookies</h3>
            <p className="mb-2">These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Google Analytics - tracks page views, user behavior, and traffic sources</li>
              <li>Vercel Analytics - monitors site performance and user experience</li>
              <li>Hotjar - provides heatmaps and session recordings (anonymized)</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-truck-blue-700">Functionality Cookies</h3>
            <p className="mb-2">These cookies enable the website to provide enhanced functionality and personalization.</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Language preferences</li>
              <li>Region settings</li>
              <li>User preferences (e.g., font size, layout choices)</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-truck-blue-700">Marketing and Advertising Cookies</h3>
            <p className="mb-2">These cookies are used to deliver advertisements more relevant to you and your interests.</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Google Ads - for remarketing and conversion tracking</li>
              <li>Facebook Pixel - for social media advertising and analytics</li>
              <li>LinkedIn Insight Tag - for B2B marketing and analytics</li>
              <li>Microsoft Advertising - for search advertising tracking</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-truck-blue-800">4. Third-Party Cookies</h2>
          <p className="mb-4">
            In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website and deliver advertisements on and through the website. These third parties include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Google:</strong> Analytics, Ads, Tag Manager</li>
            <li><strong>Facebook:</strong> Social plugins, advertising</li>
            <li><strong>LinkedIn:</strong> Professional network integration</li>
            <li><strong>Twitter:</strong> Social sharing features</li>
            <li><strong>YouTube:</strong> Video embedding</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-truck-blue-800">5. Cookie Duration</h2>
          <p className="mb-4">
            The length of time a cookie remains on your device depends on its type:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left pb-2">Cookie Type</th>
                  <th className="text-left pb-2">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">Essential cookies</td>
                  <td className="py-2">Session or up to 1 year</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Analytics cookies</td>
                  <td className="py-2">Up to 2 years</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Marketing cookies</td>
                  <td className="py-2">Up to 1 year</td>
                </tr>
                <tr>
                  <td className="py-2">Functionality cookies</td>
                  <td className="py-2">Up to 1 year</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-truck-blue-800">6. Your Cookie Choices</h2>
          <p className="mb-4">
            You have several options for managing cookies:
          </p>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-truck-blue-700">Browser Settings</h3>
            <p className="mb-2">
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>View what cookies are stored on your device</li>
              <li>Delete individual or all cookies</li>
              <li>Block third-party cookies</li>
              <li>Block all cookies (note: this may affect website functionality)</li>
              <li>Set preferences for specific websites</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-truck-blue-700">Popular Browser Cookie Settings</h3>
            <ul className="list-disc pl-6 mb-4">
              <li><a href="https://support.google.com/chrome/answer/95647" className="text-truck-blue-600 hover:text-truck-blue-700 underline" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" className="text-truck-blue-600 hover:text-truck-blue-700 underline" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/en-au/guide/safari/sfri11471/mac" className="text-truck-blue-600 hover:text-truck-blue-700 underline" target="_blank" rel="noopener noreferrer">Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/view-and-delete-browser-history-in-microsoft-edge-00cf7943-a9e1-975a-a33d-ac10ce454ca4" className="text-truck-blue-600 hover:text-truck-blue-700 underline" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-truck-blue-700">Opt-Out Options</h3>
            <p className="mb-2">
              You can opt out of specific third-party cookies:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-truck-blue-600 hover:text-truck-blue-700 underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a></li>
              <li><a href="https://www.facebook.com/help/568137493302217" className="text-truck-blue-600 hover:text-truck-blue-700 underline" target="_blank" rel="noopener noreferrer">Facebook Ads Preferences</a></li>
              <li><a href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out" className="text-truck-blue-600 hover:text-truck-blue-700 underline" target="_blank" rel="noopener noreferrer">LinkedIn Ads Opt-out</a></li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-truck-blue-800">7. Do Not Track Signals</h2>
          <p className="mb-4">
            Some browsers offer a &ldquo;Do Not Track&rdquo; (DNT) setting that sends a signal to websites requesting not to be tracked. Currently, there is no universal standard for how websites should respond to DNT signals. Our website does not currently respond differently to DNT signals, but we respect your cookie preferences as set in your browser.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-truck-blue-800">8. Impact of Disabling Cookies</h2>
          <p className="mb-4">
            Please note that if you disable or refuse cookies:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Some parts of our website may become inaccessible or not function properly</li>
            <li>You may not be able to access certain secure areas</li>
            <li>Your user experience may be significantly degraded</li>
            <li>You may need to adjust settings each time you visit our website</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-truck-blue-800">9. Updates to This Policy</h2>
          <p className="mb-4">
            We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. The updated policy will be posted on this page with a new &ldquo;Last updated&rdquo; date. We encourage you to review this policy periodically to stay informed about our use of cookies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-truck-blue-800">10. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about our use of cookies or this Cookie Policy, please contact us:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-semibold">Truck Marketing</p>
            <p>Email: privacy@truckmarketing.com.au</p>
            <p>Phone: 1300 TRUCK MKT</p>
            <p>Address: [Your Business Address]</p>
          </div>
        </section>

        <div className="mt-12 p-6 bg-truck-blue-50 rounded-lg border border-truck-blue-200">
          <h3 className="text-lg font-semibold mb-2 text-truck-blue-900">Cookie Consent</h3>
          <p className="text-sm text-truck-blue-800">
            By continuing to use our website, you consent to our use of cookies as described in this Cookie Policy. If you do not agree to our use of cookies, please adjust your browser settings or refrain from using our website.
          </p>
        </div>
      </div>
    </div>
  )
}