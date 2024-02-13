import React, { useEffect } from 'react'
import { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import resList from '../utils/MockData';
import { ALL_RESTAURANTS_LIST } from '../utils/MockData';;
import Shimmer from './Shimmer/Shimmer';

const Body = () =>{
  const [listOfRestaurants , setListOfRestaurants] = useState([]);

useEffect(()=>{
    setListOfRestaurants(ALL_RESTAURANTS_LIST);
},[]);




// $ 59) ShimmerUI
// -> To handle to load time we can add Loading 
// -> Showing a LOADING and spinner is not a good way to display.
        /* if(listOfRestaurants.length === 0){
          return <h1>LOADING...</h1>
        } */
// => ShimmerUI 
// -> It resembles the page actual UI so that the user understand how quickly the WebApp loads.
// -> Shimmer UI is a technique used in user interface (UI) design to indicate that content is loading.
// -> Instead of displaying a static loading spinner or progress bar, shimmer UI creates a subtle animation effect that gives the impression of content being loaded gradually.
  
// $ 59.1) CONDITIONAL RENDERING 
// -> Rendering on the basis of the condition is known as the condition rendering.
// -> Conditional rendering in React refers to the process of deciding whether to display certain elements or components based on certain conditions. 
// -> It allows you to show different parts of your UI depending on the state of your application.
// -> This allows you to dynamically decide what gets rendered based on the current state or props of your components.
// -> Conditional rendering is typically done using JavaScript's conditional statements like if-else or ternary operators within the JSX (JavaScript XML) syntax.

if(listOfRestaurants.length === 0){
        return <Shimmer/>
      }

//& For testing shimmer add setTimeout to useEffect
        /* useEffect(()=>{
          setTimeout(()=>{
            setListOfRestaurants(ALL_RESTAURANTS_LIST);
          }, 5000);
        },[]); */

// & Conditional rendering EG:-
// -> Returning Shimmer if listOfRestaurants.length === 0 else the return the body data

return listOfRestaurants.length === 0 ? <Shimmer/> : (
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

