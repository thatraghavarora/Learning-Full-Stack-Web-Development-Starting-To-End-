import React, { useState } from 'react';

function Profile() {
  const [view, setView] = useState('grid');

  const boxStyle = {
    width: "200px",
    margin: "15px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    textAlign: "center",
    backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  };

  const flexWrapStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const blockStyle = {
    display: "block",
    margin: "0 auto",
  };

  const employees = new Array(12).fill({
    name: "Employee Name",
    experience: "2 Years",
    job: "Web Developer",
    avatar: "https://static.vecteezy.com/system/resources/previews/020/911/740/non_2x/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png",
  });

  return (
    <div style={{ padding: '2rem', fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Employees List</h1>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button
          onClick={() => setView('grid')}
          style={{
            padding: '10px 20px',
            marginRight: '10px',
            borderRadius: '6px',
            border: 'none',
            backgroundColor: view === 'grid' ? '#007bff' : '#ccc',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Set Into Grid
        </button>
        <button
          onClick={() => setView('block')}
          style={{
            padding: '10px 20px',
            borderRadius: '6px',
            border: 'none',
            backgroundColor: view === 'block' ? '#007bff' : '#ccc',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Set Into Row
        </button>
      </div>

      <div style={view === 'grid' ? flexWrapStyle : blockStyle}>
        {employees.map((emp, index) => (
          <div key={index} style={boxStyle}>
            <img
              src={emp.avatar}
              width="100"
              height="100"
              alt="Avatar"
              style={{ borderRadius: "50%", marginBottom: "1rem" }}
            />
            <p><strong>Name:</strong> {emp.name}</p>
            <p><strong>Experience:</strong> {emp.experience}</p>
            <p><strong>Job:</strong> {emp.job}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
