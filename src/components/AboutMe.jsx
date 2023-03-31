import React from "react";
import ayesha from "../assets/ayesha2.png";
import cube from "../assets/cubes.svg"
import { useMediaQuery } from "@react-hook/media-query";
import { motion } from "framer-motion";

function Hero() {
  const matches = useMediaQuery("(min-width: 475px)");

  return (
    <div className="w-full flex justify-around mx-6 py-8 lg:mx-12  lg:py-20">
      <div className="flex justify-between flex-col-reverse  lg:max-w-7xl lg:flex-row-reverse md:flex-row ">
        <div className="w-11/12 md:w-2/5">
          <h2 className="font-inter text-white font-black text-5xl mb-6 leading-loose">
            <motion.span className="bg-tropical-gradient text-transparent bg-clip-text">
              Bit about me
            </motion.span>
          </h2>
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
          </div>
        </div>

        <motion.div
          className="w-fit mb-6 ml-[-50px] relative md:m-0"
          animate={{ x: [-100, 0] }}
          transition={{ ease: "easeOut", duration: 0.75 }}
        >
          <img src={cube} className="absolute right-0"></img>
          <img
            className="bg-ellipse bg-no-repeat bg-top"
            src={ayesha}
            alt="Ayesha the developer"
          ></img>
          <img src={cube} className="absolute bottom-0 left-0"></img>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
