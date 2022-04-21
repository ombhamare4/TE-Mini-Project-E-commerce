import React, { useState } from 'react';
import { SliderImages } from './SliderImages';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import classes from './Slider.module.css';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const leng = SliderImages.length;

  const nextSlide = () => {
    setCurrent(current === leng - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? leng - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.leng <= 0) {
    return null;
  }

  return (
  <section className={classes.slider}>
      <FaArrowAltCircleLeft className={classes.leftArrow} onClick={prevSlide} />
    <FaArrowAltCircleRight className={classes.rightArrow} onClick={nextSlide} />
      {SliderImages.map((slide, index) => {
        return (
          <div
            className={`${classes.slider} ${index === current ? 'classes.active' : ''}`}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className={classes.image} />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
