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

const Footer = () => {
  const darkModeContext = useContext(DarkModeContext);
  return (
    <>
      <section className="bg-primary flex pr-32 gap-40  text-tBase">
        <div className="font-inter font-semibold text-xxl mt-16 p-24 flex items-center gap-6">
          <div className="flex">
            {darkModeContext?.darkMode ? <LogoLight /> : <LogoDark />}
          </div>
          Die Rezeptwelt
        </div>
        <div className="flex justify-center items-center flex-col">
          <h3 className="font-inter font-semibold text-lg mb-6 mr-32">
            Social Media
          </h3>
          <div className="flex gap-4">
            <div className="p-4 bg-bgSocial rounded-xl w-16 h-16">
              {darkModeContext?.darkMode ? (
                <SocialIcon1Light />
              ) : (
                <SocialIcon1Dark />
              )}
            </div>
            <div className="p-4 bg-bgSocial rounded-xl w-16 h-16">
              {darkModeContext?.darkMode ? (
                <SocialIcon2Light />
              ) : (
                <SocialIcon2Dark />
              )}
            </div>
            <div className="p-4 bg-bgSocial rounded-xl w-16 h-16">
              {darkModeContext?.darkMode ? (
                <SocialIcon3Light />
              ) : (
                <SocialIcon3Dark />
              )}
            </div>
            <div className="p-4 bg-bgSocial rounded-xl w-16 h-16">
              {darkModeContext?.darkMode ? (
                <SocialIcon4Light />
              ) : (
                <SocialIcon4Dark />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
