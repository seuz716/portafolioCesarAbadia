import React from 'react'
import Carousel from 'react-elastic-carousel';
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <h2>Proyectos</h2>
      </div>

      
      <Carousel>
       {Slides}
      </Carousel >
      </div>
  );
};

export default Slider;