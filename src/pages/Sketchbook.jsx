import React from 'react'
import Gallery from '../components/Gallery/Gallery'
import { sketchbookImages } from '../data/SketchbookWorks'

const Sketchbook = () => {
  return (
    <div>
        <Gallery images={sketchbookImages} />
    </div>
  )
}

export default Sketchbook
