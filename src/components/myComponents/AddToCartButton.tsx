"use client";

import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Button } from "../ui/button";
import useBasketStore from "@/store/store";
import { useEffect, useState } from "react";
import Product from "@/app/types";

interface AddToBasketButtonProps {
  product: Product;
  disabled?: boolean;
}

export default function AddToCartButton({
  product,
  disabled,
}: AddToBasketButtonProps) {
  const { addItem, removeItem, getItemCount } = useBasketStore();
  const itemCount = getItemCount(product._id);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const stock = product.stock ?? 0;
  const isOutOfStock = stock === 0;

  const handleAdd = () => {
    if (itemCount < stock) {
      addItem(product);
    }
  };

  const handleRemove = () => {
    if (itemCount > 0) {
      removeItem(product._id);
    }
  };

  return (
    <div>
      <div className="flex">
        <button
          onClick={handleRemove}
          disabled={itemCount <= 0}
          className="px-4 py-3 bg-gray-100 text-gray-600 rounded-l-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          -
        </button>
        <input
          type="number"
          value={itemCount}
          readOnly
          className="w-16 text-center border-y bg-white py-3"
        />
        <button
          onClick={handleAdd}
          disabled={itemCount >= stock}
          className="px-4 py-3 bg-gray-100 text-gray-600 rounded-r-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          +
        </button>

        <Button
          onClick={handleAdd}
          disabled={disabled || isOutOfStock || itemCount >= stock}
          className={`ml-4 flex-1 flex items-center justify-center px-8 py-3 border border-transparent rounded-md shadow-sm ${
            isOutOfStock
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-red-600 hover:bg-red-700"
          } text-white font-medium`}
        >
          {isOutOfStock ? (
            "Out of Stock"
          ) : (
            <>
              <ShoppingBagIcon className="h-5 w-5 mr-2" />
              Add to Cart
            </>
          )}
        </Button>
      </div>

      <p className="mt-2 text-sm text-yellow-600">
        {stock > 10
          ? `${stock} items available`
          : stock > 0
          ? `Only ${stock} left in stock`
          : "Currently unavailable"}
      </p>
    </div>
  );

}














// "use client";

// import { ShoppingBagIcon } from "@heroicons/react/24/outline";
// import { Button } from "../ui/button";import useBasketStore from "@/store/store"
// import { useEffect, useState } from "react"
// import Product from "@/app/types";



// interface AddToBasketButtonProps {
//   product : Product;
//   disabled?: boolean
//   className?: string
//   stock : number
// }

// export default function AddToCartButton({ 
  
//   product, 
//  disabled,
//  className,
//  stock,
// }: AddToBasketButtonProps) {
//   const [quantity, setQuantity] = useState(1);
//   const [isAdding, setIsAdding] = useState(false);

//   const addToCart = () => {
//     setIsAdding(true);
//     // Simulate API call
//     setTimeout(() => {
//       setIsAdding(false);
//       // Add to cart logic here
//     }, 1000);
//   };


//   return (
//     <div className={`${className}`}>
//       <div className="flex">
//         <button
//           onClick={() => setQuantity(Math.max(1, quantity - 1))}
//           className="px-4 py-3 bg-gray-100 text-gray-600 rounded-l-md"
//         >
//           -
//         </button>
//         <input
//           type="number"
//           min="1"
//           max={product.stock}
//           value={quantity}
//           onChange={(e) => setQuantity(Number(e.target.value))}
//           className="w-16 text-center border-y bg-white py-3"
//         />
//         <button
//           onClick={() => setQuantity(Math.min(stock, quantity + 1))}
//           className="px-4 py-3 bg-gray-100 text-gray-600 rounded-r-md"
//         >
//           +
//         </button>
        
//         <Button
//           onClick={addToCart}
//           disabled={isAdding || stock === 0}
//           className={`ml-4 flex-1 flex items-center justify-center px-8 py-3 border border-transparent rounded-md shadow-sm ${
//             stock === 0 
//               ? 'bg-gray-300 cursor-not-allowed' 
//               : isAdding 
//                 ? 'bg-red-400' 
//                 : 'bg-red-600 hover:bg-red-700'
//           } text-white font-medium`}
//         >
//           {isAdding ? (
//             'Adding...'
//           ) : product.stock === 0 ? (
//             'Out of Stock'
//           ) : (
//             <>
//               <ShoppingBagIcon className="h-5 w-5 mr-2" />
//               Add to Cart
//             </>
//           )}
//         </Button>
//       </div>
//       <p className="mt-2 text-sm text-yellow-600">
//         {stock > 10 
//           ? `${stock} items available` 
//           : stock > 0 
//             ? `Only ${stock} left in stock` 
//             : 'Currently unavailable'}
//       </p>
//     </div>
//   );
// }