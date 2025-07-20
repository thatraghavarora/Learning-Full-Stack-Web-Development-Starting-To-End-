import React, { useState } from 'react';
import Box from "../DAY 2/Component/box"
function Ads() {

    const [display,setDisplay] = useState(true)
    
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    padding: '20px'
  };
  const buttonWrapper = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px'
  };
   const buttonStyle = {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 20px",
    fontSize: "1rem",
    borderRadius: "5px",
    cursor: "pointer"
     
  };


  const boxStyle = {
    backgroundColor: '#333',
    color: 'white',
    width: '150px',
    height: '150px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    
  };

  return (
<>
<div style={buttonWrapper}>
<button style={buttonStyle} onClick={()=>{setDisplay(!display)} }>  {display ? "Remove Ads" : "Show Ads"}</button>
</div>
{
    display? <Box/> :null
}

</>
  );
}

export default Ads;
