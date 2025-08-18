import {TagIcon} from "@sanity/icons"
import { defineField, defineType } from "sanity"

export const AgeGroupType = defineType(
    {
        name : "ageGroup",
        title : "Age Group",
        type : 'document',
        icon : TagIcon,
       fields: [
    defineField({
      name: "name",
      title: "Age ",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",

    },
    prepare(selection) {
      const { title } = selection;
      return {
        title : `${title} years old` ,
      };
    },
  },

    }
)