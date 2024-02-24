//  $ 8.3) onSubmit  (NET NINJA)
// -> It allows you to capture form submissions and control how your application reacts to them.
// => The onSubmit event handler in React serves a crucial purpose in dealing with user interaction within forms. 
// => It's used primarily for two key reasons:

// --> 1. Capturing and Handling Form Submissions:

//  -> When a user submits a form (typically by clicking a submit button), the onSubmit event triggers.
//  -> This event provides a way to capture the submission attempt and execute custom logic in response.
//  -> By providing a function as the value for the onSubmit prop on a form element, you define what happens when the form is submitted.

// --> 2. Controlling and Preventing Default Behavior:

//  -> By default, form submissions cause the entire page to reload.
//  -> This behavior might not be desirable in React applications where you want to handle data processing and updates within the single-page application itself.
//  -> Using onSubmit allows you to leverage JavaScript code to:
//  ->      |-> Prevent the default reload behavior: By calling event.preventDefault() inside your handler function, you tell the browser to not reload the page.
//  ->      |-> Process the submitted data: Access the form data through event.target.elements and use it for validation, sending to a server, updating application state, or performing other actions.


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
//&  Q: why we use e.preventDefault().
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