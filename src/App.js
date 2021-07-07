import "./styles.css";
import { useState } from "react";

var fruitDictionary = {
  "🍎": "Apple",
  "🍐": "Pear",
  "🍉": "Watermelon",
  "🍍": "Pineapple",
  "🥝": "Kiwi",
  "🥭": "Mango",
  "🍌": "Banana",
  "🍇": "Grapes",
  "🍑": "Peach"
};

var fruitKey = Object.keys(fruitDictionary);

export default function App() {
  var [input, setInput] = useState("");
  var showOutput;

  function inputChangeHandler(event) {
    input = event.target.value;
    showOutput = fruitDictionary[input];

    if (!(input in fruitDictionary)) {
      showOutput = "No such fruit found!";
    }
    setInput(showOutput);
  }

  function fruitClickHandler(fruit) {
    showOutput = fruitDictionary[fruit];
    setInput(showOutput);
  }

  return (
    <div className="App">
      <h1>Know your Fruit!</h1>

      <input
        onChange={inputChangeHandler}
        placeholder="Enter fruit emoji to know its name"
      ></input>

      <div className="output">{input}</div>

      <div> Fruits we know: </div>

      <div className="fruitDiv">
        {fruitKey.map((fruit) => {
          return <span onClick={() => fruitClickHandler(fruit)}>{fruit}</span>;
        })}
      </div>
    </div>
  );
}
