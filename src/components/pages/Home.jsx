import React from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import Skills from "../Skills";
import AboutMe from "../AboutMe";
import Projects from "../Projects";
import Contact from "../Contact";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Skills></Skills>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default Home;
