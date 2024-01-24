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
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
   }
//~ 42) a. Creating a body container to provide dynamically data inside body 
const resObj ={
    type:"restaurant",
    data: {
        name:"KFC",
        cuisines: ["Burger","Biryani", "American", "Chinese"],
        avgRating: ["4"],
        costForTwo:40000, // IN paise
        deliveryTime: "36mins"

    },
   };
//~ 42) b. Updating Body taking data from resObj
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
                <ResCard resData={resObj}/>
                {/* 42) d. data from the resObj in the form of props is provided to ResCard component */}
                {/* 43) e. == IMP == from now onward resData is props for ResCard*/}
                
            </div>
        </div>
    )
   }
//^ 40) HOW TO FETCH DIFFERENT DATA FOR ResCards Dynamically
//&  -- It is done using PROPS
//      Props is the shortform for properties which you can pass through components 
//      used to Dynamically pass data to components
//      Props are argument to the functions
//      Props assigned in the body is fetched in ResCard by taking ==> const ResCard = (props) =>{  <==
//      Props are used in {} as normal JS arguments and functions like this ==> <h3>{props.resName}</h3> <==
//&     When you have to pass some data dynamically to a component you pass it as a props
//      You can pass any number of props. React will wrap everyone of them into an OBJECT and pass it in const ResCard = (props) =>{}

//&  Props can be destructured it means instead of passing props to ResCard you can directly pass the arguments like this const ==> ResCard = ({resName, cuisine}) <== shown below:- 
//  This is known as destructuring on the fly. Destructing is not part of react it is a concept of JS
// const ResCard = ({resName, cuisine}) =>{
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

//^  41) All This data comes in the form of API in JSON format 
//     -> it stores the data which has to be loaded in site
//     -> The data can vary according to city, area etc.
//?    -> How to check Data of live sites like swiggy => Console -> Network -> Fetch/HMR -> preview
//^ 41) CONFIG DRIVEN UI - It means UI is driven by Config
//  What is Config? Data in the form of API is config
//^ The Crousel which shows offers data can be different in different locations and there can be no data or offers for some locations. All this data is stored statewise or location wise So, when there's a change in location the data in the frontend changes.
//  It is a very imp concept used in almost every website like amazon,uber etc. (Frontend System Design)
//  FOR EG:- You want to show different offers with different BGcolor in different areas. Then we have to send data in the JSON format as a config and this config will help us to drive the ui or change the ui this is known as config driven UI.


//~ 42) e.  We will take the data in the form of props inside ResCard from body which is taking data from resObj (an API,or a JSON object)
//~ 42) f.  We are taking resData in brackets bcz we are taking an array of a data stored in resObj
      const ResCard = ({resData}) =>{
console.log(resData);
    return (
        <div className="ResCard">
            <img className="ResLogo" src="https://previews.123rf.com/images/miracel123/miracel1231801/miracel123180100795/94312687-food-delivery-logo.jpg" alt=""/>
            {/* <h3>DamFoods</h3> */}
            {/* <h3>{props.resName}</h3> */}
            <h3>{resData.data.name}</h3>
            <h4>{resData.data.cuisines.join(", ")}</h4>
            {/* Changing cuisines to coma(,) separated values.
            from this BurgerBiryaniAmericanChinese to this Burger, Biryani, American, Chinese using array join(", ") in JS */}
            <h4>{resData.data.avgRating}</h4>
            <h4>{resData.data.deliveryTime}</h4>
            <h4>{resData.data.costForTwo/100}</h4> 
            {/* converting costForTwo in ruppes */}
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

