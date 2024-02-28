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
                      (res) => res.data.avgRating > 4
                    );
                    setListOfRestaurants(filteredList);
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

