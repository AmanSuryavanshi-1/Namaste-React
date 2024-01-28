import React from 'react'
import RestaurantCard from './RestaurantCard';
import resList from '../utils/MockData';

const Body = () =>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="RestaurantContainer">
             
               {resList.map((restaurant) => (
                 <RestaurantCard resData={restaurant} key={restaurant.data.id}/>
            ))}
            </div>
        </div>
    )
   };

export default Body