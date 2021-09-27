import React, { useState } from "react";
import "./styles.css";

const fruitDict = {
  "🍇": "Grapes",
  "🍉": "Watermelon",
  "🍌": "Banana",
  "🥭": "Mango",
  "🍍": "Pineapple",
  "🍑": "Peach",
  "🍒": "Cherry",
  "🍓": "Strawberry",
  "🍏": "Green Apple",
  "🍎": "Red Apple",
  "🥝": "Kiwi Fruit",
  "🍊": "Tangerine",
  "🍈": "Melon",
  "🥑": "Avocado",
  "🍐": "Pear"
};

const fruitList = Object.keys(fruitDict);

export default function App() {
  var [fruitName, setFruitName] = useState("");
  var [selectedFruit, setSelectedFruit] = useState("");
  function inputHandler(event) {
    if (fruitDict[event.target.value] === undefined) {
      setFruitName("Not found in database");
      setSelectedFruit("");
    } else {
      setFruitName(fruitDict[event.target.value]);
      setSelectedFruit(event.target.value + " : ");
    }
  }

  function clickHandler(event) {
    setFruitName(fruitDict[event.target.innerText]);
    setSelectedFruit(event.target.innerText + " : ");
  }

  return (
    <div className="App">
      <h1>Know the Fruit</h1>
      <input onChange={inputHandler} placeholder="Enter Flag Emoji"></input>
      <h3>Click on below Fruits to know its Name</h3>
      {fruitList.map(function (item) {
        return (
          <ul
            onClick={clickHandler}
            style={{
              display: "inline",
              fontSize: "2em",
              cursor: "pointer"
            }}
          >
            {item}
          </ul>
        );
      })}
      <div style={{ padding: "1em", fontSize: "2em" }}>
        {selectedFruit} {fruitName}
      </div>
    </div>
  );
}
