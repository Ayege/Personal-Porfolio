import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="w-full flex justify-around px-6 py-8 md:py-20">
      <div className="flex flex-col md:max-w-7xl">
        <div>
          <h2 className="font-inter text-white font-black text-4xl mb-6 leading-loose">
            <motion.span className="bg-tropical-gradient text-transparent bg-clip-text">
              Look at my projects..
            </motion.span>
          </h2>
        </div>
        <div className="w-full">
          <div className="flex flex-col gap-4 md:flex-row">
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
          <div className="flex flex-col gap-4 invisible md:visible md:flex-row">
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
        </div>
      </div>
    </div>
  );
}

export default Projects;
