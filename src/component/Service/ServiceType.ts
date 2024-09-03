export interface ServiceType {
  title: string
  heading: string
  description: string
  titleSub: string
  descriptionSub: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  image: Image
  subImage: Image
  OfferItem: OfferItem[]
}
export interface OfferItem {
  id: number
  title: string
  description: string
}
interface Image {
  data: Data
}
interface Data {
  id: number
  attributes: Attributes
}
interface Attributes {
  name: string
  alternativeText?: any
  caption?: any
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl?: any
  provider: string
  provider_metadata?: any
  createdAt: string
  updatedAt: string
}
interface Formats {
  thumbnail: Thumbnail
  medium: Thumbnail
  small: Thumbnail
  large: Thumbnail
}
interface Thumbnail {
  name: string
  hash: string
  ext: string
  mime: string
  path?: any
  width: number
  height: number
  size: number
  sizeInBytes: number
  url: string
}
