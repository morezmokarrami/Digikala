import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {TrendSearches} from "./TrendSearches";

export const SearchBox = () => {
    const {search} = useSelector(state => state)
    console.log(search)
    return(
        <>
            <div>
                <div></div>
                <div>
                    <TrendSearches/>
                </div>
            </div>
            {
                search.categories?.map((item, index) => {
                    console.log(item);
                })
            }
        </>
    )
}