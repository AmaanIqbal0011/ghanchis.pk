import NoProductAvailable from "@/components/myComponents/noProductAvailable";
import { SearchProductByName } from "@/sanity/lib/products/searchProductByName";

async function SearchPage({
    searchParams
} : {
    searchParams : Promise<{
        query : string;
    }>;
}) 
{
    const {query} = await searchParams;
    const products = await SearchProductByName(query)
    console.log(products)
    if (!products.length){
         return (
       <NoProductAvailable params={query} />
         )
    }

    return (
        <div className="flex flex-col items-center justify_top min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
                <h1 className="text-3xl font-bold mb-6 text-center">
                    Search results for {query}
                </h1>
               
            </div>
        </div>
    )
   
}

export default SearchPage