import { useContext } from "react";
import { DarkModeContext } from "../Context/DarkModeContext";
import LogoLight from "../assets/LogoLight";
import LogoDark from "../assets/LogoDark";
import SocialIcon1Light from "../assets/icons/SocialIcon1Light";
import SocialIcon1Dark from "../assets/icons/SocialIcon1Dark";
import SocialIcon2Light from "../assets/icons/SocialIcon2Light";
import SocialIcon2Dark from "../assets/icons/SocialIcon2Dark";
import SocialIcon3Light from "../assets/icons/SocialIcon3Light";
import SocialIcon3Dark from "../assets/icons/SocialIcon3Dark";
import SocialIcon4Light from "../assets/icons/SocialIcon4Light";
import SocialIcon4Dark from "../assets/icons/SocialIcon4Dark";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  const darkModeContext = useContext(DarkModeContext);
  return (
    <section className="bg-primary text-tBase py-16 px-8 md:px-24 lg:px-32 flex flex-col md:flex-row justify-between items-center gap-16">
      <NavLink to="/">
        {" "}
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0">
            {darkModeContext?.darkMode ? <LogoLight /> : <LogoDark />}
          </div>
          <span className="font-inter font-semibold text-xl md:text-xxl tracking-wider">
            Die Rezeptwelt
          </span>
        </div>{" "}
      </NavLink>

      <div className="flex flex-col items-center md:items-start">
        <h3 className="font-inter font-semibold text-xl mb-6">Social Media</h3>
        <div className="flex gap-4">
          <Link
            to="/"
            className="p-4 bg-bgSocial hover:bg-secondary rounded-xl flex justify-center items-center">
            {darkModeContext?.darkMode ? (
              <SocialIcon1Light />
            ) : (
              <SocialIcon1Dark />
            )}
          </Link>
          <Link
            to="/"
            className="p-4 bg-bgSocial hover:bg-secondary rounded-xl flex justify-center items-center">
            {darkModeContext?.darkMode ? (
              <SocialIcon2Light />
            ) : (
              <SocialIcon2Dark />
            )}
          </Link>
          <Link
            to="/"
            className="p-4 bg-bgSocial hover:bg-secondary rounded-xl flex justify-center items-center">
            {darkModeContext?.darkMode ? (
              <SocialIcon3Light />
            ) : (
              <SocialIcon3Dark />
            )}
          </Link>
          <Link
            to="/"
            className="p-4 bg-bgSocial hover:bg-secondary rounded-xl flex justify-center items-center">
            {darkModeContext?.darkMode ? (
              <SocialIcon4Light />
            ) : (
              <SocialIcon4Dark />
            )}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
