import React from "react";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-eerie-black ">
      <div className="bg-lines bg-[percentage:90%] bg-no-repeat bg-[center_top_4rem] md:bg-lines md:bg-no-repeat md:bg-[top_calc(0%)_right_calc(5%)] md:bg-contain">
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
      <AboutMe></AboutMe>
      <Skills></Skills>
    </div>
  );
}

export default App;
