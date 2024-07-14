import React, { useState } from 'react'
import "./onSubmit.css"

const onSubmit = () => {
const [title, setTitle]=useState("");
const [body, setBody]= useState("");
const [author, setAuthor]= useState("Aman");

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