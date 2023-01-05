import {Search} from "../Search/Search";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {SearchBox} from "./SearchBox";

export const Navbar = () => {

    const {focus} = useSelector(state => state)
    console.log(focus)
    return (
        <>
            <div className={'d-flex justify-content-end py-3 position-relative'}>
                <div className={'ms-2'}>
                    <Search/>
                    <div className={`position-absolute ${focus ? 'searchall d-none' : null} `}>
                        <div className={'searchBox'}>
                             <SearchBox/>
                        </div>
                    </div>
                </div>
                <div><Link to={'/digikala'}><img src={'https://www.digikala.com/statics/img/svg/logo.svg'}
                                                 alt=""/></Link></div>
                <div></div>
            </div>
        </>
    )
}