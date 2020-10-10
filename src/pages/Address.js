import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    Row, Col, Container,
    Button, Label, Input, Form, FormGroup
} from 'reactstrap'
import NavigationBar from '../component/NavigationBar'
import imgAccount from '../assets/images/user.png'
import imgShipping from '../assets/images/map.png'
import imgOrder from '../assets/images/myorder.png'
import imgProfile from '../assets/images/profil.png'
import FormAddress from '../component/FormAddress'


class Address extends Component {
    render() {
        return (
            <>
                <NavigationBar />
                <Row className="">
                    <Col md="3" lg="3" className="shadow vh-100 w-100 d-flex justify-content-between">
                        <div className="my-5 w-75 ml-5">
                            <div className="d-flex align-items-center my-3 justify-content-start">
                                <div className="mr-3">
                                    <img className="rounded-circle" src={imgProfile} />
                                </div>
                                <div>
                                    <span>Johanes Michael</span>
                                    <Link to="#" className="text-dark">
                                        <img /> <p>Edit Profile</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="d-flex align-items-center my-3 justify-content-start">
                                <Button className="rounded-circle mr-3"><img src={imgAccount} /></Button>
                                <Link to="/profile">
                                    <h6 className="text-dark">My Account</h6>
                                </Link>
                            </div>
                            <div className="d-flex align-items-center my-3 justify-content-start">
                                <Button className="rounded-circle mr-3"><img src={imgShipping} /></Button>
                                <Link to="/profile/address">
                                    <h6 className="text-dark">Shipping Address</h6>
                                </Link>
                            </div>
                            <div className="d-flex align-items-center my-3 justify-content-start">
                                <Button className="rounded-circle mr-3"><img src={imgOrder} /></Button>
                                <h6>My Order</h6>
                            </div>
                        </div>
                    </Col>
                    <Col className="shadow ml-3 mt-5 mb-5 border" lg={8} md={8} >
                        <FormAddress />
                    </Col>
                </Row>
            </>
        )
    }
}

// weaper pisang

export default Address