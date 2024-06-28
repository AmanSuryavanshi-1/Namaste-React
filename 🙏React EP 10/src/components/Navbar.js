import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import logo from "../../Assets/FoodahLogo1.jpg";

const Navbar = () =>{

const [btnNameReact, setBtnNameReact] = useState("Login");

const onlineStatus = useOnlineStatus();
    return (
        <div className="flex bg-purple-800 justify-between border-spacing-1 ">
            <div className="">
                <Link to="/"> <img className='h-4 w-4' src={logo} alt="img"/> </Link> 
            </div>

            <div className="flex bg-black">
                <ul className="flex">
                    <li className="px-4">Online Status: { onlineStatus ? "✅" : "🔴"} </li>
                    <li className="px-4 ">        
                         <Link to="/recommendations"> Recommendations </Link> </li>
                    <li className="px-4"> <Link to="/about"> About </Link> </li>
                    <li className="px-4"> <Link to="/cart"> Cart </Link> </li>
                    <li className="px-4"> <Link to="/contact"> Contact </Link> </li>
                    <li className="px-4"> <Link to="/fav"> Favorites </Link> </li>

                    <button className="login" onClick={()=>{
                        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
   }

   export default Navbar;
    