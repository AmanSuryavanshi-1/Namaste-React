import React, { useEffect } from 'react'
import { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { ALL_RESTAURANTS_LIST } from '../utils/mockData';;
import Shimmer from './Shimmer/Shimmer';

const Body = () =>{
  const [listOfRestaurants , setListOfRestaurants] = useState([]);

// $ 61) Adding Search functionality
// --> 61.5) creating a new state variable with initial value set to empty string ("") and binding it to the input box

  const [searchText, setSearchText] = useState("");
// ~ Whenever state variables update, react triggers a reconciliation cycle or rerenders the whole component

// --> 61.11) a. For Fixing this bug we need to add a new state variable with empty initial value
const [filteredRestaurants, setFilteredRestaurants] = useState([]);

useEffect(()=>{
    setListOfRestaurants(ALL_RESTAURANTS_LIST);
    setFilteredRestaurants(ALL_RESTAURANTS_LIST);

    // --> 61.13) Whenever we have to filter restaurants we are using setListOfRestaurants (containing copy of all the restaurant) as reference 
    // -->        and updating it on setFilteredRestaurants (containing copy of all the filtered restaurant)
    // -->        & Then for displaying filtered restaurant to the UI we are using setFilteredRestaurants.
    // ->         Whenever we are searching for a specific term only the filteredRestaurant will get updated
    // ->         & next time when we will search it will get filtered from the ListOfRestaurants
},[]);
return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">

          <div className="search-filter">
            <div className="search">


              <input type="text" className='search-box' value = {searchText}
               onChange={(e)=>{
                // --> 61.6) Value of searchText will keep getting changed when the user searches for something
                // --> So we want to update the searchText whenever the user changes the text
                // --> We can do this using onchange
                // --> now as soon as the input value changes the value in searchText also gets updated

                // & 61.7) How to make the body components rerender when the searchText changes
                // --> a) We have to bind the searchText with useState(""). we have done it using a empty text("").                
                // --> b) Now as soon as my input changes i want to update the searchText
                // --> c) Whenever the user make changes in the searchText react will reRender the body component

                setSearchText(e.target.value);
              }}/>


              <button className='search-btn' 

              onClick={()=>{
                // -> 61.1) Filter the restaurant cards and update the UI
                // -> 61.2) We have to take the value(Which user will provide in input tag) of this input box 
                // -> 61.3) Then we have to bind this value to local state variable      
                // -> 61.4) So we will create one more state variable                    ==> const [searchText, setSearchText] = useState(""); <==
  
                const filteredRestaurants = listOfRestaurants.filter((res)=>{
                  // --> 61.8) whenever the state variable changes react will reRender the body component but this time it will reRender it with filteredRestaurants data.
                  // --> When the user search for something say coffee, then it will figure out all the restaurants with coffee in it
                  // --> We have to convert user input and the restaurant name's coming from api to same case. 
                  //     We can do this by adding toLowerCase() and to upperCase() in both searchText and restaurant's name coming from API.
                
                 return res.data.name.toLowerCase().includes(searchText.toLowerCase())
                //  return res.data.name.toLowerCase().includes(searchText.toLowerCase()) || res.cuisines.name.toLowerCase().includes(searchText.toLowerCase())

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
          {/* // --> 61.13) So now after making it to filteredRestaurant.map initially my page is empty bcz filteredRestaurant is empty
              // -->        we have to make 2 copy(setListOfRestaurant & setFilteredRestaurant) of data coming from API */}
            </div>
        </div>
    )
   };

export default Body

