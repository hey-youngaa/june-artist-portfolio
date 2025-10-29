import React from 'react'
import { useParams, Link } from 'react-router-dom'

import Gallery from '../Gallery/Gallery';
import './SeriesDetails.scss'

import { sculptureSeries } from '../../data/SculptureWorks';
import { drawingSeries } from '../../data/DrawingWorks';

const dataSource = {
  sculpture: sculptureSeries,
  drawing: drawingSeries
}

const SeriesDetails = () => {
    const {category, seriesId} = useParams();
    
    const dataset = dataSource[category];
    const series = dataset.find((s) => s.id === seriesId)
  return (
    <div className="series-content">
      <div className="series-info">
        <h1>{series.title}</h1>

        {series.dimension && (
          <p className='series-detail dimension'>{series.dimension}</p>
        )}

        {series.material && (
          <p className='series-detail material'>{series.material}</p>
        )}

        {series.year && (
          <p className='series-detail year'>{series.year}</p>
        )}

        {series.description && (
          <p className='series-detail description'>{series.description}</p>
        )}
      </div>

      <Gallery images={series.images} />
      
      <Link to={`/${category}`} className='back-link'>
        Back
      </Link>
    </div>
  )
}

export default SeriesDetails
