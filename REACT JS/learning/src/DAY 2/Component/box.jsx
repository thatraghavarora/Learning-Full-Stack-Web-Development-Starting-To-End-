import React from 'react';

function Box() {
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    padding: '20px'
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
    fontSize: '1.2rem'
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>Box 1</div>
      <div style={boxStyle}>Box 2</div>
      <div style={boxStyle}>Box 3</div>
      <div style={boxStyle}>Box 4</div>
      <div style={boxStyle}>Box 5</div>
      <div style={boxStyle}>Box 6</div>
      <div style={boxStyle}>Box 7</div>
      <div style={boxStyle}>Box 8</div>
    </div>
  );
}

export default Box;
