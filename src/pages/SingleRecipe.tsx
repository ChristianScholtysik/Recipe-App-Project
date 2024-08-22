import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import supabaseClient from "../lib/supabaseClient";
import { IRecipe } from "../types/supabase-types.own";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginStatus from "../components/LoginStatus";

const SingleRecipe = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<IRecipe | null>(null);

  useEffect(() => {
    const fetchSingleRecipe = async () => {
      if (!id) {
        console.error("No recipe id given.");
        return;
      }

      const supabaseResponse = await supabaseClient
        .from("recipes")
        .select(
          `
          id,
          name,
          description,
          servings,
          instructions,
          category_id,
          created_at,
          imageUrl,
          rating,
          categories(
          id,name, created_at
          ),
          ingredients(id,
          recipe_id,
          name, quantity, unit, additionalInfo,
          created_at)
          `
        )
        .eq("id", id)
        .single();

      if (supabaseResponse.error) {
        console.error("Recipe not found in database");
        return;
      }
      if (supabaseResponse.data) {
        setRecipe(supabaseResponse.data);
        console.log(supabaseResponse.data);
      }
    };
    fetchSingleRecipe();
  }, []);

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
          src={recipe.imageUrl?.toString() ?? ""}
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
      <section className=" bg-bgMain text-tBase ml-20 mt-10">
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
      <section className=" bg-bgMain text-tBase ml-20 mt-10">
        <h3 className="font-semibold mb-4">Zubereitung</h3>
        <ol className="mb-6">
          {instructionsList.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>
      <section className=" bg-bgMain text-tBase ml-20 mt-10">
        <h3 className="font-semibold mb-4">Zusätzliche Informationen</h3>
        <p>{}</p>
      </section>
      <Footer />
    </section>
  );
};

export default SingleRecipe;
