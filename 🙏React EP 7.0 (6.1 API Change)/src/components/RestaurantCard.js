import React from 'react'
import { CDN_URL } from '../utils/constant';

const RestaurantCard = ({resInfo}) => {
  if (!resInfo || !resInfo.info) {
    return null;
  }

  const {cloudinaryImageId, name, cuisines, avgRatingString, sla, totalRatingsString, costForTwo} = resInfo?.info;
  return (
                <div className="RestaurantCard">
                    <img className="ResLogo" src={CDN_URL+cloudinaryImageId} alt="img"/>
                    <h3>{name}</h3>
                    <h4>Cuisines: {cuisines?.join(", ")}</h4>
                    <h4>Avg Ratings: {avgRatingString}</h4>
                    <h4>Total Rating: {totalRatingsString}</h4>
                    <h4>Cost: {sla?.slaString}</h4>
                    <h4>Delivery Time: {sla?.deliveryTime}</h4>
                    <h4>Distance: {sla?.lastMileTravelString}</h4>
                    


                    <h4>{costForTwo}</h4> 
                    {/* <h4>{deliveryTime} minutes</h4> */}
                </div>
  )
}

export default RestaurantCard