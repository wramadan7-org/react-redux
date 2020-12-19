import React, { Component } from 'react'
import {
    Container, Row, Col,
    Button, Form,
    Modal, ModalHeader, ModalBody, ModalFooter, Input
} from 'reactstrap'
import NavigationBar from '../component/NavigationBar'
import imgJas from '../assets/images/jas.jpg'
import { Link } from 'react-router-dom'
import cartActions from '../redux/actions/cart'
import { connect } from 'react-redux'

class Checkout extends Component {

    state = {
        modalSummary: false,
        modalAddress: false,
        modalNewAddress: false,
        total: ''
    }

    componentDidMount() {
        this.props.getCart(this.props.auth.token)
    }

    onChangeText = (e) => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const { isLoading, isError, dataCart, total, alertMsg } = this.props.cart
        return (
            <div>
                <NavigationBar />
                <Container className="my-3">
                    <div>
                        <h1>Checkout</h1>
                        <h6>Shipping Address</h6>
                    </div>
                    <Row>

                        <Col lg={8} className="">
                            <Col xs={12} sm={12} md={12} lg={12} className="shadow my-3">
                                <div className="p-2">
                                    <h6 className="font-weight-bold">Andreas Jane</h6>
                                    <p>Perumahan Sophia Lajunta, Wiradadi, Kec. Soekarja, Kab. Banyumas, Jawa Tengah, 51223 [Toko pedia note]</p>
                                    <Button onClick={() => this.setState({ modalAddress: true })} block className="rounded-pill" style={{ width: 200 }}>Choose another address</Button>
                                </div>
                            </Col>
                            {!isLoading && !isError && dataCart !== 0 && dataCart.map(o => (
                                <Col xs={12} sm={12} md={12} lg={12} className="shadow my-3">
                                    <Row className="align-items-center p-2">
                                        <Col lg={4}>
                                            <img src={imgJas} style={{ width: 180, height: 100 }} className="mr-1" />
                                        </Col>
                                        <Col className="d-flex justify-content-between">
                                            <div className="">
                                                <h6 className="font-weight-bold">{o.item}</h6>
                                                <span className="text-muted">Zalora Clouth</span>
                                            </div>
                                            <div>
                                                <h6 className="font-weight-bold">{o.price}</h6>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            ))}
                        </Col>
                        <Col className="shadow h-25">
                            <div className=" ">
                                <div className="my-4 ">
                                    <h6 className="font-weight-bold">Shopping summary</h6>
                                    <div className="d-flex justify-content-between">
                                        <span className="text-muted">Order</span>
                                        <h6>{total}</h6>
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
                                {/* <Link onClick={() => this.setState({ modal: true })}> */}
                                <Button onClick={() => this.setState({ modalSummary: true })} block className="rounded-pill mb-4">Shopping summary</Button>
                                {/* </Link> */}
                            </div>
                        </Col>
                    </Row>
                    {/** Modal address */}
                    <Modal isOpen={this.state.modalAddress}>
                        <ModalHeader className="justify-content-center">
                            <Row className="">
                                <Col lg={12} className=" d-flex w-100">
                                    <div>
                                        <h3>Choose another address</h3>

                                    </div>
                                    <div>
                                        <Button onClick={() => this.setState({ modalAddress: false })} color="transparant">X</Button>

                                    </div>
                                </Col>
                            </Row>
                        </ModalHeader>
                        <ModalBody>
                            <Row className="">
                                <Col className="">
                                    <Link onClick={() => this.setState({ modalNewAddress: true })}>
                                        <div className="border" style={{ height: 50 }}>
                                            <div className="">
                                                <p className="text-center  text-muted">Add new address</p>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                            </Row>
                            <Row className="my-4">
                                {!isLoading && !isError && dataCart !== 0 && dataCart.map(o => (
                                    <Col lg={12} className="my-3">
                                        <div className="border p-3">
                                            <h6 className="font-weight-bold">{o.name}</h6>
                                            <div>
                                                <p className="text-muted">
                                                    Perumahan Shapiire Minacri, Wiradadi, Kec.Sukoraja, Kab.Banyumas, Jawa Tengah. 5318
                                                    [Tokopedia Note: blok c 16] Sukoraja, Kab.Banyumas, 53181
                                                </p>
                                            </div>
                                            <Link>
                                                <h6 className="text-danger font-weight-bold">Change address</h6>
                                            </Link>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </ModalBody>
                    </Modal>

                    {/** Modal summary */}
                    <Modal isOpen={this.state.modalSummary}>
                        <ModalHeader>
                            <Row className="align-items-center">
                                <Col>
                                    <Button onClick={() => this.setState({ modalSummary: false })} color="transparan">X</Button>
                                </Col>
                                <Col>
                                    <h1>Payment</h1>
                                </Col>
                            </Row>
                        </ModalHeader>
                        <ModalBody>
                            <div>
                                <p className="font-weight-bold">Payment method</p>
                            </div>
                            <div className="my-2">
                                <Row className="my-2">
                                    <Col>
                                        <h5>Gambar</h5>
                                    </Col>
                                    <Col>Gopay</Col>
                                    <Col lg={1}>
                                        <Input type="checkbox" />
                                    </Col>
                                </Row>
                                <Row className="my-2">
                                    <Col>
                                        <h5>Gambar</h5>
                                    </Col>
                                    <Col>Gopay</Col>
                                    <Col lg={1}>
                                        <Input type="checkbox" />
                                    </Col>
                                </Row>
                            </div>
                            <div className="border"></div>
                            <div className="my-4">

                                <h6 className="font-weight-bold">Shopping summary</h6>
                                <Row>
                                    <Col>
                                        <p className="text-muted">Order</p>
                                    </Col>
                                    <Col>
                                        <h6 className="font-weight-bold">{total}</h6>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p className="text-muted">Delivery</p>
                                    </Col>
                                    <Col>
                                        <h6 className="font-weight-bold">$ 5.0</h6>
                                    </Col>
                                </Row>
                            </div>
                        </ModalBody>
                        <ModalFooter className="shadow-lg">
                            <Row className="w-100">
                                <Col>
                                    <Col><h6 className="font-weight-bold">Shopping summary</h6></Col>
                                    <Col><h6 className="font-weight-bold text-danger">$ 45.0</h6></Col>
                                </Col>
                                <Col>
                                    <Button block className="rounded-pill">Buy</Button>
                                </Col>
                            </Row>
                        </ModalFooter>
                    </Modal>

                    {/* modal Add address */}
                    <Modal isOpen={this.state.modalNewAddress} style={{ width: 1000 }}>
                        <ModalHeader><h4>Add new address</h4></ModalHeader>
                        <Form>
                            <ModalBody>
                                <Container>
                                    <Row>
                                        <Col>
                                            <div>
                                                <p className="text-muted">Save address as (ex:home address, official address)</p>
                                                <Input onChange={this.onChangeText} name="homeAddress" type="text" />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div>
                                                <p>Recipient's name</p>
                                                <Input onChange={this.onChangeText} name="recepientsName" type="text" />
                                            </div>
                                        </Col>
                                        <Col>
                                            <div>
                                                <p>Recepient's telephone number</p>
                                                <Input onChange={this.onChangeText} name="recepientsNumber" type="text" />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div>
                                                <p>Address</p>
                                                <Input onChange={this.onChangeText} name="address" type="text" />
                                            </div>
                                        </Col>
                                        <Col>
                                            <div>
                                                <p>Postal code</p>
                                                <Input onChange={this.onChangeText} name="postalCode" type="text" />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div>
                                                <p>City or Subdistrict</p>
                                                <Input onChange={this.onChangeText} name="city" type="text" />
                                            </div>
                                        </Col>
                                        <Col></Col>
                                    </Row>
                                    <Col>
                                        <Input type="radio" />{' Make it primary address'}
                                    </Col>
                                </Container>
                            </ModalBody>
                            <ModalFooter>
                                <Button onClick={() => this.setState({ modalNewAddress: false })}>Cancle</Button>
                                <Button type="submit" >Save</Button>
                            </ModalFooter>
                        </Form>
                    </Modal>

                </Container>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    cart: state.cart
})

const mapDispatchToProps = {
    getCart: cartActions.getCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)