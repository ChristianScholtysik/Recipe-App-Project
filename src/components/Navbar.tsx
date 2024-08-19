import { useContext } from "react";
import { DarkModeContext } from "../Context/DarkModeContext";
import Sun from "../assets/Sun";
import Moon from "../assets/Moon";
import LogoLight from "../assets/LogoLight";
import LogoDark from "../assets/LogoDark";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const darkModeContext = useContext(DarkModeContext);
  return (
    <>
      <section className="bg-primary h-32 pt-9 text-tBase">
        <nav className="flex justify-around p-8 bg-bgMain">
          <div className="flex gap-6">
            {darkModeContext?.darkMode ? <LogoLight /> : <LogoDark />}
            <p className="font-inter font-medium text-lg w-full ">
              Die Rezeptwelt
            </p>
          </div>
          <ul className="flex items-center gap-6 font-inter font-bold text-lg">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/recipes">Rezepte</NavLink>
            </li>
            <li>
              <NavLink to="/about">Über uns</NavLink>
            </li>
            <div
              className="cursor-pointer "
              onClick={() =>
                darkModeContext?.setDarkMode((darkMode) => !darkMode)
              }>
              {darkModeContext?.darkMode ? <Sun /> : <Moon />}
            </div>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default NavBar;
