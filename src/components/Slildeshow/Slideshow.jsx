import React, {useState, useEffect} from 'react'
import { TfiAngleLeft, TfiAngleRight} from 'react-icons/tfi';
import './Slideshow.scss'

const Slideshow = ({slides}) => {
  const [currentIndex, setCurrentIndex] = useState(0)  
  const length = slides.length;

  const prevSlide = () => setCurrentIndex((prev) => (prev === length - 1 ? 0 : prev - 1));
  const nextSlide = () => setCurrentIndex((prev) => (prev === length - 1 ? 0 : prev + 1));

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev === length - 1 ? 0 : prev + 1))
      };
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev === length - 1 ? 0 : prev - 1))
      };
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [length]);

  const { src, alt, title, year } = slides[currentIndex]

  return (
    <div className="slideshow">
        <div className="slideshow-img-wrapper">
            <img src={src} alt={alt}/>
        </div>

        <div className="slideshow-caption">
            <h2 className='title'>{title}</h2>
            <p className='year'>{year}</p>

            <div className="slideshow-controls">
              <button onClick={prevSlide}><TfiAngleLeft /></button>
              <button onClick={nextSlide}><TfiAngleRight /></button>  
            </div>
        </div>
    </div>
  )
}

export default Slideshow