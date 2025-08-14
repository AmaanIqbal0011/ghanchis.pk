'use client';

import useBasketStore from "@/store/store";

function OrderSummary() {
  const groupedItems = useBasketStore((state) => state.getGroupedItems());
  const totalPrice = useBasketStore.getState().getTotalPrice();
  const totalQuantity = groupedItems.reduce((total, item) => total + item.quantity, 0);
 

  return (
    <div className="mt-6 w-full max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 space-y-4">
      <h2 className="text-xl font-semibold border-b pb-2">Order Summary</h2>

      {/* Items List */}
      <div className="space-y-3">
        {groupedItems.length > 0 ? (
          groupedItems.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center border-b pb-2 last:border-none"
            >
              <div>
                <p className="font-medium">{item.product.title}</p>
                <p className="text-sm text-gray-500">
                  Quantity: {item.quantity}
                </p>
              </div>
              <span className="font-semibold">
                {(item.product.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No items in the cart</p>
        )}
      </div>

      {/* Summary */}
      <div className="border-t pt-4 space-y-2">
        <p className="flex justify-between text-gray-700">
          <span>Total Items</span>
          <span>{totalQuantity}</span>
        </p>
        <p className="flex justify-between text-lg font-bold">
          <span>Total Price</span>
          <span className="text-green-600">Rs {totalPrice}</span>
        </p>
      </div>
    </div>
  );
}

export default OrderSummary;
