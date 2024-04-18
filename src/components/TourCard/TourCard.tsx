'use client'
import { useDBActions } from '@/contexts'
import { isArray } from '@/helpers/predicates'
import type { Tour } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ActionsPanel } from './partials'

type TourCardProps = {
  tour: Tour
}

export const TourCard = ({ tour }: TourCardProps) => {
  let [isActive, setIsActive] = useState(false)

  const actions = useDBActions()
  const { addTour, getProfile, deleteTour, userToursIds } = actions!

  const handleClick = async () => {
    if (!isActive) {
      const user = await getProfile()
      const userId = user[0].id
      addTour(userId, tour)
      setIsActive(true)
    } else {
      deleteTour(tour)
      setIsActive(false)
    }
  }

  useEffect(() => {
    if (isArray(userToursIds) && userToursIds.includes(tour.id)) {
      setIsActive(true)
    }
  }, [tour.id, userToursIds])

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
        <div className='relative aspect-[16/9] w-full'>
          <Image
            className='rounded-lg object-cover'
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
          className='text-center font-extrabold hover:text-yellow-500 hover:underline'
        >
          Buy it on Ticketmaster
        </Link>
      </div>

      <ActionsPanel isActive={isActive} handleClick={handleClick} tour={tour} />

      {tour.featured && (
        <span className='text-xs font-bold text-yellow-500'>Featured</span>
      )}
    </article>
  )
}
