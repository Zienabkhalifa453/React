import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = {
    favorites: [],
    count:0,
};
const wishListSlice = createSlice({
    name:"wishlist",
    initialState:INITIAL_STATE,
    reducers: {
        addToWatchList: (state, action) => {
                state.favorites.push(action.payload);
                state.count++;
        },
        removeFromWatchList: (state, action) => {
            state.favorites = state.favorites.filter(movie => movie.id !== action.payload.id);
            state.count--; 
        },
    },
})
export const { addToWatchList, removeFromWatchList } = wishListSlice.actions;
export default wishListSlice.reducer;

