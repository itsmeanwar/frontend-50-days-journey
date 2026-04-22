// src/App.jsx
//increment, decrement, reset

import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0); // State to hold the count value

  // Function to handle incrementing the count
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Function to handle decrementing the count
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Function to handle resetting the count
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Count: {count}</h1> {/* Display the current count */}
      <button onClick={handleIncrement}>Increment</button> <br />{" "}
      {/* Button to increment the count */}
      <button onClick={handleDecrement}>Decrement</button> <br />{" "}
      {/* Button to decrement the count */}
      <button onClick={handleReset}>Reset</button>{" "}
      {/* Button to reset the count */}
    </div>
  );
};

export default App;


//!1️⃣ Normal vs Arrow function
//👉 Normal function

//Uses function keyword
//Has its own this

//👉 Arrow function

// Short syntax
// Does NOT have its own this (takes from parent)

// 👉 One line to remember:

// Normal = own this (this is object reference), Arrow = parent this (closer access parent variable)
//!2️⃣ What is JSX?
// JSX allows us to write HTML inside JavaScript in React.
//!3️⃣ How event works in React?
// 👉 Simple flow:

// User clicks → function runs → state updates → UI updates

// 👉 Example idea:

// onClick → calls function → changes state → UI changes
//!4️⃣ Why we used condition in decrement?
// To stop count going below 0