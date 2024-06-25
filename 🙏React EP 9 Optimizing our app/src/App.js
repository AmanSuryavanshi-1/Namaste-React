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
// $ 69) Creating a custom hook useRestaurantMenu() in ( RestaurantMenu.js )
// $ 70) Creating online offline feature
// $ 71) Lazy Loading
// We will not import AiRecommendations directly we will take the help of lazy loading or dynamic loading
// The Recommendations code is not fetched at the time of website loading
//  It will be load only when the Recommendations section is opened i.e. the code will only come when the user clicks on it or asked for it.  
// import Recommendations from './components/Recommendations'

// Lazy is a named export which come with react
// Now we will lazy load it

// We will not import it with normal import like :-
//  import Recommendations from './components/Recommendations'
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
