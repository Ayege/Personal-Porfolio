import React from "react";

function Card(props) {

  return (
    <div className="w-full rounded-lg shadow-md lg:max-w-sm">
      <img
        className="object-cover w-full rounded-t-3xl h-48"
        src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
        alt="project img"
      />
      <div
        className="font-inter p-4 rounded-b-3xl"
        style={{ backgroundColor: props.color }}
      >
        <h4 className="text-xl font-semibold tracking-tight text-white">
          {props.title}
        </h4>
        <p className="mb-2 leading-normal text-white">{props.text}</p>
      </div>
    </div>
  );
}

export default Card;
