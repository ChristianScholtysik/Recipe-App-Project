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
    <section className="relative flex flex-col items-center justify-center m-4 md:m-8 lg:m-16 p-10 md:p-16 lg:p-20 overflow-hidden h-60 md:h-80 lg:h-96 rounded-large">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-10" />

      {/* Recipe images grid */}
      <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-8 grid-rows-4 md:grid-rows-2 gap-0 z-0">
        {recipeImages.map((image, index) => (
          <div
            key={index}
            className="bg-cover bg-center w-full h-full"
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
      </div>

      {/* Text and button */}
      <h2 className="relative z-10 font-inter font-bold text-lg md:text-xl lg:text-2xl text-white mb-8 md:mb-12 lg:mb-16 text-center">
        Schau Dir alle Rezepte an und lass Dich inspirieren
      </h2>
      <button
        className="relative z-10 bg-primary text-tBase py-2 md:py-3 px-6 md:px-8 rounded-full hover:bg-hover font-inter font-bold text-sm md:text-base"
        onClick={() => navigate("/all-recipes")}>
        Zu den Rezepten
      </button>
    </section>
  );
};

export default AllRecipesSection;
