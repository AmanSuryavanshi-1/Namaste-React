import React from 'react'
import './App.css'
import Onsubmit from './onSubmit/onSubmit.jsx'
import Onclick from './onClick/onClick.jsx'
import Onchange from './onChange/onChange.jsx'
import PropsDestructuring from './PropsDestructuring/PropsDestructuring.jsx'
import UseEffect from './useEffect/UseEffect.jsx'

// $ 8) Handling Events in ReactJS 

// $ 8.1) onClick (onClick.jsx)
// $ 8.2) onChange (onChange.jsx)
// $ 8.3) onSubmit (onSubmit.jsx)
// $      8.3.1) Forms → Handling form submissions and controlled vs. uncontrolled components. (onSubmit.jsx)


// $ 9) Props are passing & destructuring (PropsDestructuring.jsx)
const aman = "AmanSuryavanshi";
const arr = ["Surya","vanshi","21","2024","feb", "MESSAGE: props are passed to React components (props.jsx)"];
// $ 9.1) What is props drilling?         (PropsDrilling.jsx)
// -> Props drilling, also known as prop threading or prop passing, refers to the process of passing props through multiple layers of components in a React application.
// -> It occurs when a component needs to pass props down to its child components, which in turn may pass those props further down to their own child components, and so on.

// $ 10) State V/S props
//->  Feature	                                                State	                                                        Props
//->  Origin and Control   |  	Internal to the component, controlled by the component     |      External to the component, passed down from a parent component
//                         |         itself using setState	                               |
//->  Mutability	         |    Mutable, can be changed after initialization	             |      Immutable, cannot be changed within the receiving component
//->  Purpose	             |    Represents dynamic data that changes within the component  |      Used to pass information from parent to child components
//->  Accessibility	       |    Accessible only within the component where it is defined	 |      Accessible to all child components that receive them
//->  Examples             |    Counter value, form input, fetched data	                   |      User data, theme settings, list items
//->  Use When	           |    Data changes within the component	                         |      Data remains constant or needs to be shared with child components

// $ 11) Library V/S Framework
//-> Feature	                                              Library	                                                           Framework
//-> Purpose	         |  Provides specific functionalities for developers to use in their projects.	          |  Provides a complete structure and set of tools for building web applications.
//-> Control	         |  Developer has full control over how the library is used and integrated.	              |  Framework dictates the overall structure and approach to building the application.
//-> Flexibility	     |  More flexible, can be easily integrated with other libraries or frameworks.	          |  Less flexible, requires following the framework's guidelines and limitations.
//-> Learning Curve	   |  Generally easier to learn and use, requires understanding specific functionalities.	  |  Steeper learning curve, requires understanding the framework's entire philosophy and structure.
//-> Examples	         |  jQuery (for manipulating web pages), Math.js (for math calculations),React            |  Angular, Django (for building web applications)
//                     |   React is a JavaScript library, not a framework.                                      |

// $ 12) useEffect (useEffect.jsx)

// $ 13) React Fragments (App.jsx)

const App = () => {

  return (

    // $ 13) React Fragments
    // -->  <> </> This is react fragment 
    //  ->  Fragments were introduced in React version 16.2 as a lightweight way to group elements without introducing unnecessary parent elements to the DOM.
    <> 
    <Onclick/>
    <Onsubmit/>
    <Onchange/>
    <PropsDestructuring name={aman} array= {arr}/>
    <UseEffect/>
    </>
  )
}

export default App
