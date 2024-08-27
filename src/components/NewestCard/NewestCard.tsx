import { useContext } from "react";
import { DarkModeContext } from "../../Context/DarkModeContext";
import Favorite from "../../assets/icons/Favorite";
import FavoriteDark from "../../assets/icons/FavoriteDark";
import Favorite_clicked from "../../assets/icons/Favorite_clicked";
import Button from "../Button/Button";
import { FavoriteContext } from "../../Context/FavoriteContext";

type NewestCardProps = {
  recipe: {
    id: string;
    name: string;
    description: string;
    imageUrl?: string | null;
    rating: number | null;
  };
};

const NewestCard: React.FC<NewestCardProps> = ({ recipe }) => {
  const favoriteContext = useContext(FavoriteContext);
  const darkModeContext = useContext(DarkModeContext);

  if (!favoriteContext) {
    return null;
  }

  const { favorites, toggleFavorite } = favoriteContext;
  const isFavorite = favorites.includes(recipe.id);

  return (
    <section className="flex w-11/12">
      <div
        className="rounded-l-large bg-cover bg-center w-2/6"
        style={{
          backgroundImage: `url(${
            recipe.imageUrl || "../../assets/img/default-image.png"
          })`,
        }}></div>
      <div className="w-4/6 bg-bgCard rounded-r-large p-8">
        <h2 className="font-inter font-bold text-xl mt-4 mb-4 text-tBase">
          {recipe.name}
        </h2>
        <p className="font-inter font-regular text-base mb-8 mt-8 text-tBase">
          {recipe.description}
        </p>

        <div className="mb-4 mt-8">
          <Button id={recipe.id} />
        </div>
        <section className="flex justify-between">
          <p
            className="text-tBase text-small text-left h-6 w-6 flex items-center cursor-pointer"
            onClick={() => toggleFavorite(recipe.id)}>
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
    </section>
  );
};

export default NewestCard;
