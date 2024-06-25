import { LOGO_URL } from "../../utils/constant";
import React, { useState } from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Navbar = () =>{

const [btnNameReact, setBtnNameReact] = useState("Login");

const onlineStatus = useOnlineStatus();
    return (
        <div className='Navbar'>
            <div className="logoContainer">
                <Link to="/"> <img className="logo" src={LOGO_URL} alt="img"/> </Link> 
            </div>
                
            <div className="navItems">
                <ul>
                    <li>Online Status: { onlineStatus ? "✅" : "🔴"} </li>
                    <li>        
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
    