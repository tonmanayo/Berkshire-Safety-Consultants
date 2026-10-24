import { defineArrayMember, defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Blog post",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "highlight",
      type: "string",
      description:
        "The phrase within the title shown in lime, e.g. “dusty” sites. Must appear in the title exactly; left blank, the title renders plain.",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "heroImage",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          validation: (r) => r.required(),
        }),
      ],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "excerpt",
      type: "text",
      rows: 3,
      description: "Shown on the blog index card and in structured data.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO description",
      type: "text",
      rows: 2,
      description: "The meta description. Falls back to the excerpt when blank.",
    }),
    defineField({ name: "publishedAt", type: "datetime", validation: (r) => r.required() }),
    defineField({
      name: "featured",
      type: "boolean",
      description: "Shows the lime Featured tag and pins the post to the top of the index.",
      initialValue: false,
    }),
    defineField({
      name: "ctaLabel",
      title: "CTA label",
      type: "string",
      description: 'Button text at the end of the article. Defaults to "Get in touch".',
    }),
    defineField({
      name: "ctaHref",
      title: "CTA link",
      type: "string",
      description: 'Where the button goes, e.g. /e-learning. Defaults to "/contact".',
    }),
    defineField({
      name: "body",
      type: "array",
      validation: (r) => r.required(),
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Section heading", value: "h2" },
          ],
          lists: [
            { title: "Bulleted", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  defineField({
                    name: "href",
                    type: "url",
                    validation: (r) => r.required().uri({ allowRelative: true }),
                  }),
                ],
              },
            ],
          },
        }),
      ],
    }),
  ],
  orderings: [
    {
      title: "Published, newest",
      name: "publishedDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: { select: { title: "title", subtitle: "publishedAt", media: "heroImage" } },
});
