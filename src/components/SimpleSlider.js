import React, { useState, useRef, useEffect } from 'react';
import './SimpleSlider.css';

const SimpleSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Handle touch gestures
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }

    if (touchEnd - touchStart > 50) {
      prevSlide();
    }
  };

  // Navigation functions
  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  // Auto-advance (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div 
      className="slider-container"
      ref={sliderRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div 
        className="slider-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className="slide"
            aria-hidden={index !== currentIndex}
          >
            <img 
              src={slide.image} 
              alt={slide.alt} 
              className="slide-image"
              loading="lazy"
            />
            {slide.caption && (
              <div className="slide-caption">
                <h3>{slide.caption.title}</h3>
                <p>{slide.caption.text}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="slider-arrow prev" onClick={prevSlide}>
        &lt;
      </button>
      <button className="slider-arrow next" onClick={nextSlide}>
        &gt;
      </button>

      {/* Dots Indicator */}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SimpleSlider;