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
        console.log(this.props.cart)
    }


    render() {
        const { isLoading, isError, dataCart, total, alertMsg } = this.props.cart
        // console.log(this.props.cart)
        // console.log(this.props.auth.token)
        console.log(this.props.cart)
        return (
            <div>
                <NavigationBar />
                <Container className="mt-3">
                    <h1>Cart</h1>
                    <Row>
                        <Col md="8" sm="12" className="">
                            {!isLoading && !isError && dataCart.length !== 0 && dataCart.map(o => (

                                <Col className="shadow">
                                    <div className="w-100 mb-3 ">
                                        <div className="d-flex align-items-center mb-3 ">
                                            <Input type="checkbox" />
                                            <div className="d-flex ">
                                                <img src={imgJas} className="imgListCart" alt="imgCategory" />
                                            </div>
                                            <div className="d-flex align-items-center  justify-content-around w-100" style={{ height: 100 }}>
                                                <div className="border w-25">
                                                    <p className="font-weight-bold">{o.item}</p>
                                                    <p className="text-muted">Category</p>
                                                </div>
                                                <div className="align-items-center d-flex">
                                                    <Button className="rounded-pill">-</Button>
                                                    <p>{o.qty}</p>
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
                        </Col>

                        <Col>
                            <div className="w-auto shadow ">
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