

import { defineQuery } from "next-sanity"
import { sanityFetch } from "../live"

export const getProductsByAgeGroup = async (ageGroup: string) => {
  const PRODUCT_BY_AGE = defineQuery(`
    *[_type == "product" && $ageGroup in size->ageGroup[]] {
    }
  `)

  try {
    const products = await sanityFetch({
      query: PRODUCT_BY_AGE,
      params: {
        ageGroup,
      },
    });

    return products.data || [];
  } catch (error) {
    console.error("Error fetching products by age group:", error);
    return [];
  }
}
