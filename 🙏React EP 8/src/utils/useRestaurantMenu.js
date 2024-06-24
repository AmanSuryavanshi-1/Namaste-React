// Custom hook for fetching data
import React, { useState } from 'react'
import { useEffect } from 'react';
import { resAPI_URL } from './constant';

const useRestaurantMenu = (resId) => {
    const [res, setRes] = useState(null);
    const [recommended, setRecommended] = useState([]);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch (resAPI_URL + resId); 
        const json = await data.json();
        
        // console.log(json);
        const restaurantData = json?.data?.cards[2]?.card?.card?.info;  
        setRes(restaurantData);

        const RecommendedData = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
        // console.log(RecommendedData);
        setRecommended(RecommendedData);
    };
  return [res, recommended];

}

export default useRestaurantMenu
