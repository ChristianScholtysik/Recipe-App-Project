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
import { Link } from "react-router-dom";

const Footer = () => {
  const darkModeContext = useContext(DarkModeContext);
  return (
    <>
      <section className="bg-primary flex pr-32 gap-40 items-center  text-tBase">
        <div className="font-inter font-semibold text-xxl mt-16 p-24 flex items-center gap-6 tracking-wider">
          <div className="flex">
            {darkModeContext?.darkMode ? <LogoLight /> : <LogoDark />}
          </div>
          Die Rezeptwelt
        </div>
        <div className="flex justify-center items-center flex-col mt-24">
          <h3 className="font-inter font-semibold text-xl mb-6 mr-32">
            Social Media
          </h3>
          <Link to="/">
            <div className="flex gap-4">
              <div className="p-4 bg-bgSocial hover:bg-secondary rounded-xl mb-16 flex justify-center items-center">
                {darkModeContext?.darkMode ? (
                  <SocialIcon1Light />
                ) : (
                  <SocialIcon1Dark />
                )}
              </div>
              <div className="p-4 bg-bgSocial hover:bg-secondary rounded-xl mb-16 flex justify-center items-center">
                {darkModeContext?.darkMode ? (
                  <SocialIcon2Light />
                ) : (
                  <SocialIcon2Dark />
                )}
              </div>
              <div className="p-4 bg-bgSocial hover:bg-secondary rounded-xl mb-16 flex justify-center items-center">
                {darkModeContext?.darkMode ? (
                  <SocialIcon3Light />
                ) : (
                  <SocialIcon3Dark />
                )}
              </div>
              <div className="p-4 bg-bgSocial hover:bg-secondary rounded-xl w-14 h-14 flex justify-center items-center">
                {darkModeContext?.darkMode ? (
                  <SocialIcon4Light />
                ) : (
                  <SocialIcon4Dark />
                )}
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Footer;

// import { useContext } from "react";
// import { DarkModeContext } from "../Context/DarkModeContext";
// import LogoLight from "../assets/LogoLight";
// import LogoDark from "../assets/LogoDark";
// import SocialIcon1Light from "../assets/icons/SocialIcon1Light";
// import SocialIcon1Dark from "../assets/icons/SocialIcon1Dark";
// import SocialIcon2Light from "../assets/icons/SocialIcon2Light";
// import SocialIcon2Dark from "../assets/icons/SocialIcon2Dark";
// import SocialIcon3Light from "../assets/icons/SocialIcon3Light";
// import SocialIcon3Dark from "../assets/icons/SocialIcon3Dark";
// import SocialIcon4Light from "../assets/icons/SocialIcon4Light";
// import SocialIcon4Dark from "../assets/icons/SocialIcon4Dark";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   const darkModeContext = useContext(DarkModeContext);

//   return (
//     <section className="bg-primary text-tBase py-8 px-4 lg:px-32 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
//       <div className="font-inter font-semibold text-xl lg:text-2xl mt-8 lg:mt-16 flex items-center gap-4 lg:gap-6 tracking-wider">
//         <div>{darkModeContext?.darkMode ? <LogoLight /> : <LogoDark />}</div>
//         <span>Die Rezeptwelt</span>
//       </div>

//       <div className="flex flex-col items-center lg:items-start mt-8 lg:mt-16">
//         <h3 className="font-inter font-semibold text-lg lg:text-xl mb-4 lg:mb-6   ">
//           Social Media
//         </h3>
//         <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
//           <Link
//             to="/"
//             className="p-2 bg-bgSocial rounded-xl flex justify-center items-center">
//             {darkModeContext?.darkMode ? (
//               <SocialIcon1Light />
//             ) : (
//               <SocialIcon1Dark />
//             )}
//           </Link>
//           <Link
//             to="/"
//             className="p-2 bg-bgSocial rounded-xl flex justify-center items-center">
//             {darkModeContext?.darkMode ? (
//               <SocialIcon2Light />
//             ) : (
//               <SocialIcon2Dark />
//             )}
//           </Link>
//           <Link
//             to="/"
//             className="p-2 bg-bgSocial rounded-xl flex justify-center items-center">
//             {darkModeContext?.darkMode ? (
//               <SocialIcon3Light />
//             ) : (
//               <SocialIcon3Dark />
//             )}
//           </Link>
//           <Link
//             to="/"
//             className="p-2 bg-bgSocial rounded-xl flex justify-center items-center">
//             {darkModeContext?.darkMode ? (
//               <SocialIcon4Light />
//             ) : (
//               <SocialIcon4Dark />
//             )}
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Footer;
