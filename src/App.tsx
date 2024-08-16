import { useState } from "react";
import "./App.css";

import { DarkModeContext } from "./Context/DarkModeContext";

import Home from "./pages/Home";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <>
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <div className={darkMode ? "theme-dark" : ""}>
          <Home />
        </div>
      </DarkModeContext.Provider>
    </>
  );
}

export default App;
