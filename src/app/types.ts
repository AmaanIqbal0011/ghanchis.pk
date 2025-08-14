export default interface Product {
  _id: string
  title: string
  slug: {
    current: string
  }
  image: Array<{
    _key?: string
    _type: 'image'
    asset: {
      _ref: string
      _type: 'reference'
    }
    alt?: string
    caption?: string
  }>
  price: number
  oldPrice?: number
  description?: string
  stock?: number
  featured?: boolean
  tags?: string[]
  sku?: string
  category?: Array<{
    _id: string
    name: string
    slug: {
      current: string
    }
  }>
  collections?: Array<{
    _id: string
    title: string
  }>
  size?: {
    name: string
    fitting?: string
    ageGroup?: string
    kameezLength?: string
    sleevesLength?: string
    shoulder?: string
    chest?: string
    shalwarLength?: string
    paienchaWidth?: string
    sleevesStyle?: string
  }
}