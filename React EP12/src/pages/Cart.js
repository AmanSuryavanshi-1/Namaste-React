import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from '../components/ItemList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store)=> store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () =>{
    dispatch(clearCart());
  } 
  
  return (
   <div>
    <h1 className='text-3xl text-primary-light'>CART</h1>
    {/* Displaying cart items */}
    {cartItems.length === 0 && <h1 className='text-3xl text-primary-light'>YOUR CART IS EMPTY. ADD ITEMS TO YOUR CART</h1>}
        <ItemList itemCardsData={cartItems}/>
        {/* Clearing cart */}
          <button className='bg-primary-yellow' 
            onClick = {handleClearCart}
            >Clear Cart
          </button>
   </div>
  )
}

export default Cart