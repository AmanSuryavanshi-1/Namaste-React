import React from 'react'
import "./PropsDestructuring.css"
import PropDrilling from './PropDrilling'

// const PropsDestructuring = (props) => {
//   return (
//     <div className='props-main'>
//       <h3>How props are taken from App.jsx and given in PropsDestructuring.jsx component</h3>
//       <h2>{props.name}</h2>
//       <ul>
//         { props.array.map((item)=>{
//           return <li key={item}>{item}</li>
//         }) }
//       </ul>
//     </div>
//   )
// }

// Now Destructuring the props coming from App.jsx
const PropsDestructuring = ({name,array}) => {
  return (
    <div className='props-main'>
      <h3>Q How props are taken from App.jsx and given in PropsDestructuring.jsx component?</h3>
      <ul>{name}</ul>
      <ul>
        { array.map((item)=>{
          return <li key={item}>{item}</li>
        }) }
      </ul>

      <PropDrilling drilling= {array} />
    </div>
  )
}

export default PropsDestructuring