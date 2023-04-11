import React, { useState } from "react";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

function Footer() {
  const [footer] = useState(false);

  return (
    <div className="w-full flex justify-around px-6 py-8 border-t-2 border-t-white md:py-10">
      <div className="flex justify-between flex-col w-full md:max-w-7xl md:flex-row">
        <div className="font-inter w-full md:w-2/6">
          <h2 className="text-2xl font-bold text-white font-inter">
            A<span className="text-vermillion">.</span>Yege
          </h2>
          <p className="text-white">Created by Ayesha© | All Reserved!</p>
        </div>
        <div className="md:w-3/6">
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              footer ? "block" : "hidden"
            }`}
          >
            <ul className="items-center md:flex md:flex-row md:justify-center md:space-x-5 md:space-y-0">
              <li className="text-white font-inter font-semibold hover:text-picton-blue">
                <motion.div
                  whileHover={{ scale: 1.1, textDecoration: "underline" }}
                  onHoverStart={() => {}}
                  onHoverEnd={() => {}}
                >
                  <HashLink smooth to="/#about">
                    About Me
                  </HashLink>
                </motion.div>
              </li>
              <li className="text-white font-inter font-semibold hover:text-amber">
                <motion.div
                  whileHover={{ scale: 1.1, textDecoration: "underline" }}
                  onHoverStart={() => {}}
                  onHoverEnd={() => {}}
                >
                  <HashLink smooth to="/#skills">
                    Skills
                  </HashLink>
                </motion.div>
              </li>
              <li className="text-white font-inter font-semibold hover:text-yellow-green">
                <motion.div
                  whileHover={{ scale: 1.1, textDecoration: "underline" }}
                  onHoverStart={() => {}}
                  onHoverEnd={() => {}}
                >
                  <HashLink smooth to="/#projects">
                    Projects
                  </HashLink>
                </motion.div>
              </li>
              <li className="text-white font-inter font-semibold hover:text-vermillion">
                <motion.div
                  whileHover={{ scale: 1.1, textDecoration: "underline" }}
                  onHoverStart={() => {}}
                  onHoverEnd={() => {}}
                >
                  <HashLink smooth to="/#contact">
                    Contact Me
                  </HashLink>
                </motion.div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
