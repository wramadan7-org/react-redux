import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    Container, Row, Col,
    Input, Modal, ModalHeader, ModalBody, ModalFooter,
    Button
} from 'reactstrap'

class FormAddress extends Component {
    state = {
        modal: false,

    }
    render() {
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
                                <div className="border">
                                    <div className="m-2">
                                        <h6 className="font-weight-bold">Andreas Jane</h6>
                                        <div>
                                            <p>Perumahan Sapphire Sjenayan jakarta lamongan</p>
                                        </div>
                                        <Link>
                                            <h6 className="text-danger">Change Address</h6>
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        </Container>
                    </div>
                </Container>
                <Modal isOpen={this.state.modal} style={{ width: 1000 }}>
                    <ModalHeader><h4>Add new address</h4></ModalHeader>
                    <ModalBody>
                        <Container>
                            <Row>
                                <Col>
                                    <div>
                                        <p className="text-muted">Save address as (ex:home address, official address)</p>
                                        <Input />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <p>Recipient's name</p>
                                        <Input />
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <p>Recepient's telephone number</p>
                                        <Input />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <p>Address</p>
                                        <Input />
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <p>Postal code</p>
                                        <Input />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <p>City or Subdistrict</p>
                                        <Input />
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
                        <Button onClick={() => this.setState({ modal: false })}>Save</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default FormAddress