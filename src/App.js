import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-eerie-black ">
      <div className="bg-lines bg-no-repeat bg-right-top">
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
    </div>
  );
}

export default App;
