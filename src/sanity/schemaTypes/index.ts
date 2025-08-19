import { type SchemaTypeDefinition } from 'sanity'
import productType from './productType'
import { CategoryType } from './categoryType'
import { size } from './size'
import { orderType } from './orderType'
import { collectionType } from './collectionType'
import { salesType } from './salesType'
import { heroSection } from './heroSection'
import { ArticleType } from './articleType'
import { marqueeComments } from './marqueeComments'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType,CategoryType,size,orderType,collectionType,salesType,heroSection,ArticleType,marqueeComments],
}
