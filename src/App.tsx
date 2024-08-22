import { useState } from "react";
import "./App.css";

import { DarkModeContext } from "./Context/DarkModeContext";

import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Recipes from "./pages/Recipes";
import SearchResultList from "./pages/SearchResultList";
import SingleRecipe from "./pages/SingleRecipe";
import LoginPage from "./pages/LoginPage";
import { UserProvider } from "./Context/UserContext";
import LoginStatus from "./components/LoginStatus";
// import SingleRecipe from "./pages/SingleRecipe";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
            <div className={darkMode ? "theme-dark" : ""}>
              <LoginStatus />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/recipes/:id" element={<SingleRecipe />} />
                <Route path="/search" element={<SearchResultList />} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </div>
          </DarkModeContext.Provider>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
