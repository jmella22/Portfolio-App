import React from "react";
import CV from "../../assets/cv.pdf";
import style from "./Header.module.css";

const CTA = () => {
  return (
    <div className={style.cta}>
      <a href={CV} download className="btn">
        Descargar CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Conversemos
      </a>
    </div>
  );
};

export default CTA;
