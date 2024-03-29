import type { Tour } from '@/app/types'
import Image from 'next/image'
import { ActionsPanel } from './partials'
import Link from 'next/link'

type TourCardProps = {
  tour: Tour
}

export const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <article
      className='grid gap-2 self-end hover:m-[-1px] hover:border'
      key={tour.id}
    >
      <div className='grid gap-2' key={tour.id}>
        <h3>{tour.name}</h3>
        {Array.isArray(tour.date) && tour.date.length > 1 ? (
          <div className='grid grid-cols-2 text-xs'>
            <div className='grid'>
              {tour.date.map((date, index) => (
                <span key={index + 2}>{date}</span>
              ))}
            </div>
            <div className='grid text-end'>
              {Array.isArray(tour.city) &&
                tour.city.length > 1 &&
                tour.city.map((city, index) => (
                  <span key={index + 2}>
                    {city}
                    {tour.country[index] && `, ${tour.country[index]}`}
                  </span>
                ))}
            </div>
          </div>
        ) : (
          <div className='grid grid-cols-2 text-xs'>
            <span>{tour.date}</span>
            <div className='grid grid-cols-1 text-right'>
              <span>
                {tour.city}, {tour.country}
              </span>
            </div>
          </div>
        )}

        {/** @todo Put this on a separate `component` */}
        <div className='relative w-full aspect-[16/9]'>
          <Image
            className='object-cover rounded-lg'
            src={tour.cover}
            alt={tour.name}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            quality={75}
            placeholder='blur'
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='
          />
        </div>
        <Link
          href={tour.url}
          target='_blank'
          className='font-extrabold text-center hover:text-yellow-500 hover:underline'
        >
          Buy it on Ticketmaster
        </Link>
      </div>

      <ActionsPanel />

      {tour.featured && (
        <span className='text-xs font-bold text-yellow-500'>Featured</span>
      )}
    </article>
  )
}
