"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Pause, Play, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CarouselImage {
  id: string
  src: string
  alt: string
  title?: string
  description?: string
}

interface CarouselSectionProps {
  title?: string
  subtitle?: string
  images?: CarouselImage[]
  autoRotate?: boolean
  rotationSpeed?: number // in milliseconds
  showControls?: boolean
  cloudName?: string // Your Cloudinary cloud name (optional)
  aspectRatio?: "video" | "square" | "wide" // 16:9, 1:1, or 2:1
}

// Default images with corrected structure
const defaultImages: CarouselImage[] = [
  {
    id: "1",
    src: "https://res.cloudinary.com/dvwug91mb/image/upload/v1748069855/Ref-1_n7fdve.jpg",
    alt: "Killen Trucking Co",
    title: "Killen Truck New Digital Presence",
    description: "Design and developed state of the art website + photography and video"
  },
  {
    id: "2", 
    src: "https://res.cloudinary.com/dvwug91mb/image/upload/v1748069855/Plane-Over-Truck_nju2ie.jpg",
    alt: "Highway Transport",
    title: "Flying High, Amazing Photography",
    description: "Aerial photography showcasing transport excellence"
  },
  {
    id: "3",
    src: "https://res.cloudinary.com/dvwug91mb/image/upload/v1747977431/DSC_0147-Enhanced-NR-Edit_i0we4o.jpg",
    alt: "Willets Trucking",
    title: "Willets New Truck",
    description: "Photo session for Willets with the brand new Kenworth"
  },
  {
    id: "4",
    src: "https://res.cloudinary.com/dvwug91mb/image/upload/v1747978820/Centourion1_wm5soo.webp",
    alt: "Centurion Transport",
    title: "Centurion Transport",
    description: "Innovative marketing solutions for transport companies"
  },
  {
    id: "5",
    src: "https://res.cloudinary.com/dvwug91mb/image/upload/v1747977467/DJI_20250205160849_0049_D_copy_kzzg0y.jpg",
    alt: "Grow Your Trucking Business",
    title: "Grow Your Trucking Business",
    description: "Proven strategies to boost your trucking business"
  },
    {
    id: "6",
    src: "https://res.cloudinary.com/dvwug91mb/image/upload/v1748992868/DJI_20250531095424_0082_D_fmfqbi.jpg",
    alt: "Scale up your buisiness",
    title: "Scale Up Your Business",
    description: "Proven strategies to boost your trucking business"
  }
]

export function CarouselSection({
  title = "Our Success Stories",
  subtitle = "Delivering excellence across the transport industry",
  images = defaultImages,
  autoRotate = true,
  rotationSpeed = 4000,
  showControls = true,
  cloudName,
  aspectRatio = "video"
}: CarouselSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoRotate)
  const [isPaused, setIsPaused] = useState(false)

  // Auto rotation effect
  useEffect(() => {
    if (!isPlaying || isPaused || images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, rotationSpeed)

    return () => clearInterval(interval)
  }, [isPlaying, isPaused, images.length, rotationSpeed])

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }


  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  // Generate image URL - handles both full URLs and Cloudinary IDs
  const getImageUrl = (src: string, transformations = "w_1200,h_600,c_fill,q_auto,f_auto") => {
    // If it's already a full URL, return as is
    if (src.startsWith('http')) {
      return src
    }
    
    // If we have a cloudName and it looks like a Cloudinary ID, construct the URL
    if (cloudName && !src.includes('/')) {
      return `https://res.cloudinary.com/${cloudName}/image/upload/${transformations}/${src}`
    }
    
    // Fallback to original src
    return src
  }

  // Get aspect ratio classes
  const getAspectRatio = () => {
    switch (aspectRatio) {
      case "square":
        return "aspect-square"
      case "wide":
        return "aspect-[2/1]"
      default:
        return "aspect-[21/9]" // 21:9 (narrower than 16:9)
    }
  }

  if (!images || images.length === 0) {
    return null
  }

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-wide">
        {/* Header */}
        {(title || subtitle) && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            {title && (
              <h2 className="text-3xl sm:text-4xl lg:text-display-sm font-bold mb-6">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-muted-foreground">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel */}
          <div 
            className="relative overflow-hidden rounded-2xl shadow-2xl bg-white"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Image Container */}
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={image.id} className="w-full flex-shrink-0 relative">
                  <div className={`${getAspectRatio()} relative`}>
                    <Image
                      src={getImageUrl(image.src)}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    />
                    
                    {/* Overlay Content */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Text Content */}
                    {(image.title || image.description) && (
                      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                        {image.title && (
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
                            {image.title}
                          </h3>
                        )}
                        {image.description && (
                          <p className="text-sm sm:text-base lg:text-lg opacity-90 max-w-2xl">
                            {image.description}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            {showControls && images.length > 1 && (
              <>
                {/* Previous Button */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-0 shadow-lg z-10 transition-all hover:scale-110"
                  onClick={goToPrevious}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>

                {/* Next Button */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-0 shadow-lg z-10 transition-all hover:scale-110"
                  onClick={goToNext}
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>

                {/* Play/Pause Button */}
                {autoRotate && (
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white border-0 shadow-lg z-10 transition-all hover:scale-110"
                    onClick={togglePlayPause}
                    aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                  >
                    {isPlaying ? (
                      <Pause className="h-4 w-4" />
                    ) : (
                      <Play className="h-4 w-4" />
                    )}
                  </Button>
                )}
              </>
            )}
          </div>


          {/* View Case Studies Button */}
          <div className="flex justify-center mt-8">
            <Button asChild className="bg-truck-orange-500 hover:bg-truck-orange-600 text-white">
              <Link href="/case-studies" className="flex items-center gap-2">
                View All Case Studies
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

      </div>
    </section>
  )
}