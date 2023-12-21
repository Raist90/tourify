import { Feed } from '@/app/components'

/** @todo This file is work in progress until I figure out how many different routes we need */
export const pageGetter = (route: string, opts: string) => {
  const pageTypeList = ['search']

  if (pageTypeList.includes(route)) {
    const keyword = opts
    const header = {
      title: opts || 'all',
      text: `All available results for the query "${opts || 'all'}"`,
    }
    return <Feed header={header} keyword={keyword} />
  }
}
