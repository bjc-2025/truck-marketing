// src/app/(marketing)/gallery/gallery-client.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from "yet-another-react-lightbox";
// ... other lightbox imports ...

import "yet-another-react-lightbox/styles.css";
// ... other lightbox CSS imports ...

interface CloudinaryImageFromProps { // Renamed to avoid conflict if defined elsewhere
  id: string;
  src: string;
  thumbnailSrc?: string;
  alt: string;
  width: number;
  height: number;
  title?: string;
  description?: string;
}

interface GalleryClientProps {
  images: CloudinaryImageFromProps[];
  heroImageUrl: string;
}

export default function GalleryClientComponent({ images, heroImageUrl }: GalleryClientProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openImageInLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const slidesForLightbox = images.map(img => ({
    src: img.src,
    alt: img.alt,
    title: img.title,
    description: img.description,
    width: img.width,
    height: img.height,
  }));

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section 
          className="relative section-padding overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImageUrl})` }} // Use prop
            aria-hidden="true"
          />
          {/* ... rest of hero ... */}
        </section>

        {/* Masonry Gallery Section */}
        <section className="section-padding bg-slate-50">
          <div className="container-wide">
            {/* ... gallery heading ... */}
            {images.length > 0 ? (
              <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 lg:gap-6 space-y-4 lg:space-y-6">
                {images.map((image, index) => ( // Use images from props
                  <div 
                    key={image.id || index} 
                    // ... rest of image item div
                    onClick={() => openImageInLightbox(index)}
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-1">
                      <Image
                        src={image.thumbnailSrc || image.src}
                        alt={image.alt}
                        width={400}
                        height={300} 
                        // Important: use the actual width and height from Cloudinary for better layout stability
                        // if your thumbnails from Cloudinary transformations have consistent aspect ratios, 
                        // width={400} height={300} is fine.
                        // If not, and you want `next/image` to handle aspect ratio based on original,
                        // you might need to pass original dimensions for thumbnails too or ensure
                        // `className="w-full h-auto object-cover"` works as expected.
                        // For masonry, often fixed aspect ratio thumbnails work well.
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      {/* ... image item overlay ... */}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground text-lg">
                Our gallery is currently empty or images could not be loaded.
              </p>
            )}
          </div>
        </section>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slidesForLightbox}
        index={currentImageIndex}
        // ... lightbox plugins and config ...
      />
    </>
  );
}