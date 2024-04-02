'use client'

import { NextStudio } from 'next-sanity/studio'
/** @todo This import is ugly as f*** */
import config from '@/sanity/sanity.config'

export default function StudioPage() {
  return <NextStudio config={config} />
}
