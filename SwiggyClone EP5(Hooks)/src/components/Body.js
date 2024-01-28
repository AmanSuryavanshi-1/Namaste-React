import React from 'react'
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
    let listOfRestaurants = [
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
    ];

    // const filterTopRatedRestaurants = () => {
    //     listOfRestaurants = listOfRestaurants.filter(
    //       (res) => res.data.avgRating > 4
    //     );
    //     console.log(listOfRestaurants);
    //   };
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className='filter'>

                <button className="filter-btn"
                onClick={() => {
                    listOfRestaurants = listOfRestaurants.filter(
                      (res) => res.data.avgRating > 4
                    );
                    console.log(listOfRestaurants);
                  }}
                >
                    Top Rated Restaurants
                    </button>
            </div>
            <div className="RestaurantContainer">
               {listOfRestaurants.map((restaurant) => (
                 <RestaurantCard resData={restaurant} key={restaurant.data.id}/>
            ))}
            </div>
        </div>
    )
   };

export default Body