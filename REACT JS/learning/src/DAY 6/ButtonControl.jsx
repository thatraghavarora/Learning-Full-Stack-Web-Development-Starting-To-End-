import React from 'react'
import { useState } from 'react'

function Button_control() {
    const [Gender,Setgender]= useState("Male")
    const [Year,SetYear] = useState("")
  return (
    <div>
      <h1>Handle Ratio Button And Dropdowb</h1>
      <lable htmlFor="gender">I am {Gender}</lable>
      <br/>
      <input type="radio" name="gender" id="gender" value="Male" checked={Gender== "Male"}  onChange={(event)=>Setgender(event.target.value)} />Male
      <input type="radio" name="gender"  id="gender" value="Female" checked={Gender== "Female"} onChange={(event)=>Setgender(event.target.value)} />Female 

      <h1>COLLEGE YEAR : {Year} </h1>
      <select name="" id="" onChange={(e)=>SetYear(e.target.value)}>
        
          <option value="BCA - I">BCA - I</option>
        <option value="BCA - II">BCA - II</option>
        <option value="BCA - III">BCA - III</option>
      </select>

    </div>
  )
}

export default Button_control
