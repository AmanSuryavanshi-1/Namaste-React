//! 18 - 22) in notion notes

import React from 'react'
import ReactDOM from "react-dom/client"
import "./App.css"

/* Header
   --logo
   --Nav Items
Body 
   --Search
   --restaurantContainer
   --restaurantCard
Footer
   --Copyright
   --Links
   --Address
   --Contact */

   const HeaderComponent = () =>{
    return (
        <div className='Navbar'>
            <div className="logoContainer">
                <img className="logo" src="https://previews.123rf.com/images/miracel123/miracel1231801/miracel123180100795/94312687-food-delivery-logo.jpg" alt="img"/>
            </div>
            <div className="navItems">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                    <li>Favorites</li>
                </ul>
            </div>
        </div>
    )
   }
const resList = [
    {
        type: "restaurant",
        data: {
            id: 0,
            name: "KFC",
            cuisines: ["Burger", "Biryani", "American", "Chinese"],
            avgRating: ["4.2"],
            costForTwo: 45000,
            deliveryTime: "30mins",
            cloudinaryImageId: "30c154acd695b5f026aa01ac1d564e9a",
        },
    },
    {
        type: "restaurant",
        data: {
            id: 1,
            name: "Pizza Hut",
            cuisines: ["Pizza", "Pasta", "Italian"],
            avgRating: ["4.5"],
            costForTwo: 60000,
            deliveryTime: "40mins",
            cloudinaryImageId: "30c154acd695b5f026aa01ac1d564e9a",
        },
    },
    {
        type: "restaurant",
        data: {
            id: 2,
            name: "McDonald's",
            cuisines: ["Burger", "Fries", "Fast Food"],
            avgRating: ["3.8"],
            costForTwo: 35000,
            deliveryTime: "25mins",
            cloudinaryImageId: "30c154acd695b5f026aa01ac1d564e9a",
        },
    },
    {
        type: "restaurant",
        data: {
            id: 3,
            name: "Sushi Express",
            cuisines: ["Sushi", "Japanese"],
            avgRating: ["4.7"],
            costForTwo: 80000,
            deliveryTime: "35mins",
            cloudinaryImageId: "30c154acd695b5f026aa01ac1d564e9a",
        },
    },
    {
        type: "restaurant",
        data: {
            id: 4,
            name: "Taco Bell",
            cuisines: ["Tacos", "Mexican"],
            avgRating: ["4.0"],
            costForTwo: 50000,
            deliveryTime: "32mins",
            cloudinaryImageId: "30c154acd695b5f026aa01ac1d564e9a",
        },
    },
    {
        type: "restaurant",
        data: {
            id: 6,
            name: "Taco Bell",
            cuisines: ["Tacos", "Burritos", "Mexican"],
            avgRating: ["4.0"],
            costForTwo: 28000,
            deliveryTime: "28mins",
            cloudinaryImageId: "30c154acd695b5f026aa01ac1d564e9a",
        },
    },
    {
        type: "restaurant",
        data: {
            id: 7,
            name: "Sushi Palace",
            cuisines: ["Sushi", "Japanese"],
            avgRating: ["4.8"],
            costForTwo: 60000,
            deliveryTime: "45mins",
            cloudinaryImageId: "30c154acd695b5f026aa01ac1d564e9a",
        },
    },
    {
        type: "restaurant",
        data: {
            id: 8,
            name: "Indian Spice",
            cuisines: ["Indian", "Curry", "Naan"],
            avgRating: ["4.3"],
            costForTwo: 38000,
            deliveryTime: "32mins",
            cloudinaryImageId: "30c154acd695b5f026aa01ac1d564e9a",
        },
    },
    {
        type: "restaurant",
        data: {
            id: 9,
            name: "Mama Mia Pizzeria",
            cuisines: ["Pizza", "Calzone", "Italian"],
            avgRating: ["4.4"],
            costForTwo: 48000,
            deliveryTime: "38mins",
            cloudinaryImageId: "30c154acd695b5f026aa01ac1d564e9a",
        },
    },
    {
        type: "restaurant",
        data: {
            id: 10,
            name: "Smoothie Haven",
            cuisines: ["Smoothies", "Juices", "Healthy"],
            avgRating: ["4.7"],
            costForTwo: 32000,
            deliveryTime: "30mins",
            cloudinaryImageId: "30c154acd695b5f026aa01ac1d564e9a",
        },
    },
];

//~ Updating Body taking data from resList
   const Body = () =>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="ResContainer">
                {/* <ResCard resData="Meghana Foods"/>
                <ResCard resData="Northen Ley" cuisine="Briyani, SouthIndian"/> */}


                {/* <ResCard resData={resList}/> */}

                {/* <ResCard resData={resList[0]}/>
                <ResCard resData={resList[1]}/>
                <ResCard resData={resList[2]}/>
                <ResCard resData={resList[3]}/> */}

                {/* Using map to get the item one by one */}
                {/* map will look for restaurant in resList and then it will give restaurant type data to resData */}
               {resList.map((restaurant) => (
                 <ResCard resData={restaurant} key={restaurant.data.id}/>
            ))}
            
            </div>
        </div>
    )
   }


//$ This is not a good way of writing the code, we have to destructure the resData on the fly
const ResCard = ({resData}) =>{
    // destructuring 
    const {cloudinaryImageId, name, cuisines, avgRating, deliveryTime, costForTwo} = resData?.data;
     return (
            <div className="ResCard">
                <img className="ResLogo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/"+cloudinaryImageId} alt="img"/>
                <h3>{name}</h3>
                {/* now no need to write like this resData.data.name  */}
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating}</h4>
                <h4>{deliveryTime}</h4>
                <h4>{costForTwo / 100} FOR TWO</h4> 
                <h4>{deliveryTime} minutes</h4>
            </div>
        )
       }

   const AppLayout = () => {
    return (
    <div className="app">
        <HeaderComponent/>
        <Body/>
    </div>
        )
   }

   const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render(<AppLayout/>);

