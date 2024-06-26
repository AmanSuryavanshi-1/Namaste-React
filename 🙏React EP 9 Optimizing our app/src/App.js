import React, { Suspense, lazy } from 'react'
import ReactDOM from "react-dom/client"
import "./App.css"
import Header from "./components/Navbar/Navbar"
import Body from './components/Body'
import About from './components/NavComponents/About'
import Error from './components/Error'
import Fav from './components/NavComponents/fav'
import Contact from './components/NavComponents/Contact'
import Cart from './components/NavComponents/Cart'
import RestaurantMenu from './components/RestaurantMenu'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// ! EP 8 class based components (X)
// ! EP 9 Optimizing our app
// $ 69) Creating a custom hook useRestaurantMenu() in ( RestaurantMenu.js & useRestaurantMenu.js)
// $ 70) Creating online offline feature in ( useOnlineStatus.js & Body.js & Navbar.js)
// $ 71) Lazy Loading & fallback (App.js & Recommendations.js)

const Recommendations = lazy(()=> import("./components/Recommendations"));


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
            path:"/recommendations",
            element:<Suspense fallback={<h1>Resources are getting ready</h1>}> <Recommendations/> </Suspense> ,
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
