import { useState } from "react";
import "./App.css";

import { DarkModeContext } from "./Context/DarkModeContext";

import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Recipes from "./pages/Recipes";

import SingleRecipe from "./pages/SingleRecipe";
import LoginPage from "./pages/LoginPage";
import { UserProvider } from "./Context/UserContext";
import ResultPage from "./pages/ResultPage";
import { SearchResultsProvider } from "./Context/SearchResultsContext";
import AllRecipesPage from "./pages/AllRecipesPage";
import MyProfile from "./components/My Profil/MyProfil";
import PrivateRoute from "./components/PrivateRoute";

// import SingleRecipe from "./pages/SingleRecipe";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <>
      <UserProvider>
        <SearchResultsProvider>
          <BrowserRouter>
            <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
              <div className={darkMode ? "theme-dark" : ""}>
                <Routes>
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signup" element={<LoginPage />} />
                  <Route element={<PrivateRoute />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/recipes" element={<Recipes />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/recipes/:id" element={<SingleRecipe />} />
                    <Route path="/all-recipes" element={<AllRecipesPage />} />
                    <Route path="/results" element={<ResultPage />} />

                    <Route path="/profile" element={<MyProfile />} />
                  </Route>
                </Routes>
              </div>
            </DarkModeContext.Provider>
          </BrowserRouter>
        </SearchResultsProvider>
      </UserProvider>
    </>
  );
}

export default App;
