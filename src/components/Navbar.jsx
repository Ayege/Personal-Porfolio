import { useState } from "react";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";




export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full z-20 relative ">
      <div className="justify-between px-6 mx-auto lg:px-14  md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="www.google.com">
              <h2 className="text-2xl font-bold text-white font-inter">
                A<span className="text-vermillion">.</span>Yege
              </h2>
            </a>
            <div className="md:hidden">
              <button
                aria-label="Hamburger menu"
                className="p-2 text-eerie-black bg-tropical-gradient rounded-2xl outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-eerie-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-eerie-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white font-inter font-semibold hover:text-picton-blue">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    textDecoration: "underline",
                  }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                >
                  <HashLink smooth to="/#about">
                    About Me
                  </HashLink>
                </motion.div>
              </li>
              <li className="text-white font-inter font-semibold hover:text-amber">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    textDecoration: "underline",
                  }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                >
                  <HashLink smooth to="/#skills">
                    Skills
                  </HashLink>
                </motion.div>
              </li>
              <li className="text-white font-inter font-semibold hover:text-yellow-green">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    textDecoration: "underline",
                  }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                >
                  <HashLink smooth to="/#projects">
                    Projects
                  </HashLink>
                </motion.div>
              </li>
              <li className="text-white font-inter font-semibold hover:text-vermillion">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    textDecoration: "underline",
                  }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                >
                  <HashLink smooth to="/#contact">
                    Contact Me
                  </HashLink>
                </motion.div>
              </li>
            </ul>

            <div className="mt-3 space-y-2 lg:hidden md:inline-block">
              <motion.a
                whileHover={{
                  scale: 1.1,
                }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                className="inline-block w-full px-4 py-2 text-center font-inter text-sm font-bold text-eerie-black bg-tropical-gradient rounded-full shadow hover:bg-gray-800"
              >
                <HashLink smooth to="/#contact">
                  Let's Talk
                </HashLink>
              </motion.a>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          <motion.div
            whileHover={{
              scale: 1.1,
            }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            className="px-6 py-3 text-eerie-black font-bold font-inter text-sm bg-tropical-gradient rounded-full shadow hover:bg-gray-800"
          >
            <HashLink smooth to="/#contact">
              Let's Talk
            </HashLink>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
