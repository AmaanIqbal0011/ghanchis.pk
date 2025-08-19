// /sanity/schemas/marquee.ts
import { defineType, defineField } from "sanity";

export const marqueeComments = defineType({
  name: "marquee",
  title: "Marquee Comments",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Optional title to identify this marquee set"
    }),
    defineField({
      name: "items",
      title: "Marquee Items",
      type: "array",
      description: "List of strings to display in marquee",
      of: [
        defineField({
          type: "string",
          name: "marqueeItem",
          title: "Marquee Item"
        })
      ]
    })
  ]
});
