import React from 'react';
import { useEffect } from 'react';

const Count = ({ Counter, Data }) => {
    const HandleCounter = () => {
        console.log("Handle Counter is Running");
    };
    const HandleData = () => {
        console.log("Data is Calling")
    }


    useEffect(() => {
        HandleCounter();
    }, [])
    useEffect(()=>{
            HandleData();
    },[Data])

    return (
        <div>
            <h1>The Counter Value : {Counter}</h1>
            <h1>The Data Value : {Data}</h1>

        </div>
    );

};
export default Count;
