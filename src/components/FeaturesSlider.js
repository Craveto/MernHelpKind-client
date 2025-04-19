import React, { useState, useRef } from 'react';
import './FeaturesSlider.css';

// Direct image imports (place these files in your src/assets folder)
import foundation1 from '../assets/foundation1.jpg';
import foundation2 from '../assets/foundation2.jpg';
import foundation3 from '../assets/foundation3.jpg';

const FeaturesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const touchStartX = useRef(0);
  const isDragging = useRef(false);

  const features = [
    {
      title: "VK Foundation",
      description: "Transforming customer experiences through innovative solutions.",
      image: foundation1
    },
    {
      title: "Aeron Foundation",
      description: "Setting new standards in competitive advantage.",
      image: foundation2
    },
    {
      title: "Bowana Community",
      description: "Shaping the social future through technology.",
      image: foundation3
    }
  ];

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? features.length - 1 : prev - 1));
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const touchX = e.touches[0].clientX;
    const diff = touchStartX.current - touchX;
    
    if (diff > 50) {
      nextSlide();
      isDragging.current = false;
    } else if (diff < -50) {
      prevSlide();
      isDragging.current = false;
    }
  };

  // Mouse handlers
  const handleMouseDown = (e) => {
    touchStartX.current = e.clientX;
    isDragging.current = true;
    sliderRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const mouseX = e.clientX;
    const diff = touchStartX.current - mouseX;
    
    if (diff > 50) {
      nextSlide();
      isDragging.current = false;
    } else if (diff < -50) {
      prevSlide();
      isDragging.current = false;
    }
  };

  const handlePointerEnd = () => {
    isDragging.current = false;
    if (sliderRef.current) {
      sliderRef.current.style.cursor = 'grab';
    }
  };

  return (
    <section className="features-slider">
      <div 
        className="slider-container"
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handlePointerEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handlePointerEnd}
        onMouseLeave={handlePointerEnd}
        style={{ cursor: 'grab' }}
      >
        {features.map((feature, index) => (
          <div 
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ 
              transform: `translateX(${-currentSlide * 100}%)`,
              backgroundImage: `url(${feature.image})`
            }}
            aria-hidden={index !== currentSlide}
          >
            <div className="slide-content">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="slider-controls">
        <button className="slider-nav prev" onClick={prevSlide} aria-label="Previous slide">
          &lt;
        </button>
        
        <div className="slider-dots">
          {features.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <button className="slider-nav next" onClick={nextSlide} aria-label="Next slide">
          &gt;
        </button>
      </div>
    </section>
  );
};

export default FeaturesSlider;