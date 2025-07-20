// components/EmployeeCard.jsx
import React from 'react';
import styles from './EmployeeCard.module.css'; // Import CSS Module


function EmployeeCard({ name, job, experience, avatar }) {
  return (
    <div className={styles.card}>
      <img src={avatar} alt="Avatar" className={styles.avatar} />
      <h3 className={styles.name}>{name}</h3>
      <p><strong>Job:</strong> {job}</p>
      <p><strong>Experience:</strong> {experience}</p>
    </div>
  );
}

export default EmployeeCard;
