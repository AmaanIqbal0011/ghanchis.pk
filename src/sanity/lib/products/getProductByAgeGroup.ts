import { defineQuery } from "next-sanity"
import { sanityFetch } from "../live";

export const getProductsByAgeGroup = async (ageGroup: number) => {
const PRODUCT_BY_SIZE = defineQuery(`
  *[_type == "product" && size->ageGroup == $ageGroup] {
  _id,
  title,
  slug,
  image,
  price,
  oldPrice,
  description,
  stock,
  featured,
  tags,
  sku,
  collections[]->{
    title
  },
  size->{
    name
  }
}

    `)

      try {
        const products = await sanityFetch({
          query: PRODUCT_BY_SIZE,
          params : {
            ageGroup,
          }
        });
    
        return products.data || [];
      } catch (error) {
        console.error("Error fetching all products by size:", error);
        return [];
      }
    

}