import React,{useState} from 'react'
//* YT link ( https://www.youtube.com/watch?v=V9i3cGD-mts )

// $ 13) useState
// -> It is used to create local state variable inside the component
// -> Never create useState outside of the component or above const UseState.

//&   Q: What is State?
//&   A: Data which changes over time 
//&      In terms of react data which changes from one render to another. 
//&      STATE is any piece of information that can change over time across render's in react.

const UseState = () => {
  // -> useState generally takes a initial value inside ()
  // -> if not defined it will be remain undefined 
  const [count, setCount] = useState(1000);
  // -> We can change the variable names from count,setCount to anything
  // -> But it is conventional to name it like count,setCount
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