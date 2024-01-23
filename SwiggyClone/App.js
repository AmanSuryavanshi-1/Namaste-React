import React from 'react'
import ReactDOM from "react-dom/client"
import "./App.css"

/* Header
   --logo
   --Nav Items
Body 
   --Search
   --restaurantContainer
   --restaurantCard
Footer
   --Copyright
   --Links
   --Address
   --Contact */
   const HeaderComponent = () =>{
    return (
        <div className='Navbar'>
            <div className="logoContainer">
                <img className="logo" src="https://previews.123rf.com/images/miracel123/miracel1231801/miracel123180100795/94312687-food-delivery-logo.jpg" alt="img"/>
            </div>
            <div className="navItems">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
   }

   const Body = () =>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="ResContainer">
             {/* <div className="resCard"> RESTAURANT CARD WE WILL CREATE A SEPARATE COMPONENT FOR IT BCZ WE WILL BE RE-USING IT AGAIN AND AGAIN </div>  */}
               {/* resName =... cuisine=... are the props which are passed along with it */}
                <ResCard resName="Meghana Foods"/>
                <ResCard resName="Bawal Foods"/>
                <ResCard resName="Burger King" cuisine="Burger, Fires"/>
                <ResCard resName="Northen Ley" cuisine="Briyani, SouthIndian"/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
            </div>
        </div>
    )
   }
//^ 40) HOW TO FETCH DIFFERENT DATA FOR ResCards Dynamically
//&  -- It is done using PROPS
//      Props is the shortform for properties which you can pass through components 
//      used to Dynamically pass data to components
//      Props are argument to the functions
//      Props assigned in the body is fetched in ResCard by taking ==> const ResCard = (props) =>{  <==
//      Props are used in {} as normal JS arguments and functions like this ==> <h3>{props.resName}</h3> <==
//&     When you have to pass some data dynamically to a component you pass it as a props
//      You can pass any number of props. React will wrap everyone of them into an OBJECT and pass it in const ResCard = (props) =>{}

//&  Props can be destructured it means instead of passing props to ResCard you can directly pass the arguments like this const ==> ResCard = ({resName, cuisine}) <== shown below:- 
//  This is known as destructuring on the fly. Destructing is not part of react it is a concept of JS
const ResCard = ({resName, cuisine}) =>{
    console.log(resName, cuisine);
    return (
        <div className="ResCard">
            <img className="ResLogo" src="https://previews.123rf.com/images/miracel123/miracel1231801/miracel123180100795/94312687-food-delivery-logo.jpg" alt=""/>
            {/* <h3>DamFoods</h3> */}
            {/* <h3>{props.resName}</h3>   */}
            <h3>{resName}</h3>
            {/* we can directly use resName no need to write like props.resName */}
            <h4>{cuisine}</h4>
            <h4>* 4.4</h4>
            <h4>30mins</h4>
            <h4>400Rs</h4>
        </div>
    )
   }
// const ResCard = (props) =>{
//     console.log(props);
//     return (
//         <div className="ResCard">
//             <img className="ResLogo" src="https://previews.123rf.com/images/miracel123/miracel1231801/miracel123180100795/94312687-food-delivery-logo.jpg" alt=""/>
//             {/* <h3>DamFoods</h3> */}
//             <h3>{props.resName}</h3>  
//             <h4>{props.cuisine}</h4>
//             <h4>* 4.4</h4>
//             <h4>30mins</h4>
//             <h4>400Rs</h4>
//         </div>
//     )
//    }

   const AppLayout = () => {
    return (
    <div className="app">
        <HeaderComponent/>
        <Body/>
    </div>
        )
   }
   const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render(<AppLayout/>);