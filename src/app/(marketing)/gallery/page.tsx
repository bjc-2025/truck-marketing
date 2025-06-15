// src/app/(marketing)/gallery/page.tsx
import { Metadata } from 'next';
import GalleryClientComponent from './gallery-client';
import { getImagesFromFolder, CloudinaryImage } from '@/lib/cloudinary'; // Adjust path

// --- SEO & METADATA ---
export const metadata: Metadata = {
  title: 'Gallery - Trucking & Logistics Fleet Photos',
  description: 'Browse our gallery of professional trucking fleet photos, logistics operations, and transport vehicles from our clients across Australia.',
  alternates: {
    canonical: 'https://truckmarketing.com.au/gallery',
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