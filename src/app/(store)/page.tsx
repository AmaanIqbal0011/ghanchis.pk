import HeroSection from "@/components/myComponents/heroSection";
import ProductView from "@/components/myComponents/productView";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import { getAllSize } from "@/sanity/lib/products/getAllSize";


export const dynamic = "force-dynamic"
export const revalidate = 60;

export default async function Home() {
  const products = await getAllProducts();
  const size = await getAllSize()

  return (
    <div>
     
      <HeroSection />
      <hr className="border-t border-gray-300 my-4" />
      <ProductView products={products} size={size} />
    
    </div>
  );
}
