import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="text-gray-600 mb-8">Could not find the requested resource.</p>
      <Link 
        href="/" 
        className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}