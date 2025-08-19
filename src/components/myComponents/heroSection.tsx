import { getHeroImages } from "@/sanity/lib/products/getHeroImages";
import { imageUrl } from "../../lib/ImageUrlNonNull";
import HeroCarousel from "./HeroCarousel";

const HeroSection = async () => {
  const images = await getHeroImages();

  if (!images?.length) return null;

  const heroImages = images.map((img) => ({
    url: imageUrl(img.imageUrl).url(),
    alt: img.alt || "Hero image",
  }));

  return (
    <section className="w-full mb-6 md:mb-10"> {/* Reduced bottom margin as well */}
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200">
          <HeroCarousel images={heroImages} />

          {/* Indicators exactly match images */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-10">
            <div className="flex space-x-1.5">
              {heroImages.map((_, idx) => (
                <div 
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === 0 ? "bg-white w-6" : "bg-white/50 w-2"
                  }`}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;