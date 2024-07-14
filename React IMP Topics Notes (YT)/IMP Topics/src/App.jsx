import React from 'react'
import './App.css'
import Onsubmit from './onSubmit/onSubmit.jsx'
import Onclick from './onClick/onClick.jsx'
import Onchange from './onChange/onChange.jsx'
import PropsDestructuring from './PropsDestructuring/PropsDestructuring.jsx'
import UseEffect from './useEffect/UseEffect.jsx'
import UseState from './useState/UseState.jsx'

// $ 8) Handling Events in ReactJS 

// $ 8.1) onClick (onClick.jsx)
// $ 8.2) onChange (onChange.jsx)
// $ 8.3) onSubmit (onSubmit.jsx)
// $      8.3.1) Forms → Handling form submissions and controlled vs. uncontrolled components. (onSubmit.jsx)


// $ 9) Props are passing & destructuring (PropsDestructuring.jsx)
const aman = "AmanSuryavanshi";
const arr = ["Surya","vanshi","21","2024","feb", "MESSAGE: props are passed to React components (props.jsx)"];

// $ 12) useEffect (useEffect.jsx) in notion notes
// $ 13) useState   (useState.jsx) in notion notes
// $ 14) React Fragments (App.jsx) in notion notes

const App = () => {

  return (

    // $ 14) React Fragments
    // -->  <> </> This is react fragment 
     <> 
    <Onclick/>
    <Onsubmit/>
    <Onchange/>
    <PropsDestructuring name={aman} array= {arr}/>
    <UseEffect/>
    <UseState/>
    </>
  )
}

export default App
