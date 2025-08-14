import NoProductAvailable from "@/components/myComponents/noProductAvailable";
import { GetProductDetailBySlug } from "@/sanity/lib/products/getProductDetailBySlug";
import { imageUrl } from "@/lib/ImageUrlNonNull";
import Badges from "@/components/myComponents/badges";
import ProductTabs from "../../../../components/myComponents/ProductTabs";
import AddToCartButton from "../../../../components/myComponents/AddToCartButton";
import Breadcrumbs from "@/components/myComponents/Breadcrumbs";
import Image from "next/image";

async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await GetProductDetailBySlug(slug);
  const isOutOfStock = product.stock == 0

  if (!product || Object.keys(product).length === 0) {
    return <NoProductAvailable params={slug} />;
  }

  const { ageGroup } = product.size;

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          productTitle={product.title}
          categories={product.category}
        />
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Improved Image Section */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] xl:h-[600px] rounded-lg overflow-hidden bg-gray-50 shadow-sm">
            {product.image && (
              <Image
                className="object-contain transition-all duration-300 hover:scale-105"
                src={imageUrl(product.image).url()}
                alt={product.title || "Product Image"}
                fill
                sizes="(max-width: 640px) 100vw, 
                       (max-width: 768px) 50vw, 
                       (max-width: 1024px) 40vw, 
                       33vw"
                priority={true}
              />
            )}
          </div>

          {/* Product Info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <ProductHeader
              title={product.title}
              price={product.price}
              oldPrice={product.oldPrice}
            />

            <ProductDescription description={product.description} />

            <Badges
              sizes={product.size}
              ageGroup={ageGroup}
              collections={product.collections[0].title}
              category={product.category[0].name}
            />

            <div className="mt-8 border-t border-gray-200 pt-6">
              {/* <AddToCartButton
                productId={product._id}
                stock={product.stock}
                className="w-full"
                product={product}
              /> */}
              <AddToCartButton product={product} disabled={isOutOfStock}/>

              {/* <div className="mt-4 flex items-center">
                <span className="text-gray-500 mr-2">SKU:</span>
                <span className="font-medium">{product.sku}</span>
              </div> */}
            </div>
          </div>
        </div>
        <ProductTabs
          features={[
            { name: "Material", description: "100% Organic Cotton" },
            { name: "Care", description: "Machine wash cold, tumble dry low" },
            {
              name: "Origin",
              description: "Designed in California, made in Italy",
            },
            { name: "Care", description: "Machine wash cold, tumble dry low" },
            { name: "Care", description: "Machine wash cold, tumble dry low" },
            { name: "Care", description: "Machine wash cold, tumble dry low" },
          ]}
          collections={product.collections}
          size={product.size}
        />
      </div>
    </div>
  );
}

const ProductHeader = ({
  title,
  price,
  oldPrice,
}: {
  title: string;
  price: number;
  oldPrice: number;
}) => (
  <div>
    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
      {title}
    </h1>

    <div className="mt-3">
      <h2 className="sr-only">Product information</h2>
      <div className="flex items-center">
        <p
          className={`text-3xl text-gray-900 ${oldPrice ? "text-red-600" : ""}`}
        >
          {price.toFixed(2)}
        </p>

        {oldPrice && (
          <p className="ml-2 text-lg text-gray-500 line-through">
            {oldPrice.toFixed(2)}
          </p>
        )}
      </div>
    </div>
  </div>
);

const ProductDescription = ({ description }: { description?: string }) => (
  <div className="mt-6">
    <h3 className="sr-only">Description</h3>
    <div className="text-base text-gray-700 space-y-4">
      <p>{description}</p>
    </div>
  </div>
);

export default ProductPage;
