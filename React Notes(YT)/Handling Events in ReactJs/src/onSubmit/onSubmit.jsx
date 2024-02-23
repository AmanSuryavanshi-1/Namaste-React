//  $ 8.3) onSubmit 
// -> The onSubmit event handler in React is a fundamental part of working with forms. 
// -> It allows you to capture form submissions and control how your application reacts to them.

// => Handle form submission in reactjs
// -> 1. assign a handler to submit event in form element
// -> 2. within submit handler we prevent page refresh
// -> 3. implement post request with fetch api to send post data to designated api

import React, { useState } from 'react'

const [title, setTitle]=useState();
const [body, setbody]= useState();
const [author, setauthor]= useState();

const onSubmitHook = () => {
  return (
    <div className='onSubmitContainer'>
      <h1>Add a New Blog</h1>
      <h2>Blog Title:</h2>
      <input type="text" value={title}  />
    </div>
  )
}

export default onSubmitHook