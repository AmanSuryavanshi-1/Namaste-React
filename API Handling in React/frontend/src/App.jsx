import { useEffect,useState} from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const [restaurants, setRestaurants] = useState([]);
  // -> installing axios using npm i axios we can use async await too
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/restaurants');
        console.log(response.data);
        setRestaurants(response.data);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    };

    fetchRestaurants();
  }, []);
  return (
    <>
    <h1>AfterEffects of CORS error in Swiggy clone</h1>
    <h2>Number of products are:{restaurants.length}</h2>
    </>
  )
}

export default App
