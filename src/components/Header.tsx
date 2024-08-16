const Header = () => {
  return (
    <section className="relative h-72">
      <img
        src="/src/assets/img/Heroimage.png"
        alt=""
        className="h-72 w-full object-cover"
      />

      <div className="absolute inset-0 bg-black opacity-50 z-10" />
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <p className="text-white font-inter font-bold text-center text-xl w-2/4">
          Lassen Sie sich inspirieren, kochen Sie mit Leidenschaft und erleben
          Sie unvergessliche Momente bei Tisch.
        </p>
      </div>
    </section>
  );
};

export default Header;
