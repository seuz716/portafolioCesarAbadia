import React from "react";
import "./Cover.css"
const video = "https://res.cloudinary.com/seuz716/video/upload/v1667853350/CoverVideo_e0qhsh.mp4"
const video2="../../media/CoverVideo.mp4"
const Cover = () => {
  return (
    <div className="cover-container"  >
      <video className="video" src={video || video2  } autoPlay loop muted/>
      <h1 >César Andrés Abadía Dávila</h1>
      <p> Desarollador | Diseñador | Contador Público | Creador de contenido </p>
    </div>
  );
};

export default Cover;
