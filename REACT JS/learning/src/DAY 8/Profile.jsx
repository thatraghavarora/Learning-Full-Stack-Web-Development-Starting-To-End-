// Profile.jsx
import React from 'react';
import EmployeeCard from './components/EmployeeCard';

function Profile() {
  const employees = [
    {
      name: 'Raghav Arora',
      job: 'Frontend Developer',
      experience: '2 years',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    {
      name: 'Priya Sharma',
      job: 'Backend Developer',
      experience: '3 years',
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '2rem' }}>
      {employees.map((emp, index) => (
        <EmployeeCard
          key={index}
          name={emp.name}
          job={emp.job}
          experience={emp.experience}
          avatar={emp.avatar}
        />
      ))}
    </div>
  );
}

export default Profile;
