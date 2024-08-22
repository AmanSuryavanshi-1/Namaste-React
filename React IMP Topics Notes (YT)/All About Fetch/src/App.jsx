import React, { useEffect, useState } from 'react'
import './App.css'

//! 1) Using Fetch
//! 2) Using AXIOS
const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const fetchPosts = async() =>{
    setLoading(true); // initially loading set to true

    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      // console.log(data);
      setPosts(data);
    }catch(error){
      setError(error);
    }finally{
    setLoading(false); // aftermath whatever happens with this try catch loading will be set to false 
  }
  }

  useEffect(()=>{
    fetchPosts();
  },[])

  if(loading) {
  return <h1>LOADING.......</h1>
  }
  if(error){
    return <h1>ERROR:SOMETHING WENT WRONG! PLEASE TRY AGAIN</h1>
  } 

  return (
    <div>
      <h1>ALL ABOUT FETCH IN REACT</h1>
      {posts.slice(0,10).map((i)=> {  // using slice to get only 10 posts
        return(
        <div key={i.id}>
        <li className='title'>{i.title}</li>
        <p className='body'>{i.body}</p>
        </div> 
        )
      })}
    </div>
  )
}

export default App
