import React, { useEffect } from 'react'
import { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import resList from '../utils/MockData';
import { ALL_RESTAURANTS_LIST } from '../utils/MockData';;



const Body = () =>{

        const [listOfRestaurants , setListOfRestaurants] = useState([]);

// ! 51) REACT ALGORITHM(Notes.jsx)

console.log("EP6");

// !EP6
// $ 53) - 54) in Notes.jsx
// $ 55) HOW TO FETCH THE DATA AFTER GETTING IT FROM AN API USING UseEffect

useEffect(()=>{
  setListOfRestaurants(ALL_RESTAURANTS_LIST);
},[]);

// -> we can fetch data by using fetch() it is provided by JS to fetch the data from external sources
// -> using live Swiggy data
// -> This fetch will return a promise
// -> Once the promise get's resolved we get the data.
// -> Then we will convert the data into json.

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
// => HOW TO HANDLE PROMISE?
// => 1st-> by .then and catch
// => 2nd-> using async await (mostly preferred)

// $ 56) CORS in notes.md
// $ 57) Getting the data from live API Link(Change link? EP6 44:55)
// -> Rendering data inside body with the live api link instead of using hardcoded Data.
// -> using setListOfRestaurants inside fetchData
// -> Then we will update the new data which is coming in const json to setListOfRestaurants();

return(
        <div className="body">
            <div className="search">Search</div>
            <div className='filter'>
                <button className="filter-btn"
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                      (res) => res.data.avgRating > 4
                    );
                    //~ 50.1.1)  useState()
                    // ->    l) WE ARE MAKING CHANGES IN listOfRestaurants AND STORING IT IN filteredList.
                    // ->    m) THEN UPDATING THE setListOfRestaurants BY PROVIDING IT filteredList
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

