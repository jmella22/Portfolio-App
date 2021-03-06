import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import style from "./Header.module.css";

const HeaderSocials = () => {
  return (
    <div className={style.header_socials}>
      <a href="https://linkedin.com/in/josemellar" target={"blank"}>
        <BsLinkedin />
      </a>
      <a href="https://github.com/jmella22" target={"blank"}>
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
