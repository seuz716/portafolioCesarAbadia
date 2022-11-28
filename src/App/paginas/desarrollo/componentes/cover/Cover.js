import React from "react";
const video = require("https://res.cloudinary.com/seuz/image/upload/v1669571017/videos/WhatsApp_Image_2021-01-25_at_12.01.30_eopdzv.jpg")
const Cover = () => {
  return (
    <div className="cover-container"  >
          <video className="video" src= {video}   autoPlay loop muted/>
   
    </div>
  );
};

export default Cover;