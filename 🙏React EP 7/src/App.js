import React from 'react'
import ReactDOM from "react-dom/client"
import "./App.css"
import Header from "./components/Navbar/Navbar"
import RestaurantCard from './components/RestaurantCard'
import Body from './components/Body'
import About from './components/About'
import Recommended from './components/Recommended'
import Error from './components/Error'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// ! EP7
// $ 62) useEffect in detail from React IMP Topics Notes (YT) -> IMP Topics -> 12) useEffect
// $ 63) useState in detail React IMP Topics Notes (YT) -> IMP Topics -> 13) useState
// $ 64) React Router DOM

   const AppLayout = () => {
    return (
    <div className="app">
        <Header/>
        <Body/>
        <RestaurantCard/>

    </div>
        )
   };

// $ 64) using React Router DOM creating About page
// => 64.1) Creating the configuration:-
// ->  64.1.1) Importing createBrowserRouter from React Router DOM
//             -> createBrowserRouter takes a list of objects
//             -> Each and every object defines a separate path and tells what should happen on that particular path.

   const appRouter = createBrowserRouter([
    {
// -> If the path is / load home layout
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
// => 64.1.2) We can also add an error element to show the coustomized error pages.
   },
   {
// -> If the path is /about load About section
    path:"/about",
    element:<About/>,
   },
   {
    path:"/recommended",
    element:<Recommended/>,
    }
   ]);
// ->  64.1.3) RouterProvider => We need to provide the above information in order to render it.
//             -> It is done using a React Router DOM component RouterProvider
//             -> This router provider will provide the configuration to our app.
   const root = ReactDOM.createRoot(document.getElementById("root"));
// earlier we are rendering AppLayout directly
//    root.render(<AppLayout/>);

root.render(<RouterProvider router={appRouter}/>)
