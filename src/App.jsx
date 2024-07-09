import React from "react";
import Hero from "./components/hero/Hero";
import NavBar from "./components/navBar/NavBar";
import Cards from "./components/cards/Cards";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
