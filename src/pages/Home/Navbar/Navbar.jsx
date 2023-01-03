import {Search} from "./Search/Search";
import {Link} from "react-router-dom";

export const Navbar = () => {

    return (
        <>
            <div className={'d-flex justify-content-end py-3'}>
                <div className={'ms-2'}><Search/></div>
                <div><Link to={'/digikala'}><img src={'https://www.digikala.com/statics/img/svg/logo.svg'} alt=""/></Link></div>
                <div></div>
            </div>
        </>
    )
}