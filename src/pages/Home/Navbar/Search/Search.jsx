import {Input} from "reactstrap";
import {useEffect, useRef, useState} from "react";
import get from '../../../../queries/get'
import {useDispatch, useSelector} from "react-redux";
import {FOCUS} from "../../../../redux/Slices/focusSlider";
import {SEARCH} from "../../../../redux/Slices/searchSlider";

export const Search = () => {



    const [value, setValue] = useState('');
    const [search, setSearch] = useState([]);
    const [focused, setFocused] = useState(false);
    const onChange = (e) => setValue(e.target.value);
    const ref = useRef(null);
    const dispatch = useDispatch();
    useEffect(() => {
        getSearch();
        dispatch(SEARCH(search));
    }, [value])
    const getSearch = async () => {
        try {
            const res = await get(
                {
                    url: `//api.digikala.com/v1/autocomplete/?q=${value}`
                }
            )
            setSearch(res.data.data)
        }catch (e) {
            console.log(e);
        }
    }

    const onFocused = () => {
        setFocused(true);
        dispatch(FOCUS(focused))
    };

    const onBlur = () => {
        setFocused(false);
        dispatch(FOCUS(focused))
    };



    return (
        <>
            <div>
                <input type="text" className={'search-input form-control'}   dir={'rtl'} value={value} onFocus={onFocused} placeholder={'جستجو...'} onChange={onChange} onBlur={onBlur} ref={ref}/>
            </div>
        </>
    )
}