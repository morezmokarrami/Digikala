import {createSlice} from "@reduxjs/toolkit";


export const searchSlider = createSlice({
    initialState : [],
    name: 'search',
    reducers : {
        SEARCH : (state, action) => action.payload}}
)

export const {SEARCH} = searchSlider.actions;
export default searchSlider.reducer