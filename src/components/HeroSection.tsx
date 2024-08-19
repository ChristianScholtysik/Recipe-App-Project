import { useEffect, useState } from "react";
import Card from "./Card/Card";
import supabaseClient from "../lib/supabaseClient";

type Recipes = {
  id: string;
  name: string;
  description: string;
  servings: string;
  instructions: string;
  category_id: string;
  created_at: Date;
  imageUrl?: string;
  rating?: number;
};

const Hero = () => {
  const [bestRecipes, setBestRecipes] = useState<Recipes[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      let selectQuery = supabaseClient
        .from("recipes")
        .select("*")
        .order("rating", { ascending: false })
        .limit(3);

      const result = await selectQuery;
      if (result.error) {
        console.error(result.error);
        setBestRecipes([]);
      } else {
        setBestRecipes(result.data);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <>
      <section className="flex flex-col justify-center items-center bg-bgMain h-screen gap-16 mb-24">
        <h2 className="font-inter font-bold text-xl text-tBase ">
          Die beliebtesten Rezepte
        </h2>
        <div className="w-5/6">
          <div className="flex flex-row justify-center items-center gap-16">
            {bestRecipes.map((recipe) => (
              <Card key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
