import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./cartSlice";

const appStore = configureStore({
    reducer: { 
        cart: cartSliceReducer, // slice 1
        // user: userReducer, //slice 2
    },
});

export default appStore;