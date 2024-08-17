import Button from "../Button/Button";

const Card = () => {
  return (
    <section>
      <div className=" h-80 ">
        <div className="rounded-t-large bg-secondary bg-card bg-cover bg-center h-48 "></div>

        <div className="bg-bgCard p-6 rounded-b-large h-64 flex flex-col ">
          <h2 className="font-inter font-bold text-xl mt-4 mb-4 text-tBase">
            Pancakes
          </h2>
          <p className="font-inter font-regular text-base mb-4 text-tBase">
            Ein tolles Rezept für ein morgendliches Essen mit Freunden.
          </p>
          <div className="mb-4 mt-4">
            <Button />
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default Card;
