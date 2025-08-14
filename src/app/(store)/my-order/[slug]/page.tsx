import { getProductsByOrderId } from "@/sanity/lib/products/getOrderById";
import Image from "next/image";

async function OrderPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await  params;  
  const orders = await getProductsByOrderId(slug);
  const order = orders[0]


  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Order Not Found</h1>
          <p className="text-gray-600">The requested order does not exist</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      {/* Order Header */}
      <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
          <h1 className="text-2xl font-bold mb-2 sm:mb-0">
            Order #{order.orderId}
          </h1>
        <span
  className={`px-3 py-1 rounded-full text-sm font-medium 
    ${order?.status === "Completed" ? "bg-green-100 text-green-800" : 
     "bg-blue-100 text-yellow-800"}`}>
  {order?.status || "Pending"}
</span>
         
        </div>
        
        <p className="text-gray-600 mb-4">
          Placed on {new Date(order.timestamp).toLocaleString()}
        </p>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="font-semibold text-lg mb-2">Customer Information</h2>
            <div className="space-y-1">
              <p><strong>Name:</strong> {order.userInfo?.firstName} {order.userInfo?.lastName}</p>
              <p><strong>Email:</strong> {order.userInfo?.email}</p>
              <p><strong>Phone:</strong> {order.userInfo?.phoneNumber}</p>
              <p><strong>Payment:</strong> {order.userInfo?.paymentMethod}</p>
            </div>
          </div>
          
          <div>
            <h2 className="font-semibold text-lg mb-2">Shipping Address</h2>
            <div className="space-y-1">
              <p>{order.userInfo?.address}</p>
              <p>{order.userInfo?.city}, {order.userInfo?.country}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Basket Items */}
      <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
        <h2 className="text-xl font-bold mb-4">Order Items</h2>
        <div className="space-y-6">
          {order.basket?.map((item: any, index: number) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-4 border-b pb-6 last:border-0"
            >
              {item.product?.imageUrl && (
                <div className="flex-shrink-0">
                  <Image
                    src={item.product.imageUrl}
                    alt={item.product.name}
                    width={120}
                    height={160}
                    className="rounded-lg object-cover border"
                  />
                </div>
              )}
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <h3 className="font-semibold text-lg">{item.product?.name}</h3>
                  <p className="text-lg font-bold mt-1 sm:mt-0">
                    Rs. {item.product?.price * item.quantity}
                  </p>
                </div>
                
                <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                  <div>
                    <span className="text-gray-600">Unit Price:</span>
                    <span> Rs. {item.product?.price}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Quantity:</span>
                    <span> {item.quantity}</span>
                  </div>
                  {item.product?.size?.name && (
                    <div className="col-span-2">
                      <span className="text-gray-600">Size:</span>
                      <span> {item.product.size.name}</span>
                    </div>
                  )}
                </div>
                
                
              </div>
            </div>
          ))}
        </div>

        {/* Total Price */}
        <div className="mt-8 pt-6 border-t">
          <div className="flex justify-end">
            <div className="w-full max-w-xs">
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Subtotal:</span>
                <span>Rs. {order.totalPrice}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between py-2 text-lg font-bold">
                <span>Total:</span>
                <span>Rs. {order.totalPrice}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;