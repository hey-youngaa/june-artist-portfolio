import React from 'react'
import SeriesGallery from '../components/SeriesGallery/SeriesGallery'
import Gallery from '../components/Gallery/Gallery'
import { sculptureImages, sculptureSeries } from '../data/SculptureWorks'


const Sculpture = () => {
  return (
    <div>
      <SeriesGallery series={sculptureSeries} />
      <Gallery images={sculptureImages} />
    </div>
  )
}

export default Sculpture