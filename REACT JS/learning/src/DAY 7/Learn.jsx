import React, { use, useState } from 'react'
import Count from './Count'

function Learn() {
    const [Counter,SetCounter] = useState(0)
    const [Data,SetData] = useState(0)
  return (
    <div>
      <Count Counter={Counter} Data={Data}/>
      <button onClick={()=>SetCounter(Counter+1)}>Update Counter </button>
      <button onClick={()=>SetData(Data+1)}> Update Data </button>
    </div>
  )
}

export default Learn
