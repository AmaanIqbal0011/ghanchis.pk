"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type HeroImage = {
  url: string;
  alt: string;
};

type HeroCarouselProps = {
  images: HeroImage[];
};

const HeroCarousel = ({ images }: HeroCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotate only when not hovered
  useEffect(() => {
    if (images.length <= 1 || isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length, isHovered]);

  return (
    <div 
      className="relative w-full h-[200px] md:h-[290px] lg:h-[380px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((img, idx) => (
        <div 
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === currentIndex ? 'opacity-100 z-[1]' : 'opacity-0 z-0'}`}
          aria-hidden={idx !== currentIndex}
        >
          <Image
            src={img.url}
            alt={img.alt}
            fill
            className="object-cover"
            priority={idx === 0}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
          
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      ))}

      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <button 
            onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 p-1.5 rounded-full bg-black/30 hover:bg-black/50 transition-colors backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <ChevronLeftIcon className="h-5 w-5 text-white" />
          </button>
          <button 
            onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 p-1.5 rounded-full bg-black/30 hover:bg-black/50 transition-colors backdrop-blur-sm"
            aria-label="Next slide"
          >
            <ChevronRightIcon className="h-5 w-5 text-white" />
          </button>
        </>
      )}
    </div>
  );
};

// Optimized SVG Icons
const ChevronLeftIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const ChevronRightIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
  </svg>
);

export default HeroCarousel;