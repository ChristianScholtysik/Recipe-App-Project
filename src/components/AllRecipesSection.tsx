// import { useNavigate } from "react-router-dom";

// const AllRecipesSection = () => {
//   const navigate = useNavigate();
//   return (
//     <section className="flex flex-col items-center justify-center m-16">
//       <h2 className="font-inter font-bold text-xl text-tBase mb-16">
//         Alle Rezepte
//       </h2>
//       <button
//         className="bg-primary text-tBase py-3 px-8 rounded-full hover:bg-hover font-inter font-bold "
//         onClick={() => navigate("/all-recipes")}>
//         Zu den Rezepten
//       </button>
//     </section>
//   );
// };

// export default AllRecipesSection;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabaseClient from "../lib/supabaseClient";

const AllRecipesSection = () => {
  const [recipeImages, setRecipeImages] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipeImages = async () => {
      const { data, error } = await supabaseClient
        .from("recipes")
        .select("imageUrl")
        .limit(16);

      if (error) {
        console.error("Error fetching recipe images:", error);
      } else if (data) {
        const images = data
          .map((recipe) => recipe.imageUrl)
          .filter((image): image is string => image !== null);
        setRecipeImages(images);
      }
    };

    fetchRecipeImages();
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center m-16 p-20 overflow-hidden h-80 rounded-large">
      <div className="absolute inset-0 bg-black opacity-60 z-10" />

      <div className="absolute inset-0 grid grid-cols-8 grid-rows-2 gap-0 z-0 ">
        {recipeImages.map((image, index) => (
          <div
            key={index}
            className="bg-cover bg-center w-30 h-30 "
            style={{
              backgroundImage: `url(${image})`,
              aspectRatio: "1",
            }}
          />
        ))}
      </div>

      <h2 className="relative z-10 font-inter font-bold text-xl text-white mb-16 ">
        Schau Dir alle Rezepte an und lass Dich inspirieren
      </h2>
      <button
        className="relative z-10 bg-primary text-tBase py-3 px-8 rounded-full hover:bg-hover font-inter font-bold"
        onClick={() => navigate("/all-recipes")}>
        Zu den Rezepten
      </button>
    </section>
  );
};

export default AllRecipesSection;
