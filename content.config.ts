import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    pages: defineCollection({
      schema: z.object({
        date: z.string(),
      }),
      source: 'pages/*.md',
      type: 'page',
    }),
  },
})
