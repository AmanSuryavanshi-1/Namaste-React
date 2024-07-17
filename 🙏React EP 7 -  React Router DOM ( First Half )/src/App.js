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
import RestaurantMenu from './components/RestaurantMenu'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// ! EP7
// $ 43) Types of Routing   (Notion Notes)
// $ 44) React Router DOM  (App.js)
// $ 45) Dynamic routing in Notion Notes
// $ 46) useParams hook in Notion Notes
// $ 47) useRouteError (Notion Notes & Error.js)
// $ 48-52) in Notion Notes
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
        {
            path:"/restaurants/:resId",
            element:<RestaurantMenu/>
        },
    ],
    errorElement:<Error/>,
   },
   ]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)
