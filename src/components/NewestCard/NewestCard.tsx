// import Button from "../Button/Button";

// const NewestCard = () => {
//   return (
//     <section className="flex w-11/12">
//       <div className="bg-newestCard rounded-l-large bg-secondary bg-cover bg-center  w-2/6 "></div>
//       <div className="w-4/6 bg-bgCard  rounded-r-large p-8">
//         <h2 className="font-inter font-bold text-xl mt-4 mb-4 text-tBase">
//           Donut
//         </h2>
//         <p className="font-inter font-regular text-base mb-8 mt-8 text-tBase">
//           Unwiderstehliche hausgemachte Donuts mit weichem Teig und köstlichen
//           Belägen.
//         </p>
//         <div className="mb-4 mt-8">
//           <Button />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewestCard;

import Button from "../Button/Button";

type NewestCardProps = {
  recipe: {
    id: string;
    name: string;
    description: string;
    imageUrl?: string;
  };
};

const NewestCard = ({ recipe }: NewestCardProps) => {
  return (
    <section className="flex w-11/12">
      <div
        className="rounded-l-large bg-cover bg-center w-2/6"
        style={{
          backgroundImage: `url(${recipe.imageUrl || "/default-image.jpg"})`,
        }}></div>
      <div className="w-4/6 bg-bgCard rounded-r-large p-8">
        <h2 className="font-inter font-bold text-xl mt-4 mb-4 text-tBase">
          {recipe.name}
        </h2>
        <p className="font-inter font-regular text-base mb-8 mt-8 text-tBase">
          {recipe.description}
        </p>
        <div className="mb-4 mt-8">
          <Button />
        </div>
      </div>
    </section>
  );
};

export default NewestCard;
