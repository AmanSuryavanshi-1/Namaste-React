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
                {/* <div className="resCard"> RESTAURANT CARD WE WILL CREATE A SEPARATE COMPONENT FOR IT BCZ WE WILL BE RE-USING IT AGAIN AND AGAIN </div> */}
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
            </div>
        </div>
    )
   }

   const ResCard = () =>{
    return (
        <div className="ResCard">
            <img className="ResLogo" src="https://previews.123rf.com/images/miracel123/miracel1231801/miracel123180100795/94312687-food-delivery-logo.jpg" alt=""/>
            <h3>DamFoods</h3>
            <h4>Biryani, North Indian, Asian</h4>
            <h4>* 4.4</h4>
            <h4>30mins</h4>
            <h4>400Rs</h4>
        </div>
    )
   }

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