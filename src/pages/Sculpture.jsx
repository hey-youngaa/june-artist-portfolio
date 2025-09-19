import React from 'react'
import Gallery from '../components/Gallery/Gallery'
import { sculptureImages } from '../data/SculptureWorks'

const Sculpture = () => {
  return (
    <div>
      <Gallery images={sculptureImages} />
    </div>
  )
}

export default Sculpture