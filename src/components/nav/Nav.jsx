import React, { useState } from "react";
import style from "./Nav.module.css";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBook,
  AiOutlineMessage,
} from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <nav>
      <a
        href="#home"
        className={activeNav === "#home" ? style.active : ""}
        onClick={() => setActiveNav("#home")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? style.active : ""}
        onClick={() => setActiveNav("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? style.active : ""}
        onClick={() => setActiveNav("#experience")}
      >
        <AiOutlineBook />
      </a>
      <a
        href="#services"
        className={activeNav === "#services" ? style.active : ""}
        onClick={() => setActiveNav("#services")}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? style.active : ""}
        onClick={() => setActiveNav("#contact")}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
