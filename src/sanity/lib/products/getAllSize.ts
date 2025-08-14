import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllSize = async () => {
  const ALL_SIZE_QUERY = defineQuery(`
        *[
            _type == "size"
        ] | order(title asc)
        //  {
        //     name,
        // }
        `);

  try {
    const categories = await sanityFetch({
      query: ALL_SIZE_QUERY,
    });

    return categories.data || [];
  } catch (error) {
    console.error("Error fetching all Sizes:", error);
    return [];
  }
};
