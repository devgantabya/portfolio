import Banner from "./../../Components/Banner/Banner";
import About from "./../../Components/About/About";
import Experience from "./../../Components/Experience/Experience";
import Skills from "./../../Components/Skills/Skills";
import Projects from "./../../Components/Projects/Projects";
import Contact from "./../../Components/Contact/Contact";
import EducationalQualification from "../../Components/EducationalQualification/EducationalQualification";
import MyCertificates from "../../Components/myCertificates/myCertificates";
import GithubContributions from "../../Components/GithubContributions/GithubContributions";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <EducationalQualification />
      <MyCertificates />
      <GithubContributions />
      <Contact />
    </div>
  );
};

export default Home;
