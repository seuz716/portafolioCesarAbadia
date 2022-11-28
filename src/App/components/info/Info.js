import React from "react";
import "./Info.css";

const Info = () => {
  return (
    <div className="info-container">
      <div className="info">
        <h1>Trabajemos juntos y mejoremos el mundo </h1>
        <hr></hr>
        <br></br>
        <p> Dale click y descarga mi curriculum </p>
        <div>

        <div className="profile-options">
          <a href="ResumeEs.pdf" download="ResumeEs.pdf">
          <button className="btn ">Obten mi hoja de vida </button>
        </a>
      </div>
        </div>
      </div>
      
    </div>
  );
};

export default Info;