import React from "react";
import Banner from "./../../Components/Banner/Banner";
import About from "./../../Components/About/About";
import Skills from "./../../Components/Skills/Skills";
import Projects from "./../../Components/Projects/Projects";
import Contact from "./../../Components/Contact/Contact";
import EducationalQualification from "../../Components/EducationalQualification/EducationalQualification";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Skills />
      <EducationalQualification />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
