import Button from "../Button/Button";

type CardProps = {
  recipe: {
    id: string;
    name: string;
    description: string;
    imageUrl?: string;
  };
};

const Card = ({ recipe }: CardProps) => {
  return (
    <section className="w-72">
      <div className="  ">
        <div
          className="rounded-t-large bg-secondary bg-cover bg-center h-48 "
          style={{
            backgroundImage: `url(${
              recipe.imageUrl || "../../assets/img/default-image.png"
            })`,
          }}></div>

        <div className="bg-bgCard p-6 rounded-b-large h-64 flex flex-col ">
          <h2 className="font-inter font-bold text-xl mt-4 mb-4 text-tBase">
            {recipe.name}
          </h2>
          <p className="font-inter font-regular text-base mb-4 text-tBase line-clamp-2">
            {recipe.description}
          </p>
          <div className="mb-4 mt-4">
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
