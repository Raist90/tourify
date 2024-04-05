import { Media } from '../components'
import type { ImageBlock } from '../types'

export const Image = ({ caption, image }: ImageBlock) => {
  return (
    <section className='flex flex-col gap-3'>
      <picture className='relative h-[400px] lg:h-[700px]'>
        <Media image={image} />
      </picture>
      {caption && <p className='text-xs'>{caption}</p>}
    </section>
  )
}
