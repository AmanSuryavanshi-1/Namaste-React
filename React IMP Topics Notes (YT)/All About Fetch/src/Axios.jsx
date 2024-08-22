import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Axios = () => {
  const [AxiosData, setAxiosData] = useState([]);
  const [error, setError] = useState();
  
  // useEffect(()=>{
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //   .then((response) => {
  //     console.log(response.data);
  //     setAxiosData(response.data);
  //   })
  //   .catch((error) => {
  //     setError(error.message);
  //   })
  // },[]);

  // ~ OR
  // ! USING ASYNC AWAIT
  
  const fetchPosts = async() =>{
    try{
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setAxiosData(response.data);
      }
    catch(error){
      setError(error.message);
    }
  }

  useEffect(()=>{
    fetchPosts();
  },[]);

  if(error) return <h1>{error}</h1>
  return (
    <div>
      <h1>Fetching Data Using AXIOS</h1>
      {AxiosData.slice(0,5).map((i)=>{
        return(
          <div key={i.id}>
          <li >{i.title}</li>
          <p className='body'>{i.body}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Axios
