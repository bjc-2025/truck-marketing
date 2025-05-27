import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Trucking Marketing Experts',
  description: 'Read our terms of service to understand the conditions for using our website and services.',
}

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
      <p className="text-lg text-gray-600">
        Please read these terms of service carefully before using our website or services.
      </p>
    </div>
  )
}