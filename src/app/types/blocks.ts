import { TypedObject } from "sanity"

export type BaseBlock = {
  id: string
  name: string
  type: string
}

export type TextBlock = BaseBlock & {
  renderTitle: boolean
  title: string
  text: TypedObject[]
}

