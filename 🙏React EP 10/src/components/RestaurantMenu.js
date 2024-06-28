// $ 68) Creating restaurantMenu for every Restaurant in body (RestaurantMenu.js 
// -> we will reuse this component for rendering the data for every Restaurant.
import React from "react";

import Shimmer  from "./Shimmer/Shimmer"
import { CDN_URL } from "../utils/constant";
import { resAPI_URL } from "../utils/constant"
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () =>{

const {resId} = useParams();
const [res,recommended] = useRestaurantMenu(resId);

    return res===null ? (<Shimmer/>) : (
        <div>
            <div className="mainResInfo">
                <h1>Menu</h1>
                <h3>{res?.name}</h3>
                <h4>Ratings:- {res?.avgRatingString} <span>{res?.totalRatingsString}</span> </h4>
                <h4>Cuisines:- {res?.cuisines?.join(", ")}</h4>
                <h4>Cost:- {res?.costForTwoMessage}</h4>
                <h4>{res?.feeDetails?.totalFee/100} Delivery fee will apply</h4>
                <h4>{res?.sla?.lastMileTravelString}</h4>
                <h4>{res?.sla?.slaString}</h4>
                <h4>{res?.locality} {res?.areaName} {res?.city}</h4>
            </div>

            <div className="topPicks">
                <h2>Top Picks</h2>
    
            </div>

            <div className="recommended">
                <h1>{recommended?.title}</h1>
                <ul>
                {recommended?.itemCards?.map((item, index) => (
                        <li key={index}>
                            <div className="main">
                            <img className='ResLogo' src={CDN_URL+ item?.card?.info?.imageId} alt="ResLogo" />
                           <h3>{item?.card?.info?.name} - {(item?.card?.info?.defaultPrice)/100} </h3>
                           <p>{item?.card?.info?.description}</p>
                           </div>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default RestaurantMenu
