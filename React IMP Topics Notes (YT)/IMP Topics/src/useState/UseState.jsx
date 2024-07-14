import React,{useState} from 'react'
const UseState = () => {
  // -> useState generally takes a initial value inside ()
  // -> if not defined it will be remain undefined 
  const [count, setCount] = useState(1000);
  return (
    <>
    <h1>useState</h1>
    <button onClick={()=>{setCount(count+1)}}> + </button>
    <div>UseStateCount : {count}</div>
    <button onClick={()=>{setCount(count-1)}}> - </button>
    </>
  )
}

export default UseState