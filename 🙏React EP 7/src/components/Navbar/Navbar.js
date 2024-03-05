import { LOGO_URL } from "../../utils/constant";
import React, { useState } from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";
const Navbar = () =>{

const [btnNameReact, setBtnNameReact] = useState("Login");

    return (
        <div className='Navbar'>
            <div className="logoContainer">
                <Link to="/"> <img className="logo" src={LOGO_URL} alt="img"/> </Link> 
            </div>
                
            <div className="navItems">
                <ul>
                    
                    {/* <li> <a href="/recommended"> Recommended </a> </li> */}
                    <li
            //        => 64.4) using anchorTags or <a></a> for redirecting to the link when user clicks
                    
            //         -> Never use anchors for redirecting to the link when user clicks on the link 
            //         -> because it will refresh teh whole page when user clicks on it.
            //         -> We don't want to refresh the whole page and still move to new route.

            //  &  Q: How to make it navigating to new page without loading the whole page again?
            //  &  A: instead of  using href for navigation wew will use Link instead.
            //        -> link is provided by react-router-dom to make navigation faster
            //        -> Link works same as anchor tags
            //        -> The only difference between anchor tags and Link is that 
            //            -> in Link we use to instead of href for navigation  
            //   => using link our Webapp becomes faster and do not refresh the whole page on routing to different navbar components.

            // &   Q: How react is used for creating a SPA single page 
            // &   A: with the help of react it does not refreshes the whole page it just loads the changes in the component which makes overall app faster.
            //        -> Single Page WebApp are the apps that refreshes the changes in component.
            //           -> In our WebApp we have  a single page and the rest everything is a component that loads the changes if there is any changes in the data of the component.

                    >        
                         <Link to="/recommended"> Recommended </Link> </li>
                    <li> <Link to="/about"> About </Link> </li>
                    <li> <Link to="/cart"> Cart </Link> </li>
                    <li> <Link to="/contact"> Contact </Link> </li>
                    <li> <Link to="/fav"> Favorites </Link> </li>

                    <button className="login" onClick={()=>{
                        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
   }

   export default Navbar;
    