import React from "react";

function Card(props) {

  return (
    <div className="w-full rounded-lg shadow-lg lg:max-w-sm">
      <img
        className="object-cover w-full rounded-t-3xl h-58"
        src={props.img}
        alt="project img"
      />
      <div
        className="font-inter p-4 rounded-b-3xl"
        style={{ backgroundColor: props.color }}
      >
        <h4 className="text-xl font-semibold tracking-tight text-justify text-white">
          {props.title}
        </h4>
        <p className="mb-2 leading-normal text-justify text-white">
          {props.text}
        </p>
      </div>
    </div>
  );
}

export default Card;
