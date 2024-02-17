import { LOGO_URL } from "../../utils/constant";
import React, { useState } from "react";
import "./Navbar.css"

const Navbar = () =>{
// $ 60)  State Management by taking the example of login 
// -> 60.1) Login should get changed to logout when i click on login.
// -> 60.2) JS don't allow to change the const variable.Therefore using let.
// let btnName = "Login";
// --> 60.6) Using useState to dynamically change Login -> Logout 
const [btnNameReact, setBtnNameReact] = useState("Login");
// --> const btnNameReact = "Login"; ==> it can also be written like this <==
// --> on initial time btnNameReact is Login 
// & 60.10) If useState has const then how the values are getting changed?
// -> Whenever setBtnNameReact is triggered then react is updating this this btnNameReact and then it is calling or rendering navbar component again.

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
                        // setBtnNameReact("Logout");
                        // -> 60.7) Whenever it will run setBtnNameReact react will trigger render process once again.
                        // -> 60.8) Or, Whenever your state variable changes the react will rerender the component.
                        
                        //& Q 60.9) Is react refreshing this whole Navbar component or only this button?
                        // -> Whole Navbar component will get loaded again once this button is clicked.
                        // -> in the 2nd render it will contain the updated values in it
                    
                        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")
                        
                        // -> 60.11) Every time the setBtnNameReact is triggered a reconciliation process is initiated followed by a diffing algorithm
                        // ->        And after getting the difference in old and new virtual dom it will rerender the whole Navbar component again.
                        // ->        This is why React is fast and most popular framework.
                    
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
   }

   export default Navbar;
    