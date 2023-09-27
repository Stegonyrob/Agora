import React, { useState } from "react";
import centralPlanetImg from "../agora-logo.png";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={centralPlanetImg} alt="Logo" className="logo" />
      </div>
      <button
        className={`hamburger ${isActive ? "is-active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="hamburger-box">
          <div className="hamburger-inner"></div>
        </div>
      </button>

      {isActive && (
        <div className="navigation-menu">
          <ul>
            <a href="https://localhost:3000/AboutMe" target="_blank">
              Sobre Mí
            </a>
            <a href="https://localhost:3000/Neurodiversity" target="_blank">
              Neurodiversidad
            </a>
            <a href="https://localhost:3000/Services" target="_blank">
              Servicios
            </a>
            <a href="https://localhost:3000/Information" target="_blank">
              Información
            </a>
            <a href="https://localhost:3000/Instalaciones" target="_blank">
              Instalaciones
            </a>
            <a href="https://localhost:3000/Contact" target="_blank">
              Contacto
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

/* <div className="hamburger hamburger--vortex">
    <div className="hamburger-box">
      <div className="hamburger-inner"></div>
    </div>
  </div>
  <code>hamburger--vortex</code> */
