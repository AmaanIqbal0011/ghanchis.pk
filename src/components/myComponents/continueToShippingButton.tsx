"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import useBasketStore from "@/store/store";
import { useCheckoutStore } from "@/store/checkOutStore";
import { useAuth } from "@clerk/nextjs";

export default function ContinueToShippingButton({
  name,
  email,
  city,
  phoneNumber,
  disabled,
  className,
  address,
}: {
  name: string;
  email: string;
  city: string;
  phoneNumber: string;
  disabled: boolean;
  className: string;
  address: string;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { userId } = useAuth(); // Clerk user ID

  const basketItems = useBasketStore((state) => state.items);
  const clearBasket = useBasketStore((state) => state.clearBasket);
  const setUserInfo = useCheckoutStore((state) => state.setUserInfo);
  const setBasketFromStore = useCheckoutStore((state) => state.setBasketFromStore);
  const finalizeOrder = useCheckoutStore((state) => state.finalizeOrder);

  // Order ko Sanity me save karne ka function
  const saveOrderToSanity = async (clerkId: string) => {
    const orders = useCheckoutStore.getState().orders;
    const lastOrder = orders[clerkId]?.[orders[clerkId].length - 1];
    if (!lastOrder) return;

    await fetch("/api/saveOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lastOrder),
    });
  };

  const handleContinue = async () => {
    if (disabled || !userId) return;
    setLoading(true);

    const uniquePart = Math.random().toString(36).slice(2, 8);
    const timestamp = Date.now();
    const orderId = `${name}-${city}-${timestamp}-${uniquePart}`.replace(/\s+/g, "");

    setBasketFromStore(basketItems);

    setUserInfo({
      firstName: name,
      email: email,
      city: city,
      phoneNumber: phoneNumber,
      address: address,
      orderId: orderId,
      clerkId: userId,
    });

    finalizeOrder(userId); 
    await saveOrderToSanity(userId); 

    clearBasket();
    await new Promise((res) => setTimeout(res, 500));

    router.push(`/order-history`);
  };

  return (
    <button
      onClick={handleContinue}
      disabled={loading || disabled || !userId}
      className={`px-6 py-3 rounded-md transition-colors duration-200 ${
        disabled || !userId
          ? "bg-gray-400 text-gray-200 cursor-not-allowed"
          : "bg-red-600 text-white hover:bg-red-700"
      } ${className}`}
    >
      {loading ? "Processing..." : "Continue to Shipping"}
    </button>
  );
}
