import ProductView from "@/components/myComponents/productView";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import { getAllSize } from "@/sanity/lib/products/getAllSize";
import Link from "next/link";

const MansPage = async () => {
  const products = await getAllProducts();
  const sizes = await getAllSize();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            See Our Collections
          </h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our exquisite collection of traditional Pakistani outfits for men
          </p>
        </div>

        {/* Shalwar Qameez Collection */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 md:mb-0">
              Shalwar Qameez Collection
            </h2>
            <Link
            href={"/man/shalwar-qameez"}>
                        <span className="text-amber-600 font-medium">View Al</span>

            
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProductView products={products}  />
          </div>
        </section>

        {/* Sherwani Collection */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 md:mb-0">
              Premium Sherwani Collection
            </h2>
            <span className="text-amber-600 font-medium">View All</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProductView products={products}  />
          </div>
        </section>

        {/* New Collection Section */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 md:mb-0">
              New Arrivals
            </h2>
            <span className="text-amber-600 font-medium">Explore More</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProductView products={products.slice(0, 4)} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default MansPage;

