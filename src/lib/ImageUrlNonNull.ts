// src/lib/imageUrl.ts
import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { projectId, dataset } from '@/sanity/env'

// 1) make sanity client
const client = createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion: '2024-06-01',
})

// 2) make builder instance
const builder = imageUrlBuilder(client)

// 3) helper fn
export function imageUrl(source: any) {
  return builder.image(source)
}
