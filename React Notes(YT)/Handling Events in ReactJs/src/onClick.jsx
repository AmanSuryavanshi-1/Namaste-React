import React from 'react'
import { useState } from 'react'


const onClick = () => {

    const [bg, setBg] = useState("red");
    const [name, setName] = useState("Click me");
  
    const bgChange = () =>{
      const ChangedBg = "cyan";
      setBg(ChangedBg);
  
      const ChangedName = "Clicked and BG is Changed to cyan";
      setName(ChangedName); 
    }
  
    const bgBack = () =>{
        // const PrevBg= "red";
        // const PrevName= "Click Again"
        // setBg(PrevBg);
        // setName(PrevName);
        //--> Or give  directly 
        setBg("purple");
        setName("Click me");
    }

  return (
    <div style={{backgroundColor: bg}}>
      {/* <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button> */}
      {/* Or the above onclick can be written as follows without creating bgChange & bgChange Externally :- */}
      <button onClick={()=>{
        setBg("cyan");
        setName("Clicked and BG is Changed to cyan");
      }}
              onDoubleClick={()=>{
                setBg("purple");
                setName("Click me");
              }}
      >{name}</button>


      {/* Simmilary there are many JS events in Which can be used just change the name of event function for eg:-  */}
      <button onMouseEnter={bgChange} onMouseLeave={bgBack}>{name}</button>
    </div>
  )
}

export default onClick