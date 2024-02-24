// $ 13) useEffect
import React,{useEffect, useState} from 'react'


const UseEffect = () => {
  const [blogs, setBlogs] = useState([
    { title: 'React Tutorial', body: 'Learn React from scratch.', author: 'John Doe', id: 1 },
    { title: 'JavaScript Best Practices', body: 'Tips and tricks for writing clean JavaScript code.', author: 'Jane Smith', id: 2 },
    { title: 'CSS Styling Techniques', body: 'Advanced CSS styling methods.', author: 'Alex Johnson', id: 3 },
    { title: 'Node.js Basics', body: 'Introduction to Node.js and server-side JavaScript.', author: 'Emily Brown', id: 4 },
    { title: 'Python Fundamentals', body: 'Learn Python programming language basics.', author: 'Michael Wilson', id: 5 }
  ]);
  
  useEffect(()=>{
  
  })
  return (
    <div className="home">
      <h1>Blogs</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default UseEffect