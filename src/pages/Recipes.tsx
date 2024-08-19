import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/HeroSection";
import NavBar from "../components/Navbar";
import NewestRecipes from "../components/NewestRecipes";

const Recipes = () => {
  return (
    <>
      <section className="bg-bgMain">
        <NavBar />
        <Header />
        <Hero />
        <NewestRecipes />
        <Footer />
      </section>
    </>
  );
};

export default Recipes;
