import "./styles.css";
import { useState } from "react";

const fruitDictionary = {
  "": "",
  "🍎": "Apple",
  "🍐": "Pear",
  "🍉": "Watermelon",
  "🍍": "Pineapple",
  "🥝": "Kiwi",
  "🥭": "Mango",
  "🍌": "Banana",
  "🍓": "Strawberry",
  "🍇": "Grapes",
  "🍏": "Green Apple",
  "🍑": "Peach",
  "🍒": "Cherry",
  "🍈": "Melon"
};

const fruitKey = Object.keys(fruitDictionary);

export default function App() {
  const [input, setInput] = useState("");
  let showOutput;

  const inputChangeHandler = (event) => {
    const inputEmoji = event.target.value;
    showOutput = fruitDictionary[inputEmoji];

    if (!(inputEmoji in fruitDictionary)) {
      showOutput = "No such fruit found!";
    }
    setInput(showOutput);
  };

  const fruitClickHandler = (fruit) => {
    showOutput = fruitDictionary[fruit];
    setInput(showOutput);
  };

  return (
    <div className="App">
      <header>
        <h1>Know your Fruit!</h1>
        <p className="github">
          <a
            href="https://github.com/himadri2110/neoG-markEight"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub Repo
          </a>
        </p>
      </header>

      <main>
        <input
          onChange={inputChangeHandler}
          placeholder="Enter fruit emoji to know its name"
        ></input>

        <div className="output">{input}</div>

        <div> Fruits we know: </div>

        <div className="fruitDiv">
          {fruitKey.map((fruit) => {
            return (
              <span onClick={() => fruitClickHandler(fruit)}>{fruit}</span>
            );
          })}
        </div>
      </main>

      <footer>
        <a
          href="https://himadrishah.tech/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Himadri Shah
        </a>
      </footer>
    </div>
  );
}
