import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/HeroSection";
import LoginStatus from "../components/LoginStatus";
import NavBar from "../components/Navbar";

const Home = () => {
  return (
    <section className="bg-bgMain">
      <LoginStatus />
      <NavBar />
      <Header />
      <Hero />
      <Footer />
    </section>
  );
};

export default Home;
