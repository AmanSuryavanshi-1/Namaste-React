import React from 'react'
import './App.css'
import Onsubmit from './onSubmit/onSubmit.jsx'
import Onclick from './onClick/onClick.jsx'
import Onchange from './onChange/onChange.jsx'
import PropsDestructuring from './PropsDestructuring/PropsDestructuring.jsx'
import UseEffect from './useEffect/UseEffect.jsx'
import UseState from './useState/UseState.jsx'


// $ 27) Library V/S Framework in notion notes
// $ 28) State V/S props in notion notes

// $ 29) Handling Events in ReactJS in notion notes
// $ 29.1) onClick (onClick.jsx)
// $ 29.2) onChange (onChange.jsx)
// $ 29.3) onSubmit (onSubmit.jsx)

// $ 30) Props are passing & destructuring (PropsDestructuring.jsx)in notion notes
const aman = "AmanSuryavanshi";
const arr = ["Surya","vanshi","21","2024","feb", "MESSAGE: props are passed to React components (props.jsx)"];

// $ 31) useEffect (useEffect.jsx) in notion notes
// $ 32) useState   (useState.jsx) in notion notes
// $ 33) React Fragments (App.jsx) in notion notes

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
