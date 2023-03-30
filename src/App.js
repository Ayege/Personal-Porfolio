import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-eerie-black ">
      <div className="bg-lines bg-[percentage:90%] bg-no-repeat bg-[center_top_4rem] md:bg-lines md:bg-no-repeat md:bg-right-top md:bg-contain">
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
    </div>
  );
}

export default App;
