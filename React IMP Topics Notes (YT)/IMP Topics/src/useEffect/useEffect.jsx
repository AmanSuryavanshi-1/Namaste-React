import React, { useState, useEffect } from 'react'
import "./UseEffect.css"

const UseEffect = () => {
    const [count, setCount] = useState(0);
    
    useEffect(()=>{
        console.log("The count is:" ,count);

        // Optional cleanup function
        return() => {
            console.log("I am being cleaned up");
        }
    },[count])
    
    return (
    <div className='useEffect'>
        <h2>COUNT <span>{count}</span></h2>
        <button onClick={()=>{
            setCount(count-1)
        }}>
            Decrement
        </button>
        <button onClick={()=>{
            setCount(count+1)
        }}>
            Increment
        </button>
    </div>
  )
}

export default UseEffect