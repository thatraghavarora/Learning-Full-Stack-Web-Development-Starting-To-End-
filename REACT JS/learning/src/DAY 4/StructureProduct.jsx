import React from 'react';

function StructureProduct({ name, cost, description }) {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '20px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginBottom: '10px'
  };

  const nameStyle = {
    fontWeight: 'bold',
    width: '30%',
  };

  const costStyle = {
    color: 'green',
    width: '20%',
  };

  const descriptionStyle = {
    width: '50%',
  };

  return (
    <div style={containerStyle}>
      <div style={nameStyle}>{name}</div>
      <div style={costStyle}>₹{cost}</div>
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
}

export default StructureProduct;
