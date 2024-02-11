// Aborted

import { useEffect,useState} from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:3000/api/restaurants?search='+ search,{
          signal: AbortController.signal
        });
        console.log(response.data);
        setRestaurants(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
        setLoading(false);
      }
    };
    fetchRestaurants();
  }, [search]);



if(loading){
  return <h1>
    Loading...
  </h1>
}

  return (
    <>
    <h1>AfterEffects of CORS error in Swiggy clone</h1>
    <h3><input type="text" placeholder='search' /></h3>
    <h2>Number of products are:{restaurants.length}</h2>
    </>
  )
}

export default App



