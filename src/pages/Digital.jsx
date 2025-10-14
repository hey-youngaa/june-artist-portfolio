import React from 'react'
import Slideshow from '../components/Slildeshow/Slideshow'
import { digitalImages } from '../data/DigitalWorks'

const Digital = () => {
  return (
    <div>
      <Slideshow slides={digitalImages} />
    </div>
  )
}

export default Digital