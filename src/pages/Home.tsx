import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/HeroSection";
import NavBar from "../components/Navbar";

const Home = () => {
  return (
    <section className="bg-bgMain">
      <NavBar />
      <Header />
      <Hero />
      <Footer />
    </section>
  );
};

export default Home;
