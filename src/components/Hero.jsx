import React from "react";
import heroImg from "../assets/ayege.png";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="w-full flex justify-around mx-12 shadow py-20">
      <div className="flex flex-row justify-between lg:max-w-7xl">
        <div className="w-2/5">
          <h1 className="font-inter lg:text-5xl mb-6 lg:leading-relaxed text-white font-black">
            <motion.span className="p-0 m-0 bg-tropical-gradient text-transparent bg-clip-text">
              Hello, I’m Ayesha,{" "}
            </motion.span>
            <br></br>
            Full stack Developer and Web Designer.
          </h1>
          <p className="font-inter text-white text-justify mb-10 ">
            A Full stack developer and web designer. I am a passionate web
            developer with a focus on creating beautiful, functional, and
            user-friendly websites.
          </p>
          <div className=" flex flex-row justify-start gap-6 align-middle ">
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              className="px-6 py-3 text-white font-bold font-inter text-sm bg-tropical-gradient rounded-full shadow hover:bg-gray-800 inline-block"
            >
              <a href="www.google.com">Contact Me</a>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              className="px-6 py-3 text-white font-bold font-inter text-sm bg-vermillion rounded-full shadow hover:bg-gray-800 inline-block"
            >
              <a href="www.google.com">View Projects</a>
            </motion.div>
          </div>
        </div>
        <motion.div className="w-fit"
          animate={{ x: [-100, 0] }}
          transition={{ ease: "easeOut", duration: .75 }}>
          <img src={heroImg} alt="Ayesha the developer"></img>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
