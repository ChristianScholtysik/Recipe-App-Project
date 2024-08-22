import { useNavigate } from "react-router-dom";
import { useSearchResults } from "../Context/SearchResultsContext";
import NewestCard from "../components/NewestCard/NewestCard";

const ResultPage = () => {
  const navigate = useNavigate();
  const { recipes } = useSearchResults();

  return (
    <section className="p-8 bg-bgMain min-h-screen">
      <button
        onClick={() => navigate(-1)}
        className="mb-8 px-4 py-2 text-white bg-primary rounded-md hover:bg-primary-dark transition-colors">
        Back
      </button>
      <h1 className="text-2xl font-bold text-tBase mb-8">Search Results</h1>
      {recipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <NewestCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p className="text-tBase">No recipes found.</p>
      )}
    </section>
  );
};

export default ResultPage;
