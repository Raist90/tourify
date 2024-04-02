import { PortableText } from '@portabletext/react'
import type { TextBlock } from '@/types/blocks'

export const Text = ({
  renderTitle,
  title,
  text,
  isTextSticky = false,
}: TextBlock) => {
  const sticky = isTextSticky ? 'md:sticky md:place-self-end md:bottom-12' : ''
  return (
    <section className={`flex flex-col gap-2 ${sticky}`}>
      {renderTitle && <h2 className='text-2xl'>{title}</h2>}
      <PortableText value={text} />
    </section>
  )
}
