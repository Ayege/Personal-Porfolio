import React from 'react'
import ReactImg from "../assets/React.svg"
import {motion} from "framer-motion";

function Skills() {
  return (
    <div className="w-full flex justify-around mx-6 py-8 lg:mx-12  lg:py-20">
      <div className="flex flex-col justify-between">
        <h3 className="font-inter  font-black">
          <motion.span className="bg-tropical-gradient text-transparent bg-clip-text">
            What I am good at.
          </motion.span>
          <br></br>
        </h3>
        <div className="row justify-center align-middle gap-2 p-3 text-white">  
        <img></img>

        </div>
      </div>
    </div>
  );
}

export default Skills