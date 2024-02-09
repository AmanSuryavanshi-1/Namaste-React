import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [resList, setResList] = useState([]);
  // installing axios using npm i axios we can use async await too
  
  useEffect(()=>{},[])
  return (
    <>
    <h1>AfterEffects of CORS error in Swiggy clone</h1>
    <h2>Number of products are:{resList}</h2>
    </>
  )
}

export default App
