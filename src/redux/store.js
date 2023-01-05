import {configureStore} from "@reduxjs/toolkit";
import focusSlider from "./Slices/focusSlider";


export const store = configureStore({
    reducer : {
    focus: focusSlider
    }
})