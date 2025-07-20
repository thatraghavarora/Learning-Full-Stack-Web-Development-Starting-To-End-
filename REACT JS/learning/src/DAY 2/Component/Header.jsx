import React from 'react'

function Header() {
 const headerStyle = {
    display: "flex",
    gap: "20px",
    listStyle: "none",
    padding: "10px",
    backgroundColor: "#eee",
    justifyContent: 'space-between',
  
  };
  return (
    <header style={headerStyle}>
      <li>Home</li>
      <li>About</li>
      <li>Services</li>
      <li>Contact Us</li>
    </header>
  )
}

export default Header;
