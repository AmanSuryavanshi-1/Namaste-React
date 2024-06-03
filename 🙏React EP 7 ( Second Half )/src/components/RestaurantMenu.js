// $ 68) Creating restaurantMenu for every Restaurant in body (RestaurantMenu.js 
// -> we will reuse this component for rendering the data for every Restaurant.
import React, { useEffect, useState } from "react";

import Shimmer  from "./Shimmer/Shimmer"
import { CDN_URL } from "../utils/constant";
import { corsSH_Header } from "../utils/constant"
import { menuAPI_URL } from "../utils/constant"
import { useParams } from "react-router-dom";

const RestaurantMenu = () =>{
const [res, setRes] = useState(null);
const [recommended, setRecommended] = useState(null);

const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);
// => 68.1) fetching data using useEffect Hook
//          -> Empty Dependency array which means it will recalled once after initial render 
// => 68.2) For loading the fetched data in json format in restaurantMenu we will need a state variable.
// => 68.3) API call will be made & then that data will be stored in state variable and Whenever my state variable updates it will automatically update the UI.
   
    const fetchMenu = async () => {
       // Now we have to pass this resId to my URL
        const data = await fetch (menuAPI_URL + resId,
        corsSH_Header); // Taking this headers from constant.js
        
        const json = await data.json();
        console.log(json);
        // console.log(json?.data?.cards[2]?.card?.card?.info?.name);
        const restaurantData = json?.data?.cards[2]?.card?.card?.info;  
// => 68.4) As soon as i made the data call i will fill the res with this json
        setRes(restaurantData);

// => 68.5) Now for loading menuItems we need the data to be stored in new useState variable & a constant variable for destructuring the location
        const RecommendedData = json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
        console.log(RecommendedData);
        setRecommended(RecommendedData);
// => 68.6) Putting All my API's in constant.js
//          -> Always you should keep the api keys separately defined in different file where it is not accessible publicly

// => 68.7) Every Restaurant has different hosted API link (in Notion EP7 (Second Half))

    };

    return res===null ? (<Shimmer/>) : (
        <div>
            <div className="mainResInfo">
                <h1>Menu</h1>
                <h3>{res.name}</h3>
                <h4>Ratings:- {res.avgRatingString} <span>{res.totalRatingsString}</span> </h4>
                <h4>Cuisines:- {res.cuisines.join(", ")}</h4>
                <h4>Cost:- {res.costForTwoMessage}</h4>
                <h4>{res.feeDetails.totalFee/100} Delivery fee will apply</h4>
                <h4>{res.sla.lastMileTravelString}</h4>
                <h4>{res.sla.slaString}</h4>
                <h4>{res.locality} {res.areaName} {res.city}</h4>
            </div>

            <div className="topPicks">
                <h2>Top Picks</h2>
                {/* <div className="TopPicksCarousel">
                    {res.topPicks.map((item, index) => (
                        <div key={index}>
                            <img src={item.imageUrl} alt={item.name} />
                            <h4>{item.name}</h4>
                            <h4>${item.price}</h4>
                        </div>
                    ))}
                </div> */}

            </div>

            <div className="recommended">
                <h1>{recommended.title}</h1>
                <ul>
                {recommended.itemCards.map((item, index) => (
                        <li key={index}>
                            <div className="main">
                            <img className='ResLogo' src={CDN_URL+ item.card.info.imageId} alt="ResLogo" />
                           <h3>{item.card.info.name} - {(item.card.info.defaultPrice)/100} </h3>
                           <p>{item.card.info.description}</p>
                           </div>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default RestaurantMenu
