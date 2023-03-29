import React from "react";
import heroImg from "../assets/ayege.png";


function Hero() {
  return (
    <div className="bg-lines bg-no-repeat bg-right-top">
      <div className="w-full flex justify-around p-0 m-0 shadow py-16">
        <div className="flex flex-row justify-between lg:max-w-7xl">
          <div className="w-2/5">
            <h1 className="font-inter lg:text-5xl lg:leading-relaxed text-white font-black">
              <span className="p-0 m-0 bg-tropical-gradient text-transparent bg-clip-text">
                Hello, I’m Ayesha,{" "}
              </span>
              <br></br>
              Full stack Developer and Web Designer.
            </h1>
          </div>
          <div className="w-fit z-10">
            <img src={heroImg} alt="Ayesha the developer"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
