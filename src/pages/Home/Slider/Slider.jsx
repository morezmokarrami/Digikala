import axios from "axios";
import {useEffect, useState} from "react";

export const Slider =()=>{
const [value,setvalue]=useState([])
    const get = async () => {
        try {
            const request = await axios({
                method: "GET", url: "https://www.digikala.com/_next/static/chunks/pages/fresh-offers-fca545e7a6179197.js"
            })
            setvalue(request)
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        get();
        console.log(value);
    }, [])
}