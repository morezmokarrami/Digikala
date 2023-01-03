import {Search} from "./Search/Search";

export const Navbar = () => {

    return (
        <>
            <div className={'d-flex justify-content-end navbarborder'}>
                <div><img src={'https://www.digikala.com/statics/img/svg/logo.svg'} alt=""/></div>
                <div><Search/></div>
                <div></div>
            </div>
        </>
    )
}