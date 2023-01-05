import {configureStore} from "@reduxjs/toolkit";
import focusSlider from "./Slices/focusSlider";
import searchSlider from "./Slices/searchSlider";


export const store = configureStore({
    reducer: {
        focus: focusSlider,
        search : searchSlider
    }
})