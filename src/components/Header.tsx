import Hero from "../assets/img/Hero.png";

const Header = () => {
  return (
    <section className="relative h-72">
      <img src={Hero} alt="Hero" className="h-72 w-full object-cover" />

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black opacity-50 z-10" />

      {/* Centered text content */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <p className="text-white font-inter font-bold text-center text-xl md:text-2xl lg:text-3xl w-3/4 md:w-2/3 lg:w-1/2 px-4">
          Lassen Sie sich inspirieren, kochen Sie mit Leidenschaft und erleben
          Sie unvergessliche Momente bei Tisch.
        </p>
      </div>
    </section>
  );
};

export default Header;
