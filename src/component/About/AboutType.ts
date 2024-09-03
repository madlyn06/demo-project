export interface AboutUsType {
  title: string
  description: string
  since: string
  titleImage: string
  descriptionImage: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  background: Background
  subImage: Background
  ItemPreview: ItemPreview[]
}
interface ItemPreview {
  id: number
  title: string
  description: string
}
interface Background {
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
  small: Thumbnail
  medium: Thumbnail
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
