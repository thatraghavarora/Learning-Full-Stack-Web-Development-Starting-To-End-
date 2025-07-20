import React from 'react';

function TeamMember({ name, position, description }) {
  const cardStyle = {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    width: '300px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
  };

  const nameStyle = {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    marginBottom: '5px'
  };

  const positionStyle = {
    fontSize: '1.1rem',
    color: '#007bff',
    marginBottom: '10px'
  };

  return (
    <div style={cardStyle}>
      <div style={nameStyle}>{name}</div>
      <div style={positionStyle}>{position}</div>
      <p>{description}</p>
    </div>
  );
}

export default TeamMember;
