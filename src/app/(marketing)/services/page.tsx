import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services - Haul Growth',
  description: 'Discover our comprehensive range of marketing and growth services for trucking companies.',
}

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Our Services</h1>
      <p className="text-lg text-gray-600">
        Explore our comprehensive suite of marketing and growth services designed specifically for trucking companies.
      </p>
    </div>
  )
}