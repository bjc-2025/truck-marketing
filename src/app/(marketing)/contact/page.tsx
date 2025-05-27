import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Trucking Marketing Experts',
  description: 'Get in touch with our team to discuss how we can help grow your trucking business.',
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg text-gray-600">
        Ready to take your trucking business to the next level? Get in touch with our team of experts today.
      </p>
    </div>
  )
}