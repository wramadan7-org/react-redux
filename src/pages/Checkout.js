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
import checkoutAction from '../redux/actions/checkout'
import addressAction from '../redux/actions/address'
import { connect } from 'react-redux'
import numeral, { value } from 'numeral'

// import {gopay.jpg, mastercard.png, posIndonesia.jpg} from '../assets/logo'
import gopayImg from '../assets/logo/gopay.jpg'
import mastercardImg from '../assets/logo/mastercard.png'
import posIndonesiaImg from '../assets/logo/posIndonesia.jpg'

class Checkout extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalSummary: false,
            modalAddress: false,
            modalNewAddress: false,
            total: '',
            homeAddress: '',
            recepientsName: '',
            recepientsNumber: '',
            address: '',
            postalCode: '',
            city: ''
        }
        // console.log('props',props)
    }

    componentDidMount() {
        this.props.getCart(this.props.auth.token)
        this.props.dispatchGetAddress(this.props.auth.token)
        console.log('address',this.props.stateAddress)
    }

    onChangeText = (e) => {
        e.preventDefault()
        console.log(this.setState({ [e.target.name]: e.target.value }))
    }

    transaction = () => {
        this.props.dispatchTransaction(this.props.auth.token)
        this.setState({modalSummary: false})
        this.props.getCart(this.props.auth.token)
    }

    addAddress = (e) => {
        e.preventDefault()
        const { homeAddress, recepientsName, recepientsNumber, address, postalCode, city, modal } = this.state
        const data = {
            homeAddress,
            recepientsName,
            recepientsNumber,
            address,
            postalCode,
            city
        }
        this.props.dispatchAddAddress(this.props.auth.token, data)
        this.setState({ modalNewAddress: false, modalAddress: false })
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
                            <Col xs={12} sm={12} md={12} lg={12} className="shadow my-3" style={{height: 190}}>
                                <div className="p-3" style={{height: 190}}>
                                    {this.props.stateAddress.dataAddress?.length > 0
                                        ? (
                                            <>
                                                <h6 className="font-weight-bold">{this.props.stateAddress.dataAddress[0].recepients_name}</h6>
                                                <p>{`${this.props.stateAddress.dataAddress[0].address}, ${this.props.stateAddress.dataAddress[0].home_address}, ${this.props.stateAddress.dataAddress[0].postal_code} Indonesia`}</p>
                                                <Button onClick={() => this.setState({ modalAddress: true })} block className="rounded-pill mt-4" style={{ width: 200, backgroundColor: 'white', color: 'grey' }}>Choose another address</Button>
                                            </>
                                        ) : (

                                            <>
                                                <h6 className="font-weight-bold">Andreas Jane</h6>
                                                <p>Perumahan Sophia Lajunta, Wiradadi, Kec. Soekarja, Kab. Banyumas, Jawa Tengah, 51223 [Toko pedia note]</p>
                                                <Button onClick={() => this.setState({ modalAddress: true })} block className="rounded-pill mt-4" style={{ width: 200, backgroundColor: 'white', color: 'grey' }}>Choose another address</Button>
                                            </>
                                        )
                                    }
                                </div>
                            </Col>
                            {!isLoading && !isError && dataCart?.length > 0 && dataCart.map(o => (
                                <Col xs={12} sm={12} md={12} lg={12} className="shadow my-3" style={{height: 126}}>
                                    <Row className="align-items-center p-2 border justify-content-center align-items-center" style={{height: 126}}>
                                        <Col lg={2} md={2} sm={2} xs={2}>
                                            <div style={{width: 95, height: 70}}>
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}${o.picture}`} style={{ width: 180, height: 100 }} className="mr-1" style={{width: 70, height: 69}} />
                                            </div>
                                        </Col>
                                        <Col className="d-flex justify-content-between">
                                            <div className="">
                                                <h6 className="font-weight-bold">{o.item}</h6>
                                                <span className="text-muted">Zalora Clouth</span>
                                            </div>
                                            <div>
                                                <h6 className="font-weight-bold">Rp {numeral(o.price).format(0, 0).toString().replace(',', '.')}</h6>
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
                                        <h6>Rp {numeral(5000).format(0, 0).toString().replace(',', '.')}</h6>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span className="text-muted">Delivery</span>
                                        <h6>Rp {numeral(5000).format(0, 0).toString().replace(',', '.')}</h6>
                                    </div>
                                    <div className="border"></div>
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-bold">Shopping summary</h6>
                                        <h6 className="text-danger">Rp {numeral(total).format(0, 0).toString().replace(',', '.')}</h6>
                                    </div>
                                </div>
                                {/* <Link onClick={() => this.setState({ modal: true })}> */}
                                <Button onClick={() => this.setState({ modalSummary: true })} block className="rounded-pill mb-4" style={{backgroundColor: '#DB3022', color: 'white'}}>Shopping summary</Button>
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
                                {!this.props.stateAddress.isLoading && !this.props.stateAddress.isError && this.props.stateAddress.dataAddress?.length > 0 && this.props.stateAddress.dataAddress.map(o => (
                                    <Col lg={12} className="my-3">
                                        <div className="border p-3">
                                            <h6 className="font-weight-bold">{o.recepients_name}</h6>
                                            <div>
                                                <p className="text-muted">
                                                   {` ${o.address}, ${o.home_address}. ${o.city}, ${o.postal_code}`}
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
                                        <div>
                                            <img src={gopayImg} style={{width: 82, height: 50}} />
                                        </div>
                                    </Col>
                                    <Col className="font-weight-bold">Gopay</Col>
                                    <Col lg={1}>
                                        <Input type="checkbox" />
                                    </Col>
                                </Row>
                                <Row className="my-2">
                                    <Col>
                                        <img src={posIndonesiaImg} style={{width: 82, height: 50}} />
                                    </Col>
                                    <Col className="font-weight-bold">Pos Indonesia</Col>
                                    <Col lg={1}>
                                        <Input type="checkbox" />
                                    </Col>
                                </Row>
                                <Row className="my-2">
                                    <Col>
                                        <img src={mastercardImg} style={{width: 82, height: 50}} />
                                    </Col>
                                    <Col className="font-weight-bold">Mastercard</Col>
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
                                        <h6 className="font-weight-bold">Rp {numeral(5000).format(0, 0).toString().replace(',', '.')}</h6>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p className="text-muted">Delivery</p>
                                    </Col>
                                    <Col>
                                        <h6 className="font-weight-bold">Rp {numeral(5000).format(0, 0).toString().replace(',', '.')}</h6>
                                    </Col>
                                </Row>
                            </div>
                        </ModalBody>
                        <ModalFooter className="shadow-lg">
                            <Row className="w-100">
                                <Col>
                                    <Col><h6 className="font-weight-bold">Shopping summary</h6></Col>
                                    <Col><h6 className="font-weight-bold text-danger">Rp {numeral(total).format(0, 0).toString().replace(',', '.')}</h6></Col>
                                </Col>
                                <Col>
                                    <Button block className="rounded-pill" style={{backgroundColor: '#DB3022'}} onClick={() => this.transaction()}>Buy</Button>
                                </Col>
                            </Row>
                        </ModalFooter>
                    </Modal>

                    {/* modal Add address */}
                    <Modal isOpen={this.state.modalNewAddress} style={{ width: 1000 }}>
                        <ModalHeader><h4>Add new address</h4></ModalHeader>
                        <Form onSubmit={() => this.addAddress}>
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
                            <Button className="rounded-pill" onClick={() => this.setState({ modalNewAddress: false })} style={{width: 160, height: 36, backgroundColor: 'white', color: 'grey'}}>Cancle</Button>
                            <Button type="submit" className="rounded-pill" style={{width: 160, height: 36, backgroundColor: '#DB3022', color: 'white'}} >Save</Button>
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
    cart: state.cart,
    stateAddress: state.address,
})

const mapDispatchToProps = {
    getCart: cartActions.getCart,
    dispatchTransaction: checkoutAction.addTransaction,
    dispatchGetAddress: addressAction.getAddress,
    dispatchAddAddress: addressAction.addAddress,
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)