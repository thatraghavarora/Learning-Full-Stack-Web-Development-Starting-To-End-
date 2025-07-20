import React from 'react'
import { useState, useEffect } from 'react'
import "./Clock.css"


function Clock() {
    const [Time,SetTime]=useState("00:00:00");
    useEffect(()=>{
        setInterval(() => {
            SetTime(new Date().toLocaleTimeString());
        }, 1000);
    },[])

    const [Colors,SetColor]=useState("White")
  return (
   <>
   
   <center>
    <h1>Real Time </h1>
    <h1>{Time}</h1>
   </center>
 <p>Set Color</p>
    <select name="" id="">
        <option value="White"> White</option>
        <option value="White"> Green</option>
        <option value="White"> Blue</option>
        <option value="White"> Red</option>
    </select>

   </>
  )
}

export default Clock
