import { defineQuery } from "next-sanity"
import { sanityFetch } from "../live";

export const GetProductBySlug = async (slug : string) => {
const PRODUCT_BY_SLUG = defineQuery(`
    *[_type == "product" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    price,
    oldPrice,
    stock,
    images,
    colors,
    featured,
    sku,

    // references:
    "size": size->{
      _id,
      name
    },
    "categories": category[]->{
      _id,
      name,
    },
    "collectionType": collections[]->{
      _id,
      title,
    }
  }
    `)

      try {
        const products = await sanityFetch({
          query: PRODUCT_BY_SLUG,
          params : {
            slug,
          }
        });
    
        return products.data || [];
      } catch (error) {
        console.error("Error fetching all products:", error);
        return [];
      }
    

}