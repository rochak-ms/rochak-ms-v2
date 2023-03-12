import React, { useEffect, useState } from "react";
// import "./footer.css";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { Logo} from "../assets";

const Footer = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <footer 
    className={`${
      styles.paddingX
    } w-full flex justify-center items-center py-1 fixed bottom-0 z-20 ${
      scrolled ? "backdrop-blur-lg" : "bg-transparent"
    }`}
  >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto'">
      <img src={Logo} alt='logo' className='w-14 h-14 object-contain' />

        <div className="footer__social flex justify-center gap-3 cursor-pointer">
        <a
            href="https://github.com/rochak-ms"
            className="footer__social-link"
            target="_blank" rel="noreferrer"
          >
            <i className="bx bxl-github hover:text-[#28cb69] text-[25px] font-medium cursor-pointer"></i>
          </a>

          <a
            href="https://www.facebook.com/x.bitzz"
            className="footer__social-link"
            target="_blank" rel="noreferrer"
          >
            <i className="bx bxl-facebook hover:text-[#2b3be7] text-[25px] font-medium cursor-pointer"></i>
          </a>

          <a
            href="https://www.instagram.com/intoxicated_stha/"
            className="footer__social-link"
            target="_blank" rel="noreferrer"
          >
            <i className="bx bxl-instagram hover:text-[#eb3828] text-[25px]"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/rochak-shrestha-697a98179"
            className="footer__social-link"
            target="_blank" rel="noreferrer"
          >
            <i className="bx bxl-linkedin hover:text-[#2f26d6] text-[25px]"></i>
          </a>

          <a
            href="https://twitter.com/rochakms"
            className="footer__social-link"
            target="_blank" rel="noreferrer"
          >
            <i className="bx bxl-twitter hover:text-[#269ae7] text-[25px]"></i>
          </a>
        </div>

        <span className="text-secondary text-[18px] overflow-hidden">
          &#169; rochak-ms. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
