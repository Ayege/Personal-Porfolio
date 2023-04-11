import React from "react";
import ayesha from "../assets/ayesha2.png";
import cube from "../assets/cubes.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AboutMe() {
  const cubes = `${cube}?t=${Date.now()}`;
  const [ref, inView] = useInView({
    threshold: 0.2, // Set threshold to 20%
  });

  return (
    <div
      id="about"
      className="w-full flex justify-around px-6 py-8 md:py-20 overflow-x-hidden "
      ref={ref}
    >
      <div className="flex justify-between flex-col-reverse  md:max-w-7xl md:flex-row-reverse ">
        <div className="md:w-1/2">
          <h2 className="font-inter text-white font-black text-5xl mb-6 leading-loose">
            <motion.span
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.75 }}
              className="bg-tropical-gradient text-transparent bg-clip-text"
            >
              Bit about me
            </motion.span>
          </h2>
          <p className="font-inter text-white text-left mb-5 md:text-left ">
            <motion.p
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.75 }}
              className="font-inter text-white text-left mb-5 md:text-left"
            >
              Hello and welcome to my personal portfolio! My name is Ayesha, and
              I am a passionate web developer with a focus on creating
              beautiful, functional, and user-friendly websites. I am proud to
              say that I have a wealth of experience in web development,
              including proficiency in a range of programming languages and
              frameworks such as HTML, CSS, Tailwind, JavaScript, React, and
              Node.js.
            </motion.p>
          </p>
          <p className="font-inter hidden text-white text-left mb-10 md:text-left md:block ">
            <motion.p
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.75 }}
              className="font-inter invisible text-white text-left mb-10 md:text-left md:visible"
            >
              But perhaps most importantly, I am passionate about using my
              skills to make a positive impact on the world. Whether it's
              through creating a website for a small business owner or
              developing an application that improves people's lives, I am
              driven by the belief that technology can be a force for good.
            </motion.p>
          </p>
          <div className="flex flex-row justify-center gap-6 align-middle md:justify-start ">
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.75 }}
              className="px-6 py-3 text-white font-bold font-inter text-sm bg-tropical-gradient rounded-full shadow hover:bg-gray-800 inline-block"
            >
              <a href="../assets/Ayesha Yege - PM and Web Dev.pdf" download>
                Download CV
              </a>
            </motion.div>
          </div>
        </div>

        <div className="w-fit mb-6 relative  md:m-0">
          <img
            src={cubes}
            alt="cubes"
            className="absolute right-0 w-24  md:w-48  md:right-[-2em]"
          ></img>
          <motion.img
            ref={ref}
            initial={{ x: -200 }}
            transition={{ duration: 1.0 }}
            animate={inView ? { x: 0 } : { x: -200 }}
            className="w-fit bg-contain bg-ellipse bg-no-repeat bg-top overflow-x-hidden"
            src={ayesha}
            alt="Ayesha the developer"
          ></motion.img>
          <img
            src={cubes}
            alt="cubes"
            className="absolute bottom-0 left-0  w-24 md:w-48 md:left-[-2em]"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
