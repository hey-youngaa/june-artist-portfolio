import React from 'react'
import SeriesGallery from '../components/SeriesGallery/SeriesGallery'
import Gallery from '../components/Gallery/Gallery'
import { drawingImages, drawingSeries } from '../data/DrawingWorks'

const Drawing = () => {
  return (
    <div>
      <SeriesGallery series={drawingSeries} />
      <Gallery images={drawingImages} />
    </div>
  )
}

export default Drawing