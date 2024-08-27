import { useContext } from "react";
import { DarkModeContext } from "../../Context/DarkModeContext";
import Favorite from "../../assets/icons/Favorite";
import FavoriteDark from "../../assets/icons/FavoriteDark";
import Favorite_clicked from "../../assets/icons/Favorite_clicked";
import Button from "../Button/Button";
import { FavoriteContext } from "../../Context/FavoriteContext";

type CardProps = {
  recipe: {
    category_id: string;
    created_at: string;
    description: string;
    id: string;
    imageUrl: string | null;
    instructions: string;
    name: string;
    rating: number | null;
    servings: string;
    // categories: string[];
  };
  // categories: string;
  // isFavorite: boolean;
  // toggleFavorite: (id: string) => void;
};

const Card = ({ recipe }: CardProps) => {
  const favoriteContext = useContext(FavoriteContext);
  const isFavorite = favoriteContext?.isFavorite;
  const darkModeContext = useContext(DarkModeContext);
  return (
    <section className="w-72">
      <div className="">
        <div
          className="rounded-t-large bg-secondary bg-cover bg-center h-48"
          style={{
            backgroundImage: `url(${
              recipe.imageUrl || "../../assets/img/default-image.png"
            })`,
          }}></div>

        <div className="bg-bgCard p-6 rounded-b-large h-full flex flex-col">
          <h2 className="font-inter font-bold text-xl mt-4 mb-4 text-tBase">
            {recipe.name}
          </h2>
          <p className="font-inter font-regular text-base mb-4 text-tBase line-clamp-2">
            {recipe.description}
          </p>

          <div className="mb-4 mt-4">
            <Button id={recipe.id} />
          </div>
          <section className="flex justify-between">
            <p
              className="text-tBase text-small text-left h-6 w-6 flex items-center cursor-pointer"
              // onClick={() => toggleFavorite(recipe.id)}
            >
              {isFavorite ? (
                <Favorite_clicked />
              ) : darkModeContext?.darkMode ? (
                <FavoriteDark />
              ) : (
                <Favorite />
              )}
            </p>
            <p className="text-tBase text-small text-right">
              Rating: {recipe.rating}/5 ⭐️
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Card;
