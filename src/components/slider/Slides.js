import React from "react";
import "./Slider.css";

const slidesInfo = [
  {
    id: 1,
    src: "https://res.cloudinary.com/seuz716/image/upload/v1667796640/equipo_de_trabajo_hnfhzt.jpg",
    alt: "Proyecto 1",
    desc: "Proyecto 1",
    name:"Api Generacion electrica mundial",
    link: "https://apielectricas.herokuapp.com/",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/seuz716/image/upload/v1667796639/equipo_de_trabajo_II_x4ahjm.jpg",
    alt: " Proyecto 2",
    desc: "Proyecto 2",
    name:"Ingenieria",
    link: "https://safe-bayou-82801.herokuapp.com/",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/seuz716/image/upload/v1667796907/desarrolloIII_yhsk2r.jpg",
    alt: "Proyect 3",
    desc: "Proyecto 3",
    name:"Portafolio",
    link: "https://portfoliocesar.herokuapp.com/",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/seuz716/image/upload/v1667796907/desarrolloIII_yhsk2r.jpg",
    alt: "Proyecto 4",
    desc: "Proyecto 4",
    name:"Api Generacion electrica mundial",
    link: "https://apielectricas.herokuapp.com/",
  },
];

const slides = slidesInfo.map((slide) => (
  <div key={slide.id} className="slide-container">
   <a title={slide.alt} href={slide.link} ><img src={slide.src} alt={slide.alt} /></a>
     <div className="slide-desc">
      <span>{slide.desc} {slide.name} </span>
    </div>
  </div>
));

export default slides;
