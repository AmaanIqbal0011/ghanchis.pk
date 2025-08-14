import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllCollection = async () => {
  const ALL_COLLECTION_QUERY = defineQuery(`
        *[
            _type == "collectionType"
        ] | order(title asc)
        `);

  try {
    const collection = await sanityFetch({
      query: ALL_COLLECTION_QUERY,
    });

    return collection.data || [];
  } catch (error) {
    console.error("Error fetching all collection:", error);
    return [];
  }
};
