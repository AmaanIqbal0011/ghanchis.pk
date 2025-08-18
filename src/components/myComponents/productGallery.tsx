"use client";

import { useState } from 'react';
import Image from 'next/image';
import { imageUrl } from '@/lib/ImageUrlNonNull';

interface ProductGalleryProps {
  images: any[]; // You can type this better if you want (e.g., SanityImage[])
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col-reverse">
      <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
        <div className="grid grid-cols-4 gap-6">
          {images.map((image, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(idx)}
              className={`relative h-24 rounded-md overflow-hidden ${selectedImage === idx ? 'ring-2 ring-indigo-500' : ''}`}
            >
              <Image
                src={imageUrl(image).url()}
                alt={`Thumbnail ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 25vw, 100px"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="aspect-w-1 aspect-h-1 w-full">
        {images.length > 0 && (
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src={imageUrl(images[selectedImage]).url()}
              alt={`Product view ${selectedImage + 1}`}
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )}
      </div>
    </div>
  );
}