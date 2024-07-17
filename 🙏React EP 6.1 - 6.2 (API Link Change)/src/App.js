import React from 'react'
import ReactDOM from "react-dom/client"
import "./App.css"
import Header from "./components/Navbar/Navbar"
import RestaurantCard from './components/RestaurantCard'
import Body from './components/Body'
import About from './components/NavComponents/About'
import Recommended from './components/NavComponents/Recommended'
import Error from './components/Error'
import Fav from './components/NavComponents/fav'
import Contact from './components/NavComponents/Contact'
import Cart from './components/NavComponents/Cart'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// ! EP 6.1 Changing the Swiggy API 
// $ 38) Updating the Swiggy API (Notion Notes Body.js)

// ! EP 6.2 Avoiding CORS problem without extension
// $ 40) Using corsProxy.io for avoiding CORS issues (Notion Notes)
   const AppLayout = () => {
    return (
    <div className="app">
        <Header/>
        <Outlet/>
    </div>
        )
   };

   const appRouter = createBrowserRouter([
    {
    path:"/",
    element:<AppLayout/>,
    children:[
        {
            path:"/",
            element: <Body />
        },
        {
            path:"/about",
            element:<About/>,
        },
        {
            path:"/recommended",
            element:<Recommended/>,
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"/fav",
            element:<Fav/>
        },
        {
            path:"/cart",
            element:<Cart/>
        },
    ],
    errorElement:<Error/>,
   },
   ]);
   const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)
