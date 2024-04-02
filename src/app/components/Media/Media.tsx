'use client'
import NextImage from 'next/image'
import type { MediaProps } from '.'

export const Media = ({ image }: MediaProps) => {
  return (
    <NextImage
      className='object-cover'
      src={image.src}
      alt={image.alt}
      fill={true}
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      quality={image.quality}
      placeholder='blur'
      blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='
    />
  )
}
