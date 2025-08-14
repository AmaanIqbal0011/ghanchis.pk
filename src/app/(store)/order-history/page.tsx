// "use client";

// import { useCheckoutStore } from "@/store/checkOutStore";
// import { useAuth } from "@clerk/nextjs";
// import Link from "next/link";

// export default function OrderHistoryPage() {
//   const { orders } = useCheckoutStore();
//   const { userId } = useAuth();
//    const clearAllOrders = useCheckoutStore((state) => state.clearAllOrders);

//   const userOrders = userId ? orders[userId] || [] : [];

//   if (!userId) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
//         <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
//           <h1 className="text-2xl font-bold text-gray-800 mb-4">
//             Sign In Required
//           </h1>
//           <p className="text-gray-600 mb-6">
//             Please sign in to view your order history.
//           </p>
//           <Link
//             href="/sign-in"
//             className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
//           >
//             Sign In
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-10 px-4">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-3xl font-bold text-gray-800 text-center mb-10">
//           Your Order History
//         </h1>

//         {userOrders.length === 0 ? (
//           <div className="bg-white shadow-lg rounded-xl p-8 text-center">
//             <h2 className="text-xl font-semibold text-gray-700 mb-2">
//               No Orders Found
//             </h2>
//             <p className="text-gray-600 mb-6">
//               You haven't placed any orders yet.
//             </p>
//             <Link
//               href="/"
//               className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
//             >
//               Start Shopping
//             </Link>
//           </div>
//         ) : (
//           <div className="space-y-6">
//             {userOrders
//               .sort((a, b) => b.timestamp - a.timestamp)
//               .map((order) => (
//                 <div
//                   key={order.orderId}
//                   className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow"
//                 >
//                   <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
//                     <div>
//                       <h2 className="text-xl font-semibold">
//                         Order #{order.orderId}
//                       </h2>
//                       <p className="text-gray-500 text-sm">
//                         {new Date(order.timestamp).toLocaleString()}
//                       </p>
//                     </div>
//                     <Link
//                       href={`/my-order/${order.orderId}`}
//                       className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
//                     >
//                       View Details
//                     </Link>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                     <div>
//                       <h3 className="font-medium text-gray-700">Customer</h3>
//                       <p>
//                         {order.userInfo.firstName} {order.userInfo.lastName}
//                       </p>
//                       <p>{order.userInfo.email}</p>
//                     </div>

//                     <div>
//                       <h3 className="font-medium text-gray-700">Shipping</h3>
//                       <p>{order.userInfo.address}</p>
//                       <p>
//                         {order.userInfo.city}, {order.userInfo.country}
//                       </p>
//                     </div>

//                     <div>
//                       <h3 className="font-medium text-gray-700">
//                         Payment Method
//                       </h3>
//                       <p>{order.userInfo.paymentMethod}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         )}
//       </div>
//       <button
//         onClick={clearAllOrders}
//         className="bg-red-600 text-white px-4 py-2 rounded"
//       >
//         Delete All Orders
//       </button>
//     </div>
//   );
// }



"use client";

import { useCheckoutStore } from "@/store/checkOutStore";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

export default function OrderHistoryPage() {
  const { orders } = useCheckoutStore();
  const { userId } = useAuth();
  const clearAllOrders = useCheckoutStore((state) => state.clearAllOrders);

  const userOrders = userId ? orders[userId] || [] : [];

  if (!userId) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Sign In Required
          </h1>
          <p className="text-gray-600 mb-6">
            Please sign in to view your order history.
          </p>
          <Link
            href="/sign-in"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Your Order History
        </h1>

        {userOrders.length === 0 ? (
          <div className="bg-white shadow-lg rounded-xl p-8 text-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              No Orders Found
            </h2>
            <p className="text-gray-600 mb-6">
              You haven&apos;t placed any orders yet.
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {userOrders
              .sort((a, b) => b.timestamp - a.timestamp)
              .map((order) => (
                <div
                  key={order.orderId}
                  className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                    <div>
                      <h2 className="text-xl font-semibold">
                        Order #{order.orderId}
                      </h2>
                      <p className="text-gray-500 text-sm">
                        {new Date(order.timestamp).toLocaleString()}
                      </p>
                    </div>
                    <Link
                      href={`/my-order/${order.orderId}`}
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                    >
                      View Details
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h3 className="font-medium text-gray-700">Customer</h3>
                      <p>
                        {order.userInfo.firstName} {order.userInfo.lastName}
                      </p>
                      <p>{order.userInfo.email}</p>
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-700">Shipping</h3>
                      <p>{order.userInfo.address}</p>
                      <p>
                        {order.userInfo.city}, {order.userInfo.country}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-700">
                        Payment Method
                      </h3>
                      <p>{order.userInfo.paymentMethod}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
      <button
        onClick={clearAllOrders}
        className="bg-red-600 text-white px-4 py-2 rounded"
      >
        Delete All Orders
      </button>
    </div>
  );
}
