import React, { useState } from 'react';
import './Live_name_print.css'; // Import the CSS file

function Live_name_print() {
  const [val, setval] = useState("RAGHAV");

  return (
    <div className="container">
      <input
        type="text"
        value={val}
        onChange={(event) => setval(event.target.value)}
        className="input-field"
        placeholder="Type your name..."
      />
      <h1 className="heading">You Are Writing: {val}</h1>
      <button className="remove-button" onClick={() => setval("")}>
        Remove
      </button>
    </div>
  );
}

export default Live_name_print;
