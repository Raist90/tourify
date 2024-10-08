import { TypedObject } from 'sanity'

export type BaseBlock = {
  id: string
  /** @todo I need to figure out what to do with this field */
  name?: string
  type: string
}

type Image = {
  /** This is the alt text of the image */
  alt: string
  /** This is the quality of the image. Choose 100 for full quality */
  quality: 50 | 75 | 100
  /** This is the url of the image */
  src: string
}

export type ImageBlock = BaseBlock & {
  /** This is the caption of the image */
  caption?: string
  /** This is the image of the block */
  image: Image
  /** If true, the caption will be rendered on the page */
  renderCaption: boolean
}

export type TextBlock = BaseBlock & {
  /** If true, the title will be rendered on the page */
  renderTitle: boolean
  /** This is the title of the block */
  title: string
  /** This is the text of the block */
  text: TypedObject[]
  /**
   * If true, the text will be sticky. This is not coming from the `cms` so it's
   * `false` by default but then it's `true` if we nest the block inside a
   * `TextMedia` block
   */
  isTextSticky: boolean
}

export type TextImageBlock = BaseBlock &
  TextBlock &
  ImageBlock & {
    /** This is the position of the image */
    imagePosition: 'left' | 'right'
    /** @todo We may add a `stickyText` boolean option here later */
  }
