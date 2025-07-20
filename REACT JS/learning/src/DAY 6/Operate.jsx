import React from 'react'
import { useState } from 'react'


function Operate() {
     const [Skills,setSkills] = useState("");
     const handleskill=(event)=>{
        
        if(event.target.checked){
            setSkills([...Skills, event.target.value, ])
        }
        else{
            setSkills([...Skills.filter((item)=>item!=event.target.value)])
        }
     } 
  return (
  <>
  
  <h1>My Skill</h1>
  <label htmlFor="">HTML</label>
  <input type="checkbox" name="" id="" onChange={handleskill} value="HTML"/>
  <br />
  <label htmlFor="">CSS</label>
  <input type="checkbox" name="" id="" onChange={handleskill} value="CSS"/>
  <br />
  <label htmlFor="">JS</label>
  <input type="checkbox" name="" id="" onChange={handleskill} value="JS"/>
  <br />
  <label htmlFor="">REACT JS </label>
  <input type="checkbox" name="" id="" onChange={handleskill} value="REACT JS"/>
  <br />

  <h1>{Skills}</h1>
  </>
  )
}

export default Operate
