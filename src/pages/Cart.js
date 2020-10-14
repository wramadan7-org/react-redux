import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Container,
    Input, Button,
    Row, Col
} from 'reactstrap'
import NavigationBar from '../component/NavigationBar'
import imgJas from '../assets/images/jas.jpg'
import cartActions from '../redux/actions/cart'

class Cart extends Component {

    componentDidMount() {
        this.props.getCart(this.props.auth.token)
    }

    increase = (e) => {
        // const { dataCart } = this.props.cart
        // dataCart[e] = {
        //     ...this.props.cart[e],
        //     quantity: this.props.cart[e].quantity + 1
        // }
        // console.log(e)
        // console.log('ww', dataCart[e])
        console.log('tambah')
    }

    decrease = (e) => {
        console.log('kurang')
    }

    render() {
        const { isLoading, isError, dataCart, total, alertMsg } = this.props.cart
        // console.log('stat', this.state)
        // const { data } = this.state
        return (
            <div>
                <NavigationBar />
                <Container className="my-3">
                    <h1>My bag</h1>
                    <Row>
                        <Col md={8} sm={12} className="">
                            <Col xs={12} sm={12} md={12} lg={12} className="shadow my-3">
                                <div className="p-2 d-flex justify-content-between">
                                    <div className="d-flex align-self-center">
                                        <Input type="checkbox" />
                                        <h6 className="">Select all items </h6>
                                        <h6 className="ml-2 text-muted">(2 items selected)</h6>
                                    </div>
                                    <div className="">
                                        <p onClick={() => console.log('deleted')} className="text-danger">Deleted</p>
                                    </div>
                                </div>
                            </Col>

                            {!isLoading && !isError && dataCart.length !== 0 && dataCart.map(o => (
                                <Col xs={12} sm={12} md={12} lg={12} className="shadow my-3">
                                    <Row className="align-items-center p-2">
                                        <Col sm={4} md={4} lg={3} className="align-self-center">
                                            {/* <Input type="checkbox" name="check" /> */}
                                            <div className="d-flex align-items-center w-100 ">
                                                <Input type="checkbox" />
                                                <img src={imgJas} style={{ height: 70 }} className="w-75" />
                                            </div>
                                        </Col>
                                        <Col className="d-flex justify-content-between align-items-center">
                                            <div className="" style={{ width: 150 }}>
                                                <h6 className="font-weight-bold">{o.item}</h6>
                                                <span className="text-muted">Category</span>
                                            </div>
                                        </Col>
                                        <Col className="">
                                            <div className="text-right  w-75 align-items-center justify-content-between d-flex" style={{ width: 100 }}>
                                                <Button onClick={this.decrease} className="rounded-pill">-</Button>
                                                <p>{o.qty}</p>
                                                <Button onClick={this.increase} className="rounded-pill">+</Button>
                                            </div>
                                        </Col>
                                        <Col className="">
                                            <div className="text-right">
                                                <h6 className="font-weight-bold">{o.price}</h6>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            ))}
                        </Col>

                        <Col>
                            <div className="p-2  shadow ">
                                <Container>
                                    <div>
                                        <h6>Shopping summary</h6>
                                        <div className="d-flex justify-content-between">
                                            <p>Total price</p>
                                            <p>{total}</p>
                                        </div>
                                        <Button onClick={() => this.props.history.push('/checkout')} block className="rounded-pill">Buy</Button>
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
    auth: state.auth,
    cart: state.cart
})

// const mapDispatchToProps = dispatch => {
//     return {
//         getCart: () => dispatch(cartActions.getData)
//     }
// }

const mapDispatchToProps = {
    getCart: cartActions.getCart
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)