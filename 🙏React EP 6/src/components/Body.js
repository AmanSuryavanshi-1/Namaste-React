import React, { useEffect } from 'react'
import { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import resList from '../utils/MockData';
import { ALL_RESTAURANTS_LIST } from '../utils/MockData';;


const Body = () =>{
  const [listOfRestaurants , setListOfRestaurants] = useState([]);

useEffect(()=>{
  setListOfRestaurants(ALL_RESTAURANTS_LIST);
},[]);


return(
        <div className="body">
            <div className="search">Search</div>
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
          {listOfRestaurants.map((restaurant) => (
            <RestaurantCard resData={restaurant} key={restaurant.data.id} />
          ))}
            </div>
        </div>
    )
   };

export default Body

