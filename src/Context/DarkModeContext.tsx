import { createContext } from "react";

interface DarkModeContext {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DarkModeContext = createContext<DarkModeContext | undefined>(
  undefined
);
