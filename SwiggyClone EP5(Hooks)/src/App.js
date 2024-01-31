import React from 'react'
import ReactDOM from "react-dom/client"
import "./App.css"
import Header from "./components/Header"
import RestaurantCard from './components/RestaurantCard'
import Body from './components/Body'

// ! EP5
// $ 46)-47) in constant.js
// $ 48) TypeError in RestaurantCard.js
// $ 49) Creating a filter option for Top Rated Restaurant in Body.js
// $ 50) (STATES & HOOKS) in Body.js
// $ 51) React Algorithm 

// ! EP6
// $ 52) MONOLITH ARCHITECTURE
// -> “mono” represents the single codebase containing all the required functionalities. 
// ->  All the functionalities of a project exist in a single codebase
// ->  We design our application in various layers like presentation, service, and persistence and then deploy that codebase as a single jar/war file
// ->  It has an API, UI, Auth, DB code written inside one project
// ->  Difficult to manage
// ->  We need to redeploy the whole application, even for a small change.

// ->  All the teams work on single Repository
// ->  Everything should be written in one language.

// $ 52.1) Microservices
// ->  It is an architectural development style in which the application is made up of smaller services that handle a small portion of the functionality and data by communicating with each other directly using lightweight protocols like HTTP.
// ->  It has different services for different tasks like API, UI, Auth, DB micro services.
// ->  These microservices combines together to form a large app (EG UBER)
// ->  These microservices talk to each other according to the requirements of the project.
// ->  There are separate service for different concerns this is known as SEPARATION OF CONCERNS or SINGLE RESPONSIBILITY PRINCIPLE
// ->  Instead of sharing a single database with other microservices, each microservice has its own database.

// ->  Every team work on their own independent service
// ->  You can have different techStacks for different things and can use any other language. In our case we are working on UI microservices with React as a techStack

//  &  How the services connect to each other?
//  &  Every service is hosted on different ports and hosted in different URL for eg : api is stored in url/api , url/sms, url/ for UI etc.
//  &  So when UI needs to connect to backend it sends request to url/api and to connect with sms services it calls for url/sms

// $ 53) How react renders data from an API
// $ 54) (useEffect HOOK) HOW TO GET DATA FROM AN API INSIDE REACT APP
// $ 55) FETCH THE DATA AFTER GETTING IT FROM AN API USING UseEffect
// $ 56) Getting the data from live API Link(Change link? EP6 44:55)
 


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

