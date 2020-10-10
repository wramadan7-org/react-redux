import React, { Component } from 'react'
import {
    Container, Col, Form, FormGroup,
    Input, Label, Button
} from 'reactstrap'
import imgLogo from '../assets/images/Logo.png'

class FormProfile extends Component {
    render() {
        return (
            <div className=" w-100">
                {/* <Col className=" mt-5 mb-5 w-100"> */}
                <Container>
                    <div>
                        <h1 className="font-weight-bold">My Profile</h1>
                        <p className="text-muted">Manage your profile information</p>
                    </div>
                    <div className="border"></div>
                    <div className="d-flex my-5">
                        <Col lg={8} md={7} className="">
                            <Form>
                                <FormGroup row>
                                    <Label for="forName" sm={4}>Name</Label>
                                    <Col sm={7}>
                                        <Input placeholder="Name" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="forEmail" sm={4}>Email</Label>
                                    <Col sm={7}>
                                        <Input placeholder="Email" type="email" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row className="">
                                    <Label for="forNumber" sm={4}>Phone number</Label>
                                    <Col sm={7} className="">
                                        <Input placeholder="Phone" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="forGender" sm={4}>Gender</Label>
                                    <Col sm={7} className="ml-1 d-flex">
                                        <Col sm={5}>
                                            <Input type="radio" name="male" />{' '} Male
                                                </Col>
                                        <Col>
                                            <Input type="radio" name="female" />{' '} Female
                                                </Col>
                                    </Col>
                                </FormGroup>
                                <FormGroup row className="">
                                    <Label for="forBirth" sm={4}>Date of birth</Label>
                                    <Col sm={7} className="d-flex">
                                        <Input className="mr-2" type="select">
                                            <option>1</option>
                                            <option>2</option>
                                        </Input>
                                        <Input className="mr-2" type="select">
                                            <option>Januari</option>
                                        </Input>
                                        <Input type="select">
                                            <option>2000</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm={4}></Label>
                                    <Col sm={7}>
                                        <Button className="rounded-pill">Save</Button>
                                    </Col>
                                </FormGroup>
                            </Form>

                        </Col>
                        <div className="row justify-content-center border-left h-25  w-100">
                            <div className="">
                                <img src={imgLogo} />
                                <Input type="button" className="rounded-pill my-3" value="Select image" />
                            </div>
                        </div>
                    </div>
                </Container>
                {/* </Col> */}
            </div>
        )
    }
}

export default FormProfile