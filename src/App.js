import "./App.css";
import React, { useState } from "react";

function App() {
  const [dogs, setDogs] = useState("");
  const [dogList, setDogList] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      console.log(data);

      setDogs(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickHandler = () => {
    getData();
    console.log(dogs, " this is a dog");
    setDogList([...dogList, dogs]);
    console.log(dogList);
  };

  const renderImage = dogList.map((el, index) => {
    return (
      <div key={index}>
        <img src={el} alt="IMG"></img>
      </div>
    );
  });

  return (
    <div>
      <h1>Welcome to Dog World</h1>
      <button onClick={onClickHandler}>Submit</button>
      {renderImage}
      {/* <DogList /> */}
    </div>
  );
}

export default App;
