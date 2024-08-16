import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

import Hero from "./components/HeroSection";
import NavBar from "./components/Navbar";
import { DarkModeContext } from "./Context/DarkModeContext";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <>
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <div className={darkMode ? "theme-dark" : ""}>
          <NavBar />
          <Header />
          <Hero />
          <Footer />
        </div>
      </DarkModeContext.Provider>
    </>
  );
}

export default App;
