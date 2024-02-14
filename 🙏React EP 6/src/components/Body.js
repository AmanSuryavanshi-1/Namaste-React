import React, { useEffect } from 'react'
import { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { ALL_RESTAURANTS_LIST } from '../utils/mockData';;
import Shimmer from './Shimmer/Shimmer';

const Body = () =>{
  const [listOfRestaurants , setListOfRestaurants] = useState([]);

// $ 61) Adding Search functionality
// --> 61.5) creating a new state variable and binding it to the input box

  const [searchText, setSearchText] = useState("");
// ~ Whenever state variables update, react triggers a reconciliation cycle or rerenders the whole component

// --> 61.10) a. For Fixing this bug we need to add a new state variable with empty initial value
const [filteredRestaurants, setFilteredRestaurants] = useState([]);

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

          <div className="search-filter">
            <div className="search">


              <input type="text" className='search-box' value = {searchText}
               onChange={(e)=>{
                // --> 61.6) Value of searchText will keep getting changed when the user searches for something
                // --> So we want to update the searchText whenever the user changes the text
                // --> We can do this using onchange
                // --> now as soon as the searchText changes

                // & 61.7) How to make the body components rerender when the searchText changes
                // --> a) We have to bind the searchText with useState(""). we have done it using a empty text("").                
                // --> b) Now as soon as my input changes i want to update the searchText
                // --> c) Whenever the user make changes in the searchText react will reRender the body component

                setSearchText(e.target.value);
              }}/>


              <button className='search-btn' 

              onClick={()=>{
                // -> 61.1) Filter the restaurant cards and update the UI
                // -> 61.2) We have to take the value(Which user will provide inn input tag) of this input box 
                // -> 61.3) Then we have to bind this value to local state variable
                // -> 61.4) So we will create one more state variable
  
                const filteredRestaurants = listOfRestaurants.filter((res)=>{
                  // --> 61.8) whenever the state variable changes react will reRender the body component but this time it will reRender it with filteredRestaurants data.
                  // --> When the user search for something say coffee, then it will figure out all the restaurants with coffee in it
                  // --> We have to convert user input and the restaurant name's coming from api to same case. 
                  //     We can do this by adding toLowerCase() and to upperCase() in both searchText and restaurant's name coming from API.
                
                 return res.data.name.toLowerCase().includes(searchText.toLowerCase())
               })


              //  setListOfRestaurants(filteredRestaurants);
              // => 61.9) Once we search for something say coffee, then say there will be only two coffee and then the second time we search for something else it will search from that two coffee only.
              // bcz we have updated the list of restaurant using setListOfRestaurants(filteredRestaurants). That is why it is searching second time from that 2 coffee only
              // In the list of restaurant only 2 restaurants are left. So, the filter will work on them only.
              // &  61.10) How to solve this bug? 
              // Now instead of using setListOfRestaurants(filteredRestaurants), we can just are new state variable setFilteredRestaurants
              setFilteredRestaurants(filteredRestaurants);
              // now we are rendering the filteredRestaurants not the original list of restaurant
              // We will from now onwards  render the filteredRestaurants not the original listOfRestaurant.
              // Changing the map from
                  // {listOfRestaurants.map((restaurant) => (
                  //   <RestaurantCard resData={restaurant} key={restaurant.data.id} />
                  // ))}
              //^ to
                  // {filteredRestaurants.map((restaurant) => (
                  //   <RestaurantCard resData={restaurant} key={restaurant.data.id} />
                  // ))}
              //& So, basically we have stored the copy of all the restaurants in listOfRestaurants
              //& And we are Storing the filtered restaurants in filteredRestaurants 
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

