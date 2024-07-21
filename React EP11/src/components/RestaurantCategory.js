import React, { useState } from 'react'
import { MdExpandLess } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";
import ItemList from './ItemList';

const RestaurantCategory = ({ catData }) => {

const [showDropdown, setShowDropdown] = useState(false);

    const handleClick = () =>{
        setShowDropdown(!showDropdown);
    };
    // console.log(catData);
    
  return (
    <div className='mb-5 bg-primary-grey'>
        <div className='mb-5 cursor-pointer' onClick={handleClick}>
            <h1>
                {/* header */}
                <span>{catData?.title} ({catData?.itemCards?.length}) </span> 
                <span className='text-2xl text-primary-yellow'
                > {showDropdown ? <MdExpandLess /> : <MdExpandMore />} </span>
            </h1>
        </div>
        {/* accordion body */}
        {showDropdown && <ItemList itemCardsData={catData?.itemCards}/> }
    </div>
  )
}

export default RestaurantCategory