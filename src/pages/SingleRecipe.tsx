// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import supabaseClient from "../lib/supabaseClient";
// import { IRecipe } from "../types/supabase-types.own";
// import NavBar from "../components/Navbar";
// import Footer from "../components/Footer";
// import LoginStatus from "../components/LoginStatus";
// import Favorite from "../assets/icons/Favorite";
// import Favorite_clicked from "../assets/icons/Favorite_clicked";
// import { useUserContext } from "../Context/UserContext";

// const SingleRecipe = () => {
//   const { id } = useParams<{ id: string }>();
//   const [recipe, setRecipe] = useState<IRecipe | null>(null);
//   const [isFavorite, setIsFavorite] = useState<boolean>(false);

//   const userContext = useUserContext();
//   const user = userContext?.user;

//   useEffect(() => {
//     const fetchRecipe = async () => {
//       if (!id) return;

//       const { data, error } = await supabaseClient
//         .from("recipes")
//         .select(
//           `
//           id,
//           name,
//           description,
//           servings,
//           instructions,
//           category_id,
//           categories ( id, name, created_at ),
//           created_at,
//           imageUrl,
//           rating,
//           ingredients ( id, recipe_id, name, quantity, unit, additionalInfo, created_at )
//         `
//         )
//         .eq("id", id)
//         .single();

//       if (error) {
//         console.error("Error fetching recipe:", error);
//         return;
//       }

//       setRecipe(data);

//       if (user) {
//         const { data: favoriteData, error: favoriteError } =
//           await supabaseClient
//             .from("recipe_favorites")
//             .select("*")
//             .eq("user_id", user.id)

//             .eq("recipe_id", id)
//             .single();
//         console.log(user.id);
//         console.log(id);
//         if (favoriteError) {
//           console.error("Error checking favorite status:", favoriteError);
//         } else {
//           setIsFavorite(!!favoriteData);
//         }
//       }
//     };

//     const fetchFavorites = async () => {
//       const { data: favoriteData, error } = await supabaseClient
//         .from("recipe_favorites")
//         .select("recipe_id")
//         .eq("recipe_id", recipe?.id);
//       if (error) {
//         console.error(error);
//       } else {
//         setIsFavorite(favoriteData.map((fav) => fav.recipe_id));
//       }
//     };
//     fetchFavorites();
//     fetchRecipe();
//   }, [id]);

//   // const toggleFavorite = async () => {
//   //   if (user && recipe) {
//   //     if (isFavorite) {
//   //       const { error } = await supabaseClient
//   //         .from("recipe_favorites")
//   //         .delete()
//   //         .eq("user_id", user.id)
//   //         .eq("recipe_id", recipe.id);

//   //       if (error) {
//   //         console.error("Error removing from favorites:", error);
//   //       } else {
//   //         setIsFavorite(false);
//   //       }
//   //     } else {
//   //       const { error } = await supabaseClient
//   //         .from("recipe_favorites")
//   //         .insert({ user_id: user.id, recipe_id: recipe.id });

//   //       if (error) {
//   //         console.error("Error adding to favorites:", error);
//   //       } else {
//   //         setIsFavorite(true);
//   //       }
//   //     }
//   //   }
//   // };

//   if (!recipe) {
//     return <p>No recipe found</p>;
//   }

//   const instructionsList = recipe.instructions
//     .split(/(?=\d+\.)/)
//     .map((step) => step.trim())
//     .filter((step) => step.length > 0);

//   function toggleFavorite() {}

//   return (
//     <section className="bg-bgMain">
//       <LoginStatus />
//       <NavBar />
//       <section className="relative h-80 bg-bgMain">
//         <img
//           src={recipe.imageUrl?.toString() ?? ""}
//           alt={recipe.name}
//           className="h-80 w-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black opacity-50 z-10" />
//         <div className="absolute inset-0 flex items-center justify-center z-20">
//           <p className="text-white font-inter font-bold text-center text-xlarge w-2/4">
//             {recipe.name}
//           </p>
//         </div>
//       </section>
//       <section className="bg-bgMain text-tBase ml-20 mt-10">
//         <h3 className="font-semibold mb-4">Zutaten</h3>
//         <ul>
//           {recipe.ingredients.map((ingredient) => (
//             <li key={ingredient.id}>
//               {ingredient.quantity} {ingredient.unit} {ingredient.name}
//               {ingredient.additionalInfo
//                 ? ` (${ingredient.additionalInfo})`
//                 : ""}
//             </li>
//           ))}
//         </ul>
//       </section>
//       <section className="bg-bgMain text-tBase ml-20 mt-10">
//         <h3 className="font-semibold mb-4">Zubereitung</h3>
//         <ol className="mb-6">
//           {instructionsList.map((step, index) => (
//             <li key={index}>{step}</li>
//           ))}
//         </ol>
//       </section>
//       <section className="bg-bgMain text-tBase ml-20 mt-10">
//         <h3 className="font-semibold mb-4">Zusätzliche Informationen</h3>
//         <p>{recipe.categories?.name}</p>
//       </section>
//       <div
//         className="flex flex-col items-center justify-center bg-bgMain text-tBase ml-20 mt-10 mb-10 cursor-pointer h-28"
//         onClick={() => toggleFavorite(recipe.id)}>
//         {favorites.includes(recipe.id) ? (
//           <>
//             Auf deiner Favoritenliste ! <Favorite_clicked />
//           </>
//         ) : (
//           <>
//             Zu Favoriten hinzufügen: <Favorite />
//           </>
//         )}
//       </div>
//       <Footer />
//     </section>
//   );
// };

