import { useCycle } from 'framer-motion'
import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function Carousel({children}: Props) {
    const [items, setItems] = useCycle()
  return (
    
  )
}