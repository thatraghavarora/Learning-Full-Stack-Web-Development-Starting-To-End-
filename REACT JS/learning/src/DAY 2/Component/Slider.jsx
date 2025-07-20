import React from 'react';

function Slider() {
  const sliderStyle = {
    backgroundColor: 'black',
    height: '70vh',
    color: 'white', // optional: to make text visible
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem'
  };

  return (
    <div style={sliderStyle}>
      Slider
    </div>
  );
}

export default Slider;
