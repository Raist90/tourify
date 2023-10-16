import { Grid2X2, Grid3x3, Square } from 'lucide-react'

type FeedLayoutProps = {
  onLayoutChange: (option: string) => () => void
}

export const FeedLayoutOptions = (props: FeedLayoutProps) => {
  const { onLayoutChange } = props

  return (
    <div className='border grid grid-cols-3 w-max inline-block mx-auto gap-2 rounded p-2'>
      <button onClick={onLayoutChange('grid-cols-3')}>
        <Grid3x3 />
      </button>
      <button onClick={onLayoutChange('grid-cols-2')}>
        <Grid2X2 />
      </button>
      <button onClick={onLayoutChange('grid-cols-1')}>
        <Square />
      </button>
    </div>
  )
}
