import type { Tour } from '@/types'
import { Tabs } from '../Tabs'
import { TourCard } from '../TourCard'

type DashboardProps = {
  /** @todo Replace this with `username` */
  email?: string
  tours: Tour[] | []
}

const links = [
  {
    label: 'My tours',
    path: '/user/dashboard',
    url: 'dashboard',
  },
]

export const Dashboard = ({ email, tours }: DashboardProps) => {
  return (
    <section>
      <div className='px-4'>
        <h2 className='text-2xl'>Dashboard</h2>
        <p>{email}</p>
      </div>

      <div className='px-4'>
        <Tabs links={links} />
      </div>

      <div
        className={`grid grid-cols-1 gap-4 text-start md:grid-cols-3 xl:grid-cols-4`}
      >
        {tours.length > 0 &&
          tours.map((tour) => <TourCard key={tour.id} tour={tour} />)}
      </div>
    </section>
  )
}
