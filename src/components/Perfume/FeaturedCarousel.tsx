'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

interface CarouselImage {
  id: number
  src: string
  alt: string
  title: string
}

const images: CarouselImage[] = [
  {
    id: 1,
    src: '/images/landing/featured-perfume-1.webp',
    alt: 'Featured Perfume Collection 1',
    title: 'Signature Fragrance Collection'
  },
  {
    id: 2,
    src: '/images/landing/featured-perfume-2.webp',
    alt: 'Featured Perfume Collection 2',
    title: 'Premium Artisan Scents'
  },
  {
    id: 3,
    src: '/images/landing/featured-perfume-3.webp',
    alt: 'Featured Perfume Collection 3',
    title: 'Luxury Fragrance Experience'
  }
]

const FeaturedCarousel = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const autoplay = useRef<ReturnType<typeof Autoplay>>(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false
    })
  )

  useEffect(() => {
    if (!api) return

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap())
    }

    const handlePointerUp = () => autoplay.current.reset()

    updateCurrent()

    api.on("select", updateCurrent)
    api.on("pointerUp", handlePointerUp)

    return () => {
      api.off("select", updateCurrent)
      api.off("pointerUp", handlePointerUp)
    }
  }, [api])

  useEffect(() => {
    // Preload all images for smooth transitions
    images.forEach((image) => {
      const img = new window.Image()
      img.src = image.src
    })
  }, [])

  const goToSlide = (index: number) => {
    api?.scrollTo(index)
    autoplay.current.reset()
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-base-100">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[autoplay.current]}
        className="w-full h-full"
      >
        <CarouselContent className="h-full -ml-0">
          {images.map((image, index) => (
            <CarouselItem key={image.id} className="pl-0 h-full">
              <div className="relative h-full min-h-screen">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/40" />

                <div className="absolute bottom-20 left-8 text-white transition-all duration-500 ease-out">
                  <h2 className="text-4xl font-bold mb-2 drop-shadow-lg">
                    {image.title}
                  </h2>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Custom Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            type="button"
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ease-out ${
              index === current
                ? 'bg-white scale-110 shadow-[0_4px_8px_rgba(0,0,0,0.3)]'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-pressed={index === current}
          />
        ))}
      </div>
    </div>
  )
}

export default FeaturedCarousel
