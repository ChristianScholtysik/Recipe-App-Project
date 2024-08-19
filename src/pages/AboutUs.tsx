import Footer from "../components/Footer";
import Header from "../components/Header";

import NavBar from "../components/Navbar";

const AboutUs = () => {
  return (
    <section className="bg-bgMain">
      <NavBar />
      <Header />
      <div className="font-inter, font-regular, text-xlarge mr-32 ml-32 mb-20 mt-20 text-tBase">
        Hallo, wir sind Amanda und Pedro und freuen uns, unsere Arbeit auf
        Rezeptwelt vorstellen zu können. Bei der Erkundung dieser erstaunlichen
        Website haben wir ein gastronomisches Universum voller köstlicher
        Rezepte, nützlicher Tipps und kulinarischer Inspiration entdeckt.
        Rezeptwelt ist ein Ort, an dem sich erfahrene Köche und Kochanfänger in
        ihrer Leidenschaft für das Essen vereinen können.
        <br />
        <br />
        Was uns besonders begeistert hat, war die Vielfalt der Rezepte. Von
        traditionellen, gemütlichen Gerichten bis hin zu innovativeren
        Kreationen gibt es Optionen für jeden Geschmack und jede Gelegenheit.
        Jedes Rezept wird sorgfältig ausgewählt und getestet, um
        sicherzustellen, dass die Ergebnisse stets schmackhaft sind und es sich
        lohnt, sie zu teilen.
        <br />
        <br />
        Neben den Rezepten bietet Rezeptwelt auch nützliche Tipps zur
        Verbesserung der eigenen Kochkünste. Von Zubereitungstechniken bis hin
        zu Vorschlägen für Geschmackskombinationen - die Website lädt zum
        Entdecken und Experimentieren in der Küche ein. Es ist eine gemütliche
        und integrative Umgebung, in der jeder ermutigt wird, in die Kunst des
        Kochens einzutauchen und neue Möglichkeiten zu entdecken.
        <br />
        <br />
        Kurz gesagt, Rezeptwelt ist ein inspirierender gastronomischer Raum, der
        uns einlädt, unsere Leidenschaft für das Kochen zu entdecken, zu
        kreieren und zu teilen. Wir hoffen, dass unsere Präsentation Ihr
        Interesse geweckt hat, sich mit uns auf diese köstliche Reise in die
        Rezeptwelt zu begeben!
      </div>
      <Footer />
    </section>
  );
};

export default AboutUs;
