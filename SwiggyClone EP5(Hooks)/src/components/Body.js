import React from 'react'
import { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import resList from '../utils/MockData';
// $ 49) Creating a filter for top rated restaurants
//       -> Adding onclick(a JS event) to give functionality
//       -> u can add multiple events too.
//       ~ passing empty list instead of resList
//       

const Body = () =>{
// $ 49.1) Using const we will not be able to change the values which will be displayed in the cards
//       -> so to change and update the values we should use let for these instances

// $ 50) (STATES & HOOKS) When data changes the when we use filter the data should also get changed in UI.
//       -> This is the main problem which react is solving and other framework's are not able to do.
//       -> We have to keep data and UI layer to change together.
//       -> To do this React provides State variable
//       -> For this we will use a react hook known as useState.

// $ 50.1) REACT HOOKS
//   -> are normal JS utility functions
//   -> all these function are stored in nodeModules we import it from there while creating webapp with react 

//   ~ There are two important React Hooks
//   -> There are 2 Most Important hooks which are used almost 99% of times:-
//   -> 50.1.1) useState(); 
//   -> 50.1.2) useEffect();  

// ~50.1.1) useState()
//    a) You have to import it inside react form node modules
//    b) It maintains the state of a component
//    c) import { useState } from 'react';
//    d) local state variable is created inside the scope of component in our case inside Body

// State variable
        const [listOfRestaurants , setListOfRestaurants] = useState([
            {
                data: {
                    id: 9,
                    name: "Mama Mia Pizzeria",
                    cuisines: ["Pizza", "Calzone", "Italian"],
                    avgRating: ["4.4"],
                    costForTwo: 48000,
                    deliveryTime: "38mins",
                    cloudinaryImageId: "30c154acd695b5f026aa01ac1d564e9a",
                },
            },
            {
                data: {
                    id: 10,
                    name: "Smoothie Haven",
                    cuisines: ["Smoothies", "Juices", "Healthy"],
                    avgRating: ["4.7"],
                    costForTwo: 32000,
                    deliveryTime: "30mins",
                    cloudinaryImageId: "30c154acd695b5f026aa01ac1d564e9a",
                },
            },
            {
                data: {
                id: 0,
                name: "KFC",
                cuisines: ["Burger", "Biryani", "American", "Chinese"],
                avgRating: ["3.8"],
                costForTwo: 45000,
                deliveryTime: "30mins",
                cloudinaryImageId: "30c154acd695b5f026aa01ac1d564e9a",
            },
        },
        ]);
// Normal JS variable
    //    let listOfRestaurantsJS = [];

//     e) inside [] data are passed it can be null or a object with a no. of restaurants in it
//  -> f) when we do setListOfRestaurants is used to update the list of restaurants in UI also
//  -> g) Then we can add it in onclick functionality by giving filtered list to it :-setListOfRestaurants(filteredList);
//     h) When we click on Top rated restaurants list of restaurants get's filtered according to the logic inside onclick
//     i) Then it is provided to setListOfRestaurants(filteredList) which will then use useState and update the list of restaurants.
//  ~  j) Whenever we want to change the data going to the UI we will give that logic to setListOfRestaurants() and will then change the original data in listOfRestaurants.
//  ~  k) Whenever a state variable changes react ReRender's the component
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
            {listOfRestaurants && listOfRestaurants.length > 0 ? (
          listOfRestaurants.map((restaurant) => (
            <RestaurantCard resData={restaurant} key={restaurant.data.id} />
          ))
        ) : (
          <p>No restaurants to display</p>
        )}
            </div>
        </div>
    )
   };

export default Body