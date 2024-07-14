import React,{useState} from 'react'
//* YT link ( https://www.youtube.com/watch?v=V9i3cGD-mts )

// $ 13) useState notes from notion
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