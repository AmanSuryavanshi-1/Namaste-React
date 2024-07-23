import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"Aman's cart",
    initialState:{
        // initially items are empty 
        items: ["burger","pizza"]
    },
    reducers:{
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            // state.items = [];
            state.items.length = 0;
        },       
    }
});


export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer

// get the index like action.payload.id
//  to remove the exact element from the array
// for now top element in the cart will get removed