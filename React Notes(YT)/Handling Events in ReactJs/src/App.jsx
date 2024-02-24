import React from 'react'
import './App.css'
import Onsubmit from './onSubmit/onSubmit.jsx'
import Onclick from './onClick/onClick.jsx'
import Onchange from './onChange/onChange.jsx'
import PropsDestructuring from './PropsDestructuring/PropsDestructuring.jsx'

// $ 8) Handling Events in ReactJS 

// $ 8.1) onClick 
// $ 8.2) onChange
// $ 8.3) onSubmit

// $ 9) Props are passing & destructuring
const aman = "AmanSuryavanshi";
const arr = ["Surya","vanshi","21","2024","feb", "MESSAGE: props are passed to React components (props.jsx)" ];
// $ 9.1) What is props drilling?
// -> Props drilling, also known as prop threading or prop passing, refers to the process of passing props through multiple layers of components in a React application.
// -> It occurs when a component needs to pass props down to its child components, which in turn may pass those props further down to their own child components, and so on.

// $ 10) React Fragments

const App = () => {

  return (

    // $ 10) React Fragments
    // -->  <> </> This is react fragment 
    //  ->  Fragments were introduced in React version 16.2 as a lightweight way to group elements without introducing unnecessary parent elements to the DOM.
    <> 
    <Onclick/>
    <Onsubmit/>
    <Onchange/>
    <PropsDestructuring name={aman} array= {arr}/>
    </>
  )
}

export default App
