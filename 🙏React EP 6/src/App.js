import React from 'react'
import ReactDOM from "react-dom/client"
import "./App.css"
import Header from "./components/Navbar/Navbar"
import RestaurantCard from './components/RestaurantCard'
import Body from './components/Body'

// ! Continuing EP6 
// $ 58)  ShimmerUI loading effect (Body.js)
// $ 59)  Conditional Rendering (Body.js)
// $ 60)  State Management by taking the example of login 


// $ 61)  Adding Search functionality
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

   const AppLayout = () => {
    return (
    <div className="app">
        <Header/>
        <Body/>
        <RestaurantCard/>
    </div>
        )
   };

   const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render(<AppLayout/>);

