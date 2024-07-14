import React from "react";
import './index.css'
import OppoScroll from "./Components/OppoScroll/OppoScroll.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx"
import Hero from "./Components/Hero/Hero.jsx"

function App() {
  return (
    <>
      <section>
        <Navbar />
        <Hero />
      </section>
      <OppoScroll />
    </>
  );
}

export default App;
