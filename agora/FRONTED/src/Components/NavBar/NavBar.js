import React, { useState } from "react";
import centralPlanetImg from "../../../src/agora-logo.png";
import { NavLink } from "react-router-dom";

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

      <div className={`navigation-menu ${isActive ? "is-active" : ""}`}>
        <NavLink to="/AboutMeView" onClick={toggleMenu}>
          Sobre Mí
        </NavLink>
        <NavLink to="/Neurodiversity" onClick={toggleMenu}>
          Neurodiversidad
        </NavLink>
        <NavLink to="/Services" onClick={toggleMenu}>
          Servicios
        </NavLink>
        <NavLink to="/Information" onClick={toggleMenu}>
          Información
        </NavLink>
        <NavLink to="/Instalaciones" onClick={toggleMenu}>
          Instalaciones
        </NavLink>
        <NavLink to="/Contact" onClick={toggleMenu}>
          Contacto
        </NavLink>
      </div>
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
