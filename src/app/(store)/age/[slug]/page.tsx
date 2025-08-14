import ProductView from "@/components/myComponents/productView";
import { getAllSize } from "@/sanity/lib/products/getAllSize";
import { getProductsByAgeGroup } from "@/sanity/lib/products/getProductByAgeGroup";



async function SizePage (
{params} : {params : Promise<{slug : number}>}
) {
  
  const {slug} = await params;
  const products  = await getProductsByAgeGroup(slug)
  const size = await getAllSize()

  return (
    <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Collection
        </h1>
        <ProductView products={products} size={size} />
      </div>
    </div>
  )

}

export default SizePage