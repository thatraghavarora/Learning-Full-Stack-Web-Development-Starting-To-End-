import React from 'react';
import styled from 'styled-components';

const Heading = styled.header`
  width:100%;
  height:10vh;
  background-Color:grey;
  display:flex;
  list-style:none;
  justify-content: space-between;
  text-align: center;
  align-items: center;
`;
const Box = styled.section`

`;
function App() {
  return (
    <div>
      <Heading>
        <li>Home</li>
        <li>About</li>
        <li>Gallery</li>
        <li>Contact</li>
      </Heading>
    
      

    </div>
  );
}

export default App;
