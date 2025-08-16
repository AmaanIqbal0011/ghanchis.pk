import Image from "next/image";
import Link from "next/link";

export default function CategoryBanner() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-4 md:gap-8">
      
      {/* Boys Collection Banner */}
      <Link 
        href="/boys" 
        className="relative w-full md:w-1/2 h-96 rounded-xl overflow-hidden group block"
      >
        <Image
          src="/boy.png"
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
        className="relative w-full md:w-1/2 h-96 rounded-xl overflow-hidden group block"
      >
        <Image
          src="/man.jpg"
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
  );
}
