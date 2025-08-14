import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getHeroImages = async () => {
    const ALL_HEROIMAGES_QUERY = defineQuery(`
        *[_type == "heroSection"]{
  "imageUrl": image.asset->url,
  alt
}

`);

 try {
    const images = await sanityFetch({
      query: ALL_HEROIMAGES_QUERY,
    });

    return images.data || [];
  } catch (error) {
    console.error("Error fetching all products:", error);
    return [];
  }
};