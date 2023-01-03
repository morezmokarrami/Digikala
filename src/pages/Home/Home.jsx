import {Navbar} from "./Navbar/Navbar";
import {Row, Col, Container} from "reactstrap";

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
                </div>
            </div>
        </>
    )
}