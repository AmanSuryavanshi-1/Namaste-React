import React, { useEffect } from 'react'
import { useState } from 'react';
import RestaurantCard from './RestaurantCard';
// import { ALL_RESTAURANTS_LIST } from '../utils/mockData';
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
// $ EP 6.1) Updating the api key

// -> 6.1.2) Changing the API key & destructing the data which we are getting from api link
// -> 6.1.3) Check Notion for details about destructuring  
// -> 6.1.4) Changing the CDN_URL from old to new url
// -> 6.1.5) Check Notion for fixing CORS issue
// -> 6.1.6) Check Notion for details about get and post request
// ! 6.2) Changed the api url bcz cors not working properly when console is closed
// !      using foodfire api link
  const fetchData = async () => {
    try {
    const data = await fetch( menuAPI_URL);
    const json = await data.json();
    // console.log(json.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants);  
    // const responseRes = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

// ! 6.3) fetching only valid restaurants & increasing the number of restaurants listed on our site
    const checkJsonData = (json) => {
      for (let i = 0; i < json?.data?.cards.length; i++) {
        // ^ initialize checkData for Swiggy Restaurant data
        let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        // -> checkData will contain all the cards all the restaurants available in different json?.data?.cards[i]
        // -> it will take ll the restaurants avaiable in the different cards and will provide them in checkData
        // -> By this we can increase the number of restaurants listed 
        // ^ if checkData is not undefined then return it
        if (checkData !== undefined) {
          return checkData;
        }
      }
    }

    // call the checkJsonData() function which return Swiggy Restaurant data
    const responseRes= checkJsonData(json);

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

