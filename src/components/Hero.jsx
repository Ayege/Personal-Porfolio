import React from "react";
import heroImg from "../assets/ayege.png";
import heroSmall from "../assets/heroSmall.png";
import { useMediaQuery } from "@react-hook/media-query";
import { motion } from "framer-motion";

function Hero() {

  const matches = useMediaQuery("(min-width: 475px)");
 
  return (
    <div className="w-full flex justify-around py-8 px-6 md:py-20">
      <div className="flex justify-between flex-col-reverse  md:max-w-7xl lg:flex-row md:flex-row ">
        <div className="md:w-2/5">
          <h1 className="font-inter text-white font-black text-4xl mb-6 leading-loose">
            <motion.span className="bg-tropical-gradient text-transparent bg-clip-text">
              Hello, I’m Ayesha,
            </motion.span>
            <br></br>
            Full stack Developer and Web Designer.
          </h1>
          <p className="font-inter text-white text-left mb-10 md:text-justify">
            A Full stack developer and web designer. I am a passionate web
            developer with a focus on creating beautiful, functional, and
            user-friendly websites.
          </p>
          <div className="flex flex-row justify-start gap-6 align-middle ">
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
              className="px-6 py-3 text-white font-bold font-inter text-sm bg-vermillion rounded-full shadow hover:bg-tropical-gradient inline-block"
            >
              <a href="www.google.com">View Projects</a>
            </motion.div>
          </div>
        </div>
        <motion.div
          className="w-fit py-[-150px] ml-5 mb-6 md:m-auto"
          animate={{ x: [-100, 0] }}
          transition={{ ease: "easeOut", duration: 0.75 }}
        >
          <img
            src={matches ? heroImg : heroSmall}
            alt="Ayesha the developer"
          ></img>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
