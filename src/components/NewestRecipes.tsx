import NewestCard from "./NewestCard/NewestCard";

const NewestRecipes = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center bg-bgMain h-screen mt-20 mb-48">
        <h2 className="font-inter font-bold text-xl text-tBase mb-16">
          Neueste Rezepte
        </h2>
        <div className="w-5/6 gap-12 flex flex-col items-center">
          <NewestCard />
          <NewestCard />
          <NewestCard />
        </div>
      </section>
    </>
  );
};

export default NewestRecipes;
