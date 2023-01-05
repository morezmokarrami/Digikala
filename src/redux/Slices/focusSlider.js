import {createSlice} from "@reduxjs/toolkit";

export const focusSlider = createSlice({
    initialState : false,
    name: 'ifFocused',
    reducers : {
        FOCUS : (state, action) => action.payload
    }
})

export const {FOCUS} = focusSlider.actions;
export default focusSlider.reducer;