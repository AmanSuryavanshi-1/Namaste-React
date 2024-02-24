import React from 'react'

const PropDrilling = ({drilling}) => {
  return (
    <div>
        <h2>Drilling props from app.jsx further to PropDrilling.jsx</h2>
        <ul>
        { drilling.map((i)=>{
          return <li style={{color:'blue'}} key={i}>{i} || DRILLED from PropsDestructuring.jsx</li>
        }) }
      </ul>
    </div>
  )
}

export default PropDrilling