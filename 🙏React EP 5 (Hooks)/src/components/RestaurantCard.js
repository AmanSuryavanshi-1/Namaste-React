import React from 'react'
import { CDN_URL } from '../utils/constant';

const RestaurantCard = (props) => {
  const {resData} = props;
  // $ 48.1) Getting a empty card with null values
  if (!resData || !resData.data) {
    return null;
  }
  // -> This if will not show the card if the props of a particular card is undefined and print other Card by taking details from reslist in the form of props
  // -> We will just skip the card which is giving undefined data 
    
  const {cloudinaryImageId, name, cuisines, avgRating, deliveryTime, costForTwo} = resData?.data;
  return (
                <div className="RestaurantCard">
                    <img className="ResLogo" src={CDN_URL+cloudinaryImageId} alt="img"/>
                    <h3>{name}</h3>
                    <h4>{cuisines?.join(", ")}</h4>
                    <h4>{avgRating}</h4>
                    <h4>{deliveryTime}</h4>
                    <h4>{costForTwo / 100} FOR TWO</h4> 
                    <h4>{deliveryTime} minutes</h4>
                </div>
  )
  //$ 48) TypeError: Cannot read properties of undefined (reading 'cloudinaryImageId')," indicates that the resData or resData.data is undefined at the time you're trying to destructure it
  //      -> To avoid this error, you should ensure that resData and resData.data are always defined before trying to destructure them. You can use optional chaining (?.) to handle this situation gracefully.
  //      -> resData?.data || {}; instead of undefined return an empty array
  //      -> <h4>{cuisines?.join(", ")}</h4> 

}

export default RestaurantCard