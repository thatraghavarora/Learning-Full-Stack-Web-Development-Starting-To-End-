import React from 'react';
import TeamMember from './TeamMember';

function TeamSection() {
  const teamStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
    padding: '40px'
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>👨‍💻 Our Team</h2>
      <div style={teamStyle}>
         <TeamMember
          name="Raghav"
          position="CEO"
          description="Runn The Company and Bring Fund "
        />
        <TeamMember
          name="Anil Sidhu"
          position="Frontend Developer"
          description="Builds modern and responsive UI using React."
        />
        <TeamMember
          name="Riya Kapoor"
          position="Backend Developer"
          description="Handles all server-side logic and APIs."
        />
        <TeamMember
          name="Dev Mehta"
          position="UI/UX Designer"
          description="Designs user-friendly and beautiful interfaces."
        />
      </div>
    </div>
  );
}

export default TeamSection;
