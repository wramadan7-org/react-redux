import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Container,
    Input, Button,
    Row, Col
} from 'reactstrap'
import NavigationBar from '../component/NavigationBar'
import imgJas from '../assets/images/jas.jpg'
import cartActions from '../redux/actions/item'

class Cart extends Component {

    componentDidMount() {
        this.props.getCart()
    }


    render() {
        const { isLoading, isError, dataItem, alertMsg } = this.props.cart
        return (
            <div>
                <NavigationBar />
                <Container className="mt-3">
                    <h1>Cart</h1>
                    <h2>Action masih dari item</h2>
                    <Row>
                        <Col md="8" sm="12" className="">
                            {!isLoading && !isError && dataItem.length !== 0 && dataItem.map(o => (

                                <Col className="shadow">
                                    <div className="w-100 mb-3 ">
                                        <div className="d-flex align-items-center mb-3 ">
                                            <Input type="checkbox" />
                                            <div className="d-flex ">
                                                <img src={imgJas} className="imgListCart" alt="imgCategory" />
                                            </div>
                                            <div className="d-flex align-items-center  justify-content-around w-100" style={{ height: 100 }}>
                                                <div className="border w-25">
                                                    <p className="font-weight-bold">{o.name}</p>
                                                    <p className="text-muted">{o.category}</p>
                                                </div>
                                                <div className="align-items-center d-flex">
                                                    <Button className="rounded-pill">-</Button>
                                                    <p>12</p>
                                                    <Button className="rounded-pill">+</Button>
                                                </div>
                                                <div className="">
                                                    <p>{o.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                            {/* <Col className="d-flex shadow w-100" sm="12" md="12">
                                <div className="shadow w-100 mb-3">
                                    <div className="d-flex align-items-center mb-3">
                                        <Input type="checkbox" />
                                        <div className="d-flex mr-2">
                                            <img src={imgJas} className="imgListCart" alt="imgCategory" />
                                        </div>
                                        <div className="d-flex align-items-center" style={{ height: 100 }}>
                                            <div className="">
                                                <p className="font-weight-bold">Mens formal sui - Black</p>
                                                <p className="text-muted">Zalora Cloth</p>
                                            </div>
                                            <div className="align-items-center d-flex ">
                                                <Button className="rounded-pill ">-</Button>
                                                <p className="">12</p>
                                                <Button className="rounded-pill">+</Button>
                                            </div>
                                            <div className="align-items-end">
                                                <p>400000</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </Col> */}
                        </Col>


                        <Col>
                            <div className="w-auto shadow ">
                                <Container>
                                    <div>
                                        <h6>Shopping summary</h6>
                                        <div className="d-flex justify-content-between">
                                            <p>Total price</p>
                                            <p>40000</p>
                                        </div>
                                        <Button block className="rounded-pill">Buy</Button>
                                    </div>
                                </Container>
                            </div>
                        </Col>
                    </Row>
                    {isLoading && !isError && (
                        <div>Loading</div>
                    )}

                    {isError && alertMsg && (
                        <div>{alertMsg}</div>
                    )}
                </Container>
            </div >
        )
    }
}

const mapStateToProps = state => ({
    cart: state.item
})

// const mapDispatchToProps = dispatch => {
//     return {
//         getCart: () => dispatch(cartActions.getData)
//     }
// }

const mapDispatchToProps = {
    getCart: cartActions.getData
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)