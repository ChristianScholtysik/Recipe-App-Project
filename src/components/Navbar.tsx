// import { useContext, useState } from "react";
// import { DarkModeContext } from "../Context/DarkModeContext";
// import Sun from "../assets/Sun";
// import Moon from "../assets/Moon";
// import LogoLight from "../assets/LogoLight";
// import LogoDark from "../assets/LogoDark";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import supabaseClient from "../lib/supabaseClient";
// import { Recipe } from "../types/supabase-types.own";

// const NavBar = () => {
//   const darkModeContext = useContext(DarkModeContext);
//   const [searchInput, setSearchInput] = useState<string>("");
//   const [recipes, setRecipes] = useState<Recipe[]>([]);

//   const navigate = useNavigate();

//   console.log(recipes);

//   // useEffect(() => {
//   const fetchRecipesBySearchTerm = async () => {
//     let selectQuery = supabaseClient.from("recipes").select("*");
//     if (searchInput) {
//       selectQuery = selectQuery.ilike("name", `%${searchInput}%`);
//     }
//     const result = await selectQuery;
//     if (result.error) {
//       console.error(result.error);
//       setRecipes([]);
//     } else {
//       setRecipes(result.data);
//       navigate("/results", { state: { recipes: result.data } });
//     }
//   };
//   // fetchRecipesBySearchTerm();
//   // }, [searchInput]);

//   return (
//     <section className="bg-primary h-32 pt-9 text-tBase">
//       <nav className="flex flex-col md:flex-row justify-between items-center p-8 bg-bgMain">
//         <div className="flex flex-col md:flex-row items-center gap-6">
//           {darkModeContext?.darkMode ? <LogoLight /> : <LogoDark />}
//           <p className="font-inter font-medium text-lg md:text-xl lg:text-2xl w-full text-center md:text-left">
//             Die Rezeptwelt
//           </p>
//         </div>
//         <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
//           <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-6 font-inter font-bold text-lg">
//             <li>
//               <NavLink to="/" className="hover:text-primary transition-colors">
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/recipes"
//                 className="hover:text-primary transition-colors">
//                 Rezepte
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/about"
//                 className="hover:text-primary transition-colors">
//                 Über uns
//               </NavLink>
//             </li>
//             <li
//               className="cursor-pointer"
//               onClick={() =>
//                 darkModeContext?.setDarkMode((darkMode) => !darkMode)
//               }>
//               {darkModeContext?.darkMode ? <Sun /> : <Moon />}
//             </li>
//           </ul>
//           <Link to="{/search}"></Link>
//           <div className="relative ">
//             <input
//               type="text"
//               value={searchInput}
//               onChange={(e) => setSearchInput(e.target.value)}
//               placeholder="Suche..."
//               className="px-4 py-2 rounded-md border border-tBase  bg-bgMain text-tBase"
//             />
//             <span className="absolute inset-y-0 right-2 flex items-center text- tBase cursor-pointer">
//               <img
//                 src="/search.svg"
//                 alt="Search"
//                 className="w-5 h-5"
//                 onClick={fetchRecipesBySearchTerm}
//               />
//             </span>
//           </div>
//         </div>
//       </nav>
//     </section>
//   );
// };

// export default NavBar;

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
      <nav className="flex flex-col md:flex-row justify-between items-center p-8 bg-bgMain">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {darkModeContext?.darkMode ? <LogoLight /> : <LogoDark />}
          <p className="font-inter font-medium text-lg md:text-xl lg:text-2xl w-full text-center md:text-left">
            Die Rezeptwelt
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-6 font-inter font-bold text-lg">
            <li>
              <NavLink to="/" className="hover:text-primary transition-colors">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/recipes"
                className="hover:text-primary transition-colors">
                Rezepte
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="hover:text-primary transition-colors">
                Über uns
              </NavLink>
            </li>
            <li
              className="cursor-pointer"
              onClick={() =>
                darkModeContext?.setDarkMode((darkMode) => !darkMode)
              }>
              {darkModeContext?.darkMode ? <Sun /> : <Moon />}
            </li>
          </ul>
          <Link to="{/search}"></Link>
          <div className="relative ">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Suche..."
              className="px-4 py-2 rounded-md border border-tBase  bg-bgMain text-tBase"
            />
            <span className="absolute inset-y-0 right-2 flex items-center text- tBase cursor-pointer">
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
