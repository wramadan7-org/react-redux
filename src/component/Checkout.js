import React, { Component } from 'react'
import {
    Container, Row, Col,
    Button
} from 'reactstrap'
import imgJas from '../assets/images/jas.jpg'

class Checkout extends Component {
    render() {
        return (
            <div>
                <Container className="my-3">
                    <div>
                        <h1>Checkout</h1>
                        <h6>Shipping Address</h6>
                    </div>
                    <Row>

                        <Col lg={8} className="">
                            <Col lg={12} className="border my-3">
                                <div className="m-2">
                                    <h6 className="font-weight-bold">Andreas Jane</h6>
                                    <p>Perumahan Sophia Lajunta, Wiradadi, Kec. Soekarja, Kab. Banyumas, Jawa Tengah, 51223 [Toko pedia note]</p>
                                    <Button block className="rounded-pill" style={{ width: 200 }}>Choose another address</Button>
                                </div>
                            </Col>
                            <Col lg={12} className="border my-3">
                                <div className="m-2 d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <img src={imgJas} className="mr-1" />
                                        <div>
                                            <h6 className="font-weight-bold">Mens formal suit - Black</h6>
                                            <span className="text-muted">Zalora Clouth</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 className="font-weight-bold">$ 20.0</h6>
                                    </div>
                                </div>
                            </Col>
                        </Col>
                        <Col className="shadow h-25">
                            <div className=" ">
                                <div className="my-4 ">
                                    <h6 className="font-weight-bold">Shopping summary</h6>
                                    <div className="d-flex justify-content-between">
                                        <span className="text-muted">Order</span>
                                        <h6>$ 40.0</h6>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span className="text-muted">Delivery</span>
                                        <h6>$ 5.0</h6>
                                    </div>
                                    <div className="border"></div>
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-bold">Shopping summary</h6>
                                        <h6 className="text-danger">$ 45.0</h6>
                                    </div>
                                </div>
                                <Button block className="rounded-pill mb-4">Shopping summary</Button>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}

export default Checkout