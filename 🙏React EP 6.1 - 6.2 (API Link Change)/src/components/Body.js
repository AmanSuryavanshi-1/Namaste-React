import React, { useEffect } from 'react'
import { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer/Shimmer';

const Body = () =>{
  const [listOfRestaurants , setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(()=>{
    fetchData();
  },[]);
  
// $ 38) Updating the api key
// -> 38.1) Changing the API key & destructing the data which we are getting from api link
// -> 38.2) Check Notion for details about destructuring  
// -> 38.3) Making Changes in RestaurantCard.js according to the new API   
// -> 38.4) Changing the CDN_URL from old to new url


  const fetchData = async () => {
    try {

    const data = await fetch('https://corsproxy.io/?' + encodeURIComponent('https://www.swiggy.com/mapi/homepage/getCards?lat=28.7040592&lng=77.10249019999999'));
    // const data = "https://www.swiggy.com/mapi/homepage/getCards?lat=28.7040592&lng=77.10249019999999");
    const json = await data.json();
    // console.log(json.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants);  
    const response = json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
    // setListOfRestaurants(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    // setFilteredRestaurants(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    if (Array.isArray(response)) {
      setListOfRestaurants(response);
      setFilteredRestaurants(response);
    } else {
      console.error("Invalid data structure for restaurants", restaurants);
    }
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
            <RestaurantCard resInfo={res} key={res.info.id} />
          ))}
         </div>
        </div>
    )
   };

export default Body

