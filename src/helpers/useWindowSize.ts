'use client'
import { useEffect, useState } from 'react'

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ])

  useEffect(() => {
    const handleResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return windowSize
}
