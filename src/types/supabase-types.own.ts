import { Tables } from "./supabase-types-gen";

export type Recipe = Tables<"recipes">;
export type Ingredients = Tables<"ingredients">;
export type Categories = Tables<"categories">;

export type RecipeComplete = Recipe & {
  ingredients: Ingredients[];
  category: Categories;
};

export interface IIngredient {
  id: string;
  name: string;
  quantity: number | null;
  unit: string | null;
  additionalInfo?: string | null;
  created_at: string;
  recipe_id: string;
}

export interface IRecipe {
  id: string;
  name: string;
  description: string;
  servings: string;
  instructions: string;
  rating: number | null;
  imageUrl?: string | null;
  ingredients: IIngredient[];
  category_id: string | null;
  categories?: Categories | null;
  created_at: string;
}

// export type RecipeComplete = {
//   recipe: Recipe;
//   category: Categories;
//   ingredients: Ingredients[];
// };
