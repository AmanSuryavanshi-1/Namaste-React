import React from 'react'
import RestaurantCard from './RestaurantCard';
import resList from '../utils/MockData';

const Body = () =>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="ResContainer">
             
               {resList.map((resList) => (
                 <RestaurantCard resData={resList} key={resList.data.id}/>
            ))}
            </div>
        </div>
    )
   };

export default Body