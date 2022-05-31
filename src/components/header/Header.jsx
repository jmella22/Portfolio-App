import React from "react";

import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import style from "./Header.module.css";

import ME from "../../assets/me.png";

const Header = () => {
  return (
    <header>
      <div className={`${style.header_container} container`}>
        <h5>Hello I'm</h5>
        <h1>Jose Mella</h1>
        <h5 className="text-light"> Full Stack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className={style.me}>
          <img src={ME} alt="foto perfil de Jose Mella" />
        </div>
        <a href="#contact" className={style.scroll_down}>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
