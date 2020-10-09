import React, { Component } from 'react'
import {
    Row, Col,
    Container
} from 'reactstrap'
import NavigationBar from '../component/NavigationBar'

class Profile extends Component {
    render() {
        return (
            <>
                <NavigationBar />
                <Container>
                    <Row className=" vh-100">
                        <Col md="3" sm="6" className=" shadow w-100 d-flex justify-content-between">
                            <Col className=""></Col>
                            <div>
                                <p>gambar1</p>
                                <p>gambar2</p>
                            </div>
                            <div>
                                <p>My Accound</p>
                                <p>Shipping Address</p>
                            </div>
                        </Col>
                        <Col className="shadow ml-3 mt-5 mb-5">
                            <p>Halaman</p>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Profile