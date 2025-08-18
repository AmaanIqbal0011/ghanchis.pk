"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function CategoryBanner() {
  useEffect(() => {
    // Animate heading
    gsap.fromTo(
      ".category-heading",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".category-heading",
          start: "top 90%",
          end: "top 70%",
          scrub: 2,
        },
      }
    );

    // Animate cards
    const cards = gsap.utils.toArray<HTMLElement>(".banner-card");
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: -100 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 40%",
            scrub: 2, // slower animation on scroll
          },
        }
      );
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category Heading */}
           <div className="text-center mb-8">
        <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-2xl mx-auto">
          Discover our carefully curated collections — explore premium styles for every occasion.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        {/* Boys Collection Banner */}
        <Link
          href="/boys"
          className="banner-card relative w-full md:w-1/2 h-96 rounded-xl overflow-hidden group block transform-gpu will-change-transform"
        >
          <Image
            src="/child.jpg"
            alt="Boys Collection"
            width={800}
            height={500}
            className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col items-center justify-end pb-10 px-4">
            <h2 className="text-white text-3xl font-bold mb-4">Boys Collection</h2>
            <span className="bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300">
              Shop Now
            </span>
          </div>
        </Link>

        {/* Men Collection Banner */}
        <Link
          href="/men"
          className="banner-card relative w-full md:w-1/2 h-96 rounded-xl overflow-hidden group block transform-gpu will-change-transform"
        >
          <Image
            src="/boy.png"
            alt="Men Collection"
            width={800}
            height={500}
            className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col items-center justify-end pb-10 px-4">
            <h2 className="text-white text-3xl font-bold mb-4">Men Collection</h2>
            <span className="bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
