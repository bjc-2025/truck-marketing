import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Trucking Marketing Experts',
  description: 'Read our terms of service to understand the conditions for using our website and services.',
  alternates: {
    canonical: 'https://truckmarketing.com.au/terms-of-service',
  },
}

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-truck-blue-900">Terms of Service</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          Last updated: {new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-truck-blue-800">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using this website (truckmarketing.com.au) and the services provided by Truck Marketing (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), you accept and agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-truck-blue-800">2. Services Description</h2>
          <p className="mb-4">
            Truck Marketing provides digital marketing services specifically tailored for the trucking, logistics, and transportation industry, including but not limited to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Search Engine Optimization (SEO)</li>
            <li>Pay-Per-Click (PPC) Advertising</li>
            <li>Social Media Management</li>
            <li>Website Development and Design</li>
            <li>Content Creation and Marketing</li>
            <li>Email Marketing</li>
            <li>Digital Reputation Management</li>
            <li>Analytics and Reporting</li>
            <li>Lead Generation Services</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-truck-blue-800">3. Client Obligations</h2>
          <p className="mb-4">As our client, you agree to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide accurate, current, and complete information as requested</li>
            <li>Maintain the confidentiality of any account credentials</li>
            <li>Provide timely feedback and approvals as required</li>
            <li>Ensure all content provided to us is legally owned by you or properly licensed</li>
            <li>Comply with all applicable laws and regulations in your industry</li>
            <li>Pay all fees and charges according to the agreed payment terms</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-truck-blue-800">4. Payment Terms</h2>
          <p className="mb-4">
            Payment terms are as specified in your service agreement or invoice. Unless otherwise agreed:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Invoices are due within 30 days of issue</li>
            <li>Late payments may incur interest at 1.5% per month</li>
            <li>We reserve the right to suspend services for overdue accounts</li>
            <li>All fees are in Australian Dollars (AUD) unless otherwise specified</li>
            <li>Setup fees and deposits are non-refundable</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-truck-blue-800">5. Intellectual Property</h2>
          <p className="mb-4">
            <strong>Our Property:</strong> All original content, designs, code, and materials created by Truck Marketing remain our intellectual property until full payment is received, at which point ownership transfers to the client, except for:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Our proprietary tools, methodologies, and frameworks</li>
            <li>Pre-existing materials and templates</li>
            <li>Third-party licensed materials</li>
          </ul>
          <p className="mb-4">
            <strong>Your Property:</strong> You retain all rights to your pre-existing trademarks, logos, content, and materials provided to us for use in our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-truck-blue-800">6. Confidentiality</h2>
          <p className="mb-4">
            Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of our business relationship. This includes but is not limited to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Business strategies and plans</li>
            <li>Financial information</li>
            <li>Customer data and lists</li>
            <li>Trade secrets and proprietary methods</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-truck-blue-800">7. Limitation of Liability</h2>
          <p className="mb-4">
            To the maximum extent permitted by law:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Our total liability for any claim arising from our services shall not exceed the amount paid by you for the specific service in question</li>
            <li>We shall not be liable for any indirect, incidental, special, or consequential damages</li>
            <li>We do not guarantee specific results or rankings in search engines</li>
            <li>We are not responsible for third-party platform changes that may affect our services</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-truck-blue-800">8. Indemnification</h2>
          <p className="mb-4">
            You agree to indemnify and hold Truck Marketing, its officers, directors, employees, and agents harmless from any claims, damages, losses, or expenses (including reasonable attorneys&rsquo; fees) arising from:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Your breach of these Terms of Service</li>
            <li>Your violation of any law or third-party rights</li>
            <li>Content or materials you provide to us</li>
            <li>Your use of our services</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-truck-blue-800">9. Termination</h2>
          <p className="mb-4">
            Either party may terminate services by providing 30 days written notice. Upon termination:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>All outstanding fees become immediately due and payable</li>
            <li>We will provide you with copies of your owned materials</li>
            <li>You must cease using any of our proprietary materials</li>
            <li>Confidentiality obligations survive termination</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-truck-blue-800">10. Dispute Resolution</h2>
          <p className="mb-4">
            Any disputes arising from these terms or our services shall be:
          </p>
          <ol className="list-decimal pl-6 mb-4">
            <li>First attempted to be resolved through good faith negotiation</li>
            <li>If unresolved, submitted to mediation in accordance with Australian mediation standards</li>
            <li>If still unresolved, subject to the exclusive jurisdiction of the courts of Australia</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-truck-blue-800">11. Force Majeure</h2>
          <p className="mb-4">
            Neither party shall be liable for any delay or failure to perform due to causes beyond their reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, pandemic, government actions, or internet service disruptions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-truck-blue-800">12. Privacy and Data Protection</h2>
          <p className="mb-4">
            We are committed to protecting your privacy and handling your data in accordance with applicable privacy laws. Please refer to our <a href="/privacy" className="text-truck-blue-600 hover:text-truck-blue-700 underline">Privacy Policy</a> for detailed information on how we collect, use, and protect your information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-truck-blue-800">13. Modifications to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any modifications indicates your acceptance of the updated terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-truck-blue-800">14. Entire Agreement</h2>
          <p className="mb-4">
            These Terms of Service, together with any service agreements, statements of work, or proposals accepted by you, constitute the entire agreement between you and Truck Marketing regarding our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-truck-blue-800">15. Contact Information</h2>
          <p className="mb-4">
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-semibold">Truck Marketing</p>
            <p>Email: info@truckmarketing.com.au</p>
            <p>Phone: 1300 TRUCK MKT</p>
            <p>Address: [Your Business Address]</p>
          </div>
        </section>

        <div className="mt-12 p-6 bg-truck-blue-50 rounded-lg border border-truck-blue-200">
          <p className="text-sm text-truck-blue-800">
            By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you are entering into this agreement on behalf of a business or other legal entity, you represent that you have the authority to bind such entity to these terms.
          </p>
        </div>
      </div>
    </div>
  )
}