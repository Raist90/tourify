import { Grid2X2, Grid3x3, Square } from 'lucide-react'
import { LayoutOptionType } from '..'

type FeedLayoutProps = {
  focus: LayoutOptionType['key']
  onLayoutChange: (option: LayoutOptionType['key']) => () => void
}

const layoutOptions: LayoutOptionType[] = [
  { key: 'grid-cols-3', title: 'Griglia 3x3', icon: <Grid3x3 /> },
  { key: 'grid-cols-2', title: 'Griglia 2x2', icon: <Grid2X2 /> },
  /** @todo Make this a list instead of a grid */
  { key: 'grid-cols-1', title: 'Lista', icon: <Square /> },
]

export const FeedLayoutOptions = (props: FeedLayoutProps) => {
  const { focus, onLayoutChange } = props

  return (
    <div className='hidden border lg:grid grid-cols-3 w-max mx-auto gap-2 rounded p-2'>
      {layoutOptions.map(({ key, title, icon }) => (
        <button
          className={focus === key ? 'ring-2 ring-violet-500' : ''}
          title={title}
          onClick={onLayoutChange(key)}
          key={key}
        >
          {icon}
        </button>
      ))}
    </div>
  )
}
