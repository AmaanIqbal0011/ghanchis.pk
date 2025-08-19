import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllMarqueeComments = async () => {
  const ALL_MARQUEE_COMMENTS_QUERY = defineQuery(`
        *[
            _type == "marquee"
        ] | order(title asc)
        `);

  try {
    const collection = await sanityFetch({
      query: ALL_MARQUEE_COMMENTS_QUERY,
    });

    return collection.data || [];
  } catch (error) {
    console.error("Error fetching all Marquee Comments:", error);
    return [];
  }
};
