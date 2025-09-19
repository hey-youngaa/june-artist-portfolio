import React from 'react'
import Gallery from '../components/Gallery/Gallery'
import { paintingImages } from '../data/PaintingWorks'

const Painting = () => {
  return (
    <div>
      <Gallery images={paintingImages} />
    </div>
  )
}

export default Painting