import { LOGO_URL } from "../../utils/constant";
import React, { useState } from "react";
import "./Navbar.css"

const Navbar = () =>{
// $ 60)  State Management by taking the example of login 
// -> 60.1) Login should get changed to logout when i click on login.
// -> 60.2) JS don't allow to change the const variable.Therefore using let.
// let btnName = "Login";
// -> 60.6) Using useState to dynamically change Login -> Logout 
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
                        // btnName = "Logout";
                        // console.log(btnName);
                        // -> 60.3) It s getting changed to logout when i click on login but only in console not in UI.
                        // -> 60.4) It changed but our navbar component does not refreshed itself

                        //& Q 60.5) How this navbar can be refreshed or Why useState is required?
                        // -> In these type of cases javascript variable does not work.
                        // -> If you want to make your component dynamic or you want to change something in your component you can not do that by using JS variable like onclick.
                        // -> These type of dynamic behavior is achieved by using local state variable or useState variable
                        setBtnNameReact("Logout");
                        // -> 60.7) Whenever it will run setBtnNameReact react will trigger render process once again.
                        // -> 60.8) Or, Whenever your state variable changes the react will rerender the component.
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
   }

   export default Navbar;
    