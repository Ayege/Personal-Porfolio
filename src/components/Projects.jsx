import React, { useState, useEffect } from "react";
import Card from "./Card";
import triangle from "../assets/triangles.svg";
import { motion } from "framer-motion";
import Ulticabinet from "../assets/Ulticabinet.png";
import MPL from "../assets/MPL.png";
import Lucky7 from "../assets/Lucky7.png";
import PersonalPorfolio from "../assets/PersonalPorfolio.png";
import ETL from "../assets/ETL.png";
import { useInView } from "react-intersection-observer";

function Projects() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const triangles = `${triangle}?t=${Date.now()}`;
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)"); // define a media query for small screens
    setIsSmallScreen(mediaQuery.matches); // check if the current screen is small
    const handleResize = () => setIsSmallScreen(mediaQuery.matches); // update the state if the screen size changes
    mediaQuery.addListener(handleResize); // add a listener for screen size changes
    return () => mediaQuery.removeListener(handleResize); // cleanup the listener when the component unmounts
  }, []);

  return (
    <div
      id="projects"
      className="w-full flex justify-around relative px-6 py-8 md:pt-24 md:pb-40"
      ref={ref}
    >
      <img
        src={triangles}
        alt="triangles"
        className="invisible absolute right-0 top-0 w-24 rotate-180 lg:top-20 lg:right-[5em] lg:visible  lg:w-48"
      ></img>
      <div className="flex flex-col w-full md:max-w-7xl">
        <div>
          <h2 className="font-inter text-white font-black text-5xl mb-6 leading-loose py-4">
            <motion.span
              className="bg-tropical-gradient text-transparent bg-clip-text"
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.75 }}
            >
              Look at my projects..
            </motion.span>
          </h2>
        </div>
        <div className="w-full">
          <div className="flex flex-col justify-between gap-4 my-3 md:flex-row">
            <motion.div
              ref={ref}
              variants={cardVariants}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
            >
              <Card
                link="https://ulticabinet.com/"
                color="#1DC9FF"
                img={Ulticabinet}
                title="Ulticabinet.com"
                text="This is a Wordpress responsive website using elementor for a software solutions company. The website has multiple animations, functional forms, zendesk integration, google statistics and displays in different languages."
              ></Card>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.4 }}
            >
              <Card
                link="https://mpl.do/"
                color="#8BC34A"
                title="Movimiento Profesionales con Leonel"
                img={MPL}
                text="This is a Worpress with Elementor site of a politician with functional forms and responsive design. This website includes interactive forms."
              ></Card>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.6 }}
            >
              <Card
                color="#F44336"
                img={Lucky7}
                title="Lucky7 - Tattoo Studio"
                text="Responsive web app built using Node.js, Express, Bootstrap and designed in Bootstrap Studio 5 that allows users to schedule their appointments."
              ></Card>
            </motion.div>
          </div>
          <div>
            {isSmallScreen ? (
              <div className="flex flex-row justify-center pt-7 align-middle ">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 },
                  }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                  transition={{ duration: 0.75 }}
                  className="px-6 py-4 text-white font-bold font-inter text-sm bg-tropical-gradient rounded-full shadow  hover:bg-gray-800 inline-block"
                >
                  <a
                    href="https://github.com/Ayege/"
                    aria-label="View more projects in github"
                  >
                    View more projects
                  </a>
                </motion.div>
              </div>
            ) : (
              <div className="flex flex-col justify-between gap-4 md:flex-row">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 },
                  }}
                  variants={cardVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ delay: 0.8 }}
                >
                  <Card
                    link="https://ayege.github.io/Personal-Porfolio/"
                    color="#FFC107"
                    title="Ayesha - Personal Portfolio Website"
                    img={PersonalPorfolio}
                    text="This project is a personal portfolio website designed in Figma and built using React and Tailwind. It is powered by React Router, Tailwind CSS, Framer Motion and else."
                  ></Card>
                </motion.div>
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 },
                  }}
                  variants={cardVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ delay: 1 }}
                >
                  <Card
                    link="https://github.com/Ayege/ETLPacientes"
                    color="#00759D"
                    img={ETL}
                    title="ETL - Pacientes"
                    text="
                    It is a .txt, .xls, .csv and SQL data extractor for patient records of a clinic, the example cases have been attached. The ETL then reads each data source and inserts the records in an organized manner to the corresponding field in a single SQL table in the database. It was carried out using SQL Server Data Tools."
                  ></Card>
                </motion.div>
                <motion.div
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ delay: 1.2 }}
                >
                  <Card
                    color="#F16529"
                    img={MPL}
                    title="Lucky7 - Tattoo Studio"
                    text="This is a responsive app built using Node.js, Express, Bootstrap and designed in Bootstrap Studio 5 that allows users to schedule appointments."
                  ></Card>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>
      <img
        src={triangles}
        alt="triangles"
        className="invisible absolute bottom-0 left-0  w-24 lg:visible lg:bottom-20 lg:left-[5em] lg:w-48"
      ></img>
    </div>
  );
}

export default Projects;
