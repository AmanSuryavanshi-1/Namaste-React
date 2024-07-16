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

// $ 30) CORS in (Notion Notes)

// $ 37) Conditional rendering to avoid Type Error ( Notion Notes RestaurantCard.js )
// $ 38) How to fetch data from updated Swiggy API ( EP 6.1 Notion Notes )
// $ 39) using useEffect hook to get Data in our website ( Notion Notes & Body.js)


// Creating a filter option for Top Rated Restaurant & adding a search funationality in (Body.js)



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

