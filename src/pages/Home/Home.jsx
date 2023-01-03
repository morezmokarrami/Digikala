import {Navbar} from "./Navbar/Navbar";
import {Row, Col} from "reactstrap";

export const Home = () => {

    return (
        <>
            <div>
                <div className={'container-fluid'}>
                    <Row>
                        <Col xl={12}>
                            <Navbar/>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}