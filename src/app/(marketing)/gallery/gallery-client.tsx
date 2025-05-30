// src/app/(marketing)/gallery/gallery-client.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// Add any other lightbox plugin imports and styles here

interface CloudinaryImageFromProps {
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
        <section className="relative section-padding overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImageUrl})` }}
            aria-hidden="true"
          />
          {/* Add the rest of your hero section content here */}
        </section>

        {/* Masonry Gallery Section */}
        <section className="section-padding bg-slate-50">
          <div className="container-wide">
            {/* Add your gallery heading here if needed */}
            {images.length > 0 ? (
              <div className="masonry-grid">
                {images.map((image, index) => {
                  const aspectRatio = image.width / image.height;
                  const spanRows = Math.ceil((1 / aspectRatio) * 10);
                  
                  return (
                    <div 
                      key={image.id || index} 
                      className="masonry-item relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer bg-gray-100"
                      style={{
                        gridRowEnd: `span ${spanRows}`
                      }}
                      onClick={() => openImageInLightbox(index)}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={image.thumbnailSrc || image.src}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          priority={index < 4} // Priority load first 4 images
                        />
                      </div>
                      
                      {/* Optional overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />
                      
                      {/* Optional caption overlay */}
                      {image.title && (
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <p className="text-white text-sm font-medium">{image.title}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
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
        // Add your lightbox plugins and config here
      />
    </>
  );
}