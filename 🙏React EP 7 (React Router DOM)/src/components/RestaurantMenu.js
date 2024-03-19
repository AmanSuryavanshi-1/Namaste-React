// $ 66) Creating restaurantMenu for every Restaurant in body (RestaurantMenu.js 
// -> we will reuse this component for rendering the data for every Restaurant.
import React, { useEffect, useState } from "react";
import { ARRAY_OF_MENU_OF_RESTAURANTS } from "../utils/mockData";
import { getMenuFromResID } from "../utils/helper";
import { useParams } from "react-router-dom";
// export function getMenuFromResID(resId) {
//     return ARRAY_OF_MENU_OF_RESTAURANTS.find(menu => menu.id === resId);
// }

// ~ 66.2) fetching data using useEffect Hook  1h:23min
const RestaurantMenu = () =>{
const [menuOfRestaurants, setMenuOfRestaurants] = useState([]);

const { resId } = useParams();
    const [restaurantMenu, setRestaurantMenu] = useState(null);

    useEffect(() => {
        const menu = getMenuFromResID(resId, ARRAY_OF_MENU_OF_RESTAURANTS);
        setRestaurantMenu(menu);
    }, [resId]);


    if (!restaurantMenu) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h1>{restaurantMenu.name}</h1>
            <h2>Menu</h2>
            <ul>
            {/* {restaurantMenu.menu.map((item, index) => (
                    <li key={index}>
                        {item.name} - ${item.price}
                    </li>
                ))} */}
            </ul>
        </div>
    )
}

export default RestaurantMenu
