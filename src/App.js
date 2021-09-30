import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🍎": "Red Apple",
  "🍇": "Grapes",
  "🍉": "Watermelon",
  "🍒": "Cherry",
  "🥑": "Avacado",
  "🍍": "Pineapple"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
   
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning); 
  }

  function emojiClickHandler(emoji) {
   
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); 
  }
  return (
    <div className="App">
      <h1>Know Your Fruits !</h1>

      <input onChange={emojiInputHandler} />

      <h2> {meaning} </h2>
      

      <h3> Fruits emojis we know ! </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
