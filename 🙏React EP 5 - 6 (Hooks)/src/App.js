import React from 'react'
import ReactDOM from "react-dom/client"
import "./App.css"
import Header from "./components/Header"
import RestaurantCard from './components/RestaurantCard'
import Body from './components/Body'

// ! EP5
// $ 46)-47) in (constant.js)
// $ 48) TypeError in (RestaurantCard.js)
// $ 49) Creating a filter option for Top Rated Restaurant in (Body.js)
// $ 50) STATES & HOOKS in (Body.js)   ==> // $ 63) useState in detail React IMP Topics -> IMP Topics -> useState
// $ 51) React Algorithm in (Notes.jsx)

// ! EP6
// $ 52) MONOLITH ARCHITECTURE & Microservices in (Notes.jsx)

// $ 53) How react renders data from an API (Notes.jsx)
// $ 54) (useEffect HOOK) HOW TO GET DATA FROM AN API INSIDE REACT APP (Notes.jsx)
// $ 55) FETCH THE DATA AFTER GETTING IT FROM AN API USING UseEffect (Body.js)

// $ 56) CORS in (Notes.jsx)
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

