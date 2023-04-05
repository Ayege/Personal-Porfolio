import React from "react";
import ReactImg from "../assets/React.svg";
import MongoDBImg from "../assets/MongoDB.svg";
import NodeImg from "../assets/Node.svg";
import TailwindImg from "../assets/Tailwind.svg";
import WordpressImg from "../assets/Wordpress.svg";
import Diamonds from "../assets/Diamonds.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Skills() {
  const diamonds = `${Diamonds}?t=${Date.now()}`;

  const imgVariants = {
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  const [ref, inView] = useInView({
    threshold: 0.2, // Set threshold to 20%
  });

  const transition = { duration: 0.6, ease: "easeInOut" };

  return (
    <div
      className="w-full relative flex justify-around py-8 px-6 md:py-20"
      ref={ref}
    >
      <img
        src={diamonds}
        alt="Diamond bg"
        className="z-0 absolute h-full md:center-20 md:top-0"
      ></img>
      <div className="flex flex-col w-full md:flex-row  md:max-w-7xl md:justify-between ">
        <motion.h3
          className="z-10 font-inter font-black bg-tropical-gradient text-transparent bg-clip-text pb-10 text-5xl md:w-2/6 md:pr-20"
          ref={ref}
          initial={{ x: -500 }} // start position of image
          transition={{ duration: 0.5 }} // animation duration
          animate={inView ? { x: 0 } : { x: -200 }}
        >
          What I am good at.
        </motion.h3>
        <div className="z-10 flex flex-col align-middle text-white gap-2 md:flex-row md:w-4/6">
          <motion.div
            variants={imgVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ ...transition }}
            className=" flex flex-row justify-center gap-2"
          >
            <motion.img
              variants={imgVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.2, ...transition }}
              src={ReactImg}
              alt="react logo"
              className="w-20 md:w-32"
            />
            <motion.img
              variants={imgVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.6, ...transition }}
              src={MongoDBImg}
              alt="MongoDB logo"
              className="w-20  md:w-32"
            />
            <motion.img
              variants={imgVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.8, ...transition }}
              src={NodeImg}
              alt="Node logo"
              className="w-20  md:w-32"
            />
          </motion.div>
          <motion.div
            variants={imgVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.2, ...transition }}
            className="flex flex-row justify-center gap-2"
          >
            <motion.img
              variants={imgVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 1.2, ...transition }}
              src={WordpressImg}
              alt="Wordpress logo"
              className="w-20  md:w-32"
            />
            <motion.img
              variants={imgVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 1.4, ...transition }}
              src={TailwindImg}
              alt="Tailwind logo"
              className="w-20 md:w-32"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
