import React from 'react'
import ReactDOM from "react-dom/client"
import "./App.css"
import Header from "./components/Header"
import RestaurantCard from './components/RestaurantCard'
import Body from './components/Body'

//$ 46)-47) in constant.js
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
