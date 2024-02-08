//! Read Point wise from  40) after EP2 
//! 43- 44) is in notes.md

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
//~ 42) a. Creating a body container to provide dynamically data inside body 
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

//~ 42) b. Updating Body taking data from resList
   const Body = () =>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="ResContainer">
             {/* <div className="resCard"> RESTAURANT CARD WE WILL CREATE A SEPARATE COMPONENT FOR IT BCZ WE WILL BE RE-USING IT AGAIN AND AGAIN </div>  */}
               {/* resName =... cuisine=... are the props which are passed along with it */}
                {/* <ResCard resData="Meghana Foods"/>
                <ResCard resData="Northen Ley" cuisine="Briyani, SouthIndian"/> */}


                {/* 42) c. <ResCard resName="Burger King" cuisine="Burger, Fires"/>
                            Lets not define data like this we will create a json object from where we will take the data in our body container */}
                {/* <ResCard resData={resList}/> */}

                {/* 42) d. data from the resList in the form of props is provided to ResCard component */}
                {/* 42) e. == IMP == from now onward resData is props for ResCard*/}
                {/* 42) f. Fetching data from resList using indexes */}
                {/* <ResCard resData={resList[0]}/>
                <ResCard resData={resList[1]}/>
                <ResCard resData={resList[2]}/>
                <ResCard resData={resList[3]}/>
                <ResCard resData={resList[4]}/>
                <ResCard resData={resList[5]}/>
                <ResCard resData={resList[6]}/> */}


                {/* 45) b. cleaning the code  */}
                {/* Using map to get the item one by one */}
                {/* map will look for restaurant in resList and then it will give restaurant type data to resData */}
               {resList.map((restaurant) => (
                 <ResCard resData={restaurant} key={restaurant.data.id}/>
            ))}
            {/* 45) c. -> You should provide a unique id so that the component can differentiate between the Array of data. It would work without provide unique key or id but its good to provide data objects a unique identity by key. */}
            {/*        -> There is one more advantage of giving key is that if a ResCard with a key is not rendered on the first run then the react component will not re render all the ResCards again it will re render only that card which is not rendered at that time by using that particular key*/}
         
            {/* 45) d. index is the second property of map. It can be used as key. 
                    -> Map is like a loop which runs again and again. index is like i while iterating through a loop.
                    -> (FOR LOOP VS MAP) => A for loop allows you to have more control over the iteration process, while the map() method provides a more concise and functional way to transform elements of an array into a new array.
                    -> map and list comprehensions are faster than loops
                    -> React don't recommend using indexes for keys bcz the order of items may change.
                    -> Using unique keys is the best practice
                    
                    {resList.map((restaurant, index) => (
                 <ResCard resData={restaurant} key={index}/>
                ))}
            */}
            
            </div>
        </div>
    )
   }

// $ 40) HOW TO FETCH DIFFERENT DATA FOR ResCards Dynamically
//&  -- It is done using PROPS
//      -> Props is the shorthand used for properties which you can pass through components 
//      -> used to Dynamically pass data to components
//      -> Props are argument to the functions
//@     -> Props assigned in the body is fetched in ResCard by taking                ==>  const ResCard = (props) =>{  <==
//@     -> Props are used in {} as normal JS arguments and functions like this       ==>  <h3>{props.resName}</h3>     <==
//&     -> When you have to pass some data dynamically to a component you pass it as a props
//^     -> You can pass any number of props.
//^     -> React will wrap everyone of them into an OBJECT and pass it like this     ==> const ResCard = (props) =>{}  <==

//!  Destructuring of PROPS 
//&  Props can be destructured it means instead of passing props to ResCard you can directly pass the arguments like this shown below:- 
//&                                                                                  ==>  const ResCard = ({resName, cuisine}) <== 

//      -> This is known as destructuring on the fly. Destructing is not part of react it is a concept of JS
//   const ResCard = ({resName, cuisine}) =>{
//     console.log(resName, cuisine);
//     return (
//         <div className="ResCard">
//             <img className="ResLogo" src="https://previews.123rf.com/images/miracel123/miracel1231801/miracel123180100795/94312687-food-delivery-logo.jpg" alt=""/>
//             {/* <h3>DamFoods</h3> */}
//             {/* <h3>{props.resName}</h3>   */}
//             <h3>{resName}</h3>
//             {/* we can directly use resName no need to write like props.resName */}
//             <h4>{cuisine}</h4>
//             <h4>* 4.4</h4>
//             <h4>30mins</h4>
//             <h4>400Rs</h4>
//         </div>
//     )
//    }
//^ OR Both are same
// const ResCard = (props) =>{
//     console.log(props);
//     return (
//         <div className="ResCard">
//             <img className="ResLogo" src="https://previews.123rf.com/images/miracel123/miracel1231801/miracel123180100795/94312687-food-delivery-logo.jpg" alt=""/>
//             {/* <h3>DamFoods</h3> */}
//             <h3>{props.resName}</h3>  
//             <h4>{props.cuisine}</h4>
//             <h4>* 4.4</h4>
//             <h4>30mins</h4>
//             <h4>400Rs</h4>
//         </div>
//     )
//    }

console.log("Use Collapse");

// $  41) All This data comes in the form of API in JSON format 
//     -> it stores the data which has to be loaded in site
//     -> The data can vary according to city, area etc.

// $ 42) CONFIG DRIVEN UI - It means UI is driven by Config
//&  Q What is Config?  Ans. Data in the form of API is config
// -> The Carousel which shows offers data can be different in different locations and there can be no data or offers for some locations.
// -> All this data is stored state wise or location wise. So, when there's a change in location the data in the frontend changes.
// -> It is a very imp concept used in almost every website like amazon,uber etc. (Frontend System Design)
// -> FOR EG:- You want to show different offers with different BGcolor in different areas.
 
// -> Then we have to send data in the JSON format as a config 
// -> And this config will help us to drive the ui or change the ui this is known as config driven UI.


// ~ 42) g.  We will take the data in the form of props inside ResCard from body which is taking data from resList (an API,or a JSON object)
// ~ 42) h.  We are taking resData in brackets bcz we are taking an array of a data stored in resList
//       const ResCard = ({resData}) =>{
// console.log(resData);
//     return (
//         <div className="ResCard">
//             <img className="ResLogo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/"+resData.data.cloudinaryImageId} alt=""/>
//             {/* <h3>DamFoods</h3> */}
//             {/* <h3>{props.resName}</h3> */}
//             <h3>{resData.data.name}</h3>
//             <h4>{resData.data.cuisines.join(", ")}</h4>
//             {/* Changing cuisines to coma(,) separated values.
//             from this BurgerBiryaniAmericanChinese to this Burger, Biryani, American, Chinese using array join(", ") in JS */}
//             <h4>{resData.data.avgRating}</h4>
//             <h4>{resData.data.deliveryTime}</h4>
//             <h4>{resData.data.costForTwo/100}</h4> 
//             {/* converting costForTwo in ruppes */}
//         </div>
//     )
//    }

console.log("useCollapse and read 43-44 from notes.md");

//$ 45) a. This is not a good way of writing the code, we have to destructure the resData on the fly
//      cleaning resCard component and optimizing the code

const ResCard = ({resData}) =>{
    // destructuring 
    const {cloudinaryImageId, name, cuisines, avgRating, deliveryTime, costForTwo} = resData?.data;
    //?  -> (?.) this is optional chaining 
    //?  -> The optional chaining (?.) operator accesses an object's property or calls a function. 
    //?  -> If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.
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

