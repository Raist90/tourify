/** @todo Make sure to find a valid architectural solution for this file */

export type FeedType = {
  header: {
    title: string
    text: string
  }
}

export type HomepageType = {
  homepage: {
    title: string
    slug: string
  }
}

/** @todo `Name` will probably be a discriminated union lately  */
export type Block = {
  name: 'Text'
  data: any
}

/** @todo Make sure to type `blocks` */
export type PageType = {
  title: string
  blocks: Block[]
}
