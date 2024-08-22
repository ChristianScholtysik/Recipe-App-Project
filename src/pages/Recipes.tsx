import AllRecipesSection from "../components/AllRecipesSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/HeroSection";
import LoginStatus from "../components/LoginStatus";
import NavBar from "../components/Navbar";
import NewestRecipes from "../components/NewestRecipes";

const Recipes = () => {
  return (
    <>
      <section className="bg-bgMain">
        <LoginStatus />
        <NavBar />
        <Header />
        <Hero />
        <NewestRecipes />
        <AllRecipesSection />
        <Footer />
      </section>
    </>
  );
};

export default Recipes;
