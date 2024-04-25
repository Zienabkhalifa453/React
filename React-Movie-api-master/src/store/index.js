import { configureStore } from "@reduxjs/toolkit";
import wishListSlice from "./slices/counter";

const store = configureStore({
    reducer:{
        counter:wishListSlice
    }   
})
export default store;