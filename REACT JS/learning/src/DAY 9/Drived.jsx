import React from 'react'
import { useState } from 'react'

function Drived() {
    const [users,Setusers] = useState([]);
    const [user,Setuser]=useState('');
    const HandleAddUser=()=>{
        Setusers([...users,user])
        
    }
    console.log(users)

  return (
    <div>
      <input type="text" onChange={(event)=>Setuser(event.target.value) } />
      <button onClick={HandleAddUser}>Add Users</button>
      {
        users.map((item,index)=>(
            <p key={index}>{item}</p>
        )) 
      }
    </div>
  )
}

export default Drived
