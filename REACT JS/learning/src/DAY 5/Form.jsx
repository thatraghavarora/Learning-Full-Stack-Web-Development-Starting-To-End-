import React, { useState } from 'react';

function Form() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const styles = {
    container: {
      maxWidth: '400px',
      margin: '50px auto',
      padding: '20px',
      border: '2px solid #007bff',
      borderRadius: '10px',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '15px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '16px',
    },
    buttonContainer: {
      display: 'flex',
      gap: '10px',
      marginBottom: '20px',
    },
    button: {
      flex: 1,
      padding: '10px 0',
      fontSize: '16px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    submitBtn: {
      backgroundColor: '#28a745',
      color: 'white',
    },
    clearBtn: {
      backgroundColor: '#dc3545',
      color: 'white',
    },
    output: {
      color: '#333',
    },
    hr: {
      margin: '20px 0',
    }
  };

  return (
    <div style={styles.container}>
      <label style={styles.label}>Name</label>
      <input
        type="text"
        value={Name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
      />

      <label style={styles.label}>Email</label>
      <input
        type="email"
        value={Email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />

      <label style={styles.label}>Password</label>
      <input
        type="password"
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />

      <div style={styles.buttonContainer}>
        <button
          style={{ ...styles.button, ...styles.submitBtn }}
          onClick={() => {
            alert("Form Submitted Successfully");
            setName("");
            setEmail("");
            setPassword("");
          }}
        >
          Submit
        </button>

        <button
          style={{ ...styles.button, ...styles.clearBtn }}
          onClick={() => {
            setName("");
            setEmail("");
            setPassword("");
          }}
        >
          Clear
        </button>
      </div>

      <hr style={styles.hr} />

      <div style={styles.output}>
        <h3>Name: {Name}</h3>
        <h3>Email: {Email}</h3>
        <h3>Password: {Password}</h3>
      </div>
    </div>
  );
}

export default Form;
