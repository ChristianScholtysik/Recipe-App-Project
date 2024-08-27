import { useEffect, useState } from "react";
import Card from "./Card/Card";
import supabaseClient from "../lib/supabaseClient";
import { Recipe } from "../types/supabase-types.own";

const Hero = () => {
  const [bestRecipes, setBestRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const { data, error } = await supabaseClient
        .from("recipes")
        .select("*")
        .order("rating", { ascending: false })
        .limit(3);

      if (error) {
        console.error(error);
        setBestRecipes([]);
      } else {
        setBestRecipes(data);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <section className="flex flex-col justify-center items-center bg-bgMain py-16 px-4 md:px-8 lg:px-16 h-auto">
      <h2 className="font-inter font-bold text-2xl md:text-3xl lg:text-4xl text-tBase mb-8 text-center">
        Die beliebtesten Rezepte
      </h2>
      <div className="w-full max-w-screen-lg">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
          {bestRecipes.map((recipe) => (
            <Card
              key={recipe.id}
              recipe={recipe}
              // isFavorite={isFavorite}
              // toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
