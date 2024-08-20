// import { useState } from "react";
// import Hero from "../assets/img/Hero.png";

// type SingleRecipeProps = {
//   recipe: {
//     id: string;
//     name: string;
//     description: string;
//     imageUrl?: string;
//   };
// };

// const HeaderSingleRecipe = ({ recipe }: SingleRecipeProps) => {
//   const [singleResult, setSingleResult] = useState<Recipe | null>(null);

//   return (
//     <section className="relative h-72">
//       <img src={recipe.imageUrl} alt="" className="h-72 w-full object-cover" />

//       <div className="absolute inset-0 bg-black opacity-50 z-10" />
//       <div className="absolute inset-0 flex items-center justify-center z-20">
//         <p className="text-white font-inter font-bold text-center text-xlarge w-2/4">
//           {recipe.name}
//         </p>
//       </div>
//     </section>
//   );
// };

// export default HeaderSingleRecipe;
