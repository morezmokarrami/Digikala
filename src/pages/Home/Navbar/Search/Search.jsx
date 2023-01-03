import {Input} from "reactstrap";
import {useEffect, useState} from "react";
import get from '../../../../queries/get'

export const Search = () => {



    const [value, setValue] = useState('');
    const [search, setSearch] = useState([]);
    const [focused, setFocused] = useState([]);
    const onChange = (e) => setValue(e.target.value);
    useEffect(() => {
        getSearch();
        console.log(search);
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

    return (
        <>
            <div>
                <Input className={'search-input'} placeholder={'جستجو...'} dir={'rtl'} value={value} onChange={onChange}/>
            </div>
        </>
    )
}