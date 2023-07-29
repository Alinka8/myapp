import React from "react";
import Dog from "./../Dog/Dog";
import "./doglist.style.css";

const DogList = (props) => {
  const dogsArray = props.dogs.map((dogUrl) => {
    return <Dog url={dogUrl} />;
  });
  return <div className="container">{dogsArray}</div>;
};

export default DogList;
