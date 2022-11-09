import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Dejame contarte un poco de mi</h3>
        <hr />
        <br />
        <h4> Desarrollador full Stack Mern </h4>
        <p>
          Profesional en desarrollo Full Stack Mern, versátil Entusiasta,
          creativo e innovador que busca siempre alcanzar con los objetivos y
          requerimientos. Capaz de liderar y solucionar problemas eficientemente
          y de desenvolverme en un desarrollo web tanto en la parte del cliente
          (Front End) como del servidor (Back End).
        </p>{" "}
        <p>
          Conocimientos sobre protocolos HTTP y REST, APIs, lógica de negocio,
          asincronía, etc. softwares de control de versiones como Git para
          controlar los cambios en el código y poder trabajar de manera
          colaborativa conjuntos de servicios tecnológicos utilizados para
          construir y ejecutar una única aplicación.
          {/* <p>
            {" "}
            En concreto MERN Stack es un conjunto de subsistemas de software
            para el desarrollo de aplicaciones, que incluye las tecnologías
            Mongo DB, Express.js, React.js y Node.js La combinación de estas
            cuatro tecnologías me permite crear sitios web (y aplicaciones)
            completos; usando React (con JavaScript o TypeScript) del lado del
            cliente (front-end) y Node JS del lado del servidor (back-end).
          </p>{" "} */}
          Así puedo ,diseñar tanto la parte visual (la experiencia del usuario)
          y para esto uso tecnologías como bootstrap,Css, Html5 ,Taildwind, asi
          como, la parte algorítmica y lógica del servidor usando las diferentes
          librerías JavaScript.
        </p>
        {/* Poseo valores como la sinceridad, la responsabilidad y la honradez; me
        siento muy a gusto trabajando en equipo. Soy una persona con una alta
        facilidad de absorber conocimientos teóricos y prácticos y así mismo
        trasmitirlos y ejecutarlos, tengo facilidades para la comunicación en
        los diversos ámbitos de esta, alta afinidad hacia las personas que me
        rodean, logrando influenciar hacia la búsqueda del conocimiento y mejora
        continua */}.
        <br/>
        <h4>Contador Público de la Universidad del Valle </h4>
        <br/>
        <p>
          Contador público de la Universidad del Valle, con 10 años de
          experiencia en el el sector comercial y de la salud,
          conocimientos,aplicables de NIIF y NIAS, planeación tributaria,
          auditoría fiscal en procedimientos tributarios; elaboración y
          auditoria en información exógena, elaboración y revisión de estados
          financieros, realización de pruebas sustantivas, de controles,
          relacionamiento y atención de cliente.
          excelente manejo de  Excel, (elaboración de macros, tablas dinámicas, funciones
          especiales), herramientas ofimáticas   tales como Word, Power Point, Manejo de inventarios y Análisis
          financiero , manejo de los módulos AP, PO, Proveedores y GL del EPR E
          Business Suit en plataforma Oracle, software CG-UNO, DATAX, SAI,
          DATALOAD, entre otros</p>
          <br/>
          <h4>Docente en instituciones privadas </h4>
          <br/>
          <p> Docente en instituciones privadas, Contabilidad
          de los recursos, Legislación tributaría, legislación comercial,
          Docente de las áreas comerciales y de matemáticas, en diversos
          colegios a nivel de secundaria, educación para adultos, principalmente
          población vulnerable, en el distrito de Aguablanca de Cali.
          {/* Me motivan los   desafíos, el prestigio, los logros y la independencia para actuar,
          dentro del marco establecido, Tengo gran capacidad para organizar y
          dirigir a los demás, para obtener resultados para la empresa que me
          propongo.
           Tiendo a ser directo, decidido e independiente, también
          amistoso y extrovertido,  */}
          <br/>Prefiero tener responsabilidades de trabajo claras, es importante cierta libertad razonables para implementarlas.</p>
          Soy proactivo, Tomo mis decisiones, basado en la información o datos
          que están regularmente disponibles. <p>En general soy un individuo seguro
          de sí mismo y confío en las decisiones que tomo. . 
        </p>
      </div>
      <div className="about-img">
        <img
          className="foto"
          src="https://res.cloudinary.com/seuz716/image/upload/v1667792066/desarrollo_hpe2f6.jpg"
          alt="about"
        />
      </div>
    </div>
  );
};

export default About;
