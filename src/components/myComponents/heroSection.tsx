// import { getHeroImages } from "@/sanity/lib/products/getHeroImages";
// import { imageUrl } from "../../lib/ImageUrlNonNull";
// import HeroCarousel from "./HeroCarousel";

// const HeroSection = async () => {
//   const images = await getHeroImages();

//   if (!images?.length) return null;

//   const heroImages = images.map((img) => ({
//     url: imageUrl(img.imageUrl).url(),
//     alt: img.alt || "Hero image",
//   }));

//   return (
//     <section className="w-full mb-8 md:mb-14 mt-2">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-200">
//           <HeroCarousel images={heroImages} />
          
//           {/* Indicators with optimized spacing */}
//           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
//             <div className="flex space-x-1.5">
//               {heroImages.map((_, idx) => (
//                 <div 
//                   key={idx}
//                   className={`h-1.5 rounded-full transition-all duration-300 ${idx === 0 ? 'bg-white w-6' : 'bg-white/50 w-2'}`}
//                   aria-hidden="true"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


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
    <section className="w-full mb-8 md:mb-14 mt-0"> {/* Reduced top margin */}
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-200">
          <HeroCarousel images={heroImages} />

          {/* Indicators exactly match images */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
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
