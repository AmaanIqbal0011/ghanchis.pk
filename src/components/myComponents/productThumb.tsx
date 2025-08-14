import Link from "next/link";
import Image from "next/image";
import { imageUrl } from "../../lib/ImageUrlNonNull";
import { Product } from "@/productsType";


function ProductThumb({ product }: { product: Product }) {
  const isOutOfStock = product.stock != null && product.stock <= 0;
  const hasCollection = product.collections && product.collections.length > 0;

  return (
    <Link
      href={`/product/${product.slug?.current}`}
      className={`group relative flex flex-col bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden ${
        isOutOfStock ? "opacity-75" : "hover:border-gray-300"
      }`}
    >
      {/* Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-gray-50">
        {product.image && (
          <Image
            className="object-contain transition-transform duration-500 group-hover:scale-105"
            src={imageUrl(product.image).url()}
            alt={product.title || "Product Image"}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            priority={false}
          />
        )}

        {/* Collection Badge */}
        {hasCollection && (
          <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-full z-10">
            <span className="text-xs font-medium text-gray-700 truncate max-w-[120px]">
              {product.collections![0].title}
            </span>
          </div>
        )}

        {/* Out of Stock Overlay */}
        {isOutOfStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm">
            <span className="text-gray-700 font-bold text-lg tracking-wide px-4 py-2 bg-white/90 rounded-xl border border-gray-200">
              Out Of Stock
            </span>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col gap-2">
        {/* Title and Price */}
        <div className="flex justify-between items-start gap-2">
          <h2 className="text-gray-800 font-medium line-clamp-2 flex-1">
            {product.title}
          </h2>
          {product.price && (
            <span className="font-bold text-gray-900 whitespace-nowrap">
              Rs. {product.price}
            </span>
          )}
        </div>

        {/* Metadata */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          {product.size?.name && (
            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md">
              {product.size.name}
            </span>
          )}
          
          {product.stock != null && product.stock > 0 && (
            <span className={`text-xs px-2 py-1 rounded-md ${
              product.stock < 10 
                ? "bg-amber-100 text-amber-800" 
                : "bg-emerald-100 text-emerald-800"
            }`}>
              {product.stock < 10 ? `Low Stock (${product.stock})` : `In Stock`}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProductThumb;