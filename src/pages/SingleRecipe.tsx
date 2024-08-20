// import { useEffect, useState } from "react";
// import HeaderSingleRecipe from "../components/HeaderSingleRecipe";
// import NavBar from "../components/Navbar";
// import supabaseClient from "../lib/supabaseClient";

// type Recipes = {
//   id: string;
//   name: string;
//   description: string;
//   servings: string;
//   instructions: string;
//   category_id: string;
//   created_at: Date;
//   imageUrl?: string;
//   rating?: number;
// };

// const SingleRecipe = () => {
//   const [singleRecipe, setSingleRecipe] = useState<Recipes[]>([]);

//   useEffect(() => {
//     const fetchRecipes = async () => {
//       let selectQuery = supabaseClient.from("recipes").select("_id");

//       const result = await selectQuery;
//       if (result.error) {
//         console.error(result.error);
//         setSingleRecipe([]);
//       } else {
//         setSingleRecipe(result.data);
//       }
//     };

//     fetchRecipes();
//   }, []);

//   return (
//     <>
//       <NavBar />
//       <HeaderSingleRecipe />
//     </>
//   );
// };

// export default SingleRecipe;
