import { createContext, useContext, useState, ReactNode } from "react";
import { Recipe } from "../types/supabase-types.own";

interface SearchResultsContextType {
  recipes: Recipe[];
  setRecipes: (recipes: Recipe[]) => void;
}

const SearchResultsContext = createContext<
  SearchResultsContextType | undefined
>(undefined);

export const useSearchResults = () => {
  const context = useContext(SearchResultsContext);
  if (!context) {
    throw new Error(
      "useSearchResults must be used within a SearchResultsProvider"
    );
  }
  return context;
};

export const SearchResultsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  return (
    <SearchResultsContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </SearchResultsContext.Provider>
  );
};
