import { defineType, defineField } from "sanity";
import { ImagesIcon } from "@sanity/icons";

export const collectionType = defineType({
  name: "collectionType",
  title: "Collection",
  type: "document",
  icon: ImagesIcon,

  fields: [
    defineField({
      name: "title",
      title: "Collection Title",
      type: "string",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "showOnCollectionsPage",
      title: "Show on Collections Page",
      type: "boolean",
      initialValue: true,
    }),

    // defineField({
    //   name: "products",
    //   title: "Products in this Collection",
    //   type: "array",
    //   of: [
    //     {
    //       type: "reference",
    //       to: [{ type: "product" }],
    //     },
    //   ],
    // }),
  ],

  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: `${title}`,
      };
    },
  },
});
