import React from 'react'
import { CDN_URL } from '../utils/constant';

const RestaurantCard = (props) => {
  const {resData} = props;
  // $ 25) Notion Notes
  if (!resData || !resData.data) {
    return null;
  }
    
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
}

export default RestaurantCard