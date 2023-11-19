import { TypedObject } from "sanity"

export type BaseBlock = {
  id: string
  name: string
  type: string
}

export type TextBlock = BaseBlock & {
  /** @description If true, the title will be rendered on the page */
  renderTitle: boolean
  /** @description This is the title of the block */
  title: string
  /** @description This is the text of the block */
  text: TypedObject[]
}

type Image = {
  /** @description This is the alt text of the image */
  alt: string
  /** @description This is the quality of the image. Choose 100 for full quality */
  quality: | 50 | 75 | 100
  /** @description This is the url of the image */
  src: string
}

export type ImageBlock = BaseBlock & {
  /** @description This is the caption of the image */
  caption?: string
  /** @description This is the image of the block */
  image: Image
  /** @description If true, the caption will be rendered on the page */
  renderCaption: boolean
}

