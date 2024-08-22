import { useNavigate } from "react-router-dom";

const AllRecipesSection = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col items-center justify-center m-16">
      <h2 className="font-inter font-bold text-xl text-tBase mb-16">
        Alle Rezepte
      </h2>
      <button
        className="bg-primary text-tBase py-3 px-8 rounded-full hover:bg-hover font-inter font-bold "
        onClick={() => navigate("/all-recipes")}>
        Zu den Rezepten
      </button>
    </section>
  );
};

export default AllRecipesSection;
