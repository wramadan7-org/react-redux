import React, { Component } from 'react'
import {
    Container,
    Row, Col,
    Button, Progress
} from 'reactstrap'

import imgSpatu1 from '../assets/images/spatu1.jpg'
import imgSpatu2 from '../assets/images/spatu2.jpg'
import imgSpatu3 from '../assets/images/spatu3.jpg'
import imgSpatu4 from '../assets/images/spatu4.jpg'
import imgStar from '../assets/images/Star.png'

import ListProduct from '../pages/Item'

class DetailProduct extends Component {
    render() {
        return (
            <Container className="my-5">
                <Row>
                    <Col md={6} className="">
                        <img className="mr-1 my-1" src={imgSpatu1} alt="star" />
                        <img className="mr-1 my-1" src={imgSpatu2} alt="star" />
                        <img className="mr-1 my-1" src={imgSpatu3} alt="star" />
                        <img className="mr-1 my-1" src={imgSpatu4} alt="star" />
                    </Col>
                    <Col className="">
                        <div>
                            <h3 className="font-weight-bold">Nike CruzrOne (Bright Crimson)</h3>
                            <h6 className="text-muted">Nike</h6>
                        </div>
                        <div className=" d-flex align-items-center my-4">
                            <img src={imgStar} alt="star" />
                            <img src={imgStar} alt="star" />
                            <img src={imgStar} alt="star" />
                            <img src={imgStar} alt="star" />
                            <img src={imgStar} alt="star" />
                            <h6 className="text-muted">(10)</h6>
                        </div>
                        <div className="my-4">
                            <h6 className="text-muted">Proce</h6>
                            <h3 className="font-weight-bold">$ 20.0</h3>
                        </div>
                        <div className="my-4">
                            <h6 className="text-muted">Color</h6>
                            <div className="">
                                <Button className="black rounded-circle mr-2" style={{ height: 30 }}></Button>
                                <Button className="red rounded-circle mr-2" style={{ height: 30 }}></Button>
                                <Button className="blue rounded-circle mr-2" style={{ height: 30 }}></Button>
                                <Button className="green rounded-circle mr-2" style={{ height: 30 }}></Button>
                            </div>
                        </div>
                        <div className="d-flex ">
                            <div className="mr-5">
                                <h6 className="text-muted">Size</h6>
                                <div className="align-items-center d-flex">
                                    <Button className="rounded-circle mr-2" style={{ height: 30 }}>-</Button>
                                    <p className="mr-2">28</p>
                                    <Button className="rounded-circle mr-2" style={{ height: 30 }}>+</Button>
                                </div>
                            </div>
                            <div>
                                <h6 className="text-muted">Qty</h6>
                                <div className="align-items-center d-flex">
                                    <Button className="rounded-circle mr-2" style={{ height: 30 }}>-</Button>
                                    <p className="mr-2">1</p>
                                    <Button className="rounded-circle mr-2" style={{ height: 30 }}>+</Button>
                                </div>
                            </div>
                        </div>
                        <div className="my-5 d-flex">
                            <div className="w-50 mr-2">
                                <Button block className="rounded-pill">Chat</Button>
                            </div>
                            <div className="w-50">
                                <Button block className="rounded-pill">Add bag</Button>
                            </div>
                        </div>
                        <div>
                            <Button block className="rounded-pill">Buy Now</Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="my-5">
                            <h1>Informasi Produk</h1>
                        </div>
                        <div className="my-5">
                            <h5 className="font-weight-bold">Condition</h5>
                            <h5 className="text-danger">New</h5>
                        </div>
                        <div className="my-5">
                            <h5 className="font-weight-bold">Description</h5>
                            <p className="text-muted">This is description for fild description in database</p>
                        </div>
                    </Col>
                </Row>
                <Row className="my-3">
                    <Col>
                        <div>
                            <h1 className="">Product Review</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={2} className="my-3" >
                        <div className="d-flex align-items-start">
                            <div className="">
                                <h1>5.0</h1>
                            </div>
                            <div className=" align-self-end">
                                <h6 className="text-muted align-content-end">/10</h6>
                            </div>
                        </div>
                        <div>
                            <img src={imgStar} alt="star" />
                            <img src={imgStar} alt="star" />
                            <img src={imgStar} alt="star" />
                            <img src={imgStar} alt="star" />
                            <img src={imgStar} alt="star" />
                        </div>
                    </Col>
                    <Col className="" md={4}>
                        <div className="d-flex justify-content-between  align-items-center">
                            <div className="mr-3">
                                <img src={imgStar} alt="star" />
                            </div>
                            <div>
                                <h6 className="text-muted">5</h6>
                            </div>
                            <Progress bar color="danger" value={100} className="mx-3 rounded-pill align-items-center" style={{ height: 10 }} />
                            <div>
                                <h6 className="text-muted">4</h6>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between  align-items-center">
                            <div className="mr-3">
                                <img src={imgStar} alt="star" />
                            </div>
                            <div>
                                <h6 className="text-muted">5</h6>
                            </div>
                            <Progress bar color="danger" value={100} className="mx-3 rounded-pill align-items-center" style={{ height: 10 }} />
                            <div>
                                <h6 className="text-muted">4</h6>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between  align-items-center">
                            <div className="mr-3">
                                <img src={imgStar} alt="star" />
                            </div>
                            <div>
                                <h6 className="text-muted">5</h6>
                            </div>
                            <Progress bar color="danger" value={100} className="mx-3 rounded-pill align-items-center" style={{ height: 10 }} />
                            <div>
                                <h6 className="text-muted">4</h6>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between align-items-center">

                            <div className="mr-3">
                                <img src={imgStar} alt="star" />
                            </div>
                            <div className="align-self-end">
                                <h6 className="text-muted align-items-center">5</h6>
                            </div>
                            <Progress bar color="danger" value={100} className="mx-3 rounded-pill align-items-center" style={{ height: 10 }} />
                            <div>
                                <h6 className="text-muted">4</h6>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="border my-3"></Row>
                <div className="my-3">
                    <h1>You can also like this</h1>
                    <h6 className="text-muted">You've never seen it before</h6>
                </div>
                <ListProduct />
            </Container>
        )
    }
}

export default DetailProduct