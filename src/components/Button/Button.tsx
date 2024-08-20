import { Link } from "react-router-dom";

const Button = () => {
  return (
    <>
      <Link to="/:id">
        <button className="bg-primary text-tBase py-1 px-4 rounded-full hover:bg-hover font-inter font-bold">
          Zum Rezept
        </button>
      </Link>
    </>
  );
};

export default Button;
