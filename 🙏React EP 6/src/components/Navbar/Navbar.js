import { LOGO_URL } from "../../utils/constant";
import React, { useState } from "react";
import "./Navbar.css"

const Navbar = () =>{

const [btnNameReact, setBtnNameReact] = useState("Login");

    return (
        <div className='Navbar'>
            <div className="logoContainer">
                <img className="logo" src={LOGO_URL} alt="img"/>
            </div>
            <div className="navItems">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                    <li>Favorites</li>
                    <button className="login" onClick={()=>{
                        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")                   
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
   }

   export default Navbar;
    