'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button"; 
import { ShoppingCart } from "lucide-react"; 
import useBasketStore from "@/store/store";

const CartButton = () => {
  const itemCount = useBasketStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <Link href="/basket">
      <Button
        variant="outline"
        className="relative flex items-center gap-2 px-4 py-2 mx-6 text-sm font-medium"
      >
        <ShoppingCart className="w-5 h-5" />
        <span className="hidden sm:inline">My Basket</span>

        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </Button>
    </Link>
  );
};

export default CartButton;