// export default SingleRecipe;

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import supabaseClient from "../lib/supabaseClient";
import { IRecipe } from "../types/supabase-types.own";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginStatus from "../components/LoginStatus";
import Favorite from "../assets/icons/Favorite";
import Favorite_clicked from "../assets/icons/Favorite_clicked";
import { useUserContext } from "../Context/UserContext";
import { FavoriteContext } from "../Context/FavoriteContext";

const SingleRecipe = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<IRecipe | null>(null);
  // const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const favoriteContext = useContext(FavoriteContext);
  const userContext = useUserContext();
  const user = userContext?.user;

  useEffect(() => {
    const fetchRecipe = async () => {
      if (!id) return;

      const { data, error } = await supabaseClient
        .from("recipes")
        .select(
          `
          id,
          name,
          description,
          servings,
          instructions,
          category_id,
          categories ( id, name, created_at ),
          created_at,
          imageUrl,
          rating,
          ingredients ( id, recipe_id, name, quantity, unit, additionalInfo, created_at )
        `
        )
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching recipe:", error);
        return;
      }

      setRecipe(data);

      if (user) {
        const { data: favoriteData, error: favoriteError } =
          await supabaseClient
            .from("recipe_favorites")
            .select("*")
            .eq("user_id", user.id)
            .eq("recipe_id", id)
            .single();

        if (favoriteError) {
          console.error("Error checking favorite status:", favoriteError);
        } else {
          favoriteContext?.setIsFavorite(!!favoriteData);
        }
      }
    };

    fetchRecipe();
  }, [id, user]);

  const toggleFavorite = async () => {
    if (user && recipe) {
      if (favoriteContext?.isFavorite) {
        const { error } = await supabaseClient
          .from("recipe_favorites")
          .delete()
          .eq("user_id", user.id)
          .eq("recipe_id", recipe.id);

        if (error) {
          console.error("Error removing from favorites:", error);
        } else {
          favoriteContext.setIsFavorite(false);
        }
      } else {
        const { error } = await supabaseClient
          .from("recipe_favorites")
          .insert({ user_id: user.id, recipe_id: recipe.id });

        if (error) {
          console.error("Error adding to favorites:", error);
        } else {
          favoriteContext?.setIsFavorite(true);
        }
      }
    }
  };

  if (!recipe) {
    return <p>No recipe found</p>;
  }

  const instructionsList = recipe.instructions
    .split(/(?=\d+\.)/)
    .map((step) => step.trim())
    .filter((step) => step.length > 0);

  return (
    <section className="bg-bgMain">
      <LoginStatus />
      <NavBar />
      <section className="relative h-80 bg-bgMain">
        <img
          src={recipe.imageUrl ?? ""}
          alt={recipe.name}
          className="h-80 w-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <p className="text-white font-inter font-bold text-center text-xlarge w-2/4">
            {recipe.name}
          </p>
        </div>
      </section>
      <section className="bg-bgMain text-tBase ml-20 mt-10">
        <h3 className="font-semibold mb-4">Zutaten</h3>
        <ul>
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient.id}>
              {ingredient.quantity} {ingredient.unit} {ingredient.name}
              {ingredient.additionalInfo
                ? ` (${ingredient.additionalInfo})`
                : ""}
            </li>
          ))}
        </ul>
      </section>
      <section className="bg-bgMain text-tBase ml-20 mt-10">
        <h3 className="font-semibold mb-4">Zubereitung</h3>
        <ol className="mb-6">
          {instructionsList.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>
      <section className="bg-bgMain text-tBase ml-20 mt-10">
        <h3 className="font-semibold mb-4">Zusätzliche Informationen</h3>
        <p>{recipe.categories?.name}</p>
      </section>
      <div
        className="flex flex-col items-center justify-center bg-bgMain text-tBase ml-20 mt-10 mb-10 cursor-pointer h-28"
        onClick={toggleFavorite}>
        {favoriteContext?.isFavorite ? (
          <>
            Auf deiner Favoritenliste ! <Favorite_clicked />
          </>
        ) : (
          <>
            Zu Favoriten hinzufügen: <Favorite />
          </>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default SingleRecipe;
