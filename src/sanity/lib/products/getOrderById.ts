import { defineQuery } from "next-sanity"
import { sanityFetch } from "../live";

export const getProductsByOrderId = async (orderId: string) => {
const PRODUCT_BY_ORDER_ID = defineQuery(`*[_type == "order" && orderId == $orderId]{
  orderId,
  userInfo,
  totalPrice,
  status,
  basket[]{
    quantity,
    product{
      name,
      price,
      "imageUrl": image.asset->url,
      size{
        ageGroup,
        chest,
        fitting,
        kameezLength,
        name,
        paienchaWidth,
        shalwarLength,
        shoulder,
        sleevesLength,
        sleevesStyle
      }
    }
  },
  totalPrice,
  timestamp
}`)

      try {
        const products = await sanityFetch({
          query: PRODUCT_BY_ORDER_ID,
          params : {
            orderId,
          }
        });
    
        return products.data || [];
      } catch (error) {
        console.error("Error fetching Orders By Order Id:", error);
        return [];
      }
    

}