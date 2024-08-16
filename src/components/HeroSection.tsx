import Card from "./Card/Card";

const Hero = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center bg-bgMain h-screen gap-16">
        <h2 className="font-inter font-bold text-xl text-tBase ">
          Die beliebtesten Rezepte
        </h2>
        <div className="w-5/6">
          <div className="flex flex-row justify-center items-center gap-16">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
