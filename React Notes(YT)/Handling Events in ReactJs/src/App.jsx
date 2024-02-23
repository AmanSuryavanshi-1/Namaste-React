import React from 'react'
import './App.css'
import Onsubmit from './onSubmit/onSubmit.jsx'
import Onclick from './onClick/onClick.jsx'
import Onchange from './onChange/onChange.jsx'

// $ 8) Handling Events in ReactJS 

// $ 8.1) onClick 
// $ 8.2) onChange
// $ 8.3) onSubmit

const App = () => {

  return (
    <>
    <Onclick/>
    <Onsubmit/>
    <Onchange/>
    </>
  )
}

export default App