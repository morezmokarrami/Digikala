import {Navbar} from "./Navbar/Navbar";
import {Row, Col} from "reactstrap";
import {Slider} from "./Slider/Slider";

export const Home = () => {

    return (
        <>
            <div>
                <div className={'navbarborder w-100'}>
                    <div className={'container-fluid'}>
                        <Row>
                            <Col xl={12}>
                                <Navbar/>
                            </Col>
                        </Row>
                    </div>
                    <div className={'container-fluid'}>
                        <Row>
                            <Col xl={12}>
                                <Slider/>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}