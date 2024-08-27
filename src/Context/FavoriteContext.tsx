// // import { createContext } from "react";

// // interface IFavoriteContext {
// //   isFavorite: string[];
// //   setIsFavorite: React.Dispatch<React.SetStateAction<string>>;
// //   toggleFavorite: (id: string) => void;
// // }

// // export const FavoriteContext = createContext<IFavoriteContext | undefined>(
// //   undefined
// // );

// import { createContext, useState } from "react";

// interface IFavoriteContext {
//   favorites: string[]; // Array of favorite recipe IDs
//   setFavorites: React.Dispatch<React.SetStateAction<string[]>>;
//   toggleFavorite: (id: string) => void;
// }

// export const FavoriteContext = createContext<IFavoriteContext | undefined>(
//   undefined
// );

// export const FavoriteProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [favorites, setFavorites] = useState<string[]>([]);

//   const toggleFavorite = (id: string) => {
//     setFavorites((prevFavorites) =>
//       prevFavorites.includes(id)
//         ? prevFavorites.filter((favId) => favId !== id)
//         : [...prevFavorites, id]
//     );
//   };

//   return (
//     <FavoriteContext.Provider
//       value={{ favorites, setFavorites, toggleFavorite }}>
//       {children}
//     </FavoriteContext.Provider>
//   );
// };

import { createContext, useState } from "react";
import supabaseClient from "../lib/supabaseClient";
interface IFavoriteContext {
  favorites: string[];
  setFavorites: React.Dispatch<React.SetStateAction<string[]>>;
  toggleFavorite: (id: string) => void;
}

export const FavoriteContext = createContext<IFavoriteContext | undefined>(
  undefined
);

export const FavoriteProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = async (id: string) => {
    if (favorites.includes(id)) {
      setFavorites((prevFavorites) =>
        prevFavorites.filter((favId) => favId !== id)
      );

      const { error } = await supabaseClient
        .from("recipe_favorites")
        .delete()
        .eq("recipe_id", id)
        .select();

      if (error) {
        console.error("Error removing favorite:", error);

        setFavorites((prevFavorites) => [...prevFavorites, id]);
      }
    } else {
      setFavorites((prevFavorites) => [...prevFavorites, id]);

      const { error } = await supabaseClient
        .from("recipe_favorites")
        .insert([{ recipe_id: id }])
        .select();

      if (error) {
        console.error("Error adding favorite:", error);

        setFavorites((prevFavorites) =>
          prevFavorites.filter((favId) => favId !== id)
        );
      }
    }
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, setFavorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
