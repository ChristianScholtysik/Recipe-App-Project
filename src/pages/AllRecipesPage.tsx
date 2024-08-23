import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import supabaseClient from "../lib/supabaseClient";
import { Recipe } from "../types/supabase-types.own";
import { useSearchResults } from "../Context/SearchResultsContext";
import NewestCard from "../components/NewestCard/NewestCard";
import LoginStatus from "../components/LoginStatus";
import NavBar from "../components/Navbar";

const AllRecipesPage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const { setRecipes: setContextRecipes } = useSearchResults();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllRecipes = async () => {
      const { data, error } = await supabaseClient.from("recipes").select("*");
      if (error) {
        console.error(error);
        setRecipes([]);
      } else {
        setRecipes(data);
        setContextRecipes(data);
      }
    };

    fetchAllRecipes();
  }, [setContextRecipes]);

  return (
    <div className="bg-bgMain">
      <LoginStatus />
      <NavBar />
      <section className="p-8 bg-bgMain min-h-screen">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 px-4 py-2 text-white bg-primary rounded-md hover:bg-primary-dark transition-colors">
          Back
        </button>
        <h1 className="text-2xl font-bold text-tBase mb-8">All Recipes</h1>
        {recipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <NewestCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <p className="text-tBase">No recipes found.</p>
        )}
      </section>
    </div>
  );
};

export default AllRecipesPage;
