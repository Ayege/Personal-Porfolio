import React, { useState, useEffect } from "react";
import Card from "./Card";
import triangle from "../assets/triangles.svg";
import { motion } from "framer-motion";

function Projects() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const triangles = `${triangle}?t=${Date.now()}`;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)"); // define a media query for small screens
    setIsSmallScreen(mediaQuery.matches); // check if the current screen is small
    const handleResize = () => setIsSmallScreen(mediaQuery.matches); // update the state if the screen size changes
    mediaQuery.addListener(handleResize); // add a listener for screen size changes
    return () => mediaQuery.removeListener(handleResize); // cleanup the listener when the component unmounts
  }, []);

  return (
    <div className="w-full flex justify-around relative px-6 py-8 md:py-20">
         <img src={triangles} alt="triangles" className="invisible absolute right-0 top-0 w-24 rotate-180 md:visible  md:w-48"></img>
      <div className="flex flex-col w-full md:max-w-7xl">
        <div>
          <h2 className="font-inter text-white font-black text-5xl mb-6 leading-loose">
            <motion.span className="bg-tropical-gradient text-transparent bg-clip-text">
              Look at my projects..
            </motion.span>
          </h2>
        </div>
        <div className="w-full">
          <div className="flex flex-col justify-between gap-4 my-3 md:flex-row">
            <Card
              color="#1DC9FF"
              title="Hello"
              text="this is example text"
            ></Card>
            <Card
              color="#8BC34A"
              title="Hello"
              text="this is example text"
            ></Card>
            <Card
              color="#F44336"
              title="Hello"
              text="this is example text"
            ></Card>
          </div>
          <div>
      {isSmallScreen ? (
        <p className="block">This is shown on small screens</p>
      ) : (
        <div className="flex flex-col justify-between gap-4 md:flex-row">
            <Card
              color="#FFC107"
              title="Hello"
              text="this is example text"
            ></Card>
            <Card
              color="#00759D"
              title="Hello"
              text="this is example text"
            ></Card>
            <Card
              color="#F16529"
              title="Hello"
              text="this is example text"
            ></Card>
          </div>
      )}
    </div>
          
        </div>
      </div>
      <img
            src={triangles}
            alt="triangles"
            className="invisible absolute bottom-0 left-0  w-24 md:visible md:w-48"
          ></img>
    </div>
  );
}

export default Projects;
