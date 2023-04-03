import React from "react";
import ReactImg from "../assets/React.svg";
import MongoDBImg from "../assets/MongoDB.svg";
import NodeImg from "../assets/Node.svg";
import TailwindImg from "../assets/Tailwind.svg";
import WordpressImg from "../assets/Wordpress.svg";
import Diamonds from "../assets/Diamonds.svg";

function Skills() {

  const diamonds = `${Diamonds}?t=${Date.now()}`;

  return (
    <div className="w-full relative flex justify-around py-8 px-6 md:py-20">
        <img src={diamonds} alt="Diamond bg" className="z-0 absolute top-0 h-full"></img>
      <div className="flex flex-col w-full md:flex-row  md:max-w-7xl md:justify-between ">
        <h3 className="z-10 font-inter font-black bg-tropical-gradient text-transparent bg-clip-text pb-10 text-4xl md:text-5xl md:w-2/6 md:pr-20">
          What I am good at.
        </h3>
        <div className="z-10 flex flex-col align-middle text-white gap-4 md:flex-row md:w-4/6">
          <div className=" flex flex-row justify-center gap-2">
            <img
              src={ReactImg}
              alt="react logo"
              className=" w-20 md:w-32"
            ></img>
            <img
              src={MongoDBImg}
              alt="MongoDB logo"
              className="w-20  md:w-32"
            ></img>
            <img src={NodeImg} alt="Node logo" className="w-20  md:w-32"></img>
          </div>
          <div className="flex flex-row justify-center gap-2">
            <img
              src={WordpressImg}
              alt="Wordpress logo"
              className="w-20 md:w-32"
            ></img>
            <img
              src={TailwindImg}
              alt="Tailwind logo"
              className="w-20  md:w-32"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
