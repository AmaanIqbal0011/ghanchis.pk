"use client";

import useBasketStore from "@/store/store";
import { useEffect, useState } from "react";
import Product from "@/app/types";

interface AddToBasketButtonProps {
  product: Product;
 
}

export default function AddToCartButton({
  product,

}: AddToBasketButtonProps) {
  const { addItem, removeItem, getItemCount } = useBasketStore();
  const itemCount = getItemCount(product._id);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const stock = product.stock ?? 0;


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
        </button>  </div>

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
