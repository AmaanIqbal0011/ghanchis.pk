import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const GetProductDetailBySlug = async (slug) => {
  const PRODUCT_DETAIL_BY_SLUG = defineQuery(`
    
*[_type == "product" && slug.current == $slug][0]{
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

  // Dereference category
  category[]->{
    name,
    _id,
    slug,
  },

  // Dereference collections
  collections[]->{
    _id,
    title,
  },

  // Dereference size
  size->{
    name,
    fitting,
    ageGroup,
    kameezLength,
    sleevesLength,
    shoulder,
    chest,
    shalwarLength,
    paienchaWidth,
    sleevesStyle,

  },

 
}


    `);

  try {
    const products = await sanityFetch({
      query: PRODUCT_DETAIL_BY_SLUG,
      params: {
        slug,
      },
    });

    return products.data || [];
  } catch (error) {
    console.error("Error fetching all products:", error);
    return [];
  }
};
