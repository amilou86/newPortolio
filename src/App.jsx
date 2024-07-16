import React from "react";
import './index.css';
import OppoScroll from "./Components/OppoScroll/OppoScroll.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import ParallaxRain from './Components/Parallax/Parallax.jsx';
import Carousel from './Components/Carousel/Carousel.jsx'

function App() {
  return (
    <>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="About">
        <ParallaxRain />
      </section>
      <section>
        <OppoScroll />
      </section>
      <section id="Portfolio">
        <Carousel />
      </section>
      {/* <Portfolio /> */}
      <section id="Contact">
        {/* <Contact /> */}
      </section>
    </>
  );
}

export default App;
