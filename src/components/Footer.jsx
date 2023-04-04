import React from "react";

function Footer() {
  return (
    <div className="w-full flex justify-around px-6">
      <div className="flex justify-between flex-col w-full md:max-w-7xl md:flex-row ">
        <div className="font-inter w-full">
          <a href="www.google.com">
            <h2 className="text-2xl font-bold text-white font-inter">
              A<span className="text-vermillion">.</span>Yege
            </h2>
          </a>
          <p className="text-white">Created by Ayesha© | All Reserved!</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
