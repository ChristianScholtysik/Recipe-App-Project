import { useContext, useState } from "react";
import { DarkModeContext } from "../Context/DarkModeContext";
import { Link, NavLink, useNavigate } from "react-router-dom";
import supabaseClient from "../lib/supabaseClient";

import { useSearchResults } from "../Context/SearchResultsContext";
import LogoLight from "../assets/LogoLight";
import LogoDark from "../assets/LogoDark";
import Sun from "../assets/Sun";
import Moon from "../assets/Moon";

const NavBar = () => {
  const darkModeContext = useContext(DarkModeContext);
  const [searchInput, setSearchInput] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);
  const { setRecipes } = useSearchResults();
  const navigate = useNavigate();

  const fetchRecipesBySearchTerm = async () => {
    let selectQuery = supabaseClient.from("recipes").select("*");
    if (searchInput) {
      selectQuery = selectQuery.ilike("name", `%${searchInput}%`);
    }
    const result = await selectQuery;
    if (result.error) {
      console.error(result.error);
      setRecipes([]);
    } else {
      setRecipes(result.data);
      navigate("/results");
    }
  };

  return (
    <section className="bg-primary h-32 pt-9 text-tBase">
      <nav
        className={`flex flex-col md:flex-row justify-between items-center p-8 bg-bgMain transition-all duration-300 ${
          menuOpen ? "relative z-50" : ""
        }`}>
        <div className="flex justify-between items-center w-full md:w-auto">
          <NavLink to="/">
            <div className="flex items-center gap-6">
              {darkModeContext?.darkMode ? <LogoLight /> : <LogoDark />}
              <p className="font-inter font-medium text-lg md:text-xl lg:text-2xl w-full text-center md:text-left">
                Die Rezeptwelt
              </p>
            </div>
          </NavLink>
          <button
            className="md:hidden text-tBase focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}>
            <div className="space-y-2">
              <span className="block w-8 h-0.5 bg-tBase"></span>
              <span className="block w-8 h-0.5 bg-tBase"></span>
              <span className="block w-8 h-0.5 bg-tBase"></span>
            </div>
          </button>
        </div>
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:items-center md:gap-6`}>
          <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-6 font-inter font-bold text-lg">
            <li>
              <NavLink
                to="/"
                className="hover:text-primary transition-colors"
                onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/recipes"
                className="hover:text-primary transition-colors"
                onClick={() => setMenuOpen(false)}>
                Rezepte
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="hover:text-primary transition-colors"
                onClick={() => setMenuOpen(false)}>
                Über uns
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-recipes"
                className="hover:text-primary transition-colors"
                onClick={() => setMenuOpen(false)}>
                Meine Rezepte
              </NavLink>
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                darkModeContext?.setDarkMode((darkMode) => !darkMode);
                setMenuOpen(false);
              }}>
              {darkModeContext?.darkMode ? <Sun /> : <Moon />}
            </li>
          </ul>
          <Link to="{/search}"></Link>
          <div className="relative mt-4 md:mt-0">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Suche..."
              className="px-4 py-2 rounded-md border border-tBase bg-bgMain text-tBase w-full md:w-auto"
            />
            <span className="absolute inset-y-0 right-2 flex items-center cursor-pointer">
              <img
                src="/search.svg"
                alt="Search"
                className="w-5 h-5"
                onClick={fetchRecipesBySearchTerm}
              />
            </span>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
