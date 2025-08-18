"use client";
import React from "react";

export default function MarqueeBar() {
  return (
    <div className="w-full bg-black text-white overflow-hidden">
  <div className="whitespace-nowrap py-3 animate-marquee">
    <span className="mx-8">🔥 New Arrivals are here!</span>
    <span className="mx-8">🚀 Free Shipping on Orders Above $50!</span>
    <span className="mx-8">🎉 Get 30% OFF This Week!</span>
  </div>
</div>

  );
}
