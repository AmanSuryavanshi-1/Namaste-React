import React, { useEffect } from 'react'
import { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { ALL_RESTAURANTS_LIST } from '../utils/mockData';;
import Shimmer from './Shimmer/Shimmer';

const Body = () =>{
  const [listOfRestaurants , setListOfRestaurants] = useState([]);  
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

useEffect(()=>{
    setListOfRestaurants(ALL_RESTAURANTS_LIST);
    setFilteredRestaurants(ALL_RESTAURANTS_LIST);

    /* const fetchData = async () =>{
  // setFilteredRestaurants(resList);
  const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImN1c19QVUlsbzBaQVE5QTBDeSIsIm1vZXNpZlByaWNpbmdJZCI6InByaWNlXzFNUXF5dkJESWxQbVVQcE1SWUVWdnlLZSIsImlhdCI6MTcwNjg3MDQxMH0.0SGkS_b-nPjyzSqqmV0JVHxSZoZJsh9kqhNEQkjNVaM";
  const data = await fetch(
    `https://api.techspecs.io?api_key=${apiKey}`
  );
  const json = await data.json();
  console.log(json);
  // setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
} */

},[]);

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
                 return res.data.name.toLowerCase().includes(searchText.toLowerCase())
                // return res.data.name.toLowerCase().includes(searchText.toLowerCase()) || res.cuisines.name.toLowerCase().includes(searchText.toLowerCase())
               })


              //  setListOfRestaurants(filteredRestaurants);
              setFilteredRestaurants(filteredRestaurants);
             }}>Search

              </button>

            </div>
            </div>

            <div className='filter'>
                <button className="filter-btn"
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                      (res) => res.data.avgRating > 4
                    );
                    setFilteredRestaurants(filteredList);
                  }}
                >
                    Top Rated Restaurants
                    </button>
            </div>
            <div className="RestaurantContainer">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard resData={restaurant} key={restaurant.data.id} />
          ))}
            </div>
        </div>
    )
   };

export default Body

