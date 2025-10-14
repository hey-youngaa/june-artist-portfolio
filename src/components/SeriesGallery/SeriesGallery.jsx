import React from 'react'
import { useNavigate } from 'react-router-dom'

import './SeriesGallery.scss'

const SeriesGallery = ({series}) => {
    const navigate = useNavigate();

  return (
    <>
        <div className="series-gallery">
            {series.map((item, index) => {
                return(
                    <div 
                        className="series-item"
                        key={index}
                        onClick={() => navigate(`/${item.category}/series/${item.id}`)}
                    >
                        <img
                            src={item.cover}
                            alt={item.alt}
                        />
                        <h2> {item.title}</h2>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default SeriesGallery