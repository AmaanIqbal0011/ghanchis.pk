import { TrolleyIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  icon: TrolleyIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "title", maxLength: 96 },
    }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "price",
      type: "number",
      title: "Price",
    }),
    defineField({
      name: "oldPrice",
      type: "number",
      title: "Old Price (Optional)",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Write a short description of the product",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
      validation: (Rule) =>
        Rule.required().min(1).error("At least one category is required"),
    }),
    defineField({
      name: "collections",
      title: "Collections",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "collectionType" }],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "size",
      title: "Available Sizes",
      type: "reference",
      to: [{ type: "size" }],
    }),
    defineField({
      name: "colors",
      title: "Available Colors",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "stock",
      type: "number",
      title: "Stock Available (Pieces)",
      validation: (Rule) => Rule.min(0),
      description: "Enter how many pieces are currently available.",
    }),
    defineField({
      name: "featured",
      type: "boolean",
      title: "Featured Product",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "sku",
      type: "string",
      title: "SKU (Product ID)",
    }),
    defineField({
      name: "createdAt",
      type: "datetime",
      title: "Created At",
    }),
    defineField({
      name: "updatedAt",
      type: "datetime",
      title: "Last Updated At",
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "image",
      price: "price",
      stock: "stock",
    },
    prepare(selection) {
      const { title, media, price, stock } = selection;
      return {
        title: title,
        subtitle: `Rs. ${price} -- stock : ${stock}`,
        media: media,
      };
    },
  },
});

export default productType;
