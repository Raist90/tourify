import { ComponentType } from "react"
import type { TextBlock } from '~types/blocks'

export const Text: ComponentType<TextBlock> = ({ renderTitle, title, text }) => {
  return (
    <section className="grid gap-2">
      {renderTitle && (
        <h2 className="text-2xl">{title}</h2>
      )
      }
      <p>{text}</p>
    </section>
  )
}