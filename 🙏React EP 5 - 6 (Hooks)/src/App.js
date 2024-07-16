import React from 'react'
import ReactDOM from "react-dom/client"
import "./App.css"
import Header from "./components/Header"
import RestaurantCard from './components/RestaurantCard'
import Body from './components/Body'

// ! EP5 & 6
// $ 23)-24) in (constant.js)
// $ 25) React Algorithm in (Notion Notes)
// $ 26) MONOLITH ARCHITECTURE & Microservices in (Notion Notes)

// $ 34) CORS in (Notion Notes)

// $ 35) TypeError in ( Notion Notes RestaurantCard.js )
// $ 36) Hooks & State -> Creating a filter option for Top Rated Restaurant in (Body.js)

// $ 55) FETCH THE DATA AFTER GETTING IT FROM AN API USING UseEffect (Body.js)
// $ 57) Getting the data from live API Link (Change link? EP6 44:55)
 


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

