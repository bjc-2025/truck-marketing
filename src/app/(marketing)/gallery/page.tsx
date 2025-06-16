// src/app/(marketing)/gallery/page.tsx
import { Metadata } from 'next';
import GalleryClientComponent from './gallery-client';
import { getImagesFromFolder, CloudinaryImage } from '@/lib/cloudinary'; // Adjust path

// --- SEO & METADATA ---
export const metadata: Metadata = {
  title: 'Gallery - Trucking & Logistics Fleet Photos',
  description: 'View our gallery of professional trucking fleet photos and logistics operations. Showcasing successful transport companies across Australia.',
  keywords: 'trucking fleet photos, logistics gallery, transport vehicles, truck photography, fleet showcase, australian trucking photos',
  alternates: {
    canonical: 'https://www.truckmarketing.com.au/gallery',
  },
  openGraph: {
    title: 'Gallery - Trucking & Logistics Fleet Photos',
    description: 'View our gallery of professional trucking fleet photos and logistics operations. Showcasing successful transport companies across Australia.',
    url: 'https://www.truckmarketing.com.au/gallery',
    siteName: 'Truck Marketing',
    images: [
      {
        url: 'https://res.cloudinary.com/dvwug91mb/image/upload/v1748387832/NH-Trans-W900SAR-Jan-copy_gzwevi.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional trucking fleet gallery',
      }
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gallery - Trucking & Logistics Fleet Photos',
    description: 'View our gallery of professional trucking fleet photos and logistics operations.',
    images: ['https://res.cloudinary.com/dvwug91mb/image/upload/v1748387832/NH-Trans-W900SAR-Jan-copy_gzwevi.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// --- PAGE COMPONENT (Server Component) ---
export default async function GalleryPage() {
  // Fetch images from a specific Cloudinary folder
  const galleryImages: CloudinaryImage[] = await getImagesFromFolder('website-gallery'); 
  // Replace 'your-gallery-folder-name' with the actual folder name in Cloudinary

  // Optional: Define hero image URL here or pass it as a prop
  const galleryHeroBackgroundImageUrl = 'https://res.cloudinary.com/dvwug91mb/image/upload/v1748387832/NH-Trans-W900SAR-Jan-copy_gzwevi.jpg';

  return (
    <GalleryClientComponent 
      images={galleryImages} 
      heroImageUrl={galleryHeroBackgroundImageUrl}
    />
  );
}