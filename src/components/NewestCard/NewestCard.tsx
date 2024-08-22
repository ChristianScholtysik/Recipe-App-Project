import { IRecipe } from "../../types/supabase-types.own";
import Button from "../Button/Button";

type NewestCardProps = {
  recipe: {
    id: string;
    name: string;
    description: string;
    imageUrl?: string | null;
  };
  // recipe: IRecipe;
};

const NewestCard: React.FC<NewestCardProps> = ({ recipe }) => {
  // console.log(recipe.categories?.name);
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
        {/* <p>{recipe.categories?.name}</p> */}

        <div className="mb-4 mt-8">
          <Button id={recipe.id} />
        </div>
      </div>
    </section>
  );
};

export default NewestCard;
