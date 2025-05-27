import { Metadata } from 'next'
import { ContactForm } from '@/components/forms'

export const metadata: Metadata = {
  title: 'Contact Us - Trucking Marketing Experts',
  description: 'Get in touch with our team to discuss how we can help grow your trucking business.',
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ContactForm />
    </div>
  )
}