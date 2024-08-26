import { createContext } from "react";

interface IFavoriteContext {
  isFavorite: boolean;
  setIsFavorite: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FavoriteContext = createContext<IFavoriteContext | undefined>(
  undefined
);
