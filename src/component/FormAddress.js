import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    Container, Row, Col,
    Input, Modal, ModalHeader, ModalBody, ModalFooter,
    Button, Form
} from 'reactstrap'

import addressActions from '../redux/actions/address'
import { connect } from 'react-redux'

class FormAddress extends Component {
    state = {
        modal: false,
        homeAddress: '',
        recepientsName: '',
        recepientsNumber: '',
        address: '',
        postalCode: '',
        city: ''
    }

    addAddress = (e) => {
        e.preventDefault()
        const { homeAddress, recepientsName, recepientsNumber, address, postalCode, city } = this.state
        const data = {
            homeAddress,
            recepientsName,
            recepientsNumber,
            address,
            postalCode,
            city
        }
        this.props.addAddress(this.props.auth.token, data)
    }

    onChangeText = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log({ [e.target.name]: e.target.value })
    }

    componentDidMount() {
        this.props.getAddress(this.props.auth.token)
    }

    componentDidUpdate() {
        // console.log(this.props.add)
    }

    render() {
        const { dataAddress, isLoading, isError, alertMsg } = this.props.address
        return (
            <div>
                <Container>
                    <div>
                        <h1 className="font-weight-bold">Choose another address</h1>
                        <p className="text-muted">Manage your shipping address</p>
                    </div>
                    <div className="border"></div>
                    <div className="d-flex my-5">
                        <Container>
                            <Col lg={12} md={10} className="align-items-center">
                                <Link onClick={() => this.setState({ modal: true })}>
                                    <div className="my-3 border" style={{ height: 100 }}>
                                        <h6 className="text-muted text-center mt-5">Add new address</h6>
                                    </div>
                                </Link>
                                {!isLoading && !isError && dataAddress !== 0 && dataAddress.map(o => (
                                    <div className="border shadow">
                                        <h6>{o.recepients_name}</h6>
                                    </div>

                                ))}
                            </Col>
                        </Container>
                    </div>
                </Container>
                <Modal isOpen={this.state.modal} style={{ width: 1000 }}>
                    <ModalHeader><h4>Add new address</h4></ModalHeader>
                    <Form onSubmit={this.addAddress}>
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
                            <Button onClick={() => this.setState({ modal: false })}>Cancle</Button>
                            <Button type="submit" >Save</Button>
                        </ModalFooter>
                    </Form>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    address: state.address
})

const mapDispatchToProps = {
    getAddress: addressActions.getAddress,
    addAddress: addressActions.addAddress
}

export default connect(mapStateToProps, mapDispatchToProps)(FormAddress)