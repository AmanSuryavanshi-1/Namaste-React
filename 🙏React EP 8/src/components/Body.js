import React, { useEffect } from 'react'
import { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer/Shimmer';
import { menuAPI_URL } from "../utils/constant"
import { Link } from 'react-router-dom';

const Body = () =>{
  const [listOfRestaurants , setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async () => {
    try {
    const data = await fetch( menuAPI_URL);
    const json = await data.json();

    const checkJsonData = (json) => {
      for (let i = 0; i < json?.data?.cards.length; i++) {
        let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        if (checkData !== undefined) {
          return checkData;
        }
      }
    }
    const responseRes= checkJsonData(json);
    console.log(responseRes);

      setListOfRestaurants(responseRes);
      setFilteredRestaurants(responseRes);

  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">

          <div className="search-filter">
            <div className="search">
              <input type="text" className='search-box' value = {searchText}
               onChange={(e)=>{
                setSearchText(e.target.value);
              }}/>

              <button className='search-btn' 
              onClick={()=>{
                const filteredRestaurants = listOfRestaurants.filter((res)=>{
                 return res.info.name.toLowerCase().includes(searchText.toLowerCase())
               })
              
               setFilteredRestaurants(filteredRestaurants); 
             }}>Search
              </button>

            </div>
            </div>

            
            <div className='filter'>
                <button className="filter-btn"
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                      (res) => res.info.avgRating > 4.5
                    );
                    setListOfRestaurants(filteredList);
                  }}
                >
                    Top Rated Restaurants
                    </button>
            </div>
            <div className="RestaurantContainer">
          {filteredRestaurants.map((res) => (
            <Link 
              key={res.info.id} 
              to={"/restaurants/"+ res.info.id} 
            > 
                <RestaurantCard resInfo={res} />
            </Link>
          ))}
         </div>
        </div>
    )
   };

export default Body

