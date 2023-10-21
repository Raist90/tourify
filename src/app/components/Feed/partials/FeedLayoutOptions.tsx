import { Grid2X2, Grid3x3, Square } from 'lucide-react'

type FeedLayoutProps = {
  onLayoutChange: (option: string) => () => void
}

/** @todo Make sure to handle `disabled` status on buttons when already selected */
export const FeedLayoutOptions = (props: FeedLayoutProps) => {
  const { onLayoutChange } = props

  return (
    <div className='hidden border sm:grid grid-cols-3 w-max mx-auto gap-2 rounded p-2'>
      <button title='griglia 3x3' onClick={onLayoutChange('grid-cols-3')}>
        <Grid3x3 />
      </button>
      <button title='griglia 2x2' onClick={onLayoutChange('grid-cols-2')}>
        <Grid2X2 />
      </button>
      {/** @todo Make this a list instead of a grid */}
      <button title='lista' onClick={onLayoutChange('grid-cols-1')}>
        <Square />
      </button>
    </div>
  )
}
