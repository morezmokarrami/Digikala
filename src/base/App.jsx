import {Route, Routes} from "react-router-dom";
import {Home} from "../pages/Home/Home";
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import '../assets/styles/style.css'

export const App = () => {

    return (
        <Routes>
            <Route path={'/digikala'} element={<Home/>}></Route>
        </Routes>
    )
}