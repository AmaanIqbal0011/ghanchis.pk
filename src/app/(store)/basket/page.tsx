"use client";

import AddToCartButton from "@/components/myComponents/AddToCartButtonByCart";
import Loader from "@/components/myComponents/loader";
import OrderSummary from "@/components/myComponents/OrderSummary";
import { imageUrl } from "@/lib/ImageUrlNonNull";
import useBasketStore from "@/store/store";
import { SignInButton, useAuth } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function BasketPage() {
  const groupedItems = useBasketStore((state) => state.getGroupedItems());
  const { isSignedIn } = useAuth();
  const router = useRouter();

  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <Loader />;

  if (groupedItems.length === 0) {
    return (
      <div className="container mx-auto p-6 flex flex-col items-center justify-center min-h-[50vh] text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Your Basket</h1>
        <p className="text-gray-500 text-lg">
          Your basket is empty. Start shopping now!
        </p>
      </div>
    );
  }

  const handleCheckout = () => {
    if (!isSignedIn) return;
    setIsLoading(true);
    router.push("/user-info");
  };

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Basket</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Basket Items */}
        <div className="flex-grow space-y-4">
          {groupedItems.map((item) => {
            const unitPrice = item.product.price ?? 0;
            const totalPrice = unitPrice * item.quantity;

            return (
              <div
                key={item.product._id}
                className="p-4 bg-white border rounded-lg shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between hover:shadow-md transition-shadow" 
                // Changed flex to column on very small screens
              >
                {/* Product Info */}
                <div
                  className="flex items-center flex-1 min-w-0 cursor-pointer mb-4 sm:mb-0"
                  onClick={() =>
                    router.push(`/product/${item.product.slug?.current}`)
                  }
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 mr-4">
                    {item.product.image && (
                      <Image
                        src={imageUrl(item.product.image).url()}
                        alt={item.product.title ?? "Product Image"}
                        className="w-full h-full object-cover rounded-lg"
                        width={80}
                        height={80}
                      />
                    )}
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-base sm:text-lg font-semibold truncate text-gray-800">
                      {item.product.title}
                    </h2>
                    <p className="text-sm text-gray-500">
                      Unit Price: {unitPrice.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                    <p className="text-sm font-medium text-gray-800">
                      Total: {totalPrice.toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <div className="flex items-center sm:ml-4 flex-shrink-0 justify-end">
                  <AddToCartButton product={item.product} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-80 lg:sticky lg:top-4 bg-white p-6 border rounded-lg shadow-md order-first lg:order-last">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <OrderSummary />

          {isSignedIn ? (
            <button
              onClick={handleCheckout}
              disabled={isLoading}
              className="mt-6 w-full bg-red-500 text-white font-medium py-3 rounded-lg hover:bg-red-600 transition disabled:bg-gray-400"
            >
              {isLoading ? "Processing..." : "Checkout"}
            </button>
          ) : (
            <SignInButton mode="modal">
              <button className="mt-6 w-full bg-red-500 text-white font-medium py-3 rounded-lg hover:bg-red-600 transition">
                Sign in to Checkout
              </button>
            </SignInButton>
          )}
        </div>
      </div>
    </div>
  );
}

export default BasketPage;
