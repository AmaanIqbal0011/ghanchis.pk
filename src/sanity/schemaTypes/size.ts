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
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 50,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ageGroup",
      title: "Recommended Age (for kids)",
      type: "array",
      description: "e.g. 2-3 years, 4-5 years",
      of: [{ type: "string" }], // <-- fixed here
    }),
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
  ],

  preview: {
    select: {
      title: "name",
      ageGroup: "ageGroup",
      fitting: "fitting",
      sleevesStyle: "sleevesStyle",
    },
    prepare({ title, ageGroup, fitting, sleevesStyle }) {
      return {
        title,
        subtitle: [
          ageGroup && ageGroup.length ? `Age: ${ageGroup.join(", ")}` : null,
          fitting ? `Fit: ${fitting}` : null,
          sleevesStyle ? `Sleeves: ${sleevesStyle}` : null,
        ]
          .filter(Boolean)
          .join(" | "),
      };
    },
  },
});
