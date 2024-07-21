import React, { useEffect, useState } from 'react'
import { resAPI_URL } from "../utils/constant"
const useRestaurantMenu = (resId) => {
    const [res, setRes] = useState(null);
    const [menuItems, setMenuItems] = useState(null);
    const [categories, setCategories] = useState(null);
    
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch (resAPI_URL+ resId); 
        const response = await data.json();
        console.log(response);

        const restaurantData = response?.data?.cards[2]?.card?.card?.info;  
        setRes(restaurantData);

        // const restaurantData =
        //   json?.data?.cards
        //     ?.map((x) => x.card)
        //     ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
        //     ?.info || null;
        // setRes(restaurantData);
        // const categories = response?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        // console.log(categories);

        const menuItemsData = response?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
        setMenuItems(menuItemsData);

        const categoriesData = response?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        setCategories(categoriesData);
        console.log(categoriesData);
  };
  return [res,menuItems,categories]
}

export default useRestaurantMenu