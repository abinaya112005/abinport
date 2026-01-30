import './App.css';
import NavbarComp from "./NavbarComp";
import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";
import Education from "./Education";
import Certificate from "./Certificate";
function App() {
  return (
    <>
      <NavbarComp />
      <Hero />
      <About />
      <Skills/>
      <Education/>
      <Certificate/>
      <Contact />
    </>
  );
}

export default App;
