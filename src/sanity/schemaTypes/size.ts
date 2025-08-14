// schemas/size.ts

import { defineType, defineField } from "sanity";

export const size = defineType({
  name: "size",
  title: "Size",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Size Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ageGroup",
      title: "Recommended Age (for kids)",
      type: "string",
      description: "e.g. 2-3 years, 4-5 years",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 50,
      },
      validation: (Rule) => Rule.required(),
    }),

    // Measurements
    defineField({
      name: "kameezLength",
      title: "Kameez Length (inches)",
      type: "number",
    }),
    defineField({
      name: "sleevesLength",
      title: "Sleeves Length (inches)",
      type: "number",
    }),
    defineField({
      name: "shoulder",
      title: "Shoulder Width (inches)",
      type: "number",
    }),
    defineField({
      name: "fitting",
      title: "Fitting Type",
      type: "string",
      options: {
        list: [
          { title: "Regular Fit", value: "regular" },
          { title: "Slim Fit", value: "slim" },
          { title: "Loose Fit", value: "loose" },
        ],
      },
    }),
    defineField({
      name: "chest",
      title: "Chest (inches)",
      type: "number",
    }),
    defineField({
      name: "shalwarLength",
      title: "Shalwar Length (inches)",
      type: "number",
    }),
    defineField({
      name: "paienchaWidth",
      title: "Paiencha Width (inches)",
      type: "number",
    }),

    // Aasteen style
    defineField({
      name: "sleevesStyle",
      title: "Sleeves Style (Aasteen)",
      type: "string",
      options: {
        list: [
          { title: "Goll Aasteen", value: "golla" },
          { title: "Cuff Aasteen", value: "cuff" },
          { title: "Straight Aasteen", value: "straight" },
          { title: "No Sleeves", value: "none" },
        ],
      },
    }),

    // Optional description
    defineField({
      name: "description",
      title: "Notes / Description",
      type: "text",
    }),
  ],
});
