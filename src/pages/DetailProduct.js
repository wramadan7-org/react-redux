import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import {
    Container,
    Row, Col,
    Button, Progress, Label
} from 'reactstrap'
import numeral from 'numeral'

import imgSpatu1 from '../assets/images/spatu1.jpg'
import imgSpatu2 from '../assets/images/spatu2.jpg'
import imgSpatu3 from '../assets/images/spatu3.jpg'
import imgSpatu4 from '../assets/images/spatu4.jpg'
import imgStar from '../assets/images/Star.png'

import NavigationBar from '../component/NavigationBar'
import ListProduct from '../pages/Item'
import cartActions from '../redux/actions/cart'
import { connect } from 'react-redux'
import itemActions from '../redux/actions/item'

class DetailProduct extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            size: 1,
            qty: 1
        }
        console.log('props detail', this.props)
    }

    addCart = (e) => {
        e.preventDefault()
        const { id, qty } = this.state
        // this.setState({ id_item: this.props.id_item })
        const data = {
            id_item: id,
            qty
        }
        // const {id_item} = this.props.auth
        console.log('oee', data)
        if (this.props.auth.token) {
            console.log('oetoken', this.props.auth.token)
            this.props.addCart(this.props.auth.token, data)
            this.props.history.push('/cart')
        } else {
            console.log('gagal')
            return (
                this.props.history.push('/login')
                // <Redirect to={{ pathname: '/login' }} />
            )
            // return <Redirect to={{ pathname: '/login', state: { alert: 'Login first!', color: 'danger' } }} />
            // this.props.history.push('/')
            // this.props.history.push('/login')
        }

        // console.log(data)
        // console.log(this.props.id_item)
        // this.props.history.push('/cart')
    }

    handlePlushSize = () => {
        this.setState({
            size: this.state.size + 1
        })
    }

    handlePlushQty = () => {
        this.setState({
            qty: this.state.qty + 1
        })
    }

    handleMinusSize = () => {
        this.setState({
            size: this.state.size - 1
        })
    }

    handleMinusQty = () => {
        this.setState({
            qty: this.state.qty - 1
        })
    }

    componentDidMount() {
        // console.log('ok', this.props.auth)
        // this.props.auth
        let id = this.props.match.params.id
        console.log('mount', this.state.id)
        this.props.getDetail(this.state.id)
    }

    componentDidUpdate(prevProps, nowPorps) {
        // this.props.match.params.id
        console.log('prev',prevProps)
        console.log('now', nowPorps)
        console.log(this.props.match.params.id)
        console.log('update', this.state.id)
        if (this.state.id !== this.props.match.params.id) {
            this.props.getDetail(this.props.match.params.id)
        }
    }


    render() {
        let buttonDisableSize = false
        let buttonDisableQty = false
        if (this.state.size === 0) {
            buttonDisableSize = true
        }
        if (this.state.qty === 0) {
            buttonDisableQty = true
        }
        const { isLoading, isError, dataItem, alertMsg } = this.props.detailProduct
        return (
            <div>
                <NavigationBar />
                {!isLoading && !isError && dataItem?.length !== 0 && (
                    <Container className="my-5">

                        <Row>
                            <Col sm={12} md={5} xs={6} className="align-items-center">
                                <div className="align-items-center justify-content-center">
                                    <img className=" align-self-center" src={`${process.env.REACT_APP_BACKEND_URL}${dataItem.picture}`} style={{width: 378, height: 378}} alt="productImg" />
                                </div>
                                <div className="align-items-center justify-content-between d-flex" style={{width: 378}}>
                                    <img className=" align-self-center" src={`${process.env.REACT_APP_BACKEND_URL}${dataItem.picture}`} style={{width: 65, height: 65}} alt="productImg" />
                                    <img className=" align-self-center" src={`${process.env.REACT_APP_BACKEND_URL}${dataItem.picture}`} style={{width: 65, height: 65}} alt="productImg" />
                                    <img className=" align-self-center" src={`${process.env.REACT_APP_BACKEND_URL}${dataItem.picture}`} style={{width: 65, height: 65}} alt="productImg" />
                                    <img className=" align-self-center" src={`${process.env.REACT_APP_BACKEND_URL}${dataItem.picture}`} style={{width: 65, height: 65}} alt="productImg" />
                                    <img className=" align-self-center" src={`${process.env.REACT_APP_BACKEND_URL}${dataItem.picture}`} style={{width: 65, height: 65}} alt="productImg" />
                                </div>
                                
                            </Col>
                            <Col className="">
                                <div>
                                    <h3 className="font-weight-bold">{dataItem.name}</h3>
                                    <h6 className="text-muted">{dataItem.category}</h6>
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
                                    <h6 className="text-muted">Price</h6>
                                    <h3 className="font-weight-bold">Rp {numeral(dataItem.price).format(0,0).toString().replace(',', '.')}</h3>
                                </div>
                                <div className="my-4">
                                    <h6 className="text-muted">Color</h6>
                                    <div className="d-flex justify-content-between" style={{width: 200}}>
                                        <div className="align-items-center justify-content-center" style={{width: 36, height: 36}}>
                                            <Button className="black rounded-circle mr-2" style={{ height: 36, width: 36, backgroundColor: 'black' }}></Button>
                                        </div>

                                        <div className="align-items-center justify-content-center" style={{width: 36, height: 36}}>
                                            <Button className="red rounded-circle mr-2" style={{ height: 36, width: 36, backgroundColor: '#D84242' }}></Button>
                                        </div>

                                        <div className="align-items-center justify-content-center" style={{width: 36, height: 36}}>
                                            <Button className="blue rounded-circle mr-2" style={{ height: 36, width: 36, backgroundColor: '#4290D8' }}></Button>
                                        </div>

                                        <div className="align-items-center justify-content-center" style={{width: 36, height: 36}}>
                                            <Button className="green rounded-circle mr-2" style={{ height: 36, width: 36, backgroundColor: '#42D86C' }}></Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex ">
                                    <div className="mr-5">
                                        <h6 className="text-muted">Size</h6>
                                        <div className="align-items-center d-flex  justify-content-between" style={{width: 120}}>
                                            <div className=" align-items-center justify-content-center" style={{width: 36, height: 36}}>
                                                <Button disabled={buttonDisableSize} onClick={this.handleMinusSize} className="rounded-circle" style={{width: 36, height: 36, backgroundColor: 'lightgrey', color: 'white'}} >-</Button>
                                            </div>
                                            <div className="align-items-center justify-content-between">
                                                <Label>{this.state.size}</Label>
                                            </div>
                                            <div className="align-items-center justify-content-center" style={{width: 36, height: 36}}>
                                                <Button onClick={this.handlePlushSize} className="rounded-circle" style={{width: 36, height: 36, backgroundColor: 'white', color: 'black'}} >+</Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 className="text-muted">Qty</h6>
                                        <div className="align-items-center d-flex justify-content-between" style={{width: 120}}>
                                            <div className="align-items-center justify-content-center">
                                                <Button disabled={buttonDisableQty} onClick={this.handleMinusQty} className="rounded-circle" style={{width: 36, height: 36, backgroundColor: 'lightgrey', color: 'white'}} >-</Button>
                                            </div>
                                            <div className="align-items-center justify-content-center">
                                                <Label>{this.state.qty}</Label>
                                            </div>
                                            <div className="align-items-center justify-content-center">
                                                <Button onClick={this.handlePlushQty} className="rounded-circle" style={{width: 36, height: 36, backgroundColor: 'white', color: 'black'}} >+</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex my-3 align-content-center justify-content-between" style={{width: 630, height: 48}}>
                                    <div style={{width: 160, height: 48}}>
                                        <Button block className="rounded-pill" style={{color: 'black', backgroundColor: 'white'}}>Chat</Button>
                                    </div>
                                    <div style={{width: 160, height: 48}}>
                                        {/* <Link to=""> */}
                                        <Button onClick={this.addCart} block className="rounded-pill" style={{color: 'black', backgroundColor: 'white'}}>Add bag</Button>
                                        {/* </Link> */}
                                    </div>
                                    <div style={{width: 343, height: 48}}>
                                        <Button block className="rounded-pill" style={{backgroundColor: '#DB3022'}}>Buy Now</Button>
                                    </div>
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
                                    <h5 className="text-danger">{dataItem.condition}</h5>
                                </div>
                                <div className="my-5">
                                    <h5 className="font-weight-bold">Description</h5>
                                    <p className="text-muted">{dataItem.description}</p>
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
                        < ListProduct />
                    </Container>
                )}
                {!isLoading && !isError && dataItem?.length === 0 && (
                    <div className="vh-100 justify-content-center align-items-center">
                        <h1>Don't have item</h1>
                    </div>
                )}
                {isLoading && !isError && (
                    <div className="vh-100 justify-content-center align-items-center">
                        <h1>Loading</h1>
                    </div>
                )}
                {isError && alertMsg !== '' && (
                    <div>
                        <h1>{alertMsg}</h1>
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    cart: state.cart,
    detailProduct: state.detailProduct
})

const mapDispatchToProps = {
    getDetail: itemActions.getDetail,
    addCart: cartActions.addCart
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct)