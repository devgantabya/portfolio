import React from "react";
import Banner from "./../../Components/Banner/Banner";
import About from "./../../Components/About/About";
import Skills from "./../../Components/Skills/Skills";
import Projects from "./../../Components/Projects/Projects";
import Contact from "./../../Components/Contact/Contact";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
