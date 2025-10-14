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
    <div className="series-detail">
      <div className="series-info">
        <h1>{series.title}</h1>

        {series.dimension && (
          <p className='dimension'>{series.dimension}</p>
        )}

        {series.material && (
          <p className='material'>{series.material}</p>
        )}

        {series.year && (
          <p className='year'>{series.year}</p>
        )}

        {series.description && (
          <p>{series.description}</p>
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
