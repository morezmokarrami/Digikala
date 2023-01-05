import {Navbar} from "./Navbar/MainNavbar/Navbar";
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
            <div>

            </div>
        </>
    )
}
/*
* https://api.digikala.com/v1/products/recent-viewed/?product_ids%5B0%5D=130273&product_ids%5B1%5D=1631339&product_ids%5B2%5D=5761176&product_ids%5B3%5D=506608&product_ids%5B4%5D=3784517&product_ids%5B5%5D=3735138&product_ids%5B6%5D=6460974&product_ids%5B7%5D=210207&product_ids%5B8%5D=274934&product_ids%5B9%5D=2246971&product_ids%5B10%5D=3591674&product_ids%5B11%5D=554233&product_ids%5B12%5D=3019814&product_ids%5B13%5D=624480&product_ids%5B14%5D=381012&product_ids%5B15%5D=8597524&product_ids%5B16%5D=9219354&product_ids%5B17%5D=6608093&product_ids%5B18%5D=8165299&product_ids%5B19%5D=1144341&product_ids%5B20%5D=2893388&product_ids%5B21%5D=4344214&product_ids%5B22%5D=9628397
* */