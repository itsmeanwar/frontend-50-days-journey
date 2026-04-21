import React, { useState } from "react";

const App = () => {
  // Stores the current value typed in the input field
  const [inputValue, setInputValue] = useState("");

  // Stores the list of all added items
  const [items, setItems] = useState([]);

  // Updates inputValue whenever the user types in the input field
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Adds the current inputValue to the items list
  const handleAddItem = () => {
    // Prevent adding empty or whitespace-only values
    if (inputValue.trim() === "") return;

    // Add new item to the existing list (immutable update)
    setItems([...items, inputValue]);

    // Clear the input field after adding
    setInputValue("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Simple Input List</h2>

      {/* Input field (controlled component) */}
      <input
        type="text"
        placeholder="Enter item"
        value={inputValue}
        onChange={handleInputChange}
      />

      {/* Button to add input value to list */}
      <button onClick={handleAddItem}>Add Item</button>

      {/* Display the list of items */}
      <ul>
        {items.map((item, index) => (
          // Each list item needs a unique key (index used here for simplicity)
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;