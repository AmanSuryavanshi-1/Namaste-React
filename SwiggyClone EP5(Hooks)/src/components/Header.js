import { LOGO_URL } from "../utils/constant";
import React from "react";
const Header = () =>{
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
                </ul>
            </div>
        </div>
    )
   }

   export default Header;
    