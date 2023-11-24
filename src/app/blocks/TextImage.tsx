import { ComponentType } from 'react'
import type { TextImageBlock } from '@/types/blocks'
import { Text } from './Text'
/** @description Here we rename the `Image` component to `ImageBlock` because `eslint` is stupid and thinks there's no `alt` tag even if the type of `image` is inferred correctly and actually contains an `alt` prop */
import { Image as ImageBlock } from './Image'

export const TextImage: ComponentType<TextImageBlock> = ({
  caption,
  image,
  renderCaption,
  renderTitle,
  title,
  text,
  imagePosition,
  type,
  id,
}) => {
  /** @todo I need to find a better solution to provide `ìds` here because I want them to be unique */
  const imageBlockProps = { caption, renderCaption, image, type, id }
  const textBlockProps = { renderTitle, title, text, type, id }
  const renderOrder = (renderIndex: string) => {
    if (renderIndex === 'right')
      return (
        <>
          <Text {...textBlockProps} isTextSticky />
          <ImageBlock {...imageBlockProps} />
        </>
      )
    return (
      <>
        <ImageBlock {...imageBlockProps} />
        <Text {...textBlockProps} isTextSticky />
      </>
    )
  }

  return (
    <>
      <section className='grid md:grid-cols-2 gap-6'>
        {renderOrder(imagePosition)}
      </section>
    </>
  )
}
