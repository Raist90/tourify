type NavigationItemType = {
  id: string
  type: 'internal' | 'external'
  label: string
  href: string
  hasChildren: false
}

export type ParentNavigationItemType = NavigationItemType & {
  hasChildren: boolean
  children?: NavigationItemType[]
}

export type NavigationType = {
  navigation: {
    primary: ParentNavigationItemType[]
    secondary: ParentNavigationItemType[]
  }
}
