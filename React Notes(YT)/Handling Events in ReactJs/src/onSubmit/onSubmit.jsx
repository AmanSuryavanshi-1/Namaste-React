//  $ 8.3) onSubmit  (NET NINJA)
// -> The onSubmit event handler in React is a fundamental part of working with forms. 
// -> It allows you to capture form submissions and control how your application reacts to them.

// => Handle form submission in reactjs
// -> 1. assign a handler to submit event in form element
// -> 2. within submit handler we prevent page refresh
// -> 3. implement post request with fetch api to send post data to designated api




import React, { useState } from 'react'
import "./onSubmit.css"

const onSubmit = () => {
const [title, setTitle]=useState("");
const [body, setBody]= useState("");
const [author, setAuthor]= useState("Aman");

// USING ONSUBMIT
//&  Q: why we use e.preventDefault(). or OnSubmit 
//&  A: It is used to prevent the default function which refreshes the  page when clicked on submit.
//&     To prevent page from loading when we click on submit button.
 
const handleSubmit = (e) => {
 e.preventDefault();
//--> Creating a object (blog) to store response 
  const blog = {title, body, author};
//--> Now we can send a post request to a particular endPoint so that we can add our object created by user in our database.
  console.log(blog);
}
  
  return (
    <div className='onSubmitContainer'>
      <form onSubmit={handleSubmit}>

      <h1>Add a New Blog</h1>
      <label>Blog Title:</label>
      <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
      
      <label> Blog Body:</label>
      <textarea type="text" value={body} onChange={(e)=>{setBody(e.target.value)}} />

      <label>Blog Author:</label>
      <select type="text" value={author} onChange={(e)=>{setAuthor(e.target.value)}} >
        <option value="Aman">Aman</option>
        <option value="Surya">Surya</option>
      </select> 
      <button>Add Blog</button>
      
      </form>
    </div>
  )
}

export default onSubmit