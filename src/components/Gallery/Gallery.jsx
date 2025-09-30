import React, {useState, useEffect, useCallback} from 'react'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';
import { TfiClose, TfiAngleLeft, TfiAngleRight} from 'react-icons/tfi';

import './Gallery.scss'

const Gallery = ({images}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);


  const closeLightbox = () => setLightboxOpen(false);

  const showPrev = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev - 1));
  const showNext = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const handleKeyDown = useCallback(
    (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => prev === images.length - 1 ? 0 : prev + 1)
      };
      if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => prev === images.length - 1 ? 0 : prev - 1)
      }
      if (e.key === 'Escape') setLightboxOpen(false);
    },
    [lightboxOpen, images.length]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      <div className="gallery">
          <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 768: 2}} >
            <Masonry gutter='16px'>
              {images.map((image,index) => {
                return(
                  <div className="gallery-item" key={index}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      onClick={() =>{
                          setCurrentIndex(index);
                          setLightboxOpen(true);
                      }}
                    />
                  </div>
                )
              })}
            </Masonry>
        </ResponsiveMasonry>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className='lightbox'>
          <button className='lightbox-close' onClick={closeLightbox}><TfiClose size={32} /></button>
          <button className='lightbox-prev' onClick={showPrev}><TfiAngleLeft size={32} /></button>

          {/* Image details include title, dimension, material and year if present */}
          <div className="lightbox-content">
            <img src={images[currentIndex].src} alt={images[currentIndex].alt} />

            <div className="lightbox-info">
              {images[currentIndex].title && (
                <h2>{images[currentIndex].title}</h2>
              )}

              {images[currentIndex].dimension && (
                <p className='lightbox-detail dimension'>{images[currentIndex].dimension}</p>
              )}

              {images[currentIndex].material && (
                <p className='lightbox-detail material'>{images[currentIndex].material}</p>
              )}

              {images[currentIndex].year && (
                <p className='lightbox-detail year'>{images[currentIndex].year}</p>
              )}

            </div>
          </div>
          
          <button className='lightbox-next' onClick={showNext}><TfiAngleRight size={32} /></button>
        </div>
      )}
    </>
  )
}

export default Gallery