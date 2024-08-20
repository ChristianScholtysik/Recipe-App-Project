import { useEffect, useState } from "react";
import supabaseClient from "../lib/supabaseClient";
import NewestCard from "./NewestCard/NewestCard";
import { Recipe } from "../types/supabase-types.own";

const NewestRecipes = () => {
  const [newestRecipes, setNewestRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      let selectQuery = supabaseClient
        .from("recipes")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(3);

      const result = await selectQuery;
      if (result.error) {
        console.error(result.error);
        setNewestRecipes([]);
      } else {
        setNewestRecipes(result.data);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <>
      <section className="flex flex-col justify-center items-center bg-bgMain h-screen mt-20 mb-48">
        <h2 className="font-inter font-bold text-xl text-tBase mb-16">
          Neueste Rezepte
        </h2>
        <div className="w-5/6 gap-12 flex flex-col items-center">
          {newestRecipes.map((recipe) => (
            <NewestCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
    </>
  );
};

export default NewestRecipes;
