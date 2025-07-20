import { useState } from "react";
import React  from 'react';

function Data() {
  const userName = "Anil Sidhu";
  let x = 5;
  let message =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi eligendi molestias ea placeat dolore nihil nemo in possimus ipsa aspernatur voluptate eaque quam facere impedit soluta aliquid consectetur, nesciunt unde.";
    const [like, addlike] = useState(0);
    

  // Inline style objects
  const containerStyle = {
    backgroundColor: "#f9f9f9",
    padding: "30px",
    borderRadius: "10px",
    maxWidth: "600px",
    margin: "30px auto",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif"
  };

  const headingStyle = {
    color: "#333",
    fontSize: "2rem",
    marginBottom: "10px"
  };

  const ratingStyle = {
    color: "#666",
    fontSize: "1.2rem",
    marginBottom: "20px"
  };

  const paragraphStyle = {
    lineHeight: "1.6",
    color: "#444",
    marginBottom: "20px"
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 20px",
    fontSize: "1rem",
    borderRadius: "5px",
    cursor: "pointer",
    display:"flex",
    justifyContent: 'center',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>{userName}</h1>
      <h2 style={ratingStyle}>Rating {x}/10</h2>
      <p style={paragraphStyle}>{message}</p>
      <p style={paragraphStyle}>Like Message : {like}</p>
      <button style={buttonStyle} onClick={() =>addlike(like+1)}>
        Like Message
      </button>
    </div>
  );
}

export default Data;
