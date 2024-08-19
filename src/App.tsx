import { useState } from "react";
import "./App.css";

import { DarkModeContext } from "./Context/DarkModeContext";

import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Recipes from "./pages/Recipes";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <>
      <BrowserRouter>
        <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
          <div className={darkMode ? "theme-dark" : ""}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
          </div>
        </DarkModeContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
