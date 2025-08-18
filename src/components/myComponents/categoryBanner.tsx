"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function CategoryBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Animate heading
    gsap.fromTo(
      ".category-heading",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "top 70%",
          scrub: 2,
        }
      }
    );

    // Animate subheading
    gsap.fromTo(
      ".category-subheading",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "top 70%",
          toggleActions: "play none none none"
        }
      }
    );

    // Animate cards with stagger
    const cards = gsap.utils.toArray<HTMLElement>(".banner-card");
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2 + index * 0.15,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 70%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    // Animate shop now buttons
    gsap.fromTo(
      ".shop-now-btn",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        delay: 0.8,
        ease: "elastic.out(1, 0.75)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "top 70%",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-7xl mx-auto px-4 py-12 md:py-20 
                 bg-gradient-to-br from-white via-[#fef6ff] to-[#f9f0ff] 
                 rounded-3xl shadow-[0_15px_50px_rgba(0,0,0,0.1)]"
    >
      {/* Category Heading */}
      <div className="text-center mb-12 md:mb-16">
        <h1 className="category-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
          Explore Our Collections
        </h1>
        <p className="category-subheading text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Discover carefully curated styles — premium looks for every occasion.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-10">
        {/* Boys Collection Banner */}
        <Link
          href="/boys"
          className="banner-card relative w-full md:w-1/2 h-80 md:h-[420px] rounded-2xl 
                     overflow-hidden transform-gpu will-change-transform group 
                     shadow-[0_10px_40px_rgba(0,0,0,0.12)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.18)] 
                     transition-all duration-300"
        >
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <Image
              src="/boy.png"
              alt="Boys Collection"
              width={800}
              height={500}
              className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-2xl" />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-10 px-6 rounded-2xl">
            <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4 tracking-wide group-hover:-translate-y-1 transition-transform duration-300">
              Boys Collection
            </h2>
            <button className="shop-now-btn bg-white text-gray-900 font-medium px-6 py-3 rounded-full 
                               hover:bg-gray-50 transition-all duration-300 transform group-hover:scale-105 
                               shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
              Shop Now
            </button>
          </div>
          <div className="absolute top-6 right-6 z-20">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 shadow-sm">
              <span className="text-white text-sm font-medium">New Arrivals</span>
            </div>
          </div>
          <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-ping" />
            <span className="text-white/80 text-sm">30% Off Sale</span>
          </div>
        </Link>

        {/* Men Collection Banner */}
        <Link
          href="/men"
          className="banner-card relative w-full md:w-1/2 h-80 md:h-[420px] rounded-2xl 
                     overflow-hidden transform-gpu will-change-transform group 
                     shadow-[0_10px_40px_rgba(0,0,0,0.12)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.18)] 
                     transition-all duration-300"
        >
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <Image
              src="/child.jpg"
              alt="Men Collection"
              width={800}
              height={500}
              className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-2xl" />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-10 px-6 rounded-2xl">
            <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4 tracking-wide group-hover:-translate-y-1 transition-transform duration-300">
              Men Collection
            </h2>
            <button className="shop-now-btn bg-white text-gray-900 font-medium px-6 py-3 rounded-full 
                               hover:bg-gray-50 transition-all duration-300 transform group-hover:scale-105 
                               shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
              Shop Now
            </button>
          </div>
          <div className="absolute top-6 right-6 z-20">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 shadow-sm">
              <span className="text-white text-sm font-medium">Premium</span>
            </div>
          </div>
          <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber-400 animate-ping" />
            <span className="text-white/80 text-sm">Free Shipping</span>
          </div>
        </Link>
      </div>

      {/* Decorative background elements with soft shadows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-purple-300/20 blur-3xl shadow-[0_0_30px_rgba(150,80,255,0.25)]" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-indigo-300/20 blur-3xl shadow-[0_0_30px_rgba(80,80,255,0.25)]" />
      </div>
    </div>
  );
}
