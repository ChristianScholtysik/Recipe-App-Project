import { useEffect, useState } from "react";
import supabaseClient from "../lib/supabaseClient";
import { useUserContext } from "../Context/UserContext";
import { Recipe } from "../types/supabase-types.own";
import NewestCard from "../components/NewestCard/NewestCard";
import LoginStatus from "../components/LoginStatus";
import NavBar from "../components/Navbar";

interface RecipeFavorite {
  id: string;
  recipe_id: string;
  created_at: string;
}

const MyRecipes = () => {
  const [_favorites, setFavorites] = useState<RecipeFavorite[]>([]);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const userContext = useUserContext();
  const user = userContext?.user;
  // const navigate = useNavigate();

  useEffect(() => {
    const fetchFavorites = async () => {
      if (!user) return;

      const { data: favoriteData, error } = await supabaseClient
        .from("recipe_favorites")
        .select("*")
        .eq("user_id", user.id);

      if (error) {
        console.error("Error fetching favorites:", error);
        return;
      }

      setFavorites(favoriteData);

      if (favoriteData) {
        const recipeIds = favoriteData.map((fav) => fav.recipe_id);
        const { data: recipeData, error: recipeError } = await supabaseClient
          .from("recipes")
          .select("*")
          .in("id", recipeIds);

        if (recipeError) {
          console.error("Error fetching recipes:", recipeError);
          return;
        }

        setRecipes(recipeData);
      }
    };

    fetchFavorites();
  }, [user]);

  return (
    <div className="bg-bgMain">
      <LoginStatus />
      <NavBar />
      <section className="flex flex-col justify-center items-center bg-bgMain">
        <h1 className="text-2xl font-bold text-tBase mb-8 mt-8 ">
          Meine Rezepte
        </h1>
        {/* <button
          onClick={() => navigate(-1)}
          className="mb-8 px-4 py-2 text-white bg-primary rounded-md hover:bg-primary-dark transition-colors">
          Back
        </button> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 mb-16">
          {recipes.map((recipe) => (
            <NewestCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyRecipes;
