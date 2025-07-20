import React from 'react'
import { useRef } from 'react'

function Useref() {
     const inputRef = useRef(null);
    const focushandle = () => {
    inputRef.current.focus();
    inputRef.current.placeholder="This is the placeholder";
     setTimeout(() => {
      inputRef.current.value = 'Hello';
    }, 5000); 
  };
  
  
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focushandle}>Focus On Input Field</button>
    </div>
  )
}

export default Useref
