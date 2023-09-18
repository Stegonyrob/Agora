import React from "react";
import { Planet } from "react-planet";
import centralPlanetImg from "../agora-logo.png";

const AboutMe = () => {
  return <div>Sobre mí</div>;
};

const NeurodiversityParadigm = () => {
  return <div>Paradigma de neurodiversidad</div>;
};

const Services = () => {
  return <div>Servicios</div>;
};

const SuggestedPages = () => {
  return <div>Páginas sugeridas</div>;
};

const ContactForm = () => {
  return <div>Formulario de contacto</div>;
};

const Glossary = () => {
  return <div>Glosario</div>;
};

const CircularMenu = () => {
  return (
    <Planet
      centerContent={
        <img src={centralPlanetImg} alt="Planeta central" className="planet" />
      }
      open
      autoClose
      orbitRadius={150}
      bounceOnClose
      dragable
      hideOrbit
    >
      <div
        className="satellite"
        onClick={() => (window.location.href = "/about-me")}
      >
        Sobre mí
      </div>
      <div
        className="satellite"
        onClick={() => (window.location.href = "/neurodiversity-paradigm")}
      >
        Paradigma de neurodiversidad
      </div>
      <div
        className="satellite"
        onClick={() => (window.location.href = "/services")}
      >
        Servicios
      </div>
      <div
        className="satellite"
        onClick={() => (window.location.href = "/suggested-pages")}
      >
        Páginas sugeridas
      </div>
      <div
        className="satellite"
        onClick={() => (window.location.href = "/contact-form")}
      >
        Formulario de contacto
      </div>
      <div
        className="satellite"
        onClick={() => (window.location.href = "/glossary")}
      >
        Glosario
      </div>
    </Planet>
  );
};

export default CircularMenu;
