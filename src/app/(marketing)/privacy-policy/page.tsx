import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Haul Growth',
  description: 'Read our privacy policy to understand how we collect, use, and protect your information.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-lg text-gray-600">
        Learn about our commitment to protecting your privacy and how we handle your personal information.
      </p>
    </div>
  )
}